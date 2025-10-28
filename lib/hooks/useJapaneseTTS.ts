'use client';
import { useCallback, useState, useEffect } from 'react';
import usePreferencesStore from '@/store/usePreferencesStore';

interface JapaneseVoice {
  name: string;
  lang: string;
  voice: SpeechSynthesisVoice;
}

interface TTSState {
  isPlaying: boolean;
  isSupported: boolean;
  availableVoices: JapaneseVoice[];
  currentVoice: JapaneseVoice | null;
}

export const useJapaneseTTS = () => {
  const silentMode = usePreferencesStore(state => state.silentMode);
  const [state, setState] = useState<TTSState>({
    isPlaying: false,
    isSupported: false,
    availableVoices: [],
    currentVoice: null
  });

  // SSR-safe check for browser environment
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Check browser support and load voices
  useEffect(() => {
    if (!isClient) return;

    // Assume TTS is supported in modern browsers
    const isSupported = true;

    if (isSupported) {
      // Load voices when they become available
      const loadVoices = () => {
        const voices = speechSynthesis.getVoices();

        // Filter for Japanese voices with fallback support
        const japaneseVoices = voices
          .filter(voice => {
            // Accept Japanese voices or voices that can handle Japanese text
            return (
              voice.lang.startsWith('ja') ||
              voice.lang === 'ja-JP' ||
              voice.lang === 'ja' ||
              // Accept common voice providers as fallback
              voice.name.toLowerCase().includes('japanese') ||
              voice.name.toLowerCase().includes('japan') ||
              voice.name.toLowerCase().includes('google') ||
              voice.name.toLowerCase().includes('microsoft') ||
              // Fallback: accept any voice if few are available
              voices.length <= 3
            );
          })
          .map(voice => ({
            name: voice.name,
            lang: voice.lang,
            voice: voice
          }))
          .sort((a, b) => {
            // Prioritize actual Japanese voices
            if (a.lang === 'ja-JP' && b.lang !== 'ja-JP') return -1;
            if (b.lang === 'ja-JP' && a.lang !== 'ja-JP') return 1;
            if (a.lang.startsWith('ja') && !b.lang.startsWith('ja')) return -1;
            if (b.lang.startsWith('ja') && !a.lang.startsWith('ja')) return 1;
            return a.name.localeCompare(b.name);
          });

        setState(prev => ({
          ...prev,
          availableVoices: japaneseVoices,
          currentVoice: japaneseVoices[0] || null
        }));

        // Fallback: If no Japanese voices, use any available voice
        if (voices.length > 0 && japaneseVoices.length === 0) {
          const fallbackVoice = voices[0];
          setState(prev => ({
            ...prev,
            availableVoices: [
              {
                name: fallbackVoice.name,
                lang: fallbackVoice.lang,
                voice: fallbackVoice
              }
            ],
            currentVoice: {
              name: fallbackVoice.name,
              lang: fallbackVoice.lang,
              voice: fallbackVoice
            }
          }));
        }
      };

      // Load voices immediately if available
      loadVoices();

      // Also listen for voice changes (some browsers load voices asynchronously)
      speechSynthesis.addEventListener('voiceschanged', loadVoices);

      // Try to load voices after a short delay (some browsers load voices asynchronously)
      setTimeout(loadVoices, 100);
      setTimeout(loadVoices, 500);

      return () => {
        speechSynthesis.removeEventListener('voiceschanged', loadVoices);
      };
    }
  }, [isClient]);

  const speak = useCallback(
    (
      text: string,
      options?: {
        rate?: number;
        pitch?: number;
        volume?: number;
        voice?: JapaneseVoice;
      }
    ) => {
      if (!isClient || silentMode) {
        return Promise.resolve();
      }

      // TTS is always supported in modern browsers

      return new Promise<void>(resolve => {
        // Stop any currently playing speech
        speechSynthesis.cancel();

        const utterance = new SpeechSynthesisUtterance(text);

        // Set language for Japanese text
        utterance.lang = 'ja-JP';

        // Set voice with fallback support
        const selectedVoice = options?.voice || state.currentVoice;
        if (selectedVoice) {
          utterance.voice = selectedVoice.voice;
        } else {
          // Fallback: try to find any available voice
          const voices = speechSynthesis.getVoices();
          if (voices.length > 0) {
            // Try to find a Japanese voice first, then fall back to any voice
            const japaneseVoice = voices.find(v => v.lang.startsWith('ja'));
            utterance.voice = japaneseVoice || voices[0];
          }
        }

        // Set speech parameters
        utterance.rate = options?.rate || 0.8;
        utterance.pitch = options?.pitch || 1.0;
        utterance.volume = options?.volume || 0.8;

        // Event handlers for speech synthesis
        utterance.onstart = () => {
          setState(prev => ({ ...prev, isPlaying: true }));
        };

        utterance.onend = () => {
          setState(prev => ({ ...prev, isPlaying: false }));
          resolve();
        };

        utterance.onerror = event => {
          console.warn('TTS Error:', event.error);
          setState(prev => ({ ...prev, isPlaying: false }));
          resolve();
        };

        // Add a small delay to ensure voices are loaded
        setTimeout(() => {
          try {
            // Try to speak even if no Japanese voice is available
            if (!utterance.voice && typeof window !== 'undefined') {
              const voices = speechSynthesis.getVoices();
              if (voices.length > 0) {
                utterance.voice = voices[0];
              }
            }

            speechSynthesis.speak(utterance);
          } catch (error) {
            console.warn('Speech synthesis error:', error);
            setState(prev => ({ ...prev, isPlaying: false }));
            resolve();
          }
        }, 50);
      });
    },
    [isClient, state.isSupported, state.currentVoice, silentMode]
  );

  const stop = useCallback(() => {
    if (isClient && state.isSupported) {
      speechSynthesis.cancel();
      setState(prev => ({ ...prev, isPlaying: false }));
    }
  }, [isClient, state.isSupported]);

  const setVoice = useCallback((voice: JapaneseVoice) => {
    setState(prev => ({ ...prev, currentVoice: voice }));
  }, []);

  // Method to refresh voices
  const refreshVoices = useCallback(() => {
    if (isClient && state.isSupported) {
      const voices = speechSynthesis.getVoices();
      const japaneseVoices = voices
        .filter(voice => {
          return (
            voice.lang.startsWith('ja') ||
            voice.lang === 'ja-JP' ||
            voice.lang === 'ja' ||
            voice.name.toLowerCase().includes('japanese') ||
            voice.name.toLowerCase().includes('japan')
          );
        })
        .map(voice => ({
          name: voice.name,
          lang: voice.lang,
          voice: voice
        }))
        .sort((a, b) => {
          if (a.lang === 'ja-JP' && b.lang !== 'ja-JP') return -1;
          if (b.lang === 'ja-JP' && a.lang !== 'ja-JP') return 1;
          if (a.lang.startsWith('ja') && !b.lang.startsWith('ja')) return -1;
          if (b.lang.startsWith('ja') && !a.lang.startsWith('ja')) return 1;
          return a.name.localeCompare(b.name);
        });

      setState(prev => ({
        ...prev,
        availableVoices: japaneseVoices,
        currentVoice: japaneseVoices[0] || prev.currentVoice
      }));
    }
  }, [isClient, state.isSupported]);

  return {
    speak,
    stop,
    setVoice,
    refreshVoices,
    isPlaying: state.isPlaying,
    isSupported: state.isSupported,
    availableVoices: state.availableVoices,
    currentVoice: state.currentVoice
  };
};
