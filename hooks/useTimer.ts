import { useTimer } from 'react-timer-hook';

export function useChallengeTimer(durationSeconds: number) {
  const expiryTimestamp = new Date();
  expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + durationSeconds);

  const {
    seconds,
    minutes,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({ expiryTimestamp, autoStart: false });

  const resetTimer = () => {
    const newExpiry = new Date();
    newExpiry.setSeconds(newExpiry.getSeconds() + durationSeconds);
    restart(newExpiry, false);
  };

  return {
    seconds,
    minutes,
    isRunning,
    startTimer: start,
    pauseTimer: pause,
    resumeTimer: resume,
    resetTimer,
    timeLeft: minutes * 60 + seconds,
  };
}
