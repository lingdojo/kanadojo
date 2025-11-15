'use client';
import { useEffect, useRef } from 'react';
import clsx from 'clsx';
import { Link } from '@/i18n/routing';
import { useClick } from '@/hooks/useAudio';
import { useStopwatch } from 'react-timer-hook';
import useStatsStore from '@/store/useStatsStore';
import { HugeiconsIcon } from '@hugeicons/react';
import { Cancel01Icon as XIcon } from '@hugeicons/core-free-icons';;
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
        <HugeiconsIcon icon={XIcon} size={32} color="currentColor" className={clsx(
            'hover:cursor-pointer duration-250 hover:scale-125 text-[var(--border)] hover:text-[var(--muted-foreground)]'
          )} />
      </Link>
      <ProgressBar />
    </div>
  );
};

export default Return;
