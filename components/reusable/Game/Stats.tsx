'use client';
import clsx from 'clsx';
import {
  Hourglass,
  SquareCheck,
  SquareX,
  ChartSpline,
  Target,
  Timer,
  ClockFading,
  Clover,
  HeartCrack,
  CircleDivide,
  Flame,
  Shapes,
  Sigma
} from 'lucide-react';
import useStatsStore from '@/store/useStatsStore';
import { ChevronsLeft } from 'lucide-react';
import { findHighestCounts } from '@/lib/helperFunctions';
import { useClick } from '@/hooks/useAudio';

const Stats = () => {
  const { playClick } = useClick();

  const toggleStats = useStatsStore(state => state.toggleStats);

  const numCorrectAnswers = useStatsStore(state => state.numCorrectAnswers);
  const numWrongAnswers = useStatsStore(state => state.numWrongAnswers);
  const characterHistory = useStatsStore(state => state.characterHistory);
  const totalMilliseconds = useStatsStore(state => state.totalMilliseconds);
  const correctAnswerTimes = useStatsStore(state => state.correctAnswerTimes);
  const characterScores = useStatsStore(state => state.characterScores);

  const totalMinutes = Math.floor(totalMilliseconds / 60000);
  const seconds = ((totalMilliseconds / 1000) % 60).toFixed(0);
  const accuracy =
    (numCorrectAnswers / (numCorrectAnswers + numWrongAnswers)) * 100;
  const ciRatio = numCorrectAnswers / numWrongAnswers;
  const averageCorrectAnswerTime =
    correctAnswerTimes.length > 0 &&
    correctAnswerTimes.reduce((acc, curr) => acc + curr) /
      correctAnswerTimes.length;
  const fastestCorrectAnswer = Math.min(...correctAnswerTimes).toFixed(2);
  const slowestCorrectAnswer = Math.max(...correctAnswerTimes).toFixed(2);
  const {
    highestCorrectChars,
    highestCorrectCharsValue,
    highestWrongChars,
    highestWrongCharsValue
  } = findHighestCounts(characterScores);

  const statsFields = [
    {
      field: 'training time',
      value: `${totalMinutes} minute${
        totalMinutes === 1 ? '' : 's'
      }, ${seconds} seconds (paused)`,
      icons: [Hourglass]
    },
    {
      field: 'correct answers',
      value: `${numCorrectAnswers}`,
      icons: [SquareCheck]
    },
    {
      field: 'wrong answers',
      value: `${numWrongAnswers}`,
      icons: [SquareX]
    },
    {
      field: 'accuracy',
      value: `${Number.isNaN(accuracy) ? '~' : accuracy.toFixed(1) + '%'}`,
      icons: [Target]
    },
    {
      field: 'average time per correct answer',
      value: `${
        averageCorrectAnswerTime
          ? averageCorrectAnswerTime.toFixed(2) + 's'
          : '~'
      }`,
      icons: [Timer]
    },

    {
      field: 'fastest correct answer',
      value: `${
        fastestCorrectAnswer !== 'Infinity' ? fastestCorrectAnswer + 's' : '~'
      }`,
      icons: [Flame]
    },
    {
      field: 'slowest correct answer',
      value: `${
        slowestCorrectAnswer !== '-Infinity' ? slowestCorrectAnswer + 's' : '~'
      }`,
      icons: [ClockFading]
    },
    {
      field: 'correct / incorrect answers ratio',
      value: `${
        Number.isNaN(ciRatio)
          ? '~'
          : ciRatio === Infinity
          ? '∞'
          : ciRatio.toFixed(2)
      }`,
      icons: [CircleDivide]
    },
    {
      field: 'characters played',
      value: `${characterHistory.length}`,
      icons: [Sigma]
    },
    {
      field: 'unique characters played',
      value: `${[...new Set(characterHistory)].length}`,
      icons: [Shapes]
    },
    {
      field: 'easiest characters',
      value: `${
        highestCorrectChars.length >= 1
          ? highestCorrectChars.join(', ') +
            ' - ' +
            highestCorrectCharsValue +
            ' correct answers'
          : '~'
      }`,
      icons: [Clover]
    },
    {
      field: 'hardest characters',
      value: `${
        highestWrongChars.length >= 1
          ? highestWrongChars.join(', ') +
            ' - ' +
            highestWrongCharsValue +
            ' wrong answers'
          : '~'
      }`,
      icons: [HeartCrack]
    }
  ];

  return (
    <div className='flex flex-col items-center justify-center gap-4 max-w-[100dvw] min-h-[100dvh] py-4'>
      <h2
        className={clsx(
          'group text-4xl flex flex-row items-center gap-2.5 hover:cursor-pointer'
          // buttonBorderStyles
        )}
        onClick={() => {
          playClick();
          toggleStats();
        }}
      >
        <ChevronsLeft
          className={clsx(
            'text-[var(--secondary-color)] md:text-[var(--border-color)] group-hover:text-[var(--secondary-color)] mt-1 duration-250'
          )}
          size={32}
        />
        <span>Statistics</span>
        <ChartSpline size={30} className='mt-1.5' />
      </h2>
      <div
        className={clsx('flex flex-col items-start', 'md:flex-row md:gap-10')}
      >
        <div className={clsx('flex flex-col gap-4 py-4 items-start')}>
          <h3 className={clsx('w-full text-2xl')}>General</h3>
          <div className={clsx('flex flex-col gap-4')}>
            {statsFields.slice(0, 4).map((statsField, i) => (
              <p
                className={clsx(
                  'flex flex-row items-center justify-start gap-1.5',
                  i < 3 && 'border-b-1 border-[var(--border-color)] pb-4'
                )}
                key={statsField.field}
              >
                <span className='text-[var(--secondary-color)]'>
                  {statsField.field + ': '}
                </span>
                <span>{statsField.value}</span>
                {statsField.icons.map((Icon, i) => (
                  <Icon size={24} key={i} />
                ))}
              </p>
            ))}
          </div>
        </div>
        <div className={clsx('flex flex-col gap-4 py-4 items-start')}>
          <h3 className={clsx('w-full text-2xl ')}>Answers</h3>

          <div className={clsx('flex flex-col gap-4')}>
            {statsFields.slice(4, 8).map((statsField, i) => (
              <p
                className={clsx(
                  'flex flex-row items-center justify-start gap-1.5',
                  i < 3 && 'border-b-1 border-[var(--border-color)] pb-4'
                )}
                key={statsField.field}
              >
                <span className='text-[var(--secondary-color)]'>
                  {statsField.field + ': '}
                </span>
                <span>{statsField.value}</span>
                {statsField.icons.map((Icon, i) => (
                  <Icon size={24} key={i} />
                ))}
              </p>
            ))}
          </div>
        </div>
        <div className={clsx('flex flex-col gap-4 py-4 items-start')}>
          <h3 className={clsx('w-full text-2xl')}>Characters</h3>
          <div className={clsx('flex flex-col gap-4')}>
            {statsFields.slice(8, 20).map((statsField, i) => (
              <p
                className={clsx(
                  'flex flex-row items-center justify-start gap-1.5 ',
                  i < 3 && 'border-b-1 border-[var(--border-color)] pb-4'
                )}
                key={statsField.field}
              >
                <span className='text-[var(--secondary-color)]'>
                  {statsField.field + ': '}
                </span>
                <span>{statsField.value}</span>
                {statsField.icons.map((Icon, i) => (
                  <Icon size={24} key={i} />
                ))}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
