import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface IStatsState {
  score: number;
  setScore: (newScore: number) => void;

  showStats: boolean;
  toggleStats: () => void;

  numCorrectAnswers: number;
  numWrongAnswers: number;

  incrementCorrectAnswers: () => void;
  incrementWrongAnswers: () => void;

  correctAnswerTimes: number[];
  addCorrectAnswerTime: (newCorrectAnswerTime: number) => void;

  characterHistory: string[];
  addCharacterToHistory: (character: string) => void;

  characterScores: {
    [key: string]: {
      correct: number;
      wrong: number;
      accuracy: number;
    };
  };
  incrementCharacterScore: (
    character: string,
    fieldToIncrement: 'correct' | 'wrong'
  ) => void;

  resetStats: () => void;

  totalMilliseconds: number;
  setNewTotalMilliseconds: (newTotalMilliseconds: number) => void;

  stars: number;
  setStars: (newStars: number) => void;

  iconIndices: number[];
  addIconIndex: (newIconIndex: number) => void;

  timedCorrectAnswers: number;
  timedWrongAnswers: number;
  timedStreak: number;
  timedBestStreak: number;

  incrementTimedCorrectAnswers: () => void;
  incrementTimedWrongAnswers: () => void;
  resetTimedStats: () => void;

  // Vocab Timed Challenge Stats
  timedVocabCorrectAnswers: number;
  timedVocabWrongAnswers: number;
  timedVocabStreak: number;
  timedVocabBestStreak: number;

  incrementTimedVocabCorrectAnswers: () => void;
  incrementTimedVocabWrongAnswers: () => void;
  resetTimedVocabStats: () => void;

  // Kanji Timed Challenge Stats
  timedKanjiCorrectAnswers: number;
  timedKanjiWrongAnswers: number;
  timedKanjiStreak: number;
  timedKanjiBestStreak: number;

  incrementTimedKanjiCorrectAnswers: () => void;
  incrementTimedKanjiWrongAnswers: () => void;
  resetTimedKanjiStats: () => void;

  // Historical tracking
  allTimeStats: {
    totalSessions: number;
    totalCorrect: number;
    totalIncorrect: number;
    bestStreak: number;
    characterMastery: Record<string, { correct: number; incorrect: number; }>;
  };

  saveSession: () => void;
  clearAllProgress: () => void;
}

const useStatsStore = create<IStatsState>()(
  persist(
    (set, get) => ({
      score: 0,
      setScore: newScore => {
        set(() => ({
          score: newScore
        }));
      },

      showStats: false,
      toggleStats: () => {
        set(state => ({
          showStats: !state.showStats
        }));
      },

      numCorrectAnswers: 0,
      numWrongAnswers: 0,

      incrementCorrectAnswers: () => {
        set(state => ({
          numCorrectAnswers: state.numCorrectAnswers + 1
        }));
      },
      incrementWrongAnswers: () => {
        set(state => ({
          numWrongAnswers: state.numWrongAnswers + 1
        }));
      },

      correctAnswerTimes: [],
      addCorrectAnswerTime: newCorrectAnswerTime => {
        set(state => ({
          correctAnswerTimes: [...state.correctAnswerTimes, newCorrectAnswerTime]
        }));
      },

      characterHistory: [],
      addCharacterToHistory: character => {
        set(state => ({
          characterHistory: [...state.characterHistory, character]
        }));
      },
      characterScores: {},
      incrementCharacterScore: (character, fieldToIncrement) => {
        set(state => {
          const characterScoresCopy = structuredClone(state.characterScores);

          // Initialize the character's score object if it doesn't exist
          if (!characterScoresCopy[character]) {
            characterScoresCopy[character] = {
              correct: 0,
              wrong: 0,
              accuracy: 0
            };
          }

          characterScoresCopy[character][fieldToIncrement] += 1;

          characterScoresCopy[character]['accuracy'] =
            characterScoresCopy[character]['correct'] /
            (characterScoresCopy[character]['correct'] +
              characterScoresCopy[character]['wrong']);
          return { characterScores: characterScoresCopy };
        });
      },

      resetStats: () => {
        set(() => ({
          numCorrectAnswers: 0,
          numWrongAnswers: 0,
          characterHistory: [],
          characterScores: {},
          totalMilliseconds: 0,
          correctAnswerTimes: [],
          score: 0,
          stars: 0,
          iconIndices: []
        }));
      },

      totalMilliseconds: 0,
      setNewTotalMilliseconds: newTotalMilliseconds => {
        set(() => ({
          totalMilliseconds: newTotalMilliseconds
        }));
      },

      stars: 0,
      setStars: newStars =>
        set(() => ({
          stars: newStars
        })),

      iconIndices: [],
      addIconIndex: newIconIndex =>
        set(state => ({
          iconIndices: [...state.iconIndices, newIconIndex]
        })),

      timedCorrectAnswers: 0,
      timedWrongAnswers: 0,
      timedStreak: 0,
      timedBestStreak: 0,

      incrementTimedCorrectAnswers: () => {
        set(state => {
          const newStreak = state.timedStreak + 1;
          return {
            timedCorrectAnswers: state.timedCorrectAnswers + 1,
            timedStreak: newStreak,
            timedBestStreak: Math.max(state.timedBestStreak, newStreak)
          };
        });
      },

      incrementTimedWrongAnswers: () => {
        set(state => ({
          timedWrongAnswers: state.timedWrongAnswers + 1,
          timedStreak: 0
        }));
      },

      resetTimedStats: () => {
        set(state => ({
          timedCorrectAnswers: 0,
          timedWrongAnswers: 0,
          timedStreak: 0
          // DON'T reset timedBestStreak - it should persist across sessions
        }));
      },

      // Vocab Timed Challenge Stats
      timedVocabCorrectAnswers: 0,
      timedVocabWrongAnswers: 0,
      timedVocabStreak: 0,
      timedVocabBestStreak: 0,

      incrementTimedVocabCorrectAnswers: () => {
        set(state => {
          const newStreak = state.timedVocabStreak + 1;
          return {
            timedVocabCorrectAnswers: state.timedVocabCorrectAnswers + 1,
            timedVocabStreak: newStreak,
            timedVocabBestStreak: Math.max(state.timedVocabBestStreak, newStreak)
          };
        });
      },

      incrementTimedVocabWrongAnswers: () => {
        set(state => ({
          timedVocabWrongAnswers: state.timedVocabWrongAnswers + 1,
          timedVocabStreak: 0
        }));
      },

      resetTimedVocabStats: () => {
        set(state => ({
          timedVocabCorrectAnswers: 0,
          timedVocabWrongAnswers: 0,
          timedVocabStreak: 0
          // DON'T reset timedVocabBestStreak - it should persist across sessions
        }));
      },

      // Kanji Timed Challenge Stats
      timedKanjiCorrectAnswers: 0,
      timedKanjiWrongAnswers: 0,
      timedKanjiStreak: 0,
      timedKanjiBestStreak: 0,

      incrementTimedKanjiCorrectAnswers: () => {
        set(state => {
          const newStreak = state.timedKanjiStreak + 1;
          return {
            timedKanjiCorrectAnswers: state.timedKanjiCorrectAnswers + 1,
            timedKanjiStreak: newStreak,
            timedKanjiBestStreak: Math.max(state.timedKanjiBestStreak, newStreak)
          };
        });
      },

      incrementTimedKanjiWrongAnswers: () => {
        set(state => ({
          timedKanjiWrongAnswers: state.timedKanjiWrongAnswers + 1,
          timedKanjiStreak: 0
        }));
      },

      resetTimedKanjiStats: () => {
        set(state => ({
          timedKanjiCorrectAnswers: 0,
          timedKanjiWrongAnswers: 0,
          timedKanjiStreak: 0
          // DON'T reset timedKanjiBestStreak - it should persist across sessions
        }));
      },

      // Historical tracking implementation
      allTimeStats: {
        totalSessions: 0,
        totalCorrect: 0,
        totalIncorrect: 0,
        bestStreak: 0,
        characterMastery: {}
      },

      saveSession: () => {
        set((state) => {
          const currentStreak = state.numCorrectAnswers;
          const newAllTimeStats = {
            totalSessions: state.allTimeStats.totalSessions + 1,
            totalCorrect: state.allTimeStats.totalCorrect + state.numCorrectAnswers,
            totalIncorrect: state.allTimeStats.totalIncorrect + state.numWrongAnswers,
            bestStreak: Math.max(state.allTimeStats.bestStreak, currentStreak),
            characterMastery: { ...state.allTimeStats.characterMastery }
          };

          // Update character mastery
          Object.entries(state.characterScores).forEach(([char, scores]) => {
            if (!newAllTimeStats.characterMastery[char]) {
              newAllTimeStats.characterMastery[char] = { correct: 0, incorrect: 0 };
            }
            newAllTimeStats.characterMastery[char].correct += scores.correct;
            newAllTimeStats.characterMastery[char].incorrect += scores.wrong;
          });

          return { allTimeStats: newAllTimeStats };
        });

        // Trigger achievement check after session save
        if (typeof window !== 'undefined') {
          setTimeout(() => {
            const win = window as unknown as Record<string, unknown>;
            const achievementStore = win.__achievementStore as { getState: () => { checkAchievements: (stats: unknown) => void } } | undefined;
            if (achievementStore) {
              achievementStore.getState().checkAchievements(get());
            }
          }, 100);
        }
      },

      clearAllProgress: () => {
        set(() => ({
          allTimeStats: {
            totalSessions: 0,
            totalCorrect: 0,
            totalIncorrect: 0,
            bestStreak: 0,
            characterMastery: {}
          }
        }));
      }

    }),
    {
      name: 'kanadojo-stats',
      partialize: (state) => ({
        allTimeStats: state.allTimeStats
      })
    }
  )
);

export default useStatsStore;
