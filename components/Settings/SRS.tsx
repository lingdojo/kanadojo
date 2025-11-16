'use client';
import { useState } from 'react';
import useSRSStore from '@/store/useSRSStore';
import useStatsStore from '@/store/useStatsStore';
import { useClick } from '@/hooks/useAudio';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { HugeiconsIcon } from '@hugeicons/react';
import { Clock01Icon as ClockIcon, BookOpen02Icon as BookIcon, RefreshIcon } from '@hugeicons/core-free-icons';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';

const SRS = () => {
  const { playClick } = useClick();
  const [showImportDialog, setShowImportDialog] = useState(false);
  const [showResetDialog, setShowResetDialog] = useState(false);

  const srsEnabled = useSRSStore(state => state.srsEnabled);
  const setSRSEnabled = useSRSStore(state => state.setSRSEnabled);
  const newCardsPerDay = useSRSStore(state => state.newCardsPerDay);
  const setNewCardsPerDay = useSRSStore(state => state.setNewCardsPerDay);
  const reviewsPerDay = useSRSStore(state => state.reviewsPerDay);
  const setReviewsPerDay = useSRSStore(state => state.setReviewsPerDay);
  const importFromStats = useSRSStore(state => state.importFromStats);
  const resetAllCards = useSRSStore(state => state.resetAllCards);
  const cards = useSRSStore(state => state.cards);

  const characterScores = useStatsStore(state => state.characterScores);

  const handleImport = () => {
    importFromStats(characterScores);
    setShowImportDialog(false);
    playClick();
  };

  const handleReset = () => {
    resetAllCards();
    setShowResetDialog(false);
    playClick();
  };

  const totalCards = Object.keys(cards).length;
  const availableToImport = Object.keys(characterScores).length;

  return (
    <div className="flex flex-col gap-6">
      {/* Enable/Disable SRS */}
      <div className="space-y-3">
        <h4 className="text-lg font-medium">Spaced Repetition System (SRS)</h4>
        <p className="text-sm text-[var(--muted-foreground)]">
          Enable intelligent scheduling to optimize your learning. The SRS tracks your performance
          and shows you characters at optimal intervals based on how well you know them.
        </p>
        <div className="flex flex-row gap-4">
          <Button
            variant={!srsEnabled ? "default" : "outline"}
            className="flex-1 text-base h-auto py-4"
            onClick={() => {
              playClick();
              setSRSEnabled(false);
            }}
          >
            {!srsEnabled && '\u2B24 '}
            Disabled
          </Button>
          <Button
            variant={srsEnabled ? "default" : "outline"}
            className="flex-1 text-base h-auto py-4"
            onClick={() => {
              playClick();
              setSRSEnabled(true);
            }}
          >
            {srsEnabled && '\u2B24 '}
            Enabled
          </Button>
        </div>
      </div>

      {srsEnabled && (
        <>
          {/* New Cards Per Day */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <HugeiconsIcon icon={BookIcon} size={18} className="text-[var(--muted-foreground)]" />
                <h4 className="text-base font-medium">New Cards Per Day</h4>
              </div>
              <span className="text-base font-semibold text-[var(--primary)]">
                {newCardsPerDay}
              </span>
            </div>
            <p className="text-sm text-[var(--muted-foreground)]">
              Maximum number of new characters to introduce each day
            </p>
            <Slider
              value={[newCardsPerDay]}
              onValueChange={(value) => {
                setNewCardsPerDay(value[0]);
              }}
              min={5}
              max={50}
              step={5}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-[var(--muted-foreground)]">
              <span>5</span>
              <span>50</span>
            </div>
          </div>

          {/* Reviews Per Day */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <HugeiconsIcon icon={ClockIcon} size={18} className="text-[var(--muted-foreground)]" />
                <h4 className="text-base font-medium">Max Reviews Per Day</h4>
              </div>
              <span className="text-base font-semibold text-[var(--primary)]">
                {reviewsPerDay}
              </span>
            </div>
            <p className="text-sm text-[var(--muted-foreground)]">
              Maximum number of review sessions per day
            </p>
            <Slider
              value={[reviewsPerDay]}
              onValueChange={(value) => {
                setReviewsPerDay(value[0]);
              }}
              min={20}
              max={200}
              step={10}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-[var(--muted-foreground)]">
              <span>20</span>
              <span>200</span>
            </div>
          </div>

          {/* Import and Reset */}
          <div className="space-y-3 pt-4 border-t border-[var(--border)]">
            <h4 className="text-base font-medium">Data Management</h4>

            {/* Current Stats */}
            <div className="bg-[var(--card)] p-4 rounded-lg space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-[var(--muted-foreground)]">Total SRS Cards:</span>
                <span className="font-medium">{totalCards}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-[var(--muted-foreground)]">Available to Import:</span>
                <span className="font-medium">{availableToImport}</span>
              </div>
            </div>

            {availableToImport > 0 && (
              <Button
                variant="outline"
                className="w-full"
                onClick={() => {
                  playClick();
                  setShowImportDialog(true);
                }}
              >
                <HugeiconsIcon icon={RefreshIcon} size={16} className="mr-2" />
                Import Existing Progress
              </Button>
            )}

            <Button
              variant="outline"
              className="w-full text-[var(--destructive)]"
              onClick={() => {
                playClick();
                setShowResetDialog(true);
              }}
            >
              Reset All SRS Data
            </Button>
          </div>
        </>
      )}

      {/* Import Dialog */}
      <AlertDialog open={showImportDialog} onOpenChange={setShowImportDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Import Existing Progress?</AlertDialogTitle>
            <AlertDialogDescription>
              This will import {availableToImport} characters from your existing practice stats
              into the SRS system. Your current SRS data will be replaced with estimated values
              based on your past accuracy.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={playClick}>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleImport}>Import</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Reset Dialog */}
      <AlertDialog open={showResetDialog} onOpenChange={setShowResetDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Reset All SRS Data?</AlertDialogTitle>
            <AlertDialogDescription>
              This will permanently delete all {totalCards} SRS cards and reset your spaced
              repetition progress. This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={playClick}>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleReset} className="bg-[var(--destructive)]">
              Reset
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default SRS;
