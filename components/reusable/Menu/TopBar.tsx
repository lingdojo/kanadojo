'use client';
import { useState, useEffect, useRef } from 'react';
import clsx from 'clsx';
import { Link } from '@/i18n/routing';
import useKanaStore from '@/store/useKanaStore';
import useKanjiStore from '@/store/useKanjiStore';
import useVocabStore from '@/store/useVocabStore';
import usePreferencesStore from '@/store/usePreferencesStore';
import { useClick } from '@/hooks/useAudio';
import { ChevronUp, Play, Timer } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useShallow } from 'zustand/react/shallow';
import { MousePointerClick, Keyboard } from 'lucide-react';
import { removeLocaleFromPath } from '@/lib/pathUtils';

interface ITopBarProps {
  showGameModes: boolean;
  setShowGameModes: React.Dispatch<React.SetStateAction<boolean>>;
  currentDojo: string;
}

const TopBar: React.FC<ITopBarProps> = ({
  showGameModes,
  setShowGameModes,
}) => {
  const hotkeysOn = usePreferencesStore(state => state.hotkeysOn);

  const pathname = usePathname();
  const pathWithoutLocale = removeLocaleFromPath(pathname);

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
    useShallow(state => state.selectedGameModeVocab)
  );

  const selectedGameMode =
    pathWithoutLocale === '/kana'
      ? selectedGameModeKana
      : pathWithoutLocale === '/kanji'
      ? selectedGameModeKanji
      : pathWithoutLocale === '/vocabulary'
      ? selectedGameModeVocab
      : '';

  const selectedWordObjs = useVocabStore(state => state.selectedVocabObjs);

  const isFilled =
    pathWithoutLocale === '/kana'
      ? kanaGroupIndices.length !== 0
      : pathWithoutLocale === '/kanji'
      ? selectedKanjiObjs.length >= 10
      : pathWithoutLocale === '/vocabulary'
      ? selectedWordObjs.length >= 10
      : false;

  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const [focus, setFocus] = useState('');

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
        <button
          className={clsx(
            'text-2xl w-1/2 p-2 flex flex-row justify-center items-center gap-2',
            'h-full',
            'overflow-hidden',
            'hover:cursor-pointer',
            selectedGameMode
              ? 'text-[var(--main-color)]'
              : 'text-[var(--secondary-color)]',
            'hover:bg-[var(--border-color)] rounded-tl-2xl rounded-bl-2xl',
            'duration-250',
            'relative'
          )}
          onClick={e => {
            playClick();
            e.currentTarget.blur();
            setShowGameModes(showGameModes => !showGameModes);
          }}
          onMouseEnter={() => setFocus('gameModes')}
          onMouseLeave={() => setFocus('')}
          title="Press Enter or Space to toggle (Kanji/Vocab)"
        >
          <ChevronUp
            className={clsx(
              'duration-250',
              focus === 'gameModes'
                ? 'text-[var(--secondary-color)]'
                : 'text-[var(--border-color)]',
              !showGameModes && 'rotate-180'
            )}
            size={24}
          />
          {selectedGameMode ? selectedGameMode.split('-').join(' ') : 'not set'}
          {selectedGameMode.toLowerCase() === 'pick' && (
            <MousePointerClick
              size={22}
              className="text-[var(--secondary-color)]"
            />
          )}
          {selectedGameMode.toLowerCase() === 'reverse-pick' && (
            <MousePointerClick
              size={22}
              className=" scale-x-[-1] text-[var(--secondary-color)]"
            />
          )}
          {selectedGameMode.toLowerCase() === 'input' && (
            <Keyboard
              size={22}
              className="text-[var(--secondary-color)]"
            />
          )}
          {selectedGameMode.toLowerCase() === 'reverse-input' && (
            <Keyboard
              size={22}
              className="scale-y-[-1] text-[var(--secondary-color)]"
            />
          )}
        </button>

        <div
          className={clsx(
            'border-l-1 h-auto w-0',
            'border-[var(--border-color)]'
          )}
        />

        <Link
          href={`${pathWithoutLocale}/train/${selectedGameMode}`}
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
                'text-[var(--main-color)] hover:bg-[var(--border-color)] hover:cursor-pointer',
              'text-[var(--border-color)]',
              'rounded-tr-2xl rounded-br-2xl',
              'duration-250'
            )}
            onClick={e => {
              e.currentTarget.blur();
              playClick();
            }}
          >
            {/* <span className='group-hover:underline'>Go!</span> */}
            <Play
              // className={clsx(selectedGameMode && isFilled && 'animate-pulse')}
              size={32}
            />
          </button>
        </Link>
      </div>

      {/* Timed Challenge Button - Only for Kana */}
      {pathWithoutLocale === '/kana' && (
        <Link
          href={`${pathWithoutLocale}/timed-challenge`}
          className="w-full"
        >
          <button
            className={clsx(
              'w-full text-xl p-3 flex flex-row justify-center items-center gap-2',
              'rounded-2xl bg-[var(--card-color)] hover:bg-[var(--main-color)]/80',
              'text-[var(--main-color)] hover:text-[var(--background-color)]',
              'hover:cursor-pointer',
              'transition-all duration-275'
              // 'border-0 border-[var(--main-color)]/20',
            )}
            onClick={() => playClick()}
          >
            <Timer size={24} />
            <span className="font-semibold">Timed Challenge (60s)</span>
          </button>
        </Link>
      )}
    </div>
  );
};

export default TopBar;
