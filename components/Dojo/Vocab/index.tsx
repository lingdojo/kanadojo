'use client';

import clsx from 'clsx';
import { chunkArray } from '@/lib/helperFunctions';
import { useState, useMemo } from 'react';
import { cardBorderStyles } from '@/static/styles';
import useGridColumns from '@/hooks/useGridColumns';
import { useClick } from '@/hooks/useAudio';
import { ChevronUp, CircleCheck, Circle, Filter, FilterX } from 'lucide-react';
import useVocabStore from '@/store/useVocabStore';
import useStatsStore from '@/store/useStatsStore';
import VocabSetDictionary from '@/components/Dojo/Vocab/SetDictionary';
import N5Nouns from '@/static/vocab/n5/nouns';
import N4Nouns from '@/static/vocab/n4/nouns';
import N3Nouns from '@/static/vocab/n3/nouns';
import N2Nouns from '@/static/vocab/n2/nouns';

// Vocabulary collections setup
const vocabCollections = {
  n5: { data: N5Nouns, name: 'N5', prevLength: 0 },
  n4: {
    data: N4Nouns,
    name: 'N4',
    prevLength: Math.ceil(N5Nouns.length / 10),
  },
  n3: {
    data: N3Nouns,
    name: 'N3',
    prevLength: Math.ceil((N5Nouns.length + N4Nouns.length) / 10),
  },
  n2: {
    data: N2Nouns,
    name: 'N2',
    prevLength: Math.ceil(
      (N5Nouns.length + N4Nouns.length + N3Nouns.length) / 10
    ),
  },
};

// ✅ REMOVED: Intersection Observer animation variants to fix bug where users need to scroll to see first sets

const VocabCards = () => {
  const selectedVocabCollectionName = useVocabStore(
    state => state.selectedVocabCollection
  );

  const selectedVocabSets = useVocabStore(state => state.selectedVocabSets);
  const setSelectedVocabSets = useVocabStore(
    state => state.setSelectedVocabSets
  );
  const addWordObjs = useVocabStore(state => state.addVocabObjs);
  const allTimeStats = useStatsStore(state => state.allTimeStats);

  const { playClick } = useClick();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const selectedVocabCollection = (vocabCollections as any)[
    selectedVocabCollectionName
  ];

  // Filter state for hiding mastered cards
  const [hideMastered, setHideMastered] = useState(false);

  // Calculate mastered characters (accuracy >= 90%, attempts >= 10)
  const masteredWords = useMemo(() => {
    const mastered = new Set<string>();
    Object.entries(allTimeStats.characterMastery).forEach(([word, stats]) => {
      const total = stats.correct + stats.incorrect;
      const accuracy = total > 0 ? stats.correct / total : 0;
      if (total >= 10 && accuracy >= 0.9) {
        mastered.add(word);
      }
    });
    return mastered;
  }, [allTimeStats.characterMastery]);

  // Check if a set contains only mastered vocab
  const isSetMastered = (setStart: number, setEnd: number) => {
    const wordsInSet = selectedVocabCollection.data.slice(
      setStart * 10,
      setEnd * 10
    );
    return wordsInSet.every((vocab: { word: string }) =>
      masteredWords.has(vocab.word)
    );
  };

  const vocabSetsTemp = new Array(
    Math.ceil(selectedVocabCollection.data.length / 10)
  )
    .fill({})
    .map((_, i) => ({
      name: `Set ${selectedVocabCollection.prevLength + i + 1}`,
      start: i,
      end: i + 1,
      id: `Set ${i + 1}`,
      isMastered: isSetMastered(i, i + 1),
    }));

  // Filter out mastered sets if hideMastered is true
  const filteredVocabSets = hideMastered
    ? vocabSetsTemp.filter(set => !set.isMastered)
    : vocabSetsTemp;

  const masteredCount = vocabSetsTemp.filter(set => set.isMastered).length;

  const [collapsedRows, setCollapsedRows] = useState<number[]>([]);
  const numColumns = useGridColumns();

  // Check if user has any progress data
  const hasProgressData = Object.keys(allTimeStats.characterMastery).length > 0;

  return (
    <div className="flex flex-col w-full gap-4">
      {/* Info message when no progress data exists */}
      {!hasProgressData && (
        <div className="mx-4 px-4 py-3 rounded-xl bg-[var(--card-color)] border-2 border-[var(--border-color)]">
          <p className="text-sm text-[var(--secondary-color)]">
            💡 <strong>Tip:</strong> Complete some practice sessions to unlock
            the &apos;Hide Mastered Sets&apos; filter. Sets become mastered when
            you achieve 90%+ accuracy with 10+ attempts per word.
          </p>
        </div>
      )}

      {/* Filter Toggle Button - Only show if there are mastered sets */}
      {masteredCount > 0 && (
        <div className="flex justify-end px-4">
          <button
            onClick={() => {
              playClick();
              setHideMastered(prev => !prev);
            }}
            className={clsx(
              'flex items-center gap-2 px-4 py-2 rounded-xl',
              'duration-250 transition-all ease-in-out',
              'border-2 border-[var(--border-color)]',
              'hover:bg-[var(--card-color)]',
              hideMastered &&
                'bg-[var(--card-color)] border-[var(--main-color)]'
            )}
          >
            {hideMastered ? (
              <>
                <FilterX
                  size={20}
                  className="text-[var(--main-color)]"
                />
                <span className="text-[var(--main-color)]">
                  Show All Sets ({masteredCount} mastered hidden)
                </span>
              </>
            ) : (
              <>
                <Filter
                  size={20}
                  className="text-[var(--secondary-color)]"
                />
                <span className="text-[var(--secondary-color)]">
                  Hide Mastered Sets ({masteredCount})
                </span>
              </>
            )}
          </button>
        </div>
      )}

      {/* Show progress indicator if user has data but no mastered sets yet */}
      {/* 
      {hasProgressData && masteredCount === 0 && (
        <div className="mx-4 px-4 py-3 rounded-xl bg-[var(--card-color)] border-2 border-[var(--border-color)]">
          <p className="text-sm text-[var(--secondary-color)]">
            You have progress data for{' '}
            {Object.keys(allTimeStats.characterMastery).length} words. Keep
            practicing to master complete sets! (90%+ accuracy, 10+ attempts per
            word)
          </p>
        </div>
      )}
 */}
      {chunkArray(filteredVocabSets, numColumns).map((rowSets, rowIndex) => {
        // Get the actual set numbers from the filtered sets
        const firstSetNumber = rowSets[0]?.name.match(/\d+/)?.[0] || '1';
        const lastSetNumber =
          rowSets[rowSets.length - 1]?.name.match(/\d+/)?.[0] || firstSetNumber;

        return (
          <div
            key={`row-${rowIndex}`}
            className={clsx('flex flex-col py-4 gap-4', cardBorderStyles)}
          >
            <h3
              onClick={() => {
                playClick();
                setCollapsedRows(prev =>
                  prev.includes(rowIndex)
                    ? prev.filter(i => i !== rowIndex)
                    : [...prev, rowIndex]
                );
              }}
              className={clsx(
                'group text-3xl ml-4 flex flex-row items-center gap-2 rounded-xl hover:cursor-pointer',
                collapsedRows.includes(rowIndex) && 'mb-1.5'
              )}
            >
              <ChevronUp
                className={clsx(
                  'duration-250 text-[var(--border-color)]',
                  'max-md:group-active:text-[var(--secondary-color)]',
                  'md:group-hover:text-[var(--secondary-color)]',
                  collapsedRows.includes(rowIndex) && 'rotate-180'
                )}
                size={28}
              />
              <span className="max-lg:hidden">
                Levels {firstSetNumber}
                {firstSetNumber !== lastSetNumber ? `-${lastSetNumber}` : ''}
              </span>
              <span className="lg:hidden">Level {firstSetNumber}</span>
            </h3>

            {!collapsedRows.includes(rowIndex) && (
              <div
                className={clsx(
                  'flex flex-col w-full',
                  'md:items-start md:grid lg:grid-cols-2 2xl:grid-cols-3'
                )}
              >
                {rowSets.map((vocabSetTemp, i) => (
                  <div
                    key={vocabSetTemp.id + vocabSetTemp.name}
                    className={clsx(
                      'flex flex-col md:px-4 h-full',
                      'border-[var(--border-color)]',
                      i < rowSets.length - 1 && 'md:border-r-1'
                    )}
                  >
                    <button
                      className={clsx(
                        'text-2xl flex justify-center items-center gap-2 group',
                        'rounded-xl bg-[var(--background-color)] hover:cursor-pointer',
                        'duration-250 transition-all ease-in-out',
                        'px-2 py-3 max-md:mx-4',
                        selectedVocabSets.includes(vocabSetTemp.name) &&
                          'bg-[var(--border-color)]'
                      )}
                      onClick={e => {
                        e.currentTarget.blur();
                        playClick();
                        if (selectedVocabSets.includes(vocabSetTemp.name)) {
                          setSelectedVocabSets(
                            selectedVocabSets.filter(
                              set => set !== vocabSetTemp.name
                            )
                          );
                          addWordObjs(
                            selectedVocabCollection.data.slice(
                              vocabSetTemp.start * 10,
                              vocabSetTemp.end * 10
                            )
                          );
                        } else {
                          setSelectedVocabSets([
                            ...new Set(
                              selectedVocabSets.concat(vocabSetTemp.name)
                            ),
                          ]);
                          addWordObjs(
                            selectedVocabCollection.data.slice(
                              vocabSetTemp.start * 10,
                              vocabSetTemp.end * 10
                            )
                          );
                        }
                      }}
                    >
                      {selectedVocabSets.includes(vocabSetTemp.name) ? (
                        <CircleCheck className="mt-0.5 text-[var(--secondary-color)] duration-250" />
                      ) : (
                        <Circle className="mt-0.5 text-[var(--border-color)] duration-250" />
                      )}
                      {vocabSetTemp.name.replace('Set ', 'Level ')}
                    </button>
                    <VocabSetDictionary set={vocabSetTemp.id} />
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default VocabCards;
