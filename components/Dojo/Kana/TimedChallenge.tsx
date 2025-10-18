'use client';

import React, { useEffect, useState } from 'react';
import useKanaStore from '@/store/useKanaStore';
import useStatsStore from '@/store/useStatsStore';
import { useChallengeTimer } from '@/hooks/useTimer';
import { Button } from '@/components/ui/button';
import { generateKanaQuestion } from '@/lib/generateKanaQuestions';
import type { KanaCharacter } from '@/lib/generateKanaQuestions';
import { flattenKanaGroups } from '@/lib/flattenKanaGroup';

const CHALLENGE_DURATION = 60; // seconds

export default function TimedChallengeKana() {
  const kanaGroupIndices = useKanaStore((state) => state.kanaGroupIndices);
  const selectedKana = flattenKanaGroups(kanaGroupIndices) as unknown as KanaCharacter[];

  const incrementTimedCorrectAnswers = useStatsStore((s) => s.incrementTimedCorrectAnswers);
  const incrementTimedWrongAnswers = useStatsStore((s) => s.incrementTimedWrongAnswers);
  const resetTimedStats = useStatsStore((s) => s.resetTimedStats);

  const {
    seconds,
    isRunning,
    startTimer,
    resetTimer,
    timeLeft,
  } = useChallengeTimer(CHALLENGE_DURATION);

  const [currentQuestion, setCurrentQuestion] = useState<KanaCharacter | null>(null);
  const [userAnswer, setUserAnswer] = useState('');
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    if (selectedKana.length > 0) {
      setCurrentQuestion(generateKanaQuestion(selectedKana));
    }
  }, [selectedKana]);

  useEffect(() => {
    if (timeLeft === 0 && isRunning) {
      setIsFinished(true);
    }
  }, [timeLeft, isRunning]);

  const handleStart = () => {
    resetTimedStats();
    resetTimer();
    startTimer();
    setIsFinished(false);
    setUserAnswer('');
    setCurrentQuestion(generateKanaQuestion(selectedKana));
  };

  const handleSubmit = () => {
    if (!currentQuestion) return;

    const isCorrect = userAnswer.trim().toLowerCase() === currentQuestion.romaji.toLowerCase();
    if (isCorrect) {
      incrementTimedCorrectAnswers();
    } else {
      incrementTimedWrongAnswers();
    }

    setUserAnswer('');
    setCurrentQuestion(generateKanaQuestion(selectedKana));
  };

  if (selectedKana.length === 0) {
    return <p className="text-center text-muted">Please select kana characters to begin.</p>;
  }

  if (!isRunning && !isFinished) {
    return (
      <div className="text-center">
        <Button onClick={handleStart}>Start Timed Challenge</Button>
      </div>
    );
  }

  if (isFinished) {
    return (
      <div className="text-center space-y-4">
        <h2 className="text-xl font-bold">Challenge Complete!</h2>
        <p>Check your stats and try again!</p>
        <Button onClick={handleStart}>Retry</Button>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <span>Time Left: {seconds}s</span>
      </div>
      <div className="text-center text-4xl font-bold">{currentQuestion?.kana}</div>
      <input
        type="text"
        value={userAnswer}
        onChange={(e) => setUserAnswer(e.target.value)}
        className="w-full p-2 border rounded"
        placeholder="Type the romaji"
      />
      <Button onClick={handleSubmit}>Submit</Button>
    </div>
  );
}
