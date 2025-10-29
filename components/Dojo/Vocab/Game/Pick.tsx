'use client';

import clsx from 'clsx';
import { motion, easeOut, type Variants } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { CircleCheck, CircleX } from 'lucide-react';
import { Random } from 'random-js';
import type { IWordObj } from '@/store/useVocabStore';
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

const random = new Random();

interface VocabPickGameProps {
  selectedVocabObjs: IWordObj[];
  isHidden: boolean;
  isReverse?: boolean;
}

const VocabPickGame = ({
  selectedVocabObjs,
  isHidden,
  isReverse = false,
}: VocabPickGameProps) => {
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

  // --- Stable initial render to avoid hydration mismatch ---
  const [isClient, setIsClient] = useState(false);
  const [correctChar, setCorrectChar] = useState<string | null>(null);
  const [currentVocabObj, setCurrentVocabObj] = useState<IWordObj | null>(null);
  const [shuffledOptions, setShuffledOptions] = useState<string[]>([]);
  const [displayAnswerSummary, setDisplayAnswerSummary] = useState(false);
  const [feedback, setFeedback] = useState(<>{'feedback ~'}</>);
  const [wrongSelectedAnswers, setWrongSelectedAnswers] = useState<string[]>([]);
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Initialize only after client hydration
  useEffect(() => {
    if (isClient && selectedVocabObjs.length > 0) {
      const initChar = isReverse
        ? selectedVocabObjs[random.integer(0, selectedVocabObjs.length - 1)].meanings[0]
        : selectedVocabObjs[random.integer(0, selectedVocabObjs.length - 1)].word;

      const correctObj = isReverse
        ? selectedVocabObjs.find((obj) => obj.meanings[0] === initChar)
        : selectedVocabObjs.find((obj) => obj.word === initChar);

      if (correctObj) {
        setCorrectChar(initChar);
        setCurrentVocabObj(correctObj);
      }
    }
  }, [isClient, selectedVocabObjs, isReverse]);

  const getIncorrectOptions = () => {
    if (!correctChar) return [];
    if (!isReverse) {
      const incorrect = selectedVocabObjs.filter((obj) => obj.word !== correctChar);
      return incorrect
        .map((obj) => obj.meanings[0])
        .sort(() => random.real(0, 1) - 0.5)
        .slice(0, 2);
    } else {
      const incorrect = selectedVocabObjs.filter((obj) => obj.meanings[0] !== correctChar);
      return incorrect
        .map((obj) => obj.word)
        .sort(() => random.real(0, 1) - 0.5)
        .slice(0, 2);
    }
  };

  useEffect(() => {
    if (correctChar && currentVocabObj) {
      const targetChar = isReverse ? currentVocabObj.word : currentVocabObj.meanings[0];
      setShuffledOptions(
        [targetChar, ...getIncorrectOptions()].sort(() => random.real(0, 1) - 0.5) as string[]
      );
    }
  }, [correctChar, currentVocabObj]);

  useEffect(() => {
    if (isHidden) speedStopwatch.pause();
  }, [isHidden]);

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

  const handleOptionClick = (selectedOption: string) => {
    if (!correctChar || !currentVocabObj) return;
    const targetChar = isReverse ? currentVocabObj.word : currentVocabObj.meanings[0];

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
    if (correctChar) {
      addCharacterToHistory(correctChar);
      incrementCharacterScore(correctChar, 'correct');
    }
    incrementCorrectAnswers();
    setScore(score + 1);
    setWrongSelectedAnswers([]);
  };

  const handleWrongAnswer = (selectedOption: string) => {
    setWrongSelectedAnswers((prev) => [...prev, selectedOption]);
    playErrorTwice();
    if (correctChar) incrementCharacterScore(correctChar, 'wrong');
    incrementWrongAnswers();
    setScore(Math.max(score - 1, 0));
  };

  const generateNewCharacter = () => {
    const source = isReverse
      ? selectedVocabObjs.map((obj) => obj.meanings[0])
      : selectedVocabObjs.map((obj) => obj.word);

    let newChar = source[random.integer(0, source.length - 1)];
    while (newChar === correctChar) {
      newChar = source[random.integer(0, source.length - 1)];
    }

    const correctObj = isReverse
      ? selectedVocabObjs.find((obj) => obj.meanings[0] === newChar)
      : selectedVocabObjs.find((obj) => obj.word === newChar);

    if (correctObj) {
      setCorrectChar(newChar);
      setCurrentVocabObj(correctObj);
    }
  };

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: easeOut },
    },
  };

  const gameMode = isReverse ? 'reverse pick' : 'pick';
  const displayCharLang = isReverse ? undefined : 'ja';

  if (!isClient || !correctChar || !currentVocabObj) return null;

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
          payload={currentVocabObj}
          setDisplayAnswerSummary={setDisplayAnswerSummary}
          feedback={feedback}
        />
      )}

      {!displayAnswerSummary && (
        <>
          <div className="flex flex-col items-center gap-4">
            <FuriganaText
              text={correctChar}
              reading={!isReverse ? currentVocabObj.reading : undefined}
              className={clsx(isReverse ? 'text-6xl md:text-8xl' : 'text-8xl')}
              lang={displayCharLang}
            />
            <SSRAudioButton
              text={correctChar}
              variant="icon-only"
              size="lg"
              className="bg-[var(--card-color)] border-[var(--border-color)]"
            />
          </div>

          <div
            className={clsx(
              'flex w-full gap-5 md:gap-0 sm:justify-evenly',
              isReverse ? 'flex-row' : 'flex-col md:flex-row'
            )}
          >
            {shuffledOptions.map((option, i) => (
              <motion.button
                key={option + i}
                ref={(elem) => {
                  if (elem) {
                    // Do something, e.g., store it in a ref array
                    buttonRefs.current[i] = elem;
                  }
                }}

                type="button"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                disabled={wrongSelectedAnswers.includes(option)}
                className={clsx(
                  'text-3xl py-4 rounded-xl w-full md:w-1/4 xl:w-1/5 flex flex-row justify-center items-center gap-1.5',
                  buttonBorderStyles,
                  'text-[var(--border-color)]',
                  wrongSelectedAnswers.includes(option) && 'hover:bg-[var(--card-color)]',
                  !wrongSelectedAnswers.includes(option) &&
                  'hover:scale-110 text-[var(--main-color)] hover:border-[var(--secondary-color)]'
                )}
                onClick={() => handleOptionClick(option)}
                lang={isReverse ? 'ja' : undefined}
              >
                <FuriganaText
                  text={option}
                  reading={
                    isReverse
                      ? selectedVocabObjs.find((obj) => obj.word === option)?.reading
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
            ))}
          </div>

          <Stars />
        </>
      )}
    </div>
  );
};

export default VocabPickGame;
