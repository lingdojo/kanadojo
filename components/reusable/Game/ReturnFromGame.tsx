'use client';
import { useEffect, useRef } from 'react';
import clsx from 'clsx';
import { Link } from '@/i18n/routing';
import { useClick } from '@/hooks/useAudio';
import { useStopwatch } from 'react-timer-hook';
import useStatsStore from '@/store/useStatsStore';
import { X } from 'lucide-react';
import ProgressBar from './ProgressBar';

const Return = ({ isHidden, href }: { isHidden: boolean; href: string }) => {
  const totalTimeStopwatch = useStopwatch({ autoStart: false });
  const saveSession = useStatsStore(state => state.saveSession);

  const { playClick } = useClick();

  useEffect(() => {
    if (!isHidden) totalTimeStopwatch.start();
  }, [isHidden]);

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
        'mt-4 md:mt-10',
        'w-full md:w-1/2 flex flex-row gap-4 items-center justify-between',
        'md:gap-6',
        isHidden ? 'hidden' : ''
      )}
    >
      <Link
        href={href}
        className=""
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
  );
};

export default Return;
