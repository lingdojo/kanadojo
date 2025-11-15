'use client';
import clsx from 'clsx';
import { useClick } from '@/hooks/useAudio';

interface VocabCardProps {
  word: string;
  reading: string;
  meaning: string;
  onClick?: () => void;
}

const VocabCard = ({
  word,
  reading,
  meaning,
  onClick,
}: VocabCardProps) => {
  const { playClick } = useClick();

  const handleClick = () => {
    playClick();
    onClick?.();
  };

  return (
    <button
      onClick={handleClick}
      className={clsx(
        'group relative flex flex-col items-center justify-between',
        'py-6 px-4',
        'transition-all duration-150',
        'bg-[var(--background)]',
        'hover:bg-[var(--muted)]',
        'border border-[var(--border)]',
        'rounded-xl',
        'focus:outline-none',
        'min-h-[180px]'
      )}
    >
      {/* Word */}
      <span
        className={clsx(
          'text-6xl font-light mb-3 transition-colors duration-150',
          'text-[var(--foreground)]'
        )}
      >
        {word}
      </span>

      {/* Reading */}
      <span
        className={clsx(
          'text-sm font-light tracking-wide transition-opacity duration-150 mb-1',
          'text-[var(--muted-foreground)] opacity-50 group-hover:opacity-100'
        )}
      >
        {reading}
      </span>

      {/* Meaning */}
      <span
        className={clsx(
          'text-xs font-light text-center transition-opacity duration-150',
          'text-[var(--muted-foreground)] opacity-50 group-hover:opacity-100 line-clamp-2'
        )}
      >
        {meaning}
      </span>
    </button>
  );
};

export default VocabCard;
