'use client';
import clsx from 'clsx';
import { useClick } from '@/hooks/useAudio';
import useSRSStore from '@/store/useSRSStore';
import { ContentType } from '@/lib/interfaces';
import { getStageColor, getStageLabel } from '@/lib/srsUtils';

interface KanaCardProps {
  kana: string;
  romanji: string;
  isSelected?: boolean;
  onToggle?: () => void;
}

// Helper to detect if kana is hiragana or katakana
function detectKanaType(character: string): ContentType {
  const hiraganaRange = /[\u3040-\u309F]/;
  const katakanaRange = /[\u30A0-\u30FF]/;

  if (hiraganaRange.test(character)) return 'hiragana';
  if (katakanaRange.test(character)) return 'katakana';
  return 'hiragana'; // fallback
}

const KanaCard = ({
  kana,
  romanji,
  isSelected = false,
  onToggle,
}: KanaCardProps) => {
  const { playClick } = useClick();
  const srsEnabled = useSRSStore(state => state.srsEnabled);
  const cards = useSRSStore(state => state.cards);

  // Detect type and get SRS card
  const kanaType = detectKanaType(kana);
  const srsCard = cards[`${kana}-${kanaType}`];

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
