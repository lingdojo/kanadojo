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
    const pairs: KanaPair[] = [];

    kanaGroupIndices.forEach(characterIndex => {
      // Find which kana group and position this character index belongs to
      let currentIndex = 0;
      for (let groupIdx = 0; groupIdx < kana.length; groupIdx++) {
        const group = kana[groupIdx];
        const groupSize = group.kana.length;

        if (characterIndex < currentIndex + groupSize) {
          // This character belongs to this group
          const positionInGroup = characterIndex - currentIndex;
          pairs.push({
            kana: group.kana[positionInGroup],
            romaji: group.romanji[positionInGroup],
          });
          break;
        }
        currentIndex += groupSize;
      }
    });

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
