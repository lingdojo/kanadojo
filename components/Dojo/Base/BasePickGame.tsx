'use client';
import clsx from 'clsx';
import { useState, useEffect, useRef } from 'react';
import { HugeiconsIcon } from '@hugeicons/react';
import {
  CheckmarkCircle02Icon as CircleCheckIcon,
  CancelCircleIcon as CircleXIcon,
  Tick02Icon as CheckIcon,
  ArrowRight01Icon as ArrowRightIcon,
} from '@hugeicons/core-free-icons';
import { Random } from 'random-js';
import { useCorrect, useError } from '@/hooks/useAudio';
import { buttonBorderStyles } from '@/static/styles';
import { pickGameKeyMappings } from '@/lib/keyMappings';
import { useStopwatch } from 'react-timer-hook';
import useStats from '@/hooks/useStats';
import useStatsStore from '@/store/useStatsStore';
import useSRSStore from '@/store/useSRSStore';
import { Grade, ContentType } from '@/lib/interfaces';
import { determineGrade } from '@/lib/srsAlgorithm';

// Helper to detect content type from character
function detectContentType(character: string): ContentType {
  const hiraganaRange = /[\u3040-\u309F]/;
  const katakanaRange = /[\u30A0-\u30FF]/;
  const kanjiRange = /[\u4E00-\u9FAF]/;

  if (hiraganaRange.test(character)) return 'hiragana';
  if (katakanaRange.test(character)) return 'katakana';
  if (kanjiRange.test(character)) return 'kanji';
  return 'vocabulary';
}
import Stars from '@/components/reusable/Game/Stars';
import SSRAudioButton from '@/components/reusable/SSRAudioButton';
import { BaseGameProps } from './types';
import { Button } from '@/components/ui/button';

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

  const [currentItem, setCurrentItem] = useState<T | null>(
    items.length > 0 ? items[random.integer(0, items.length - 1)] : null
  );

  const displayChar = currentItem ? config.getDisplayChar(currentItem, isReverse) : '';
  const targetAnswer = currentItem ? config.getTargetAnswer(currentItem, isReverse) : '';

  const incorrectOptions = currentItem ? config.getIncorrectOptions(
    items,
    currentItem,
    isReverse,
    2
  ) : [];

  const targetString = Array.isArray(targetAnswer)
    ? targetAnswer[0]
    : targetAnswer;

  const [shuffledOptions, setShuffledOptions] = useState(
    targetString ? [targetString, ...incorrectOptions].sort(() => random.real(0, 1) - 0.5) : []
  );

  const [feedback, setFeedback] = useState(<>{'feedback ~'}</>);
  const [wrongSelectedAnswers, setWrongSelectedAnswers] = useState<string[]>(
    []
  );
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  useEffect(() => {
    if (!currentItem) return;

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
      // Handle Enter key
      if (event.code === 'Enter') {
        if (isSubmitted) {
          handleContinue();
        } else if (selectedOption) {
          handleSubmit();
        }
        return;
      }

      const index = pickGameKeyMappings[event.code];
      if (index !== undefined && index < shuffledOptions.length && !isSubmitted) {
        buttonRefs.current[index]?.click();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [shuffledOptions.length, selectedOption, isSubmitted]);

  useEffect(() => {
    if (isHidden) speedStopwatch.pause();
  }, [isHidden]);

  const handleOptionClick = (option: string) => {
    if (!wrongSelectedAnswers.includes(option) && !isSubmitted) {
      setSelectedOption(option);
    }
  };

  const handleSubmit = () => {
    if (!selectedOption || isSubmitted) return;

    const correct = config.isAnswerCorrect(selectedOption, targetAnswer, isReverse);
    setIsCorrect(correct);
    setIsSubmitted(true);

    if (correct) {
      handleCorrectAnswer();
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

  const handleContinue = () => {
    generateNewItem();
    setSelectedOption(null);
    setIsSubmitted(false);
    setIsCorrect(false);
  };

  const handleCorrectAnswer = () => {
    speedStopwatch.pause();
    const responseTime = speedStopwatch.totalMilliseconds;
    addCorrectAnswerTime(responseTime / 1000);
    speedStopwatch.reset();
    playCorrect();
    addCharacterToHistory(displayChar);
    incrementCharacterScore(displayChar, 'correct');
    incrementCorrectAnswers();
    setScore(score + 1);
    setWrongSelectedAnswers([]);

    // SRS tracking
    if (config.getCharacter && currentItem) {
      const srsStore = useSRSStore.getState();
      if (srsStore.srsEnabled) {
        const character = config.getCharacter(currentItem);
        const contentType = config.contentType || detectContentType(character);
        const card = srsStore.getOrCreateCard(character, contentType);
        const grade = determineGrade(true, responseTime, card.averageResponseTime);
        srsStore.updateCard(card.id, grade, responseTime);
      }
    }
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

    // SRS tracking
    if (config.getCharacter && currentItem) {
      const srsStore = useSRSStore.getState();
      if (srsStore.srsEnabled) {
        const character = config.getCharacter(currentItem);
        const contentType = config.contentType || detectContentType(character);
        const card = srsStore.getOrCreateCard(character, contentType);
        srsStore.updateCard(card.id, Grade.AGAIN, 0);
      }
    }
  };

  const generateNewItem = () => {
    if (items.length === 0) return;
    let newItem = items[random.integer(0, items.length - 1)];
    while (newItem === currentItem && items.length > 1) {
      newItem = items[random.integer(0, items.length - 1)];
    }
    setCurrentItem(newItem);
  };

  const displayCharLang = config.getDisplayCharLang?.(isReverse);
  const layoutDirection = config.getLayoutDirection?.(isReverse) || 'flex-row';

  if (!currentItem || items.length === 0) {
    return null;
  }

  return (
    <div
      className={clsx(
        'flex flex-col gap-4 sm:gap-8 items-center w-full sm:w-4/5 pb-32',
        isHidden ? 'hidden' : ''
      )}
    >
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
                  wrongSelectedAnswers.includes(option) && 'text-[var(--border)] hover:bg-[var(--card)]',
                  !wrongSelectedAnswers.includes(option) && !isSubmitted &&
                    'text-[var(--foreground)]',
                  selectedOption === option && !isSubmitted && 'bg-[var(--card)] border-[var(--foreground)] border-2',
                  isSubmitted && selectedOption === option && isCorrect && 'bg-[var(--chart-1)] border-[var(--chart-1)] text-[var(--background)]',
                  isSubmitted && selectedOption === option && !isCorrect && 'bg-[var(--chart-5)] border-[var(--chart-5)] text-[var(--background)]'
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

      {/* Fixed Footer with Feedback and Submit/Continue Button */}
      {selectedOption && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 w-full max-w-4xl px-4">
          <div className="flex items-center justify-between gap-4 bg-[var(--card)] border border-[var(--border)] rounded-2xl p-4">
            {/* Feedback on the left */}
            <div className="flex-1 text-xl">
              {isSubmitted && feedback}
            </div>

            {/* Submit/Continue button on the right */}
            <Button
              onClick={isSubmitted ? handleContinue : handleSubmit}
              size="lg"
            >
              <HugeiconsIcon icon={isSubmitted ? ArrowRightIcon : CheckIcon} size={20} />
              {isSubmitted ? 'Continue' : 'Submit'}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default BasePickGame;
