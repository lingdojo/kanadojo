'use client';

import { useState, useEffect } from 'react';
import clsx from 'clsx';
import useVisitStore from '../store/useVisitStore';
import StreakStats from './StreakStats';
import StreakGrid from './StreakGrid';
import type { TimePeriod } from '../lib/streakCalculations';

const periodOptions: { value: TimePeriod; label: string; icon: string }[] = [
  { value: 'week', label: 'Week', icon: '📅' },
  { value: 'month', label: 'Month', icon: '📆' },
  { value: 'year', label: 'Year', icon: '🗓️' }
];

export default function StreakProgress() {
  const { visits, isLoaded, loadVisits } = useVisitStore();
  const [period, setPeriod] = useState<TimePeriod>('week');

  useEffect(() => {
    if (!isLoaded) {
      loadVisits();
    }
  }, [isLoaded, loadVisits]);

  if (!isLoaded) {
    return (
      <div className='flex items-center justify-center p-8'>
        <div className='text-[var(--secondary-color)]'>Loading...</div>
      </div>
    );
  }

  return (
    <div className='space-y-6'>
      <div className='flex justify-between items-end'>
        <h1 className='text-3xl font-bold text-[var(--main-color)]'>
          Visit Streak
        </h1>
      </div>

      {/* Stats Cards */}
      <StreakStats visits={visits} />

      {/* Period Selector - Improved Design */}
      <div className='flex justify-center'>
        <div className='inline-flex rounded-xl bg-[var(--card-color)] border border-[var(--border-color)] p-1.5 gap-1'>
          {periodOptions.map(option => (
            <button
              key={option.value}
              onClick={() => setPeriod(option.value)}
              className={clsx(
                'relative px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200',
                'flex items-center gap-2',
                period === option.value
                  ? 'bg-[var(--main-color)] text-[var(--background-color)] shadow-sm'
                  : 'text-[var(--secondary-color)] hover:text-[var(--main-color)] hover:bg-[var(--border-color)]/50'
              )}
            >
              <span className='text-base'>{option.icon}</span>
              <span>{option.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Streak Grid */}
      <StreakGrid visits={visits} period={period} />

      {/* Instructions */}
      <div className='rounded-2xl bg-[var(--card-color)] border border-[var(--border-color)] p-4'>
        <h3 className='font-semibold text-[var(--main-color)] pb-2'>
          How Streak Tracking Works
        </h3>
        <div className='space-y-2 text-sm text-[var(--secondary-color)]'>
          <p>• Your visits are automatically tracked when you use KanaDojo</p>
          <p>• Each day you visit counts toward your streak</p>
          <p>• Keep your streak going by visiting daily!</p>
        </div>
      </div>
    </div>
  );
}
