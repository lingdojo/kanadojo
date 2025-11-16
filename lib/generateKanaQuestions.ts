import { selectNextCharacter } from './srsSelection';
import { ContentType } from './interfaces';

export type KanaCharacter = {
  kana: string;
  romaji: string;
  type: string;
  group: string;
};

export function generateKanaQuestion(
  selectedKana: KanaCharacter[],
  srsEnabled: boolean = false
): KanaCharacter {
  if (selectedKana.length === 0) {
    throw new Error('No kana selected');
  }

  // Determine content type from the first kana
  const contentType: ContentType = selectedKana[0].type === 'hiragana' ? 'hiragana' : 'katakana';

  return selectNextCharacter(
    selectedKana,
    (kana) => kana.kana,
    contentType,
    srsEnabled
  );
}
