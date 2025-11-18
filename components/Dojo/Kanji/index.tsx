'use client';

import clsx from 'clsx';
import { chunkArray } from '@/lib/helperFunctions';
import { useState, useMemo } from 'react';
import { cardBorderStyles } from '@/static/styles';
import useGridColumns from '@/hooks/useGridColumns';
import { useClick } from '@/hooks/useAudio';
import { ChevronUp, CircleCheck, Circle, Filter, FilterX } from 'lucide-react';
import useKanjiStore from '@/store/useKanjiStore';
import useStatsStore from '@/store/useStatsStore';
import KanjiSetDictionary from '@/components/Dojo/Kanji/SetDictionary';
import N5Kanji from '@/static/kanji/N5';
import N4Kanji from '@/static/kanji/N4';
import N3Kanji from '@/static/kanji/N3';
import N2Kanji from '@/static/kanji/N2';
import N1Kanji from '@/static/kanji/N1';

// ✅ Setup Kanji collections
const kanjiCollections = {
  n5: { data: N5Kanji, name: 'N5', prevLength: 0 },
  n4: {
    data: N4Kanji,
    name: 'N4',
    prevLength: Math.ceil(N5Kanji.length / 10),
  },
  n3: {
    data: N3Kanji,
    name: 'N3',
    prevLength: Math.ceil((N5Kanji.length + N4Kanji.length) / 10),
  },
  n2: {
    data: N2Kanji,
    name: 'N2',
    prevLength: Math.ceil(
      (N5Kanji.length + N4Kanji.length + N3Kanji.length) / 10
    ),
  },
  n1: {
    data: N1Kanji,
    name: 'N1',
    prevLength: Math.ceil(
      (N5Kanji.length + N4Kanji.length + N3Kanji.length + N2Kanji.length) / 10
    ),
  },
};

// ✅ REMOVED: Intersection Observer animation variants to fix bug where users need to scroll to see first sets

const KanjiCards = () => {
  const selectedKanjiCollectionName = useKanjiStore(
    state => state.selectedKanjiCollection
  );

  const selectedKanjiSets = useKanjiStore(state => state.selectedKanjiSets);
  const setSelectedKanjiSets = useKanjiStore(
    state => state.setSelectedKanjiSets
  );
  const addKanjiObjs = useKanjiStore(state => state.addKanjiObjs);
  const allTimeStats = useStatsStore(state => state.allTimeStats);

  const { playClick } = useClick();

  const selectedKanjiCollection = kanjiCollections[selectedKanjiCollectionName];

  // Filter state for hiding mastered cards
  const [hideMastered, setHideMastered] = useState(false);

  // Calculate mastered characters (accuracy >= 90%, attempts >= 10)
  const masteredCharacters = useMemo(() => {
    const mastered = new Set<string>();
    Object.entries(allTimeStats.characterMastery).forEach(([char, stats]) => {
      const total = stats.correct + stats.incorrect;
      const accuracy = total > 0 ? stats.correct / total : 0;
      if (total >= 10 && accuracy >= 0.9) {
        mastered.add(char);
      }
    });

    // Debug log to see mastery data
    if (typeof window !== 'undefined') {
      console.log(
        '[Kanji Filter] Total characters tracked:',
        Object.keys(allTimeStats.characterMastery).length
      );
      console.log('[Kanji Filter] Mastered characters:', mastered.size);
      console.log(
        '[Kanji Filter] Sample mastered:',
        Array.from(mastered).slice(0, 5)
      );
    }

    return mastered;
  }, [allTimeStats.characterMastery]);

  // Check if a set contains only mastered kanji
  const isSetMastered = (setStart: number, setEnd: number) => {
    const kanjiInSet = selectedKanjiCollection.data.slice(
      setStart * 10,
      setEnd * 10
    );
    return kanjiInSet.every(kanji => masteredCharacters.has(kanji.kanjiChar));
  };

  const kanjiSetsTemp = new Array(
    Math.ceil(selectedKanjiCollection.data.length / 10)
  )
    .fill({})
    .map((_, i) => ({
      name: `Set ${selectedKanjiCollection.prevLength + i + 1}`,
      start: i,
      end: i + 1,
      id: `Set ${i + 1}`,
      isMastered: isSetMastered(i, i + 1),
    }));

  // Filter out mastered sets if hideMastered is true
  const filteredKanjiSets = hideMastered
    ? kanjiSetsTemp.filter(set => !set.isMastered)
    : kanjiSetsTemp;

  const masteredCount = kanjiSetsTemp.filter(set => set.isMastered).length;

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
            the &ldquo;Hide Mastered Sets&rdquo; filter. Sets become mastered
            when you achieve 90%+ accuracy with 10+ attempts per character.
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
        <div className="mx-4 px-4 py-3 rounded-xl bg-[var(--card-color)] border-2 border-[var(--border-color)] ">
          <p className="text-sm text-[var(--secondary-color)]">
            You have progress data for{' '}
            {Object.keys(allTimeStats.characterMastery).length} characters. Keep
            practicing to master complete sets! (90%+ accuracy, 10+ attempts per
            character)
          </p>
        </div>
      )}
 */}
      {chunkArray(filteredKanjiSets, numColumns).map((rowSets, rowIndex) => {
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
                {rowSets.map((kanjiSetTemp, i) => (
                  <div
                    key={kanjiSetTemp.id + kanjiSetTemp.name}
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
                        selectedKanjiSets.includes(kanjiSetTemp.name) &&
                          'bg-[var(--border-color)]'
                      )}
                      onClick={e => {
                        e.currentTarget.blur();
                        playClick();
                        if (selectedKanjiSets.includes(kanjiSetTemp.name)) {
                          setSelectedKanjiSets(
                            selectedKanjiSets.filter(
                              set => set !== kanjiSetTemp.name
                            )
                          );
                          addKanjiObjs(
                            selectedKanjiCollection.data.slice(
                              kanjiSetTemp.start * 10,
                              kanjiSetTemp.end * 10
                            )
                          );
                        } else {
                          setSelectedKanjiSets([
                            ...new Set(
                              selectedKanjiSets.concat(kanjiSetTemp.name)
                            ),
                          ]);
                          addKanjiObjs(
                            selectedKanjiCollection.data.slice(
                              kanjiSetTemp.start * 10,
                              kanjiSetTemp.end * 10
                            )
                          );
                        }
                      }}
                    >
                      {selectedKanjiSets.includes(kanjiSetTemp.name) ? (
                        <CircleCheck className="mt-0.5 text-[var(--secondary-color)] duration-250" />
                      ) : (
                        <Circle className="mt-0.5 text-[var(--border-color)] duration-250" />
                      )}
                      {kanjiSetTemp.name.replace('Set ', 'Level ')}
                    </button>
                    <KanjiSetDictionary set={kanjiSetTemp.id} />
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

export default KanjiCards;
