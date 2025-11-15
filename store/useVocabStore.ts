import { create } from 'zustand';

export interface IWordObj {
  word: string;
  reading: string | string[];
  displayMeanings: string[];
  meanings: string[];
}

interface IFormState {
  selectedGameModeVocab: string;
  selectedWordObjs: IWordObj[];
  setSelectedGameModeVocab: (mode: string) => void;
  addWordObj: (kanji: IWordObj) => void;
  addWordObjs: (kanjis: IWordObj[]) => void;
  clearWordObjs: () => void;

  selectedVocabCollection: string;
  setSelectedVocabCollection: (collection: string) => void;

  selectedVocabSets: string[];
  setSelectedVocabSets: (sets: string[]) => void;
  clearVocabSets: () => void;
}

const useVocabStore = create<IFormState>(set => ({
  selectedGameModeVocab: 'Pick',
  selectedWordObjs: [],
  setSelectedGameModeVocab: gameMode =>
    set({ selectedGameModeVocab: gameMode }),
  addWordObj: wordObj =>
    set(state => ({
      selectedWordObjs: state.selectedWordObjs
        .map(wordObj => wordObj.word)
        .includes(wordObj.word)
        ? state.selectedWordObjs.filter(
            currentWordObj => currentWordObj.word !== wordObj.word
          )
        : [...state.selectedWordObjs, wordObj]
    })),
  addWordObjs: wordObjs =>
    set(state => ({
      selectedWordObjs: wordObjs.every(currentWordObj =>
        state.selectedWordObjs
          .map(currentWordObj => currentWordObj.word)
          .includes(currentWordObj.word)
      )
        ? state.selectedWordObjs.filter(
            currentWordObj =>
              !wordObjs
                .map(currentWordObj => currentWordObj.word)
                .includes(currentWordObj.word)
          )
        : [...new Set([...state.selectedWordObjs, ...wordObjs])]
    })),
  clearWordObjs: () => {
    set(() => ({
      selectedWordObjs: []
    }));
  },

  selectedVocabCollection: 'n5',
  setSelectedVocabCollection: collection =>
    set({ selectedVocabCollection: collection }),
  selectedVocabSets: [],
  setSelectedVocabSets: sets => set({ selectedVocabSets: sets }),
  clearVocabSets: () => {
    set(() => ({
      selectedVocabSets: []
    }));
  }
}));

export default useVocabStore;
