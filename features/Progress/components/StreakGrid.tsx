'use client';

import clsx from 'clsx';
import {
  type TimePeriod,
  getDaysInPeriod,
  hasVisit,
  getDayOfWeek,
  groupDatesByMonth,
  getMonthName
} from '../lib/streakCalculations';

interface StreakGridProps {
  visits: string[];
  period: TimePeriod;
}

// Monday-based day labels
const DAY_LABELS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const FULL_MONTH_NAMES = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

/**
 * GitHub-style contribution grid cell
 */
function DayCell({
  date,
  isVisited,
  size = 'sm'
}: {
  date: string;
  isVisited: boolean;
  size?: 'sm' | 'md' | 'lg';
}) {
  const sizeClasses = {
    sm: 'w-[10px] h-[10px]',
    md: 'w-4 h-4',
    lg: 'w-6 h-6'
  };

  return (
    <div
      className={clsx(
        'rounded-[3px] transition-colors cursor-default',
        sizeClasses[size],
        isVisited
          ? 'bg-[var(--main-color)]'
          : 'bg-[var(--border-color)] opacity-25'
      )}
      title={`${date}${isVisited ? ' ✓' : ''}`}
    />
  );
}

/**
 * Week view - horizontal row of 7 days (Mon-Sun)
 */
function WeekGrid({ visits, days }: { visits: string[]; days: string[] }) {
  return (
    <div className='flex flex-col gap-3'>
      {/* Day labels */}
      <div className='flex gap-2 justify-center'>
        {DAY_LABELS.map(label => (
          <div
            key={label}
            className='w-10 text-center text-xs text-[var(--secondary-color)] font-medium'
          >
            {label}
          </div>
        ))}
      </div>
      {/* Day cells */}
      <div className='flex gap-2 justify-center'>
        {DAY_LABELS.map((_, dayIndex) => {
          const dayDate = days.find(d => getDayOfWeek(d) === dayIndex);
          if (!dayDate) {
            return <div key={dayIndex} className='w-10 h-10' />;
          }
          return (
            <div
              key={dayDate}
              className='w-10 h-10 flex items-center justify-center'
            >
              <div
                className={clsx(
                  'w-8 h-8 rounded-md transition-colors',
                  hasVisit(visits, dayDate)
                    ? 'bg-[var(--main-color)]'
                    : 'bg-[var(--border-color)] opacity-25'
                )}
                title={`${dayDate}${hasVisit(visits, dayDate) ? ' ✓' : ''}`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

/**
 * Month view - GitHub-style grid with weeks as columns
 * Each column is a week, rows are days of week (Mon-Sun)
 */
function MonthGrid({ visits, days }: { visits: string[]; days: string[] }) {
  // Get current month name
  const currentDate = new Date();
  const monthName = FULL_MONTH_NAMES[currentDate.getMonth()];

  // Group days into weeks (columns) - Monday-based
  const weeks: (string | null)[][] = [];
  let currentWeek: (string | null)[] = new Array(7).fill(null);

  for (const day of days) {
    const dayOfWeek = getDayOfWeek(day); // 0 = Monday, 6 = Sunday
    currentWeek[dayOfWeek] = day;

    // If Sunday (6), start a new week
    if (dayOfWeek === 6) {
      weeks.push(currentWeek);
      currentWeek = new Array(7).fill(null);
    }
  }

  // Push the last partial week if it has any days
  if (currentWeek.some(d => d !== null)) {
    weeks.push(currentWeek);
  }

  return (
    <div className='flex flex-col gap-3'>
      {/* Month title */}
      <h3 className='text-lg font-semibold text-[var(--main-color)]'>
        {monthName}
      </h3>

      <div className='flex gap-2'>
        {/* Day labels on the left */}
        <div className='flex flex-col gap-[3px]'>
          {DAY_LABELS.map(label => (
            <div
              key={label}
              className='h-4 w-8 text-[11px] text-[var(--secondary-color)] flex items-center justify-end pr-2'
            >
              {label}
            </div>
          ))}
        </div>

        {/* Grid of weeks */}
        <div className='flex gap-[3px]'>
          {weeks.map((week, weekIndex) => (
            <div key={weekIndex} className='flex flex-col gap-[3px]'>
              {week.map((day, dayIndex) => (
                <div key={dayIndex}>
                  {day ? (
                    <DayCell
                      date={day}
                      isVisited={hasVisit(visits, day)}
                      size='md'
                    />
                  ) : (
                    <div className='w-4 h-4' />
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/**
 * Year view - GitHub-style grid with all months, expanded vertically
 */
function YearGrid({ visits, days }: { visits: string[]; days: string[] }) {
  const currentYear = new Date().getFullYear();
  const monthGroups = groupDatesByMonth(days);
  const sortedMonths = Object.keys(monthGroups).sort();

  // Build weeks for the entire year - Monday-based
  const allWeeks: { month: string; days: (string | null)[] }[] = [];

  for (const monthKey of sortedMonths) {
    const monthDays = monthGroups[monthKey];
    let currentWeek: (string | null)[] = new Array(7).fill(null);
    let isFirstWeekOfMonth = true;

    for (const day of monthDays) {
      const dayOfWeek = getDayOfWeek(day); // 0 = Monday, 6 = Sunday
      currentWeek[dayOfWeek] = day;

      // If Sunday (6), start a new week
      if (dayOfWeek === 6) {
        allWeeks.push({
          month: isFirstWeekOfMonth ? monthKey : '',
          days: currentWeek
        });
        currentWeek = new Array(7).fill(null);
        isFirstWeekOfMonth = false;
      }
    }

    if (currentWeek.some(d => d !== null)) {
      allWeeks.push({
        month: isFirstWeekOfMonth ? monthKey : '',
        days: currentWeek
      });
    }
  }

  return (
    <div className='flex flex-col gap-3'>
      {/* Year title */}
      <h3 className='text-lg font-semibold text-[var(--main-color)]'>
        {currentYear}
      </h3>

      <div className='flex gap-2'>
        {/* Day labels on the left - aligned with grid rows */}
        <div className='flex flex-col shrink-0'>
          {/* Spacer for month labels row */}
          <div className='h-4' />
          {/* Day labels */}
          <div className='flex flex-col gap-[3px]'>
            {DAY_LABELS.map(label => (
              <div
                key={label}
                className='h-[10px] w-8 text-[10px] text-[var(--secondary-color)] flex items-center justify-end pr-2'
              >
                {label}
              </div>
            ))}
          </div>
        </div>

        {/* Grid container - horizontal scroll on small screens */}
        <div className='flex-1 overflow-x-auto pb-2'>
          <div className='flex flex-col gap-[3px] min-w-max'>
            {/* Month labels */}
            <div className='flex gap-[3px] h-4 items-end'>
              {allWeeks.map((week, i) => (
                <div
                  key={i}
                  className='w-[10px] text-[10px] text-[var(--secondary-color)] whitespace-nowrap'
                >
                  {week.month ? getMonthName(week.month) : ''}
                </div>
              ))}
            </div>

            {/* Grid rows - one row per day of week */}
            <div className='flex flex-col gap-[3px]'>
              {DAY_LABELS.map((_, dayIndex) => (
                <div key={dayIndex} className='flex gap-[3px]'>
                  {allWeeks.map((week, weekIndex) => {
                    const day = week.days[dayIndex];
                    return (
                      <div key={weekIndex}>
                        {day ? (
                          <DayCell
                            date={day}
                            isVisited={hasVisit(visits, day)}
                            size='sm'
                          />
                        ) : (
                          <div className='w-[10px] h-[10px]' />
                        )}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function StreakGrid({ visits, period }: StreakGridProps) {
  const days = getDaysInPeriod(period);

  return (
    <div className='rounded-2xl bg-[var(--card-color)] border border-[var(--border-color)] p-5'>
      {period === 'week' && <WeekGrid visits={visits} days={days} />}
      {period === 'month' && <MonthGrid visits={visits} days={days} />}
      {period === 'year' && <YearGrid visits={visits} days={days} />}
    </div>
  );
}

// Export for testing
export { getDaysInPeriod };
