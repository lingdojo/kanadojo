import { TimedChallenge as TimedChallengeKana } from '@/features/Kana';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'KanaDojo: Timed Challenge',
  description:
    'Test your kana recognition skills in a timed challenge. Race against the clock and see how many kana you can correctly identify!',
  openGraph: {
    title: 'KanaDojo: Timed Challenge',
    description:
      'Test your kana recognition skills in a timed challenge. Race against the clock and see how many kana you can correctly identify!',
    url: 'https://kanadojo.com/kana/timed-challenge',
    type: 'website',
    locale: 'en_US'
  }
};

export default function TimedChallengePage() {
  return (
      <TimedChallengeKana />
  );
}
