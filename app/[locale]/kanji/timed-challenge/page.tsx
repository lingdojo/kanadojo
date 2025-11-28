import { TimedChallenge as TimedChallengeKanji } from '@/features/Kanji';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kanji Timed Challenge - Test Your Kanji Recognition Speed',
  description:
    'Test your Kanji knowledge with a timed challenge. Race against the clock to see how many kanji characters you can identify correctly in 60 seconds. Perfect for JLPT preparation and speed practice.',
  keywords: [
    'kanji challenge',
    'kanji speed test',
    'timed kanji practice',
    'JLPT speed test',
    'kanji recognition'
  ],
  openGraph: {
    title: 'Kanji Timed Challenge - Test Your Speed',
    description:
      'Race against the clock to test your Kanji mastery and recognition speed.',
    url: 'https://kanadojo.com/kanji/timed-challenge',
    type: 'website'
  },
  alternates: {
    canonical: 'https://kanadojo.com/kanji/timed-challenge'
  }
};

export default function TimedChallengePage() {
  return <TimedChallengeKanji />;
}
