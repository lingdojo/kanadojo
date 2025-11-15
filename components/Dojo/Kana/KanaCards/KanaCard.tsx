'use client';
import clsx from 'clsx';
import { useClick } from '@/hooks/useAudio';

interface KanaCardProps {
  kana: string;
  romanji: string;
  isSelected?: boolean;
  onToggle?: () => void;
}

const KanaCard = ({
  kana,
  romanji,
  isSelected = false,
  onToggle,
}: KanaCardProps) => {
  const { playClick } = useClick();

  const handleClick = () => {
    playClick();
    onToggle?.();
  };

  return (
    <button
      onClick={handleClick}
      className={clsx(
        'group relative flex flex-col items-center justify-center',
        'py-8 px-4',
        'transition-all duration-150',
        'hover:bg-[var(--muted)]',
        'focus:outline-none',
        isSelected && 'bg-[var(--muted)]',
        'min-w-[120px]'
      )}
    >
      {/* Kana character */}
      <span
        className={clsx(
          'text-5xl font-light mb-3 transition-colors duration-150 whitespace-nowrap',
          isSelected
            ? 'text-[var(--foreground)]'
            : 'text-[var(--muted-foreground)] group-hover:text-[var(--foreground)]'
        )}
      >
        {kana}
      </span>

      {/* Romanization */}
      <span
        className={clsx(
          'text-sm font-light tracking-wide transition-opacity duration-150 whitespace-nowrap',
          isSelected
            ? 'text-[var(--muted-foreground)] opacity-100'
            : 'text-[var(--muted-foreground)] opacity-50 group-hover:opacity-100'
        )}
      >
        {romanji}
      </span>
    </button>
  );
};

export default KanaCard;
