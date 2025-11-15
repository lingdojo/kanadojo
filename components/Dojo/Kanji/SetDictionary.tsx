'use client';
import clsx from 'clsx';
import { cardBorderStyles } from '@/static/styles';
import N5Kanji from '@/static/kanji/N5';
import N4Kanji from '@/static/kanji/N4';
import N3Kanji from '@/static/kanji/N3';
import N2Kanji from '@/static/kanji/N2';
import N1Kanji from '@/static/kanji/N1';
import useKanjiStore from '@/store/useKanjiStore';
import usePreferencesStore from '@/store/usePreferencesStore';
import FuriganaText from '@/components/reusable/FuriganaText';
import { useClick } from '@/hooks/useAudio';

const createKanjiSetRanges = (numSets: number) =>
  Array.from({ length: numSets }, (_, i) => i + 1).reduce(
    (acc, curr) => ({
      ...acc,
      [`Set ${curr}`]: [(curr - 1) * 10, curr * 10],
    }),
    {}
  );

const kanjiSetSliceRanges = createKanjiSetRanges(200);

const kanjiCollections = {
  n5: N5Kanji,
  n4: N4Kanji,
  n3: N3Kanji,
  n2: N2Kanji,
  n1: N1Kanji,
};

const KanjiSetDictionary = ({ set }: { set: string }) => {
  const { playClick } = useClick();

  const selectedKanjiCollection = useKanjiStore(
    state => state.selectedKanjiCollection
  );
  const displayKanjiCollection =
    kanjiCollections[selectedKanjiCollection as keyof typeof kanjiCollections];

  const sliceRange =
    kanjiSetSliceRanges[set as keyof typeof kanjiSetSliceRanges];

  const showKana = usePreferencesStore(state => state.displayKana);

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
            <div className="flex flex-row w-full gap-4">
              <a
                className="relative w-full max-w-[100px] aspect-square flex items-center justify-center hover:cursor-pointer group"
                href={`http://kanjiheatmap.com/?open=${kanjiObj.kanjiChar}`}
                rel="noopener"
                target="_blank"
                onClick={() => {
                  playClick();
                }}
              >
                {/* 4-segment square background */}
                <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 border-1 border-[var(--border-color)] rounded-xl bg-[var(--background-color)] group-hover:bg-[var(--card-color)] transition-all">
                  <div className=" border-r border-b border-[var(--border-color)]"></div>
                  <div className=" border-b border-[var(--border-color)]"></div>
                  <div className=" border-r border-[var(--border-color)]"></div>
                  <div className=""></div>
                </div>

                <FuriganaText
                  text={kanjiObj.kanjiChar}
                  reading={kanjiObj.onyomi[0] || kanjiObj.kunyomi[0]}
                  className="text-7xl pb-2 relative z-10 "
                  lang="ja"
                />
              </a>

              <div className="flex flex-col gap-1 w-full">
                <a
                  className="w-full text-[var(--main-color)]/80 text-xs hover:text-[var(--main-color)] hover:text-underline"
                  href="https://lingopie.com/blog/onyomi-vs-kunyomi/"
                  target="_blank"
                  rel="noopener"
                  onClick={() => {
                    playClick();
                  }}
                >
                  On{/* &apos;yomi */}
                </a>
                <div
                  className={clsx(
                    'h-1/2 ',
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
                          'border-r-1 border-[var(--border-color)]'
                      )}
                    >
                      {showKana
                        ? onyomiReading.split(' ')[1]
                        : onyomiReading.split(' ')[0]}
                    </span>
                  ))}
                </div>
                <a
                  className="w-full text-[var(--main-color)]/80 text-xs hover:text-underline hover:text-[var(--main-color)]"
                  href="https://lingopie.com/blog/onyomi-vs-kunyomi/"
                  target="_blank"
                  rel="noopener"
                  onClick={() => {
                    playClick();
                  }}
                >
                  Kun{/* &apos;yomi */}
                </a>

                <div
                  className={clsx(
                    'h-1/2',
                    'bg-[var(--background-color)] rounded-2xl',
                    'flex flex-row gap-2',

                    // 'border-1 border-[var(--border-color)]',
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
                          'border-r-1 border-[var(--border-color)]'
                      )}
                    >
                      {showKana
                        ? kunyomiReading.split(' ')[1]
                        : kunyomiReading.split(' ')[0]}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <p className="text-xl md:text-2xl w-full text-[var(--secondary-color)]">
              {kanjiObj.fullDisplayMeanings.join(', ')}
            </p>
          </div>
        ))}
    </div>
  );
};

export default KanjiSetDictionary;
