import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { SRSCard, ContentType, Grade, Stage, SRSStatistics } from '@/lib/interfaces';
import { calculateNextReview, createNewCard } from '@/lib/srsAlgorithm';

interface SRSState {
  // Core data
  cards: Record<string, SRSCard>;

  // Settings
  srsEnabled: boolean;
  newCardsPerDay: number;
  reviewsPerDay: number;

  // Daily tracking
  todayNewCount: number;
  todayReviewCount: number;
  lastResetDate: string;

  // Core methods
  getOrCreateCard: (character: string, contentType: ContentType) => SRSCard;
  updateCard: (cardId: string, grade: Grade, responseTimeMs: number) => void;

  // Card queries
  getDueCards: (contentType?: ContentType) => SRSCard[];
  getNewCards: (contentType?: ContentType, limit?: number) => SRSCard[];
  getCardsByStage: (stage: Stage, contentType?: ContentType) => SRSCard[];

  // Daily management
  resetDailyCounts: () => void;
  incrementNewCount: () => void;

  // Statistics
  getStatistics: () => SRSStatistics;

  // Settings
  setSRSEnabled: (enabled: boolean) => void;
  setNewCardsPerDay: (count: number) => void;
  setReviewsPerDay: (count: number) => void;

  // Migration
  importFromStats: (characterScores: Record<string, { correct: number; wrong: number }>) => void;
  resetAllCards: () => void;
}

const useSRSStore = create<SRSState>()(
  persist(
    (set, get) => ({
      // Initial state
      cards: {},
      srsEnabled: true,
      newCardsPerDay: 20,
      reviewsPerDay: 100,
      todayNewCount: 0,
      todayReviewCount: 0,
      lastResetDate: new Date().toISOString().split('T')[0],

      // Get or create a card
      getOrCreateCard: (character: string, contentType: ContentType) => {
        const state = get();
        const cardId = `${character}-${contentType}`;

        if (state.cards[cardId]) {
          return state.cards[cardId];
        }

        // Create new card
        const newCard = createNewCard(character, contentType);
        set(state => ({
          cards: {
            ...state.cards,
            [cardId]: newCard
          }
        }));

        return newCard;
      },

      // Update card after review
      updateCard: (cardId: string, grade: Grade, responseTimeMs: number) => {
        const state = get();
        const card = state.cards[cardId];

        if (!card) return;

        const updatedCard = calculateNextReview(card, grade, responseTimeMs);

        set(state => ({
          cards: {
            ...state.cards,
            [cardId]: updatedCard
          },
          todayReviewCount: state.todayReviewCount + 1
        }));
      },

      // Get cards that are due for review
      getDueCards: (contentType?: ContentType) => {
        const state = get();
        const now = new Date();

        return Object.values(state.cards).filter(card => {
          const matchesType = !contentType || card.contentType === contentType;
          const isDue = card.nextReview <= now && card.stage !== 'new';
          return matchesType && isDue;
        });
      },

      // Get new cards (never studied)
      getNewCards: (contentType?: ContentType, limit?: number) => {
        const state = get();

        let cards = Object.values(state.cards).filter(card => {
          const matchesType = !contentType || card.contentType === contentType;
          return matchesType && card.stage === 'new';
        });

        if (limit) {
          cards = cards.slice(0, limit);
        }

        return cards;
      },

      // Get cards by stage
      getCardsByStage: (stage: Stage, contentType?: ContentType) => {
        const state = get();

        return Object.values(state.cards).filter(card => {
          const matchesType = !contentType || card.contentType === contentType;
          return card.stage === stage;
        });
      },

      // Reset daily counters
      resetDailyCounts: () => {
        const today = new Date().toISOString().split('T')[0];
        set(() => ({
          todayNewCount: 0,
          todayReviewCount: 0,
          lastResetDate: today
        }));
      },

      // Increment new card count
      incrementNewCount: () => {
        set(state => ({
          todayNewCount: state.todayNewCount + 1
        }));
      },

      // Get statistics
      getStatistics: () => {
        const state = get();
        const cards = Object.values(state.cards);
        const now = new Date();

        // Cards by stage
        const cardsByStage: Record<Stage, number> = {
          new: 0,
          learning: 0,
          young: 0,
          mature: 0,
          mastered: 0
        };

        cards.forEach(card => {
          cardsByStage[card.stage]++;
        });

        // Due calculations
        const dueToday = cards.filter(card =>
          card.nextReview <= now && card.stage !== 'new'
        ).length;

        const weekFromNow = new Date();
        weekFromNow.setDate(weekFromNow.getDate() + 7);
        const dueThisWeek = cards.filter(card =>
          card.nextReview <= weekFromNow && card.nextReview > now
        ).length;

        // Average ease factor
        const cardsWithReviews = cards.filter(card => card.totalReviews > 0);
        const averageEaseFactor = cardsWithReviews.length > 0
          ? cardsWithReviews.reduce((sum, card) => sum + card.easeFactor, 0) / cardsWithReviews.length
          : 2.5;

        // Retention rates (simplified calculation)
        const sevenDaysAgo = new Date();
        sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
        const reviewedLast7Days = cards.filter(card =>
          card.lastReview && new Date(card.lastReview) >= sevenDaysAgo
        );
        const retentionRate7Days = reviewedLast7Days.length > 0
          ? reviewedLast7Days.filter(card => card.lapses === 0).length / reviewedLast7Days.length
          : 1;

        const thirtyDaysAgo = new Date();
        thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
        const reviewedLast30Days = cards.filter(card =>
          card.lastReview && new Date(card.lastReview) >= thirtyDaysAgo
        );
        const retentionRate30Days = reviewedLast30Days.length > 0
          ? reviewedLast30Days.filter(card => card.lapses === 0).length / reviewedLast30Days.length
          : 1;

        // Forecast next 7 days
        const forecastNext7Days: number[] = [];
        for (let i = 0; i < 7; i++) {
          const dayStart = new Date();
          dayStart.setDate(dayStart.getDate() + i);
          dayStart.setHours(0, 0, 0, 0);

          const dayEnd = new Date(dayStart);
          dayEnd.setHours(23, 59, 59, 999);

          const dueCount = cards.filter(card =>
            card.nextReview >= dayStart && card.nextReview <= dayEnd
          ).length;

          forecastNext7Days.push(dueCount);
        }

        return {
          totalCards: cards.length,
          cardsByStage,
          dueToday,
          dueThisWeek,
          averageEaseFactor,
          retentionRate7Days,
          retentionRate30Days,
          forecastNext7Days
        };
      },

      // Settings
      setSRSEnabled: (enabled: boolean) => {
        set(() => ({ srsEnabled: enabled }));
      },

      setNewCardsPerDay: (count: number) => {
        set(() => ({ newCardsPerDay: count }));
      },

      setReviewsPerDay: (count: number) => {
        set(() => ({ reviewsPerDay: count }));
      },

      // Import existing progress from stats
      importFromStats: (characterScores: Record<string, { correct: number; wrong: number }>) => {
        const newCards: Record<string, SRSCard> = {};

        Object.entries(characterScores).forEach(([char, scores]) => {
          const totalAttempts = scores.correct + scores.wrong;
          if (totalAttempts === 0) return;

          const accuracy = scores.correct / totalAttempts;
          const contentType = detectContentType(char);

          // Estimate SRS parameters from historical accuracy
          let stage: Stage;
          let easeFactor: number;
          let interval: number;
          let repetitions: number;

          if (accuracy >= 0.95 && totalAttempts >= 20) {
            stage = 'mastered';
            easeFactor = 2.8;
            interval = 90;
            repetitions = 10;
          } else if (accuracy >= 0.90 && totalAttempts >= 10) {
            stage = 'mature';
            easeFactor = 2.5;
            interval = 30;
            repetitions = 5;
          } else if (accuracy >= 0.75 && totalAttempts >= 5) {
            stage = 'young';
            easeFactor = 2.2;
            interval = 7;
            repetitions = 3;
          } else {
            stage = 'learning';
            easeFactor = 2.0;
            interval = 1;
            repetitions = 1;
          }

          const cardId = `${char}-${contentType}`;

          newCards[cardId] = {
            id: cardId,
            character: char,
            contentType,
            easeFactor,
            interval,
            repetitions,
            nextReview: new Date(),
            lastReview: null,
            lapses: scores.wrong,
            totalReviews: totalAttempts,
            stage,
            averageResponseTime: 3000,
            fastestTime: 1000,
            slowestTime: 10000,
          };
        });

        set(() => ({ cards: newCards }));
      },

      // Reset all SRS data
      resetAllCards: () => {
        set(() => ({
          cards: {},
          todayNewCount: 0,
          todayReviewCount: 0
        }));
      }
    }),
    {
      name: 'kanadojo-srs',
      partialize: (state) => ({
        cards: state.cards,
        srsEnabled: state.srsEnabled,
        newCardsPerDay: state.newCardsPerDay,
        reviewsPerDay: state.reviewsPerDay,
        todayNewCount: state.todayNewCount,
        todayReviewCount: state.todayReviewCount,
        lastResetDate: state.lastResetDate,
      })
    }
  )
);

// Helper function to detect content type
function detectContentType(character: string): ContentType {
  const hiraganaRange = /[\u3040-\u309F]/;
  const katakanaRange = /[\u30A0-\u30FF]/;
  const kanjiRange = /[\u4E00-\u9FAF]/;

  if (hiraganaRange.test(character)) return 'hiragana';
  if (katakanaRange.test(character)) return 'katakana';
  if (kanjiRange.test(character)) return 'kanji';
  return 'vocabulary';
}

export default useSRSStore;
