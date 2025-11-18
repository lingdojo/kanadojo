'use client';
import { SquareCheck, SquareX, Star, Coffee } from 'lucide-react';
import { MousePointerClick, Keyboard, MousePointer } from 'lucide-react';
import clsx from 'clsx';
import { cardBorderStyles } from '@/static/styles';
import useStatsStore from '@/store/useStatsStore';
import { miniButtonBorderStyles } from '@/static/styles';
import { ChartSpline } from 'lucide-react';
import { useStopwatch } from 'react-timer-hook';
import { useClick } from '@/hooks/useAudio';
import useKanjiStore from '@/store/useKanjiStore';
import useVocabStore from '@/store/useVocabStore';
import { usePathname } from 'next/navigation';
import { removeLocaleFromPath } from '@/lib/pathUtils';

const GameIntel = ({
  gameMode,
  feedback,
}: {
  gameMode: string;
  feedback?: React.JSX.Element;
}) => {
  const numCorrectAnswers = useStatsStore(state => state.numCorrectAnswers);
  const numWrongAnswers = useStatsStore(state => state.numWrongAnswers);
  const numStars = useStatsStore(state => state.stars);

  const totalTimeStopwatch = useStopwatch({ autoStart: false });

  const toggleStats = useStatsStore(state => state.toggleStats);
  const setNewTotalMilliseconds = useStatsStore(
    state => state.setNewTotalMilliseconds
  );

  const { playClick } = useClick();

  const pathname = usePathname();
  const pathWithoutLocale = removeLocaleFromPath(pathname);
  const trainingDojo = pathWithoutLocale.split('/')[1];

  const selectedKanjiSets = useKanjiStore(state => state.selectedKanjiSets);
  const selectedVocabSets = useVocabStore(state => state.selectedVocabSets);

  // useEffect(() => {
  //   if (!isHidden) totalTimeStopwatch.start();
  // }, [isHidden]);

  return (
    <div
      className={clsx(
        'flex flex-col',

        cardBorderStyles,
        'text-[var(--secondary-color)]'
      )}
    >
      <div
        className={clsx(
          ' flex flex-col  items-center justify-center',
          'md:flex-row '
        )}
      >
        <div
          className={clsx(
            'flex flex-col gap-2 items-center justify-center py-2 w-full'
          )}
        >
          <p className="text-xl px-4 flex justify-center items-center w-full gap-2.5 py-2">
            {gameMode.toLowerCase() === 'pick' && (
              <MousePointerClick className="text-[var(--main-color)]" />
            )}
            {gameMode.toLowerCase() === 'reverse pick' && (
              <MousePointerClick className=" scale-x-[-1] text-[var(--main-color)]" />
            )}
            {gameMode.toLowerCase() === 'input' && (
              <Keyboard className="text-[var(--main-color)]" />
            )}
            {gameMode.toLowerCase() === 'reverse input' && (
              <Keyboard className="scale-y-[-1] text-[var(--main-color)]" />
            )}
            <span>{gameMode}</span>

            <button
              className={clsx(
                'py-2.5 px-8 text-xl flex flex-row justify-center items-center gap-2',
                miniButtonBorderStyles,
                'group flex-1 ',
                'text-[var(--main-color)]'
              )}
              onClick={() => {
                playClick();
                window.open('https://ko-fi.com/kanadojo', '_blank');
              }}
            >
              <Coffee
                size={24}
                className="motion-safe:animate-pulse"
              />
            </button>
          </p>
        </div>

        <div
          className={clsx(
            'border-t-1 w-full',
            'md:border-l-1 md:h-auto md:self-stretch md:border-t-0 md:w-0',
            'border-[var(--border-color)]'
          )}
        />

        <div
          className={clsx(
            'flex flex-row gap-3 items-center justify-center px-4 py-2'
          )}
        >
          <p className="text-xl flex flex-row items-center gap-1">
            <SquareCheck />
            <span>{numCorrectAnswers}</span>
          </p>
          <p className="text-xl flex flex-row items-center gap-1">
            <SquareX />
            <span>{numWrongAnswers}</span>
          </p>
          <p className="text-xl flex flex-row items-center gap-1">
            <Star />
            <span>{numStars}</span>
          </p>

          <button
            className={clsx(
              'py-2.5 px-8 text-xl flex flex-row justify-center items-center gap-2',
              miniButtonBorderStyles,
              'group flex-1',
              'text-[var(--main-color)]'
            )}
            onClick={() => {
              playClick();
              toggleStats();
              totalTimeStopwatch.pause();
              setNewTotalMilliseconds(totalTimeStopwatch.totalMilliseconds);
            }}
          >
            <ChartSpline size={24} />
          </button>
        </div>
      </div>

      {feedback && (
        <p className="text-xl flex justify-center items-center gap-1.5 px-4 py-3 border-t-1 w-full  border-[var(--border-color)]">
          {feedback}
        </p>
      )}

      <p
        className={clsx(
          'p-4 border-t-1 w-full border-[var(--border-color)] flex gap-2  items-center',
          trainingDojo === 'kana' && 'hidden'
        )}
      >
        <span className="flex gap-2 items-center">
          <MousePointer
            size={20}
            className="text-[var(--main-color)]"
          />
          selected levels:
        </span>
        <span className="text-[var(--secondary-color)]">
          {trainingDojo === 'kanji'
            ? selectedKanjiSets.sort().join(', ').toLowerCase().replace(/set /g, 'level ')
            : trainingDojo === 'vocabulary'
            ? selectedVocabSets.sort().join(', ').toLowerCase().replace(/set /g, 'level ')
            : null}
        </span>
      </p>
    </div>
  );
};

export default GameIntel;
