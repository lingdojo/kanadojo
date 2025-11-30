export interface PatchNote {
  version: string;
  date: string;
  changes: string[];
}

export const patchNotesData: PatchNote[] = [
  {
    version: '0.1.6',
    date: 'November 30, 2025',
    changes: [
      'Added streak counter to all game modes (Kana, Vocabulary, and Kanji)',
      'Streak counter now displays in real-time during gameplay',
      'Track your best streak across all game modes',
      'Improved stats tracking and display in game results'
    ]
  }
];
