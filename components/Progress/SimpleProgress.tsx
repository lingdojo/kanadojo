'use client';
import useStatsStore from '@/store/useStatsStore';
import { Button } from '@/components/ui/button';
import { Trophy, Target, TrendingUp,  Trash } from 'lucide-react';
import clsx from 'clsx';

// Simple Card component to replace the missing UI component
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

export default function SimpleProgress() {
  const { allTimeStats, clearAllProgress } = useStatsStore();

  const totalQuestions =
    allTimeStats.totalCorrect + allTimeStats.totalIncorrect;
  const overallAccuracy =
    totalQuestions > 0 ? (allTimeStats.totalCorrect / totalQuestions) * 100 : 0;

  // Get most difficult characters (lowest accuracy with at least 5 attempts)
  const difficultCharacters = Object.entries(allTimeStats.characterMastery)
    .map(([char, stats]) => ({
      character: char,
      total: stats.correct + stats.incorrect,
      accuracy: stats.correct / (stats.correct + stats.incorrect)
    }))
    .filter(char => char.total >= 5)
    .sort((a, b) => a.accuracy - b.accuracy)
    .slice(0, 5);

  // Get mastered characters (high accuracy with many attempts)
  const masteredCharacters = Object.entries(allTimeStats.characterMastery)
    .map(([char, stats]) => ({
      character: char,
      total: stats.correct + stats.incorrect,
      accuracy: stats.correct / (stats.correct + stats.incorrect)
    }))
    .filter(char => char.total >= 10 && char.accuracy >= 0.9)
    .sort((a, b) => b.accuracy - a.accuracy)
    .slice(0, 5);

  return (
    <div className='space-y-6'>
      <div className='flex justify-between items-end'>
        <h1 className='text-3xl font-bold text-[var(--main-color)]'>
          Your Progress
        </h1>
        <Button
          variant='outline'
          size='sm'
          onClick={clearAllProgress}
          className='text-[var(--secondary-color)]'
        >
          <Trash className='h-4 w-4 mr-2' />
          Reset Progress
        </Button>
      </div>

      {/* Overview Stats */}
      <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
        <Card>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>
              Total Sessions
            </CardTitle>
            <TrendingUp className='h-4 w-4 text-[var(--secondary-color)]' />
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold text-[var(--main-color)]'>
              {allTimeStats.totalSessions}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>
              Overall Accuracy
            </CardTitle>
            <Target className='h-4 w-4 text-[var(--secondary-color)]' />
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold text-[var(--main-color)]'>
              {overallAccuracy.toFixed(1)}%
            </div>
            <p className='text-xs text-[var(--secondary-color)]'>
              {allTimeStats.totalCorrect} / {totalQuestions} correct
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>Best Streak</CardTitle>
            <Trophy className='h-4 w-4 text-[var(--secondary-color)]' />
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold text-[var(--main-color)]'>
              {allTimeStats.bestStreak}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>
              Characters Learned
            </CardTitle>
            <Trophy className='h-4 w-4 text-[var(--secondary-color)]' />
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold text-[var(--main-color)]'>
              {Object.keys(allTimeStats.characterMastery).length}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Character Analysis */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <Card>
          <CardHeader>
            <CardTitle className=''>Need More Practice</CardTitle>
          </CardHeader>
          <CardContent>
            {difficultCharacters.length > 0 ? (
              <div className='space-y-3'>
                {difficultCharacters.map(char => (
                  <div
                    key={char.character}
                    className='flex justify-between items-center'
                  >
                    <span className='text-2xl font-medium text-[var(--main-color)]'>
                      {char.character}
                    </span>
                    <div className='text-right'>
                      <div className='text-sm font-medium text-[var(--secondary-color)]'>
                        {(char.accuracy * 100).toFixed(1)}%
                      </div>
                      <div className='text-xs text-[var(--secondary-color)]'>
                        {char.total} attempts
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className='text-[var(--secondary-color)]'>
                Keep practicing to see analysis!
              </p>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className='text-[var(--main-color)]'>
              Mastered Characters
            </CardTitle>
          </CardHeader>
          <CardContent>
            {masteredCharacters.length > 0 ? (
              <div className='space-y-3'>
                {masteredCharacters.map(char => (
                  <div
                    key={char.character}
                    className='flex justify-between items-center'
                  >
                    <span className='text-2xl font-medium text-[var(--main-color)]'>
                      {char.character}
                    </span>
                    <div className='text-right'>
                      <div className='text-sm font-medium text-[var(--secondary-color)]'>
                        {(char.accuracy * 100).toFixed(1)}%
                      </div>
                      <div className='text-xs text-[var(--secondary-color)]'>
                        {char.total} attempts
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className='text-[var(--secondary-color)]'>
                Master characters to see them here!
              </p>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Instructions */}
      <Card>
        <CardHeader>
          <CardTitle>How Progress Tracking Works</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='space-y-2 text-sm text-[var(--secondary-color)]'>
            <p>
              • Your progress is automatically saved to your browser&apos;s
              local storage
            </p>
            <p>• Complete training sessions to see your stats update</p>
            <p>
              • Characters with 90%+ accuracy and 10+ attempts are considered
              &quot;mastered&quot;
            </p>
            <p>
              • Focus on characters in the &quot;Need More Practice&quot;
              section to improve
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
