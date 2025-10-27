'use client';

import React, { useEffect, useState, useRef } from 'react';
// import useKanaKanjiStore from '@/store/useKanaKanjiStore';
import useKanaStore from '@/store/useKanaStore';
import useStatsStore from '@/store/useStatsStore';
import { useChallengeTimer } from '@/hooks/useTimer';
import { Button } from '@/components/ui/button';
import { generateKanaQuestion } from '@/lib/generateKanaQuestions';
import { Timer, Target, TrendingUp, RotateCcw, Play, ArrowLeft } from 'lucide-react';
import { Link } from '@/i18n/routing';
import clsx from 'clsx';
import { useClick } from '@/lib/hooks/useAudio';
import confetti from 'canvas-confetti';
import SSRAudioButton from '@/components/reusable/SSRAudioButton';

import type { KanaCharacter } from '@/lib/generateKanaQuestions';
import { flattenKanaGroups } from '@/lib/flattenKanaGroup';

const CHALLENGE_DURATION = 60; // seconds

export default function TimedChallengeKana() {
  const { playClick } = useClick();
  const kanaGroupIndices = useKanaStore((state) => state.kanaGroupIndices);
  const selectedKana = flattenKanaGroups(kanaGroupIndices) as unknown as KanaCharacter[];

  const {
    timedCorrectAnswers,
    timedWrongAnswers,
    timedStreak,
    incrementTimedCorrectAnswers,
    incrementTimedWrongAnswers,
    resetTimedStats,
  } = useStatsStore();

  const {
    seconds,
    minutes,
    isRunning,
    startTimer,
    resetTimer,
    timeLeft,
  } = useChallengeTimer(CHALLENGE_DURATION);

  const [currentQuestion, setCurrentQuestion] = useState<KanaCharacter | null>(null);
  const [userAnswer, setUserAnswer] = useState('');
  const [isFinished, setIsFinished] = useState(false);
  const [lastAnswerCorrect, setLastAnswerCorrect] = useState<boolean | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (selectedKana.length > 0) {
      setCurrentQuestion(generateKanaQuestion(selectedKana));
    }
  }, [selectedKana]);

  useEffect(() => {
    if (timeLeft === 0 && isRunning) {
      setIsFinished(true);
      // Celebration confetti for completing the challenge
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  }, [timeLeft, isRunning]);

  // Auto-focus input when game is running
  useEffect(() => {
    if (isRunning && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isRunning, currentQuestion]);

  const handleStart = () => {
    playClick();
    resetTimedStats();
    resetTimer();
    startTimer();
    setIsFinished(false);
    setUserAnswer('');
    setLastAnswerCorrect(null);
    setCurrentQuestion(generateKanaQuestion(selectedKana));
  };

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!currentQuestion || !userAnswer.trim()) return;

    playClick();
    const isCorrect = userAnswer.trim().toLowerCase() === currentQuestion.romaji.toLowerCase();
    
    if (isCorrect) {
      incrementTimedCorrectAnswers();
      setLastAnswerCorrect(true);
    } else {
      incrementTimedWrongAnswers();
      setLastAnswerCorrect(false);
    }

    setUserAnswer('');
    setCurrentQuestion(generateKanaQuestion(selectedKana));
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  const totalAnswers = timedCorrectAnswers + timedWrongAnswers;
  const accuracy = totalAnswers > 0 ? Math.round((timedCorrectAnswers / totalAnswers) * 100) : 0;

  if (selectedKana.length === 0) {
    return (
      <div className="min-h-[100dvh] flex flex-col items-center justify-center p-4">
        <div className="max-w-md text-center space-y-6">
          <Timer size={64} className="mx-auto text-[var(--main-color)]" />
          <h1 className="text-2xl font-bold text-[var(--secondary-color)]">Timed Challenge</h1>
          <p className="text-[var(--muted-color)]">
            Please select some kana characters first to begin the timed challenge.
          </p>
          <Link href="/kana">
            <Button className="bg-[var(--main-color)] hover:bg-[var(--main-color)]/90">
              <ArrowLeft size={16} className="mr-2" />
              Select Kana
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  if (!isRunning && !isFinished) {
    return (
      <div className="min-h-[100dvh] flex flex-col items-center justify-center p-4">
        <div className="max-w-md text-center space-y-6">
          <Timer size={64} className="mx-auto text-[var(--main-color)]" />
          <h1 className="text-2xl font-bold text-[var(--secondary-color)]">Timed Challenge</h1>
          <p className="text-[var(--muted-color)]">
            Test your kana recognition speed! You have 60 seconds to answer as many questions as possible.
          </p>
          <div className="bg-[var(--card-color)] rounded-lg p-4 space-y-2">
            <p className="text-sm text-[var(--muted-color)]">Selected Characters:</p>
            <p className="font-medium text-[var(--secondary-color)]">{selectedKana.length} kana</p>
          </div>
          <Button onClick={handleStart} className="bg-[var(--main-color)] hover:bg-[var(--main-color)]/90">
            <Play size={16} className="mr-2" />
            Start Challenge
          </Button>
          <Link href="/kana" className="block">
            <Button variant="outline">
              <ArrowLeft size={16} className="mr-2" />
              Back to Selection
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  if (isFinished) {
    return (
      <div className="min-h-[100dvh] flex flex-col items-center justify-center p-4">
        <div className="max-w-md text-center space-y-6">
          <div className="space-y-2">
            <Timer size={64} className="mx-auto text-[var(--main-color)]" />
            <h1 className="text-2xl font-bold text-[var(--secondary-color)]">Challenge Complete!</h1>
            <p className="text-[var(--muted-color)]">Great job! Here are your results:</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[var(--card-color)] rounded-lg p-4 space-y-1">
              <Target className="mx-auto text-green-500" size={24} />
              <p className="text-2xl font-bold text-green-500">{timedCorrectAnswers}</p>
              <p className="text-xs text-[var(--muted-color)]">Correct</p>
            </div>
            <div className="bg-[var(--card-color)] rounded-lg p-4 space-y-1">
              <TrendingUp className="mx-auto text-[var(--main-color)]" size={24} />
              <p className="text-2xl font-bold text-[var(--main-color)]">{accuracy}%</p>
              <p className="text-xs text-[var(--muted-color)]">Accuracy</p>
            </div>
          </div>

          <div className="bg-[var(--card-color)] rounded-lg p-4 space-y-2">
            <p className="text-sm text-[var(--muted-color)]">Best Streak</p>
            <p className="text-xl font-bold text-[var(--secondary-color)]">{timedStreak}</p>
          </div>

          <div className="space-y-3">
            <Button onClick={handleStart} className="w-full bg-[var(--main-color)] hover:bg-[var(--main-color)]/90">
              <RotateCcw size={16} className="mr-2" />
              Try Again
            </Button>
            <Link href="/kana" className="block">
              <Button variant="outline" className="w-full">
                <ArrowLeft size={16} className="mr-2" />
                Back to Selection
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[100dvh] flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full space-y-6">
        {/* Header with timer and stats */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Timer className="text-[var(--main-color)]" size={20} />
            <span className={clsx(
              "text-lg font-bold",
              timeLeft <= 10 ? "text-red-500 animate-pulse" : "text-[var(--secondary-color)]"
            )}>
              {minutes}:{seconds.toString().padStart(2, '0')}
            </span>
          </div>
          <div className="text-right text-sm text-[var(--muted-color)]">
            <div>Score: {timedCorrectAnswers}</div>
            <div>Streak: {timedStreak}</div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-full bg-[var(--border-color)] rounded-full h-2">
          <div 
            className="bg-[var(--main-color)] h-2 rounded-full transition-all duration-1000"
            style={{ width: `${((CHALLENGE_DURATION - timeLeft) / CHALLENGE_DURATION) * 100}%` }}
          />
        </div>

        {/* Current question */}
        <div className="text-center space-y-4">
          <div className="flex flex-col items-center gap-4">
            <div className={clsx(
              "text-8xl font-bold transition-all duration-200",
              lastAnswerCorrect === true && "text-green-500",
              lastAnswerCorrect === false && "text-red-500",
              lastAnswerCorrect === null && "text-[var(--secondary-color)]"
            )}>
              {currentQuestion?.kana}
            </div>
            <SSRAudioButton 
              text={currentQuestion?.kana || ''} 
              variant="icon-only" 
              size="lg"
              className="bg-[var(--card-color)] border-[var(--border-color)]"
            />
          </div>
          
          {/* Feedback */}
          {lastAnswerCorrect !== null && (
            <div className={clsx(
              "text-sm font-medium",
              lastAnswerCorrect ? "text-green-500" : "text-red-500"
            )}>
              {lastAnswerCorrect ? "Correct!" : `Incorrect! It was "${currentQuestion?.romaji}"`}
            </div>
          )}
        </div>

        {/* Input form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            ref={inputRef}
            type="text"
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            onKeyPress={handleKeyPress}
            className="w-full p-4 text-lg text-center border-2 border-[var(--border-color)] rounded-lg bg-[var(--card-color)] text-[var(--secondary-color)] focus:border-[var(--main-color)] focus:outline-none"
            placeholder="Type the romaji..."
            autoComplete="off"
            autoFocus
          />
          <Button 
            type="submit" 
            className="w-full bg-[var(--main-color)] hover:bg-[var(--main-color)]/90"
            disabled={!userAnswer.trim()}
          >
            Submit
          </Button>
        </form>

        {/* Real-time stats */}
        <div className="grid grid-cols-3 gap-2 text-center text-sm">
          <div className="bg-[var(--card-color)] rounded p-2">
            <div className="text-green-500 font-bold">{timedCorrectAnswers}</div>
            <div className="text-[var(--muted-color)]">Correct</div>
          </div>
          <div className="bg-[var(--card-color)] rounded p-2">
            <div className="text-red-500 font-bold">{timedWrongAnswers}</div>
            <div className="text-[var(--muted-color)]">Wrong</div>
          </div>
          <div className="bg-[var(--card-color)] rounded p-2">
            <div className="text-[var(--main-color)] font-bold">{accuracy}%</div>
            <div className="text-[var(--muted-color)]">Accuracy</div>
          </div>
        </div>
      </div>
    </div>
  );
}
