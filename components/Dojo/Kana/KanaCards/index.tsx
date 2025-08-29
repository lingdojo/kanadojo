'use client';
import clsx from 'clsx';
import { useState } from 'react';
import Subset from './Subset';
import { useClick } from '@/lib/hooks/useAudio';
import { cardBorderStyles } from '@/static/styles';
import { ChevronUp } from 'lucide-react';
import React from 'react';

const Hiragana = () => {
  const { playClick } = useClick();

  const kanaGroups = [
    {
      name: 'Hiragana ひらがな',
      subsets: [
        {
          name: 'HBase',
          sliceRange: [0, 10],
        },
        {
          name: 'HDakuon',
          sliceRange: [10, 15],
        },
        {
          name: 'HYoon',
          sliceRange: [15, 26],
        },
      ],
    },
    {
      name: 'Katakana カタカナ',
      subsets: [
        {
          name: 'KBase',
          sliceRange: [26, 36],
        },
        {
          name: 'KDakuon',
          sliceRange: [36, 41],
        },
        {
          name: 'KYoon',
          sliceRange: [41, 52],
        },
        {
          name: 'KForeign Sounds',
          sliceRange: [52, 60],
        },
      ],
    },
  ];

  const [hiddenSubsets, setHiddenSubsets] = useState<string[]>([
    'hdakuon',
    'hyoon',
    'kdakuon',
    'kyoon',
    'kforeign sounds',
  ]);

  return (
    <div
      className={clsx(
        'flex flex-col gap-2 sm:flex-row w-full ',
        cardBorderStyles
      )}
    >
      {kanaGroups.map((kanaGroup, i) => (
        <React.Fragment key={kanaGroup.name}>
          <form
            className={clsx(
              'flex flex-col w-full gap-2 sm:w-1/2 p-4 rounded-2xl'
            )}
            key={kanaGroup.name}
          >
            <legend
              className={clsx(
                'group text-2xl hover:cursor-pointer',
                'flex flex-row items-center gap-1'
              )}
              onClick={() => {
                playClick();
                if (hiddenSubsets.includes(kanaGroup.name.toLowerCase())) {
                  const filteredHiddenSubsets = hiddenSubsets.filter(
                    subset => subset !== kanaGroup.name.toLowerCase()
                  );
                  setHiddenSubsets(filteredHiddenSubsets);
                  return;
                }
                setHiddenSubsets([
                  ...hiddenSubsets,
                  kanaGroup.name.toLowerCase(),
                ]);
              }}
            >
              <ChevronUp
                className={clsx(
                  'duration-300',
                  'text-[var(--border-color)]',
                  'max-md:group-active:text-[var(--text-color)]',
                  'md:group-hover:text-[var(--text-color)]',
                  hiddenSubsets.includes(kanaGroup.name.toLowerCase()) &&
                    'rotate-180'
                )}
              />
              <h3 className="flex items-center gap-2">
                <span>{kanaGroup.name.split(' ')[0]}</span>
                <span className="text-[var(--secondary-color)]">
                  {kanaGroup.name.split(' ')[1]}
                </span>
              </h3>
            </legend>
            {!hiddenSubsets.includes(kanaGroup.name.toLowerCase()) &&
              kanaGroup.subsets.map((subset, i) => (
                <div
                  key={i}
                  className="flex flex-col w-full gap-2"
                >
                  <div>
                    <h4
                      className={clsx(
                        'group text-xl hover:cursor-pointer',
                        'flex flex-row items-center gap-1'
                      )}
                      onClick={() => {
                        playClick();

                        if (hiddenSubsets.includes(subset.name.toLowerCase())) {
                          const filteredHiddenSubsets = hiddenSubsets.filter(
                            currentSubset =>
                              currentSubset !== subset.name.toLowerCase()
                          );
                          setHiddenSubsets(filteredHiddenSubsets);
                          return;
                        }
                        setHiddenSubsets([
                          ...hiddenSubsets,
                          subset.name.toLowerCase(),
                        ]);
                      }}
                    >
                      <ChevronUp
                        className={clsx(
                          'duration-300',
                          'text-[var(--border-color)]',
                          'max-md:group-active:text-[var(--text-color)]',
                          'md:group-hover:text-[var(--text-color)]',
                          hiddenSubsets.includes(subset.name.toLowerCase()) &&
                            'rotate-180'
                        )}
                        size={24}
                      />
                      <span>{subset.name.slice(1)}</span>
                    </h4>
                    {!hiddenSubsets.includes(subset.name.toLowerCase()) && (
                      <Subset
                        sliceRange={subset.sliceRange}
                        group={kanaGroup.name}
                        subgroup={subset.name}
                      />
                    )}
                  </div>

                  {i < kanaGroup.subsets.length - 1 &&
                    !hiddenSubsets.includes(kanaGroup.name.toLowerCase()) && (
                      <hr className="border-t-1 border-[var(--border-color)]" />
                    )}
                </div>
              ))}
          </form>

          {i < kanaGroups.length - 1 && (
            <div
              className={clsx(
                'sm:border-l-1 sm:h-auto sm:w-0',
                'border-[var(--border-color)]',
                'border-t-1 w-full border-[var(--border-color)]'
              )}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Hiragana;
