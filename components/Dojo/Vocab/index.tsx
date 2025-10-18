'use client';
import clsx from 'clsx';
import { chunkArray } from '@/lib/helperFunctions';
import { useState } from 'react';
import { cardBorderStyles } from '@/static/styles';
import useGridColumns from '@/lib/hooks/useGridColumns';
import { useClick } from '@/lib/hooks/useAudio';
import { ChevronUp, CircleCheck, Circle } from 'lucide-react';
import useVocabStore from '@/store/useVocabStore';
import VocabSetDictionary from '@/components/Dojo/Vocab/SetDictionary';
import N5Nouns from '@/static/vocab/n5/nouns';
import N4Nouns from '@/static/vocab/n4/nouns';
import N3Nouns from '@/static/vocab/n3/nouns';
import N2Nouns from '@/static/vocab/n2/nouns';

const vocabCollections = {
  n5: {
    data: N5Nouns,
    name: 'N5',
    prevLength: 0
  },
  n4: {
    data: N4Nouns,
    name: 'N4',
    prevLength: Math.ceil(N5Nouns.length / 10)
  },
  n3: {
    data: N3Nouns,
    name: 'N3',
    prevLength: Math.ceil((N5Nouns.length + N4Nouns.length) / 10)
  },
  n2: {
    data: N2Nouns,
    name: 'N2',
    prevLength: Math.ceil(
      (N5Nouns.length + N4Nouns.length + N3Nouns.length) / 10
    )
  }
};

const VocabCards = () => {
  const selectedVocabCollectionName = useVocabStore(
    state => state.selectedVocabCollection
  );

  const selectedVocabSets = useVocabStore(state => state.selectedVocabSets);
  const setSelectedVocabSets = useVocabStore(
    state => state.setSelectedVocabSets
  );
  const addWordObjs = useVocabStore(state => state.addWordObjs);

  // const selectedWordObjs = useVocabStore(state => state.selectedWordObjs);

  const { playClick } = useClick();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const selectedVocabCollection = (vocabCollections as any)[
    selectedVocabCollectionName
  ];

  const vocabSetsTemp = new Array(
    Math.ceil(selectedVocabCollection.data.length / 10)
  )
    .fill({})
    .map((obj, i) => ({
      name: `Set ${selectedVocabCollection.prevLength + i + 1}`,
      start: i,
      end: i + 1,
      id: `Set ${i + 1}`
    }));

  const [collapsedRows, setCollapsedRows] = useState<number[]>([]);

  const numColumns = useGridColumns();

  return (
    <div className='flex flex-col w-full gap-4'>
      {chunkArray(vocabSetsTemp, numColumns).map((rowSets, rowIndex) => {
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
                  'max-md:group-active:text-[var(--secondary-color)]',
                  'md:group-hover:text-[var(--secondary-color)]',
                  collapsedRows.includes(rowIndex) && 'rotate-180'
                )}
                size={28}
              />
              <span className='max-lg:hidden'>
                Sets {selectedVocabCollection.prevLength + firstSetInRow}-
                {selectedVocabCollection.prevLength + lastSetInRow}
              </span>
              <span className='lg:hidden'>
                Set {selectedVocabCollection.prevLength + firstSetInRow}
              </span>
            </h3>

            {/* Conditionally render the row content */}
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
                        'duration-250',
                        'transition-all ease-in-out',

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
                            )
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
                        <CircleCheck className='mt-0.5 text-[var(--secondary-color)] duration-250' />
                      ) : (
                        <Circle className='mt-0.5 text-[var(--border-color)] duration-250' />
                      )}
                      {vocabSetTemp.name}
                      {/* <MousePointer className='mt-0.5 text-[var(--secondary-color)] ' /> */}
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
