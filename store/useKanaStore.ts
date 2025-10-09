import { create } from 'zustand';

interface IKanaState {
  selectedGameModeKana: string;
  kanaGroupIndices: number[];
  setSelectedGameModeKana: (mode: string) => void;
  addKanaGroupIndex: (kanaGroupIndex: number) => void;
  addKanaGroupIndices: (kanaGroupIndices: number[]) => void;
}

const useKanaStore = create<IKanaState>(set => ({
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
    }))
}));

export default useKanaStore;