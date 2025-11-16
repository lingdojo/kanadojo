'use client';
import clsx from 'clsx';
import { useClick } from '@/hooks/useAudio';
import useSRSStore from '@/store/useSRSStore';
import { getStageColor, getStageLabel } from '@/lib/srsUtils';

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
  const srsEnabled = useSRSStore(state => state.srsEnabled);
  const cards = useSRSStore(state => state.cards);

  // Get SRS card for this kanji
  const srsCard = cards[`${kanji}-kanji`];

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
