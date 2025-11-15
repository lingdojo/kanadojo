'use client';
import clsx from 'clsx';
import { useState, useEffect, useRef } from 'react';
import { HugeiconsIcon } from '@hugeicons/react';
import {
  CheckmarkCircle02Icon as CircleCheckIcon,
  CancelCircleIcon as CircleXIcon,
} from '@hugeicons/core-free-icons';
import { Random } from 'random-js';
import { useCorrect, useError } from '@/hooks/useAudio';
import GameIntel from '@/components/reusable/Game/GameIntel';
import { buttonBorderStyles } from '@/static/styles';
import { pickGameKeyMappings } from '@/lib/keyMappings';
import { useStopwatch } from 'react-timer-hook';
import useStats from '@/hooks/useStats';
import useStatsStore from '@/store/useStatsStore';
import Stars from '@/components/reusable/Game/Stars';
import AnswerSummary from '@/components/reusable/Game/AnswerSummary';
import SSRAudioButton from '@/components/reusable/SSRAudioButton';
import { BaseGameProps } from './types';

const random = new Random();

function BasePickGame<T>({
  items,
  config,
  isHidden,
  isReverse = false,
}: BaseGameProps<T>) {
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

  const [currentItem, setCurrentItem] = useState(
    items[random.integer(0, items.length - 1)]
  );

  const displayChar = config.getDisplayChar(currentItem, isReverse);
  const targetAnswer = config.getTargetAnswer(currentItem, isReverse);

  const incorrectOptions = config.getIncorrectOptions(
    items,
    currentItem,
    isReverse,
    2
  );

  const targetString = Array.isArray(targetAnswer)
    ? targetAnswer[0]
    : targetAnswer;

  const [shuffledOptions, setShuffledOptions] = useState(
    [targetString, ...incorrectOptions].sort(() => random.real(0, 1) - 0.5)
  );

  const [displayAnswerSummary, setDisplayAnswerSummary] = useState(false);
  const [feedback, setFeedback] = useState(<>{'feedback ~'}</>);
  const [wrongSelectedAnswers, setWrongSelectedAnswers] = useState<string[]>(
    []
  );

  useEffect(() => {
    const newIncorrectOptions = config.getIncorrectOptions(
      items,
      currentItem,
      isReverse,
      2
    );
    const newTargetString = Array.isArray(targetAnswer)
      ? targetAnswer[0]
      : targetAnswer;
    setShuffledOptions(
      [newTargetString, ...newIncorrectOptions].sort(
        () => random.real(0, 1) - 0.5
      )
    );
    if (isReverse) {
      speedStopwatch.start();
    }
  }, [currentItem]);

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
  }, [shuffledOptions.length]);

  useEffect(() => {
    if (isHidden) speedStopwatch.pause();
  }, [isHidden]);

  const handleOptionClick = (selectedOption: string) => {
    if (config.isAnswerCorrect(selectedOption, targetAnswer, isReverse)) {
      if (config.shouldShowAnswerSummary) {
        setDisplayAnswerSummary(true);
      }
      handleCorrectAnswer();
      generateNewItem();
      setFeedback(
        <>
          <span className="text-[var(--muted-foreground)]">{`${displayChar} = ${selectedOption} `}</span>
          <HugeiconsIcon
            icon={CircleCheckIcon}
            color="currentColor"
            className="inline text-[var(--foreground)]"
          />
        </>
      );
    } else {
      handleWrongAnswer(selectedOption);
      setFeedback(
        <>
          <span className="text-[var(--muted-foreground)]">{`${displayChar} ≠ ${selectedOption} `}</span>
          <HugeiconsIcon
            icon={CircleXIcon}
            color="currentColor"
            className="inline text-[var(--foreground)]"
          />
        </>
      );
    }
  };

  const handleCorrectAnswer = () => {
    speedStopwatch.pause();
    addCorrectAnswerTime(speedStopwatch.totalMilliseconds / 1000);
    speedStopwatch.reset();
    playCorrect();
    addCharacterToHistory(displayChar);
    incrementCharacterScore(displayChar, 'correct');
    incrementCorrectAnswers();
    setScore(score + 1);
    setWrongSelectedAnswers([]);
  };

  const handleWrongAnswer = (selectedOption: string) => {
    setWrongSelectedAnswers([...wrongSelectedAnswers, selectedOption]);
    playErrorTwice();
    incrementCharacterScore(displayChar, 'wrong');
    incrementWrongAnswers();
    if (score - 1 < 0) {
      setScore(0);
    } else {
      setScore(score - 1);
    }
  };

  const generateNewItem = () => {
    let newItem = items[random.integer(0, items.length - 1)];
    while (newItem === currentItem) {
      newItem = items[random.integer(0, items.length - 1)];
    }
    setCurrentItem(newItem);
  };

  const gameMode = isReverse ? 'reverse pick' : 'pick';
  const displayCharLang = config.getDisplayCharLang?.(isReverse);
  const layoutDirection = config.getLayoutDirection?.(isReverse) || 'flex-row';

  const answerSummaryPayload = config.shouldShowAnswerSummary && config.getAnswerSummaryPayload
    ? config.getAnswerSummaryPayload(currentItem)
    : null;

  return (
    <div
      className={clsx(
        'flex flex-col gap-4 sm:gap-8 items-center w-full sm:w-4/5',
        isHidden ? 'hidden' : '',
        !isReverse && 'max-md:pb-12'
      )}
    >
      <GameIntel gameMode={gameMode} />
      {displayAnswerSummary && answerSummaryPayload && (
        <AnswerSummary
          payload={answerSummaryPayload}
          setDisplayAnswerSummary={setDisplayAnswerSummary}
          feedback={feedback}
        />
      )}

      {!displayAnswerSummary && (
        <>
          <div className="flex flex-col items-center gap-4">
            {config.renderDisplayChar ? (
              config.renderDisplayChar(displayChar, currentItem, isReverse)
            ) : (
              <>
                <p
                  className="text-8xl sm:text-9xl font-medium"
                  lang={displayCharLang}
                >
                  {displayChar}
                </p>
                <SSRAudioButton
                  text={displayChar}
                  variant="icon-only"
                  size="lg"
                  className="bg-[var(--card)] text-[var(--muted-foreground)]"
                />
              </>
            )}
          </div>

          <div
            className={clsx(
              'flex w-full gap-5 md:gap-0 sm:justify-evenly',
              layoutDirection
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
                  'text-4xl md:text-5xl py-4 rounded-xl w-full md:w-1/4 xl:w-1/5 flex flex-row justify-center items-center gap-1.5',
                  buttonBorderStyles,
                  'text-[var(--border)]',
                  wrongSelectedAnswers.includes(option) && 'hover:bg-[var(--card)]',
                  !wrongSelectedAnswers.includes(option) &&
                    'text-[var(--foreground)]'
                )}
                onClick={() => handleOptionClick(option)}
              >
                {config.renderOption ? (
                  config.renderOption(option, items, isReverse)
                ) : (
                  <span>{option}</span>
                )}
                <span
                  className={clsx(
                    'hidden lg:inline text-xs rounded-full bg-[var(--border)] px-1',
                    wrongSelectedAnswers.includes(option)
                      ? 'text-[var(--border)]'
                      : 'text-[var(--muted-foreground)]'
                  )}
                >
                  {i + 1}
                </span>
              </button>
            ))}
          </div>

          <Stars />
        </>
      )}
    </div>
  );
}

export default BasePickGame;
