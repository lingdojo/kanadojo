import { TimedChallenge as TimedChallengeKanji } from '@/features/kanji';
import { GameErrorBoundary } from '@/shared/components';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'KanaDojo: Kanji Timed Challenge',
  description:
    'Test your kanji recognition skills in a timed challenge. Race against the clock and see how many kanji you can correctly identify!',
  openGraph: {
    title: 'KanaDojo: Kanji Timed Challenge',
    description:
      'Test your kanji recognition skills in a timed challenge. Race against the clock and see how many kanji you can correctly identify!',
    url: 'https://kanadojo.com/kanji/timed-challenge',
    type: 'website',
    locale: 'en_US',
  },
};

export default function TimedChallengePage() {
  return (
    <GameErrorBoundary gameName="Kanji Timed Challenge">
      <TimedChallengeKanji />
    </GameErrorBoundary>
  );
}
