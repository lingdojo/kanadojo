'use client';
import { useState, useEffect, useRef } from 'react';
import { HugeiconsIcon } from '@hugeicons/react';
import {
  CheckmarkCircle02Icon as CircleCheckIcon,
  CancelCircleIcon as CircleXIcon,
  ArrowRight01Icon as CircleArrowRightIcon,
} from '@hugeicons/core-free-icons';
import { Random } from 'random-js';
import clsx from 'clsx';
import { useClick, useCorrect, useError } from '@/hooks/useAudio';
import GameIntel from '@/components/reusable/Game/GameIntel';
import { buttonBorderStyles } from '@/static/styles';
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
import AnswerSummary from '@/components/reusable/Game/AnswerSummary';
import SSRAudioButton from '@/components/reusable/SSRAudioButton';
import { BaseGameProps } from './types';

const random = new Random();

function BaseInputGame<T>({
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

  const { playClick } = useClick();
  const { playCorrect } = useCorrect();
  const { playErrorTwice } = useError();

  const inputRef = useRef<HTMLInputElement>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const [inputValue, setInputValue] = useState('');

  const [currentItem, setCurrentItem] = useState<T | null>(
    items.length > 0 ? items[random.integer(0, items.length - 1)] : null
  );

  const displayChar = currentItem ? config.getDisplayChar(currentItem, isReverse) : '';
  const targetAnswer = currentItem ? config.getTargetAnswer(currentItem, isReverse) : '';

  const [displayAnswerSummary, setDisplayAnswerSummary] = useState(false);
  const [feedback, setFeedback] = useState(<>{'feedback ~'}</>);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const skipKey = config.getSkipKey?.(isReverse) || 'Ctrl+Space';

      if (skipKey === 'Ctrl+Space' && event.ctrlKey && event.code === 'Space') {
        buttonRef.current?.click();
      } else if (skipKey === ' ' && event.key === ' ') {
        buttonRef.current?.click();
      } else if (skipKey === '/' && event.key === '/') {
        buttonRef.current?.click();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isReverse]);

  useEffect(() => {
    if (isHidden) speedStopwatch.pause();
  }, [isHidden]);

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && inputValue.trim().length) {
      if (config.isAnswerCorrect(inputValue.trim(), targetAnswer, isReverse)) {
        if (config.shouldShowAnswerSummary) {
          setDisplayAnswerSummary(true);
        }
        handleCorrectAnswer(inputValue.trim());
      } else {
        handleWrongAnswer();
      }
    }
  };

  const handleCorrectAnswer = (userInput: string) => {
    speedStopwatch.pause();
    const responseTime = speedStopwatch.totalMilliseconds;
    addCorrectAnswerTime(responseTime / 1000);
    speedStopwatch.reset();
    playCorrect();
    addCharacterToHistory(displayChar);
    incrementCharacterScore(displayChar, 'correct');
    incrementCorrectAnswers();
    setScore(score + 1);

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

    setInputValue('');
    generateNewItem();
    setFeedback(
      <>
        <span className="text-[var(--muted-foreground)]">{`${displayChar} = ${userInput} `}</span>
        <HugeiconsIcon
          icon={CircleCheckIcon}
          color="currentColor"
          className="inline text-[var(--foreground)]"
        />
      </>
    );
  };

  const handleWrongAnswer = () => {
    setInputValue('');
    setFeedback(
      <>
        <span className="text-[var(--muted-foreground)]">{`${displayChar} ≠ ${inputValue.trim()} `}</span>
        <HugeiconsIcon
          icon={CircleXIcon}
          color="currentColor"
          className="inline text-[var(--foreground)]"
        />
      </>
    );
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

  const handleSkip = (e: React.MouseEvent<HTMLButtonElement>) => {
    playClick();
    e.currentTarget.blur();
    setInputValue('');
    generateNewItem();

    const displayTarget = Array.isArray(targetAnswer)
      ? targetAnswer[0]
      : targetAnswer;

    setFeedback(<>{`skipped ~ ${displayChar} = ${displayTarget}`}</>);
  };

  const gameMode = isReverse ? 'reverse input' : 'input';
  const displayCharLang = config.getDisplayCharLang?.(isReverse);
  const inputLang = config.getInputLang?.(isReverse);
  const textSize = config.getTextSize?.(isReverse) || 'text-8xl sm:text-9xl';
  const gapSize = config.getGapSize?.(isReverse) || 'gap-4 sm:gap-10';

  const answerSummaryPayload = config.shouldShowAnswerSummary && config.getAnswerSummaryPayload && currentItem
    ? config.getAnswerSummaryPayload(currentItem)
    : null;

  if (!currentItem || items.length === 0) {
    return null;
  }

  return (
    <div
      className={clsx(
        'flex flex-col items-center w-full sm:w-4/5',
        gapSize,
        isHidden ? 'hidden' : ''
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
                <p className={clsx(textSize, 'font-medium')} lang={displayCharLang}>
                  {displayChar}
                </p>
                <SSRAudioButton
                  text={displayChar}
                  variant="icon-only"
                  size="lg"
                  className="bg-[var(--card)] border-[var(--border)]"
                />
              </>
            )}
          </div>

          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            className={clsx(
              'border-b-2 pb-1 text-center focus:outline-none text-2xl lg:text-5xl',
              'border-[var(--card)] focus:border-[var(--border)]'
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
              'active:scale-95 md:active:scale-98 active:duration-200',
              'flex flex-row items-end gap-2',
              'text-[var(--muted-foreground)]'
            )}
            onClick={handleSkip}
          >
            <span>skip</span>
            <HugeiconsIcon icon={CircleArrowRightIcon} color="currentColor" />
          </button>

          <Stars />
        </>
      )}
    </div>
  );
}

export default BaseInputGame;
