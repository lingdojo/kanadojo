'use client';
import { useMemo } from 'react';
import { kana } from '@/static/kana';
import useKanaStore from '@/store/useKanaStore';
import BaseInputGame from '@/components/Dojo/Base/BaseInputGame';
import { kanaGameConfig, KanaPair } from '@/components/Dojo/Base/kanaConfig';

interface InputGameProps {
  isHidden: boolean;
  isReverse?: boolean;
}

const InputGame = ({ isHidden, isReverse = false }: InputGameProps) => {
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
    <BaseInputGame
      items={kanaPairs}
      config={kanaGameConfig}
      isHidden={isHidden}
      isReverse={isReverse}
    />
  );
};

export default InputGame;
