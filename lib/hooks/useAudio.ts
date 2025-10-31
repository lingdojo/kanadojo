'use client';
import { useCallback } from 'react';
import useSound from 'use-sound';
import { Random } from 'random-js';
import usePreferencesStore from '@/store/usePreferencesStore';

const random = new Random();

const clickSoundUrls = [
  /* '/sounds/click/click9/click9_1.wav',
  '/sounds/click/click9/click9_2.wav',
  '/sounds/click/click9/click9_3.wav',
  '/sounds/click/click9/click9_4.wav',
  '/sounds/click/click9/click9_5.wav'
 */
  '/sounds/click/click4/click4_11.wav',
  '/sounds/click/click4/click4_22.wav',
  '/sounds/click/click4/click4_33.wav',
  '/sounds/click/click4/click4_44.wav',
  '/sounds/click/click4/click4_55.wav'
];

export const useClick = () => {
  const silentMode = usePreferencesStore(state => state.silentMode);

  // Instead of mapping, call each useSound explicitly:
  const [play1] = useSound(clickSoundUrls[0], {
    volume: silentMode ? 0 : 1,
    interrupt: true
  });
  const [play2] = useSound(clickSoundUrls[1], {
    volume: silentMode ? 0 : 1,
    interrupt: true
  });
  const [play3] = useSound(clickSoundUrls[2], {
    volume: silentMode ? 0 : 1,
    interrupt: true
  });
  const [play4] = useSound(clickSoundUrls[3], {
    volume: silentMode ? 0 : 1,
    interrupt: true
  });
  const [play5] = useSound(clickSoundUrls[4], {
    volume: silentMode ? 0 : 1,
    interrupt: true
  });

  const playFns = [play1, play2, play3, play4, play5];

  const playClick = () => {
    const idx = random.integer(0, playFns.length - 1);
    playFns[idx]();
  };

  return { playClick };
};

export const useCorrect = () => {
  const silentMode = usePreferencesStore(state => state.silentMode);

  // This URL is static, so no need to memoize
  const successSoundUrl = '/sounds/correct.wav';

  const [play] = useSound(successSoundUrl, {
    volume: silentMode ? 0 : 0.7,
    interrupt: true
  });

  return { playCorrect: play };
};

export const useError = () => {
  const silentMode = usePreferencesStore(state => state.silentMode);

  // This URL is static, so no need to memoize
  const errorSoundUrl = '/sounds/error/error1/error1_1.wav';

  const [play] = useSound(errorSoundUrl, {
    volume: silentMode ? 0 : 1,
    interrupt: true
  });

  // Memoize the callback so it's not recreated every render
  const playErrorTwice = useCallback(() => {
    play();
    setTimeout(() => play(), 90);
  }, [play]);

  return {
    playError: play,
    playErrorTwice
  };
};

export const useLong = () => {
  const silentMode = usePreferencesStore(state => state.silentMode);

  // This URL is static, so no need to memoize
  const longSoundUrl = '/sounds/long.wav';

  const [play] = useSound(longSoundUrl, {
    volume: silentMode ? 0 : 0.2,
    interrupt: true
  });

  return { playLong: play };
};
