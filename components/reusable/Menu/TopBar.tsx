'use client';
import { useState, useEffect, useRef } from 'react';
import clsx from 'clsx';
import { Link } from '@/i18n/routing';
import useKanaStore from '@/store/useKanaStore';
import useKanjiStore from '@/store/useKanjiStore';
import useVocabStore from '@/store/useVocabStore';
import usePreferencesStore from '@/store/usePreferencesStore';
import { useClick } from '@/hooks/useAudio';
import { HugeiconsIcon } from '@hugeicons/react';
import { ArrowUpIcon, PlayIcon, Timer01Icon as TimerIcon, Cursor01Icon as MousePointerClickIcon, KeyboardIcon as KeyboardIcon } from '@hugeicons/core-free-icons';;
import { usePathname } from 'next/navigation';
import { useShallow } from 'zustand/react/shallow';
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
    (pathWithoutLocale === '/' || pathWithoutLocale === '/kana')
      ? selectedGameModeKana
      : pathWithoutLocale === '/kanji'
      ? selectedGameModeKanji
      : pathWithoutLocale === '/vocabulary'
      ? selectedGameModeVocab
      : '';

  const selectedWordObjs = useVocabStore(state => state.selectedWordObjs);

  const isFilled =
    (pathWithoutLocale === '/' || pathWithoutLocale === '/kana')
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
          'rounded-2xl bg-[var(--card)]',
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
              ? 'text-[var(--foreground)]'
              : 'text-[var(--muted-foreground)]',
            'hover:bg-[var(--border)] rounded-tl-2xl rounded-bl-2xl',
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
          <HugeiconsIcon icon={ArrowUpIcon} size={24} color="currentColor" className={clsx(
              'duration-250',
              focus === 'gameModes'
                ? 'text-[var(--muted-foreground)]'
                : 'text-[var(--border)]',
              !showGameModes && 'rotate-180'
            )} />
          {selectedGameMode ? selectedGameMode.split('-').join(' ') : 'not set'}
          {selectedGameMode.toLowerCase() === 'pick' && (
            <HugeiconsIcon icon={MousePointerClickIcon} size={22} color="currentColor" className="text-[var(--muted-foreground)]" />
          )}
          {selectedGameMode.toLowerCase() === 'reverse-pick' && (
            <HugeiconsIcon icon={MousePointerClickIcon} size={22} color="currentColor" className=" scale-x-[-1] text-[var(--muted-foreground)]" />
          )}
          {selectedGameMode.toLowerCase() === 'input' && (
            <HugeiconsIcon icon={KeyboardIcon} size={22} color="currentColor" className="text-[var(--muted-foreground)]" />
          )}
          {selectedGameMode.toLowerCase() === 'reverse-input' && (
            <HugeiconsIcon icon={KeyboardIcon} size={22} color="currentColor" className="scale-y-[-1] text-[var(--muted-foreground)]" />
          )}
        </button>

        <div
          className={clsx(
            'border-l-1 h-auto w-0',
            'border-[var(--border)]'
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
              'text-[var(--border)]',
              selectedGameMode &&
                isFilled &&
                'text-[var(--foreground)] hover:bg-[var(--border)] hover:cursor-pointer',
              'text-[var(--border)]',
              'rounded-tr-2xl rounded-br-2xl',
              'duration-250'
            )}
            onClick={e => {
              e.currentTarget.blur();
              playClick();
            }}
          >
            {/* <span className='group-hover:underline'>Go!</span> */}
            <HugeiconsIcon icon={PlayIcon} size={32} color="currentColor" className={clsx(selectedGameMode && isFilled && 'animate-pulse')} />
          </button>
        </Link>
      </div>

      {/* Timed Challenge Button - Only for Kana */}
      {(pathWithoutLocale === '/' || pathWithoutLocale === '/kana') && (
        <Link
          href={`${pathWithoutLocale === '/' ? '/kana' : pathWithoutLocale}/timed-challenge`}
          className="w-full"
        >
          <button
            className={clsx(
              'w-full text-xl p-3 flex flex-row justify-center items-center gap-2',
              'rounded-2xl bg-[var(--card)] hover:bg-[var(--foreground)]',
              'text-[var(--foreground)] hover:text-[var(--background)]',
              'hover:cursor-pointer',
              'transition-all duration-275'
              // 'border-0 border-[var(--foreground)]/20',
            )}
            onClick={() => playClick()}
          >
            <HugeiconsIcon icon={TimerIcon} size={24} color="currentColor" />
            <span className="font-semibold">Timed Challenge (60s)</span>
          </button>
        </Link>
      )}
    </div>
  );
};

export default TopBar;
