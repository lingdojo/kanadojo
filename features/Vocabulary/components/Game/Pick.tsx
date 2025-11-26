'use client';
import clsx from 'clsx';
import { useState, useEffect, useRef } from 'react';
import { CircleCheck, CircleX } from 'lucide-react';
import { Random } from 'random-js';
import { IVocabObj } from '@/features/Vocabulary/store/useVocabStore';
import { useCorrect, useError } from '@/shared/hooks';
import { buttonBorderStyles } from '@/shared/lib/styles';
import GameIntel from '@/shared/components/Game/GameIntel';
import { pickGameKeyMappings } from '@/shared/lib/keyMappings';
import { useStopwatch } from 'react-timer-hook';
import useStats from '@/shared/hooks/useStats';
import useStatsStore from '@/features/Progress';
import Stars from '@/shared/components/Game/Stars';
import AnswerSummary from '@/shared/components/Game/AnswerSummary';
import SSRAudioButton from '@/shared/components/SSRAudioButton';
import FuriganaText from '@/shared/components/FuriganaText';
import { useCrazyModeTrigger } from '@/features/CrazyMode/hooks/useCrazyModeTrigger';

const random = new Random();

interface VocabPickGameProps {
  selectedWordObjs: IVocabObj[];
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
  const { trigger: triggerCrazyMode } = useCrazyModeTrigger();

  // Quiz type: 'meaning' or 'reading'
  const [quizType, setQuizType] = useState<'meaning' | 'reading'>('meaning');

  // State management based on mode
  const [correctChar, setCorrectChar] = useState(() => {
    if (selectedWordObjs.length === 0) return '';
    const index = random.integer(0, selectedWordObjs.length - 1);
    return isReverse
      ? selectedWordObjs[index].meanings[0]
      : selectedWordObjs[index].word;
  });

  // Find the correct object based on the current mode
  const correctWordObj = isReverse
    ? selectedWordObjs.find(obj => obj.meanings[0] === correctChar)
    : selectedWordObjs.find(obj => obj.word === correctChar);

  const [currentWordObj, setCurrentWordObj] = useState<IVocabObj>(
    correctWordObj as IVocabObj
  );

  // Determine target based on quiz type and mode
  const targetChar =
    quizType === 'meaning'
      ? isReverse
        ? correctWordObj?.word
        : correctWordObj?.meanings[0]
      : isReverse
      ? correctWordObj?.reading
      : correctWordObj?.reading;

  // Get incorrect options based on mode and quiz type
  const getIncorrectOptions = (): string[] => {
    const incorrectWordObjs = isReverse
      ? selectedWordObjs.filter(
          currentWordObj => currentWordObj.meanings[0] !== correctChar
        )
      : selectedWordObjs.filter(
          currentWordObj => currentWordObj.word !== correctChar
        );

    if (quizType === 'meaning') {
      return incorrectWordObjs
        .map(obj => (isReverse ? obj.word : obj.meanings[0]))
        .sort(() => random.real(0, 1) - 0.5)
        .slice(0, 2);
    } else if (quizType === 'reading') {
      return incorrectWordObjs
        .map(obj => obj.reading)
        .sort(() => random.real(0, 1) - 0.5)
        .slice(0, 2);
    }
    return []; // Fallback in case quizType is neither 'meaning' nor 'reading'
  };

  const randomIncorrectOptions = getIncorrectOptions();

  const [shuffledOptions, setShuffledOptions] = useState(
    [targetChar ?? '', ...randomIncorrectOptions].sort(
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
      [targetChar ?? '', ...getIncorrectOptions()].sort(
        () => random.real(0, 1) - 0.5
      ) as string[]
    );
  }, [correctChar]);

  if (!selectedWordObjs || selectedWordObjs.length === 0) {
    return null;
  }

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
      setCurrentWordObj(correctWordObj as IVocabObj);
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
    triggerCrazyMode();
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
    triggerCrazyMode();
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

    // Toggle quiz type for the next question
    setQuizType(prev => (prev === 'meaning' ? 'reading' : 'meaning'));
  };

  const gameMode = isReverse ? 'reverse pick' : 'pick';
  const displayCharLang =
    isReverse && quizType === 'meaning' ? undefined : 'ja';
  const optionLang =
    quizType === 'reading' ? 'ja' : isReverse ? 'ja' : undefined;
  const textSize = isReverse ? 'text-4xl md:text-7xl' : 'text-6xl md:text-9xl';

  return (
    <div
      className={clsx(
        'flex flex-col gap-6 sm:gap-10 items-center w-full sm:w-4/5',
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
          <div className='flex flex-col items-center gap-4'>
            {/* Show prompt based on quiz type */}
            <span className='text-sm text-[var(--secondary-color)] mb-2'>
              {quizType === 'meaning'
                ? isReverse
                  ? 'What is the meaning?'
                  : 'What is the meaning?'
                : 'What is the reading?'}
            </span>
            <div className='flex flex-row justify-center items-center gap-1'>
              <FuriganaText
                text={correctChar}
                reading={
                  !isReverse && quizType === 'meaning'
                    ? correctWordObj?.reading
                    : undefined
                }
                className={clsx(textSize, 'text-center')}
                lang={displayCharLang}
              />
              {!isReverse && (
                <SSRAudioButton
                  text={correctChar}
                  variant='icon-only'
                  size='sm'
                  className='bg-[var(--card-color)] text-[var(--secondary-color)]'
                />
              )}
            </div>
          </div>

          <div
            className={clsx(
              'flex flex-col w-full gap-6 items-center '
              // 'lg:flex-row'
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
                  'py-5 pl-8 rounded-xl w-full md:w-1/2 flex flex-row justify-start items-center gap-1.5',
                  buttonBorderStyles,
                  'active:scale-95 md:active:scale-98 active:duration-200',
                  'text-[var(--border-color)]',
                  ' border-b-4',

                  isReverse ? 'text-4xl' : 'text-3xl',
                  wrongSelectedAnswers.includes(option) &&
                    'hover:bg-[var(--card-color)] border-[var(--border-color)]',
                  !wrongSelectedAnswers.includes(option) &&
                    'text-[var(--secondary-color)] border-[var(--secondary-color)]/50 hover:border-[var(--secondary-color)]'
                )}
                onClick={() => handleOptionClick(option)}
                lang={optionLang}
              >
                {/* Only use FuriganaText when we need furigana (reverse mode or meaning quiz) */}
                {isReverse || quizType === 'meaning' ? (
                  <FuriganaText
                    text={option}
                    reading={
                      isReverse
                        ? selectedWordObjs.find(obj => obj.word === option)
                            ?.reading
                        : undefined
                    }
                  />
                ) : (
                  <span>{option}</span>
                )}
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

export default VocabPickGame;
