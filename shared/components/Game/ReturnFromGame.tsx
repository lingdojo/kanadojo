'use client';
import { useEffect, useRef } from 'react';
import clsx from 'clsx';
import { Link } from '@/core/i18n/routing';
import { useClick } from '@/shared/hooks';
import { useStopwatch } from 'react-timer-hook';
import useStatsStore from '@/features/Progress';
import {
  X,
  SquareCheck,
  SquareX,
  Star,
  ChartSpline,
  MousePointerClick,
  Keyboard
} from 'lucide-react';
import ProgressBar from './ProgressBar';

const Return = ({
  isHidden,
  href,
  gameMode
}: {
  isHidden: boolean;
  href: string;
  gameMode: string;
}) => {
  const totalTimeStopwatch = useStopwatch({ autoStart: false });
  const saveSession = useStatsStore(state => state.saveSession);
  const numCorrectAnswers = useStatsStore(state => state.numCorrectAnswers);
  const numWrongAnswers = useStatsStore(state => state.numWrongAnswers);
  const numStars = useStatsStore(state => state.stars);
  const toggleStats = useStatsStore(state => state.toggleStats);
  const setNewTotalMilliseconds = useStatsStore(
    state => state.setNewTotalMilliseconds
  );

  const { playClick } = useClick();

  useEffect(() => {
    if (!isHidden) totalTimeStopwatch.start();
  }, []);

  const buttonRef = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        buttonRef.current?.click();
      } else if (event.code === 'Space' || event.key === ' ') {
        // event.preventDefault();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div
      className={clsx(
        'flex flex-col  w-full md:w-1/2 mt-4 md:mt-8',
        isHidden ? 'hidden' : ''
      )}
    >
      <div
        className={clsx(
          'w-full flex flex-row gap-4 items-center justify-between',
          'md:gap-6'
        )}
      >
        <Link
          href={href}
          className=''
          ref={buttonRef}
          onClick={() => {
            playClick();
            saveSession();
          }}
        >
          <X
            size={32}
            className={clsx(
              'hover:cursor-pointer duration-250 hover:scale-125 text-[var(--border-color)] hover:text-[var(--secondary-color)]'
            )}
          />
        </Link>
        <ProgressBar />
      </div>
      <div className='flex flex-row w-full'>
        <p className='w-1/2 text-xl px-2 flex justify-start items-center gap-2.5 py-2 '>
          {gameMode.toLowerCase() === 'pick' && (
            <MousePointerClick className='text-[var(--main-color)]' />
          )}
          {gameMode.toLowerCase() === 'reverse-pick' && (
            <MousePointerClick className=' scale-x-[-1] text-[var(--main-color)]' />
          )}
          {gameMode.toLowerCase() === 'input' && (
            <Keyboard className='text-[var(--main-color)]' />
          )}
          {gameMode.toLowerCase() === 'reverse-input' && (
            <Keyboard className='scale-y-[-1] text-[var(--main-color)]' />
          )}
          <span className='text-[var(--secondary-color)]'>
            {gameMode.toLowerCase()}
          </span>
        </p>
        <div
          className={clsx(
            'w-1/2 flex flex-row gap-3 items-center justify-end px-0 py-2 text-[var(--secondary-color)] '
          )}
        >
          <p className='text-xl flex flex-row items-center gap-1'>
            <SquareCheck />
            <span>{numCorrectAnswers}</span>
          </p>
          <p className='text-xl flex flex-row items-center gap-1'>
            <SquareX />
            <span>{numWrongAnswers}</span>
          </p>
          <p className='text-xl flex flex-row items-center gap-1'>
            <Star />
            <span>{numStars}</span>
          </p>

          <button
            className={clsx(
              'p-2 text-xl flex flex-row justify-center items-center gap-2 hover:cursor-pointer',
              'duration-275 bg-[var(--main-color)] rounded-xl',
              'transition-all ease-in-out',
              'border-b-4 border-[var(--border-color)]',
              'group ',
              'text-[var(--background-color)]'
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
    </div>
  );
};

export default Return;
