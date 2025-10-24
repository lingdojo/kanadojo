'use client';
import clsx from 'clsx';
import { buttonBorderStyles } from '@/static/styles';
import useThemeStore from '@/store/useThemeStore';
import { useClick } from '@/lib/hooks/useAudio';
import { AudioLines, VolumeX, Volume2 } from 'lucide-react';
// import{Command, KeyboardOff} from 'lucide-react'
// import HotkeyReference from './HotkeyReference';

const Behavior = () => {
  const { playClick } = useClick();

  const displayKana = useThemeStore(state => state.displayKana);
  const setDisplayKana = useThemeStore(state => state.setDisplayKana);

  const silentMode = useThemeStore(state => state.silentMode);
  const setSilentMode = useThemeStore(state => state.setSilentMode);

  // Pronunciation settings
  const pronunciationEnabled = useThemeStore(
    state => state.pronunciationEnabled
  );
  const setPronunciationEnabled = useThemeStore(
    state => state.setPronunciationEnabled
  );
  const pronunciationSpeed = useThemeStore(state => state.pronunciationSpeed);
  const setPronunciationSpeed = useThemeStore(
    state => state.setPronunciationSpeed
  );
  const pronunciationPitch = useThemeStore(state => state.pronunciationPitch);
  const setPronunciationPitch = useThemeStore(
    state => state.setPronunciationPitch
  );
  const furiganaEnabled = useThemeStore(state => state.furiganaEnabled);
  const setFuriganaEnabled = useThemeStore(state => state.setFuriganaEnabled);

  /*   const hotkeysOn = useThemeStore(state => state.hotkeysOn);
  const setHotkeys = useThemeStore(state => state.setHotkeys);

  const hotkeys = [
    { key: 'Esc', action: 'Back' },
    { key: 'H', action: 'Home' },
    { key: 'P', action: 'Open Preferences' },
    { key: 'Enter \u23CE', action: 'Start Training' },
  ]; */

  return (
    <div className='flex flex-col gap-4'>
      <h4 className='text-lg'>
        In the character selection menu, by default, display:
      </h4>
      <div className='flex flex-row gap-4'>
        <button
          className={clsx(
            buttonBorderStyles,
            'text-center text-lg',
            'w-1/2 md:w-1/4 p-4',
            'text-[var(--secondary-color)]',
            'flex-1 overflow-hidden'
          )}
          onClick={() => {
            playClick();
            setDisplayKana(false);
          }}
        >
          <span className='text-[var(--main-color)]'>
            {!displayKana && '\u2B24 '}
          </span>
          Romaji, Translations&nbsp;🇺🇸
        </button>
        <button
          className={clsx(
            buttonBorderStyles,
            'text-center text-lg',
            'w-1/2 md:w-1/4 p-4',
            'text-[var(--secondary-color)]',
            'flex-1 overflow-hidden'
          )}
          onClick={() => {
            playClick();
            setDisplayKana(true);
          }}
        >
          <span className='text-[var(--main-color)]'>
            {displayKana && '\u2B24 '}
          </span>
          Kana, Kanji&nbsp;🇯🇵
        </button>
      </div>
      <h4 className='text-lg'>Play UI + feedback sound effects:</h4>
      <div className='flex flex-row gap-4'>
        <button
          className={clsx(
            buttonBorderStyles,
            'text-center text-lg',
            'w-1/2 md:w-1/4 p-4',
            'flex flex-row gap-1.5 justify-center items-end',
            'text-[var(--secondary-color)]',
            'flex-1 overflow-hidden'
          )}
          onClick={() => {
            playClick();
            setSilentMode(false);
          }}
        >
          <span>
            <span className='text-[var(--main-color)]'>
              {!silentMode && '\u2B24 '}
            </span>
            on
          </span>
          <AudioLines size={20} className='mb-1' />
        </button>
        <button
          className={clsx(
            buttonBorderStyles,
            'text-center text-lg',
            'w-1/2 md:w-1/4 p-4',
            'flex flex-row gap-1.5 justify-center items-end',
            'text-[var(--secondary-color)]',
            'flex-1 overflow-hidden'
          )}
          onClick={() => {
            playClick();
            setSilentMode(true);
          }}
        >
          <span>
            <span className='text-[var(--main-color)]'>
              {silentMode && '\u2B24 '}
            </span>
            off
          </span>
          <VolumeX size={20} className='mb-1' />
        </button>
      </div>

      <h4 className='text-lg'>Enable pronunciation audio:</h4>
      <div className='flex flex-row gap-4'>
        <button
          className={clsx(
            buttonBorderStyles,
            'text-center text-lg',
            'w-1/2 md:w-1/4 p-4',
            'flex flex-row gap-1.5 justify-center items-end',
            'text-[var(--secondary-color)]',
            'flex-1 overflow-hidden'
          )}
          onClick={() => {
            playClick();
            setPronunciationEnabled(true);
          }}
        >
          <span>
            <span className='text-[var(--main-color)]'>
              {pronunciationEnabled && '\u2B24 '}
            </span>
            on
          </span>
          <Volume2 size={20} className='mb-1' />
        </button>
        <button
          className={clsx(
            buttonBorderStyles,
            'text-center text-lg',
            'w-1/2 md:w-1/4 p-4',
            'flex flex-row gap-1.5 justify-center items-end',
            'text-[var(--secondary-color)]',
            'flex-1 overflow-hidden'
          )}
          onClick={() => {
            playClick();
            setPronunciationEnabled(false);
          }}
        >
          <span>
            <span className='text-[var(--main-color)]'>
              {!pronunciationEnabled && '\u2B24 '}
            </span>
            off
          </span>
          <VolumeX size={20} className='mb-1' />
        </button>
      </div>

      {pronunciationEnabled && (
        <>
          <h4 className='text-lg'>Pronunciation speed:</h4>
          <div className='flex flex-col gap-2'>
            <input
              type='range'
              min='0.5'
              max='1.5'
              step='0.1'
              value={pronunciationSpeed}
              onChange={e => setPronunciationSpeed(parseFloat(e.target.value))}
              className='w-full'
            />
            <div className='text-sm text-[var(--secondary-color)] text-center'>
              {pronunciationSpeed}x
            </div>
          </div>

          <h4 className='text-lg'>Pronunciation pitch:</h4>
          <div className='flex flex-col gap-2'>
            <input
              type='range'
              min='0.5'
              max='2.0'
              step='0.1'
              value={pronunciationPitch}
              onChange={e => setPronunciationPitch(parseFloat(e.target.value))}
              className='w-full'
            />
            <div className='text-sm text-[var(--secondary-color)] text-center'>
              {pronunciationPitch}x
            </div>
          </div>
        </>
      )}

      <h4 className='text-lg'>Show furigana (reading) for kanji and vocabulary:</h4>
      <div className='flex flex-row gap-4'>
        <button
          className={clsx(
            buttonBorderStyles,
            'text-center text-lg',
            'w-1/2 md:w-1/4 p-4',
            'flex flex-row gap-1.5 justify-center items-end',
            'text-[var(--secondary-color)]',
            'flex-1 overflow-hidden'
          )}
          onClick={() => {
            playClick();
            setFuriganaEnabled(true);
          }}
        >
          <span>
            <span className='text-[var(--main-color)]'>
              {furiganaEnabled && '\u2B24 '}
            </span>
            on
          </span>
          <span className='text-sm mb-1'>ふり</span>
        </button>
        <button
          className={clsx(
            buttonBorderStyles,
            'text-center text-lg',
            'w-1/2 md:w-1/4 p-4',
            'flex flex-row gap-1.5 justify-center items-end',
            'text-[var(--secondary-color)]',
            'flex-1 overflow-hidden'
          )}
          onClick={() => {
            playClick();
            setFuriganaEnabled(false);
          }}
        >
          <span>
            <span className='text-[var(--main-color)]'>
              {!furiganaEnabled && '\u2B24 '}
            </span>
            off
          </span>
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
