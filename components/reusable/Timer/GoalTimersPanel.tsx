'use client';

import { useState } from 'react';
import { Plus, X, Target, Clock, CheckCircle2 } from 'lucide-react';
import clsx from 'clsx';
import type { GoalTimer } from '@/hooks/useGoalTimers';

interface GoalTimersPanelProps {
  goals: GoalTimer[];
  currentSeconds: number;
  onAddGoal: (goal: Omit<GoalTimer, 'id' | 'reached'>) => void;
  onRemoveGoal: (goalId: string) => void;
  onClearGoals: () => void;
  disabled?: boolean;
}

export default function GoalTimersPanel({
  goals,
  currentSeconds,
  onAddGoal,
  onRemoveGoal,
  onClearGoals,
  disabled = false
}: GoalTimersPanelProps) {
  const [isAdding, setIsAdding] = useState(false);
  const [newGoalLabel, setNewGoalLabel] = useState('');
  const [newGoalMinutes, setNewGoalMinutes] = useState(5);
  const [newGoalSeconds, setNewGoalSeconds] = useState(0);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleAddGoal = () => {
    if (!newGoalLabel.trim()) return;
    
    const totalSeconds = (newGoalMinutes * 60) + newGoalSeconds;
    if (totalSeconds <= 0) return;

    onAddGoal({
      label: newGoalLabel,
      targetSeconds: totalSeconds,
      showAnimation: true,
      playSound: true,
    });

    // Reset form
    setNewGoalLabel('');
    setNewGoalMinutes(5);
    setNewGoalSeconds(0);
    setIsAdding(false);
  };

  const quickGoals = [
    { label: 'Warm-up', minutes: 1 },
    { label: 'Sprint', minutes: 5 },
    { label: 'Break', minutes: 10 },
  ];

  return (
    <div className={clsx(
      'border-2 rounded-2xl p-4',
      'bg-[var(--card-color)] border-[var(--border-color)]'
    )}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Target className="w-5 h-5 text-[var(--main-color)]" />
          <h3 className="font-semibold text-[var(--main-color)]">Goal Timers</h3>
        </div>
        {goals.length > 0 && (
          <button
            onClick={onClearGoals}
            disabled={disabled}
            className={clsx(
              'text-xs transition-colors',
              'text-[var(--secondary-color)] hover:text-[var(--main-color)]',
              disabled && 'opacity-50 cursor-not-allowed'
            )}
          >
            Clear All
          </button>
        )}
      </div>

      {/* Goals List */}
      <div className="space-y-2 mb-4">
        {goals.length === 0 && !isAdding && (
          <p className="text-sm text-[var(--secondary-color)] text-center py-4">
            No goals set. Add one to get started!
          </p>
        )}

        {goals.map(goal => {
          const progress = Math.min((currentSeconds / goal.targetSeconds) * 100, 100);
          const isReached = goal.reached;
          
          return (
            <div
              key={goal.id}
              className={clsx(
                'p-3 rounded-xl border-2 transition-all',
                isReached 
                  ? 'border-green-500 bg-green-500/10' 
                  : 'border-[var(--border-color)] bg-[var(--card-color)]'
              )}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  {isReached ? (
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                  ) : (
                    <Clock className="w-4 h-4 text-[var(--main-color)]" />
                  )}
                  <span className={clsx(
                    'font-medium',
                    isReached ? 'text-green-500' : 'text-[var(--main-color)]'
                  )}>
                    {goal.label}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-[var(--secondary-color)]">
                    {formatTime(goal.targetSeconds)}
                  </span>
                  <button
                    onClick={() => onRemoveGoal(goal.id)}
                    disabled={disabled}
                    className={clsx(
                      'transition-colors',
                      'text-[var(--secondary-color)] hover:text-red-500',
                      disabled && 'opacity-50 cursor-not-allowed'
                    )}
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
              
              {/* Progress Bar */}
              {!isReached && (
                <div className="w-full bg-[var(--border-color)] rounded-full h-1.5">
                  <div
                    className="bg-[var(--main-color)] h-1.5 rounded-full transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Add Goal Form */}
      {isAdding ? (
        <div className={clsx(
          'space-y-3 p-3 border-2 rounded-xl',
          'border-[var(--border-color)] bg-[var(--card-color)]'
        )}>
          <input
            type="text"
            placeholder="Goal name (e.g., Warm-up)"
            value={newGoalLabel}
            onChange={(e) => setNewGoalLabel(e.target.value)}
            className={clsx(
              'w-full px-3 py-2 rounded-lg border-2',
              'bg-[var(--card-color)] border-[var(--border-color)]',
              'text-[var(--main-color)] placeholder:text-[var(--secondary-color)]'
            )}
            autoFocus
          />
          
          <div className="flex gap-2">
            <div className="flex-1">
              <label className="text-xs text-[var(--secondary-color)] mb-1 block">
                Minutes
              </label>
              <input
                type="number"
                min="0"
                max="59"
                value={newGoalMinutes}
                onChange={(e) => setNewGoalMinutes(parseInt(e.target.value) || 0)}
                className={clsx(
                  'w-full px-3 py-2 rounded-lg border-2',
                  'bg-[var(--card-color)] border-[var(--border-color)]',
                  'text-[var(--main-color)]'
                )}
              />
            </div>
            <div className="flex-1">
              <label className="text-xs text-[var(--secondary-color)] mb-1 block">
                Seconds
              </label>
              <input
                type="number"
                min="0"
                max="59"
                value={newGoalSeconds}
                onChange={(e) => setNewGoalSeconds(parseInt(e.target.value) || 0)}
                className={clsx(
                  'w-full px-3 py-2 rounded-lg border-2',
                  'bg-[var(--card-color)] border-[var(--border-color)]',
                  'text-[var(--main-color)]'
                )}
              />
            </div>
          </div>

          <div className="flex gap-2">
            <button
              onClick={handleAddGoal}
              className={clsx(
                'flex-1 px-4 py-2 rounded-lg transition-opacity',
                'bg-[var(--main-color)] text-[var(--bg-color)]',
                'hover:opacity-90'
              )}
            >
              Add Goal
            </button>
            <button
              onClick={() => setIsAdding(false)}
              className={clsx(
                'px-4 py-2 border-2 rounded-lg transition-colors',
                'border-[var(--border-color)]',
                'hover:bg-[var(--border-color)]'
              )}
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <>
          {/* Quick Goals */}
          {goals.length === 0 && (
            <div className="mb-3">
              <p className="text-xs text-[var(--secondary-color)] mb-2">Quick add:</p>
              <div className="flex gap-2">
                {quickGoals.map(quick => (
                  <button
                    key={quick.label}
                    onClick={() => onAddGoal({
                      label: quick.label,
                      targetSeconds: quick.minutes * 60,
                      showAnimation: true,
                      playSound: true,
                    })}
                    disabled={disabled}
                    className={clsx(
                      'flex-1 px-3 py-2 text-sm border-2 rounded-lg transition-colors',
                      'border-[var(--border-color)]',
                      'hover:bg-[var(--border-color)]',
                      disabled && 'opacity-50 cursor-not-allowed'
                    )}
                  >
                    {quick.label}
                    <span className="text-xs text-[var(--secondary-color)] ml-1">
                      ({quick.minutes}m)
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          <button
            onClick={() => setIsAdding(true)}
            disabled={disabled}
            className={clsx(
              'w-full px-4 py-2 border-2 border-dashed rounded-lg transition-colors',
              'border-[var(--border-color)]',
              'hover:bg-[var(--border-color)]',
              'flex items-center justify-center gap-2',
              disabled && 'opacity-50 cursor-not-allowed'
            )}
          >
            <Plus className="w-4 h-4" />
            <span>Add Goal Timer</span>
          </button>
        </>
      )}
    </div>
  );
}
