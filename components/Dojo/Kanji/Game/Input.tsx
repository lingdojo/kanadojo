'use client';
import { useState, useEffect, useRef } from 'react';
import { CircleCheck, CircleX, CircleArrowRight } from 'lucide-react';
import { Random } from 'random-js';
import clsx from 'clsx';
import { IKanjiObj } from '@/store/useKanjiStore';
import { useClick, useCorrect, useError } from '@/hooks/useAudio';
import GameIntel from '@/components/reusable/Game/GameIntel';
import { buttonBorderStyles } from '@/static/styles';
import { useStopwatch } from 'react-timer-hook';
import useStats from '@/hooks/useStats';
import useStatsStore from '@/store/useStatsStore';
import Stars from '@/components/reusable/Game/Stars';
import AnswerSummary from '@/components/reusable/Game/AnswerSummary';
import SSRAudioButton from '@/components/reusable/SSRAudioButton';
import FuriganaText from '@/components/reusable/FuriganaText';

const random = new Random();

interface KanjiInputGameProps {
  selectedKanjiObjs: IKanjiObj[];
  isHidden: boolean;
  isReverse?: boolean;
}

const KanjiInputGame = ({
  selectedKanjiObjs,
  isHidden,
  isReverse = false,
}: KanjiInputGameProps) => {
  const score = useStatsStore(state => state.score);
  const setScore = useStatsStore(state => state.setScore);

  const speedStopwatch = useStopwatch({ autoStart: false });

  const {
    incrementCorrectAnswers,
    incrementWrongAnswers,
    addCharacterToHistory,
    addCorrectAnswerTime,
    incrementCharacterScore,
  } = useStats();

  const { playClick } = useClick();
  const { playCorrect } = useCorrect();
  const { playErrorTwice } = useError();

  const inputRef = useRef<HTMLInputElement>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const [inputValue, setInputValue] = useState('');

  // State management based on mode
  const [correctChar, setCorrectChar] = useState(
    isReverse
      ? selectedKanjiObjs[random.integer(0, selectedKanjiObjs.length - 1)]
          .meanings[0]
      : selectedKanjiObjs[random.integer(0, selectedKanjiObjs.length - 1)]
          .kanjiChar
  );

  // Find the target character/meaning based on mode
  const correctKanjiObj = (
    isReverse
      ? selectedKanjiObjs.find(obj => obj.meanings[0] === correctChar)
      : selectedKanjiObjs.find(obj => obj.kanjiChar === correctChar)
  )!;

  const [currentKanjiObj, setCurrentKanjiObj] = useState(correctKanjiObj);

  const targetChar = isReverse
    ? correctKanjiObj?.kanjiChar
    : correctKanjiObj?.meanings;

  const [displayAnswerSummary, setDisplayAnswerSummary] = useState(false);
  const [feedback, setFeedback] = useState(<>{'feedback ~'}</>);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.code === 'Space') {
        buttonRef.current?.click();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (isHidden) speedStopwatch.pause();
  }, [isHidden]);

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && inputValue.trim().length) {
      if (isInputCorrect(inputValue)) {
        setDisplayAnswerSummary(true);
        handleCorrectAnswer(inputValue);
      } else {
        handleWrongAnswer();
      }
    }
  };

  const isInputCorrect = (input: string): boolean => {
    if (!isReverse) {
      // Normal mode: input should match any of the meanings (case insensitive)
      return (
        Array.isArray(targetChar) &&
        targetChar.includes(input.trim().toLowerCase())
      );
    } else {
      // Reverse mode: input should match the exact kanji character
      return input.trim().toLowerCase() === targetChar;
    }
  };

  const handleCorrectAnswer = (userInput: string) => {
    speedStopwatch.pause();
    addCorrectAnswerTime(speedStopwatch.totalMilliseconds / 1000);
    speedStopwatch.reset();
    setCurrentKanjiObj(correctKanjiObj);

    playCorrect();
    addCharacterToHistory(correctChar);
    incrementCharacterScore(correctChar, 'correct');
    incrementCorrectAnswers();
    setScore(score + 1);

    setInputValue('');
    generateNewCharacter();
    setFeedback(
      <>
        <span className="text-[var(--secondary-color)]">{`${correctChar} = ${userInput
          .trim()
          .toLowerCase()} `}</span>
        <CircleCheck className="inline text-[var(--main-color)]" />
      </>
    );
  };

  const handleWrongAnswer = () => {
    setInputValue('');
    setFeedback(
      <>
        <span className="text-[var(--secondary-color)]">{`${correctChar} ≠ ${inputValue
          .trim()
          .toLowerCase()} `}</span>

        <CircleX className="inline text-[var(--main-color)]" />
      </>
    );
    playErrorTwice();

    incrementCharacterScore(correctChar, 'wrong');
    incrementWrongAnswers();
    if (score - 1 < 0) {
      setScore(0);
    } else {
      setScore(score - 1);
    }
  };

  const generateNewCharacter = () => {
    const sourceArray = isReverse
      ? selectedKanjiObjs.map(obj => obj.meanings[0])
      : selectedKanjiObjs.map(obj => obj.kanjiChar);

    let newChar = sourceArray[random.integer(0, sourceArray.length - 1)];
    while (newChar === correctChar) {
      newChar = sourceArray[random.integer(0, sourceArray.length - 1)];
    }
    setCorrectChar(newChar);
  };

  const handleSkip = (e: React.MouseEvent<HTMLButtonElement>) => {
    playClick();
    e.currentTarget.blur();
    setInputValue('');
    generateNewCharacter();

    const displayTarget = isReverse
      ? targetChar
      : Array.isArray(targetChar)
      ? targetChar[0]
      : targetChar;

    setFeedback(<>{`skipped ~ ${correctChar} = ${displayTarget}`}</>);
  };

  const gameMode = isReverse ? 'reverse input' : 'input';
  const displayCharLang = isReverse ? 'en' : 'ja';
  const inputLang = isReverse ? 'ja' : 'en';
  const textSize = isReverse ? 'text-6xl sm:text-8xl' : 'text-8xl sm:text-9xl';
  const gapSize = isReverse ? 'gap-6 sm:gap-10' : 'gap-4 sm:gap-10';

  return (
    <div
      className={clsx(
        'flex flex-col items-center w-full sm:w-4/5',
        gapSize,
        isHidden ? 'hidden' : ''
      )}
    >
      <GameIntel gameMode={gameMode} />
      {displayAnswerSummary && (
        <AnswerSummary
          payload={currentKanjiObj}
          setDisplayAnswerSummary={setDisplayAnswerSummary}
          feedback={feedback}
        />
      )}
      {!displayAnswerSummary && (
        <>
          <div className="flex flex-col items-center gap-4">
            <FuriganaText
              text={correctChar}
              reading={
                !isReverse
                  ? correctKanjiObj?.onyomi[0] || correctKanjiObj?.kunyomi[0]
                  : undefined
              }
              className={textSize}
              lang={displayCharLang}
            />
            <SSRAudioButton
              text={correctChar}
              variant="icon-only"
              size="lg"
              className="bg-[var(--card-color)] border-[var(--border-color)]"
            />
          </div>

          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            className={clsx(
              'border-b-2 pb-1 text-center focus:outline-none text-2xl lg:text-5xl',
              'border-[var(--card-color)] focus:border-[var(--border-color)]'
            )}
            onChange={e => setInputValue(e.target.value)}
            onKeyDown={handleEnter}
            lang={inputLang}
            autoFocus={!isReverse}
          />

          <button
            ref={buttonRef}
            className={clsx(
              'text-xl font-medium py-4 px-16 ',
              buttonBorderStyles,
              'active:scale-95 md:active:scale-98 active:duration-200',
              'flex flex-row items-end gap-2',
              'text-[var(--secondary-color)]'
            )}
            onClick={handleSkip}
          >
            <span>skip</span>
            <CircleArrowRight />
          </button>

          <Stars />
        </>
      )}
    </div>
  );
};

export default KanjiInputGame;
