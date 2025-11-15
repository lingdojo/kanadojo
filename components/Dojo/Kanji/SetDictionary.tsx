'use client';
import N5Kanji from '@/static/kanji/N5';
import N4Kanji from '@/static/kanji/N4';
import N3Kanji from '@/static/kanji/N3';
import N2Kanji from '@/static/kanji/N2';
import N1Kanji from '@/static/kanji/N1';
import useKanjiStore from '@/store/useKanjiStore';
import usePreferencesStore from '@/store/usePreferencesStore';
import KanjiCard from '@/components/Dojo/Kanji/KanjiCard';

const createKanjiSetRanges = (numSets: number) =>
  Array.from({ length: numSets }, (_, i) => i + 1).reduce(
    (acc, curr) => ({
      ...acc,
      [`Set ${curr}`]: [(curr - 1) * 10, curr * 10],
    }),
    {}
  );

const kanjiSetSliceRanges = createKanjiSetRanges(200);

const kanjiCollections = {
  n5: N5Kanji,
  n4: N4Kanji,
  n3: N3Kanji,
  n2: N2Kanji,
  n1: N1Kanji,
};

const KanjiSetDictionary = ({ set }: { set: string }) => {
  const selectedKanjiCollection = useKanjiStore(
    state => state.selectedKanjiCollection
  );
  const displayKanjiCollection =
    kanjiCollections[selectedKanjiCollection as keyof typeof kanjiCollections];

  const sliceRange =
    kanjiSetSliceRanges[set as keyof typeof kanjiSetSliceRanges];

  const showKana = usePreferencesStore(state => state.displayKana);

  const kanjiInSet = displayKanjiCollection.slice(sliceRange[0], sliceRange[1]);

  return (
    <div className="grid gap-4 py-4" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))' }}>
      {kanjiInSet.map((kanjiObj) => {
        // Get the primary reading (prefer on'yomi, fallback to kun'yomi)
        const primaryReading =
          (kanjiObj.onyomi[0] && kanjiObj.onyomi[0] !== '')
            ? showKana
              ? kanjiObj.onyomi[0].split(' ')[1]
              : kanjiObj.onyomi[0].split(' ')[0]
            : (kanjiObj.kunyomi[0] && kanjiObj.kunyomi[0] !== '')
              ? showKana
                ? kanjiObj.kunyomi[0].split(' ')[1]
                : kanjiObj.kunyomi[0].split(' ')[0]
              : '';

        // Get the primary meaning (first 2-3 meanings)
        const primaryMeaning = kanjiObj.fullDisplayMeanings.slice(0, 2).join(', ');

        return (
          <KanjiCard
            key={kanjiObj.id}
            kanji={kanjiObj.kanjiChar}
            reading={primaryReading}
            meaning={primaryMeaning}
            onClick={() => {
              // Open kanji heatmap in new tab
              window.open(`http://kanjiheatmap.com/?open=${kanjiObj.kanjiChar}`, '_blank');
            }}
          />
        );
      })}
    </div>
  );
};

export default KanjiSetDictionary;
