'use client';
import clsx from 'clsx';
import { kana } from '@/static/kana';
import useKanaStore from '@/store/useKanaStore';
import useThemeStore from '@/store/useThemeStore';
import { useClick } from '@/lib/hooks/useAudio';
import { miniButtonBorderStyles } from '@/static/styles';
import { MousePointer } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';

const finalCharactersInEachGroup = [
  'h.b.w',
  'h.d.p',
  'h.y.py',
  'k.b.w',
  'k.d.p',
  'k.y.py',
  'k.f.ts'
];

const Subset = ({
  sliceRange,
  // group,
  subgroup
}: {
  sliceRange: number[];
  group: string;
  subgroup: string;
}) => {
  const { playClick } = useClick();

  const kanaGroups = kana.slice(sliceRange[0], sliceRange[1]);

  const kanaGroupIndices = useKanaStore(state => state.kanaGroupIndices);
  const addKanaGroupIndex = useKanaStore(state => state.addKanaGroupIndex);
  const addKanaGroupIndices = useKanaStore(state => state.addKanaGroupIndices);
  const displayKana = useThemeStore(state => state.displayKana);
  const [focusedRow, setFocusedRow] = useState('');

  return (
    <fieldset className='font-bold flex flex-col items-start gap-1'>
      {kanaGroups.map((group, i) => (
        <div key={group.groupName} className='w-full flex flex-col gap-1'>
          <label
            className={clsx(
              'w-full flex flex-row items-center gap-2',
              'duration-200 transition-all ease-in-out',
              'text-[var(--secondary-color)]'
            )}
            onClick={() => playClick()}
          >
            <input
              type='checkbox'
              // className='accent-[var(--main-color)]'
              value={group.groupName}
              checked={kanaGroupIndices.includes(i + sliceRange[0])}
              onChange={e => {
                e.currentTarget.blur();
                addKanaGroupIndex(i + sliceRange[0]);
              }}
            />
            <motion.div
              className='group relative grid w-full font-normal min-h-auto place-items-start hover:cursor-pointer'
              onTouchStart={() => setFocusedRow(group.groupName)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, ease: 'linear' }}
            >
              <span
                className={clsx(
                  'row-start-1 col-start-1  transition-all duration-200  z-10 flex items-center justify-center h-full text-3xl pb-1',
                  // kanaGroupIndices.includes(i + sliceRange[0]) &&
                  //   'text-[var(--main-color)]',
                  displayKana
                    ? 'md:group-hover:opacity-0 md:opacity-100'
                    : 'md:group-hover:opacity-100 md:opacity-0',
                  displayKana
                    ? focusedRow === group.groupName
                      ? 'max-md:opacity-0'
                      : 'max-md:opacity-100'
                    : focusedRow === group.groupName
                    ? 'max-md:opacity-100'
                    : 'max-md:opacity-0'
                )}
              >
                {group.kana.join('・')}
              </span>
              <span
                className={clsx(
                  'row-start-1 col-start-1  transition-all duration-200 flex items-center justify-center h-full text-2xl pb-1',
                  displayKana
                    ? 'md:group-hover:opacity-100 md:opacity-0'
                    : 'md:group-hover:opacity-0 md:opacity-100',
                  displayKana
                    ? focusedRow === group.groupName
                      ? 'max-md:opacity-100'
                      : 'max-md:opacity-0'
                    : focusedRow === group.groupName
                    ? 'max-md:opacity-0'
                    : 'max-md:opacity-100'
                )}
              >
                {group.romanji.join('・')}
              </span>
            </motion.div>
          </label>
          {!finalCharactersInEachGroup.includes(group.groupName) && (
            <hr className='border-t-1 w-full border-[var(--border-color)]' />
          )}
        </div>
      ))}
      <div className='flex flex-row gap-2 w-full'>
        <button
          type='button'
          className={clsx(
            'p-2 font-normal text-lg md:w-1/2',
            miniButtonBorderStyles,
            'flex flex-row justify-center items-center gap-1.5'
          )}
          onClick={e => {
            playClick();
            e.currentTarget.blur();
            addKanaGroupIndices(
              Array.from(
                { length: sliceRange[1] - sliceRange[0] },
                (_, i) => sliceRange[0] + i
              )
            );
          }}
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: 'linear' }}
          >
            select all {subgroup.slice(1).toLowerCase()}
          </motion.span>
          <MousePointer size={22} />
        </button>
        {/* <Link href={`/kana/${group}-${subgroup}`} className='w-1/2'>
          <button
            className={clsx(
              'hover:scale-103 duration-225 flex flex-row justify-center items-center gap-1.5 p-2 w-full font-normal',
              buttonBorderStyles
            )}
            onClick={() => playClick()}
          >
            <span className='text-lg'>inspect</span>
            <Search size={22} />
          </button>
        </Link> */}
      </div>
    </fieldset>
  );
};

export default Subset;
