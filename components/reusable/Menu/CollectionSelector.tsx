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
  N1VocabLength,
} from '@/static/unitSets';
import { useClick } from '@/hooks/useAudio';
import { CircleCheck, Circle, Trash } from 'lucide-react';
import { miniButtonBorderStyles } from '@/static/styles';
import { useMemo } from 'react';

type CollectionLevel = 'n5' | 'n4' | 'n3' | 'n2' | 'n1';
type ContentType = 'kanji' | 'vocabulary';

// Calculate number of sets (10 items per set)
const calculateSets = (length: number) => Math.ceil(length / 10);

const KANJI_SETS = {
  n5: calculateSets(N5KanjiLength),
  n4: calculateSets(N4KanjiLength),
  n3: calculateSets(N3KanjiLength),
  n2: calculateSets(N2KanjiLength),
  n1: calculateSets(N1KanjiLength),
};

const VOCAB_SETS = {
  n5: calculateSets(N5VocabLength),
  n4: calculateSets(N4VocabLength),
  n3: calculateSets(N3VocabLength),
  n2: calculateSets(N2VocabLength),
  n1: calculateSets(N1VocabLength),
};

const CollectionSelector = () => {
  const { playClick } = useClick();
  const pathname = usePathname();
  const contentType = removeLocaleFromPath(pathname).slice(1) as ContentType;
  
  const isKanji = contentType === 'kanji';
  const isVocab = contentType === 'vocabulary';

  // Kanji store
  const {
    selectedKanjiCollection,
    setSelectedKanjiCollection,
    selectedKanjiSets,
    clearKanjiObjs,
    clearKanjiSets,
  } = useKanjiStore();

  // Vocab store
  const {
    selectedVocabCollection,
    setSelectedVocabCollection,
    selectedVocabSets,
    clearVocabObjs,
    clearVocabSets,
  } = useVocabStore();

  // Current content type values
  const selectedCollection = isKanji ? selectedKanjiCollection : selectedVocabCollection;
  const setSelectedCollection = isKanji ? setSelectedKanjiCollection : setSelectedVocabCollection;
  const selectedSets = isKanji ? selectedKanjiSets : selectedVocabSets;
  const sets = isKanji ? KANJI_SETS : VOCAB_SETS;

  const handleClear = () => {
    playClick();
    if (isKanji) {
      clearKanjiSets();
      clearKanjiObjs();
    } else {
      clearVocabSets();
      clearVocabObjs();
    }
  };

  const handleCollectionSelect = (level: CollectionLevel) => {
    playClick();
    setSelectedCollection(level);
    if (isKanji) {
      clearKanjiObjs();
      clearKanjiSets();
    } else {
      clearVocabObjs();
      clearVocabSets();
    }
  };

  // Generate collection data with cumulative set ranges
  const collections = useMemo(() => {
    const levels: CollectionLevel[] = ['n5', 'n4', 'n3', 'n2', 'n1'];
    let cumulativeSets = 0;

    return levels.map((level, index) => {
      const setCount = sets[level];
      const startSet = cumulativeSets + 1;
      const endSet = cumulativeSets + setCount;
      cumulativeSets = endSet;

      return {
        name: level,
        displayName: `Unit ${index + 1}, Sets ${startSet}-${endSet}`,
      };
    });
  }, [sets]);

  return (
    <div className="flex flex-col">
      {/* Collection Buttons */}
      <div
        className={clsx(
          'rounded-tl-2xl rounded-tr-2xl bg-[var(--card-color)]',
          'flex flex-col md:flex-row w-full',
          'border-b-1 border-[var(--border-color)]',
          'transition-all duration-250 ease-in-out'
        )}
      >
        {collections.map((collection, index) => {
          // Hide N1 vocab (not available yet)
          // if (isVocab && collection.name === 'n1') return null;

          const isFirst = index === 0;
          const isLast = index === collections.length - 1;
          const isSelected = collection.name === selectedCollection;

          return (
            <div key={collection.name} className="flex flex-col md:flex-row w-full">
              <button
                className={clsx(
                  'flex justify-center items-center gap-2.5 py-6 w-full',
                  'text-[var(--main-color)] text-xl',
                  'hover:cursor-pointer transition-all duration-250',
                  isFirst && 'max-md:rounded-tl-2xl max-md:rounded-tr-2xl md:rounded-tl-2xl md:rounded-bl-2xl',
                  isLast && 'max-md:rounded-bl-2xl max-md:rounded-br-2xl md:rounded-tr-2xl md:rounded-br-2xl'
                )}
                onClick={() => handleCollectionSelect(collection.name)}
              >
                {isSelected ? (
                  <CircleCheck className="text-[var(--secondary-color)]" />
                ) : (
                  <Circle className="text-[var(--border-color)]" />
                )}
                <span className="text-2xl">
                  {collection.displayName.split(', ')[0]}
                </span>
              </button>

              {/* Divider between buttons */}
              {index < collections.length - 1 && (
                <div
                  className={clsx(
                    'border-[var(--border-color)]',
                    'md:border-l-1 md:h-auto md:w-0',
                    'border-t-1 w-full max-md:block',
                    isVocab && collection.name === 'n1' && 'hidden'
                  )}
                />
              )}
            </div>
          );
        })}
      </div>

      {/* Selected Sets Info & Clear Button */}
      <div
        className={clsx(
          'rounded-bl-2xl rounded-br-2xl bg-[var(--card-color)] p-4',
          'w-full text-lg flex flex-col gap-2 items-start'
        )}
      >
        <div className="flex flex-col">
          <span className="flex gap-2 items-center">
            <CircleCheck className="text-[var(--secondary-color)]" />
            Selected Levels:
          </span>
          <span className="text-[var(--secondary-color)]">
            {selectedSets.length > 0
              ? selectedSets
                  .sort()
                  .join(', ')
                  .replace(/Set /g, 'Level ')
              : 'None'}
          </span>
        </div>

        <button
          className={clsx(
            'py-3 px-16 w-full',
            miniButtonBorderStyles,
            'text-[var(--main-color)]',
            'flex justify-center'
          )}
          onClick={handleClear}
          aria-label="Clear selected levels"
        >
          <Trash size={32} />
        </button>
      </div>
    </div>
  );
};

export default CollectionSelector;