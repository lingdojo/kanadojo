'use client';
import { IWordObj } from '@/store/useVocabStore';
import BaseInputGame from '@/components/Dojo/Base/BaseInputGame';
import { vocabGameConfig } from '@/components/Dojo/Base/vocabConfig';

interface VocabInputGameProps {
  selectedWordObjs: IWordObj[];
  isHidden: boolean;
  isReverse?: boolean;
}

const VocabInputGame = ({
  selectedWordObjs,
  isHidden,
  isReverse = false
}: VocabInputGameProps) => {
  return (
    <BaseInputGame
      items={selectedWordObjs}
      config={vocabGameConfig}
      isHidden={isHidden}
      isReverse={isReverse}
    />
  );
};

export default VocabInputGame;
