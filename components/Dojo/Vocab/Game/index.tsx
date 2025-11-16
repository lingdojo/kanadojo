'use client';
import { useEffect } from 'react';
import Return from '@/components/reusable/Game/ReturnFromGame';
import Pick from './Pick';
import Input from './Input';

import useVocabStore from '@/store/useVocabStore';
import useStatsStore from '@/store/useStatsStore';
import Stats from '@/components/reusable/Game/Stats';

const Game = () => {
  const showStats = useStatsStore(state => state.showStats);

  const resetStats = useStatsStore(state => state.resetStats);

  const gameMode = useVocabStore(state => state.selectedGameModeVocab);
  const selectedWordObjs = useVocabStore(state => state.selectedWordObjs);

  useEffect(() => {
    resetStats();
  }, []);

  return (
    <div className='flex flex-col gap-6 md:gap-10 items-center min-h-[100dvh] max-w-[100dvw] px-4'>
      {showStats && <Stats />}
      <Return isHidden={showStats} href='/' />
      {gameMode.toLowerCase() === 'pick' ? (
        <Pick selectedWordObjs={selectedWordObjs} isHidden={showStats} />
      ) : gameMode.toLowerCase() === 'reverse-pick' ? (
        <Pick
          selectedWordObjs={selectedWordObjs}
          isHidden={showStats}
          isReverse={true}
        />
      ) : gameMode.toLowerCase() === 'input' ? (
        <Input selectedWordObjs={selectedWordObjs} isHidden={showStats} />
      ) : gameMode.toLowerCase() === 'reverse-input' ? (
        <Input
          selectedWordObjs={selectedWordObjs}
          isHidden={showStats}
          isReverse={true}
        />
      ) : null}
    </div>
  );
};

export default Game;
