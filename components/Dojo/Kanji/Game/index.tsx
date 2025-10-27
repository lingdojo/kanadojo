'use client';
import { useEffect } from 'react';
import Return from '@/components/reusable/Game/ReturnFromGame';
import Pick from './Pick';
import Input from './Input';
import useKanjiStore from '@/store/useKanjiStore';
import useStatsStore from '@/store/useStatsStore';
import Stats from '@/components/reusable/Game/Stats';
import { usePathname } from 'next/navigation';
import { removeLocaleFromPath } from '@/lib/pathUtils';

const Game = () => {
  const fullPathname = usePathname();
  // Remove locale and get back to kanji root
  const pathWithoutLocale = removeLocaleFromPath(fullPathname);
  const pathname = pathWithoutLocale.split('/').slice(0, -2).join('/');

  const showStats = useStatsStore(state => state.showStats);

  const resetStats = useStatsStore(state => state.resetStats);

  const gameMode = useKanjiStore(state => state.selectedGameModeKanji);
  const selectedKanjiObjs = useKanjiStore(state => state.selectedKanjiObjs);

  useEffect(() => {
    resetStats();
  }, []);

  return (
    <div className='flex flex-col gap-4 md:gap-6 items-center min-h-[100dvh] max-w-[100dvw] px-4 '>
      {showStats && <Stats />}
      <Return isHidden={showStats} href={pathname} />
      {gameMode.toLowerCase() === 'pick' ? (
        <Pick selectedKanjiObjs={selectedKanjiObjs} isHidden={showStats} />
      ) : gameMode.toLowerCase() === 'reverse-pick' ? (
        <Pick
          selectedKanjiObjs={selectedKanjiObjs}
          isHidden={showStats}
          isReverse={true}
        />
      ) : gameMode.toLowerCase() === 'input' ? (
        <Input selectedKanjiObjs={selectedKanjiObjs} isHidden={showStats} />
      ) : gameMode.toLowerCase() === 'reverse-input' ? (
        <Input
          selectedKanjiObjs={selectedKanjiObjs}
          isHidden={showStats}
          isReverse={true}
        />
      ) : null}
    </div>
  );
};

export default Game;
