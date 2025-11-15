'use client';

import clsx from 'clsx';
import { chunkArray } from '@/lib/helperFunctions';
import { useState, useMemo } from 'react';
import { cardBorderStyles } from '@/static/styles';
import useGridColumns from '@/hooks/useGridColumns';
import { useClick } from '@/hooks/useAudio';
import { HugeiconsIcon } from '@hugeicons/react';
import { ArrowUpIcon, CheckmarkCircle02Icon as CircleCheckIcon, CircleIcon, FilterIcon, FilterRemoveIcon as FilterXIcon, PlayIcon, ArrowDown01Icon, ArrowRight01Icon, Cursor01Icon as MousePointerClickIcon, KeyboardIcon } from '@hugeicons/core-free-icons';
import useKanjiStore from '@/store/useKanjiStore';
import useStatsStore from '@/store/useStatsStore';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import KanjiSetDictionary from '@/components/Dojo/Kanji/SetDictionary';
import N5Kanji from '@/static/kanji/N5';
import N4Kanji from '@/static/kanji/N4';
import N3Kanji from '@/static/kanji/N3';
import N2Kanji from '@/static/kanji/N2';
import N1Kanji from '@/static/kanji/N1';
import {
  Drawer,
  DrawerClose,
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
import KanjiCard from '@/components/Dojo/Kanji/KanjiCard';
import usePreferencesStore from '@/store/usePreferencesStore';

// ✅ Setup Kanji collections
const kanjiCollections = {
  n5: { data: N5Kanji, name: 'N5', prevLength: 0 },
  n4: {
    data: N4Kanji,
    name: 'N4',
    prevLength: Math.ceil(N5Kanji.length / 10),
  },
  n3: {
    data: N3Kanji,
    name: 'N3',
    prevLength: Math.ceil((N5Kanji.length + N4Kanji.length) / 10),
  },
  n2: {
    data: N2Kanji,
    name: 'N2',
    prevLength: Math.ceil(
      (N5Kanji.length + N4Kanji.length + N3Kanji.length) / 10
    ),
  },
  n1: {
    data: N1Kanji,
    name: 'N1',
    prevLength: Math.ceil(
      (N5Kanji.length + N4Kanji.length + N3Kanji.length + N2Kanji.length) / 10
    ),
  },
};

// ✅ REMOVED: Intersection Observer animation variants to fix bug where users need to scroll to see first sets

const KanjiCards = () => {
  const router = useRouter();
  const selectedKanjiCollectionName = useKanjiStore(
    state => state.selectedKanjiCollection
  );

  const selectedKanjiSets = useKanjiStore(state => state.selectedKanjiSets);
  const setSelectedKanjiSets = useKanjiStore(
    state => state.setSelectedKanjiSets
  );
  const addKanjiObjs = useKanjiStore(state => state.addKanjiObjs);
  const selectedKanjiObjs = useKanjiStore(state => state.selectedKanjiObjs);
  const selectedGameModeKanji = useKanjiStore(state => state.selectedGameModeKanji);
  const allTimeStats = useStatsStore(state => state.allTimeStats);

  const { playClick } = useClick();

  const selectedKanjiCollection = kanjiCollections[selectedKanjiCollectionName];

  // Filter state for hiding mastered cards
  const [hideMastered, setHideMastered] = useState(false);

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
      isMastered: isSetMastered(i, i + 1),
    }));

  // Filter out mastered sets if hideMastered is true
  const filteredKanjiSets = hideMastered
    ? kanjiSetsTemp.filter(set => !set.isMastered)
    : kanjiSetsTemp;

  const masteredCount = kanjiSetsTemp.filter(set => set.isMastered).length;

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [sheetOpen, setSheetOpen] = useState(false);
  const [selectedSetForView, setSelectedSetForView] = useState<{ start: number; end: number; name: string } | null>(null);

  const setSelectedKanjiCollection = useKanjiStore(
    state => state.setSelectedKanjiCollection
  );
  const setSelectedGameModeKanji = useKanjiStore(
    state => state.setSelectedGameModeKanji
  );
  const clearKanjiSets = useKanjiStore(state => state.clearKanjiSets);
  const clearKanjiObjs = useKanjiStore(state => state.clearKanjiObjs);
  const showKana = usePreferencesStore(state => state.displayKana);

  const allUnits = [
    { id: 'n5', name: 'N5', description: 'Beginner', count: N5Kanji.length },
    { id: 'n4', name: 'N4', description: 'Elementary', count: N4Kanji.length },
    { id: 'n3', name: 'N3', description: 'Intermediate', count: N3Kanji.length },
    { id: 'n2', name: 'N2', description: 'Advanced', count: N2Kanji.length },
    { id: 'n1', name: 'N1', description: 'Expert', count: N1Kanji.length },
  ];

  const handleUnitChange = (unitId: string) => {
    playClick();
    setSelectedKanjiCollection(unitId as 'n5' | 'n4' | 'n3' | 'n2' | 'n1');
    clearKanjiSets();
    clearKanjiObjs();
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
                  JLPT {selectedKanjiCollection.name}
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
                Choose a level to practice kanji
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
                    selectedKanjiCollectionName === unit.id
                      ? 'border-[var(--foreground)] bg-[var(--card)]'
                      : 'border-[var(--border)] bg-[var(--background)] hover:bg-[var(--muted)]'
                  )}
                >
                  <div className="flex flex-col items-start gap-1">
                    <span className="text-xl font-light text-[var(--foreground)]">
                      JLPT {unit.name}
                    </span>
                    <span className="text-sm text-[var(--muted-foreground)]">
                      {unit.description} • {unit.count} kanji
                    </span>
                  </div>
                  {selectedKanjiCollectionName === unit.id && (
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

      {/* Straight column layout */}
      <div className="flex flex-col items-center w-full gap-4 px-4">
        {filteredKanjiSets.map((kanjiSetTemp, i) => {
            const kanjiInSet = selectedKanjiCollection.data.slice(
              kanjiSetTemp.start * 10,
              kanjiSetTemp.end * 10
            );
            const isSelected = selectedKanjiSets.includes(kanjiSetTemp.name);

            return (
              <div
                key={kanjiSetTemp.id + kanjiSetTemp.name}
                className={clsx(
                  'relative w-full max-w-2xl flex flex-col items-start gap-4',
                  'p-6 rounded-2xl border',
                  'transition-all duration-250 ease-in-out',
                  isSelected
                    ? 'bg-[var(--card)] border-[var(--foreground)]'
                    : 'bg-[var(--background)] border-[var(--border)]'
                )}
              >
                {/* Set title and status */}
                <div className="flex items-center justify-between gap-3 w-full">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-light">
                      {kanjiSetTemp.name}
                    </span>
                    {kanjiSetTemp.isMastered && (
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
                        start: kanjiSetTemp.start,
                        end: kanjiSetTemp.end,
                        name: kanjiSetTemp.name
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

                {/* Kanji list - clickable */}
                <button
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
                        ),
                      ]);
                      addKanjiObjs(
                        selectedKanjiCollection.data.slice(
                          kanjiSetTemp.start * 10,
                          kanjiSetTemp.end * 10
                        )
                      );
                    }
                  }}
                  className="flex flex-wrap gap-2 text-2xl text-[var(--muted-foreground)] hover:bg-[var(--muted)] rounded-lg p-2 -m-2 w-full transition-colors"
                >
                  {kanjiInSet.map((kanjiObj) => (
                    <span
                      key={kanjiObj.id}
                      className="hover:text-[var(--foreground)] transition-colors"
                    >
                      {kanjiObj.kanjiChar}
                    </span>
                  ))}
                </button>
              </div>
            );
          })}
      </div>

      {/* Footer - Game Mode Picker & Practice Button */}
      {selectedKanjiObjs.length > 0 && (
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
                      setSelectedGameModeKanji(mode);
                    }}
                    className={clsx(
                      'flex items-center justify-center gap-2 px-4 py-3 rounded-lg',
                      'border transition-all duration-150',
                      'text-sm font-light',
                      selectedGameModeKanji === mode
                        ? 'border-[var(--foreground)] bg-[var(--muted)] text-[var(--foreground)]'
                        : 'border-[var(--border)] hover:bg-[var(--muted)] text-[var(--muted-foreground)]'
                    )}
                  >
                    {selectedGameModeKanji === mode ? (
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
                  {selectedKanjiObjs.length} kanji selected
                </p>
                <p className="text-xs font-light text-[var(--muted-foreground)] opacity-60">
                  Ready to practice
                </p>
              </div>
              {selectedGameModeKanji && (
                <Button
                  size="lg"
                  onClick={() => {
                    playClick();
                    router.push(`/kanji/train/${selectedGameModeKanji}`);
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

      {/* Right Sheet - Kanji Details */}
      <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
        <SheetContent className="w-full sm:max-w-lg overflow-y-auto">
          <SheetHeader>
            <SheetTitle>{selectedSetForView?.name}</SheetTitle>
            <SheetDescription>
              Kanji details from this set
            </SheetDescription>
          </SheetHeader>
          <div className="mt-6">
            {selectedSetForView && (
              <div className="flex flex-col divide-y divide-[var(--border)]">
                {selectedKanjiCollection.data
                  .slice(selectedSetForView.start * 10, selectedSetForView.end * 10)
                  .map((kanjiObj, index) => {
                    // Format onyomi readings
                    const onyomiReadings = kanjiObj.onyomi
                      .filter(reading => reading && reading !== '')
                      .map(reading => showKana ? reading.split(' ')[1] : reading.split(' ')[0])
                      .join(', ');

                    // Format kunyomi readings
                    const kunyomiReadings = kanjiObj.kunyomi
                      .filter(reading => reading && reading !== '')
                      .map(reading => showKana ? reading.split(' ')[1] : reading.split(' ')[0])
                      .join(', ');

                    return (
                      <button
                        key={kanjiObj.id}
                        onClick={() => {
                          playClick();
                          window.open(`http://kanjiheatmap.com/?open=${kanjiObj.kanjiChar}`, '_blank');
                        }}
                        className={clsx(
                          'flex items-start gap-4 py-4',
                          'hover:bg-[var(--muted)]',
                          'transition-colors duration-150',
                          'text-left'
                        )}
                      >
                        {/* Kanji Character */}
                        <span className="text-5xl font-light text-[var(--foreground)] min-w-[60px] flex items-center justify-center">
                          {kanjiObj.kanjiChar}
                        </span>

                        {/* Details */}
                        <div className="flex flex-col gap-2 flex-1">
                          {/* Meanings */}
                          <div className="flex flex-col gap-1">
                            <span className="text-xs font-light text-[var(--muted-foreground)] opacity-60">
                              Meaning
                            </span>
                            <span className="text-sm font-light text-[var(--foreground)]">
                              {kanjiObj.fullDisplayMeanings.join(', ')}
                            </span>
                          </div>

                          {/* On'yomi */}
                          {onyomiReadings && (
                            <div className="flex flex-col gap-1">
                              <span className="text-xs font-light text-[var(--muted-foreground)] opacity-60">
                                On'yomi
                              </span>
                              <span className="text-sm font-light text-[var(--foreground)]">
                                {onyomiReadings}
                              </span>
                            </div>
                          )}

                          {/* Kun'yomi */}
                          {kunyomiReadings && (
                            <div className="flex flex-col gap-1">
                              <span className="text-xs font-light text-[var(--muted-foreground)] opacity-60">
                                Kun'yomi
                              </span>
                              <span className="text-sm font-light text-[var(--foreground)]">
                                {kunyomiReadings}
                              </span>
                            </div>
                          )}
                        </div>
                      </button>
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

export default KanjiCards;
