import { useState, useEffect, useCallback, useRef } from 'react';
import confetti from 'canvas-confetti';

export interface GoalTimer {
  id: string;
  label: string;
  targetSeconds: number;
  reached: boolean;
  showAnimation?: boolean;
  playSound?: boolean;
}

interface UseGoalTimersOptions {
  enabled?: boolean;
  onGoalReached?: (goal: GoalTimer) => void;
}

export function useGoalTimers(
  currentSeconds: number,
  options: UseGoalTimersOptions = {}
) {
  const { enabled = true, onGoalReached } = options;
  
  const [goals, setGoals] = useState<GoalTimer[]>([]);
  const reachedGoalsRef = useRef<Set<string>>(new Set());

  // Add new goal
  const addGoal = useCallback((goal: Omit<GoalTimer, 'id' | 'reached'>) => {
    const newGoal: GoalTimer = {
      ...goal,
      id: crypto.randomUUID(),
      reached: false,
      showAnimation: goal.showAnimation ?? true,
      playSound: goal.playSound ?? true,
    };
    
    setGoals(prev => [...prev, newGoal].sort((a, b) => a.targetSeconds - b.targetSeconds));
    return newGoal.id;
  }, []);

  // Remove goal
  const removeGoal = useCallback((goalId: string) => {
    setGoals(prev => prev.filter(g => g.id !== goalId));
    reachedGoalsRef.current.delete(goalId);
  }, []);

  // Clear all goals
  const clearGoals = useCallback(() => {
    setGoals([]);
    reachedGoalsRef.current.clear();
  }, []);

  // Reset goals (mark as not reached)
  const resetGoals = useCallback(() => {
    setGoals(prev => prev.map(g => ({ ...g, reached: false })));
    reachedGoalsRef.current.clear();
  }, []);

  // Trigger confetti animation
  const triggerConfetti = useCallback(() => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  }, []);

  // Play goal sound
  const playGoalSound = useCallback(() => {
    if (typeof Audio !== 'undefined') {
      const audio = new Audio('/sounds/correct.mp3');
      audio.volume = 0.5;
      audio.play().catch(() => {
        // Ignore errors if sound can't play
      });
    }
  }, []);

  // Check goals and trigger events
  useEffect(() => {
    if (!enabled || goals.length === 0) return;

    goals.forEach(goal => {
      // Only process if not reached before
      if (!goal.reached && !reachedGoalsRef.current.has(goal.id)) {
        if (currentSeconds >= goal.targetSeconds) {
          // Mark as reached
          setGoals(prev => 
            prev.map(g => g.id === goal.id ? { ...g, reached: true } : g)
          );
          reachedGoalsRef.current.add(goal.id);

          // Trigger effects
          if (goal.showAnimation) {
            triggerConfetti();
          }
          
          if (goal.playSound) {
            playGoalSound();
          }

          // Custom callback
          onGoalReached?.({ ...goal, reached: true });
        }
      }
    });
  }, [currentSeconds, goals, enabled, triggerConfetti, playGoalSound, onGoalReached]);

  // Get next unreached goal
  const nextGoal = goals.find(g => !g.reached);

  // Progress to next goal (0-100)
  const progressToNextGoal = nextGoal 
    ? Math.min((currentSeconds / nextGoal.targetSeconds) * 100, 100)
    : 100;

  return {
    goals,
    addGoal,
    removeGoal,
    clearGoals,
    resetGoals,
    nextGoal,
    progressToNextGoal,
    reachedGoals: goals.filter(g => g.reached),
    pendingGoals: goals.filter(g => !g.reached),
  };
}
