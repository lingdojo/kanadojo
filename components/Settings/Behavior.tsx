'use client';
import clsx from 'clsx';
import { buttonBorderStyles } from '@/static/styles';
import useThemeStore from '@/store/useThemeStore';
import { useClick } from '@/lib/hooks/useAudio';
import { AudioLines, VolumeX } from 'lucide-react';
// import{Command, KeyboardOff} from 'lucide-react'
// import HotkeyReference from './HotkeyReference';

const Behavior = () => {
  const { playClick } = useClick();

  const displayKana = useThemeStore(state => state.displayKana);
  const setDisplayKana = useThemeStore(state => state.setDisplayKana);

  const silentMode = useThemeStore(state => state.silentMode);
  const setSilentMode = useThemeStore(state => state.setSilentMode);

/*   const hotkeysOn = useThemeStore(state => state.hotkeysOn);
  const setHotkeys = useThemeStore(state => state.setHotkeys);

  const hotkeys = [
    { key: 'Esc', action: 'Back' },
    { key: 'H', action: 'Home' },
    { key: 'P', action: 'Open Preferences' },
    { key: 'Enter \u23CE', action: 'Start Training' },
  ]; */

  return (
    <div className="flex flex-col gap-4">
      <h4 className="text-lg">
        In the character selection menu, by default, display:
      </h4>
      <div className="flex flex-row gap-4">
        <button
          className={clsx(
            buttonBorderStyles,
            'text-center text-lg',
            'w-1/2 md:w-1/4 p-4',
            'text-[var(--secondary-color)]',"flex-1 overflow-hidden"
          )}
          onClick={() => {
            playClick();
            setDisplayKana(false);
          }}
        >
          <span className="text-[var(--main-color)]">
            {!displayKana && '\u2B24 '}
          </span>
          Romaji, Translations&nbsp;🇺🇸
        </button>
        <button
          className={clsx(
            buttonBorderStyles,
            'text-center text-lg',
            'w-1/2 md:w-1/4 p-4',
            'text-[var(--secondary-color)]',"flex-1 overflow-hidden"
          )}
          onClick={() => {
            playClick();
            setDisplayKana(true);
          }}
        >
          <span className="text-[var(--main-color)]">
            {displayKana && '\u2B24 '}
          </span>
          Kana, Kanji&nbsp;🇯🇵
        </button>
      </div>
      <h4 className="text-lg">Play UI + feedback sound effects:</h4>
      <div className="flex flex-row gap-4">
        <button
          className={clsx(
            buttonBorderStyles,
            'text-center text-lg',
            'w-1/2 md:w-1/4 p-4',
            'flex flex-row gap-1.5 justify-center items-end',
            'text-[var(--secondary-color)]'
          )}
          onClick={() => {
            playClick();
            setSilentMode(false);
          }}
        >
          <span>
            <span className="text-[var(--main-color)]">
              {!silentMode && '\u2B24 '}
            </span>
            on
          </span>
          <AudioLines
            size={20}
            className="mb-0.5"
          />
        </button>
        <button
          className={clsx(
            buttonBorderStyles,
            'text-center text-lg',
            'w-1/2 md:w-1/4 p-4',
            'flex flex-row gap-1.5 justify-center items-end',
            'text-[var(--secondary-color)]'
          )}
          onClick={() => {
            playClick();
            setSilentMode(true);
          }}
        >
          <span>
            <span className="text-[var(--main-color)]">
              {silentMode && '\u2B24 '}
            </span>
            off
          </span>
          <VolumeX
            size={20}
            className="mb-0.5"
          />
        </button>
      </div>
      {/*       <h4 className="text-lg">Enable hotkeys (desktop only):</h4>
      <div className="flex flex-row gap-4">
        <button
          className={clsx(
            buttonBorderStyles,
            'text-center text-lg',
            'w-1/2 md:w-1/4 p-4',
            'flex flex-row gap-1.5 justify-center items-end',
            'text-[var(--secondary-color)]'
          )}
          onClick={() => {
            playClick();
            setHotkeys(true);
          }}
        >
          <span>
            <span className="text-[var(--main-color)]">
              {hotkeysOn && '\u2B24 '}
            </span>
            on
          </span>
          <Command
            size={20}
            className="mb-0.5"
          />
        </button>
        <button
          className={clsx(
            buttonBorderStyles,
            'text-center text-lg',
            'w-1/2 md:w-1/4 p-4',
            'flex flex-row gap-1.5 justify-center items-end',
            'text-[var(--secondary-color)]'
          )}
          onClick={() => {
            playClick();
            setHotkeys(false);
          }}
        >
          <span>
            <span className="text-[var(--main-color)]">
              {!hotkeysOn && '\u2B24 '}
            </span>
            off
          </span>
          <KeyboardOff
            size={20}
            className="mb-0.5"
          />
        </button>
      </div>
      <HotkeyReference hotkeys={hotkeys} /> */}
    </div>
  );
};

export default Behavior;
