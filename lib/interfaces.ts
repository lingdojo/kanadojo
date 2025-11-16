export interface IGroup {
  group: 'jlpt' | 'joyo';
}

export interface ISubgroup extends IGroup {
  subgroup:
    | 'n5'
    | 'n4'
    | 'n3'
    | 'n2'
    | 'n1'
    | 'grade-1'
    | 'grade-2'
    | 'grade-3'
    | 'grade-4'
    | 'grade-5'
    | 'grade-6';
}

export interface IWordClass extends ISubgroup {
  wordClass: 'nouns' | 'verbs' | 'adjectives' | 'adverbs';
}

export interface ISet extends IWordClass {
  set: string;
}

export interface IWord {
  word: string;
  reading: string;
  displayMeanings: string[];
  meanings: string[];
}

// SRS (Spaced Repetition System) Types

export type ContentType = 'hiragana' | 'katakana' | 'kanji' | 'vocabulary';
export type Stage = 'new' | 'learning' | 'young' | 'mature' | 'mastered';

export enum Grade {
  AGAIN = 0,      // Complete blackout, wrong answer
  HARD = 1,       // Correct but difficult/slow
  GOOD = 2,       // Correct answer (default)
  EASY = 3        // Instant correct, too easy
}

export interface SRSCard {
  id: string;                    // "character-contentType" (e.g., "あ-hiragana")
  character: string;             // The actual character
  contentType: ContentType;

  // SM-2 Algorithm fields
  easeFactor: number;            // Difficulty multiplier (1.3 - 2.5), default: 2.5
  interval: number;              // Days until next review, default: 0
  repetitions: number;           // Consecutive correct reviews, default: 0
  nextReview: Date;              // When to show next
  lastReview: Date | null;       // Last studied timestamp

  // Progress tracking
  lapses: number;                // Times forgotten (reset to learning)
  totalReviews: number;          // All-time review count
  stage: Stage;

  // Performance statistics
  averageResponseTime: number;   // milliseconds
  fastestTime: number;           // fastest correct answer
  slowestTime: number;           // slowest correct answer
}

export interface SRSStatistics {
  totalCards: number;
  cardsByStage: Record<Stage, number>;
  dueToday: number;
  dueThisWeek: number;
  averageEaseFactor: number;
  retentionRate7Days: number;
  retentionRate30Days: number;
  forecastNext7Days: number[];  // Cards due each day
}
