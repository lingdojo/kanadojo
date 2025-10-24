import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ThemeState {
  displayKana: boolean;
  setDisplayKana: (displayKana: boolean) => void;

  theme: string;
  setTheme: (theme: string) => void;

  font: string;
  setFont: (fontName: string) => void;

  silentMode: boolean;
  setSilentMode: (silent: boolean) => void;

  hotkeysOn: boolean;
  setHotkeys: (hotkeys: boolean) => void;

  // Pronunciation settings
  pronunciationEnabled: boolean;
  setPronunciationEnabled: (enabled: boolean) => void;
  
  pronunciationSpeed: number;
  setPronunciationSpeed: (speed: number) => void;
  
  pronunciationPitch: number;
  setPronunciationPitch: (pitch: number) => void;
  furiganaEnabled: boolean;
  setFuriganaEnabled: (enabled: boolean) => void;
}

const useThemeStore = create<ThemeState>()(
  persist(
    set => ({
      displayKana: false,
      setDisplayKana: displayKana => set({ displayKana }),
      theme: 'light',
      setTheme: theme => set({ theme }),
      font: 'Zen Maru Gothic',
      setFont: fontName => set({ font: fontName }),
      silentMode: false,
      setSilentMode: silent => set({ silentMode: silent }),
      hotkeysOn: true,
      setHotkeys: hotkeys => set({ hotkeysOn: hotkeys }),
      
      // Pronunciation settings
      pronunciationEnabled: true,
      setPronunciationEnabled: enabled => set({ pronunciationEnabled: enabled }),
      pronunciationSpeed: 0.8,
      setPronunciationSpeed: speed => set({ pronunciationSpeed: speed }),
      pronunciationPitch: 1.0,
      setPronunciationPitch: pitch => set({ pronunciationPitch: pitch }),
      furiganaEnabled: false,
      setFuriganaEnabled: enabled => set({ furiganaEnabled: enabled })
    }),

    {
      name: 'theme-storage'
    }
  )
);

export default useThemeStore;
