'use client';
import clsx from 'clsx';
import { useState, useEffect, useRef } from 'react';
import { CircleCheck, CircleX } from 'lucide-react';
import { Random } from 'random-js';
import { IVocabObj } from '@/store/useVocabStore';
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

interface VocabPickGameProps {
  selectedWordObjs: IVocabObj[];
  isHidden: boolean;
  isReverse?: boolean;
}

const VocabPickGame = ({
  selectedWordObjs,
  isHidden,
  isReverse = false,
}: VocabPickGameProps) => {
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
      ? selectedWordObjs[random.integer(0, selectedWordObjs.length - 1)]
          .meanings[0]
      : selectedWordObjs[random.integer(0, selectedWordObjs.length - 1)].word
  );

  // Find the correct object based on the current mode
  const correctWordObj = (
    isReverse
      ? selectedWordObjs.find(obj => obj.meanings[0] === correctChar)
      : selectedWordObjs.find(obj => obj.word === correctChar)
  )!;
  const [currentWordObj, setCurrentWordObj] = useState(correctWordObj);

  const targetChar = isReverse
    ? correctWordObj?.word
    : correctWordObj?.meanings[0];

  // Get incorrect options based on mode
  const getIncorrectOptions = () => {
    if (!isReverse) {
      const incorrectWordObjs = selectedWordObjs.filter(
        currentWordObj => currentWordObj.word !== correctChar
      );
      return incorrectWordObjs
        .map(obj => obj.meanings[0])
        .sort(() => random.real(0, 1) - 0.5)
        .slice(0, 2);
    } else {
      const incorrectWordObjs = selectedWordObjs.filter(
        currentWordObj => currentWordObj.meanings[0] !== correctChar
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
          <span className="text-[var(--secondary-color)]">{`${correctChar} = ${selectedOption} `}</span>
          <CircleCheck className="inline text-[var(--main-color)]" />
        </>
      );
      setCurrentWordObj(correctWordObj);
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
              className="bg-[var(--card-color)] text-[var(--secondary-color)]"
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
                type="button"
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
                    'text-[var(--main-color)]'
                )}
                onClick={() => handleOptionClick(option)}
                lang={optionLang}
              >
                <FuriganaText
                  text={option}
                  reading={
                    isReverse
                      ? selectedWordObjs.find(obj => obj.word === option)
                          ?.reading
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

export default VocabPickGame;
