import { create } from 'zustand';

export interface IVocabObj {
  word: string;
  reading: string;
  displayMeanings: string[];
  meanings: string[];
}

interface IFormState {
  selectedGameModeVocab: string;
  selectedVocabObjs: IVocabObj[];
  setSelectedGameModeVocab: (mode: string) => void;
  addVocabObj: (vocabObj: IVocabObj) => void;
  addVocabObjs: (vocabObjs: IVocabObj[]) => void;
  clearVocabObjs: () => void;

  selectedVocabCollection: string;
  setSelectedVocabCollection: (collection: string) => void;

  selectedVocabSets: string[];
  setSelectedVocabSets: (sets: string[]) => void;
  clearVocabSets: () => void;
}

const useVocabStore = create<IFormState>(set => ({
  selectedGameModeVocab: 'Pick',
  selectedVocabObjs: [],
  setSelectedGameModeVocab: gameMode =>
    set({ selectedGameModeVocab: gameMode }),
  addVocabObj: vocabObj =>
    set(state => ({
      selectedVocabObjs: state.selectedVocabObjs
        .map(vocabObj => vocabObj.word)
        .includes(vocabObj.word)
        ? state.selectedVocabObjs.filter(
            currentVocabObj => currentVocabObj.word !== vocabObj.word
          )
        : [...state.selectedVocabObjs, vocabObj],
    })),
  addVocabObjs: vocabObjs =>
    set(state => ({
      selectedVocabObjs: vocabObjs.every(currentVocabObj =>
        state.selectedVocabObjs
          .map(currentVocabObj => currentVocabObj.word)
          .includes(currentVocabObj.word)
      )
        ? state.selectedVocabObjs.filter(
            currentVocabObj =>
              !vocabObjs
                .map(currentVocabObj => currentVocabObj.word)
                .includes(currentVocabObj.word)
          )
        : [...new Set([...state.selectedVocabObjs, ...vocabObjs])],
    })),
  clearVocabObjs: () => {
    set(() => ({
      selectedVocabObjs: [],
    }));
  },

  selectedVocabCollection: 'n5',
  setSelectedVocabCollection: collection =>
    set({ selectedVocabCollection: collection }),
  selectedVocabSets: [],
  setSelectedVocabSets: sets => set({ selectedVocabSets: sets }),
  clearVocabSets: () => {
    set(() => ({
      selectedVocabSets: [],
    }));
  },
}));

export default useVocabStore;
