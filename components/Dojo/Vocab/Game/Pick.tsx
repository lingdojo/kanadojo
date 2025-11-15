'use client';
import { IWordObj } from '@/store/useVocabStore';
import BasePickGame from '@/components/Dojo/Base/BasePickGame';
import { vocabGameConfig } from '@/components/Dojo/Base/vocabConfig';

interface VocabPickGameProps {
  selectedWordObjs: IWordObj[];
  isHidden: boolean;
  isReverse?: boolean;
}

const VocabPickGame = ({
  selectedWordObjs,
  isHidden,
  isReverse = false,
}: VocabPickGameProps) => {
  return (
    <BasePickGame
      items={selectedWordObjs}
      config={vocabGameConfig}
      isHidden={isHidden}
      isReverse={isReverse}
    />
  );
};

export default VocabPickGame;
