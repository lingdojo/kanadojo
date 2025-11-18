'use client';
import clsx from 'clsx';
import { useState, useEffect, useRef } from 'react';
import { CircleCheck, CircleX } from 'lucide-react';
import { Random } from 'random-js';
import { IKanjiObj } from '@/store/useKanjiStore';
import { useCorrect, useError } from '@/hooks/useAudio';
import { buttonBorderStyles } from '@/static/styles';
import GameIntel from '@/components/reusable/Game/GameIntel';
import { pickGameKeyMappings } from '@/lib/keyMappings';
import { useStopwatch } from 'react-timer-hook';
import useStats from '@/hooks/useStats';
import useStatsStore from '@/store/useStatsStore';
import Stars from '@/components/reusable/Game/Stars';
import AnswerSummary from '@/components/reusable/Game/AnswerSummary';
import SSRAudioButton from '@/components/reusable/SSRAudioButton';
import FuriganaText from '@/components/reusable/FuriganaText';

const random = new Random();

interface KanjiPickGameProps {
  selectedKanjiObjs: IKanjiObj[];
  isHidden: boolean;
  isReverse?: boolean;
}

const KanjiPickGame = ({
  selectedKanjiObjs,
  isHidden,
  isReverse = false,
}: KanjiPickGameProps) => {
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

  const { playCorrect } = useCorrect();
  const { playErrorTwice } = useError();

  // State management based on mode
  const [correctChar, setCorrectChar] = useState(
    isReverse
      ? selectedKanjiObjs[random.integer(0, selectedKanjiObjs.length - 1)]
          .meanings[0]
      : selectedKanjiObjs[random.integer(0, selectedKanjiObjs.length - 1)]
          .kanjiChar
  );

  // Find the correct object based on the current mode
  const correctKanjiObj = (
    isReverse
      ? selectedKanjiObjs.find(obj => obj.meanings[0] === correctChar)
      : selectedKanjiObjs.find(obj => obj.kanjiChar === correctChar)
  )!;

  const [currentKanjiObj, setCurrentKanjiObj] = useState(correctKanjiObj);

  const targetChar = isReverse
    ? correctKanjiObj?.kanjiChar
    : correctKanjiObj?.meanings[0];

  // Get incorrect options based on mode
  const getIncorrectOptions = () => {
    if (!isReverse) {
      const incorrectKanjiObjs = selectedKanjiObjs.filter(
        currentKanjiObj => currentKanjiObj.kanjiChar !== correctChar
      );
      return incorrectKanjiObjs
        .map(obj => obj.meanings[0])
        .sort(() => random.real(0, 1) - 0.5)
        .slice(0, 2);
    } else {
      const incorrectKanjiObjs = selectedKanjiObjs.filter(
        currentKanjiObj => currentKanjiObj.meanings[0] !== correctChar
      );
      return incorrectKanjiObjs
        .map(obj => obj.kanjiChar)
        .sort(() => random.real(0, 1) - 0.5)
        .slice(0, 2);
    }
  };

  const randomIncorrectOptions = getIncorrectOptions();

  const [shuffledOptions, setShuffledOptions] = useState(
    [targetChar, ...randomIncorrectOptions].sort(
      () => random.real(0, 1) - 0.5
    ) as string[]
  );

  const [displayAnswerSummary, setDisplayAnswerSummary] = useState(false);
  const [feedback, setFeedback] = useState(<>{'feedback ~'}</>);
  const [wrongSelectedAnswers, setWrongSelectedAnswers] = useState<string[]>(
    []
  );

  useEffect(() => {
    setShuffledOptions(
      [targetChar, ...getIncorrectOptions()].sort(
        () => random.real(0, 1) - 0.5
      ) as string[]
    );
  }, [correctChar]);

  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const index = pickGameKeyMappings[event.code];
      if (index !== undefined && index < shuffledOptions.length) {
        buttonRefs.current[index]?.click();
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

  const handleOptionClick = (selectedOption: string) => {
    if (selectedOption === targetChar) {
      setDisplayAnswerSummary(true);
      handleCorrectAnswer();
      generateNewCharacter();
      setFeedback(
        <>
          <span className="text-[var(--secondary-color)]">{`${correctChar} = ${selectedOption} `}</span>
          <CircleCheck className="inline text-[var(--main-color)]" />
        </>
      );
    } else {
      handleWrongAnswer(selectedOption);
      setFeedback(
        <>
          <span className="text-[var(--secondary-color)]">{`${correctChar} ≠ ${selectedOption} `}</span>
          <CircleX className="inline text-[var(--main-color)]" />
        </>
      );
    }
  };

  const handleCorrectAnswer = () => {
    speedStopwatch.pause();
    addCorrectAnswerTime(speedStopwatch.totalMilliseconds / 1000);
    speedStopwatch.reset();
    playCorrect();
    setCurrentKanjiObj(correctKanjiObj);

    addCharacterToHistory(correctChar);
    incrementCharacterScore(correctChar, 'correct');
    incrementCorrectAnswers();
    setScore(score + 1);
    setWrongSelectedAnswers([]);
  };

  const handleWrongAnswer = (selectedOption: string) => {
    setWrongSelectedAnswers([...wrongSelectedAnswers, selectedOption]);
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

  const gameMode = isReverse ? 'reverse pick' : 'pick';
  const displayCharLang = isReverse ? undefined : 'ja';

  return (
    <div
      className={clsx(
        'flex flex-col gap-4 sm:gap-8 items-center w-full sm:w-4/5',
        isHidden ? 'hidden' : '',
        !isReverse && 'max-md:pb-12'
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
              className={clsx(isReverse ? 'text-6xl md:text-8xl' : 'text-9xl')}
              lang={displayCharLang}
            />
            <SSRAudioButton
              text={correctChar}
              variant="icon-only"
              size="lg"
              className="bg-[var(--card-color)] text-[var(--secondary-color)]"
            />
          </div>

          <div
            className={clsx(
              'flex w-full gap-5 md:gap-0 sm:justify-evenly',
              isReverse ? 'flex-row' : 'flex-col md:flex-row'
            )}
          >
            {shuffledOptions.map((option, i) => (
              <button
                ref={elem => {
                  buttonRefs.current[i] = elem;
                }}
                key={option + i}
                type="button"
                disabled={wrongSelectedAnswers.includes(option)}
                className={clsx(
                  'text-4xl py-4 rounded-xl w-full md:w-1/4 xl:w-1/5 flex flex-row justify-center items-center gap-1.5',
                  buttonBorderStyles,
                  'text-[var(--border-color)]',
                  wrongSelectedAnswers.includes(option) &&
                    'hover:bg-[var(--card-color)]',
                  !wrongSelectedAnswers.includes(option) &&
                    'text-[var(--main-color)]'
                )}
                onClick={() => handleOptionClick(option)}
                lang={isReverse ? 'ja' : undefined}
              >
                <FuriganaText
                  text={option}
                  reading={
                    isReverse
                      ? selectedKanjiObjs.find(obj => obj.kanjiChar === option)
                          ?.onyomi[0] ||
                        selectedKanjiObjs.find(obj => obj.kanjiChar === option)
                          ?.kunyomi[0]
                      : undefined
                  }
                />
                <span
                  className={clsx(
                    'hidden lg:inline text-xs rounded-full bg-[var(--border-color)] px-1',
                    wrongSelectedAnswers.includes(option)
                      ? 'text-[var(--border-color)]'
                      : 'text-[var(--secondary-color)]'
                  )}
                >
                  {i + 1 === 1 ? '1' : i + 1 === 2 ? '2' : '3'}
                </span>
              </button>
            ))}
          </div>

          <Stars />
        </>
      )}
    </div>
  );
};

export default KanjiPickGame;
