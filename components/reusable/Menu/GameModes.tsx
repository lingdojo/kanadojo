'use client';
import { Fragment } from 'react';
import useKanaStore from '@/store/useKanaStore';
import useKanjiStore from '@/store/useKanjiStore';
import useVocabStore from '@/store/useVocabStore';
import { HugeiconsIcon } from '@hugeicons/react';
import { Cursor01Icon as MousePointerClickIcon, KeyboardIcon as KeyboardIcon, CheckmarkCircle02Icon as CircleCheckIcon, CircleIcon } from '@hugeicons/core-free-icons';;
import clsx from 'clsx';
import { useClick } from '@/hooks/useAudio';
import { usePathname } from 'next/navigation';
import { useShallow } from 'zustand/react/shallow';
import { removeLocaleFromPath } from '@/lib/pathUtils';

const GameModes = () => {
  const pathname = usePathname();
  const pathWithoutLocale = removeLocaleFromPath(pathname);

  const { playClick } = useClick();

  const { selectedGameModeKana, setSelectedGameModeKana } = useKanaStore(
    useShallow(state => ({
      selectedGameModeKana: state.selectedGameModeKana,
      setSelectedGameModeKana: state.setSelectedGameModeKana
    }))
  );

  const { selectedGameModeKanji, setSelectedGameModeKanji } = useKanjiStore(
    useShallow(state => ({
      selectedGameModeKanji: state.selectedGameModeKanji,
      setSelectedGameModeKanji: state.setSelectedGameModeKanji
    }))
  );

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

  const setSelectedGameModeVocab = useVocabStore(
    useShallow(state => state.setSelectedGameModeVocab)
  );

  const setSelectedGameMode =
    pathWithoutLocale === '/kana'
      ? setSelectedGameModeKana
      : pathWithoutLocale === '/kanji'
      ? setSelectedGameModeKanji
      : pathWithoutLocale === '/vocabulary'
      ? setSelectedGameModeVocab
      : () => {};

  const gameModes = ['Pick', 'Reverse-Pick', 'Input', 'Reverse-Input'];

  return (
    <fieldset
      className={clsx(
        'rounded-2xl bg-[var(--card)]',
        'duration-250',
        'transition-all ease-in-out',
        'flex flex-col md:flex-row',
        'w-full '
      )}
    >
      {gameModes.map((gameMode, i) => (
        <Fragment key={gameMode}>
          <label
            className={clsx(
              'flex justify-center items-center',
              'text-[var(--muted-foreground)]',
              'w-full py-2',
              'hover:cursor-pointer',
              // 'hover:bg-[var(--border)]',
              i === 0 && 'rounded-tl-2xl rounded-bl-2xl',
              i === gameModes.length - 1 && 'rounded-tr-2xl rounded-br-2xl',
              'duration-250'
            )}
            onClick={() => playClick()}
          >
            <input
              type='radio'
              name='selectedGameMode'
              onChange={() => setSelectedGameMode(gameMode)}
              className='hidden'
            />
            <span className='text-lg font-medium py-2 px-1 sm:px-2 text-center flex flex-row justify-center items-center gap-2'>
              {gameMode === selectedGameMode ? (
                <HugeiconsIcon icon={CircleCheckIcon} color="currentColor" className="text-[var(--foreground)]" />
              ) : (
                <HugeiconsIcon icon={CircleIcon} color="currentColor" className="text-[var(--border)]" />
              )}
              <span>{gameMode.split('-').join(' ')}</span>
              {gameMode.toLowerCase() === 'pick' && (
                <HugeiconsIcon icon={MousePointerClickIcon} size={22} color="currentColor" className="text-[var(--foreground)]" />
              )}
              {gameMode.toLowerCase() === 'reverse-pick' && (
                <HugeiconsIcon icon={MousePointerClickIcon} size={22} color="currentColor" className=" scale-x-[-1] text-[var(--foreground)]" />
              )}
              {gameMode.toLowerCase() === 'input' && (
                <HugeiconsIcon icon={KeyboardIcon} size={22} color="currentColor" className="text-[var(--foreground)]" />
              )}
              {gameMode.toLowerCase() === 'reverse-input' && (
                <HugeiconsIcon icon={KeyboardIcon} size={22} color="currentColor" className="scale-y-[-1] text-[var(--foreground)]" />
              )}
            </span>
          </label>

          {i < gameModes.length - 1 && (
            <div
              className={clsx(
                'md:border-l-1 md:h-auto md:w-0',
                'border-[var(--border)]',
                'border-t-1 w-full border-[var(--border)]'
              )}
            />
          )}
        </Fragment>
      ))}
    </fieldset>
  );
};

export default GameModes;
