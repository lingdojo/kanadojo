'use client';

import { Flame, Trophy, Calendar } from 'lucide-react';
import clsx from 'clsx';
import {
  calculateCurrentStreak,
  calculateLongestStreak,
  calculateTotalVisits
} from '../lib/streakCalculations';

// Card components matching SimpleProgress style
const Card = ({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={clsx(
      'rounded-2xl bg-[var(--card-color)] border border-[var(--border-color)] p-4',
      className
    )}
  >
    {children}
  </div>
);

const CardHeader = ({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) => <div className={clsx('pb-2', className)}>{children}</div>;

const CardTitle = ({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <h3 className={clsx('font-semibold text-[var(--main-color)]', className)}>
    {children}
  </h3>
);

const CardContent = ({ children }: { children: React.ReactNode }) => (
  <div className='pt-2'>{children}</div>
);

interface StreakStatsProps {
  visits: string[];
}

export default function StreakStats({ visits }: StreakStatsProps) {
  const currentStreak = calculateCurrentStreak(visits);
  const longestStreak = calculateLongestStreak(visits);
  const totalVisits = calculateTotalVisits(visits);

  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
      <Card>
        <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
          <CardTitle className='text-sm font-medium'>Current Streak</CardTitle>
          <Flame className='h-4 w-4 text-[var(--secondary-color)]' />
        </CardHeader>
        <CardContent>
          <div className='text-2xl font-bold text-[var(--main-color)]'>
            {currentStreak} {currentStreak === 1 ? 'day' : 'days'}
          </div>
          <p className='text-xs text-[var(--secondary-color)]'>
            {currentStreak > 0 ? 'Keep it going!' : 'Start your streak today!'}
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
          <CardTitle className='text-sm font-medium'>Longest Streak</CardTitle>
          <Trophy className='h-4 w-4 text-[var(--secondary-color)]' />
        </CardHeader>
        <CardContent>
          <div className='text-2xl font-bold text-[var(--main-color)]'>
            {longestStreak} {longestStreak === 1 ? 'day' : 'days'}
          </div>
          <p className='text-xs text-[var(--secondary-color)]'>
            {currentStreak >= longestStreak && currentStreak > 0
              ? "You're at your best!"
              : 'Your personal record'}
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
          <CardTitle className='text-sm font-medium'>Total Visits</CardTitle>
          <Calendar className='h-4 w-4 text-[var(--secondary-color)]' />
        </CardHeader>
        <CardContent>
          <div className='text-2xl font-bold text-[var(--main-color)]'>
            {totalVisits} {totalVisits === 1 ? 'day' : 'days'}
          </div>
          <p className='text-xs text-[var(--secondary-color)]'>
            Days you&apos;ve practiced
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
