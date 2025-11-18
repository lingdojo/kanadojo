'use client';
import clsx from 'clsx';
import useKanjiStore from '@/store/useKanjiStore';
import useVocabStore from '@/store/useVocabStore';
import { usePathname } from 'next/navigation';
import { removeLocaleFromPath } from '@/lib/pathUtils';
import {
  N5KanjiLength,
  N4KanjiLength,
  N3KanjiLength,
  N2KanjiLength,
  N1KanjiLength,
  N5VocabLength,
  N4VocabLength,
  N3VocabLength,
  N2VocabLength,
} from '@/static/unitSets';
import { useClick } from '@/hooks/useAudio';
import { CircleCheck, Circle, Trash } from 'lucide-react';
import { miniButtonBorderStyles } from '@/static/styles';

const numCollectionSets = {
  '/kanji': {
    n5: Math.ceil(N5KanjiLength / 10),
    n4: Math.ceil(N4KanjiLength / 10),
    n3: Math.ceil(N3KanjiLength / 10),
    n2: Math.ceil(N2KanjiLength / 10),
    n1: Math.ceil(N1KanjiLength / 10),
  },
  '/vocabulary': {
    n5: Math.ceil(N5VocabLength / 10),
    n4: Math.ceil(N4VocabLength / 10),
    n3: Math.ceil(N3VocabLength / 10),
    n2: Math.ceil(N2VocabLength / 10),
  },
};

const CollectionSelector = () => {
  const { playClick } = useClick();

  const selectedKanjiCollection = useKanjiStore(
    state => state.selectedKanjiCollection
  );
  const setSelectedKanjiCollection = useKanjiStore(
    state => state.setSelectedKanjiCollection
  );

  const selectedVocabCollection = useVocabStore(
    state => state.selectedVocabCollection
  );
  const setSelectedVocabCollection = useVocabStore(
    state => state.setSelectedVocabCollection
  );

  const selectedKanjiSets = useKanjiStore(state => state.selectedKanjiSets);

  const selectedVocabSets = useVocabStore(state => state.selectedVocabSets);

  const clearKanjiObjs = useKanjiStore(state => state.clearKanjiObjs);
  const clearVocabObjs = useVocabStore(state => state.clearVocabObjs);

  const clearKanjiSets = useKanjiStore(state => state.clearKanjiSets);
  const clearVocabSets = useVocabStore(state => state.clearVocabSets);

  const pathname = usePathname();
  const pathWithoutLocale = removeLocaleFromPath(pathname);

  const selectedCollection =
    pathWithoutLocale === '/kanji'
      ? selectedKanjiCollection
      : pathWithoutLocale === '/vocabulary'
      ? selectedVocabCollection
      : null;

  const setSelectedCollection =
    pathWithoutLocale === '/kanji'
      ? setSelectedKanjiCollection
      : pathWithoutLocale === '/vocabulary'
      ? setSelectedVocabCollection
      : () => {};

  const collections: {
    name: 'n5' | 'n4' | 'n3' | 'n2' | 'n1';
    displayName: string;
  }[] = [
    {
      name: 'n5',
      displayName: `Unit 1, Sets 1-${
        numCollectionSets[pathWithoutLocale as keyof typeof numCollectionSets]
          .n5
      }`,
    },
    {
      name: 'n4',
      displayName: `Unit 2, Sets ${
        numCollectionSets[pathWithoutLocale as keyof typeof numCollectionSets]
          .n5 + 1
      }-${
        numCollectionSets[pathWithoutLocale as keyof typeof numCollectionSets]
          .n5 +
        numCollectionSets[pathWithoutLocale as keyof typeof numCollectionSets]
          .n4
      }`,
    },
    {
      name: 'n3',
      displayName: `Unit 3, Sets ${
        numCollectionSets[pathWithoutLocale as keyof typeof numCollectionSets]
          .n5 +
        numCollectionSets[pathWithoutLocale as keyof typeof numCollectionSets]
          .n4 +
        1
      }-${
        numCollectionSets[pathWithoutLocale as keyof typeof numCollectionSets]
          .n5 +
        numCollectionSets[pathWithoutLocale as keyof typeof numCollectionSets]
          .n4 +
        numCollectionSets[pathWithoutLocale as keyof typeof numCollectionSets]
          .n3
      }`,
    },
    {
      name: 'n2',
      displayName: `Unit 4, Sets ${
        numCollectionSets[pathWithoutLocale as keyof typeof numCollectionSets]
          .n5 +
        numCollectionSets[pathWithoutLocale as keyof typeof numCollectionSets]
          .n4 +
        numCollectionSets[pathWithoutLocale as keyof typeof numCollectionSets]
          .n3 +
        1
      }-${
        numCollectionSets[pathWithoutLocale as keyof typeof numCollectionSets]
          .n5 +
        numCollectionSets[pathWithoutLocale as keyof typeof numCollectionSets]
          .n4 +
        numCollectionSets[pathWithoutLocale as keyof typeof numCollectionSets]
          .n3 +
        numCollectionSets[pathWithoutLocale as keyof typeof numCollectionSets]
          .n2
      }`,
    },
    {
      name: 'n1',
      displayName: `Unit 5, Sets ${
        numCollectionSets[pathWithoutLocale as keyof typeof numCollectionSets]
          .n5 +
        numCollectionSets[pathWithoutLocale as keyof typeof numCollectionSets]
          .n4 +
        numCollectionSets[pathWithoutLocale as keyof typeof numCollectionSets]
          .n3 +
        numCollectionSets[pathWithoutLocale as keyof typeof numCollectionSets]
          .n2 +
        1
      }-${
        numCollectionSets[pathWithoutLocale as keyof typeof numCollectionSets]
          .n5 +
        numCollectionSets[pathWithoutLocale as keyof typeof numCollectionSets]
          .n4 +
        numCollectionSets[pathWithoutLocale as keyof typeof numCollectionSets]
          .n3 +
        numCollectionSets[pathWithoutLocale as keyof typeof numCollectionSets]
          .n2
        /*  +
        numCollectionSets[pathWithoutLocale as keyof typeof numCollectionSets]
          .n1
 */
      }`,
    },
  ];

  return (
    <div className="flex flex-col">
      <div
        className={clsx(
          'rounded-tl-2xl rounded-tr-2xl bg-[var(--card-color)]',
          'duration-250',
          'transition-all ease-in-out',
          'flex flex-col md:flex-row',
          'w-full ',
          'border-b-1 border-[var(--border-color)]'
        )}
      >
        {collections.map((collection, i) => (
          <div
            key={i}
            className={clsx(
              'flex flex-col md:flex-row',
              'w-full ',
              pathWithoutLocale === '/vocabulary' &&
                collection.name === 'n1' &&
                'hidden'
            )}
          >
            <button
              key={i}
              className={clsx(
                'flex justify-center items-center gap-2.5 py-6',
                'text-[var(--main-color)] text-xl',
                'w-full',
                'hover:cursor-pointer',
                // 'hover:bg-[var(--border-color)]',
                i === 0 &&
                  'max-md:rounded-tl-2xl max-md:rounded-tr-2xl md:rounded-tl-2xl md:rounded-bl-2xl',
                i === collections.length - 1 &&
                  'max-md:rounded-bl-2xl max-md:rounded-br-2xl md:rounded-tr-2xl md:rounded-br-2xl',
                'duration-250'
                /* collection.name === selectedCollection &&
                'bg-[var(--border-color)]' */
              )}
              onClick={() => {
                playClick();

                setSelectedCollection(collection.name);
                if (pathWithoutLocale === '/kanji') {
                  clearKanjiObjs();
                  clearKanjiSets();
                } else if (pathWithoutLocale === '/vocabulary') {
                  clearVocabObjs();
                  clearVocabSets();
                }
              }}
            >
              {/* <span className='w-1/4 text-4xl flex justify-center items-center bg-[var(--secondary-color)] text-[var(--background-color)]'>
              {i+1}
            </span> */}

              {collection.name === selectedCollection ? (
                <CircleCheck className="text-[var(--secondary-color)]" />
              ) : (
                <Circle className="text-[var(--border-color)]" />
              )}
              <span className="text-2xl">
                {collection.displayName.split(', ')[0]}
              </span>
              {/* <span className='text-sm text-[var(--secondary-color)] pt-2'>
              {collection.displayName.split(', ')[1]}
            </span> */}
            </button>

            {i < collections.length - 1 && (
              <div
                className={clsx(
                  'md:border-l-1 md:h-auto md:w-0',
                  'border-[var(--border-color)]',
                  'border-t-1 w-full border-[var(--border-color)]',
                  pathWithoutLocale === '/vocabulary' &&
                    collection.name === 'n1' &&
                    'hidden'
                )}
              />
            )}
          </div>
        ))}
      </div>
      <div
        className={clsx(
          'rounded-bl-2xl rounded-br-2xl bg-[var(--card-color)] p-4',
          'w-full',
          'text-lg',
          'flex flex-col gap-2 items-start '
        )}
      >
        <p className="flex flex-col">
          <span className="flex gap-2 items-center">
            <CircleCheck className="text-[var(--secondary-color)]" />
            Selected Levels:
          </span>
          <span className="text-[var(--secondary-color)]">
            {pathWithoutLocale === '/kanji'
              ? selectedKanjiSets.length > 0
                ? selectedKanjiSets.sort().join(', ').replace(/Set /g, 'Level ')
                : 'None'
              : pathWithoutLocale === '/vocabulary'
              ? selectedVocabSets.length > 0
                ? selectedVocabSets.sort().join(', ').replace(/Set /g, 'Level ')
                : 'None'
              : null}
          </span>
        </p>
        <button
          className={clsx(
            'py-3 px-16',
            miniButtonBorderStyles,
            'text-[var(--main-color)]',
            'w-full',
            'flex justify-center'
          )}
          onClick={() => {
            playClick();
            if (pathWithoutLocale === '/kanji') {
              clearKanjiSets();
              clearKanjiObjs();
            } else if (pathWithoutLocale === '/vocabulary') {
              clearVocabSets();
              clearVocabObjs();
            }
          }}
        >
          <Trash size={32} />
        </button>
      </div>
    </div>
  );
};

export default CollectionSelector;
