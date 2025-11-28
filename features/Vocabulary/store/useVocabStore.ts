import { create } from 'zustand';
import { persist } from 'zustand/middleware';

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

  collapsedRows: number[];
  setCollapsedRows: (rows: number[]) => void;
  toggleCollapsedRow: (rowIndex: number) => void;
  initializeCollapsedRows: (numRows: number) => void;
}

const useVocabStore = create<IFormState>()(
  persist(
    (set) => ({
      selectedGameModeVocab: 'Pick',
      selectedVocabObjs: [],
      setSelectedGameModeVocab: (gameMode) =>
        set({ selectedGameModeVocab: gameMode }),
      addVocabObj: (vocabObj) =>
        set((state) => ({
          selectedVocabObjs: state.selectedVocabObjs
            .map((vocabObj) => vocabObj.word)
            .includes(vocabObj.word)
            ? state.selectedVocabObjs.filter(
                (currentVocabObj) => currentVocabObj.word !== vocabObj.word
              )
            : [...state.selectedVocabObjs, vocabObj],
        })),
      addVocabObjs: (vocabObjs) =>
        set((state) => ({
          selectedVocabObjs: vocabObjs.every((currentVocabObj) =>
            state.selectedVocabObjs
              .map((currentVocabObj) => currentVocabObj.word)
              .includes(currentVocabObj.word)
          )
            ? state.selectedVocabObjs.filter(
                (currentVocabObj) =>
                  !vocabObjs
                    .map((currentVocabObj) => currentVocabObj.word)
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
      setSelectedVocabCollection: (collection) =>
        set({ selectedVocabCollection: collection }),
      selectedVocabSets: [],
      setSelectedVocabSets: (sets) => set({ selectedVocabSets: sets }),
      clearVocabSets: () => {
        set(() => ({
          selectedVocabSets: [],
        }));
      },

      collapsedRows: [],
      setCollapsedRows: (rows) => set({ collapsedRows: rows }),
      toggleCollapsedRow: (rowIndex) =>
        set((state) => ({
          collapsedRows: state.collapsedRows.includes(rowIndex)
            ? state.collapsedRows.filter((i) => i !== rowIndex)
            : [...state.collapsedRows, rowIndex],
        })),
      initializeCollapsedRows: (numRows: number) =>
        set({ collapsedRows: Array.from({ length: numRows }, (_, i) => i) }),
    }),
    {
      name: 'vocab-store',
      //persist only the collapsedRows
      partialize: (state) => ({ collapsedRows: state.collapsedRows }),
    }
  )
);

export default useVocabStore;
