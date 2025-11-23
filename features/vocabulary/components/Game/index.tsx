'use client';
import { useEffect } from 'react';
import Return from '@/shared/components/Game/ReturnFromGame';
import Pick from './Pick';
import Input from './Input';

import useVocabStore from '@/features/vocabulary/store/useVocabStore';
import useStatsStore from '@/features/Progress';
import Stats from '@/shared/components/Game/Stats';
import { usePathname } from 'next/navigation';
import { removeLocaleFromPath } from '@/shared/lib/pathUtils';

const Game = () => {
  const fullPathname = usePathname();
  // Remove locale and get back to vocabulary root
  const pathWithoutLocale = removeLocaleFromPath(fullPathname);
  const pathname = pathWithoutLocale.split('/').slice(0, -2).join('/');

  const showStats = useStatsStore(state => state.showStats);

  const resetStats = useStatsStore(state => state.resetStats);

  const gameMode = useVocabStore(state => state.selectedGameModeVocab);
  const selectedVocabObjs = useVocabStore(state => state.selectedVocabObjs);

  useEffect(() => {
    resetStats();
  }, []);

  return (
    <div className='flex flex-col gap-6 md:gap-10 items-center min-h-[100dvh] max-w-[100dvw] px-4'>
      {showStats && <Stats />}
      <Return isHidden={showStats} href={pathname} />
      {gameMode.toLowerCase() === 'pick' ? (
        <Pick selectedWordObjs={selectedVocabObjs} isHidden={showStats} />
      ) : gameMode.toLowerCase() === 'reverse-pick' ? (
        <Pick
          selectedWordObjs={selectedVocabObjs}
          isHidden={showStats}
          isReverse={true}
        />
      ) : gameMode.toLowerCase() === 'input' ? (
        <Input selectedWordObjs={selectedVocabObjs} isHidden={showStats} />
      ) : gameMode.toLowerCase() === 'reverse-input' ? (
        <Input
          selectedWordObjs={selectedVocabObjs}
          isHidden={showStats}
          isReverse={true}
        />
      ) : null}
    </div>
  );
};

export default Game;
