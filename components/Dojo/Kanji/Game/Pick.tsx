'use client';
import clsx from 'clsx';
import { useState, useEffect, useRef, useMemo } from 'react';
import { CircleCheck } from 'lucide-react';
import { CircleX } from 'lucide-react';
import { Random } from 'random-js';
import { IKanjiObj } from '@/store/useKanaKanjiStore';
import { useCorrect, useError } from '@/lib/hooks/useAudio';
import { buttonBorderStyles } from '@/static/styles';
import GameIntel from '@/components/reusable/Game/GameIntel';
import { pickGameKeyMappings } from '@/lib/keyMappings';
import { useStopwatch } from 'react-timer-hook';
import useStats from '@/lib/hooks/useStats';
import useStatsStore from '@/store/useStatsStore';
import Stars from '@/components/reusable/Game/Stars';

const random = new Random();

const Pick = ({
  selectedKanjiObjs,
  isHidden,
}: {
  selectedKanjiObjs: IKanjiObj[];
  isHidden: boolean;
}) => {
  const score = useStatsStore(state => state.score);
  const setScore = useStatsStore(state => state.setScore);

  const speedStopwatch = useStopwatch({ autoStart: false });

  const {
    incrementCorrectAnswers,
    incrementWrongAnswers,
    addCharacterToHistory,
    addCorrectAnswerTime,
    incrementCharacterScore,
    characterHistory,
  } = useStats();

  const { playCorrect } = useCorrect();
  const { playErrorTwice } = useError();

  const [correctKanjiChar, setCorrectKanjiChar] = useState(
    selectedKanjiObjs[random.integer(0, selectedKanjiObjs.length - 1)].kanjiChar
  );

  // avoid rerunning random.bool unless correctKanjiChar changes
  const showFurigana = useMemo(() => {
      const currentKanjiInHistory = characterHistory.indexOf(correctKanjiChar) > -1;
      // show furigana if current kanji is not in history, or one in six times if it is
      return !currentKanjiInHistory || random.bool(1, 6);
  }, [correctKanjiChar])

  const correctKunyomiReadings = selectedKanjiObjs.find(
      obj => obj.kanjiChar === correctKanjiChar
  )?.kunyomi;

  const correctMeaning = selectedKanjiObjs.find(
    obj => obj.kanjiChar === correctKanjiChar
  )?.meanings[0];

  const incorrectKanjiObjs = selectedKanjiObjs.filter(
    currentKanjiObj => currentKanjiObj.kanjiChar !== correctKanjiChar
  );

  const randomIncorrectMeanings = incorrectKanjiObjs
    .map(currentIncorrectKanjiObj => currentIncorrectKanjiObj.meanings[0])
    .sort(() => random.real(0, 1) - 0.5)
    .slice(0, 2);

  const [shuffledMeanings, setShuffledMeanings] = useState(
    [correctMeaning, ...randomIncorrectMeanings].sort(
      () => random.real(0, 1) - 0.5
    ) as string[]
  );

  const [feedback, setFeedback] = useState(<>{'feedback ~'}</>);

  const [wrongSelectedAnswers, setWrongSelectedAnswers] = useState<string[]>(
    []
  );

  useEffect(() => {
    setShuffledMeanings(
      [correctMeaning, ...randomIncorrectMeanings].sort(
        () => random.real(0, 1) - 0.5
      ) as string[]
    );
  }, [correctKanjiChar]);

  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const index = pickGameKeyMappings[event.code];
      if (index !== undefined && index < shuffledMeanings.length) {
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

  const handleOptionClick = (meaning: string) => {
    if (meaning === correctMeaning) {
      speedStopwatch.pause();
      addCorrectAnswerTime(speedStopwatch.totalMilliseconds / 1000);
      speedStopwatch.reset();
      playCorrect();
      addCharacterToHistory(correctKanjiChar);
      incrementCharacterScore(correctKanjiChar, 'correct');
      incrementCorrectAnswers();
      setScore(score + 1);

      let newRandomKanjiChar =
        selectedKanjiObjs[random.integer(0, selectedKanjiObjs.length - 1)]
          .kanjiChar;

      while (newRandomKanjiChar === correctKanjiChar) {
        newRandomKanjiChar =
          selectedKanjiObjs[random.integer(0, selectedKanjiObjs.length - 1)]
            .kanjiChar;
      }
      setCorrectKanjiChar(newRandomKanjiChar);
      setWrongSelectedAnswers([]);
      setFeedback(
        <>
          <span>{`${correctKanjiChar} = ${meaning} `}</span>
          <CircleCheck className="inline text-[var(--main-color)]" />
        </>
      );
    } else {
      setWrongSelectedAnswers([...wrongSelectedAnswers, meaning]);
      setFeedback(
        <>
          <span>{`${correctKanjiChar} ≠ ${meaning} `}</span>
          <CircleX className="inline text-[var(--main-color)]" />
        </>
      );
      playErrorTwice();

      incrementCharacterScore(correctKanjiChar, 'wrong');
      incrementWrongAnswers();
      if (score - 1 < 0) {
        setScore(0);
      } else {
        setScore(score - 1);
      }
    }
  };

  return (
    <div
      className={clsx(
        'flex flex-col gap-4 sm:gap-10 items-center w-full sm:w-4/5',
        isHidden ? 'hidden' : '',
        'max-md:pb-12'
      )}
    >
      <GameIntel
        feedback={feedback}
        gameMode="pick"
      />

      <p
        className="flex flex-col gap-4 text-9xl text-center"
        lang="ja"
      >
        <span>{correctKanjiChar}</span>
        {showFurigana && <span className="text-base text-gray-500">{correctKunyomiReadings?.join(', ')}</span>}
      </p>
      <div
        className={clsx(
          'flex w-full gap-5 sm:gap-0 sm:justify-evenly',
          'flex-col',
          'sm:flex-row'
        )}
      >
        {shuffledMeanings.map((meaning, i) => (
          <button
            ref={elem => {
              buttonRefs.current[i] = elem;
            }}
            key={meaning + i}
            type="button"
            disabled={wrongSelectedAnswers.includes(meaning)}
            className={clsx(
              'text-4xl py-4 rounded-xl w-full sm:w-1/5 flex flex-row justify-center items-center gap-1.5',
              buttonBorderStyles,
              'text-[var(--border-color)]',
              wrongSelectedAnswers.includes(meaning) &&
                'hover:bg-[var(--card-color)]',
              !wrongSelectedAnswers.includes(meaning) &&
                'hover:scale-110 text-[var(--main-color)] hover:border-[var(--secondary-color)]'
            )}
            onClick={() => handleOptionClick(meaning)}
          >
            <span lang="ja">{meaning}</span>
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
    </div>
  );
};

export default Pick;
