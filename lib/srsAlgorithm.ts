import { SRSCard, Grade } from './interfaces';

/**
 * Calculate the next review date and updated card parameters using modified SM-2 algorithm
 */
export function calculateNextReview(
  card: SRSCard,
  grade: Grade,
  responseTime: number
): SRSCard {
  let newEaseFactor = card.easeFactor;
  let newInterval = card.interval;
  let newRepetitions = card.repetitions;
  let newStage = card.stage;
  let newLapses = card.lapses;

  // Update response time statistics
  const totalReviews = card.totalReviews;
  const newAverageTime =
    ((card.averageResponseTime * totalReviews) + responseTime) / (totalReviews + 1);
  const newFastestTime = Math.min(card.fastestTime, responseTime);
  const newSlowestTime = Math.max(card.slowestTime, responseTime);

  // Adjust ease factor based on grade
  // Formula: EF' = EF + (0.1 - (3 - grade) * (0.08 + (3 - grade) * 0.02))
  newEaseFactor = Math.max(
    1.3,
    Math.min(
      2.5,
      card.easeFactor + (0.1 - (3 - grade) * (0.08 + (3 - grade) * 0.02))
    )
  );

  if (grade === Grade.AGAIN) {
    // Failed: reset to learning
    newRepetitions = 0;
    newInterval = 1; // Review tomorrow
    newStage = 'learning';
    newLapses = card.lapses + 1;
  } else {
    newRepetitions = card.repetitions + 1;

    if (newRepetitions === 1) {
      // First successful review
      newInterval = 1;
      newStage = 'learning';
    } else if (newRepetitions === 2) {
      // Second successful review
      newInterval = 3;
      newStage = 'young';
    } else {
      // Mature cards: use ease factor
      newInterval = Math.round(card.interval * newEaseFactor);

      // Grade modifiers
      if (grade === Grade.EASY) {
        newInterval = Math.round(newInterval * 1.3); // 30% bonus
      } else if (grade === Grade.HARD) {
        newInterval = Math.round(newInterval * 0.85); // 15% penalty
      }

      // Determine stage by interval
      if (newInterval >= 90) {
        newStage = 'mastered';
      } else if (newInterval >= 21) {
        newStage = 'mature';
      } else {
        newStage = 'young';
      }
    }
  }

  // Calculate next review date
  const nextReviewDate = new Date();
  nextReviewDate.setDate(nextReviewDate.getDate() + newInterval);

  return {
    ...card,
    easeFactor: newEaseFactor,
    interval: newInterval,
    repetitions: newRepetitions,
    nextReview: nextReviewDate,
    lastReview: new Date(),
    lapses: newLapses,
    totalReviews: card.totalReviews + 1,
    stage: newStage,
    averageResponseTime: newAverageTime,
    fastestTime: newFastestTime,
    slowestTime: newSlowestTime,
  };
}

/**
 * Automatically determine grade based on correctness and response time
 */
export function determineGrade(
  isCorrect: boolean,
  responseTimeMs: number,
  averageTimeMs: number
): Grade {
  if (!isCorrect) {
    return Grade.AGAIN;
  }

  // Correct answer - grade based on speed
  const responseTimeSec = responseTimeMs / 1000;

  if (responseTimeSec < 2) {
    return Grade.EASY; // Lightning fast (< 2 seconds)
  } else if (averageTimeMs > 0 && responseTimeSec < (averageTimeMs / 1000) * 0.8) {
    return Grade.GOOD; // Faster than average
  } else {
    return Grade.HARD; // Slower than average but correct
  }
}

/**
 * Create a new SRS card with default values
 */
export function createNewCard(
  character: string,
  contentType: SRSCard['contentType']
): SRSCard {
  return {
    id: `${character}-${contentType}`,
    character,
    contentType,
    easeFactor: 2.5,
    interval: 0,
    repetitions: 0,
    nextReview: new Date(),
    lastReview: null,
    lapses: 0,
    totalReviews: 0,
    stage: 'new',
    averageResponseTime: 3000,
    fastestTime: Infinity,
    slowestTime: 0,
  };
}
