'use client';
import { useState, useMemo } from 'react';
import KanaCard from './KanaCard';
import { useClick } from '@/hooks/useAudio';
import { kana } from '@/static/kana';
import useKanaStore from '@/store/useKanaStore';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { HugeiconsIcon } from '@hugeicons/react';
import { PlayIcon } from '@hugeicons/core-free-icons';

const KanaCards = () => {
  const router = useRouter();
  const { playClick } = useClick();
  const kanaGroupIndices = useKanaStore(state => state.kanaGroupIndices);
  const addKanaGroupIndex = useKanaStore(state => state.addKanaGroupIndex);
  const selectedGameModeKana = useKanaStore(state => state.selectedGameModeKana);

  const kanaGroups = [
    {
      id: 'hiragana',
      name: 'Hiragana',
      japanese: 'ひらがな',
      subsets: [
        { id: 'h-base', name: 'Base', sliceRange: [0, 10] },
        { id: 'h-dakuon', name: 'Dakuon', sliceRange: [10, 15] },
        { id: 'h-yoon', name: 'Yoon', sliceRange: [15, 26] },
      ],
    },
    {
      id: 'katakana',
      name: 'Katakana',
      japanese: 'カタカナ',
      subsets: [
        { id: 'k-base', name: 'Base', sliceRange: [26, 36] },
        { id: 'k-dakuon', name: 'Dakuon', sliceRange: [36, 41] },
        { id: 'k-yoon', name: 'Yoon', sliceRange: [41, 52] },
        { id: 'k-foreign', name: 'Foreign Sounds', sliceRange: [52, 60] },
      ],
    },
    {
      id: 'challenge',
      name: 'Challenge',
      japanese: 'チャレンジ',
      subsets: [
        { id: 'c-hiragana', name: 'Similar Hiragana', sliceRange: [60, 65] },
        { id: 'c-katakana', name: 'Confusing Katakana', sliceRange: [65, 69] },
      ],
    },
  ];

  const [selectedGroup, setSelectedGroup] = useState('hiragana');
  const [selectedSubset, setSelectedSubset] = useState('h-base');

  // Get current group and subset data
  const currentGroup = useMemo(
    () => kanaGroups.find(g => g.id === selectedGroup),
    [selectedGroup]
  );

  const currentSubset = useMemo(
    () => currentGroup?.subsets.find(s => s.id === selectedSubset),
    [currentGroup, selectedSubset]
  );

  // Update subset when group changes
  const handleGroupChange = (value: string) => {
    playClick();
    setSelectedGroup(value);
    const newGroup = kanaGroups.find(g => g.id === value);
    if (newGroup) {
      setSelectedSubset(newGroup.subsets[0].id);
    }
  };

  // Flatten kana data for easy card rendering
  const getAllKanaInRange = (start: number, end: number) => {
    const groups = kana.slice(start, end);
    const allKana: Array<{ kana: string; romanji: string; characterIndex: number }> = [];

    // Calculate unique index for each character
    let characterIndex = 0;
    for (let i = 0; i < start; i++) {
      characterIndex += kana[i].kana.length;
    }

    groups.forEach((group) => {
      group.kana.forEach((k, i) => {
        allKana.push({
          kana: k,
          romanji: group.romanji[i],
          characterIndex: characterIndex++,
        });
      });
    });

    return allKana;
  };

  const displayedCards = useMemo(() => {
    if (!currentSubset) return [];
    return getAllKanaInRange(currentSubset.sliceRange[0], currentSubset.sliceRange[1]);
  }, [currentSubset]);

  const selectedCount = useMemo(() => {
    return displayedCards.filter(card => kanaGroupIndices.includes(card.characterIndex)).length;
  }, [displayedCards, kanaGroupIndices]);

  // Select all cards in current view
  const handleSelectAll = () => {
    playClick();
    const allIndices = displayedCards.map(card => card.characterIndex);
    allIndices.forEach(index => {
      if (!kanaGroupIndices.includes(index)) {
        addKanaGroupIndex(index);
      }
    });
  };

  // Select random 5 cards
  const handleSelectRandom = () => {
    playClick();
    const unselectedCards = displayedCards.filter(
      card => !kanaGroupIndices.includes(card.characterIndex)
    );
    const cardsToSelect = Math.min(5, unselectedCards.length);
    const shuffled = [...unselectedCards].sort(() => Math.random() - 0.5);
    shuffled.slice(0, cardsToSelect).forEach(card => {
      addKanaGroupIndex(card.characterIndex);
    });
  };

  // Clear all selections in current view
  const handleClearSelection = () => {
    playClick();
    displayedCards.forEach(card => {
      if (kanaGroupIndices.includes(card.characterIndex)) {
        addKanaGroupIndex(card.characterIndex);
      }
    });
  };

  return (
    <>
      <div className="flex flex-col gap-16 w-full max-w-7xl mx-auto px-8 py-12 pb-32">
        {/* Filters */}
        <div className="flex flex-col gap-6">
          {/* Filters and Action Buttons Row */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Select value={selectedGroup} onValueChange={handleGroupChange}>
                <SelectTrigger className="w-[200px] bg-transparent border-[var(--border)] font-light">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {kanaGroups.map(group => (
                    <SelectItem key={group.id} value={group.id}>
                      <span className="font-light">{group.name}</span>
                      <span className="ml-2 text-[var(--muted-foreground)] opacity-60">
                        {group.japanese}
                      </span>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select
                value={selectedSubset}
                onValueChange={value => {
                  playClick();
                  setSelectedSubset(value);
                }}
              >
                <SelectTrigger className="w-[200px] bg-transparent border-[var(--border)] font-light">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {currentGroup?.subsets.map(subset => (
                    <SelectItem key={subset.id} value={subset.id}>
                      <span className="font-light">{subset.name}</span>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={handleSelectAll}
                className="px-4 py-2 text-sm font-light text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors duration-150"
              >
                Select all
              </button>
              <button
                onClick={handleSelectRandom}
                className="px-4 py-2 text-sm font-light text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors duration-150"
              >
                Select random (5)
              </button>
              <button
                onClick={handleClearSelection}
                className="px-4 py-2 text-sm font-light text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors duration-150"
              >
                Clear
              </button>
            </div>
          </div>

          {/* Title */}
          <div className="flex flex-col gap-1">
            <h2 className="text-3xl font-light text-[var(--foreground)]">
              {currentGroup?.name} — {currentSubset?.name}
            </h2>
            <p className="text-sm font-light text-[var(--muted-foreground)] opacity-50">
              {selectedCount} / {displayedCards.length} selected
            </p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-1" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))' }}>
          {displayedCards.map((item, cardIndex) => (
            <KanaCard
              key={`${item.kana}-${cardIndex}`}
              kana={item.kana}
              romanji={item.romanji}
              isSelected={kanaGroupIndices.includes(item.characterIndex)}
              onToggle={() => addKanaGroupIndex(item.characterIndex)}
            />
          ))}
        </div>
      </div>

      {/* Footer - Practice Button */}
      {kanaGroupIndices.length > 0 && selectedGameModeKana && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
          <div className="flex items-center gap-6 bg-[var(--card)] border border-[var(--border)] rounded-2xl px-6 py-4">
            <div className="flex flex-col gap-1">
              <p className="text-sm font-light text-[var(--muted-foreground)]">
                {kanaGroupIndices.length} kana selected
              </p>
              <p className="text-xs font-light text-[var(--muted-foreground)] opacity-60">
                {selectedGameModeKana.split('-').join(' ')} mode
              </p>
            </div>
            <Button
              size="lg"
              onClick={() => {
                playClick();
                router.push(`/kana/train/${selectedGameModeKana}`);
              }}
            >
              <HugeiconsIcon icon={PlayIcon} size={20} />
              Start Practice
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default KanaCards;
