export type KanaCharacter = {
  kana: string;
  romaji: string;
  type: string;
  group: string;
};

export function generateKanaQuestion(selectedKana: KanaCharacter[]): KanaCharacter {
  if (selectedKana.length === 0) {
    throw new Error('No kana selected');
  }

  const randomIndex = Math.floor(Math.random() * selectedKana.length);
  return selectedKana[randomIndex];
}
