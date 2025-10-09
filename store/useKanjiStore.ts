import { create } from 'zustand';

export interface IKanjiObj {
  id: number;
  kanjiChar: string;
  onyomi: string[];
  kunyomi: string[];
  displayMeanings: string[];
  fullDisplayMeanings: string[];
  meanings: string[];
}

interface IKanjiState {
  selectedGameModeKanji: string;
  selectedKanjiObjs: IKanjiObj[];
  selectedKanjiCollection: string;
  selectedKanjiSets: string[];
  setSelectedGameModeKanji: (mode: string) => void;
  addKanjiObj: (kanji: IKanjiObj) => void;
  addKanjiObjs: (kanjis: IKanjiObj[]) => void;
  clearKanjiObjs: () => void;
  setSelectedKanjiCollection: (collection: string) => void;
  setSelectedKanjiSets: (sets: string[]) => void;
  clearKanjiSets: () => void;
}

const useKanjiStore = create<IKanjiState>(set => ({
  selectedGameModeKanji: 'Pick',
  selectedKanjiObjs: [],
  selectedKanjiCollection: 'n5',
  selectedKanjiSets: [],
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
  setSelectedKanjiCollection: collection =>
    set({ selectedKanjiCollection: collection }),
  setSelectedKanjiSets: sets => set({ selectedKanjiSets: sets }),
  clearKanjiSets: () => {
    set(() => ({
      selectedKanjiSets: []
    }));
  }
}));

export default useKanjiStore;