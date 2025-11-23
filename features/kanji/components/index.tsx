'use client';

import clsx from 'clsx';
import { chunkArray } from '@/shared/lib';
import { useState, useMemo, useEffect } from 'react';
import { cardBorderStyles } from '@/shared/lib/styles';
import useGridColumns from '@/shared/hooks/useGridColumns';
import { useClick } from '@/shared/hooks';
import { ChevronUp, CircleCheck, Circle, Filter, FilterX } from 'lucide-react';
import useKanjiStore from '@/features/kanji/store/useKanjiStore';
import useStatsStore from '@/features/Progress';
import KanjiSetDictionary from '@/features/kanji/components/SetDictionary';
import type { IKanjiObj } from '@/features/kanji/store/useKanjiStore';
//triggering vercel redeployment

type RawKanjiEntry = {
  id: number;
  kanjiChar: string;
  onyomi: string[];
  kunyomi: string[];
  displayMeanings: string[];
  fullDisplayMeanings: string[];
  meanings: string[];
};

const kanjiImporters = {
  n5: () =>
    fetch('/kanji/N5.json').then(res => res.json() as Promise<RawKanjiEntry[]>),
  n4: () =>
    fetch('/kanji/N4.json').then(res => res.json() as Promise<RawKanjiEntry[]>),
  n3: () =>
    fetch('/kanji/N3.json').then(res => res.json() as Promise<RawKanjiEntry[]>),
  n2: () =>
    fetch('/kanji/N2.json').then(res => res.json() as Promise<RawKanjiEntry[]>),
  n1: () =>
    fetch('/kanji/N1.json').then(res => res.json() as Promise<RawKanjiEntry[]>)
} as const;

type KanjiCollectionKey = keyof typeof kanjiImporters;

const levelOrder: KanjiCollectionKey[] = ['n5', 'n4', 'n3', 'n2', 'n1'];

type KanjiCollectionMeta = {
  data: IKanjiObj[];
  name: string;
  prevLength: number;
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
  const [kanjiCollections, setKanjiCollections] = useState<
    Partial<Record<KanjiCollectionKey, KanjiCollectionMeta>>
  >({});

  useEffect(() => {
    let isMounted = true;

    const loadCollections = async () => {
      const results = await Promise.all(
        levelOrder.map(async level => {
          const kanjiData = await kanjiImporters[level]();
          return { level, kanji: kanjiData.map(entry => ({ ...entry })) };
        })
      );

      if (!isMounted) return;

      const collections: Partial<
        Record<KanjiCollectionKey, KanjiCollectionMeta>
      > = {};
      let cumulativeSets = 0;

      results.forEach(({ level, kanji }) => {
        collections[level] = {
          data: kanji as IKanjiObj[],
          name: level.toUpperCase(),
          prevLength: cumulativeSets
        };
        cumulativeSets += Math.ceil(kanji.length / 10);
      });

      setKanjiCollections(collections);
    };

    void loadCollections();

    return () => {
      isMounted = false;
    };
  }, []);

  // Filter state for hiding mastered cards
  const [hideMastered, setHideMastered] = useState(false);

  // Track collapsed rows for UI accordions
  const [collapsedRows, setCollapsedRows] = useState<number[]>([]);
  const numColumns = useGridColumns();

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

  const selectedKanjiCollection =
    kanjiCollections[selectedKanjiCollectionName as KanjiCollectionKey];

  if (!selectedKanjiCollection) {
    return (
      <div className={clsx('flex flex-col w-full gap-4')}>
        <div className='mx-4 px-4 py-3 rounded-xl bg-[var(--card-color)] border-2 border-[var(--border-color)]'>
          <p className='text-sm text-[var(--secondary-color)]'>
            Loading kanji sets...
          </p>
        </div>
      </div>
    );
  }

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
      isMastered: isSetMastered(i, i + 1)
    }));

  // Filter out mastered sets if hideMastered is true
  const filteredKanjiSets = hideMastered
    ? kanjiSetsTemp.filter(set => !set.isMastered)
    : kanjiSetsTemp;

  const masteredCount = kanjiSetsTemp.filter(set => set.isMastered).length;

  // Check if user has any progress data
  const hasProgressData = Object.keys(allTimeStats.characterMastery).length > 0;

  return (
    <div className='flex flex-col w-full gap-4'>
      {/* Info message when no progress data exists */}
      {!hasProgressData && (
        <div className='mx-4 px-4 py-3 rounded-xl bg-[var(--card-color)] border-2 border-[var(--border-color)]'>
          <p className='text-sm text-[var(--secondary-color)]'>
            💡 <strong>Tip:</strong> Complete some practice sessions to unlock
            the &ldquo;Hide Mastered Sets&rdquo; filter. Sets become mastered
            when you achieve 90%+ accuracy with 10+ attempts per character.
          </p>
        </div>
      )}

      {/* Filter Toggle Button - Only show if there are mastered sets */}
      {masteredCount > 0 && (
        <div className='flex justify-end px-4'>
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
                <FilterX size={20} className='text-[var(--main-color)]' />
                <span className='text-[var(--main-color)]'>
                  Show All Sets ({masteredCount} mastered hidden)
                </span>
              </>
            ) : (
              <>
                <Filter size={20} className='text-[var(--secondary-color)]' />
                <span className='text-[var(--secondary-color)]'>
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
              <span className='max-lg:hidden'>
                Levels {firstSetNumber}
                {firstSetNumber !== lastSetNumber ? `-${lastSetNumber}` : ''}
              </span>
              <span className='lg:hidden'>Level {firstSetNumber}</span>
            </h3>

            {!collapsedRows.includes(rowIndex) && (
              <div
                className={clsx(
                  'flex flex-col w-full',
                  'md:items-start md:grid lg:grid-cols-2 2xl:grid-cols-3'
                )}
              >
                {rowSets.map((kanjiSetTemp, i) => {
                  const setWords = selectedKanjiCollection.data.slice(
                    kanjiSetTemp.start * 10,
                    kanjiSetTemp.end * 10
                  );
                  const isSelected = selectedKanjiSets.includes(
                    kanjiSetTemp.name
                  );

                  return (
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
                          isSelected && 'bg-[var(--border-color)]'
                        )}
                        onClick={e => {
                          e.currentTarget.blur();
                          playClick();
                          if (isSelected) {
                            setSelectedKanjiSets(
                              selectedKanjiSets.filter(
                                set => set !== kanjiSetTemp.name
                              )
                            );
                            addKanjiObjs(setWords);
                          } else {
                            setSelectedKanjiSets([
                              ...new Set(
                                selectedKanjiSets.concat(kanjiSetTemp.name)
                              )
                            ]);
                            addKanjiObjs(setWords);
                          }
                        }}
                      >
                        {isSelected ? (
                          <CircleCheck className='mt-0.5 text-[var(--secondary-color)] duration-250' />
                        ) : (
                          <Circle className='mt-0.5 text-[var(--border-color)] duration-250' />
                        )}
                        {kanjiSetTemp.name.replace('Set ', 'Level ')}
                      </button>
                      <KanjiSetDictionary words={setWords} />
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default KanjiCards;
