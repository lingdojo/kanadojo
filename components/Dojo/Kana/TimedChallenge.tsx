'use client';

import React, { useEffect, useState, useRef } from 'react';
// import useKanaKanjiStore from '@/store/useKanaKanjiStore';
import useKanaStore from '@/store/useKanaStore';
import useStatsStore from '@/store/useStatsStore';
import { useChallengeTimer } from '@/hooks/useTimer';
import { useGoalTimers } from '@/hooks/useGoalTimers';
import { Button } from '@/components/ui/button';
import { generateKanaQuestion } from '@/lib/generateKanaQuestions';
import {
  Timer,
  Target,
  TrendingUp,
  RotateCcw,
  Play,
  ArrowLeft,
  CheckCircle2,
  XCircle,
  X
} from 'lucide-react';
import { Link } from '@/i18n/routing';
import clsx from 'clsx';
import { useClick, useCorrect, useError } from '@/hooks/useAudio';
import confetti from 'canvas-confetti';
import SSRAudioButton from '@/components/reusable/SSRAudioButton';
import GoalTimersPanel from '@/components/reusable/Timer/GoalTimersPanel';

import type { KanaCharacter } from '@/lib/generateKanaQuestions';
import { flattenKanaGroups } from '@/lib/flattenKanaGroup';

export default function TimedChallengeKana() {
  const { playClick } = useClick();
  const { playCorrect } = useCorrect();
  const { playError } = useError();

  const kanaGroupIndices = useKanaStore(state => state.kanaGroupIndices);

  // Force Input mode by default for Timed Challenge
  const gameMode = 'Input';
  console.log(gameMode); // fixing vercel deployment

  // Memoize selectedKana to prevent infinite loops
  const selectedKana = React.useMemo(
    () => flattenKanaGroups(kanaGroupIndices) as unknown as KanaCharacter[],
    [kanaGroupIndices]
  );

  const {
    timedCorrectAnswers,
    timedWrongAnswers,
    timedStreak,
    incrementTimedCorrectAnswers,
    incrementTimedWrongAnswers,
    resetTimedStats
  } = useStatsStore();

  // Load saved duration from localStorage
  const [challengeDuration, setChallengeDuration] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('timedChallengeDuration');
      return saved ? parseInt(saved) : 60;
    }
    return 60;
  });

  // Save duration to localStorage whenever it changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(
        'timedChallengeDuration',
        challengeDuration.toString()
      );
    }
  }, [challengeDuration]);

  const { seconds, minutes, isRunning, startTimer, resetTimer, timeLeft } =
    useChallengeTimer(challengeDuration);

  const [currentQuestion, setCurrentQuestion] = useState<KanaCharacter | null>(
    null
  );
  const [userAnswer, setUserAnswer] = useState('');
  const [isFinished, setIsFinished] = useState(false);
  const [lastAnswerCorrect, setLastAnswerCorrect] = useState<boolean | null>(
    null
  );
  const [showGoalTimers, setShowGoalTimers] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Calculate elapsed time for goal timers
  const elapsedTime = challengeDuration - timeLeft;

  // Goal Timers with history saving enabled
  const goalTimers = useGoalTimers(elapsedTime, {
    enabled: showGoalTimers,
    saveToHistory: true,
    context: 'Kana Timed Challenge',
    onGoalReached: goal => {
      console.log(`🎯 Goal reached: ${goal.label} at ${elapsedTime}s`);
    }
  });

  useEffect(() => {
    if (selectedKana.length > 0) {
      setCurrentQuestion(generateKanaQuestion(selectedKana));
    }
  }, [selectedKana]);

  useEffect(() => {
    // Detect when timer reaches 0 (challenge ends)
    if (timeLeft === 0 && !isFinished) {
      setIsFinished(true);
      // Celebration confetti for completing the challenge
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  }, [timeLeft, isFinished]);

  // Auto-focus input when game is running
  useEffect(() => {
    if (isRunning && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isRunning, currentQuestion]);

  const handleStart = () => {
    playClick();
    resetTimedStats();
    setIsFinished(false);
    setUserAnswer('');
    setLastAnswerCorrect(null);
    setCurrentQuestion(generateKanaQuestion(selectedKana));
    goalTimers.resetGoals();

    // Reset and restart timer with current duration
    resetTimer();
    startTimer();

    // Focus input
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }, 100);
  };

  const handleCancel = () => {
    playClick();
    resetTimer();
    setIsFinished(false);
    setUserAnswer('');
    setLastAnswerCorrect(null);
  };

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!currentQuestion || !userAnswer.trim()) return;

    playClick();

    // Always use Input mode (user sees kana, types romaji)
    const isCorrect =
      userAnswer.trim().toLowerCase() === currentQuestion.romaji.toLowerCase();

    if (isCorrect) {
      playCorrect(); // Success sound
      incrementTimedCorrectAnswers();
      setLastAnswerCorrect(true);
      // Move to next question immediately on correct answer
      setTimeout(() => {
        setCurrentQuestion(generateKanaQuestion(selectedKana));
        setLastAnswerCorrect(null);
      }, 300);
    } else {
      playError(); // Error sound
      incrementTimedWrongAnswers();
      setLastAnswerCorrect(false);
      // Show feedback briefly then continue
      setTimeout(() => {
        setLastAnswerCorrect(null);
      }, 800);
    }

    setUserAnswer('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  const totalAnswers = timedCorrectAnswers + timedWrongAnswers;
  const accuracy =
    totalAnswers > 0
      ? Math.round((timedCorrectAnswers / totalAnswers) * 100)
      : 0;

  if (selectedKana.length === 0) {
    return (
      <div className='min-h-[100dvh] flex flex-col items-center justify-center p-4'>
        <div className='max-w-md text-center space-y-6'>
          <Timer size={64} className='mx-auto text-[var(--main-color)]' />
          <h1 className='text-2xl font-bold text-[var(--secondary-color)]'>
            Timed Challenge
          </h1>
          <p className='text-[var(--muted-color)]'>
            Please select some kana characters first to begin the timed
            challenge.
          </p>
          <Link href='/kana'>
            <Button className='bg-[var(--secondary-color)] hover:bg-[var(--main-color)] duration-250'>
              <ArrowLeft size={16} className='mr-2' />
              Select Kana
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  if (!isRunning && !isFinished) {
    return (
      <div className='min-h-[100dvh] flex flex-col lg:flex-row items-start justify-center p-4 gap-6'>
        <div className='max-w-md w-full lg:max-w-lg text-center space-y-6'>
          <Timer size={64} className='mx-auto text-[var(--main-color)]' />
          <h1 className='text-2xl font-bold text-[var(--secondary-color)]'>
            Timed Challenge
          </h1>
          <p className='text-[var(--muted-color)]'>
            Test your kana recognition speed! Answer as many questions as
            possible before time runs out.
          </p>

          <div className='bg-[var(--card-color)] rounded-lg p-4 space-y-2'>
            <p className='text-sm text-[var(--muted-color)]'>
              Selected Characters:
            </p>
            <p className='font-medium text-[var(--secondary-color)]'>
              {selectedKana.length} kana
            </p>
          </div>

          <div className='bg-[var(--card-color)] rounded-lg p-3'>
            <p className='text-sm text-[var(--main-color)] font-medium'>
              ℹ️ Mode: Input (See kana → Type romaji)
            </p>
          </div>

          {/* Duration Selector - Moved up */}
          <div className='bg-[var(--card-color)] rounded-lg p-4 space-y-3'>
            <p className='text-sm font-medium text-[var(--secondary-color)]'>
              Challenge Duration:
            </p>
            <div className='flex gap-2 justify-center flex-wrap'>
              {[30, 60, 90, 120, 180].map(duration => (
                <button
                  key={duration}
                  onClick={() => {
                    playClick();
                    setChallengeDuration(duration);
                  }}
                  className={clsx(
                    'px-4 py-2 rounded-lg border-2 transition-all',
                    challengeDuration === duration
                      ? 'border-[var(--main-color)] bg-[var(--main-color)]/10 text-[var(--main-color)] font-bold'
                      : 'border-[var(--border-color)] hover:bg-[var(--border-color)]'
                  )}
                >
                  {duration < 60 ? `${duration}s` : `${duration / 60}m`}
                </button>
              ))}
            </div>
          </div>

          <Button
            onClick={handleStart}
            className='w-full bg-[var(--main-color)] hover:bg-[var(--main-color)]/90'
          >
            <Play size={16} className='mr-2' />
            Start Challenge
          </Button>
          <Link href='/kana' className='block'>
            <Button variant='outline' className='w-full'>
              <ArrowLeft size={16} className='mr-2' />
              Back to Selection
            </Button>
          </Link>
        </div>

        {/* Goal Timers Panel - Pre-game setup */}
        <div className='w-full lg:w-80 space-y-4'>
          <button
            onClick={() => setShowGoalTimers(!showGoalTimers)}
            className={clsx(
              'w-full px-4 py-2 border-2 rounded-xl transition-colors',
              'border-[var(--border-color)]',
              'hover:bg-[var(--border-color)]',
              'flex items-center justify-center gap-2'
            )}
          >
            <Target size={20} />
            <span>{showGoalTimers ? 'Hide' : 'Show'} Goal Timers</span>
          </button>

          {showGoalTimers && (
            <GoalTimersPanel
              goals={goalTimers.goals}
              currentSeconds={0}
              onAddGoal={goalTimers.addGoal}
              onRemoveGoal={goalTimers.removeGoal}
              onClearGoals={goalTimers.clearGoals}
              disabled={false}
            />
          )}
        </div>
      </div>
    );
  }

  if (isFinished) {
    const reachedGoals = goalTimers.goals.filter(g => g.reached);
    const missedGoals = goalTimers.goals.filter(g => !g.reached);
    const totalQuestions = timedCorrectAnswers + timedWrongAnswers;
    const accuracy =
      totalQuestions > 0
        ? Math.round((timedCorrectAnswers / totalQuestions) * 100)
        : 0;
    const questionsPerMinute =
      totalQuestions > 0
        ? ((totalQuestions / challengeDuration) * 60).toFixed(1)
        : '0';

    return (
      // Modal overlay con fondo oscuro
      <div className='fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50'>
        <div className='bg-[var(--bg-color)] max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl relative'>
          <div className='p-6 space-y-6'>
            {/* Header */}
            <div className='text-center space-y-2'>
              <div className='inline-flex items-center justify-center w-20 h-20 rounded-full bg-[var(--main-color)]/10 mb-4'>
                <Timer size={48} className='text-[var(--main-color)]' />
              </div>
              <h1 className='text-3xl font-bold text-[var(--secondary-color)]'>
                Challenge Complete!
              </h1>
              <p className='text-[var(--muted-color)]'>
                {challengeDuration < 60
                  ? `${challengeDuration} seconds`
                  : `${challengeDuration / 60} minute${
                      challengeDuration > 60 ? 's' : ''
                    }`}{' '}
                challenge finished
              </p>
            </div>

            {/* Main Stats Grid */}
            <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
              <div className='bg-[var(--card-color)] rounded-xl p-4 text-center space-y-2 border-2 border-[var(--border-color)]'>
                <Target className='mx-auto text-green-500' size={28} />
                <p className='text-3xl font-bold text-green-500'>
                  {timedCorrectAnswers}
                </p>
                <p className='text-sm text-[var(--muted-color)]'>Correct</p>
              </div>

              <div className='bg-[var(--card-color)] rounded-xl p-4 text-center space-y-2 border-2 border-[var(--border-color)]'>
                <XCircle className='mx-auto text-red-500' size={28} />
                <p className='text-3xl font-bold text-red-500'>
                  {timedWrongAnswers}
                </p>
                <p className='text-sm text-[var(--muted-color)]'>Wrong</p>
              </div>

              <div className='bg-[var(--card-color)] rounded-xl p-4 text-center space-y-2 border-2 border-[var(--border-color)]'>
                <TrendingUp
                  className='mx-auto text-[var(--main-color)]'
                  size={28}
                />
                <p className='text-3xl font-bold text-[var(--main-color)]'>
                  {accuracy}%
                </p>
                <p className='text-sm text-[var(--muted-color)]'>Accuracy</p>
              </div>

              <div className='bg-[var(--card-color)] rounded-xl p-4 text-center space-y-2 border-2 border-[var(--border-color)]'>
                <Timer className='mx-auto text-blue-500' size={28} />
                <p className='text-3xl font-bold text-blue-500'>
                  {questionsPerMinute}
                </p>
                <p className='text-sm text-[var(--muted-color)]'>Q/Min</p>
              </div>
            </div>

            {/* Secondary Stats */}
            <div className='grid grid-cols-2 gap-4'>
              <div className='bg-[var(--card-color)] rounded-lg p-4 space-y-2 border border-[var(--border-color)]'>
                <p className='text-sm text-[var(--muted-color)]'>Best Streak</p>
                <p className='text-2xl font-bold text-[var(--secondary-color)]'>
                  🔥 {timedStreak}
                </p>
              </div>

              <div className='bg-[var(--card-color)] rounded-lg p-4 space-y-2 border border-[var(--border-color)]'>
                <p className='text-sm text-[var(--muted-color)]'>
                  Total Answers
                </p>
                <p className='text-2xl font-bold text-[var(--secondary-color)]'>
                  {totalQuestions}
                </p>
              </div>
            </div>

            {/* Goal Timers Statistics */}
            {showGoalTimers && goalTimers.goals.length > 0 && (
              <div className='bg-[var(--card-color)] rounded-lg p-4 space-y-3 text-left border border-[var(--border-color)]'>
                <div className='flex items-center gap-2 justify-center'>
                  <Target className='text-[var(--main-color)]' size={20} />
                  <h3 className='text-lg font-semibold text-[var(--secondary-color)]'>
                    Goal Timers Results
                  </h3>
                </div>

                {/* Reached Goals */}
                {reachedGoals.length > 0 && (
                  <div className='space-y-2'>
                    <p className='text-sm font-medium text-green-500 flex items-center gap-2'>
                      <CheckCircle2 size={16} />
                      Reached ({reachedGoals.length})
                    </p>
                    <div className='space-y-1.5'>
                      {reachedGoals.map(goal => (
                        <div
                          key={goal.id}
                          className='flex items-center justify-between text-sm p-2 rounded bg-green-500/10 border border-green-500/20'
                        >
                          <span className='text-[var(--secondary-color)]'>
                            {goal.label}
                          </span>
                          <span className='text-green-500 font-mono'>
                            {Math.floor(goal.targetSeconds / 60)}:
                            {(goal.targetSeconds % 60)
                              .toString()
                              .padStart(2, '0')}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Missed Goals */}
                {missedGoals.length > 0 && (
                  <div className='space-y-2'>
                    <p className='text-sm font-medium text-[var(--muted-color)] flex items-center gap-2'>
                      <XCircle size={16} />
                      Not Reached ({missedGoals.length})
                    </p>
                    <div className='space-y-1.5'>
                      {missedGoals.map(goal => (
                        <div
                          key={goal.id}
                          className='flex items-center justify-between text-sm p-2 rounded bg-[var(--border-color)] opacity-60'
                        >
                          <span className='text-[var(--muted-color)]'>
                            {goal.label}
                          </span>
                          <span className='text-[var(--muted-color)] font-mono'>
                            {Math.floor(goal.targetSeconds / 60)}:
                            {(goal.targetSeconds % 60)
                              .toString()
                              .padStart(2, '0')}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            <div className='space-y-3'>
              <Button
                onClick={handleStart}
                className='w-full bg-[var(--main-color)] hover:bg-[var(--main-color)]/90'
              >
                <RotateCcw size={16} className='mr-2' />
                Try Again
              </Button>
              <Link href='/kana' className='block'>
                <Button variant='outline' className='w-full'>
                  <ArrowLeft size={16} className='mr-2' />
                  Back to Selection
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className='min-h-[100dvh] flex flex-col lg:flex-row items-start justify-center p-4 gap-6'>
      <div className='max-w-md w-full lg:max-w-lg space-y-6'>
        {/* Header with timer, stats, and cancel button */}
        <div className='flex justify-between items-center'>
          <div className='flex items-center gap-2'>
            <Timer className='text-[var(--main-color)]' size={20} />
            <span
              className={clsx(
                'text-lg font-bold',
                timeLeft <= 10
                  ? 'text-red-500 animate-pulse'
                  : 'text-[var(--secondary-color)]'
              )}
            >
              {minutes}:{seconds.toString().padStart(2, '0')}
            </span>
          </div>
          <div className='flex items-center gap-4'>
            <div className='text-right text-sm text-[var(--muted-color)]'>
              <div>Score: {timedCorrectAnswers}</div>
              <div>Streak: {timedStreak}</div>
            </div>
            <button
              onClick={handleCancel}
              className={clsx(
                'p-2 rounded-lg',
                'border-2 border-red-500/50',
                'hover:bg-red-500/10',
                'transition-colors'
              )}
              title='Cancel challenge'
            >
              <X size={20} className='text-red-500' />
            </button>
          </div>
        </div>

        {/* Progress bar */}
        <div className='w-full bg-[var(--border-color)] rounded-full h-2'>
          <div
            className='bg-[var(--main-color)] h-2 rounded-full transition-all duration-1000'
            style={{
              width: `${
                ((challengeDuration - timeLeft) / challengeDuration) * 100
              }%`
            }}
          />
        </div>

        {/* Current question */}
        <div className='text-center space-y-4'>
          <div className='flex flex-col items-center gap-4'>
            <div
              className={clsx(
                'text-8xl font-bold transition-all duration-200',
                lastAnswerCorrect === true && 'text-green-500',
                lastAnswerCorrect === false && 'text-red-500',
                lastAnswerCorrect === null && 'text-[var(--secondary-color)]'
              )}
            >
              {currentQuestion?.kana}
            </div>
            <SSRAudioButton
              text={currentQuestion?.kana || ''}
              variant='icon-only'
              size='lg'
              className='bg-[var(--card-color)] border-[var(--border-color)]'
            />
          </div>

          {/* Feedback */}
          {lastAnswerCorrect !== null && (
            <div
              className={clsx(
                'text-sm font-medium',
                lastAnswerCorrect ? 'text-green-500' : 'text-red-500'
              )}
            >
              {lastAnswerCorrect
                ? '✓ Correct!'
                : `✗ Incorrect! It was "${currentQuestion?.romaji}"`}
            </div>
          )}
        </div>

        {/* Input form */}
        <form onSubmit={handleSubmit} className='space-y-4'>
          <input
            ref={inputRef}
            type='text'
            value={userAnswer}
            onChange={e => setUserAnswer(e.target.value)}
            onKeyPress={handleKeyPress}
            className='w-full p-4 text-lg text-center border-2 border-[var(--border-color)] rounded-lg bg-[var(--card-color)] text-[var(--secondary-color)] focus:border-[var(--main-color)] focus:outline-none'
            placeholder='Type the romaji...'
            autoComplete='off'
            autoFocus
          />
          <Button
            type='submit'
            className='w-full bg-[var(--main-color)] hover:bg-[var(--main-color)]/90'
            disabled={!userAnswer.trim()}
          >
            Submit
          </Button>
        </form>

        {/* Real-time stats */}
        <div className='grid grid-cols-3 gap-2 text-center text-sm'>
          <div className='bg-[var(--card-color)] rounded p-2'>
            <div className='text-green-500 font-bold'>
              {timedCorrectAnswers}
            </div>
            <div className='text-[var(--muted-color)]'>Correct</div>
          </div>
          <div className='bg-[var(--card-color)] rounded p-2'>
            <div className='text-red-500 font-bold'>{timedWrongAnswers}</div>
            <div className='text-[var(--muted-color)]'>Wrong</div>
          </div>
          <div className='bg-[var(--card-color)] rounded p-2'>
            <div className='text-[var(--main-color)] font-bold'>
              {accuracy}%
            </div>
            <div className='text-[var(--muted-color)]'>Accuracy</div>
          </div>
        </div>
      </div>

      {/* Goal Timers Sidebar - During Game */}
      {showGoalTimers && goalTimers.goals.length > 0 && (
        <div className='w-full lg:w-80 space-y-4'>
          <GoalTimersPanel
            goals={goalTimers.goals}
            currentSeconds={elapsedTime}
            onAddGoal={goalTimers.addGoal}
            onRemoveGoal={goalTimers.removeGoal}
            onClearGoals={goalTimers.clearGoals}
            disabled={true} // Disabled during game
          />

          {/* Next Goal Indicator */}
          {goalTimers.nextGoal && (
            <div
              className={clsx(
                'p-4 border-2 rounded-xl',
                'border-[var(--main-color)] bg-[var(--main-color)]/5'
              )}
            >
              <div className='flex items-center gap-2 mb-2'>
                <Target size={16} className='text-[var(--main-color)]' />
                <p className='text-sm text-[var(--secondary-color)] font-medium'>
                  Next Goal
                </p>
              </div>
              <p className='font-bold text-[var(--main-color)] mb-2'>
                {goalTimers.nextGoal.label}
              </p>
              <div className='w-full bg-[var(--border-color)] rounded-full h-2'>
                <div
                  className='bg-[var(--main-color)] h-2 rounded-full transition-all'
                  style={{ width: `${goalTimers.progressToNextGoal}%` }}
                />
              </div>
              <p className='text-xs text-[var(--secondary-color)] mt-1 text-center'>
                {Math.floor(goalTimers.nextGoal.targetSeconds / 60)}:
                {(goalTimers.nextGoal.targetSeconds % 60)
                  .toString()
                  .padStart(2, '0')}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
