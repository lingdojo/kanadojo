'use client';
import { IKanjiObj } from '@/store/useKanjiStore';
import BaseInputGame from '@/components/Dojo/Base/BaseInputGame';
import { kanjiGameConfig } from '@/components/Dojo/Base/kanjiConfig';

interface KanjiInputGameProps {
  selectedKanjiObjs: IKanjiObj[];
  isHidden: boolean;
  isReverse?: boolean;
}

const KanjiInputGame = ({
  selectedKanjiObjs,
  isHidden,
  isReverse = false
}: KanjiInputGameProps) => {
  return (
    <BaseInputGame
      items={selectedKanjiObjs}
      config={kanjiGameConfig}
      isHidden={isHidden}
      isReverse={isReverse}
    />
  );
};

export default KanjiInputGame;
