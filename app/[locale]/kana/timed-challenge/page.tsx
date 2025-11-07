import TimedChallengeKana from '@/components/Dojo/Kana/TimedChallenge';
import { GameErrorBoundary } from '@/components/ErrorBoundary';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'KanaDojo: Timed Challenge',
  description:
    'Test your kana recognition skills in a 60-second timed challenge. Race against the clock and see how many kana you can correctly identify!',
  openGraph: {
    title: 'KanaDojo: Timed Challenge',
    description:
      'Test your kana recognition skills in a 60-second timed challenge. Race against the clock and see how many kana you can correctly identify!',
    url: 'https://kanadojo.com/kana/timed-challenge',
    type: 'website',
    locale: 'en_US',
  },
};

export default function TimedChallengePage() {
  return (
    <GameErrorBoundary gameName="Kana Timed Challenge">
      <TimedChallengeKana />
    </GameErrorBoundary>
  );
}
