import { ReactNode } from 'react';
import { Random } from 'random-js';
import SSRAudioButton from '@/components/reusable/SSRAudioButton';
import { GameConfig } from './types';

const random = new Random();

export interface KanaPair {
  kana: string;
  romaji: string;
}

export const kanaGameConfig: GameConfig<KanaPair> = {
  getDisplayChar: (item: KanaPair, isReverse: boolean) => {
    return isReverse ? item.romaji : item.kana;
  },

  getTargetAnswer: (item: KanaPair, isReverse: boolean) => {
    return isReverse ? item.kana : item.romaji;
  },

  getIncorrectOptions: (
    items: KanaPair[],
    currentItem: KanaPair,
    isReverse: boolean,
    count: number
  ) => {
    const filteredItems = items.filter(item => {
      if (isReverse) {
        return item.romaji !== currentItem.romaji;
      } else {
        return item.kana !== currentItem.kana;
      }
    });

    return filteredItems
      .map(item => (isReverse ? item.kana : item.romaji))
      .sort(() => random.real(0, 1) - 0.5)
      .slice(0, count);
  },

  isAnswerCorrect: (
    userInput: string,
    targetAnswer: string | string[],
    isReverse: boolean
  ) => {
    const target = Array.isArray(targetAnswer) ? targetAnswer[0] : targetAnswer;
    if (isReverse) {
      return userInput === target;
    } else {
      return userInput.toLowerCase() === target.toLowerCase();
    }
  },

  renderDisplayChar: (
    displayChar: string
  ): ReactNode => {
    return (
      <>
        <p className="text-8xl sm:text-9xl font-medium">{displayChar}</p>
        <SSRAudioButton
          text={displayChar}
          variant="icon-only"
          size="lg"
          className="bg-[var(--card)] text-[var(--muted-foreground)]"
        />
      </>
    );
  },

  shouldShowAnswerSummary: false,

  getSkipKey: (isReverse: boolean) => {
    return isReverse ? ' ' : '/';
  },
};
