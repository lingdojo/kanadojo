import { ReactNode } from 'react';
import { Random } from 'random-js';
import { IWordObj } from '@/store/useVocabStore';
import SSRAudioButton from '@/components/reusable/SSRAudioButton';
import FuriganaText from '@/components/reusable/FuriganaText';
import { GameConfig } from './types';

const random = new Random();

export const vocabGameConfig: GameConfig<IWordObj> = {
  getDisplayChar: (item: IWordObj, isReverse: boolean) => {
    return isReverse ? item.meanings[0] : item.word;
  },

  getTargetAnswer: (item: IWordObj, isReverse: boolean) => {
    return isReverse ? item.word : item.meanings;
  },

  getIncorrectOptions: (
    items: IWordObj[],
    currentItem: IWordObj,
    isReverse: boolean,
    count: number
  ) => {
    const filteredItems = items.filter(item => {
      if (isReverse) {
        return item.meanings[0] !== currentItem.meanings[0];
      } else {
        return item.word !== currentItem.word;
      }
    });

    return filteredItems
      .map(item => (isReverse ? item.word : item.meanings[0]))
      .sort(() => random.real(0, 1) - 0.5)
      .slice(0, count);
  },

  isAnswerCorrect: (
    userInput: string,
    targetAnswer: string | string[],
    isReverse: boolean
  ) => {
    if (isReverse) {
      return userInput === targetAnswer;
    } else {
      return Array.isArray(targetAnswer) && targetAnswer.includes(userInput.toLowerCase());
    }
  },

  renderDisplayChar: (
    displayChar: string,
    item: IWordObj,
    isReverse: boolean
  ): ReactNode => {
    const textSize = isReverse ? 'text-6xl md:text-8xl' : 'text-9xl';
    const displayCharLang = isReverse ? undefined : 'ja';

    return (
      <>
        <FuriganaText
          text={displayChar}
          reading={!isReverse ? item.reading : undefined}
          className={textSize}
          lang={displayCharLang}
        />
        <SSRAudioButton
          text={displayChar}
          variant="icon-only"
          size="lg"
          className="bg-[var(--card)] text-[var(--muted-foreground)]"
        />
      </>
    );
  },

  renderOption: (option: string, items: IWordObj[], isReverse: boolean): ReactNode => {
    if (isReverse) {
      const wordObj = items.find(obj => obj.word === option);
      return (
        <FuriganaText
          text={option}
          reading={wordObj?.reading}
        />
      );
    }
    return <span>{option}</span>;
  },

  shouldShowAnswerSummary: true,

  getAnswerSummaryPayload: (item: IWordObj) => {
    return item;
  },

  getSkipKey: () => 'Ctrl+Space',

  getDisplayCharLang: (isReverse: boolean) => {
    return isReverse ? 'en' : 'ja';
  },

  getInputLang: (isReverse: boolean) => {
    return isReverse ? 'ja' : 'en';
  },

  getTextSize: (isReverse: boolean) => {
    return isReverse ? 'text-6xl sm:text-8xl' : 'text-8xl sm:text-9xl';
  },

  getGapSize: (isReverse: boolean) => {
    return isReverse ? 'gap-6 sm:gap-10' : 'gap-4 sm:gap-10';
  },

  getLayoutDirection: (isReverse: boolean) => {
    return isReverse ? 'flex-row' : 'flex-col md:flex-row';
  },
};
