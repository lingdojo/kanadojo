'use client';
import { Fragment } from 'react';
import useKanaStore from '@/features/Kana/store/useKanaStore';
import useKanjiStore from '@/features/Kanji/store/useKanjiStore';
import useVocabStore from '@/features/Vocabulary/store/useVocabStore';
import { MousePointerClick, Keyboard, CircleCheck, Circle } from 'lucide-react';
import clsx from 'clsx';
import { useClick } from '@/shared/hooks';
import { usePathname } from 'next/navigation';
import { useShallow } from 'zustand/react/shallow';
import { removeLocaleFromPath } from '@/shared/lib/pathUtils';

const GameModes = () => {
  const pathname = usePathname();
  const pathWithoutLocale = removeLocaleFromPath(pathname);

  const { playClick } = useClick();

  const { selectedGameModeKana, setSelectedGameModeKana } = useKanaStore(
    useShallow(state => ({
      selectedGameModeKana: state.selectedGameModeKana,
      setSelectedGameModeKana: state.setSelectedGameModeKana,
    }))
  );

  const { selectedGameModeKanji, setSelectedGameModeKanji } = useKanjiStore(
    useShallow(state => ({
      selectedGameModeKanji: state.selectedGameModeKanji,
      setSelectedGameModeKanji: state.setSelectedGameModeKanji,
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

  // const gameModes = ['Pick', 'Reverse-Pick', 'Input', 'Reverse-Input'];
  const gameModes = ['Pick', 'Anti-Pick', 'Type'];

  return (
    <fieldset
      className={clsx(
        'rounded-2xl bg-[var(--card-color)]',
        'duration-250',
        'transition-all ease-in-out',
        'flex flex-col md:flex-row',
        'w-full',
        'max-md:border-b-4 max-md:border-[var(--border-color)]'
      )}
    >
      {gameModes.map((gameMode, i) => (
        <Fragment key={gameMode}>
          <label
            className={clsx(
              'flex justify-center items-center',
              'text-[var(--secondary-color)]',
              'w-full py-2',
              'hover:cursor-pointer',
              // 'hover:bg-[var(--border-color)]',
              i === 0 && 'rounded-tl-2xl rounded-bl-2xl',
              i === gameModes.length - 1 && 'rounded-tr-2xl rounded-br-2xl',
              'duration-250',

              'md:border-b-4 border-[var(--border-color)]',
              gameMode === selectedGameMode &&
                'md:border-[var(--secondary-color)]/80'
            )}
            onClick={() => playClick()}
          >
            <input
              type="radio"
              name="selectedGameMode"
              onChange={() => setSelectedGameMode(gameMode)}
              className="hidden"
            />
            <span className="text-lg font-medium py-2 px-1 sm:px-2 text-center flex flex-row justify-center items-center gap-2">
              {gameMode === selectedGameMode ? (
                <CircleCheck className="text-[var(--main-color)]" />
              ) : (
                <Circle className="text-[var(--border-color)]" />
              )}
              <span>{gameMode}</span>
              {gameMode.toLowerCase() === 'pick' && (
                <MousePointerClick
                  size={22}
                  className="text-[var(--main-color)] motion-safe:animate-pulse"
                />
              )}
              {gameMode.toLowerCase() === 'anti-pick' && (
                <MousePointerClick
                  size={22}
                  className=" scale-x-[-1] text-[var(--main-color)] motion-safe:animate-pulse"
                />
              )}
              {gameMode.toLowerCase() === 'type' && (
                <Keyboard
                  size={22}
                  className="text-[var(--main-color)] motion-safe:animate-pulse"
                />
              )}
              {gameMode.toLowerCase() === 'anti-type' && (
                <Keyboard
                  size={22}
                  className="scale-y-[-1] text-[var(--main-color)] motion-safe:animate-pulse"
                />
              )}
            </span>
          </label>

          {i < gameModes.length - 1 && (
            <div
              className={clsx(
                'md:border-l-1 md:h-auto md:w-0',
                'border-[var(--border-color)]',
                'border-t-1 w-full border-[var(--border-color)]'
              )}
            />
          )}
        </Fragment>
      ))}
    </fieldset>
  );
};

export default GameModes;
