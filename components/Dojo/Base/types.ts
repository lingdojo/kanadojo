import { ReactNode } from 'react';

export interface GameConfig<T> {
  getDisplayChar: (item: T, isReverse: boolean) => string;
  getTargetAnswer: (item: T, isReverse: boolean) => string | string[];
  getIncorrectOptions: (
    items: T[],
    currentItem: T,
    isReverse: boolean,
    count: number
  ) => string[];

  isAnswerCorrect: (
    userInput: string,
    targetAnswer: string | string[],
    isReverse: boolean
  ) => boolean;

  renderDisplayChar?: (
    displayChar: string,
    item: T,
    isReverse: boolean
  ) => ReactNode;

  renderOption?: (
    option: string,
    items: T[],
    isReverse: boolean
  ) => ReactNode;

  shouldShowAnswerSummary?: boolean;

  getAnswerSummaryPayload?: (item: T) => any;

  getSkipKey?: (isReverse: boolean) => string;

  getDisplayCharLang?: (isReverse: boolean) => string | undefined;

  getInputLang?: (isReverse: boolean) => string | undefined;

  getTextSize?: (isReverse: boolean) => string;

  getGapSize?: (isReverse: boolean) => string;

  getLayoutDirection?: (isReverse: boolean) => string;
}

export interface BaseGameProps<T> {
  items: T[];
  config: GameConfig<T>;
  isHidden: boolean;
  isReverse?: boolean;
}
