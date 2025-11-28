import { TimedChallenge as TimedChallengeKana } from '@/features/Kana';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kana Timed Challenge - Test Your Hiragana & Katakana Speed',
  description:
    'Test your Hiragana and Katakana knowledge with a timed challenge. Race against the clock to see how many kana characters you can identify correctly in 60 seconds. Perfect for speed practice and mastery testing.',
  keywords: [
    'kana challenge',
    'hiragana speed test',
    'katakana speed test',
    'timed kana practice',
    'japanese speed test'
  ],
  openGraph: {
    title: 'Kana Timed Challenge - Test Your Speed',
    description:
      'Race against the clock to test your Hiragana and Katakana mastery.',
    url: 'https://kanadojo.com/kana/timed-challenge',
    type: 'website'
  },
  alternates: {
    canonical: 'https://kanadojo.com/kana/timed-challenge'
  }
};

export default function TimedChallengePage() {
  return <TimedChallengeKana />;
}
