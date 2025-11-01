'use client';
import { useState, useEffect, useRef } from 'react';
import { kana } from '@/static/kana';
import useKanaStore from '@/store/useKanaStore';
import { CircleCheck, CircleX, CircleArrowRight } from 'lucide-react';
import { Random } from 'random-js';
import clsx from 'clsx';
import { useClick, useCorrect, useError } from '@/hooks/useAudio';
import GameIntel from '@/components/reusable/Game/GameIntel';
import { buttonBorderStyles } from '@/static/styles';
import { useStopwatch } from 'react-timer-hook';
import useStats from '@/hooks/useStats';
import useStatsStore from '@/store/useStatsStore';
import Stars from '@/components/reusable/Game/Stars';
import SSRAudioButton from '@/components/reusable/SSRAudioButton';

const random = new Random();

interface InputGameProps {
  isHidden: boolean;
  isReverse?: boolean;
}

const InputGame = ({ isHidden, isReverse = false }: InputGameProps) => {
  const score = useStatsStore(state => state.score);
  const setScore = useStatsStore(state => state.setScore);

  const speedStopwatch = useStopwatch({ autoStart: false });

  const {
    incrementCorrectAnswers,
    incrementWrongAnswers,
    addCharacterToHistory,
    addCorrectAnswerTime,
    incrementCharacterScore
  } = useStats();

  const { playClick } = useClick();
  const { playCorrect } = useCorrect();
  const { playErrorTwice } = useError();

  const inputRef = useRef<HTMLInputElement>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const [inputValue, setInputValue] = useState('');

  const kanaGroupIndices = useKanaStore(state => state.kanaGroupIndices);

  const selectedKana = kanaGroupIndices.map(i => kana[i].kana).flat();
  const selectedRomaji = kanaGroupIndices.map(i => kana[i].romanji).flat();

  // Create mapping pairs based on mode
  const selectedPairs = Object.fromEntries(
    isReverse
      ? selectedRomaji.map((key, i) => [key, selectedKana[i]])
      : selectedKana.map((key, i) => [key, selectedRomaji[i]])
  );

  // State for characters
  const [correctChar, setCorrectChar] = useState(
    isReverse
      ? selectedRomaji[random.integer(0, selectedRomaji.length - 1)]
      : selectedKana[random.integer(0, selectedKana.length - 1)]
  );

  const targetChar = selectedPairs[correctChar];

  const [feedback, setFeedback] = useState(<>{'feeback ~'}</>);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const skipKey = isReverse ? ' ' : '/';
      if (event.key === skipKey) {
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
      if (
        (isReverse && inputValue.trim() === targetChar) ||
        (!isReverse && inputValue.trim().toLowerCase() === targetChar)
      ) {
        handleCorrectAnswer();
      } else {
        handleWrongAnswer();
      }
    }
  };

  const handleCorrectAnswer = () => {
    speedStopwatch.pause();
    addCorrectAnswerTime(speedStopwatch.totalMilliseconds / 1000);
    speedStopwatch.reset();
    playCorrect();
    addCharacterToHistory(correctChar);
    incrementCharacterScore(correctChar, 'correct');
    incrementCorrectAnswers();
    setScore(score + 1);

    setInputValue('');
    generateNewCharacter();
    setFeedback(
      <>
        <span>{`${correctChar} = ${targetChar} `}</span>
        <CircleCheck className='inline text-[var(--main-color)]' />
      </>
    );
  };

  const handleWrongAnswer = () => {
    setInputValue('');
    setFeedback(
      <>
        <span>{`${correctChar} ≠ ${inputValue} `}</span>
        <CircleX className='inline text-[var(--main-color)]' />
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
    const sourceArray = isReverse ? selectedRomaji : selectedKana;
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
    setFeedback(<>{`skipped ~ ${correctChar} = ${targetChar}`}</>);
  };

  const gameMode = isReverse ? 'reverse input' : 'input';

  return (
    <div
      className={clsx(
        'flex flex-col gap-4 sm:gap-10 items-center w-full sm:w-4/5',
        isHidden ? 'hidden' : ''
      )}
    >
      <GameIntel gameMode={gameMode} feedback={feedback} />
      <div className='flex flex-col items-center gap-4'>
        <p className='text-8xl sm:text-9xl font-medium'>{correctChar}</p>
        <SSRAudioButton
          text={correctChar}
          variant='icon-only'
          size='lg'
          className='bg-[var(--card-color)] border-[var(--border-color)]'
        />
      </div>
      <input
        ref={inputRef}
        type='text'
        value={inputValue}
        className={clsx(
          'border-b-2 pb-1 text-center focus:outline-none text-2xl lg:text-5xl',
          'border-[var(--card-color)] focus:border-[var(--border-color)]'
        )}
        onChange={e => setInputValue(e.target.value)}
        onKeyDown={handleEnter}
      />
      <button
        ref={buttonRef}
        className={clsx(
          'text-xl font-medium py-4 px-16 rounded-3xl',
          'flex flex-row items-end gap-2',
          buttonBorderStyles,
          'active:scale-95 md:active:scale-98 active:duration-200',
          'text-[var(--secondary-color)]'
        )}
        onClick={handleSkip}
      >
        <span>skip</span>
        <CircleArrowRight />
      </button>
      <Stars />
    </div>
  );
};

export default InputGame;
