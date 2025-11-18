'use client';
import { useState, useEffect, useRef } from 'react';
import { CircleCheck, CircleX, CircleArrowRight } from 'lucide-react';
import { Random } from 'random-js';
import clsx from 'clsx';
import { IVocabObj } from '@/store/useVocabStore';
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

interface VocabInputGameProps {
  selectedWordObjs: IVocabObj[];
  isHidden: boolean;
  isReverse?: boolean;
}

const VocabInputGame = ({
  selectedWordObjs,
  isHidden,
  isReverse = false,
}: VocabInputGameProps) => {
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
      ? selectedWordObjs[random.integer(0, selectedWordObjs.length - 1)]
          .meanings[0]
      : selectedWordObjs[random.integer(0, selectedWordObjs.length - 1)].word
  );

  // Find the target character/meaning based on mode
  const correctWordObj = (
    isReverse
      ? selectedWordObjs.find(obj => obj.meanings[0] === correctChar)
      : selectedWordObjs.find(obj => obj.word === correctChar)
  )!;

  const [currentWordObj, setCurrentWordObj] = useState(correctWordObj);

  const targetChar = isReverse
    ? correctWordObj?.word
    : correctWordObj?.meanings;

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
      if (isInputCorrect(inputValue.trim())) {
        handleCorrectAnswer(inputValue.trim());
        setDisplayAnswerSummary(true);
      } else {
        handleWrongAnswer();
      }
    }
  };

  const isInputCorrect = (input: string): boolean => {
    if (!isReverse) {
      // Normal mode: input should match any of the meanings (case insensitive)
      return (
        Array.isArray(targetChar) && targetChar.includes(input.toLowerCase())
      );
    } else {
      // Reverse mode: input should match the exact word
      return input === targetChar;
    }
  };

  const handleCorrectAnswer = (userInput: string) => {
    speedStopwatch.pause();
    addCorrectAnswerTime(speedStopwatch.totalMilliseconds / 1000);
    speedStopwatch.reset();
    setCurrentWordObj(correctWordObj);

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
      ? selectedWordObjs.map(obj => obj.meanings[0])
      : selectedWordObjs.map(obj => obj.word);

    let newChar = sourceArray[random.integer(0, sourceArray.length - 1)];
    while (newChar === correctChar) {
      newChar = sourceArray[random.integer(0, sourceArray.length - 1)];
    }
    setCorrectChar(newChar);
  };

  const handleSkip = (e: React.MouseEvent<HTMLButtonElement>) => {
    playClick();
    e.currentTarget.blur();
    setCurrentWordObj(correctWordObj);
    setDisplayAnswerSummary(true);
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
  const textSize = isReverse ? 'text-5xl sm:text-7xl' : 'text-5xl md:text-8xl';

  return (
    <div
      className={clsx(
        'flex flex-col gap-10 items-center w-full sm:w-4/5',
        isHidden ? 'hidden' : ''
      )}
    >
      <GameIntel gameMode={gameMode} />

      {displayAnswerSummary && (
        <AnswerSummary
          payload={currentWordObj}
          setDisplayAnswerSummary={setDisplayAnswerSummary}
          feedback={feedback}
        />
      )}
      {!displayAnswerSummary && (
        <>
          <div className="flex flex-col items-center gap-4">
            <FuriganaText
              text={correctChar}
              reading={!isReverse ? correctWordObj?.reading : undefined}
              className={clsx(textSize, 'text-center')}
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
          />

          <button
            ref={buttonRef}
            className={clsx(
              'text-xl font-medium py-4 px-16',
              buttonBorderStyles,
              'flex flex-row items-end gap-2',
              'active:scale-95 md:active:scale-98 active:duration-225',
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

export default VocabInputGame;
