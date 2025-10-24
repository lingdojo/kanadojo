import clsx from 'clsx';
import { IKanjiObj } from '@/store/useKanjiStore';
import { IWordObj } from '@/store/useVocabStore';
import { buttonBorderStyles } from '@/static/styles';
import { CircleArrowRight } from 'lucide-react';
import { Dispatch, SetStateAction, useRef, useEffect } from 'react';
import { useClick } from '@/lib/hooks/useAudio';
import FuriganaText from '@/components/reusable/FuriganaText';

const AnswerSummary = ({
  payload,
  displayAnswerSummary,
  setDisplayAnswerSummary,
  feedback
}: {
  payload: IKanjiObj | IWordObj;
  displayAnswerSummary?: boolean;
  setDisplayAnswerSummary: Dispatch<SetStateAction<boolean>>;
  feedback: React.ReactElement;
}) => {
  const { playClick } = useClick();

  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        event.key === 'Enter' ||
        event.code === 'Space' ||
        event.key === ' '
      ) {
        buttonRef.current?.click();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  // Type guard to check if payload is IKanjiObj
  const isKanjiObj = (obj: IKanjiObj | IWordObj): obj is IKanjiObj => {
    return (obj as IKanjiObj).kanjiChar !== undefined;
  };

  return isKanjiObj(payload) ? (
    <div
      key={payload.id}
      className={clsx(
        'flex flex-col justify-start items-center gap-4 py-4 w-full md:w-3/4 lg:w-1/2 '
      )}
    >
      <p className='text-xl flex justify-center items-center gap-1.5 px-4 py-3 border-b-1 border-t-1 w-full  border-[var(--border-color)] '>
        {feedback}
      </p>
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
            text={payload.kanjiChar}
            reading={payload.onyomi[0] || payload.kunyomi[0]}
            className='text-7xl pb-2 relative z-10'
            lang='ja'
          />
        </div>

        <div className='flex flex-col gap-2 w-full '>
          <div
            className={clsx(
              'h-1/2',
              ' rounded-2xl',
              'flex flex-row gap-2',
              'bg-[var(--card-color)] ',
              // 'border-1 border-[var(--border-color)] rounded-xl',
              (payload.onyomi[0] === '' || payload.onyomi.length === 0) &&
                'hidden '
            )}
          >
            {payload.onyomi.slice(0, 2).map((onyomiReading, i) => (
              <span
                key={onyomiReading}
                className={clsx(
                  'px-2 py-1 flex flex-row justify-center items-center text-sm md:text-base',
                  'text-[var(--secondary-color)] w-full',

                  i < payload.onyomi.slice(0, 2).length - 1 &&
                    'border-r-1 border-[var(--border-color)]'
                )}
              >
                {onyomiReading}
              </span>
            ))}
          </div>

          <div
            className={clsx(
              'h-1/2',
              'bg-[var(--card-color)] rounded-2xl',
              'flex flex-row gap-2',
              (payload.kunyomi[0] === '' || payload.kunyomi.length === 0) &&
                'hidden'
            )}
          >
            {payload.kunyomi.slice(0, 2).map((kunyomiReading, i) => (
              <span
                key={kunyomiReading}
                className={clsx(
                  'px-2 py-1 flex flex-row justify-center items-center text-sm md:text-base',
                  'text-[var(--secondary-color)] w-full ',
                  i < payload.kunyomi.slice(0, 2).length - 1 &&
                    'border-r-1 border-[var(--border-color)]'
                )}
              >
                {kunyomiReading}
              </span>
            ))}
          </div>
        </div>
      </div>

      <p className='text-xl md:text-2xl w-full text-[var(--secondary-color)]'>
        {payload.fullDisplayMeanings.join(', ')}
      </p>

      <button
        ref={displayAnswerSummary ? buttonRef : null}
        className={clsx(
          'text-xl font-medium py-4 px-16 rounded-3xl duration-150  hover:cursor-pointer w-full ',
          buttonBorderStyles,
          'flex flex-row justify-center items-end gap-2'
        )}
        onClick={() => setDisplayAnswerSummary(false)}
      >
        <span>continue</span>
        <CircleArrowRight />
      </button>
    </div>
  ) : (
    <div
      key={payload.word}
      className={clsx(
        'flex flex-col justify-start items-start gap-4 py-4 w-full md:w-3/4 lg:w-1/2 '
      )}
    >
      <p className='text-xl flex justify-center items-center gap-1.5 px-4 py-3 border-b-1 border-t-1 w-full  border-[var(--border-color)] '>
        {feedback}
      </p>

      <FuriganaText 
        text={payload.word}
        reading={payload.reading}
        className='text-6xl flex justify-center w-full'
        lang='ja'
      />
      <div className='flex flex-col gap-2 items-start'>
        <span
          className={clsx(
            'rounded-xl px-2 py-1 flex flex-row items-center',
            'bg-[var(--card-color)] text-lg',
            'text-[var(--secondary-color)] '
          )}
        >
          {payload.reading}
        </span>
        <p className='text-xl md:text-2xl text-[var(--secondary-color)]'>
          {payload.displayMeanings.join(', ')}
        </p>
      </div>
      <button
        ref={displayAnswerSummary ? buttonRef : null}
        className={clsx(
          'text-xl font-medium py-4 px-16 rounded-3xl duration-150  hover:cursor-pointer w-full ',
          buttonBorderStyles,
          'flex flex-row justify-center items-end gap-2'
        )}
        onClick={() => {
          playClick();
          setDisplayAnswerSummary(false);
        }}
      >
        <span>continue</span>
        <CircleArrowRight />
      </button>
    </div>
  );
};

export default AnswerSummary;
