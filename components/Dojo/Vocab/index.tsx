'use client';

import clsx from 'clsx';
import { useState, useMemo } from 'react';
import { useClick } from '@/hooks/useAudio';
import { HugeiconsIcon } from '@hugeicons/react';
import { CheckmarkCircle02Icon as CircleCheckIcon, CircleIcon, FilterIcon, FilterRemoveIcon as FilterXIcon, PlayIcon, ArrowDown01Icon, ArrowRight01Icon, Cursor01Icon as MousePointerClickIcon, KeyboardIcon } from '@hugeicons/core-free-icons';
import useVocabStore from '@/store/useVocabStore';
import useStatsStore from '@/store/useStatsStore';
import useSRSStore from '@/store/useSRSStore';
import { Stage } from '@/lib/interfaces';
import { getStageColor } from '@/lib/srsUtils';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import N5Nouns from '@/static/vocab/n5/nouns';
import N4Nouns from '@/static/vocab/n4/nouns';
import N3Nouns from '@/static/vocab/n3/nouns';
import N2Nouns from '@/static/vocab/n2/nouns';
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';

// ✅ Setup Vocab collections
const vocabCollections = {
  n5: { data: N5Nouns, name: 'N5', prevLength: 0 },
  n4: {
    data: N4Nouns,
    name: 'N4',
    prevLength: Math.ceil(N5Nouns.length / 10),
  },
  n3: {
    data: N3Nouns,
    name: 'N3',
    prevLength: Math.ceil((N5Nouns.length + N4Nouns.length) / 10),
  },
  n2: {
    data: N2Nouns,
    name: 'N2',
    prevLength: Math.ceil(
      (N5Nouns.length + N4Nouns.length + N3Nouns.length) / 10
    ),
  },
};

const VocabCards = () => {
  const router = useRouter();
  const selectedVocabCollectionName = useVocabStore(
    state => state.selectedVocabCollection
  );

  const selectedVocabSets = useVocabStore(state => state.selectedVocabSets);
  const setSelectedVocabSets = useVocabStore(
    state => state.setSelectedVocabSets
  );
  const addWordObjs = useVocabStore(state => state.addWordObjs);
  const selectedWordObjs = useVocabStore(state => state.selectedWordObjs);
  const selectedGameModeVocab = useVocabStore(state => state.selectedGameModeVocab);
  const allTimeStats = useStatsStore(state => state.allTimeStats);

  // SRS state
  const srsEnabled = useSRSStore(state => state.srsEnabled);
  const srsCards = useSRSStore(state => state.cards);

  const { playClick } = useClick();

  const selectedVocabCollection = vocabCollections[selectedVocabCollectionName as keyof typeof vocabCollections];

  // Filter state for hiding mastered cards
  const [hideMastered, setHideMastered] = useState(false);

  // Calculate mastered words (accuracy >= 90%, attempts >= 10)
  const masteredWords = useMemo(() => {
    const mastered = new Set<string>();
    Object.entries(allTimeStats.characterMastery).forEach(([word, stats]) => {
      const total = stats.correct + stats.incorrect;
      const accuracy = total > 0 ? stats.correct / total : 0;
      if (total >= 10 && accuracy >= 0.9) {
        mastered.add(word);
      }
    });

    // Debug log to see mastery data
    if (typeof window !== 'undefined') {
      console.log(
        '[Vocab Filter] Total words tracked:',
        Object.keys(allTimeStats.characterMastery).length
      );
      console.log('[Vocab Filter] Mastered words:', mastered.size);
      console.log(
        '[Vocab Filter] Sample mastered:',
        Array.from(mastered).slice(0, 5)
      );
    }

    return mastered;
  }, [allTimeStats.characterMastery]);

  // Check if a set contains only mastered vocab
  const isSetMastered = (setStart: number, setEnd: number) => {
    const wordsInSet = selectedVocabCollection.data.slice(
      setStart * 10,
      setEnd * 10
    );
    return wordsInSet.every(vocab => masteredWords.has(vocab.word));
  };

  const vocabSetsTemp = new Array(
    Math.ceil(selectedVocabCollection.data.length / 10)
  )
    .fill({})
    .map((_, i) => ({
      name: `Set ${selectedVocabCollection.prevLength + i + 1}`,
      start: i,
      end: i + 1,
      id: `Set ${i + 1}`,
      isMastered: isSetMastered(i, i + 1),
    }));

  // Filter out mastered sets if hideMastered is true
  const filteredVocabSets = hideMastered
    ? vocabSetsTemp.filter(set => !set.isMastered)
    : vocabSetsTemp;

  const masteredCount = vocabSetsTemp.filter(set => set.isMastered).length;

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [sheetOpen, setSheetOpen] = useState(false);
  const [selectedSetForView, setSelectedSetForView] = useState<{ start: number; end: number; name: string } | null>(null);

  const setSelectedVocabCollection = useVocabStore(
    state => state.setSelectedVocabCollection
  );
  const setSelectedGameModeVocab = useVocabStore(
    state => state.setSelectedGameModeVocab
  );
  const clearVocabSets = useVocabStore(state => state.clearVocabSets);
  const clearWordObjs = useVocabStore(state => state.clearWordObjs);

  const allUnits = [
    { id: 'n5', name: 'N5', description: 'Beginner', count: N5Nouns.length },
    { id: 'n4', name: 'N4', description: 'Elementary', count: N4Nouns.length },
    { id: 'n3', name: 'N3', description: 'Intermediate', count: N3Nouns.length },
    { id: 'n2', name: 'N2', description: 'Advanced', count: N2Nouns.length },
  ];

  const handleUnitChange = (unitId: string) => {
    playClick();
    setSelectedVocabCollection(unitId);
    clearVocabSets();
    clearWordObjs();
    setDrawerOpen(false);
  };

  return (
    <div className="flex flex-col w-full gap-4">
      {/* Unit Selector Card */}
      <div className="flex justify-center px-4 pt-4">
        <Drawer open={drawerOpen} onOpenChange={setDrawerOpen}>
          <DrawerTrigger asChild>
            <button
              onClick={() => playClick()}
              className={clsx(
                'flex items-center justify-between gap-4 px-6 py-4 rounded-2xl',
                'w-full max-w-2xl',
                'border-2 border-[var(--border)]',
                'bg-[var(--card)]',
                'hover:bg-[var(--muted)]',
                'transition-all duration-250 ease-in-out'
              )}
            >
              <div className="flex flex-col items-start gap-1">
                <span className="text-sm font-light text-[var(--muted-foreground)]">
                  Current Unit
                </span>
                <span className="text-2xl font-light text-[var(--foreground)]">
                  JLPT {selectedVocabCollection.name}
                </span>
              </div>
              <HugeiconsIcon
                icon={ArrowDown01Icon}
                size={24}
                className="text-[var(--muted-foreground)]"
              />
            </button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Select JLPT Level</DrawerTitle>
              <DrawerDescription>
                Choose a level to practice vocabulary
              </DrawerDescription>
            </DrawerHeader>
            <div className="flex flex-col gap-2 p-4 pb-8">
              {allUnits.map((unit) => (
                <button
                  key={unit.id}
                  onClick={() => handleUnitChange(unit.id)}
                  className={clsx(
                    'flex items-center justify-between p-4 rounded-xl',
                    'border-2 transition-all duration-250',
                    selectedVocabCollectionName === unit.id
                      ? 'border-[var(--foreground)] bg-[var(--card)]'
                      : 'border-[var(--border)] bg-[var(--background)] hover:bg-[var(--muted)]'
                  )}
                >
                  <div className="flex flex-col items-start gap-1">
                    <span className="text-xl font-light text-[var(--foreground)]">
                      JLPT {unit.name}
                    </span>
                    <span className="text-sm text-[var(--muted-foreground)]">
                      {unit.description} • {unit.count} words
                    </span>
                  </div>
                  {selectedVocabCollectionName === unit.id && (
                    <HugeiconsIcon
                      icon={CircleCheckIcon}
                      size={24}
                      className="text-[var(--foreground)]"
                    />
                  )}
                </button>
              ))}
            </div>
          </DrawerContent>
        </Drawer>
      </div>

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
              'border-2 border-[var(--border)]',
              'hover:bg-[var(--card)]',
              hideMastered &&
                'bg-[var(--card)] border-[var(--foreground)]'
            )}
          >
            {hideMastered ? (
              <>
                <HugeiconsIcon icon={FilterXIcon} size={20} color="currentColor" className="text-[var(--foreground)]" />
                <span className="text-[var(--foreground)]">
                  Show All Sets ({masteredCount} mastered hidden)
                </span>
              </>
            ) : (
              <>
                <HugeiconsIcon icon={FilterIcon} size={20} color="currentColor" className="text-[var(--muted-foreground)]" />
                <span className="text-[var(--muted-foreground)]">
                  Hide Mastered Sets ({masteredCount})
                </span>
              </>
            )}
          </button>
        </div>
      )}

      {/* Grid layout */}
      <div className="w-full px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto">
        {filteredVocabSets.map((vocabSetTemp) => {
            const wordsInSet = selectedVocabCollection.data.slice(
              vocabSetTemp.start * 10,
              vocabSetTemp.end * 10
            );
            const isSelected = selectedVocabSets.includes(vocabSetTemp.name);

            // Calculate SRS stage breakdown for this set
            const stageBreakdown: Record<Stage, number> = {
              new: 0,
              learning: 0,
              young: 0,
              mature: 0,
              mastered: 0
            };

            if (srsEnabled) {
              wordsInSet.forEach(vocab => {
                const srsCard = srsCards[`${vocab.word}-vocabulary`];
                if (srsCard) {
                  stageBreakdown[srsCard.stage]++;
                } else {
                  stageBreakdown.new++;
                }
              });
            }

            return (
              <div
                key={vocabSetTemp.id + vocabSetTemp.name}
                onClick={() => {
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
                      ),
                    ]);
                    addWordObjs(
                      selectedVocabCollection.data.slice(
                        vocabSetTemp.start * 10,
                        vocabSetTemp.end * 10
                      )
                    );
                  }
                }}
                className={clsx(
                  'relative w-full flex flex-col items-start gap-4',
                  'p-6 rounded-2xl border',
                  'transition-all duration-250 ease-in-out cursor-pointer',
                  isSelected
                    ? 'bg-[var(--card)] border-[var(--foreground)]'
                    : 'bg-[var(--background)] border-[var(--border)] hover:border-[var(--muted-foreground)]'
                )}
              >
                {/* Set title and arrow */}
                <div className="flex items-center justify-between gap-3 w-full">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-light">
                      {vocabSetTemp.name}
                    </span>
                    {vocabSetTemp.isMastered && (
                      <span className="text-xs px-2 py-1 rounded-full bg-[var(--muted)] text-[var(--muted-foreground)]">
                        Mastered
                      </span>
                    )}
                  </div>

                  {/* Expand button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      playClick();
                      setSelectedSetForView({
                        start: vocabSetTemp.start,
                        end: vocabSetTemp.end,
                        name: vocabSetTemp.name
                      });
                      setSheetOpen(true);
                    }}
                    className={clsx(
                      'flex items-center justify-center',
                      'p-2 rounded-lg',
                      'hover:bg-[var(--muted)]',
                      'transition-colors duration-150'
                    )}
                  >
                    <HugeiconsIcon
                      icon={ArrowRight01Icon}
                      size={20}
                      className="text-[var(--muted-foreground)]"
                    />
                  </button>
                </div>

                {/* SRS Stage Breakdown */}
                {srsEnabled && (
                  <div className="flex justify-between gap-3 w-full">
                    {wordsInSet.slice(0, 10).map((wordObj, idx) => {
                      const srsCard = srsCards[`${wordObj.word}-vocabulary`];
                      const stage = srsCard ? srsCard.stage : 'new';
                      return (
                        <div
                          key={wordObj.word + idx}
                          className="flex flex-col items-center gap-1 flex-1"
                        >
                          <div className="text-lg font-medium">{wordObj.word}</div>
                          <div className="h-1 w-full rounded" style={{ backgroundColor: getStageColor(stage) }} />
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer - Game Mode Picker & Practice Button */}
      {selectedWordObjs.length > 0 && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 w-full max-w-4xl px-4">
          <div className="flex flex-col gap-4 bg-[var(--card)] border border-[var(--border)] rounded-2xl p-4">
            {/* Game Mode Picker */}
            <div className="flex flex-col gap-2">
              <p className="text-xs font-light text-[var(--muted-foreground)] opacity-60">
                Select Mode
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {['Pick', 'Reverse-Pick', 'Input', 'Reverse-Input'].map((mode) => (
                  <button
                    key={mode}
                    onClick={() => {
                      playClick();
                      setSelectedGameModeVocab(mode);
                    }}
                    className={clsx(
                      'flex items-center justify-center gap-2 px-4 py-3 rounded-lg',
                      'border transition-all duration-150',
                      'text-sm font-light',
                      selectedGameModeVocab === mode
                        ? 'border-[var(--foreground)] bg-[var(--muted)] text-[var(--foreground)]'
                        : 'border-[var(--border)] hover:bg-[var(--muted)] text-[var(--muted-foreground)]'
                    )}
                  >
                    {selectedGameModeVocab === mode ? (
                      <HugeiconsIcon icon={CircleCheckIcon} size={16} className="text-[var(--foreground)]" />
                    ) : (
                      <HugeiconsIcon icon={CircleIcon} size={16} className="text-[var(--border)]" />
                    )}
                    <span>{mode.split('-').join(' ')}</span>
                    {mode.toLowerCase() === 'pick' && (
                      <HugeiconsIcon icon={MousePointerClickIcon} size={18} className="text-[var(--foreground)]" />
                    )}
                    {mode.toLowerCase() === 'reverse-pick' && (
                      <HugeiconsIcon icon={MousePointerClickIcon} size={18} className="scale-x-[-1] text-[var(--foreground)]" />
                    )}
                    {mode.toLowerCase() === 'input' && (
                      <HugeiconsIcon icon={KeyboardIcon} size={18} className="text-[var(--foreground)]" />
                    )}
                    {mode.toLowerCase() === 'reverse-input' && (
                      <HugeiconsIcon icon={KeyboardIcon} size={18} className="scale-y-[-1] text-[var(--foreground)]" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Practice Button */}
            <div className="flex items-center justify-between gap-4">
              <div className="flex flex-col gap-1">
                <p className="text-sm font-light text-[var(--foreground)]">
                  {selectedWordObjs.length} words selected
                </p>
                <p className="text-xs font-light text-[var(--muted-foreground)] opacity-60">
                  Ready to practice
                </p>
              </div>
              {selectedGameModeVocab && (
                <Button
                  size="lg"
                  onClick={() => {
                    playClick();
                    router.push(`/vocabulary/train/${selectedGameModeVocab}`);
                  }}
                >
                  <HugeiconsIcon icon={PlayIcon} size={20} />
                  Start Practice
                </Button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Right Sheet - Vocab Details */}
      <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
        <SheetContent className="w-full sm:max-w-lg overflow-y-auto">
          <SheetHeader>
            <SheetTitle>{selectedSetForView?.name}</SheetTitle>
            <SheetDescription>
              Vocabulary details from this set
            </SheetDescription>
          </SheetHeader>
          <div className="mt-6">
            {selectedSetForView && (
              <div className="flex flex-col divide-y divide-[var(--border)]">
                {selectedVocabCollection.data
                  .slice(selectedSetForView.start * 10, selectedSetForView.end * 10)
                  .map((wordObj, index) => {
                    return (
                      <div
                        key={wordObj.word + index}
                        className={clsx(
                          'flex items-start gap-4 py-4',
                          'text-left'
                        )}
                      >
                        {/* Word */}
                        <span className="text-5xl font-light text-[var(--foreground)] min-w-[60px] flex items-center justify-center">
                          {wordObj.word}
                        </span>

                        {/* Details */}
                        <div className="flex flex-col gap-2 flex-1">
                          {/* Reading */}
                          <div className="flex flex-col gap-1">
                            <span className="text-xs font-light text-[var(--muted-foreground)] opacity-60">
                              Reading
                            </span>
                            <span className="text-sm font-light text-[var(--foreground)]">
                              {wordObj.reading}
                            </span>
                          </div>

                          {/* Meanings */}
                          <div className="flex flex-col gap-1">
                            <span className="text-xs font-light text-[var(--muted-foreground)] opacity-60">
                              Meaning
                            </span>
                            <span className="text-sm font-light text-[var(--foreground)]">
                              {wordObj.displayMeanings.join(', ')}
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            )}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default VocabCards;
