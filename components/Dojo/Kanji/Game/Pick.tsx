'use client';
import { IKanjiObj } from '@/store/useKanjiStore';
import BasePickGame from '@/components/Dojo/Base/BasePickGame';
import { kanjiGameConfig } from '@/components/Dojo/Base/kanjiConfig';

interface KanjiPickGameProps {
  selectedKanjiObjs: IKanjiObj[];
  isHidden: boolean;
  isReverse?: boolean;
}

const KanjiPickGame = ({
  selectedKanjiObjs,
  isHidden,
  isReverse = false,
}: KanjiPickGameProps) => {
  return (
    <BasePickGame
      items={selectedKanjiObjs}
      config={kanjiGameConfig}
      isHidden={isHidden}
      isReverse={isReverse}
    />
  );
};

export default KanjiPickGame;
