import { TimedChallenge as TimedChallengeVocab } from '@/features/Vocabulary';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vocabulary Timed Challenge - Test Your Japanese Vocabulary Speed',
  description:
    'Test your Japanese vocabulary knowledge with a timed challenge. Race against the clock to see how many words you can translate correctly in 60 seconds. Perfect for JLPT preparation and vocabulary mastery.',
  keywords: [
    'vocabulary challenge',
    'japanese vocab speed test',
    'timed vocabulary practice',
    'JLPT vocabulary test',
    'japanese words quiz'
  ],
  openGraph: {
    title: 'Vocabulary Timed Challenge - Test Your Speed',
    description:
      'Race against the clock to test your Japanese vocabulary mastery.',
    url: 'https://kanadojo.com/vocabulary/timed-challenge',
    type: 'website'
  },
  alternates: {
    canonical: 'https://kanadojo.com/vocabulary/timed-challenge'
  }
};

export default function TimedChallengePage() {
  return <TimedChallengeVocab />;
}
