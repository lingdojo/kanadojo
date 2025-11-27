'use client';
import { useEffect, useRef } from 'react';
import clsx from 'clsx';
import { Link } from '@/core/i18n/routing';
import useKanaStore from '@/features/Kana/store/useKanaStore';
import useKanjiStore from '@/features/Kanji/store/useKanjiStore';
import useVocabStore from '@/features/Vocabulary/store/useVocabStore';
import usePreferencesStore from '@/features/Themes';
import { useClick } from '@/shared/hooks';
import { Play, Timer } from 'lucide-react';

interface ITopBarProps {
  currentDojo: string;
}

const TopBar: React.FC<ITopBarProps> = ({ currentDojo }: ITopBarProps) => {
  const hotkeysOn = usePreferencesStore(state => state.hotkeysOn);

  const { playClick } = useClick();

  // Kana store
  const selectedGameModeKana = useKanaStore(
    state => state.selectedGameModeKana
  );
  const kanaGroupIndices = useKanaStore(state => state.kanaGroupIndices);

  // Kanji store
  const selectedGameModeKanji = useKanjiStore(
    state => state.selectedGameModeKanji
  );
  const selectedKanjiObjs = useKanjiStore(state => state.selectedKanjiObjs);

  const selectedGameModeVocab = useVocabStore(
    state => state.selectedGameModeVocab
  );

  const selectedGameMode =
    currentDojo === 'kana'
      ? selectedGameModeKana
      : currentDojo === 'kanji'
      ? selectedGameModeKanji
      : currentDojo === 'vocabulary'
      ? selectedGameModeVocab
      : '';

  const selectedWordObjs = useVocabStore(state => state.selectedVocabObjs);

  const isFilled =
    currentDojo === 'kana'
      ? kanaGroupIndices.length !== 0
      : currentDojo === 'kanji'
      ? selectedKanjiObjs.length >= 10
      : currentDojo === 'vocabulary'
      ? selectedWordObjs.length >= 10
      : false;

  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!hotkeysOn) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Enter') {
        buttonRef.current?.click();
      } else if (event.code === 'Space' || event.key === ' ') {
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [hotkeysOn]);

  return (
    <div className="flex flex-col gap-2">
      <div
        className={clsx(
          'flex flex-row',
          'rounded-2xl bg-[var(--card-color)]',
          'duration-250',
          'transition-all ease-in-out',
          'w-full',
          'overflow-hidden'
        )}
      >
        {/* Timed Challenge Button - Available for Kana, Vocabulary, and Kanji */}
        {(currentDojo === 'kana' ||
          currentDojo === 'vocabulary' ||
          currentDojo === 'kanji') && (
          <Link
            href={`${currentDojo}/timed-challenge`}
            className="w-1/2 h-full"
          >
            <button
              className={clsx(
                'w-full h-full text-xl p-3 flex flex-row justify-center items-center gap-2',
                ' bg-[var(--card-color)]',
                'text-[var(--secondary-color)]/80',
                'hover:cursor-pointer',
                'transition-all duration-275',
                'border-b-4 border-[var(--border-color)] hover:border-[var(--secondary-color)]/60 rounded-bl-2xl',
                'hover:bg-[var(--border-color)]'
              )}
              onClick={() => playClick()}
            >
              <Timer size={24} />
              <span className="font-semibold">Timed Challenge</span>
            </button>
          </Link>
        )}

        <div
          className={clsx(
            'border-l-1 h-auto w-0',
            'border-[var(--border-color)]'
          )}
        />

        <Link
          href={`/${currentDojo}/train`}
          className="w-1/2 group"
        >
          <button
            disabled={!selectedGameMode || !isFilled}
            ref={buttonRef}
            className={clsx(
              'w-full h-full text-2xl px-2 flex flex-row justify-center items-center gap-1 py-4',
              'text-[var(--border-color)]',
              selectedGameMode &&
                isFilled &&
                'text-[var(--main-color)] hover:bg-[var(--border-color)] hover:cursor-pointer hover:border-[var(--main-color)]/80 ',
              'text-[var(--border-color)]',
              'duration-250',
              'border-b-4 border-[var(--border-color)]  rounded-br-2xl'
            )}
            onClick={e => {
              e.currentTarget.blur();
              playClick();
            }}
          >
            {/* <span className='group-hover:underline'>Go!</span> */}
            <Play
              className={clsx(
                selectedGameMode && isFilled && 'motion-safe:animate-pulse'
              )}
              size={32}
            />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TopBar;
