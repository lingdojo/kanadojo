const N3Nouns = [
  {
    word: '明かり',
    reading: 'akari あかり',
    displayMeanings: ['light', 'illumination', 'glow', 'gleam'],
    meanings: ['light', 'illumination', 'glow', 'gleam']
  },
  {
    word: '悪魔',
    reading: 'akuma あくま',
    displayMeanings: ['devil', 'demon', 'fiend', 'Satan'],
    meanings: ['devil', 'demon', 'fiend', 'Satan']
  },
  {
    word: '暗記',
    reading: 'anki あんき',
    displayMeanings: ['memorization', 'learning by heart'],
    meanings: ['memorization', 'learning by heart']
  },
  {
    word: '新た',
    reading: 'arata あらた',
    displayMeanings: ['new', 'fresh', 'novel'],
    meanings: ['new', 'fresh', 'novel']
  },
  {
    word: '集まり',
    reading: 'atsumari あつまり',
    displayMeanings: [
      'gathering',
      'meeting',
      'assembly',
      'collection',
      'attendance'
    ],
    meanings: ['gathering', 'meeting', 'assembly', 'collection', 'attendance']
  },
  {
    word: '部分',
    reading: 'bubun ぶぶん',
    displayMeanings: ['portion', 'section', 'part'],
    meanings: ['portion', 'section', 'part']
  },
  {
    word: '分',
    reading: 'bun ぶん',
    displayMeanings: ['part', 'segment', 'share', 'ration'],
    meanings: ['part', 'segment', 'share', 'ration']
  },
  {
    word: '文明',
    reading: 'bunmei ぶんめい',
    displayMeanings: ['civilization', 'culture'],
    meanings: ['civilization', 'culture']
  },
  {
    word: '分析',
    reading: 'bunseki ぶんせき',
    displayMeanings: ['analysis'],
    meanings: ['analysis']
  },
  {
    word: '分野',
    reading: 'bunya ぶんや',
    displayMeanings: ['field', 'sphere', 'realm', 'division', 'branch'],
    meanings: ['field', 'sphere', 'realm', 'division', 'branch']
  },
  {
    word: '父親',
    reading: 'chichioya ちちおや',
    displayMeanings: ['father'],
    meanings: ['father']
  },
  {
    word: '地平線',
    reading: 'chiheisen ちへいせん',
    displayMeanings: ['horizon (related to land)'],
    meanings: ['horizon (related to land)']
  },
  {
    word: '地位',
    reading: 'chii ちい',
    displayMeanings: ['(social) position', 'status'],
    meanings: ['(social) position', 'status']
  },
  {
    word: '長期',
    reading: 'chouki ちょうき',
    displayMeanings: ['long-term'],
    meanings: ['long-term']
  },
  {
    word: '中',
    reading: 'chuu ちゅう',
    displayMeanings: ['during', 'while', 'medium', 'middle'],
    meanings: ['during', 'while', 'medium', 'middle']
  },
  {
    word: '中学',
    reading: 'chuugaku ちゅうがく',
    displayMeanings: ['junior high school', 'middle school'],
    meanings: ['junior high school', 'middle school']
  },
  {
    word: '昼食',
    reading: 'chuushoku ちゅうしょく',
    displayMeanings: ['lunch', 'midday meal'],
    meanings: ['lunch', 'midday meal']
  },
  {
    word: '大部分',
    reading: 'daibubun だいぶぶん',
    displayMeanings: ['most part', 'greater part', 'majority'],
    meanings: ['most part', 'greater part', 'majority']
  },
  {
    word: '駄目',
    reading: 'dame だめ',
    displayMeanings: ['no good', 'cannot'],
    meanings: ['no good', 'cannot']
  },
  {
    word: '男子',
    reading: 'danshi だんし',
    displayMeanings: ['youth', 'young man'],
    meanings: ['youth', 'young man']
  },
  {
    word: '出会い',
    reading: 'deai であい',
    displayMeanings: ['meeting', 'rendezvous', 'encounter'],
    meanings: ['meeting', 'rendezvous', 'encounter']
  },
  {
    word: '読書',
    reading: 'dokusho どくしょ',
    displayMeanings: ['reading'],
    meanings: ['reading']
  },
  {
    word: '努力',
    reading: 'doryoku どりょく',
    displayMeanings: [
      'effort',
      'exertion',
      'endeavor',
      'hard work',
      'striving'
    ],
    meanings: ['effort', 'exertion', 'endeavor', 'hard work', 'striving']
  },
  {
    word: '円',
    reading: 'en えん',
    displayMeanings: ['yen', 'Japanese monetary unit', 'circle'],
    meanings: ['yen', 'Japanese monetary unit', 'circle']
  },
  {
    word: '不利',
    reading: 'furi ふり',
    displayMeanings: ['disadvantage', 'handicap', 'unfavorable position'],
    meanings: ['disadvantage', 'handicap', 'unfavorable position']
  },
  {
    word: '不足',
    reading: 'fusoku ふそく',
    displayMeanings: [
      'insufficiency',
      'shortage',
      'deficiency',
      'lack',
      'dearth'
    ],
    meanings: ['insufficiency', 'shortage', 'deficiency', 'lack', 'dearth']
  },
  {
    word: '外交',
    reading: 'gaikou がいこう',
    displayMeanings: ['diplomacy'],
    meanings: ['diplomacy']
  },
  {
    word: '外出',
    reading: 'gaishutsu がいしゅつ',
    displayMeanings: [
      'going out',
      'outing',
      "leaving (one's home, office, etc.)"
    ],
    meanings: ['going out', 'outing', "leaving (one's home, office, etc.)"]
  },
  {
    word: '学期',
    reading: 'gakki がっき',
    displayMeanings: ['school term', 'semester'],
    meanings: ['school term', 'semester']
  },
  {
    word: '学',
    reading: 'gaku がく',
    displayMeanings: ['learning', 'education', 'study of'],
    meanings: ['learning', 'education', 'study of']
  },
  {
    word: '学問',
    reading: 'gakumon がくもん',
    displayMeanings: ['scholarship', 'study', 'learning'],
    meanings: ['scholarship', 'study', 'learning']
  },
  {
    word: '学者',
    reading: 'gakusha がくしゃ',
    displayMeanings: ['scholar'],
    meanings: ['scholar']
  },
  {
    word: '学習',
    reading: 'gakushuu がくしゅう',
    displayMeanings: ['study', 'learning', 'tutorial'],
    meanings: ['study', 'learning', 'tutorial']
  },
  {
    word: '議長',
    reading: 'gichou ぎちょう',
    displayMeanings: ['chairman', 'president', 'moderator'],
    meanings: ['chairman', 'president', 'moderator']
  },
  {
    word: '議会',
    reading: 'gikai ぎかい',
    displayMeanings: ['congress', 'parliament', 'diet', 'legislative assembly'],
    meanings: ['congress', 'parliament', 'diet', 'legislative assembly']
  },
  {
    word: '語学',
    reading: 'gogaku ごがく',
    displayMeanings: ['study of foreign languages', 'linguistics'],
    meanings: ['study of foreign languages', 'linguistics']
  },
  {
    word: '母親',
    reading: 'hahaoya ははおや',
    displayMeanings: ['mother'],
    meanings: ['mother']
  },
  {
    word: '博物館',
    reading: 'hakubutsukan はくぶつかん',
    displayMeanings: ['museum'],
    meanings: ['museum']
  },
  {
    word: '販売',
    reading: 'hanbai はんばい',
    displayMeanings: ['sales', 'selling', 'marketing'],
    meanings: ['sales', 'selling', 'marketing']
  },
  {
    word: '発明',
    reading: 'hatsumei はつめい',
    displayMeanings: ['invention'],
    meanings: ['invention']
  },
  {
    word: '品',
    reading: 'hin ひん',
    displayMeanings: ['elegance', 'article'],
    meanings: ['elegance', 'article']
  },
  {
    word: '一言',
    reading: 'hitokoto ひとこと',
    displayMeanings: ['single word', 'a few words', 'brief comment'],
    meanings: ['single word', 'a few words', 'brief comment']
  },
  {
    word: '一人一人',
    reading: 'hitorihitori ひとりひとり',
    displayMeanings: ['one by one', 'each', 'one at a time'],
    meanings: ['one by one', 'each', 'one at a time']
  },
  {
    word: '本物',
    reading: 'honmono ほんもの',
    displayMeanings: ['genuine article', 'real thing', 'real deal'],
    meanings: ['genuine article', 'real thing', 'real deal']
  },
  {
    word: '本人',
    reading: 'honnin ほんにん',
    displayMeanings: [
      'the person in question',
      'the person themselves',
      'said person'
    ],
    meanings: ['the person in question', 'the person themselves', 'said person']
  },
  {
    word: '一致',
    reading: 'icchi いっち',
    displayMeanings: ['agreement', 'union', 'match', 'coincidence'],
    meanings: ['agreement', 'union', 'match', 'coincidence']
  },
  {
    word: '一時',
    reading: 'ichiji いちじ',
    displayMeanings: ["one o'clock"],
    meanings: ["one o'clock"]
  },
  {
    word: '一家',
    reading: 'ikka いっか',
    displayMeanings: [
      'a family',
      'a household',
      'a home',
      "one's family",
      'whole family'
    ],
    meanings: [
      'a family',
      'a household',
      'a home',
      "one's family",
      'whole family'
    ]
  },
  {
    word: '一般',
    reading: 'ippan いっぱん',
    displayMeanings: ['general', 'universal', 'ordinary', 'average', 'common'],
    meanings: ['general', 'universal', 'ordinary', 'average', 'common']
  },
  {
    word: '一方',
    reading: 'ippou いっぽう',
    displayMeanings: [
      'one (esp. of two)',
      'one way',
      'the other direction',
      'although'
    ],
    meanings: [
      'one (esp. of two)',
      'one way',
      'the other direction',
      'although'
    ]
  },
  {
    word: '一生',
    reading: 'isshou いっしょう',
    displayMeanings: ['whole life', 'a lifetime', 'a generation'],
    meanings: ['whole life', 'a lifetime', 'a generation']
  },
  {
    word: '一種',
    reading: 'isshu いっしゅ',
    displayMeanings: ['species', 'kind', 'variety'],
    meanings: ['species', 'kind', 'variety']
  },
  {
    word: '一瞬',
    reading: 'isshun いっしゅん',
    displayMeanings: ['instant', 'moment', 'for an instant'],
    meanings: ['instant', 'moment', 'for an instant']
  },
  {
    word: '一層',
    reading: 'issou いっそう',
    displayMeanings: [
      'much more',
      'still more',
      'all the more',
      'single layer',
      'sooner',
      'preferably'
    ],
    meanings: [
      'much more',
      'still more',
      'all the more',
      'single layer',
      'sooner',
      'preferably'
    ]
  },
  {
    word: '一体',
    reading: 'ittai いったい',
    displayMeanings: ['(what) the heck', '(why) in the world'],
    meanings: ['(what) the heck', '(why) in the world']
  },
  {
    word: '邪魔',
    reading: 'jama じゃま',
    displayMeanings: ['hindrance'],
    meanings: ['hindrance']
  },
  {
    word: '化学',
    reading: 'kagaku かがく',
    displayMeanings: ['chemistry'],
    meanings: ['chemistry']
  },
  {
    word: '会',
    reading: 'kai かい',
    displayMeanings: ['meeting', 'assembly', 'party', 'association', 'club'],
    meanings: ['meeting', 'assembly', 'party', 'association', 'club']
  },
  {
    word: '会員',
    reading: "kai'in かいいん", // Apostrophe inferred for reading based on similar words
    displayMeanings: ['member'],
    meanings: ['member']
  },
  {
    word: '海外',
    reading: 'kaigai かいがい',
    displayMeanings: ['foreign', 'abroad', 'overseas'],
    meanings: ['foreign', 'abroad', 'overseas']
  },
  {
    word: '会合',
    reading: 'kaigou かいごう',
    displayMeanings: ['meeting', 'assembly', 'gathering', 'association'],
    meanings: ['meeting', 'assembly', 'gathering', 'association']
  },
  {
    word: '会計',
    reading: 'kaikei かいけい',
    displayMeanings: ['finance', 'account', 'treasurer', 'bill'],
    meanings: ['finance', 'account', 'treasurer', 'bill']
  },
  {
    word: '開始',
    reading: 'kaishi かいし',
    displayMeanings: ['start', 'commencement', 'beginning', 'initiation'],
    meanings: ['start', 'commencement', 'beginning', 'initiation']
  },
  {
    word: '科目',
    reading: 'kamoku かもく',
    displayMeanings: ['(school) subject', 'curriculum', 'course'],
    meanings: ['(school) subject', 'curriculum', 'course']
  },
  {
    word: '権利',
    reading: 'kenri けんり',
    displayMeanings: ['right', 'privilege'],
    meanings: ['right', 'privilege']
  },
  {
    word: '基本',
    reading: 'kihon きほん',
    displayMeanings: ['basics', 'fundamentals', 'basis', 'foundation'],
    meanings: ['basics', 'fundamentals', 'basis', 'foundation']
  },
  {
    word: '記事',
    reading: 'kiji きじ',
    displayMeanings: ['article', 'news story', 'report', 'account'],
    meanings: ['article', 'news story', 'report', 'account']
  },
  {
    word: '気味',
    reading: 'kimi きみ',
    displayMeanings: ['sensation', 'feeling', 'tendency'],
    meanings: ['sensation', 'feeling', 'tendency']
  },
  {
    word: '記念',
    reading: 'kinen きねん',
    displayMeanings: [
      'commemoration',
      'celebration',
      'honoring the memory of something'
    ],
    meanings: [
      'commemoration',
      'celebration',
      'honoring the memory of something'
    ]
  },
  {
    word: '記入',
    reading: 'kinyuu きにゅう',
    displayMeanings: ['entry', 'filling in', 'filling out'],
    meanings: ['entry', 'filling in', 'filling out']
  },
  {
    word: '記憶',
    reading: 'kioku きおく',
    displayMeanings: ['memory', 'recollection', 'remembrance'],
    meanings: ['memory', 'recollection', 'remembrance']
  },
  {
    word: '記者',
    reading: 'kisha きしゃ',
    displayMeanings: ['reporter', 'journalist'],
    meanings: ['reporter', 'journalist']
  },
  {
    word: '期待',
    reading: 'kitai きたい',
    displayMeanings: ['expectation', 'anticipation', 'hope'],
    meanings: ['expectation', 'anticipation', 'hope']
  },
  {
    word: '国家',
    reading: 'kokka こっか',
    displayMeanings: ['state', 'country', 'nation'],
    meanings: ['state', 'country', 'nation']
  },
  {
    word: '国会',
    reading: 'kokkai こっかい',
    displayMeanings: [
      'National Diet',
      'legislative assembly of Japan',
      'parliament',
      'congress'
    ],
    meanings: [
      'National Diet',
      'legislative assembly of Japan',
      'parliament',
      'congress'
    ]
  },
  {
    word: '国境',
    reading: 'kokkyou こっきょう',
    displayMeanings: ['national border'],
    meanings: ['national border']
  },
  {
    word: '国語',
    reading: 'kokugo こくご',
    displayMeanings: ['national language'],
    meanings: ['national language']
  },
  {
    word: '国民',
    reading: 'kokumin こくみん',
    displayMeanings: ['people (of a country)', 'nation', 'citizen', 'national'],
    meanings: ['people (of a country)', 'nation', 'citizen', 'national']
  },
  {
    word: '今後',
    reading: 'kongo こんご',
    displayMeanings: ['from now on', 'hereafter'],
    meanings: ['from now on', 'hereafter']
  },
  {
    word: '今回',
    reading: 'konkai こんかい',
    displayMeanings: ['now', 'this time', 'lately'],
    meanings: ['now', 'this time', 'lately']
  },
  {
    word: '高速',
    reading: 'kousoku こうそく',
    displayMeanings: ['high-speed', 'rapid', 'express'],
    meanings: ['high-speed', 'rapid', 'express']
  },
  {
    word: '訓練',
    reading: 'kunren くんれん',
    displayMeanings: ['training', 'drill', 'practice', 'discipline'],
    meanings: ['training', 'drill', 'practice', 'discipline']
  },
  {
    word: '教科書',
    reading: 'kyoukasho きょうかしょ',
    displayMeanings: ['textbook', 'coursebook', 'schoolbook'],
    meanings: ['textbook', 'coursebook', 'schoolbook']
  },
  {
    word: '協力',
    reading: 'kyouryoku きょうりょく',
    displayMeanings: ['cooperation', 'collaboration'],
    meanings: ['cooperation', 'collaboration']
  },
  {
    word: '強力',
    reading: 'kyouryoku きょうりょく',
    displayMeanings: ['powerful', 'strong'],
    meanings: ['powerful', 'strong']
  },
  {
    word: '吸収',
    reading: 'kyuushuu きゅうしゅう',
    displayMeanings: ['absorption', 'suction', 'attraction'],
    meanings: ['absorption', 'suction', 'attraction']
  },
  {
    word: '急速',
    reading: 'kyuusoku きゅうそく',
    displayMeanings: ['rapid (e.g. progress)'],
    meanings: ['rapid (e.g. progress)']
  },
  {
    word: '真面目',
    reading: 'majime まじめ',
    displayMeanings: ['serious', 'earnest'],
    meanings: ['serious', 'earnest']
  },
  {
    word: '真っ赤',
    reading: 'makka まっか',
    displayMeanings: ['bright red', 'deep red', 'flushed (of face)'],
    meanings: ['bright red', 'deep red', 'flushed (of face)']
  },
  {
    word: '万一',
    reading: 'manichi まんいち',
    displayMeanings: [
      'emergency',
      'unlikely event',
      'by some chance',
      'by some possibility'
    ],
    meanings: [
      'emergency',
      'unlikely event',
      'by some chance',
      'by some possibility'
    ]
  },
  {
    word: '満足',
    reading: 'manzoku まんぞく',
    displayMeanings: ['satisfaction', 'contentment', 'sufficient', 'enough'],
    meanings: ['satisfaction', 'contentment', 'sufficient', 'enough']
  },
  {
    word: '飯',
    reading: 'meshi めし',
    displayMeanings: ['cooked rice', 'meal'],
    meanings: ['cooked rice', 'meal']
  },
  {
    word: '味方',
    reading: 'mikata みかた',
    displayMeanings: [
      'friend',
      'ally',
      'supporter',
      'taking sides with',
      'supporting'
    ],
    meanings: ['friend', 'ally', 'supporter', 'taking sides with', 'supporting']
  },
  {
    word: '魅力',
    reading: 'miryoku みりょく',
    displayMeanings: [
      'charm',
      'fascination',
      'glamour',
      'attraction',
      'appeal'
    ],
    meanings: ['charm', 'fascination', 'glamour', 'attraction', 'appeal']
  },
  {
    word: '木曜',
    reading: 'mokuyou もくよう',
    displayMeanings: ['Thursday'],
    meanings: ['Thursday']
  },
  {
    word: '半ば',
    reading: 'nakaba なかば',
    displayMeanings: ['middle', 'half', 'semi', 'halfway', 'partly'],
    meanings: ['middle', 'half', 'semi', 'halfway', 'partly']
  },
  {
    word: '熱心',
    reading: 'nesshin ねっしん',
    displayMeanings: ['enthusiastic', 'eager'],
    meanings: ['enthusiastic', 'eager']
  },
  {
    word: '日本',
    reading: 'nihon にほん',
    displayMeanings: ['Japan'],
    meanings: ['Japan']
  },
  {
    word: '能力',
    reading: 'nouryoku のうりょく',
    displayMeanings: ['ability', 'faculty'],
    meanings: ['ability', 'faculty']
  },
  {
    word: '入場',
    reading: 'nyuujou にゅうじょう',
    displayMeanings: ['entrance', 'admission', 'entering'],
    meanings: ['entrance', 'admission', 'entering']
  },
  {
    word: 'お昼',
    reading: 'ohiru おひる',
    displayMeanings: ['lunch', 'midday', 'daytime'],
    meanings: ['lunch', 'midday', 'daytime']
  },
  {
    word: '連続',
    reading: 'renzoku れんぞく',
    displayMeanings: ['continuation', 'succession', 'series'],
    meanings: ['continuation', 'succession', 'series']
  },
  {
    word: '利益',
    reading: 'rieki りえき',
    displayMeanings: ['profit', 'gains', 'benefit'],
    meanings: ['profit', 'gains', 'benefit']
  },
  {
    word: '利口',
    reading: 'rikou りこう',
    displayMeanings: ['clever', 'intelligent', 'wise', 'bright', 'sharp'],
    meanings: ['clever', 'intelligent', 'wise', 'bright', 'sharp']
  },
  {
    word: '留学',
    reading: 'ryuugaku りゅうがく',
    displayMeanings: ['studying abroad'],
    meanings: ['studying abroad']
  },
  {
    word: '作品',
    reading: 'sakuhin さくひん',
    displayMeanings: ['work of art', 'performance'],
    meanings: ['work of art', 'performance']
  },
  {
    word: '左右',
    reading: 'sayuu さゆう',
    displayMeanings: ['left and right'],
    meanings: ['left and right']
  },
  {
    word: '成長',
    reading: 'seichou せいちょう',
    displayMeanings: [
      'growth',
      'development',
      'growing up',
      'becoming an adult'
    ],
    meanings: ['growth', 'development', 'growing up', 'becoming an adult']
  },
  {
    word: '製品',
    reading: 'seihin せいひん',
    displayMeanings: ['manufactured goods', 'finished goods', 'product'],
    meanings: ['manufactured goods', 'finished goods', 'product']
  },
  {
    word: '青年',
    reading: 'seinen せいねん',
    displayMeanings: ['youth', 'young man'],
    meanings: ['youth', 'young man']
  },
  {
    word: '刺激',
    reading: 'shigeki しげき',
    displayMeanings: [
      'stimulus',
      'impetus',
      'incentive',
      'encouragement',
      'motivation',
      'provocation',
      'excitement',
      'thrill'
    ],
    meanings: [
      'stimulus',
      'impetus',
      'incentive',
      'encouragement',
      'motivation',
      'provocation',
      'excitement',
      'thrill'
    ]
  },
  {
    word: '資本',
    reading: 'shihon しほん',
    displayMeanings: ['funds', 'capital'],
    meanings: ['funds', 'capital']
  },
  {
    word: '品',
    reading: 'shina しな',
    displayMeanings: ['article', 'item', 'thing', 'goods', 'stock', 'quality'],
    meanings: ['article', 'item', 'thing', 'goods', 'stock', 'quality']
  },
  {
    word: '身長',
    reading: 'shinchou しんちょう',
    displayMeanings: ['body height', 'stature'],
    meanings: ['body height', 'stature']
  },
  {
    word: '進学',
    reading: 'shingaku しんがく',
    displayMeanings: ['entering a higher-level school (often university)'],
    meanings: ['entering a higher-level school (often university)']
  },
  {
    word: '支店',
    reading: 'shiten してん',
    displayMeanings: ['branch office', 'branch store'],
    meanings: ['branch office', 'branch store']
  },
  {
    word: '使用',
    reading: 'shiyou しよう',
    displayMeanings: ['use', 'application', 'employment', 'utilization.'],
    meanings: ['use', 'application', 'employment', 'utilization.']
  },
  {
    word: '食品',
    reading: 'shokuhin しょくひん',
    displayMeanings: ['food', 'food products'],
    meanings: ['food', 'food products']
  },
  {
    word: '書物',
    reading: 'shomotsu しょもつ',
    displayMeanings: ['book', 'volume'],
    meanings: ['book', 'volume']
  },
  {
    word: '書類',
    reading: 'shorui しょるい',
    displayMeanings: ['document', 'official papers'],
    meanings: ['document', 'official papers']
  },
  {
    word: '書斎',
    reading: 'shosai しょさい',
    displayMeanings: ['study', 'library', 'den', 'home office', 'reading room'],
    meanings: ['study', 'library', 'den', 'home office', 'reading room']
  },
  {
    word: '商売',
    reading: 'shoubai しょうばい',
    displayMeanings: [
      'trade',
      'business',
      'commerce',
      'transaction',
      'occupation'
    ],
    meanings: ['trade', 'business', 'commerce', 'transaction', 'occupation']
  },
  {
    word: '奨学金',
    reading: 'shougakukin しょうがくきん',
    displayMeanings: ['scholarship', 'stipend', 'student loan'],
    meanings: ['scholarship', 'stipend', 'student loan']
  },
  {
    word: '正午',
    reading: 'shougo しょうご',
    displayMeanings: ['midday'],
    meanings: ['midday']
  },
  {
    word: '商品',
    reading: 'shouhin しょうひん',
    displayMeanings: [
      'commodity',
      'article of commerce',
      'goods',
      'stock',
      'merchandise'
    ],
    meanings: [
      'commodity',
      'article of commerce',
      'goods',
      'stock',
      'merchandise'
    ]
  },
  {
    word: '少女',
    reading: 'shoujo しょうじょ',
    displayMeanings: ['little girl', 'maiden', 'young lady'],
    meanings: ['little girl', 'maiden', 'young lady']
  },
  {
    word: '証明',
    reading: 'shoumei しょうめい',
    displayMeanings: ['proof', 'verification', 'certification'],
    meanings: ['proof', 'verification', 'certification']
  },
  {
    word: '少年',
    reading: 'shounen しょうねん',
    displayMeanings: ['boy', 'juvenile', 'young boy', 'youth', 'lad'],
    meanings: ['boy', 'juvenile', 'young boy', 'youth', 'lad']
  },
  {
    word: '少々',
    reading: 'shoushou しょうしょう',
    displayMeanings: ['just a minute', 'small quantity'],
    meanings: ['just a minute', 'small quantity']
  },
  {
    word: '招待',
    reading: 'shoutai しょうたい',
    displayMeanings: ['invitation'],
    meanings: ['invitation']
  },
  {
    word: '週',
    reading: 'shuu しゅう',
    displayMeanings: ['week'],
    meanings: ['week']
  },
  {
    word: '集中',
    reading: 'shuuchuu しゅうちゅう',
    displayMeanings: [
      'concentration',
      'focusing',
      'centralization',
      'integration'
    ],
    meanings: ['concentration', 'focusing', 'centralization', 'integration']
  },
  {
    word: '集団',
    reading: 'shuudan しゅうだん',
    displayMeanings: ['group', 'mass'],
    meanings: ['group', 'mass']
  },
  {
    word: '収穫',
    reading: 'shuukaku しゅうかく',
    displayMeanings: ['harvest', 'crop', "fruits (of one's labors)"],
    meanings: ['harvest', 'crop', "fruits (of one's labors)"]
  },
  {
    word: '週間',
    reading: 'shuukan しゅうかん',
    displayMeanings: ['week'],
    meanings: ['week']
  },
  {
    word: '週刊',
    reading: 'shuukan しゅうかん',
    displayMeanings: ['weekly publication'],
    meanings: ['weekly publication']
  },
  {
    word: '収入',
    reading: 'shuunyuu しゅうにゅう',
    displayMeanings: ['income', 'receipts', 'revenue', 'salary'],
    meanings: ['income', 'receipts', 'revenue', 'salary']
  },
  {
    word: '速度',
    reading: 'sokudo そくど',
    displayMeanings: ['speed', 'velocity', 'pace', 'rate'],
    meanings: ['speed', 'velocity', 'pace', 'rate']
  },
  {
    word: '大半',
    reading: 'taihan たいはん',
    displayMeanings: [
      'majority',
      'more than half',
      'most',
      'largely',
      'mainly'
    ],
    meanings: ['majority', 'more than half', 'most', 'largely', 'mainly']
  },
  {
    word: '大会',
    reading: 'taikai たいかい',
    displayMeanings: ['convention', 'rally', 'conference', 'tournament'],
    meanings: ['convention', 'rally', 'conference', 'tournament']
  },
  {
    word: '多少',
    reading: 'tashou たしょう',
    displayMeanings: ['more or less', 'somewhat', 'a little', 'a few', 'some'],
    meanings: ['more or less', 'somewhat', 'a little', 'a few', 'some']
  },
  {
    word: '手品',
    reading: 'tejina てじな',
    displayMeanings: ['magic trick', 'illusion'],
    meanings: ['magic trick', 'illusion']
  },
  {
    word: '哲学',
    reading: 'tetsugaku てつがく',
    displayMeanings: ['philosophy'],
    meanings: ['philosophy']
  },
  {
    word: '徹夜',
    reading: 'tetsuya てつや',
    displayMeanings: ['staying up all night'],
    meanings: ['staying up all night']
  },
  {
    word: '土地',
    reading: 'tochi とち',
    displayMeanings: ['plot of land', 'lot', 'soil'],
    meanings: ['plot of land', 'lot', 'soil']
  },
  {
    word: '都会',
    reading: 'tokai とかい',
    displayMeanings: ['(big) city'],
    meanings: ['(big) city']
  },
  {
    word: '図書',
    reading: 'tosho としょ',
    displayMeanings: ['books'],
    meanings: ['books']
  },
  {
    word: '通学',
    reading: 'tsuugaku つうがく',
    displayMeanings: ['commuting to school', 'school commute'],
    meanings: ['commuting to school', 'school commute']
  },
  {
    word: '運転',
    reading: 'unten うんてん',
    displayMeanings: ['operation', 'driving'],
    meanings: ['operation', 'driving']
  },
  {
    word: '悪口',
    reading: 'waruguchi わるぐち',
    displayMeanings: [
      'slander',
      'bad-mouthing',
      'abuse',
      'insult',
      'speaking ill (of)'
    ],
    meanings: [
      'slander',
      'bad-mouthing',
      'abuse',
      'insult',
      'speaking ill (of)'
    ]
  },
  {
    word: '夜明け',
    reading: 'yoake よあけ',
    displayMeanings: ['dawn', 'daybreak'],
    meanings: ['dawn', 'daybreak']
  },
  {
    word: '余分',
    reading: 'yobun よぶん',
    displayMeanings: ['extra', 'excess', 'surplus'],
    meanings: ['extra', 'excess', 'surplus']
  },
  {
    word: '読み',
    reading: 'yomi よみ',
    displayMeanings: ['reading (of a kanji, situation, etc)'],
    meanings: ['reading (of a kanji, situation, etc)']
  },
  {
    word: '夜中',
    reading: 'yonaka よなか',
    displayMeanings: ['middle of the night', 'dead of night'],
    meanings: ['middle of the night', 'dead of night']
  },
  {
    word: '唯一',
    reading: 'yuiitsu ゆいいつ',
    displayMeanings: ['only', 'sole', 'unique'],
    meanings: ['only', 'sole', 'unique']
  },
  {
    word: '輸入',
    reading: 'yunyuu ゆにゅう',
    displayMeanings: ['import', 'importation', 'introduction'],
    meanings: ['import', 'importation', 'introduction']
  },
  {
    word: '輸出',
    reading: 'yushutsu ゆしゅつ',
    displayMeanings: ['export', 'exportation'],
    meanings: ['export', 'exportation']
  },
  {
    word: '夕べ',
    reading: 'yuube ゆうべ',
    displayMeanings: ['evening / last night', 'yesterday evening'],
    meanings: ['evening / last night', 'yesterday evening']
  },
  {
    word: '有利',
    reading: 'yuuri ゆうり',
    displayMeanings: ['advantageous', 'favorable', 'profitable'],
    meanings: ['advantageous', 'favorable', 'profitable']
  },
  {
    word: '全国',
    reading: 'zenkoku ぜんこく',
    displayMeanings: ['the whole country'],
    meanings: ['the whole country']
  }
];

export default N3Nouns;
