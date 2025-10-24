'use client';
import clsx from 'clsx';
import { cardBorderStyles } from '@/static/styles';
import N5KanjiArray from '@/static/kanji/N5';
import N4KanjiArray from '@/static/kanji/N4';
import N3KanjiArray from '@/static/kanji/N3';
import N2KanjiArray from '@/static/kanji/N2';
import useKanjiStore from '@/store/useKanjiStore';
import useThemeStore from '@/store/useThemeStore';
import FuriganaText from '@/components/reusable/FuriganaText';

const createKanjiSetRanges = (numSets: number) =>
  Array.from({ length: numSets }, (_, i) => i + 1).reduce(
    (acc, curr) => ({
      ...acc,
      [`Set ${curr}`]: [(curr - 1) * 10, curr * 10]
    }),
    {}
  );

const kanjiSetSliceRanges = createKanjiSetRanges(200);

const kanjiCollections = {
  n5: N5KanjiArray,
  n4: N4KanjiArray,
  n3: N3KanjiArray,
  n2: N2KanjiArray
};

const KanjiSetDictionary = ({ set }: { set: string }) => {
  const selectedKanjiCollection = useKanjiStore(
    state => state.selectedKanjiCollection
  );
  const displayKanjiCollection =
    kanjiCollections[selectedKanjiCollection as keyof typeof kanjiCollections];

  const sliceRange =
    kanjiSetSliceRanges[set as keyof typeof kanjiSetSliceRanges];

  const showKana = useThemeStore(state => state.displayKana);

  return (
    <div className={clsx('flex flex-col', cardBorderStyles)}>
      {displayKanjiCollection
        .slice(sliceRange[0], sliceRange[1])
        .map((kanjiObj, i) => (
          <div
            key={kanjiObj.id}
            className={clsx(
              'flex flex-col justify-start items-center gap-2 py-4 max-md:px-4',
              i !== 9 && 'border-b-1 border-[var(--border-color)]'
            )}
          >
            <div className='flex flex-row w-full gap-4'>
              <div className='relative w-full max-w-[100px] aspect-square flex items-center justify-center '>
                {/* 4-segment square background */}
                <div className='absolute inset-0 grid grid-cols-2 grid-rows-2 border-1 border-[var(--border-color)] rounded-xl bg-[var(--background-color)]'>
                  <div className=' border-r border-b border-[var(--border-color)]'></div>
                  <div className=' border-b border-[var(--border-color)]'></div>
                  <div className=' border-r border-[var(--border-color)]'></div>
                  <div className=''></div>
                </div>

                <FuriganaText 
                  text={kanjiObj.kanjiChar}
                  reading={kanjiObj.onyomi[0] || kanjiObj.kunyomi[0]}
                  className='text-7xl pb-2 relative z-10'
                  lang='ja'
                />
              </div>

              <div className='flex flex-col gap-2 w-full'>
                <div
                  className={clsx(
                    'h-1/2',
                    'bg-[var(--background-color)] rounded-2xl',
                    'flex flex-row gap-2',
                    // 'border-1 border-[var(--border-color)]',
                    (kanjiObj.onyomi[0] === '' ||
                      kanjiObj.onyomi.length === 0) &&
                      'hidden'
                  )}
                >
                  {kanjiObj.onyomi.slice(0, 2).map((onyomiReading, i) => (
                    <span
                      key={onyomiReading}
                      className={clsx(
                        'px-2 py-1 flex flex-row justify-center items-center text-sm md:text-base',
                        'text-[var(--secondary-color)] w-full ',

                        i < kanjiObj.onyomi.slice(0, 2).length - 1 &&
                          'border-r-1 border-[var(--card-color)]'
                      )}
                    >
                      {showKana ? onyomiReading.split(' ')[1] : onyomiReading}
                    </span>
                  ))}
                </div>

                <div
                  className={clsx(
                    'h-1/2',
                    'bg-[var(--background-color)] rounded-2xl',
                    // 'border-1 border-[var(--border-color)]',
                    'flex flex-row gap-2',
                    (kanjiObj.kunyomi[0] === '' ||
                      kanjiObj.kunyomi.length === 0) &&
                      'hidden'
                  )}
                >
                  {kanjiObj.kunyomi.slice(0, 2).map((kunyomiReading, i) => (
                    <span
                      key={kunyomiReading}
                      className={clsx(
                        'px-2 py-1 flex flex-row justify-center items-center text-sm md:text-base',
                        'text-[var(--secondary-color)] w-full ',
                        i < kanjiObj.kunyomi.slice(0, 2).length - 1 &&
                          'border-r-1 border-[var(--card-color)]'
                      )}
                    >
                      {showKana ? kunyomiReading.split(' ')[1] : kunyomiReading}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <p className='text-xl md:text-2xl w-full text-[var(--secondary-color)]'>
              {kanjiObj.fullDisplayMeanings.join(', ')}
            </p>
          </div>
        ))}
    </div>
  );
};

export default KanjiSetDictionary;

