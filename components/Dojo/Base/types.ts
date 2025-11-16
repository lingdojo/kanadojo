import { ReactNode } from 'react';
import { IKanjiObj } from '@/store/useKanjiStore';
import { IWordObj } from '@/store/useVocabStore';
import { ContentType } from '@/lib/interfaces';

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

  // SRS support
  getCharacter?: (item: T) => string;
  contentType?: ContentType;

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

  getAnswerSummaryPayload?: (item: T) => IKanjiObj | IWordObj;

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
