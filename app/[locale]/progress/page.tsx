import ProgressAndAchievements from '@/components/Progress/ProgressAndAchievements';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Progress & Achievements - KanaDojo',
  description: 'Track your Japanese learning progress and unlock achievements.',
};

export default function ProgressPage() {
  return <ProgressAndAchievements />;
}