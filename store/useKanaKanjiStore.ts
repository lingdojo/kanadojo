import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export interface IKanjiObj {
  id: number;
  kanjiChar: string;
  onyomi: string[];
  kunyomi: string[];
  displayMeanings: string[];
  fullDisplayMeanings: string[];
  meanings: string[];
}

interface IFormState {
  selectedGameModeKana: string;
  kanaGroupIndices: number[];
  setSelectedGameModeKana: (mode: string) => void;
  addKanaGroupIndex: (kanaGroupIndex: number) => void;
  addKanaGroupIndices: (kanaGroupIndices: number[]) => void;

  selectedGameModeKanji: string;
  selectedKanjiObjs: IKanjiObj[];
  setSelectedGameModeKanji: (mode: string) => void;
  addKanjiObj: (kanji: IKanjiObj) => void;
  addKanjiObjs: (kanjis: IKanjiObj[]) => void;
  clearKanjiObjs: () => void;

  selectedKanjiCollection: string;
  setSelectedKanjiCollection: (collection: string) => void;

  selectedKanjiSets: string[];
  setSelectedKanjiSets: (sets: string[]) => void;
  clearKanjiSets: () => void;
}

const useKanaKanjiStore = create<IFormState>()(
  persist(
    (set) => ({
      // KANA
      selectedGameModeKana: 'Pick',
      kanaGroupIndices: [],

      setSelectedGameModeKana: gameMode => set({ selectedGameModeKana: gameMode }),
      addKanaGroupIndex: kanaGroupIndex =>
        set(state => ({
          kanaGroupIndices: state.kanaGroupIndices.includes(kanaGroupIndex)
            ? state.kanaGroupIndices.filter(index => index !== kanaGroupIndex) // Remove if present
            : [...state.kanaGroupIndices, kanaGroupIndex] // Add if not present
        })),
      addKanaGroupIndices: kanaGroupIndices =>
        set(state => ({
          kanaGroupIndices: kanaGroupIndices.every(i =>
            state.kanaGroupIndices.includes(i)
          )
            ? state.kanaGroupIndices.filter(i => !kanaGroupIndices.includes(i)) // Remove if present
            : [...new Set([...state.kanaGroupIndices, ...kanaGroupIndices])]
        })),

      // KANJI
      selectedGameModeKanji: 'Pick',
      selectedKanjiObjs: [],
      setSelectedGameModeKanji: gameMode =>
        set({ selectedGameModeKanji: gameMode }),
      addKanjiObj: kanjiObj =>
        set(state => ({
          selectedKanjiObjs: state.selectedKanjiObjs
            .map(kanjiObj => kanjiObj.kanjiChar)
            .includes(kanjiObj.kanjiChar)
            ? state.selectedKanjiObjs.filter(
                currentKanjiObj => currentKanjiObj.kanjiChar !== kanjiObj.kanjiChar
              )
            : [...state.selectedKanjiObjs, kanjiObj]
        })),
      addKanjiObjs: kanjiObjs =>
        set(state => ({
          selectedKanjiObjs: kanjiObjs.every(currentKanjiObj =>
            state.selectedKanjiObjs
              .map(currentKanjiObj => currentKanjiObj.kanjiChar)
              .includes(currentKanjiObj.kanjiChar)
          )
            ? state.selectedKanjiObjs.filter(
                currentKanjiObj =>
                  !kanjiObjs
                    .map(currentKanjiObj => currentKanjiObj.kanjiChar)
                    .includes(currentKanjiObj.kanjiChar)
              )
            : [...new Set([...state.selectedKanjiObjs, ...kanjiObjs])]
        })),
      clearKanjiObjs: () => {
        set(() => ({
          selectedKanjiObjs: []
        }));
      },

      selectedKanjiCollection: 'n5',
      setSelectedKanjiCollection: collection =>
        set({ selectedKanjiCollection: collection }),

      selectedKanjiSets: [],
      setSelectedKanjiSets: sets => set({ selectedKanjiSets: sets }),
      clearKanjiSets: () => {
        set(() => ({
          selectedKanjiSets: []
        }));
      }
    }),
    {
      name: 'kana-kanji-store',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useKanaKanjiStore;
