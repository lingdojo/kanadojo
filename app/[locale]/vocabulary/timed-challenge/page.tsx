import { TimedChallenge as TimedChallengeVocab } from '@/features/vocabulary';
import { GameErrorBoundary } from '@/shared/components';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'KanaDojo: Vocabulary Timed Challenge',
  description:
    'Test your vocabulary skills in a timed challenge. Race against the clock and see how many words you can correctly translate!',
  openGraph: {
    title: 'KanaDojo: Vocabulary Timed Challenge',
    description:
      'Test your vocabulary skills in a timed challenge. Race against the clock and see how many words you can correctly translate!',
    url: 'https://kanadojo.com/vocabulary/timed-challenge',
    type: 'website',
    locale: 'en_US',
  },
};

export default function TimedChallengePage() {
  return (
    <GameErrorBoundary gameName="Vocabulary Timed Challenge">
      <TimedChallengeVocab />
    </GameErrorBoundary>
  );
}
