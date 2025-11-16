import { ContentType } from './interfaces';
import useSRSStore from '@/store/useSRSStore';

/**
 * Select the next character to show based on SRS priorities:
 * 1. Due cards (most overdue first)
 * 2. New cards (if under daily limit)
 * 3. Random fallback
 */
export function selectNextCharacter<T>(
  selectedItems: T[],
  getCharacter: (item: T) => string,
  contentType: ContentType,
  srsEnabled: boolean
): T {
  if (!srsEnabled || selectedItems.length === 0) {
    // Fallback to random
    return selectedItems[Math.floor(Math.random() * selectedItems.length)];
  }

  const srsStore = useSRSStore.getState();
  const now = new Date();

  // Build pool with SRS data
  const pool = selectedItems.map(item => ({
    item,
    card: srsStore.getOrCreateCard(getCharacter(item), contentType)
  }));

  // Priority 1: Due cards (sorted by most overdue first)
  const dueCards = pool
    .filter(({ card }) => card.nextReview <= now && card.stage !== 'new')
    .sort((a, b) => a.card.nextReview.getTime() - b.card.nextReview.getTime());

  if (dueCards.length > 0) {
    return dueCards[0].item;
  }

  // Priority 2: New cards (if under daily limit)
  if (srsStore.todayNewCount < srsStore.newCardsPerDay) {
    const newCards = pool.filter(({ card }) => card.stage === 'new');

    if (newCards.length > 0) {
      // Increment new card count
      srsStore.incrementNewCount();
      return newCards[Math.floor(Math.random() * newCards.length)].item;
    }
  }

  // Priority 3: Fallback to random
  return selectedItems[Math.floor(Math.random() * selectedItems.length)];
}
