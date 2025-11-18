'use client';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { IWord } from '@/lib/interfaces';
import { cardBorderStyles } from '@/static/styles';
import useVocabStore from '@/store/useVocabStore';
import usePreferencesStore from '@/store/usePreferencesStore';
import FuriganaText from '@/components/reusable/FuriganaText';

type RawVocabEntry = {
  jmdict_seq: string;
  kana: string;
  kanji: string;
  waller_definition: string;
};

const vocabImporters = {
  n5: () =>
    fetch('/vocab/n5.json').then(res => res.json() as Promise<RawVocabEntry[]>),
  n4: () =>
    fetch('/vocab/n4.json').then(res => res.json() as Promise<RawVocabEntry[]>),
  n3: () =>
    fetch('/vocab/n3.json').then(res => res.json() as Promise<RawVocabEntry[]>),
  n2: () =>
    fetch('/vocab/n2.json').then(res => res.json() as Promise<RawVocabEntry[]>),
} as const;

type VocabCollectionKey = keyof typeof vocabImporters;

const toWordObj = (entry: RawVocabEntry): IWord => {
  const definitionPieces = entry.waller_definition
    .split(/[;,]/)
    .map(piece => piece.trim())
    .filter(Boolean);

  return {
    word: entry.kanji?.trim() || entry.kana,
    reading: `${entry.kana} ${entry.kana}`.trim(),
    displayMeanings: definitionPieces,
    meanings: definitionPieces,
  };
};

const createVocabSetRanges = (numSets: number) =>
  Array.from({ length: numSets }, (_, i) => i + 1).reduce(
    (acc, curr) => ({
      ...acc,
      [`Set ${curr}`]: [(curr - 1) * 10, curr * 10],
    }),
    {}
  );

const vocabSetSliceRanges = createVocabSetRanges(200);

const SetDictionary = ({ set }: { set: string }) => {
  const showKana = usePreferencesStore(state => state.displayKana);

  const selectedVocabCollection = useVocabStore(
    state => state.selectedVocabCollection
  );
  const [vocabCollections, setVocabCollections] = useState<
    Partial<Record<VocabCollectionKey, IWord[]>>
  >({});

  useEffect(() => {
    let isMounted = true;

    const loadVocab = async () => {
      const level = selectedVocabCollection as VocabCollectionKey;
      if (vocabCollections[level]) return;

      const importer = vocabImporters[level];
      if (!importer) return;

      const vocabData = await importer();
      if (!isMounted) return;

      setVocabCollections(prev => ({
        ...prev,
        [level]: vocabData.map(toWordObj),
      }));
    };

    void loadVocab();

    return () => {
      isMounted = false;
    };
    // Intentionally omitting vocabCollections from deps to avoid refetching
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const displayVocabCollection =
    vocabCollections[selectedVocabCollection as VocabCollectionKey] ?? [];

  const sliceRange =
    vocabSetSliceRanges[set as keyof typeof vocabSetSliceRanges];

  return (
    <div className={clsx('flex flex-col', cardBorderStyles)}>
      {displayVocabCollection
        .slice(sliceRange[0], sliceRange[1])
        .map((wordObj: IWord, i: number) => (
          <div
            key={wordObj.word + Math.random() * 999}
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
