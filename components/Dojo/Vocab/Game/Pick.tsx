'use client';
import clsx from 'clsx';
import { useState, useEffect, useRef } from 'react';
import { CircleCheck, CircleX } from 'lucide-react';
import { Random } from 'random-js';
import { IWordObj } from '@/store/useVocabStore';
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

const random = new Random();

interface VocabPickGameProps {
  selectedWordObjs: IWordObj[];
  isHidden: boolean;
  isReverse?: boolean;
}

const VocabPickGame = ({
  selectedWordObjs,
  isHidden,
  isReverse = false
}: VocabPickGameProps) => {
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

  const { playCorrect } = useCorrect();
  const { playErrorTwice } = useError();

  // Filter out any undefined or null entries
  const validWordObjs = selectedWordObjs.filter(obj => obj && obj.word && obj.meanings && obj.meanings.length > 0);
  
  // State management based on mode
  const [correctChar, setCorrectChar] = useState(
    validWordObjs.length > 0
      ? isReverse
        ? validWordObjs[random.integer(0, validWordObjs.length - 1)].meanings[0]
        : validWordObjs[random.integer(0, validWordObjs.length - 1)].word
      : ''
  );

  // Find the correct object based on the current mode
  const correctWordObj = (
    isReverse
      ? validWordObjs.find(obj => obj && obj.meanings && obj.meanings[0] === correctChar)
      : validWordObjs.find(obj => obj && obj.word === correctChar)
  );
  const [currentWordObj, setCurrentWordObj] = useState(correctWordObj);

  // Early return if no valid word objects
  if (validWordObjs.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] text-center">
        <p className="text-lg text-[var(--secondary-color)] mb-4">
          No valid vocabulary words found.
        </p>
        <p className="text-sm text-[var(--secondary-color)]">
          Please select some vocabulary words to practice.
        </p>
      </div>
    );
  }

  const targetChar = isReverse
    ? correctWordObj?.word
    : correctWordObj?.meanings[0];

  // Get incorrect options based on mode
  const getIncorrectOptions = () => {
    if (!isReverse) {
      const incorrectWordObjs = validWordObjs.filter(
        currentWordObj => currentWordObj && currentWordObj.word !== correctChar
      );
      return incorrectWordObjs
        .map(obj => obj.meanings[0])
        .sort(() => random.real(0, 1) - 0.5)
        .slice(0, 2);
    } else {
      const incorrectWordObjs = validWordObjs.filter(
        currentWordObj => currentWordObj && currentWordObj.meanings && currentWordObj.meanings[0] !== correctChar
      );
      return incorrectWordObjs
        .map(obj => obj.word)
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
          <span className='text-[var(--secondary-color)]'>{`${correctChar} = ${selectedOption} `}</span>
          <CircleCheck className='inline text-[var(--main-color)]' />
        </>
      );
      setCurrentWordObj(correctWordObj);
    } else {
      handleWrongAnswer(selectedOption);
      setFeedback(
        <>
          <span className='text-[var(--secondary-color)]'>{`${correctChar} ≠ ${selectedOption} `}</span>
          <CircleX className='inline text-[var(--main-color)]' />
        </>
      );
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
      ? selectedWordObjs.map(obj => obj.meanings[0])
      : selectedWordObjs.map(obj => obj.word);

    let newChar = sourceArray[random.integer(0, sourceArray.length - 1)];
    while (newChar === correctChar) {
      newChar = sourceArray[random.integer(0, sourceArray.length - 1)];
    }
    setCorrectChar(newChar);
  };

  const gameMode = isReverse ? 'reverse pick' : 'pick';
  const displayCharLang = isReverse ? undefined : 'ja';
  const optionLang = isReverse ? 'ja' : undefined;
  const textSize = isReverse ? 'text-4xl md:text-7xl' : 'text-6xl md:text-9xl';

  return (
    <div
      className={clsx(
        'flex flex-col gap-6 sm:gap-10 items-center w-full sm:w-4/5',
        isHidden ? 'hidden' : '',
        'max-md:mb-8'
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
            <p className={clsx(textSize, 'text-center')} lang={displayCharLang}>
              {correctChar}
            </p>
            <SSRAudioButton 
              text={correctChar} 
              variant="icon-only" 
              size="lg"
              className="bg-[var(--card-color)] border-[var(--border-color)]"
            />
          </div>

          <div
            className={clsx(
              'flex flex-col w-full gap-6 lg:gap-0 lg:justify-evenly',
              'lg:flex-row'
            )}
          >
            {shuffledOptions.map((option, i) => (
              <button
                ref={elem => {
                  buttonRefs.current[i] = elem;
                }}
                key={option + i}
                type='button'
                disabled={wrongSelectedAnswers.includes(option)}
                className={clsx(
                  'py-4 px-2 rounded-xl w-full lg:w-1/4 flex flex-row justify-center items-center gap-1.5',
                  buttonBorderStyles,
                  'active:scale-95 md:active:scale-98 active:duration-200',
                  'text-[var(--border-color)]',
                  isReverse ? 'text-4xl' : 'text-3xl',
                  wrongSelectedAnswers.includes(option) &&
                    'hover:bg-[var(--card-color)]',
                  !wrongSelectedAnswers.includes(option) &&
                    'hover:scale-110 text-[var(--main-color)] hover:text-[var(--secondary-color)]'
                )}
                onClick={() => handleOptionClick(option)}
                lang={optionLang}
              >
                <span>{option}</span>
                <span
                  className={clsx(
                    'hidden lg:inline text-xs rounded-full bg-[var(--border-color)] px-1',
                    'text-[var(--secondary-color)]'
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

export default VocabPickGame;
