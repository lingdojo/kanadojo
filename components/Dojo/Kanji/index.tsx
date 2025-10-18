'use client';
import { useState } from 'react';
import clsx from 'clsx';
import N5Kanji from '@/static/kanji/N5';
import N4Kanji from '@/static/kanji/N4';
import N3Kanji from '@/static/kanji/N3';
import N2Kanji from '@/static/kanji/N2';
import { cardBorderStyles } from '@/static/styles';
import { chunkArray } from '@/lib/helperFunctions';
import { ChevronUp, CircleCheck, Circle } from 'lucide-react';
import { useClick } from '@/lib/hooks/useAudio';
import useGridColumns from '@/lib/hooks/useGridColumns';
import useKanjiStore from '@/store/useKanjiStore';
import KanjiSetDictionary from '@/components/Dojo/Kanji/SetDictionary';

const kanjiCollections = {
  n5: { data: N5Kanji, name: 'N5', prevLength: 0 },
  n4: {
    data: N4Kanji,
    name: 'N4',
    prevLength: Math.ceil(N5Kanji.length / 10)
  },
  n3: {
    data: N3Kanji,
    name: 'N3',
    prevLength: Math.ceil((N5Kanji.length + N4Kanji.length) / 10)
  },
  n2: {
    data: N2Kanji,
    name: 'N2',
    prevLength: Math.ceil(
      (N5Kanji.length + N4Kanji.length + N3Kanji.length) / 10
    )
  }
};

const KanjiCards = () => {
  const selectedKanjiCollectionName = useKanjiStore(
    state => state.selectedKanjiCollection
  );
  const selectedKanjiSets = useKanjiStore(state => state.selectedKanjiSets);
  const setSelectedKanjiSets = useKanjiStore(
    state => state.setSelectedKanjiSets
  );
  const addKanjiObjs = useKanjiStore(state => state.addKanjiObjs);

  // const selectedKanjiObjs = useKanaKanjiStore(state => state.selectedKanjiObjs);

  const { playClick } = useClick();

  const selectedKanjiCollection =
    kanjiCollections[
      selectedKanjiCollectionName as keyof typeof kanjiCollections
    ];

  const kanjiSetsTemp = new Array(
    Math.ceil(selectedKanjiCollection.data.length / 10)
  )
    .fill({})
    .map((obj, i) => ({
      name: `Set ${selectedKanjiCollection.prevLength + i + 1}`,
      start: i,
      end: i + 1,
      id: `Set ${i + 1}`
    }));

  const [collapsedRows, setCollapsedRows] = useState<number[]>([]);

  const numColumns = useGridColumns();

  return (
    <div className='flex flex-col w-full gap-4'>
      {chunkArray(kanjiSetsTemp, numColumns).map((rowSets, rowIndex) => {
        const firstSetInRow = rowIndex * numColumns + 1;
        const lastSetInRow = (rowIndex + 1) * numColumns;

        return (
          <div
            key={`row-${rowIndex}`}
            className={clsx('flex flex-col py-4 gap-4', cardBorderStyles)}
          >
            {/* Clickable row header to toggle collapse */}
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
                'group text-3xl ml-4 ',
                'flex flex-row items-center gap-2 rounded-xl hover:cursor-pointer',

                collapsedRows.includes(rowIndex) && 'mb-1.5'
              )}
            >
              <ChevronUp
                className={clsx(
                  'duration-250',
                  'text-[var(--border-color)]',
                  'max-md:group-active:text-[var(--text-color)]',
                  'md:group-hover:text-[var(--text-color)] mt-0.5',
                  collapsedRows.includes(rowIndex) && 'rotate-180'
                )}
                size={24}
              />
              <span className='max-lg:hidden'>
                Sets {selectedKanjiCollection.prevLength + firstSetInRow}-
                {selectedKanjiCollection.prevLength + lastSetInRow}
              </span>
              <span className='lg:hidden'>
                Set {selectedKanjiCollection.prevLength + firstSetInRow}
              </span>
            </h3>

            {/* Conditionally render the row content */}
            {!collapsedRows.includes(rowIndex) && (
              <div
                className={clsx(
                  'flex flex-col w-full',
                  'md:items-start md:grid md:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3'
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
                        // miniButtonBorderStyles,
                        'rounded-xl bg-[var(--background-color)] hover:cursor-pointer',
                        'duration-250',
                        'transition-all ease-in-out',

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
                            )
                          ]);
                          console.log(kanjiSetTemp.start, kanjiSetTemp.end);
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
                        <CircleCheck className='mt-0.5 text-[var(--secondary-color)]' />
                      ) : (
                        <Circle className='mt-0.5 text-[var(--border-color)] ' />
                      )}
                      {kanjiSetTemp.name}
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
