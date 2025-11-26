'use client';
import clsx from 'clsx';
import { useEffect } from 'react';
import Return from '@/shared/components/Game/ReturnFromGame';
import Pick from './Pick';
import Input from './Input';
import useKanaStore from '@/features/Kana/store/useKanaStore';
import useStatsStore from '@/features/Progress';
import Stats from '@/shared/components/Game/Stats';

const Game = () => {
  const showStats = useStatsStore(state => state.showStats);
  const resetStats = useStatsStore(state => state.resetStats);
  const gameMode = useKanaStore(state => state.selectedGameModeKana);

  useEffect(() => {
    resetStats();
  }, []);

  return (
    <div
      className={clsx(
        'flex flex-col gap-6 md:gap-10 items-center min-h-[100dvh] max-w-[100dvw] px-4'
        // "bg-[url('/wallpapers/neonretrocarcity.jpg')] bg-cover bg-center"
        // "bg-[url('/wallpapers/kanaDojoWallpaper.png')] bg-cover bg-center backdrop-blur-lg"
      )}
    >
      {showStats && <Stats />}
      <Return isHidden={showStats} href='/kana' gameMode={gameMode} />
      {gameMode.toLowerCase() === 'pick' ? (
        <Pick isHidden={showStats} />
      ) : gameMode.toLowerCase() === 'reverse-pick' ? (
        <Pick isHidden={showStats} isReverse={true} />
      ) : gameMode.toLowerCase() === 'input' ? (
        <Input isHidden={showStats} />
      ) : gameMode.toLowerCase() === 'reverse-input' ? (
        <Input isHidden={showStats} isReverse={true} />
      ) : null}
    </div>
  );
};

export default Game;
