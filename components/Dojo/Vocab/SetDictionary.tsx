'use client';
import clsx from 'clsx';
import { IWord } from '@/lib/interfaces';
import { cardBorderStyles } from '@/static/styles';
import useVocabStore from '@/store/useVocabStore';
import usePreferencesStore from '@/store/usePreferencesStore';
import FuriganaText from '@/components/reusable/FuriganaText';

import N5Nouns from '@/static/vocab/n5/nouns';
import N4Nouns from '@/static/vocab/n4/nouns';
import N3Nouns from '@/static/vocab/n3/nouns';
import N2Nouns from '@/static/vocab/n2/nouns';

const createVocabSetRanges = (numSets: number) =>
  Array.from({ length: numSets }, (_, i) => i + 1).reduce(
    (acc, curr) => ({
      ...acc,
      [`Set ${curr}`]: [(curr - 1) * 10, curr * 10],
    }),
    {}
  );

const vocabSetSliceRanges = createVocabSetRanges(200);

const vocabData = {
  n5: {
    nouns: N5Nouns,
  },
  n4: {
    nouns: N4Nouns,
  },
  n3: {
    nouns: N3Nouns,
  },
  n2: {
    nouns: N2Nouns,
  },
};

type VocabData = Record<string, { nouns: IWord[] }>;

const SetDictionary = ({ set }: { set: string }) => {
  const showKana = usePreferencesStore(state => state.displayKana);

  const selectedVocabCollection = useVocabStore(
    state => state.selectedVocabCollection
  );
  const displayVocabCollection = (vocabData as VocabData)[
    selectedVocabCollection
  ]['nouns'];

  const sliceRange =
    vocabSetSliceRanges[set as keyof typeof vocabSetSliceRanges];

  return (
    <div className={clsx('flex flex-col', cardBorderStyles)}>
      {displayVocabCollection
        .slice(sliceRange[0], sliceRange[1])
        .map((wordObj: IWord, i: number) => (
          <div
            key={wordObj.word}
            className={clsx(
              'flex flex-col justify-start items-start gap-4 py-4 max-md:px-4',
              i !== 9 && 'border-b-1 border-[var(--border-color)]'
            )}
          >
            <FuriganaText
              text={wordObj.word}
              reading={wordObj.reading}
              className="text-6xl md:text-5xl"
              lang="ja"
            />
            <div className="flex flex-col gap-2 items-start">
              <span
                className={clsx(
                  'rounded-xl px-2 py-1 flex flex-row items-center',
                  'bg-[var(--background-color)] text-lg',
                  'text-[var(--secondary-color)] '
                )}
              >
                {typeof wordObj.reading === 'string'
                  ? showKana
                    ? wordObj.reading.split(' ')[1] || wordObj.reading
                    : wordObj.reading.split(' ')[0]
                  : ''}
              </span>
              <p className="text-xl md:text-2xl text-[var(--secondary-color)]">
                {wordObj.displayMeanings.join(', ')}
              </p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default SetDictionary;
