'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { CircleCheck, CircleX } from 'lucide-react';
import { Random } from 'random-js';
import { IKanjiObj } from '@/store/useKanjiStore';
import { useCorrect, useError } from '@/lib/hooks/useAudio';
import { buttonBorderStyles } from '@/static/styles';
import GameIntel from '@/components/reusable/Game/GameIntel';
import { pickGameKeyMappings } from '@/lib/keyMappings';
import { useStopwatch } from 'react-timer-hook';
import useStats from '@/lib/hooks/useStats';
import useStatsStore from '@/store/useStatsStore';
import Stars from '@/components/reusable/Game/Stars';
import AnswerSummary from '@/components/reusable/Game/AnswerSummary';
import SSRAudioButton from '@/components/reusable/SSRAudioButton';
import FuriganaText from '@/components/reusable/FuriganaText';
import AnimatedCard from '@/components/reusable/AnimatedCard'; // ✅ Scroll animation wrapper

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
  const score = useStatsStore((state) => state.score);
  const setScore = useStatsStore((state) => state.setScore);
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

  // ✅ Ensure random selection happens only on client
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => setHasMounted(true), []);
  if (!hasMounted) return null;

  // 🎯 Random initial Kanji
  const [correctChar, setCorrectChar] = useState(
    isReverse
      ? selectedKanjiObjs[random.integer(0, selectedKanjiObjs.length - 1)].meanings[0]
      : selectedKanjiObjs[random.integer(0, selectedKanjiObjs.length - 1)].kanjiChar
  );

  const correctKanjiObj = (
    isReverse
      ? selectedKanjiObjs.find((obj) => obj.meanings[0] === correctChar)
      : selectedKanjiObjs.find((obj) => obj.kanjiChar === correctChar)
  )!;
  const [currentKanjiObj, setCurrentKanjiObj] = useState(correctKanjiObj);

  const targetChar = isReverse ? correctKanjiObj?.kanjiChar : correctKanjiObj?.meanings[0];

  // 🔁 Generate incorrect options
  const getIncorrectOptions = () => {
    if (!isReverse) {
      const incorrect = selectedKanjiObjs.filter((obj) => obj.kanjiChar !== correctChar);
      return incorrect.map((obj) => obj.meanings[0]).sort(() => random.real(0, 1) - 0.5).slice(0, 2);
    } else {
      const incorrect = selectedKanjiObjs.filter((obj) => obj.meanings[0] !== correctChar);
      return incorrect.map((obj) => obj.kanjiChar).sort(() => random.real(0, 1) - 0.5).slice(0, 2);
    }
  };

  const randomIncorrectOptions = getIncorrectOptions();
  const [shuffledOptions, setShuffledOptions] = useState(
    [targetChar, ...randomIncorrectOptions].sort(() => random.real(0, 1) - 0.5) as string[]
  );

  const [displayAnswerSummary, setDisplayAnswerSummary] = useState(false);
  const [feedback, setFeedback] = useState(<>{'feedback ~'}</>);
  const [wrongSelectedAnswers, setWrongSelectedAnswers] = useState<string[]>([]);
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // 🔁 Reshuffle on new question
  useEffect(() => {
    setShuffledOptions(
      [targetChar, ...getIncorrectOptions()].sort(() => random.real(0, 1) - 0.5) as string[]
    );
  }, [correctChar]);

  // 🎮 Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const index = pickGameKeyMappings[event.code];
      if (index !== undefined && index < shuffledOptions.length) {
        buttonRefs.current[index]?.click();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [shuffledOptions]);

  useEffect(() => {
    if (isHidden) speedStopwatch.pause();
  }, [isHidden]);

  // ✅ Handle answers
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
    setWrongSelectedAnswers((prev) => [...prev, selectedOption]);
    playErrorTwice();
    incrementCharacterScore(correctChar, 'wrong');
    incrementWrongAnswers();
    setScore(Math.max(score - 1, 0));
  };

  const generateNewCharacter = () => {
    const source = isReverse
      ? selectedKanjiObjs.map((obj) => obj.meanings[0])
      : selectedKanjiObjs.map((obj) => obj.kanjiChar);

    let newChar = source[random.integer(0, source.length - 1)];
    while (newChar === correctChar) {
      newChar = source[random.integer(0, source.length - 1)];
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

      {displayAnswerSummary ? (
        <AnswerSummary
          payload={currentKanjiObj}
          setDisplayAnswerSummary={setDisplayAnswerSummary}
          feedback={feedback}
        />
      ) : (
        <>
          {/* 🈶 Animated Kanji Display */}
          <AnimatedCard delay={0.1}>
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
                className="bg-[var(--card-color)] border-[var(--border-color)]"
              />
            </div>
          </AnimatedCard>

          {/* 🎴 Animated Option Buttons */}
          <div
            className={clsx(
              'flex w-full gap-5 md:gap-0 sm:justify-evenly',
              isReverse ? 'flex-row' : 'flex-col md:flex-row'
            )}
          >
            {shuffledOptions.map((option, i) => (
              <AnimatedCard key={option + i} delay={i * 0.08}>
                <motion.button
                  ref={(elem) => {
                    buttonRefs.current[i] = elem ?? null;
                  }}
                  type="button"
                  disabled={wrongSelectedAnswers.includes(option)}
                  className={clsx(
                    'text-4xl py-4 rounded-xl w-full md:w-1/4 xl:w-1/5 flex flex-row justify-center items-center gap-1.5',
                    buttonBorderStyles,
                    'text-[var(--border-color)]',
                    wrongSelectedAnswers.includes(option)
                      ? 'hover:bg-[var(--card-color)]'
                      : 'hover:scale-110 text-[var(--main-color)] hover:border-[var(--secondary-color)]'
                  )}
                  onClick={() => handleOptionClick(option)}
                  lang={isReverse ? 'ja' : undefined}
                >
                  <FuriganaText
                    text={option}
                    reading={
                      isReverse
                        ? selectedKanjiObjs.find((obj) => obj.kanjiChar === option)?.onyomi[0] ||
                          selectedKanjiObjs.find((obj) => obj.kanjiChar === option)?.kunyomi[0]
                        : undefined
                    }
                  />
                  <span
                    className={clsx(
                      'hidden lg:inline text-xs rounded-full bg-[var(--border-color)] px-1',
                      'text-[var(--secondary-color)]'
                    )}
                  >
                    {i + 1}
                  </span>
                </motion.button>
              </AnimatedCard>
            ))}
          </div>

          <Stars />
        </>
      )}
    </div>
  );
};

export default KanjiPickGame;

