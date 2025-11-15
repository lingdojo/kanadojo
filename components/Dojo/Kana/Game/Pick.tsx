'use client';
import { useMemo } from 'react';
import { kana } from '@/static/kana';
import useKanaStore from '@/store/useKanaStore';
import BasePickGame from '@/components/Dojo/Base/BasePickGame';
import { kanaGameConfig, KanaPair } from '@/components/Dojo/Base/kanaConfig';

interface PickGameProps {
  isHidden: boolean;
  isReverse?: boolean;
}

const PickGame = ({ isHidden, isReverse = false }: PickGameProps) => {
  const kanaGroupIndices = useKanaStore(state => state.kanaGroupIndices);

  const kanaPairs = useMemo(() => {
    const selectedKana = kanaGroupIndices.map(i => kana[i].kana).flat();
    const selectedRomaji = kanaGroupIndices.map(i => kana[i].romanji).flat();

    const pairs: KanaPair[] = selectedKana.map((kanaChar, i) => ({
      kana: kanaChar,
      romaji: selectedRomaji[i],
    }));

    return pairs;
  }, [kanaGroupIndices]);

  return (
    <BasePickGame
      items={kanaPairs}
      config={kanaGameConfig}
      isHidden={isHidden}
      isReverse={isReverse}
    />
  );
};

export default PickGame;
