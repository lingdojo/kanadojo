'use client';
import clsx from 'clsx';
import { useClick } from '@/hooks/useAudio';

interface KanjiCardProps {
  kanji: string;
  reading: string;
  meaning: string;
  onClick?: () => void;
}

const KanjiCard = ({
  kanji,
  reading,
  meaning,
  onClick,
}: KanjiCardProps) => {
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
        'hover:bg-[var(--muted)]/30',
        'rounded-lg',
        'focus:outline-none',
        'min-h-[180px]'
      )}
    >
      {/* Kanji character */}
      <span
        className={clsx(
          'text-6xl font-light mb-3 transition-colors duration-150',
          'text-[var(--foreground)]'
        )}
      >
        {kanji}
      </span>

      {/* Reading */}
      <span
        className={clsx(
          'text-sm font-light tracking-wide transition-opacity duration-150 mb-1',
          'text-[var(--muted-foreground)] opacity-60 group-hover:opacity-100'
        )}
      >
        {reading}
      </span>

      {/* Meaning */}
      <span
        className={clsx(
          'text-xs font-light text-center transition-opacity duration-150',
          'text-[var(--muted-foreground)] opacity-60 group-hover:opacity-100 line-clamp-2'
        )}
      >
        {meaning}
      </span>
    </button>
  );
};

export default KanjiCard;
