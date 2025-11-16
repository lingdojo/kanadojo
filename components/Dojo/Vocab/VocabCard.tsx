'use client';
import clsx from 'clsx';
import { useClick } from '@/hooks/useAudio';
import useSRSStore from '@/store/useSRSStore';
import { getStageColor, getStageLabel } from '@/lib/srsUtils';

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
  const srsEnabled = useSRSStore(state => state.srsEnabled);
  const cards = useSRSStore(state => state.cards);

  // Get SRS card for this vocabulary word
  const srsCard = cards[`${word}-vocabulary`];

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
      {/* SRS Status Indicator */}
      {srsEnabled && srsCard && (
        <div className="absolute top-2 right-2 flex items-center gap-1">
          <div
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: getStageColor(srsCard.stage) }}
          />
          <span className="text-[10px] text-[var(--muted-foreground)] opacity-0 group-hover:opacity-100 transition-opacity">
            {getStageLabel(srsCard.stage)}
          </span>
        </div>
      )}

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
