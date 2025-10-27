import ProgressWithSidebar from '@/components/Progress/ProgressWithSidebar';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'KanaDojo: Progress',
  description: 'Track your Japanese learning progress and see detailed statistics.',
};

export default function ProgressPage() {
  return <ProgressWithSidebar />;
}