'use client';

import clsx from 'clsx';
import { toKana, toRomaji } from 'wanakana';
import { IWord } from '@/shared/types';
import { cardBorderStyles } from '@/shared/lib/styles';
import usePreferencesStore from '@/features/Preferences';
import FuriganaText from '@/shared/components/FuriganaText';

type SetDictionaryProps = {
  words: IWord[];
};

const SetDictionary = ({ words }: SetDictionaryProps) => {
  const showKana = usePreferencesStore(state => state.displayKana);

  return (
    <div className={clsx('flex flex-col', cardBorderStyles)}>
      {words.map((wordObj, i) => {
        const rawReading =
          typeof wordObj.reading === 'string' ? wordObj.reading : '';
        const baseReading = rawReading.split(' ')[1] || rawReading;
        const displayReading = showKana
          ? toKana(baseReading)
          : toRomaji(baseReading);

        return (
          <div
            key={`${wordObj.word}-${i}`}
            className={clsx(
              'flex flex-col justify-start items-start gap-4 py-4 max-md:px-4',
              i !== words.length - 1 &&
                'border-b-1 border-[var(--border-color)]'
            )}
          >
            <FuriganaText
              text={wordObj.word}
              reading={wordObj.reading}
              className='text-6xl md:text-5xl'
              lang='ja'
            />
            <div className='flex flex-col gap-2 items-start'>
              <span
                className={clsx(
                  'rounded-xl px-2 py-1 flex flex-row items-center',
                  'bg-[var(--background-color)] text-lg',
                  'text-[var(--secondary-color)] '
                )}
              >
                {displayReading}
              </span>
              <p className='text-xl md:text-2xl text-[var(--secondary-color)]'>
                {wordObj.displayMeanings.join(', ')}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SetDictionary;
