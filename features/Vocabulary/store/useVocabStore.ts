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

  collapsedRows: Record<string, number[]>;
  setCollapsedRows: (unit: string, rows: number[]) => void;
  toggleCollapsedRow: (unit: string, rowIndex: number) => void;
  initializeCollapsedRows: (unit: string, numRows: number) => void;
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
      collapsedRows: {},
      setCollapsedRows: (unit, rows) =>
        set((state) => ({
          collapsedRows: { ...state.collapsedRows, [unit]: rows },
        })),
      toggleCollapsedRow: (unit, rowIndex) =>
        set((state) => {
          const unitRows = state.collapsedRows[unit] || [];
          return {
            collapsedRows: {
              ...state.collapsedRows,
              [unit]: unitRows.includes(rowIndex)
                ? unitRows.filter((i) => i !== rowIndex)
                : [...unitRows, rowIndex],
            },
          };
        }),
      initializeCollapsedRows: (unit: string, numRows: number) =>
        set((state) => ({
          collapsedRows: {
            ...state.collapsedRows,
            [unit]: Array.from({ length: numRows }, (_, i) => i),
          },
        })),
    }),
    {
      name: 'vocab-store',
      //persist only the collapsedRows
      partialize: (state) => ({ collapsedRows: state.collapsedRows }),
    }
  )
);

export default useVocabStore;
