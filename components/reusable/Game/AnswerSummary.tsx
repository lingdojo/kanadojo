import clsx from 'clsx';
import { IKanjiObj } from '@/store/useKanjiStore';
import { IWordObj } from '@/store/useVocabStore';
import { HugeiconsIcon } from '@hugeicons/react';
import { ArrowRight01Icon as CircleArrowRightIcon } from '@hugeicons/core-free-icons';;
import { Dispatch, SetStateAction, useRef, useEffect } from 'react';
import { useClick } from '@/hooks/useAudio';
import FuriganaText from '@/components/reusable/FuriganaText';

// Type guard
const isKanjiObj = (obj: IKanjiObj | IWordObj): obj is IKanjiObj => {
  return (obj as IKanjiObj).kanjiChar !== undefined;
};

// Sub-components
const FeedbackHeader = ({ feedback }: { feedback: React.ReactElement }) => (
  <p className="text-xl flex justify-center items-center gap-1.5 px-4 py-3 border-b-1 border-t-1 w-full border-[var(--border)]">
    {feedback}
  </p>
);

const ContinueButton = ({
  buttonRef,
  onClick,
  disabled,
}: {
  buttonRef: React.RefObject<HTMLButtonElement | null>;
  onClick: () => void;
  disabled: boolean;
}) => (
  <div
    className={clsx(
      'w-[99vw]',
      'border-t-1 border-[var(--border)] bg-[var(--card)]',
      'absolute bottom-0 z-10 py-4 px-4',
      'flex justify-center items-center'
    )}
  >
    <button
      ref={buttonRef}
      className={clsx(
        'text-xl font-medium py-4 px-16 rounded-3xl duration-250 hover:cursor-pointer',

        'w-full md:w-1/2',

        // buttonBorderStyles,
        'flex flex-row justify-center items-end gap-2 ',
        'text-[var(--background)] bg-[var(--muted-foreground)] hover:bg-[var(--foreground)]'
      )}
      onClick={onClick}
      disabled={disabled}
    >
      <span>continue</span>
      <HugeiconsIcon icon={CircleArrowRightIcon} color="currentColor" />
    </button>
  </div>
);

const KanjiDisplay = ({ payload }: { payload: IKanjiObj }) => (
  <div className="relative w-full max-w-[100px] aspect-square flex items-center justify-center">
    {/* 4-segment square background */}
    <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 border-1 border-[var(--border)] rounded-xl bg-[var(--background)]">
      <div className="border-r border-b border-[var(--border)]" />
      <div className="border-b border-[var(--border)]" />
      <div className="border-r border-[var(--border)]" />
      <div />
    </div>

    <FuriganaText
      text={payload.kanjiChar}
      reading={payload.onyomi[0] || payload.kunyomi[0]}
      className="text-7xl pb-2 relative z-10"
      lang="ja"
    />
  </div>
);

const ReadingsList = ({
  readings,
  isHidden,
}: {
  readings: string[];
  isHidden: boolean;
}) => {
  if (isHidden) return null;

  return (
    <div className="h-1/2 rounded-2xl flex flex-row gap-2 bg-[var(--card)]">
      {readings.slice(0, 2).map((reading, i) => (
        <span
          key={reading}
          className={clsx(
            'px-2 py-1 flex flex-row justify-center items-center text-sm md:text-base',
            'text-[var(--muted-foreground)] w-full',
            i < readings.slice(0, 2).length - 1 &&
              'border-r-1 border-[var(--border)]'
          )}
        >
          {reading}
        </span>
      ))}
    </div>
  );
};

const KanjiSummary = ({
  payload,
  feedback,
  onContinue,
  buttonRef,
}: {
  payload: IKanjiObj;
  feedback: React.ReactElement;
  onContinue: () => void;
  buttonRef: React.RefObject<HTMLButtonElement | null>;
}) => (
  <div className="flex flex-col justify-start items-center gap-4 py-4 w-full md:w-3/4 lg:w-1/2">
    <FeedbackHeader feedback={feedback} />

    <div className="flex flex-row w-full gap-4">
      <KanjiDisplay payload={payload} />

      <div className="flex flex-col gap-2 w-full">
        <ReadingsList
          readings={payload.onyomi}
          isHidden={!payload.onyomi[0] || payload.onyomi.length === 0}
        />
        <ReadingsList
          readings={payload.kunyomi}
          isHidden={!payload.kunyomi[0] || payload.kunyomi.length === 0}
        />
      </div>
    </div>

    <p className="text-xl md:text-2xl w-full text-[var(--muted-foreground)]">
      {payload.fullDisplayMeanings.join(', ')}
    </p>

    <ContinueButton
      buttonRef={buttonRef}
      onClick={onContinue}
      disabled={false}
    />
  </div>
);

const WordSummary = ({
  payload,
  feedback,
  onContinue,
  buttonRef,
}: {
  payload: IWordObj;
  feedback: React.ReactElement;
  onContinue: () => void;
  buttonRef: React.RefObject<HTMLButtonElement | null>;
}) => (
  <div className="flex flex-col justify-start items-center gap-4 py-4 w-full md:w-3/4 lg:w-1/2">
    <FeedbackHeader feedback={feedback} />

    <FuriganaText
      text={payload.word}
      reading={payload.reading}
      className="text-6xl flex justify-center w-full"
      lang="ja"
    />

    <div className="flex flex-col gap-2 items-start w-full">
      <span
        className={clsx(
          'rounded-xl px-2 py-1 flex flex-row items-center',
          'bg-[var(--card)] text-lg',
          'text-[var(--muted-foreground)]'
        )}
      >
        {payload.reading}
      </span>
      <p className="text-xl md:text-2xl text-[var(--muted-foreground)]">
        {payload.displayMeanings.join(', ')}
      </p>
    </div>

    <ContinueButton
      buttonRef={buttonRef}
      onClick={onContinue}
      disabled={false}
    />
  </div>
);

// Main component
const AnswerSummary = ({
  payload,
  setDisplayAnswerSummary,
  feedback,
}: {
  payload: IKanjiObj | IWordObj;
  setDisplayAnswerSummary: Dispatch<SetStateAction<boolean>>;
  feedback: React.ReactElement;
}) => {
  const { playClick } = useClick();
  const buttonRef = useRef<HTMLButtonElement>(null);

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
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleContinue = () => {
    playClick();
    setDisplayAnswerSummary(false);
  };

  return isKanjiObj(payload) ? (
    <KanjiSummary
      key={payload.id}
      payload={payload}
      feedback={feedback}
      onContinue={handleContinue}
      buttonRef={buttonRef}
    />
  ) : (
    <WordSummary
      key={payload.word}
      payload={payload}
      feedback={feedback}
      onContinue={handleContinue}
      buttonRef={buttonRef}
    />
  );
};

export default AnswerSummary;
