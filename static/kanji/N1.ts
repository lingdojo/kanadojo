const N1 = [
  {
    id: 1,
    kanjiChar: '氏',
    onyomi: ['shi シ'],
    kunyomi: ['uji うじ'],
    displayMeanings: ['family name', 'surname'],
    fullDisplayMeanings: ['family name', 'surname', 'clan'],
    meanings: ['family name', 'surname', 'clan']
  },
  {
    id: 2,
    kanjiChar: '統',
    onyomi: ['tou トウ'],
    kunyomi: ['su(beru) す(べる)'],
    displayMeanings: ['ruling', 'governing'],
    fullDisplayMeanings: ['ruling', 'governing'],
    meanings: ['ruling', 'governing']
  },
  {
    id: 3,
    kanjiChar: '基',
    onyomi: ['ki キ'],
    kunyomi: ['moto もと', 'motoi もとい'],
    displayMeanings: ['fundamentals', 'foundation'],
    fullDisplayMeanings: ['fundamentals', 'counter for machines', 'foundation'],
    meanings: ['fundamentals', 'counter for machines', 'foundation']
  },
  {
    id: 4,
    kanjiChar: '価',
    onyomi: ['ka カ'],
    kunyomi: ['atai あたい'],
    displayMeanings: ['value', 'price'],
    fullDisplayMeanings: ['value', 'price'],
    meanings: ['value', 'price']
  },
  {
    id: 5,
    kanjiChar: '提',
    onyomi: ['tei テイ'],
    kunyomi: ['sa(geru) さ(げる)'],
    displayMeanings: ['propose', 'take along'],
    fullDisplayMeanings: ['propose', 'take along', 'carry in hand'],
    meanings: ['propose', 'take along', 'carry in hand']
  },
  {
    id: 6,
    kanjiChar: '挙',
    onyomi: ['kyo キョ'],
    kunyomi: ['a(geru) あ(げる)', 'kozo(ru) こぞ(る)'],
    displayMeanings: ['raise', 'plan', 'actions'],
    fullDisplayMeanings: ['raise', 'plan', 'project', 'behavior', 'actions'],
    meanings: ['raise', 'plan', 'project', 'behavior', 'actions']
  },
  {
    id: 7,
    kanjiChar: '応',
    onyomi: ['ou オウ'],
    kunyomi: ['kota(eru) こた(える)'],
    displayMeanings: ['apply', 'answer', 'accept'],
    fullDisplayMeanings: ['apply', 'answer', 'yes', 'OK', 'reply', 'accept'],
    meanings: ['apply', 'answer', 'yes', 'OK', 'reply', 'accept']
  },
  {
    id: 8,
    kanjiChar: '企',
    onyomi: ['ki キ'],
    kunyomi: ['kuwada(teru) くわだ(てる)', 'takura(mu) たくら(む)'],
    displayMeanings: ['undertake', 'plan'],
    fullDisplayMeanings: ['undertake', 'scheme', 'design', 'attempt', 'plan'],
    meanings: ['undertake', 'scheme', 'design', 'attempt', 'plan']
  },
  {
    id: 9,
    kanjiChar: '検',
    onyomi: ['ken ケン'],
    kunyomi: ['shira(beru) しら(べる)'],
    displayMeanings: ['examination', 'investigate'],
    fullDisplayMeanings: ['examination', 'investigate'],
    meanings: ['examination', 'investigate']
  },
  {
    id: 10,
    kanjiChar: '藤',
    onyomi: ['tou トウ'],
    kunyomi: ['fuji ふじ'],
    displayMeanings: ['wisteria'],
    fullDisplayMeanings: ['wisteria'],
    meanings: ['wisteria']
  },
  {
    id: 11,
    kanjiChar: '沢',
    onyomi: ['taku タク'],
    kunyomi: ['sawa さわ'],
    displayMeanings: ['swamp', 'marsh'],
    fullDisplayMeanings: ['swamp', 'marsh', 'brilliance', 'grace'],
    meanings: ['swamp', 'marsh', 'brilliance', 'grace']
  },
  {
    id: 12,
    kanjiChar: '裁',
    onyomi: ['sai サイ'],
    kunyomi: ['ta(tsu) た(つ)', 'saba(ku) さば(く)'],
    displayMeanings: ['tailor', 'judge'],
    fullDisplayMeanings: ['tailor', 'judge', 'decision', 'cut out (pattern)'],
    meanings: ['tailor', 'judge', 'decision', 'cut out (pattern)']
  },
  {
    id: 13,
    kanjiChar: '証',
    onyomi: ['shou ショウ'],
    kunyomi: ['akashi あかし'],
    displayMeanings: ['evidence', 'proof'],
    fullDisplayMeanings: ['evidence', 'proof', 'certificate'],
    meanings: ['evidence', 'proof', 'certificate']
  },
  {
    id: 14,
    kanjiChar: '援',
    onyomi: ['en エン'],
    kunyomi: [],
    displayMeanings: ['help', 'save'],
    fullDisplayMeanings: ['abet', 'help', 'save'],
    meanings: ['abet', 'help', 'save']
  },
  {
    id: 15,
    kanjiChar: '可',
    onyomi: ['ka カ'],
    kunyomi: ['be(ki) べ(き)'],
    displayMeanings: ['can', 'passable'],
    fullDisplayMeanings: ['can', 'passable', 'mustn\'t', 'should not'],
    meanings: ['can', 'passable', 'mustn\'t', 'should not']
  },
  {
    id: 16,
    kanjiChar: '施',
    onyomi: ['shi シ', 'se セ'],
    kunyomi: ['hodoko(su) ほどこ(す)'],
    displayMeanings: ['give', 'bestow'],
    fullDisplayMeanings: ['give', 'bestow', 'perform', 'alms'],
    meanings: ['give', 'bestow', 'perform', 'alms']
  },
  {
    id: 17,
    kanjiChar: '井',
    onyomi: ['sei セイ', 'shou ショウ'],
    kunyomi: ['i い'],
    displayMeanings: ['well', 'community'],
    fullDisplayMeanings: ['well', 'well crib', 'town', 'community'],
    meanings: ['well', 'well crib', 'town', 'community']
  },
  {
    id: 18,
    kanjiChar: '護',
    onyomi: ['go ゴ'],
    kunyomi: ['mamo(ru) まも(る)'],
    displayMeanings: ['safeguard', 'protect'],
    fullDisplayMeanings: ['safeguard', 'protect'],
    meanings: ['safeguard', 'protect']
  },
  {
    id: 19,
    kanjiChar: '展',
    onyomi: ['ten テン'],
    kunyomi: [],
    displayMeanings: ['unfold', 'expand'],
    fullDisplayMeanings: ['unfold', 'expand'],
    meanings: ['unfold', 'expand']
  },
  {
    id: 20,
    kanjiChar: '態',
    onyomi: ['tai タイ'],
    kunyomi: ['waza(to) わざ(と)'],
    displayMeanings: ['attitude', 'condition'],
    fullDisplayMeanings: ['attitude', 'condition'],
    meanings: ['attitude', 'condition']
  },
  {
    id: 21,
    kanjiChar: '鮮',
    onyomi: ['sen セン'],
    kunyomi: ['aza(yaka) あざ(やか)'],
    displayMeanings: ['fresh', 'vivid'],
    fullDisplayMeanings: ['fresh', 'vivid', 'clear'],
    meanings: ['fresh', 'vivid', 'clear']
  },
  {
    id: 22,
    kanjiChar: '視',
    onyomi: ['shi シ'],
    kunyomi: ['mi(ru) み(る)'],
    displayMeanings: ['inspection', 'regard as'],
    fullDisplayMeanings: ['inspection', 'regard as', 'see', 'look at'],
    meanings: ['inspection', 'regard as', 'see', 'look at']
  },
  {
    id: 23,
    kanjiChar: '条',
    onyomi: ['jou ジョウ', 'chou チョウ', 'deki デキ'],
    kunyomi: ['eda えだ', 'suji すじ'],
    displayMeanings: ['article', 'clause'],
    fullDisplayMeanings: ['article', 'clause', 'counter for articles'],
    meanings: ['article', 'clause', 'counter for articles']
  },
  {
    id: 24,
    kanjiChar: '幹',
    onyomi: ['kan カン'],
    kunyomi: ['miki みき'],
    displayMeanings: ['tree trunk', 'main part'],
    fullDisplayMeanings: ['tree trunk', 'main part', 'talent', 'capability'],
    meanings: ['tree trunk', 'main part', 'talent', 'capability']
  },
  {
    id: 25,
    kanjiChar: '独',
    onyomi: ['doku ドク'],
    kunyomi: ['hito(ri) ひと(り)'],
    displayMeanings: ['single', 'alone'],
    fullDisplayMeanings: ['single', 'alone', 'spontaneously'],
    meanings: ['single', 'alone', 'spontaneously']
  },
  {
    id: 26,
    kanjiChar: '宮',
    onyomi: ['kyuu キュウ', 'guu グウ', 'ku ク'],
    kunyomi: ['miya みや'],
    displayMeanings: ['Shinto shrine', 'palace'],
    fullDisplayMeanings: ['Shinto shrine', 'constellations', 'palace', 'princess'],
    meanings: ['Shinto shrine', 'constellations', 'palace', 'princess']
  },
  {
    id: 27,
    kanjiChar: '率',
    onyomi: ['sotsu ソツ', 'ritsu リツ'],
    kunyomi: ['hiki(iru) ひき(いる)'],
    displayMeanings: ['ratio', 'rate', 'lead'],
    fullDisplayMeanings: ['ratio', 'rate', 'proportion', '%', 'factor', 'lead'],
    meanings: ['ratio', 'rate', 'proportion', '%', 'factor', 'lead']
  },
  {
    id: 28,
    kanjiChar: '衛',
    onyomi: ['ei エイ'],
    kunyomi: [],
    displayMeanings: ['defense', 'protection'],
    fullDisplayMeanings: ['defense', 'protection'],
    meanings: ['defense', 'protection']
  },
  {
    id: 29,
    kanjiChar: '張',
    onyomi: ['chou チョウ'],
    kunyomi: ['ha(ru) は(る)'],
    displayMeanings: ['lengthen', 'stretch'],
    fullDisplayMeanings: ['lengthen', 'counter for bows & stringed instruments', 'stretch', 'spread', 'put up (tent)'],
    meanings: ['lengthen', 'counter for bows & stringed instruments', 'stretch', 'spread', 'put up (tent)']
  },
  {
    id: 30,
    kanjiChar: '監',
    onyomi: ['kan カン'],
    kunyomi: [],
    displayMeanings: ['oversee', 'rule'],
    fullDisplayMeanings: ['oversee', 'official', 'govt office', 'rule', 'administer'],
    meanings: ['oversee', 'official', 'govt office', 'rule', 'administer']
  },
  {
    id: 31,
    kanjiChar: '環',
    onyomi: ['kan カン'],
    kunyomi: ['wa わ'],
    displayMeanings: ['ring', 'circle'],
    fullDisplayMeanings: ['ring', 'circle', 'link', 'wheel'],
    meanings: ['ring', 'circle', 'link', 'wheel']
  },
  {
    id: 32,
    kanjiChar: '審',
    onyomi: ['shin シン'],
    kunyomi: ['tsumabi(raka) つまび(らか)', 'tsubusa(ni) つぶさ(に)'],
    displayMeanings: ['hearing', 'judge'],
    fullDisplayMeanings: ['hearing', 'judge', 'trial'],
    meanings: ['hearing', 'judge', 'trial']
  },
  {
    id: 33,
    kanjiChar: '義',
    onyomi: ['gi ギ'],
    kunyomi: [],
    displayMeanings: ['righteousness', 'justice'],
    fullDisplayMeanings: ['righteousness', 'justice', 'morality', 'honor', 'loyalty', 'meaning'],
    meanings: ['righteousness', 'justice', 'morality', 'honor', 'loyalty', 'meaning']
  },
  {
    id: 34,
    kanjiChar: '訴',
    onyomi: ['so ソ'],
    kunyomi: ['utta(eru) うった(える)'],
    displayMeanings: ['accusation', 'sue'],
    fullDisplayMeanings: ['accusation', 'sue', 'complain of pain', 'appeal to'],
    meanings: ['accusation', 'sue', 'complain of pain', 'appeal to']
  },
  {
    id: 35,
    kanjiChar: '株',
    onyomi: ['shu シュ'],
    kunyomi: ['kabu かぶ'],
    displayMeanings: ['stocks', 'shares'],
    fullDisplayMeanings: ['stocks', 'stump', 'shares', 'stock', 'counter for small plants'],
    meanings: ['stocks', 'stump', 'shares', 'stock', 'counter for small plants']
  },
  {
    id: 36,
    kanjiChar: '姿',
    onyomi: ['shi シ'],
    kunyomi: ['sugata すがた'],
    displayMeanings: ['figure', 'form'],
    fullDisplayMeanings: ['figure', 'form', 'shape'],
    meanings: ['figure', 'form', 'shape']
  },
  {
    id: 37,
    kanjiChar: '閣',
    onyomi: ['kaku カク'],
    kunyomi: [],
    displayMeanings: ['tower', 'palace'],
    fullDisplayMeanings: ['tower', 'tall building', 'palace'],
    meanings: ['tower', 'tall building', 'palace']
  },
  {
    id: 38,
    kanjiChar: '韓',
    onyomi: ['kan カン'],
    kunyomi: ['kara から', 'igeta いげた'],
    displayMeanings: ['Korea'],
    fullDisplayMeanings: ['Korea'],
    meanings: ['Korea']
  },
  {
    id: 39,
    kanjiChar: '衆',
    onyomi: ['shuu シュウ', 'shu シュ'],
    kunyomi: ['oo(i) おお(い)'],
    displayMeanings: ['masses', 'multitude'],
    fullDisplayMeanings: ['masses', 'great numbers', 'multitude', 'populace'],
    meanings: ['masses', 'great numbers', 'multitude', 'populace']
  },
  {
    id: 40,
    kanjiChar: '評',
    onyomi: ['hyou ヒョウ'],
    kunyomi: [],
    displayMeanings: ['evaluate', 'criticism'],
    fullDisplayMeanings: ['evaluate', 'criticism', 'comment'],
    meanings: ['evaluate', 'criticism', 'comment']
  },
  {
    id: 41,
    kanjiChar: '岡',
    onyomi: ['kou コウ'],
    kunyomi: ['oka おか'],
    displayMeanings: ['mount', 'hill'],
    fullDisplayMeanings: ['mount', 'hill', 'knoll'],
    meanings: ['mount', 'hill', 'knoll']
  },
  {
    id: 42,
    kanjiChar: '影',
    onyomi: ['ei エイ'],
    kunyomi: ['kage かげ'],
    displayMeanings: ['shadow', 'silhouette'],
    fullDisplayMeanings: ['shadow', 'silhouette', 'phantom'],
    meanings: ['shadow', 'silhouette', 'phantom']
  },
  {
    id: 43,
    kanjiChar: '松',
    onyomi: ['shou ショウ'],
    kunyomi: ['matsu まつ'],
    displayMeanings: ['pine tree'],
    fullDisplayMeanings: ['pine tree'],
    meanings: ['pine tree']
  },
  {
    id: 44,
    kanjiChar: '撃',
    onyomi: ['geki ゲキ'],
    kunyomi: ['u(tsu) う(つ)'],
    displayMeanings: ['beat', 'attack'],
    fullDisplayMeanings: ['beat', 'attack', 'defeat', 'conquer'],
    meanings: ['beat', 'attack', 'defeat', 'conquer']
  },
  {
    id: 45,
    kanjiChar: '佐',
    onyomi: ['sa サ'],
    kunyomi: [],
    displayMeanings: ['assistant', 'help'],
    fullDisplayMeanings: ['assistant', 'help'],
    meanings: ['assistant', 'help']
  },
  {
    id: 46,
    kanjiChar: '核',
    onyomi: ['kaku カク'],
    kunyomi: [],
    displayMeanings: ['nucleus', 'core'],
    fullDisplayMeanings: ['nucleus', 'core', 'kernel'],
    meanings: ['nucleus', 'core', 'kernel']
  },
  {
    id: 47,
    kanjiChar: '整',
    onyomi: ['sei セイ'],
    kunyomi: ['totono(eru) ととの(える)'],
    displayMeanings: ['organize', 'arranging'],
    fullDisplayMeanings: ['organize', 'arranging', 'tune', 'tone', 'meter', 'key (music)'],
    meanings: ['organize', 'arranging', 'tune', 'tone', 'meter', 'key (music)']
  },
  {
    id: 48,
    kanjiChar: '融',
    onyomi: ['yuu ユウ'],
    kunyomi: ['to(keru) と(ける)'],
    displayMeanings: ['dissolve', 'melt'],
    fullDisplayMeanings: ['dissolve', 'melt'],
    meanings: ['dissolve', 'melt']
  },
  {
    id: 49,
    kanjiChar: '製',
    onyomi: ['sei セイ'],
    kunyomi: [],
    displayMeanings: ['made in...', 'manufacture'],
    fullDisplayMeanings: ['made in...', 'manufacture'],
    meanings: ['made in...', 'manufacture']
  },
  {
    id: 50,
    kanjiChar: '票',
    onyomi: ['hyou ヒョウ'],
    kunyomi: [],
    displayMeanings: ['ballot', 'label'],
    fullDisplayMeanings: ['ballot', 'label', 'ticket', 'sign'],
    meanings: ['ballot', 'label', 'ticket', 'sign']
  },
  {
    id: 51,
    kanjiChar: '渉',
    onyomi: ['shou ショウ'],
    kunyomi: ['wata(ru) わた(る)'],
    displayMeanings: ['ford', 'transit'],
    fullDisplayMeanings: ['ford', 'go cross', 'transit', 'ferry', 'import', 'involve'],
    meanings: ['ford', 'go cross', 'transit', 'ferry', 'import', 'involve']
  },
  {
    id: 52,
    kanjiChar: '響',
    onyomi: ['kyou キョウ'],
    kunyomi: ['hibi(ku) ひび(く)'],
    displayMeanings: ['echo', 'sound'],
    fullDisplayMeanings: ['echo', 'sound', 'resound', 'ring', 'vibrate'],
    meanings: ['echo', 'sound', 'resound', 'ring', 'vibrate']
  },
  {
    id: 53,
    kanjiChar: '推',
    onyomi: ['sui スイ'],
    kunyomi: ['o(su) お(す)'],
    displayMeanings: ['conjecture', 'infer'],
    fullDisplayMeanings: ['conjecture', 'infer', 'guess', 'suppose', 'support', 'push (for)'],
    meanings: ['conjecture', 'infer', 'guess', 'suppose', 'support', 'push (for)']
  },
  {
    id: 54,
    kanjiChar: '請',
    onyomi: ['sei セイ', 'shin シン', 'shou ショウ'],
    kunyomi: ['ko(u) こ(う)', 'u(keru) う(ける)'],
    displayMeanings: ['solicit', 'invite'],
    fullDisplayMeanings: ['solicit', 'invite', 'ask'],
    meanings: ['solicit', 'invite', 'ask']
  },
  {
    id: 55,
    kanjiChar: '器',
    onyomi: ['ki キ'],
    kunyomi: ['utsuwa うつわ'],
    displayMeanings: ['utensil', 'vessel'],
    fullDisplayMeanings: ['utensil', 'vessel', 'receptacle', 'implement', 'instrument', 'ability', 'container', 'tool', 'set'],
    meanings: ['utensil', 'vessel', 'receptacle', 'implement', 'instrument', 'ability', 'container', 'tool', 'set']
  },
  {
    id: 56,
    kanjiChar: '士',
    onyomi: ['shi シ'],
    kunyomi: ['samurai さむらい'],
    displayMeanings: ['gentleman', 'samurai'],
    fullDisplayMeanings: ['gentleman', 'scholar', 'samurai'],
    meanings: ['gentleman', 'scholar', 'samurai']
  },
  {
    id: 57,
    kanjiChar: '討',
    onyomi: ['tou トウ'],
    kunyomi: ['u(tsu) う(つ)'],
    displayMeanings: ['chastise', 'attack'],
    fullDisplayMeanings: ['chastise', 'attack', 'defeat', 'destroy', 'conquer'],
    meanings: ['chastise', 'attack', 'defeat', 'destroy', 'conquer']
  },
  {
    id: 58,
    kanjiChar: '攻',
    onyomi: ['kou コウ'],
    kunyomi: ['se(meru) せ(める)'],
    displayMeanings: ['aggression', 'attack'],
    fullDisplayMeanings: ['aggression', 'attack', 'criticize', 'polish'],
    meanings: ['aggression', 'attack', 'criticize', 'polish']
  },
  {
    id: 59,
    kanjiChar: '崎',
    onyomi: ['ki キ'],
    kunyomi: ['saki さき', 'sai さい', 'misaki みさき'],
    displayMeanings: ['promontory', 'cape'],
    fullDisplayMeanings: ['promontory', 'cape', 'spit'],
    meanings: ['promontory', 'cape', 'spit']
  },
  {
    id: 60,
    kanjiChar: '督',
    onyomi: ['toku トク'],
    kunyomi: [],
    displayMeanings: ['coach', 'command'],
    fullDisplayMeanings: ['coach', 'command', 'urge', 'lead', 'supervise'],
    meanings: ['coach', 'command', 'urge', 'lead', 'supervise']
  },
  {
    id: 61,
    kanjiChar: '授',
    onyomi: ['ju ジュ'],
    kunyomi: ['sazu(keru) さず(ける)'],
    displayMeanings: ['impart', 'instruct'],
    fullDisplayMeanings: ['impart', 'instruct', 'grant', 'confer'],
    meanings: ['impart', 'instruct', 'grant', 'confer']
  },
  {
    id: 62,
    kanjiChar: '催',
    onyomi: ['sai サイ'],
    kunyomi: ['moyou(su) もよう(す)', 'moyoo(su) もよお(す)'],
    displayMeanings: ['sponsor', 'hold'],
    fullDisplayMeanings: ['sponsor', 'hold (a meeting)', 'give (a dinner)'],
    meanings: ['sponsor', 'hold (a meeting)', 'give (a dinner)']
  },
  {
    id: 63,
    kanjiChar: '及',
    onyomi: ['kyuu キュウ'],
    kunyomi: ['oyo(bu) およ(ぶ)', 'oyobi および'],
    displayMeanings: ['reach out', 'exert'],
    fullDisplayMeanings: ['reach out', 'exert', 'exercise', 'cause'],
    meanings: ['reach out', 'exert', 'exercise', 'cause']
  },
  {
    id: 64,
    kanjiChar: '憲',
    onyomi: ['ken ケン'],
    kunyomi: [],
    displayMeanings: ['constitution', 'law'],
    fullDisplayMeanings: ['constitution', 'law'],
    meanings: ['constitution', 'law']
  },
  {
    id: 65,
    kanjiChar: '離',
    onyomi: ['ri リ'],
    kunyomi: ['hana(reru) はな(れる)'],
    displayMeanings: ['detach', 'separation'],
    fullDisplayMeanings: ['detach', 'separation', 'disjoin', 'digress'],
    meanings: ['detach', 'separation', 'disjoin', 'digress']
  },
  {
    id: 66,
    kanjiChar: '激',
    onyomi: ['geki ゲキ'],
    kunyomi: ['hage(shii) はげ(しい)'],
    displayMeanings: ['violent', 'enraged'],
    fullDisplayMeanings: ['violent', 'get excited', 'enraged', 'chafe', 'incite'],
    meanings: ['violent', 'get excited', 'enraged', 'chafe', 'incite']
  },
  {
    id: 67,
    kanjiChar: '摘',
    onyomi: ['teki テキ'],
    kunyomi: ['tsu(mu) つ(む)'],
    displayMeanings: ['pinch', 'pick'],
    fullDisplayMeanings: ['pinch', 'pick', 'pluck', 'trim', 'clip', 'summarize'],
    meanings: ['pinch', 'pick', 'pluck', 'trim', 'clip', 'summarize']
  },
  {
    id: 68,
    kanjiChar: '系',
    onyomi: ['kei ケイ'],
    kunyomi: [],
    displayMeanings: ['lineage', 'system'],
    fullDisplayMeanings: ['lineage', 'system'],
    meanings: ['lineage', 'system']
  },
  {
    id: 69,
    kanjiChar: '批',
    onyomi: ['hi ヒ'],
    kunyomi: [],
    displayMeanings: ['criticism', 'strike'],
    fullDisplayMeanings: ['criticism', 'strike'],
    meanings: ['criticism', 'strike']
  },
  {
    id: 70,
    kanjiChar: '郎',
    onyomi: ['rou ロウ', 'ryou リョウ'],
    kunyomi: ['otoko おとこ'],
    displayMeanings: ['son'],
    fullDisplayMeanings: ['son', 'counter for sons'],
    meanings: ['son', 'counter for sons']
  },
  {
    id: 71,
    kanjiChar: '健',
    onyomi: ['ken ケン'],
    kunyomi: ['suko(yaka) すこ(やか)'],
    displayMeanings: ['healthy', 'health'],
    fullDisplayMeanings: ['healthy', 'health', 'strength', 'persistence'],
    meanings: ['healthy', 'health', 'strength', 'persistence']
  },
  {
    id: 72,
    kanjiChar: '従',
    onyomi: ['juu ジュウ', 'shou ショウ', 'ju ジュ'],
    kunyomi: ['shitaga(u) したが(う)', 'yori より'],
    displayMeanings: ['accompany', 'obey'],
    fullDisplayMeanings: ['accompany', 'obey', 'submit to', 'comply', 'follow', 'secondary', 'incidental', 'subordinate'],
    meanings: ['accompany', 'obey', 'submit to', 'comply', 'follow', 'secondary', 'incidental', 'subordinate']
  },
  {
    id: 73,
    kanjiChar: '修',
    onyomi: ['shuu シュウ', 'shu シュ'],
    kunyomi: ['osa(meru) おさ(める)'],
    displayMeanings: ['discipline', 'study'],
    fullDisplayMeanings: ['discipline', 'conduct oneself well', 'study', 'master'],
    meanings: ['discipline', 'conduct oneself well', 'study', 'master']
  },
  {
    id: 74,
    kanjiChar: '隊',
    onyomi: ['tai タイ'],
    kunyomi: [],
    displayMeanings: ['regiment', 'company'],
    fullDisplayMeanings: ['regiment', 'party', 'company', 'squad'],
    meanings: ['regiment', 'party', 'company', 'squad']
  },
  {
    id: 75,
    kanjiChar: '織',
    onyomi: ['shoku ショク', 'shiki シキ'],
    kunyomi: ['o(ru) お(る)', 'ori おり', '-ori -おり', '-o(ri) -お(り)'],
    displayMeanings: ['weave', 'fabric'],
    fullDisplayMeanings: ['weave', 'fabric'],
    meanings: ['weave', 'fabric']
  },
  {
    id: 76,
    kanjiChar: '拡',
    onyomi: ['kaku カク', 'kou コウ'],
    kunyomi: ['hiro(garu) ひろ(がる)'],
    displayMeanings: ['broaden', 'extend'],
    fullDisplayMeanings: ['broaden', 'extend', 'expand', 'enlarge'],
    meanings: ['broaden', 'extend', 'expand', 'enlarge']
  },
  {
    id: 77,
    kanjiChar: '故',
    onyomi: ['ko コ'],
    kunyomi: ['yue ゆえ', 'furu(i) ふる(い)', 'moto もと'],
    displayMeanings: ['happenstance', 'reason'],
    fullDisplayMeanings: ['happenstance', 'especially', 'intentionally', 'reason', 'cause', 'circumstances', 'the late', 'therefore'],
    meanings: ['happenstance', 'especially', 'intentionally', 'reason', 'cause', 'circumstances', 'the late', 'therefore']
  },
  {
    id: 78,
    kanjiChar: '振',
    onyomi: ['shin シン'],
    kunyomi: ['fu(ru) ふ(る)'],
    displayMeanings: ['shake', 'wave'],
    fullDisplayMeanings: ['shake', 'wave', 'wag', 'swing'],
    meanings: ['shake', 'wave', 'wag', 'swing']
  },
  {
    id: 79,
    kanjiChar: '弁',
    onyomi: ['ben ベン', 'hen ヘン'],
    kunyomi: ['kanmuri かんむり', 'wakima(eru) わきま(える)', 'wa(keru) わ(ける)', 'hanabira はなびら'],
    displayMeanings: ['valve', 'speech'],
    fullDisplayMeanings: ['valve', 'petal', 'braid', 'speech', 'dialect', 'discrimination', 'dispose of', 'distinguish', 'conical cap'],
    meanings: ['valve', 'petal', 'braid', 'speech', 'dialect', 'discrimination', 'dispose of', 'distinguish', 'conical cap']
  },
  {
    id: 80,
    kanjiChar: '就',
    onyomi: ['shuu シュウ', 'ju ジュ'],
    kunyomi: ['tsu(ku) つ(く)'],
    displayMeanings: ['concerning', 'settle'],
    fullDisplayMeanings: ['concerning', 'settle', 'take position', 'depart', 'study', 'per'],
    meanings: ['concerning', 'settle', 'take position', 'depart', 'study', 'per']
  },
  {
    id: 81,
    kanjiChar: '異',
    onyomi: ['i イ'],
    kunyomi: ['koto こと', 'koto(naru) こと(なる)', 'ke け'],
    displayMeanings: ['uncommon', 'different'],
    fullDisplayMeanings: ['uncommon', 'different', 'queerness', 'strangeness', 'wonderful', 'curious', 'unusual'],
    meanings: ['uncommon', 'different', 'queerness', 'strangeness', 'wonderful', 'curious', 'unusual']
  },
  {
    id: 82,
    kanjiChar: '献',
    onyomi: ['ken ケン', 'kon コン'],
    kunyomi: ['tatematsu(ru) たてまつ(る)'],
    displayMeanings: ['offering', 'present'],
    fullDisplayMeanings: ['offering', 'counter for drinks', 'present', 'offer'],
    meanings: ['offering', 'counter for drinks', 'present', 'offer']
  },
  {
    id: 83,
    kanjiChar: '厳',
    onyomi: ['gen ゲン', 'gon ゴン'],
    kunyomi: ['ogoso(ka) おごそ(か)', 'kibi(shii) きび(しい)', 'ika(meshii) いか(めしい)', 'itsukushi いつくし'],
    displayMeanings: ['stern', 'strictness'],
    fullDisplayMeanings: ['stern', 'strictness', 'severity', 'rigidity'],
    meanings: ['stern', 'strictness', 'severity', 'rigidity']
  },
  {
    id: 84,
    kanjiChar: '維',
    onyomi: ['i イ'],
    kunyomi: [],
    displayMeanings: ['fiber', 'tie'],
    fullDisplayMeanings: ['fiber', 'tie', 'rope'],
    meanings: ['fiber', 'tie', 'rope']
  },
  {
    id: 85,
    kanjiChar: '浜',
    onyomi: ['hin ヒン'],
    kunyomi: ['hama はま'],
    displayMeanings: ['seacoast', 'beach'],
    fullDisplayMeanings: ['seacoast', 'beach', 'seashore'],
    meanings: ['seacoast', 'beach', 'seashore']
  },
  {
    id: 86,
    kanjiChar: '遺',
    onyomi: ['i イ', 'yui ユイ'],
    kunyomi: ['noko(su) のこ(す)'],
    displayMeanings: ['bequeath', 'leave behind'],
    fullDisplayMeanings: ['bequeath', 'leave behind', 'reserve'],
    meanings: ['bequeath', 'leave behind', 'reserve']
  },
  {
    id: 87,
    kanjiChar: '塁',
    onyomi: ['rui ルイ', 'rai ライ', 'sui スイ'],
    kunyomi: ['toride とりで'],
    displayMeanings: ['bases', 'fort'],
    fullDisplayMeanings: ['bases', 'fort', 'rampart', 'walls', 'base(ball)'],
    meanings: ['bases', 'fort', 'rampart', 'walls', 'base(ball)']
  },
  {
    id: 88,
    kanjiChar: '邦',
    onyomi: ['hou ホウ'],
    kunyomi: ['kuni くに'],
    displayMeanings: ['home country', 'Japan'],
    fullDisplayMeanings: ['home country', 'country', 'Japan'],
    meanings: ['home country', 'country', 'Japan']
  },
  {
    id: 89,
    kanjiChar: '素',
    onyomi: ['so ソ', 'su ス'],
    kunyomi: ['moto もと'],
    displayMeanings: ['elementary', 'principle'],
    fullDisplayMeanings: ['elementary', 'principle', 'naked', 'uncovered'],
    meanings: ['elementary', 'principle', 'naked', 'uncovered']
  },
  {
    id: 90,
    kanjiChar: '遣',
    onyomi: ['ken ケン'],
    kunyomi: ['tsuka(u) つか(う)', '-tsuka(i) -つか(い)', '-dzuka(i) -づか(い)', 'ya(ru) や(る)'],
    displayMeanings: ['dispatch', 'send'],
    fullDisplayMeanings: ['dispatch', 'despatch', 'send', 'give', 'donate', 'do', 'undertake'],
    meanings: ['dispatch', 'despatch', 'send', 'give', 'donate', 'do', 'undertake']
  },
  {
    id: 91,
    kanjiChar: '抗',
    onyomi: ['kou コウ'],
    kunyomi: ['araga(u) あらが(う)'],
    displayMeanings: ['confront', 'resist'],
    fullDisplayMeanings: ['confront', 'resist', 'defy', 'oppose'],
    meanings: ['confront', 'resist', 'defy', 'oppose']
  },
  {
    id: 92,
    kanjiChar: '模',
    onyomi: ['mo モ', 'bo ボ'],
    kunyomi: [],
    displayMeanings: ['imitation', 'copy'],
    fullDisplayMeanings: ['imitation', 'copy', 'mock'],
    meanings: ['imitation', 'copy', 'mock']
  },
  {
    id: 93,
    kanjiChar: '雄',
    onyomi: ['yuu ユウ'],
    kunyomi: ['o- お-', 'osu おす', 'on おん'],
    displayMeanings: ['masculine', 'male'],
    fullDisplayMeanings: ['masculine', 'male', 'hero', 'leader', 'superiority', 'excellence'],
    meanings: ['masculine', 'male', 'hero', 'leader', 'superiority', 'excellence']
  },
  {
    id: 94,
    kanjiChar: '益',
    onyomi: ['eki エキ', 'yaku ヤク'],
    kunyomi: ['ma(su) ま(す)'],
    displayMeanings: ['benefit', 'gain'],
    fullDisplayMeanings: ['benefit', 'gain', 'profit', 'advantage'],
    meanings: ['benefit', 'gain', 'profit', 'advantage']
  },
  {
    id: 95,
    kanjiChar: '緊',
    onyomi: ['kin キン'],
    kunyomi: ['shi(meru) し(める)'],
    displayMeanings: ['tense', 'solid'],
    fullDisplayMeanings: ['tense', 'solid', 'hard', 'reliable', 'tight'],
    meanings: ['tense', 'solid', 'hard', 'reliable', 'tight']
  },
  {
    id: 96,
    kanjiChar: '標',
    onyomi: ['hyou ヒョウ'],
    kunyomi: ['shirube しるべ', 'shirushi しるし'],
    displayMeanings: ['signpost', 'mark'],
    fullDisplayMeanings: ['signpost', 'seal', 'mark', 'stamp', 'imprint', 'symbol', 'emblem', 'trademark', 'evidence', 'souvenir'],
    meanings: ['signpost', 'seal', 'mark', 'stamp', 'imprint', 'symbol', 'emblem', 'trademark', 'evidence', 'souvenir']
  },
  {
    id: 97,
    kanjiChar: '宣',
    onyomi: ['sen セン'],
    kunyomi: ['notama(u) のたま(う)'],
    displayMeanings: ['proclaim', 'announce'],
    fullDisplayMeanings: ['proclaim', 'say', 'announce'],
    meanings: ['proclaim', 'say', 'announce']
  },
  {
    id: 98,
    kanjiChar: '昭',
    onyomi: ['shou ショウ'],
    kunyomi: [],
    displayMeanings: ['shining', 'bright'],
    fullDisplayMeanings: ['shining', 'bright'],
    meanings: ['shining', 'bright']
  },
  {
    id: 99,
    kanjiChar: '廃',
    onyomi: ['hai ハイ'],
    kunyomi: ['suta(reru) すた(れる)'],
    displayMeanings: ['abolish', 'obsolete'],
    fullDisplayMeanings: ['abolish', 'obsolete', 'cessation', 'discarding', 'abandon'],
    meanings: ['abolish', 'obsolete', 'cessation', 'discarding', 'abandon']
  },
  {
    id: 100,
    kanjiChar: '伊',
    onyomi: ['i イ'],
    kunyomi: ['kare かれ'],
    displayMeanings: ['Italy', 'that one'],
    fullDisplayMeanings: ['Italy', 'that one'],
    meanings: ['Italy', 'that one']
  },
    {
    id: 101,
    kanjiChar: '江',
    onyomi: ['kou コウ'],
    kunyomi: ['e え'],
    displayMeanings: ['creek', 'inlet'],
    fullDisplayMeanings: ['creek', 'inlet', 'bay'],
    meanings: ['creek', 'inlet', 'bay']
  },
  {
    id: 102,
    kanjiChar: '僚',
    onyomi: ['ryou リョウ'],
    kunyomi: [],
    displayMeanings: ['colleague', 'official'],
    fullDisplayMeanings: ['colleague', 'official', 'companion'],
    meanings: ['colleague', 'official', 'companion']
  },
  {
    id: 103,
    kanjiChar: '吉',
    onyomi: ['kichi キチ', 'kitsu キツ'],
    kunyomi: ['yoshi よし'],
    displayMeanings: ['good luck', 'joy'],
    fullDisplayMeanings: ['good luck', 'joy', 'congratulations'],
    meanings: ['good luck', 'joy', 'congratulations']
  },
  {
    id: 104,
    kanjiChar: '盛',
    onyomi: ['sei セイ', 'jou ジョウ'],
    kunyomi: ['mo(ru) も(る)', 'saka(ru) さか(る)'],
    displayMeanings: ['boom', 'prosper'],
    fullDisplayMeanings: ['boom', 'prosper', 'copulate'],
    meanings: ['boom', 'prosper', 'copulate']
  },
  {
    id: 105,
    kanjiChar: '皇',
    onyomi: ['kou コウ', 'ou オウ'],
    kunyomi: [],
    displayMeanings: ['emperor'],
    fullDisplayMeanings: ['emperor'],
    meanings: ['emperor']
  },
  {
    id: 106,
    kanjiChar: '臨',
    onyomi: ['rin リン'],
    kunyomi: ['nozo(mu) のぞ(む)'],
    displayMeanings: ['look to', 'face', 'attend'],
    fullDisplayMeanings: ['look to', 'face', 'meet', 'confront', 'attend', 'call on'],
    meanings: ['look to', 'face', 'meet', 'confront', 'attend', 'call on']
  },
  {
    id: 107,
    kanjiChar: '踏',
    onyomi: ['tou トウ'],
    kunyomi: ['fu(mu) ふ(む)'],
    displayMeanings: ['step', 'trample'],
    fullDisplayMeanings: ['step', 'trample', 'carry through', 'appraise', 'evade payment'],
    meanings: ['step', 'trample', 'carry through', 'appraise', 'evade payment']
  },
  {
    id: 108,
    kanjiChar: '壊',
    onyomi: ['kai カイ', 'e エ'],
    kunyomi: ['kowa(su) こわ(す)', 'yabu(ru) やぶ(る)'],
    displayMeanings: ['demolition', 'break'],
    fullDisplayMeanings: ['demolition', 'break', 'destroy'],
    meanings: ['demolition', 'break', 'destroy']
  },
  {
    id: 109,
    kanjiChar: '債',
    onyomi: ['sai サイ'],
    kunyomi: [],
    displayMeanings: ['bond', 'debt'],
    fullDisplayMeanings: ['bond', 'loan', 'debt'],
    meanings: ['bond', 'loan', 'debt']
  },
  {
    id: 110,
    kanjiChar: '興',
    onyomi: ['kou コウ', 'kyou キョウ'],
    kunyomi: ['oko(su) おこ(る)'],
    displayMeanings: ['entertain', 'revive'],
    fullDisplayMeanings: ['entertain', 'revive', 'retrieve', 'interest', 'pleasure'],
    meanings: ['entertain', 'revive', 'retrieve', 'interest', 'pleasure']
  },
  {
    id: 111,
    kanjiChar: '源',
    onyomi: ['gen ゲン'],
    kunyomi: ['minamoto みなもと'],
    displayMeanings: ['source', 'origin'],
    fullDisplayMeanings: ['source', 'origin'],
    meanings: ['source', 'origin']
  },
  {
    id: 112,
    kanjiChar: '儀',
    onyomi: ['gi ギ'],
    kunyomi: [],
    displayMeanings: ['ceremony', 'rule'],
    fullDisplayMeanings: ['ceremony', 'rule', 'affair', 'case', 'a matter'],
    meanings: ['ceremony', 'rule', 'affair', 'case', 'a matter']
  },
  {
    id: 113,
    kanjiChar: '創',
    onyomi: ['sou ソウ', 'shou ショウ'],
    kunyomi: ['tsuku(ru) つく(る)', 'haji(meru) はじ(める)', 'kizu きず', 'kezu(shikeru) けず(しける)'],
    displayMeanings: ['genesis', 'wound'],
    fullDisplayMeanings: ['genesis', 'wound', 'injury', 'hurt', 'start', 'originate'],
    meanings: ['genesis', 'wound', 'injury', 'hurt', 'start', 'originate']
  },
  {
    id: 114,
    kanjiChar: '障',
    onyomi: ['shou ショウ'],
    kunyomi: ['sawa(ru) さわ(る)'],
    displayMeanings: ['hinder', 'harm'],
    fullDisplayMeanings: ['hinder', 'hurt', 'harm'],
    meanings: ['hinder', 'hurt', 'harm']
  },
  {
    id: 115,
    kanjiChar: '継',
    onyomi: ['kei ケイ'],
    kunyomi: ['tsu(gu) つ(ぐ)', 'mama- まま-'],
    displayMeanings: ['inherit', 'succeed'],
    fullDisplayMeanings: ['inherit', 'succeed', 'continue', 'patch', 'graft (tree)'],
    meanings: ['inherit', 'succeed', 'continue', 'patch', 'graft (tree)']
  },
  {
    id: 116,
    kanjiChar: '筋',
    onyomi: ['kin キン'],
    kunyomi: ['suji すじ'],
    displayMeanings: ['muscle', 'tendon'],
    fullDisplayMeanings: ['muscle', 'sinew', 'tendon', 'fiber', 'plot', 'plan', 'descent'],
    meanings: ['muscle', 'sinew', 'tendon', 'fiber', 'plot', 'plan', 'descent']
  },
  {
    id: 117,
    kanjiChar: '狙',
    onyomi: ['so ソ', 'sho ショ'],
    kunyomi: ['nera(u) ねら(う)'],
    displayMeanings: ['aim at', 'sight'],
    fullDisplayMeanings: ['aim at', 'sight', 'shadow', 'stalk'],
    meanings: ['aim at', 'sight', 'shadow', 'stalk']
  },
  {
    id: 118,
    kanjiChar: '闘',
    onyomi: ['tou トウ'],
    kunyomi: ['tataka(u) たたか(う)', 'araso(u) あらそ(う)'],
    displayMeanings: ['fight', 'war'],
    fullDisplayMeanings: ['fight', 'war'],
    meanings: ['fight', 'war']
  },
  {
    id: 119,
    kanjiChar: '葬',
    onyomi: ['sou ソウ'],
    kunyomi: ['houmu(ru) ほうむ(る)'],
    displayMeanings: ['interment', 'bury'],
    fullDisplayMeanings: ['interment', 'bury', 'shelve'],
    meanings: ['interment', 'bury', 'shelve']
  },
  {
    id: 120,
    kanjiChar: '避',
    onyomi: ['hi ヒ'],
    kunyomi: ['sa(keru) さ(ける)', 'yo(keru) よ(ける)'],
    displayMeanings: ['evade', 'avoid'],
    fullDisplayMeanings: ['evade', 'avoid', 'avert', 'ward off', 'shirk', 'shun'],
    meanings: ['evade', 'avoid', 'avert', 'ward off', 'shirk', 'shun']
  },
  {
    id: 121,
    kanjiChar: '司',
    onyomi: ['shi シ'],
    kunyomi: ['tsukasado(ru) つかさど(る)'],
    displayMeanings: ['director', 'official'],
    fullDisplayMeanings: ['director', 'official', 'govt office', 'rule', 'administer'],
    meanings: ['director', 'official', 'govt office', 'rule', 'administer']
  },
  {
    id: 122,
    kanjiChar: '康',
    onyomi: ['kou コウ'],
    kunyomi: [],
    displayMeanings: ['ease', 'peace'],
    fullDisplayMeanings: ['ease', 'peace'],
    meanings: ['ease', 'peace']
  },
  {
    id: 123,
    kanjiChar: '善',
    onyomi: ['zen ゼン'],
    kunyomi: ['yo(i) よ(い)', 'i(i) い(い)', 'yoshi(tosuru) よし(とする)'],
    displayMeanings: ['virtuous', 'good'],
    fullDisplayMeanings: ['virtuous', 'good', 'goodness'],
    meanings: ['virtuous', 'good', 'goodness']
  },
  {
    id: 124,
    kanjiChar: '逮',
    onyomi: ['tai タイ'],
    kunyomi: [],
    displayMeanings: ['apprehend', 'chase'],
    fullDisplayMeanings: ['apprehend', 'chase'],
    meanings: ['apprehend', 'chase']
  },
  {
    id: 125,
    kanjiChar: '迫',
    onyomi: ['haku ハク'],
    kunyomi: ['sema(aru) せま(る)'],
    displayMeanings: ['urge', 'force'],
    fullDisplayMeanings: ['urge', 'force', 'imminent', 'spur on'],
    meanings: ['urge', 'force', 'imminent', 'spur on']
  },
  {
    id: 126,
    kanjiChar: '惑',
    onyomi: ['waku ワク'],
    kunyomi: ['mado(u) まど(う)'],
    displayMeanings: ['beguile', 'delusion'],
    fullDisplayMeanings: ['beguile', 'delusion', 'perplexity'],
    meanings: ['beguile', 'delusion', 'perplexity']
  },
  {
    id: 127,
    kanjiChar: '崩',
    onyomi: ['hou ホウ'],
    kunyomi: ['kuzu(reru) くず(れる)', '-kuzu(re) -くず(れ)'],
    displayMeanings: ['crumble', 'demolish'],
    fullDisplayMeanings: ['crumble', 'die', 'demolish', 'level'],
    meanings: ['crumble', 'die', 'demolish', 'level']
  },
  {
    id: 128,
    kanjiChar: '紀',
    onyomi: ['ki キ'],
    kunyomi: [],
    displayMeanings: ['chronicle', 'history'],
    fullDisplayMeanings: ['chronicle', 'account', 'narrative', 'history', 'annals', 'geologic period'],
    meanings: ['chronicle', 'account', 'narrative', 'history', 'annals', 'geologic period']
  },
  {
    id: 129,
    kanjiChar: '聴',
    onyomi: ['chou チョウ', 'tei テイ'],
    kunyomi: ['ki(ku) き(く)', 'yuru(su) ゆる(す)'],
    displayMeanings: ['listen', 'inquiry'],
    fullDisplayMeanings: ['listen', 'headstrong', 'naughty', 'careful inquiry'],
    meanings: ['listen', 'headstrong', 'naughty', 'careful inquiry']
  },
  {
    id: 130,
    kanjiChar: '脱',
    onyomi: ['datsu ダツ'],
    kunyomi: ['nu(gu) ぬ(ぐ)'],
    displayMeanings: ['undress', 'escape'],
    fullDisplayMeanings: ['undress', 'removing', 'escape from', 'get rid of', 'be left out', 'take off'],
    meanings: ['undress', 'removing', 'escape from', 'get rid of', 'be left out', 'take off']
  },
  {
    id: 131,
    kanjiChar: '級',
    onyomi: ['kyuu キュウ'],
    kunyomi: [],
    displayMeanings: ['class', 'rank'],
    fullDisplayMeanings: ['class', 'rank', 'grade'],
    meanings: ['class', 'rank', 'grade']
  },
  {
    id: 132,
    kanjiChar: '博',
    onyomi: ['haku ハク', 'baku バク'],
    kunyomi: [],
    displayMeanings: ['Dr.', 'esteem'],
    fullDisplayMeanings: ['Dr.', 'command', 'esteem', 'Ph.D.'],
    meanings: ['Dr.', 'command', 'esteem', 'Ph.D.']
  },
  {
    id: 133,
    kanjiChar: '締',
    onyomi: ['tei テイ'],
    kunyomi: ['shi(maru) し(まる)', '-shi(me) -し(め)', '-ji(me) -じ(め)'],
    displayMeanings: ['tighten', 'tie'],
    fullDisplayMeanings: ['tighten', 'tie', 'shut', 'lock', 'fasten'],
    meanings: ['tighten', 'tie', 'shut', 'lock', 'fasten']
  },
  {
    id: 134,
    kanjiChar: '救',
    onyomi: ['kyuu キュウ'],
    kunyomi: ['suku(u) すく(う)'],
    displayMeanings: ['salvation', 'save'],
    fullDisplayMeanings: ['salvation', 'save', 'help', 'rescue', 'reclaim'],
    meanings: ['salvation', 'save', 'help', 'rescue', 'reclaim']
  },
  {
    id: 135,
    kanjiChar: '執',
    onyomi: ['shitsu シツ', 'shuu シュウ'],
    kunyomi: ['to(ru) と(る)'],
    displayMeanings: ['tenacious', 'grasp'],
    fullDisplayMeanings: ['tenacious', 'take hold', 'grasp', 'take to heart'],
    meanings: ['tenacious', 'take hold', 'grasp', 'take to heart']
  },
  {
    id: 136,
    kanjiChar: '房',
    onyomi: ['bou ボウ'],
    kunyomi: ['fusa ふさ'],
    displayMeanings: ['tassel', 'bunch'],
    fullDisplayMeanings: ['tassel', 'tuft', 'fringe', 'bunch', 'lock (hair)', 'segment (orange)', 'house', 'room'],
    meanings: ['tassel', 'tuft', 'fringe', 'bunch', 'lock (hair)', 'segment (orange)', 'house', 'room']
  },
  {
    id: 137,
    kanjiChar: '撤',
    onyomi: ['tetsu テツ'],
    kunyomi: [],
    displayMeanings: ['remove', 'withdraw'],
    fullDisplayMeanings: ['remove', 'withdraw', 'disarm', 'dismantle', 'reject', 'exclude'],
    meanings: ['remove', 'withdraw', 'disarm', 'dismantle', 'reject', 'exclude']
  },
  {
    id: 138,
    kanjiChar: '削',
    onyomi: ['saku サク'],
    kunyomi: ['kezu(ru) けず(る)', 'hatsu(ru) はつ(る)', 'so(gu) そ(ぐ)'],
    displayMeanings: ['plane', 'sharpen'],
    fullDisplayMeanings: ['plane', 'sharpen', 'whittle', 'pare', 'shave'],
    meanings: ['plane', 'sharpen', 'whittle', 'pare', 'shave']
  },
  {
    id: 139,
    kanjiChar: '密',
    onyomi: ['mitsu ミツ'],
    kunyomi: ['hiso(ka) ひそ(か)'],
    displayMeanings: ['secrecy', 'density'],
    fullDisplayMeanings: ['secrecy', 'density (pop)', 'minuteness', 'carefulness'],
    meanings: ['secrecy', 'density (pop)', 'minuteness', 'carefulness']
  },
  {
    id: 140,
    kanjiChar: '措',
    onyomi: ['so ソ'],
    kunyomi: ['o(ku) お(く)'],
    displayMeanings: ['set aside', 'suspend'],
    fullDisplayMeanings: ['set aside', 'give up', 'suspend', 'discontinue', 'lay aside', 'except'],
    meanings: ['set aside', 'give up', 'suspend', 'discontinue', 'lay aside', 'except']
  },
  {
    id: 141,
    kanjiChar: '志',
    onyomi: ['shi シ'],
    kunyomi: ['kokoroza(su) こころざ(す)', 'kokorozashi こころざし'],
    displayMeanings: ['intention', 'plan'],
    fullDisplayMeanings: ['intention', 'plan', 'resolve', 'aspire', 'motive', 'hopes', 'shilling'],
    meanings: ['intention', 'plan', 'resolve', 'aspire', 'motive', 'hopes', 'shilling']
  },
  {
    id: 142,
    kanjiChar: '載',
    onyomi: ['sai サイ'],
    kunyomi: ['no(seru) の(せる)'],
    displayMeanings: ['ride', 'board'],
    fullDisplayMeanings: ['ride', 'board', 'get on', 'place', 'spread', '10**44', 'record', 'publish'],
    meanings: ['ride', 'board', 'get on', 'place', 'spread', '10**44', 'record', 'publish']
  },
  {
    id: 143,
    kanjiChar: '陣',
    onyomi: ['jin ジン'],
    kunyomi: [],
    displayMeanings: ['camp', 'battle array'],
    fullDisplayMeanings: ['camp', 'battle array', 'ranks', 'position', 'sudden', 'brief time'],
    meanings: ['camp', 'battle array', 'ranks', 'position', 'sudden', 'brief time']
  },
  {
    id: 144,
    kanjiChar: '我',
    onyomi: ['ga ガ'],
    kunyomi: ['ware われ', 'wa わ', 'wa(ga)- わ(が)-', 'waga- わが-'],
    displayMeanings: ['ego', 'I'],
    fullDisplayMeanings: ['ego', 'I', 'selfish', 'our', 'oneself'],
    meanings: ['ego', 'I', 'selfish', 'our', 'oneself']
  },
  {
    id: 145,
    kanjiChar: '為',
    onyomi: ['i イ'],
    kunyomi: ['tame ため', 'na(ru) な(る)', 'su(ru) す(る)', 'tari たり', 'tsuku(ru) つく(る)', 'nari なり'],
    displayMeanings: ['do', 'change'],
    fullDisplayMeanings: ['do', 'change', 'make', 'benefit', 'welfare', 'be of use', 'reach to', 'try', 'practice', 'cost', 'serve as', 'good'],
    meanings: ['do', 'change', 'make', 'benefit', 'welfare', 'be of use', 'reach to', 'try', 'practice', 'cost', 'serve as', 'good']
  },
  {
    id: 146,
    kanjiChar: '抑',
    onyomi: ['yoku ヨク'],
    kunyomi: ['osa(eru) おさ(える)'],
    displayMeanings: ['repress', 'push'],
    fullDisplayMeanings: ['repress', 'well', 'now', 'in the first place', 'push', 'shove', 'press', 'seal', 'do in spite of'],
    meanings: ['repress', 'well', 'now', 'in the first place', 'push', 'shove', 'press', 'seal', 'do in spite of']
  },
  {
    id: 147,
    kanjiChar: '幕',
    onyomi: ['maku マク', 'baku バク'],
    kunyomi: ['tobari とばり'],
    displayMeanings: ['curtain', 'act'],
    fullDisplayMeanings: ['curtain', 'bunting', 'act of play'],
    meanings: ['curtain', 'bunting', 'act of play']
  },
  {
    id: 148,
    kanjiChar: '染',
    onyomi: ['sen セン'],
    kunyomi: ['so(meru) そ(める)', 'shi(meru) し(みる)'],
    displayMeanings: ['dye', 'color'],
    fullDisplayMeanings: ['dye', 'color', 'paint', 'stain', 'print'],
    meanings: ['dye', 'color', 'paint', 'stain', 'print']
  },
  {
    id: 149,
    kanjiChar: '奈',
    onyomi: ['na ナ', 'nai ナイ', 'dai ダイ'],
    kunyomi: ['ikan いかん', 'karanashi からなし'],
    displayMeanings: ['Nara', 'what?'],
    fullDisplayMeanings: ['Nara', 'what?'],
    meanings: ['Nara', 'what?']
  },
  {
    id: 150,
    kanjiChar: '傷',
    onyomi: ['shou ショウ'],
    kunyomi: ['kizu きず', 'ita(mu) いた(む)'],
    displayMeanings: ['wound', 'hurt'],
    fullDisplayMeanings: ['wound', 'hurt', 'injure', 'impair', 'pain', 'injury', 'cut', 'gash', 'scar', 'weak point'],
    meanings: ['wound', 'hurt', 'injure', 'impair', 'pain', 'injury', 'cut', 'gash', 'scar', 'weak point']
  },
  {
    id: 151,
    kanjiChar: '択',
    onyomi: ['taku タク'],
    kunyomi: ['era(bu) えら(ぶ)'],
    displayMeanings: ['choose', 'select'],
    fullDisplayMeanings: ['choose', 'select', 'elect', 'prefer'],
    meanings: ['choose', 'select', 'elect', 'prefer']
  },
  {
    id: 152,
    kanjiChar: '秀',
    onyomi: ['shuu シュウ'],
    kunyomi: ['hii(deru) ひい(でる)'],
    displayMeanings: ['excel', 'excellence'],
    fullDisplayMeanings: ['excel', 'excellence', 'beauty', 'surpass'],
    meanings: ['excel', 'excellence', 'beauty', 'surpass']
  },
  {
    id: 153,
    kanjiChar: '徴',
    onyomi: ['chou チョウ', 'chi チ'],
    kunyomi: ['shirushi しるし'],
    displayMeanings: ['indications', 'sign'],
    fullDisplayMeanings: ['indications', 'sign', 'omen', 'symptom', 'collect', 'seek', 'refer to', 'question'],
    meanings: ['indications', 'sign', 'omen', 'symptom', 'collect', 'seek', 'refer to', 'question']
  },
  {
    id: 154,
    kanjiChar: '弾',
    onyomi: ['dan ダン', 'tan タン'],
    kunyomi: ['hi(ku) ひ(く)', '-hi(ki) -ひ(き)', 'hazu(mu) はず(む)', 'tama たま', 'haji(ku) はじ(く)'],
    displayMeanings: ['bullet', 'twang'],
    fullDisplayMeanings: ['bullet', 'twang', 'flip', 'snap'],
    meanings: ['bullet', 'twang', 'flip', 'snap']
  },
  {
    id: 155,
    kanjiChar: '償',
    onyomi: ['shou ショウ'],
    kunyomi: ['tsuguna(u) つぐな(う)'],
    displayMeanings: ['reparation', 'make up for'],
    fullDisplayMeanings: ['reparation', 'make up for', 'recompense', 'redeem'],
    meanings: ['reparation', 'make up for', 'recompense', 'redeem']
  },
  {
    id: 156,
    kanjiChar: '功',
    onyomi: ['kou コウ', 'ko ク'],
    kunyomi: ['isao いさお'],
    displayMeanings: ['achievement', 'merits'],
    fullDisplayMeanings: ['achievement', 'merits', 'success', 'honor', 'credit'],
    meanings: ['achievement', 'merits', 'success', 'honor', 'credit']
  },
  {
    id: 157,
    kanjiChar: '拠',
    onyomi: ['kyo キョ', 'ko コ'],
    kunyomi: ['yo(ru) よ(る)'],
    displayMeanings: ['foothold', 'based on'],
    fullDisplayMeanings: ['foothold', 'based on', 'follow', 'therefore'],
    meanings: ['foothold', 'based on', 'follow', 'therefore']
  },
  {
    id: 158,
    kanjiChar: '秘',
    onyomi: ['hi ヒ'],
    kunyomi: ['hi(meru) ひ(める)', 'hiso(ka) ひそ(か)', 'kaku(su) かく(す)'],
    displayMeanings: ['secret', 'conceal'],
    fullDisplayMeanings: ['secret', 'conceal'],
    meanings: ['secret', 'conceal']
  },
  {
    id: 159,
    kanjiChar: '拒',
    onyomi: ['kyo キョ', 'go ゴ'],
    kunyomi: ['koba(mu) こば(む)'],
    displayMeanings: ['repel', 'refuse'],
    fullDisplayMeanings: ['repel', 'refuse', 'reject', 'decline'],
    meanings: ['repel', 'refuse', 'reject', 'decline']
  },
  {
    id: 160,
    kanjiChar: '刑',
    onyomi: ['kei ケイ'],
    kunyomi: [],
    displayMeanings: ['punish', 'penalty'],
    fullDisplayMeanings: ['punish', 'penalty', 'sentence', 'punishment'],
    meanings: ['punish', 'penalty', 'sentence', 'punishment']
  },
  {
    id: 161,
    kanjiChar: '塚',
    onyomi: ['chou チョウ'],
    kunyomi: ['tsuka つか', '-dzuka -づか'],
    displayMeanings: ['hillock', 'mound'],
    fullDisplayMeanings: ['hillock', 'mound'],
    meanings: ['hillock', 'mound']
  },
  {
    id: 162,
    kanjiChar: '致',
    onyomi: ['chi チ'],
    kunyomi: ['ita(su) いた(す)'],
    displayMeanings: ['do', 'send'],
    fullDisplayMeanings: ['doth', 'do', 'send', 'forward', 'cause', 'exert', 'incur', 'engage'],
    meanings: ['doth', 'do', 'send', 'forward', 'cause', 'exert', 'incur', 'engage']
  },
  {
    id: 163,
    kanjiChar: '繰',
    onyomi: ['sou ソウ'],
    kunyomi: ['ku(ru) く(る)'],
    displayMeanings: ['winding', 'reel'],
    fullDisplayMeanings: ['winding', 'reel', 'spin', 'turn (pages)', 'look up', 'refer to'],
    meanings: ['winding', 'reel', 'spin', 'turn (pages)', 'look up', 'refer to']
  },
  {
    id: 164,
    kanjiChar: '尾',
    onyomi: ['bi ビ'],
    kunyomi: ['o お'],
    displayMeanings: ['tail', 'end'],
    fullDisplayMeanings: ['tail', 'end', 'counter for fish', 'lower slope of mountain'],
    meanings: ['tail', 'end', 'counter for fish', 'lower slope of mountain']
  },
  {
    id: 165,
    kanjiChar: '描',
    onyomi: ['byou ビョウ'],
    kunyomi: ['ega(ku) えが(く)', 'ka(ku) か(く)'],
    displayMeanings: ['sketch', 'draw'],
    fullDisplayMeanings: ['sketch', 'compose', 'write', 'draw', 'paint'],
    meanings: ['sketch', 'compose', 'write', 'draw', 'paint']
  },
  {
    id: 166,
    kanjiChar: '鈴',
    onyomi: ['rei レイ', 'rin リン'],
    kunyomi: ['suzu すず'],
    displayMeanings: ['small bell', 'buzzer'],
    fullDisplayMeanings: ['small bell', 'buzzer'],
    meanings: ['small bell', 'buzzer']
  },
  {
    id: 167,
    kanjiChar: '盤',
    onyomi: ['ban バン'],
    kunyomi: [],
    displayMeanings: ['tray', 'board'],
    fullDisplayMeanings: ['tray', 'shallow bowl', 'platter', 'tub', 'board', 'phonograph record'],
    meanings: ['tray', 'shallow bowl', 'platter', 'tub', 'board', 'phonograph record']
  },
  {
    id: 168,
    kanjiChar: '項',
    onyomi: ['kou コウ'],
    kunyomi: ['unaji うなじ'],
    displayMeanings: ['paragraph', 'clause'],
    fullDisplayMeanings: ['paragraph', 'nape of neck', 'clause', 'item', 'term (expression)'],
    meanings: ['paragraph', 'nape of neck', 'clause', 'item', 'term (expression)']
  },
  {
    id: 169,
    kanjiChar: '喪',
    onyomi: ['sou ソウ'],
    kunyomi: ['mo も'],
    displayMeanings: ['miss', 'mourning'],
    fullDisplayMeanings: ['miss', 'mourning'],
    meanings: ['miss', 'mourning']
  },
  {
    id: 170,
    kanjiChar: '伴',
    onyomi: ['han ハン', 'ban バン'],
    kunyomi: ['tomona(u) ともな(う)'],
    displayMeanings: ['consort', 'accompany'],
    fullDisplayMeanings: ['consort', 'accompany', 'bring with', 'companion'],
    meanings: ['consort', 'accompany', 'bring with', 'companion']
  },
  {
    id: 171,
    kanjiChar: '養',
    onyomi: ['you ヨウ', 'ryou リョウ'],
    kunyomi: ['yashina(u) やしな(う)'],
    displayMeanings: ['foster', 'bring up'],
    fullDisplayMeanings: ['foster', 'bring up', 'rear', 'develop', 'nurture'],
    meanings: ['foster', 'bring up', 'rear', 'develop', 'nurture']
  },
  {
    id: 172,
    kanjiChar: '懸',
    onyomi: ['ken ケン', 'ke ケ'],
    kunyomi: ['ka(keru) か(ける)'],
    displayMeanings: ['state of suspension', 'hang'],
    fullDisplayMeanings: ['state of suspension', 'hang', 'depend', 'consult', 'distant', 'far apart'],
    meanings: ['state of suspension', 'hang', 'depend', 'consult', 'distant', 'far apart']
  },
  {
    id: 173,
    kanjiChar: '街',
    onyomi: ['gai ガイ', 'kai カイ'],
    kunyomi: ['machi まち'],
    displayMeanings: ['boulevard', 'street'],
    fullDisplayMeanings: ['boulevard', 'street', 'town'],
    meanings: ['boulevard', 'street', 'town']
  },
  {
    id: 174,
    kanjiChar: '契',
    onyomi: ['kei ケイ'],
    kunyomi: ['chigi(ru) ちぎ(る)'],
    displayMeanings: ['pledge', 'promise'],
    fullDisplayMeanings: ['pledge', 'promise', 'vow'],
    meanings: ['pledge', 'promise', 'vow']
  },
  {
    id: 175,
    kanjiChar: '掲',
    onyomi: ['kei ケイ'],
    kunyomi: ['kaka(geru) かか(げる)'],
    displayMeanings: ['put up', 'display'],
    fullDisplayMeanings: ['put up (a notice)', 'put up', 'hoist', 'display', 'hang out', 'publish', 'describe'],
    meanings: ['put up (a notice)', 'put up', 'hoist', 'display', 'hang out', 'publish', 'describe']
  },
  {
    id: 176,
    kanjiChar: '躍',
    onyomi: ['yaku ヤク'],
    kunyomi: ['odo(ru) おど(る)'],
    displayMeanings: ['leap', 'dance'],
    fullDisplayMeanings: ['leap', 'dance', 'skip'],
    meanings: ['leap', 'dance', 'skip']
  },
  {
    id: 177,
    kanjiChar: '棄',
    onyomi: ['ki キ'],
    kunyomi: ['su(teru) す(てる)'],
    displayMeanings: ['abandon', 'discard'],
    fullDisplayMeanings: ['abandon', 'throw away', 'discard', 'resign', 'reject', 'sacrifice'],
    meanings: ['abandon', 'throw away', 'discard', 'resign', 'reject', 'sacrifice']
  },
  {
    id: 178,
    kanjiChar: '邸',
    onyomi: ['tei テイ'],
    kunyomi: ['yashiki やしき'],
    displayMeanings: ['residence', 'mansion'],
    fullDisplayMeanings: ['residence', 'mansion'],
    meanings: ['residence', 'mansion']
  },
  {
    id: 179,
    kanjiChar: '縮',
    onyomi: ['shuku シュク'],
    kunyomi: ['chidji(mu) ちぢ(む)'],
    displayMeanings: ['shrink', 'contract'],
    fullDisplayMeanings: ['shrink', 'contract', 'shrivel', 'wrinkle', 'reduce'],
    meanings: ['shrink', 'contract', 'shrivel', 'wrinkle', 'reduce']
  },
  {
    id: 180,
    kanjiChar: '還',
    onyomi: ['kan カン'],
    kunyomi: ['kae(ru) かえ(る)'],
    displayMeanings: ['send back', 'return'],
    fullDisplayMeanings: ['send back', 'return'],
    meanings: ['send back', 'return']
  },
  {
    id: 181,
    kanjiChar: '属',
    onyomi: ['zoku ゾク', 'shoku ショク'],
    kunyomi: ['sakan さかん', 'tsuku つく', 'yakara やから'],
    displayMeanings: ['belong', 'genus'],
    fullDisplayMeanings: ['belong', 'genus', 'subordinate official', 'affiliated'],
    meanings: ['belong', 'genus', 'subordinate official', 'affiliated']
  },
  {
    id: 182,
    kanjiChar: '慮',
    onyomi: ['ryo リョ'],
    kunyomi: ['omonpaku(ru) おもんぱく(る)'],
    displayMeanings: ['prudence', 'thought'],
    fullDisplayMeanings: ['prudence', 'thought', 'concern', 'consider', 'deliberate', 'fear'],
    meanings: ['prudence', 'thought', 'concern', 'consider', 'deliberate', 'fear']
  },
  {
    id: 183,
    kanjiChar: '枠',
    onyomi: ['waku わく'],
    kunyomi: [],
    displayMeanings: ['frame', 'framework'],
    fullDisplayMeanings: ['frame', 'framework', 'spindle', 'spool', 'bounding-box'],
    meanings: ['frame', 'framework', 'spindle', 'spool', 'bounding-box']
  },
  {
    id: 184,
    kanjiChar: '恵',
    onyomi: ['kei ケイ', 'e エ'],
    kunyomi: ['megu(mu) めぐ(む)'],
    displayMeanings: ['favor', 'blessing'],
    fullDisplayMeanings: ['favor', 'blessing', 'grace', 'kindness'],
    meanings: ['favor', 'blessing', 'grace', 'kindness']
  },
  {
    id: 185,
    kanjiChar: '露',
    onyomi: ['ro ロ', 'rou ロウ'],
    kunyomi: ['tsuyu つゆ'],
    displayMeanings: ['dew', 'expose'],
    fullDisplayMeanings: ['dew', 'tears', 'expose', 'Russia'],
    meanings: ['dew', 'tears', 'expose', 'Russia']
  },
  {
    id: 186,
    kanjiChar: '沖',
    onyomi: ['chuu チュウ'],
    kunyomi: ['oki おき', 'okitsu おきつ', 'chuu(suru) ちゅう(する)', 'waku わく'],
    displayMeanings: ['open sea', 'offing'],
    fullDisplayMeanings: ['open sea', 'offing', 'rise high into sky'],
    meanings: ['open sea', 'offing', 'rise high into sky']
  },
  {
    id: 187,
    kanjiChar: '緩',
    onyomi: ['kan カン'],
    kunyomi: ['yuru(i) ゆる(い)'],
    displayMeanings: ['slacken', 'loosen'],
    fullDisplayMeanings: ['slacken', 'loosen', 'relax', 'lessen', 'be moderate', 'ease'],
    meanings: ['slacken', 'loosen', 'relax', 'lessen', 'be moderate', 'ease']
  },
  {
    id: 188,
    kanjiChar: '節',
    onyomi: ['setsu セツ', 'sechi セチ'],
    kunyomi: ['fushi ふし', '-bushi -ぶし', 'notto のっと'],
    displayMeanings: ['node', 'season'],
    fullDisplayMeanings: ['node', 'season', 'period', 'occasion', 'verse', 'clause', 'stanza', 'honor', 'joint', 'knuckle', 'knob', 'knot', 'tune', 'melody'],
    meanings: ['node', 'season', 'period', 'occasion', 'verse', 'clause', 'stanza', 'honor', 'joint', 'knuckle', 'knob', 'knot', 'tune', 'melody']
  },
  {
    id: 189,
    kanjiChar: '需',
    onyomi: ['ju ジュ'],
    kunyomi: [],
    displayMeanings: ['demand', 'request'],
    fullDisplayMeanings: ['demand', 'request', 'need'],
    meanings: ['demand', 'request', 'need']
  },
  {
    id: 190,
    kanjiChar: '射',
    onyomi: ['sha シャ'],
    kunyomi: ['i(ru) い(る)', 'sa(su) さ(す)', 'u(tsu) う(つ)'],
    displayMeanings: ['shoot', 'archery'],
    fullDisplayMeanings: ['shoot', 'shine into', 'onto', 'archery'],
    meanings: ['shoot', 'shine into', 'onto', 'archery']
  },
  {
    id: 191,
    kanjiChar: '購',
    onyomi: ['kou コウ'],
    kunyomi: [],
    displayMeanings: ['subscription', 'buy'],
    fullDisplayMeanings: ['subscription', 'buy'],
    meanings: ['subscription', 'buy']
  },
  {
    id: 192,
    kanjiChar: '揮',
    onyomi: ['ki キ'],
    kunyomi: ['furu(u) ふる(う)'],
    displayMeanings: ['brandish', 'wave'],
    fullDisplayMeanings: ['brandish', 'wave', 'wag', 'swing', 'shake'],
    meanings: ['brandish', 'wave', 'wag', 'swing', 'shake']
  },
  {
    id: 193,
    kanjiChar: '充',
    onyomi: ['juu ジュウ'],
    kunyomi: ['a(teru) あ(てる)', 'mi(tasu) み(たす)'],
    displayMeanings: ['allot', 'fill'],
    fullDisplayMeanings: ['allot', 'fill'],
    meanings: ['allot', 'fill']
  },
  {
    id: 194,
    kanjiChar: '貢',
    onyomi: ['kou コウ', 'ku ク'],
    kunyomi: ['mitsu(gu) みつ(ぐ)'],
    displayMeanings: ['tribute', 'support'],
    fullDisplayMeanings: ['tribute', 'support', 'finance'],
    meanings: ['tribute', 'support', 'finance']
  },
  {
    id: 195,
    kanjiChar: '鹿',
    onyomi: ['roku ロク'],
    kunyomi: ['shika しか', 'ka か'],
    displayMeanings: ['deer'],
    fullDisplayMeanings: ['deer'],
    meanings: ['deer']
  },
  {
    id: 196,
    kanjiChar: '却',
    onyomi: ['kyaku キャク'],
    kunyomi: ['kae(tte) かえ(って)', 'shirizo(ku) しりぞ(く)'],
    displayMeanings: ['instead', 'withdraw'],
    fullDisplayMeanings: ['instead', 'on the contrary', 'rather', 'step back', 'withdraw', 'retreat'],
    meanings: ['instead', 'on the contrary', 'rather', 'step back', 'withdraw', 'retreat']
  },
  {
    id: 197,
    kanjiChar: '端',
    onyomi: ['tan タン'],
    kunyomi: ['hashi はし', 'ha は', 'hata はた', '-bata -ばた', 'hana はな'],
    displayMeanings: ['edge', 'origin'],
    fullDisplayMeanings: ['edge', 'origin', 'end', 'point', 'border', 'verge', 'cape'],
    meanings: ['edge', 'origin', 'end', 'point', 'border', 'verge', 'cape']
  },
  {
    id: 198,
    kanjiChar: '賃',
    onyomi: ['chin チン'],
    kunyomi: [],
    displayMeanings: ['fare', 'wages'],
    fullDisplayMeanings: ['fare', 'fee', 'hire', 'rent', 'wages', 'charge'],
    meanings: ['fare', 'fee', 'hire', 'rent', 'wages', 'charge']
  },
  {
    id: 199,
    kanjiChar: '獲',
    onyomi: ['kaku カク'],
    kunyomi: ['e(ru) え(る)'],
    displayMeanings: ['seize', 'acquire'],
    fullDisplayMeanings: ['seize', 'get', 'find', 'earn', 'acquire', 'can', 'may', 'able to'],
    meanings: ['seize', 'get', 'find', 'earn', 'acquire', 'can', 'may', 'able to']
  },
  {
    id: 200,
    kanjiChar: '郡',
    onyomi: ['gun グン'],
    kunyomi: ['koori こおり'],
    displayMeanings: ['county', 'district'],
    fullDisplayMeanings: ['county', 'district'],
    meanings: ['county', 'district']
  },
  {
    id: 201,
    kanjiChar: '併',
    onyomi: ['hei ヘイ'],
    kunyomi: ['awa(seru) あわ(せる)'],
    displayMeanings: ['join', 'unite'],
    fullDisplayMeanings: ['join', 'get together', 'unite', 'collective'],
    meanings: ['join', 'get together', 'unite', 'collective']
  },
  {
    id: 202,
    kanjiChar: '徹',
    onyomi: ['tetsu テツ'],
    kunyomi: [],
    displayMeanings: ['penetrate', 'clear'],
    fullDisplayMeanings: ['penetrate', 'clear', 'pierce', 'strike home', 'sit up (all night)'],
    meanings: ['penetrate', 'clear', 'pierce', 'strike home', 'sit up (all night)']
  },
  {
    id: 203,
    kanjiChar: '貴',
    onyomi: ['ki キ'],
    kunyomi: ['tatto(i) たっと(い)', 'touto(i) とうと(い)'],
    displayMeanings: ['precious', 'value'],
    fullDisplayMeanings: ['precious', 'value', 'prize', 'esteem', 'honor'],
    meanings: ['precious', 'value', 'prize', 'esteem', 'honor']
  },
  {
    id: 204,
    kanjiChar: '埼',
    onyomi: ['ki キ'],
    kunyomi: ['saki さき', 'sai さい', 'misaki みさき'],
    displayMeanings: ['cape', 'spit'],
    fullDisplayMeanings: ['cape', 'spit', 'promontory'],
    meanings: ['cape', 'spit', 'promontory']
  },
  {
    id: 205,
    kanjiChar: '衝',
    onyomi: ['shou ショウ'],
    kunyomi: ['tsu(ku) つ(く)'],
    displayMeanings: ['collide', 'thrust'],
    fullDisplayMeanings: ['collide', 'brunt', 'highway', 'opposition (astronomy)', 'thrust', 'pierce', 'stab', 'prick'],
    meanings: ['collide', 'brunt', 'highway', 'opposition (astronomy)', 'thrust', 'pierce', 'stab', 'prick']
  },
  {
    id: 206,
    kanjiChar: '焦',
    onyomi: ['shou ショウ'],
    kunyomi: ['ko(geru) こ(げる)', 'ase(ru) あせ(る)', 'ji(reru) じ(れる)'],
    displayMeanings: ['char', 'burn'],
    fullDisplayMeanings: ['char', 'hurry', 'impatient', 'irritate', 'burn', 'scorch', 'singe'],
    meanings: ['char', 'hurry', 'impatient', 'irritate', 'burn', 'scorch', 'singe']
  },
  {
    id: 207,
    kanjiChar: '奪',
    onyomi: ['datsu ダツ'],
    kunyomi: ['uba(u) うば(う)'],
    displayMeanings: ['rob', 'take by force'],
    fullDisplayMeanings: ['rob', 'take by force', 'snatch away', 'dispossess', 'plunder', 'usurp'],
    meanings: ['rob', 'take by force', 'snatch away', 'dispossess', 'plunder', 'usurp']
  },
  {
    id: 208,
    kanjiChar: '災',
    onyomi: ['sai サイ'],
    kunyomi: ['wazawa(i) わざわ(い)'],
    displayMeanings: ['disaster', 'calamity'],
    fullDisplayMeanings: ['disaster', 'calamity', 'woe', 'curse', 'evil'],
    meanings: ['disaster', 'calamity', 'woe', 'curse', 'evil']
  },
  {
    id: 209,
    kanjiChar: '浦',
    onyomi: ['ho ホ'],
    kunyomi: ['ura うら'],
    displayMeanings: ['bay', 'creek'],
    fullDisplayMeanings: ['bay', 'creek', 'inlet', 'gulf', 'beach', 'seacoast'],
    meanings: ['bay', 'creek', 'inlet', 'gulf', 'beach', 'seacoast']
  },
  {
    id: 210,
    kanjiChar: '析',
    onyomi: ['seki セキ'],
    kunyomi: [],
    displayMeanings: ['chop', 'analyze'],
    fullDisplayMeanings: ['chop', 'divide', 'tear', 'analyze'],
    meanings: ['chop', 'divide', 'tear', 'analyze']
  },
  {
    id: 211,
    kanjiChar: '譲',
    onyomi: ['jou ジョウ'],
    kunyomi: ['yuzu(ru) ゆず(る)'],
    displayMeanings: ['defer', 'transfer'],
    fullDisplayMeanings: ['defer', 'turnover', 'transfer', 'convey'],
    meanings: ['defer', 'turnover', 'transfer', 'convey']
  },
  {
    id: 212,
    kanjiChar: '称',
    onyomi: ['shou ショウ'],
    kunyomi: ['tata(eru) たた(える)', 'tona(eru) とな(える)', 'a(geru) あ(げる)', 'kana(u) かな(う)', 'haka(ri) はか(り)', 'home(ru) ほめ(る)'],
    displayMeanings: ['appellation', 'praise'],
    fullDisplayMeanings: ['appellation', 'praise', 'admire', 'name', 'title', 'fame'],
    meanings: ['appellation', 'praise', 'admire', 'name', 'title', 'fame']
  },
  {
    id: 213,
    kanjiChar: '納',
    onyomi: ['nou ノウ', 'natsu ナッ', 'na ナ', 'nan ナン', 'tou トウ'],
    kunyomi: ['osa(meru) おさ(める)', '-osa(meru) -おさ(める)'],
    displayMeanings: ['settlement', 'obtain'],
    fullDisplayMeanings: ['settlement', 'obtain', 'reap', 'pay', 'supply', 'store'],
    meanings: ['settlement', 'obtain', 'reap', 'pay', 'supply', 'store']
  },
  {
    id: 214,
    kanjiChar: '樹',
    onyomi: ['ju ジュ'],
    kunyomi: ['ki き'],
    displayMeanings: ['timber', 'trees'],
    fullDisplayMeanings: ['timber', 'trees', 'wood', 'establish', 'set up'],
    meanings: ['timber', 'trees', 'wood', 'establish', 'set up']
  },
  {
    id: 215,
    kanjiChar: '挑',
    onyomi: ['chou チョウ'],
    kunyomi: ['ido(mu) いど(む)'],
    displayMeanings: ['challenge', 'contend'],
    fullDisplayMeanings: ['challenge', 'contend for', 'make love to'],
    meanings: ['challenge', 'contend for', 'make love to']
  },
  {
    id: 216,
    kanjiChar: '誘',
    onyomi: ['yuu ユウ'],
    kunyomi: ['saso(u) さそ(う)', 'izana(u) いざな(う)'],
    displayMeanings: ['entice', 'lead'],
    fullDisplayMeanings: ['entice', 'lead', 'tempt', 'invite', 'ask', 'call for', 'seduce', 'allure'],
    meanings: ['entice', 'lead', 'tempt', 'invite', 'ask', 'call for', 'seduce', 'allure']
  },
  {
    id: 217,
    kanjiChar: '紛',
    onyomi: ['fun フン'],
    kunyomi: ['magi(reru) まぎ(れる)', '-magi(re) -まぎ(れ)'],
    displayMeanings: ['distract', 'go astray'],
    fullDisplayMeanings: ['distract', 'be mistaken for', 'go astray', 'divert'],
    meanings: ['distract', 'be mistaken for', 'go astray', 'divert']
  },
  {
    id: 218,
    kanjiChar: '至',
    onyomi: ['shi シ'],
    kunyomi: ['ita(ru) いた(る)'],
    displayMeanings: ['climax', 'arrive'],
    fullDisplayMeanings: ['climax', 'arrive', 'proceed', 'reach', 'attain', 'result in'],
    meanings: ['climax', 'arrive', 'proceed', 'reach', 'attain', 'result in']
  },
  {
    id: 219,
    kanjiChar: '宗',
    onyomi: ['shuu シュウ', 'sou ソウ'],
    kunyomi: ['mune むね'],
    displayMeanings: ['religion', 'sect'],
    fullDisplayMeanings: ['religion', 'sect', 'denomination', 'main point', 'origin', 'essence'],
    meanings: ['religion', 'sect', 'denomination', 'main point', 'origin', 'essence']
  },
  {
    id: 220,
    kanjiChar: '促',
    onyomi: ['soku ソク'],
    kunyomi: ['unaga(su) うなが(す)'],
    displayMeanings: ['stimulate', 'urge'],
    fullDisplayMeanings: ['stimulate', 'urge', 'press', 'demand', 'incite'],
    meanings: ['stimulate', 'urge', 'press', 'demand', 'incite']
  },
  {
    id: 221,
    kanjiChar: '慎',
    onyomi: ['shin シン'],
    kunyomi: ['tsutsushi(mu) つつし(む)', 'tsutsu(mashii) つつ(ましい)', 'tsutsushi つつし'],
    displayMeanings: ['humility', 'be careful'],
    fullDisplayMeanings: ['humility', 'be careful', 'discreet', 'prudent'],
    meanings: ['humility', 'be careful', 'discreet', 'prudent']
  },
  {
    id: 222,
    kanjiChar: '控',
    onyomi: ['kou コウ'],
    kunyomi: ['hika(eru) ひか(える)'],
    displayMeanings: ['withdraw', 'hold back'],
    fullDisplayMeanings: ['withdraw', 'draw in', 'hold back', 'refrain from', 'be moderate'],
    meanings: ['withdraw', 'draw in', 'hold back', 'refrain from', 'be moderate']
  },
  {
    id: 223,
    kanjiChar: '智',
    onyomi: ['chi チ'],
    kunyomi: [],
    displayMeanings: ['wisdom', 'intellect'],
    fullDisplayMeanings: ['wisdom', 'intellect', 'reason'],
    meanings: ['wisdom', 'intellect', 'reason']
  },
  {
    id: 224,
    kanjiChar: '握',
    onyomi: ['aku アク'],
    kunyomi: ['nigi(ru) にぎ(る)'],
    displayMeanings: ['grip', 'hold'],
    fullDisplayMeanings: ['grip', 'hold', 'mould sushi', 'bribe'],
    meanings: ['grip', 'hold', 'mould sushi', 'bribe']
  },
  {
    id: 225,
    kanjiChar: '宙',
    onyomi: ['chuu チュウ'],
    kunyomi: [],
    displayMeanings: ['mid-air', 'space'],
    fullDisplayMeanings: ['mid-air', 'air', 'space', 'sky', 'memorization', 'interval of time'],
    meanings: ['mid-air', 'air', 'space', 'sky', 'memorization', 'interval of time']
  },
  {
    id: 226,
    kanjiChar: '俊',
    onyomi: ['shun シュン'],
    kunyomi: [],
    displayMeanings: ['sagacious', 'genius'],
    fullDisplayMeanings: ['sagacious', 'genius', 'excellence'],
    meanings: ['sagacious', 'genius', 'excellence']
  },
  {
    id: 227,
    kanjiChar: '銭',
    onyomi: ['sen セン', 'zen ゼン'],
    kunyomi: ['zeni ぜに', 'suki すき'],
    displayMeanings: ['coin', 'money'],
    fullDisplayMeanings: ['coin', '.01 yen', 'money'],
    meanings: ['coin', '.01 yen', 'money']
  },
  {
    id: 228,
    kanjiChar: '渋',
    onyomi: ['juu ジュウ', 'shuu シュウ'],
    kunyomi: ['shibu しぶ', 'shibu(i) しぶ(い)'],
    displayMeanings: ['astringent', 'hesitate'],
    fullDisplayMeanings: ['astringent', 'hesitate', 'reluctant', 'have diarrhea'],
    meanings: ['astringent', 'hesitate', 'reluctant', 'have diarrhea']
  },
  {
    id: 229,
    kanjiChar: '銃',
    onyomi: ['juu ジュウ'],
    kunyomi: ['tsutsu つつ'],
    displayMeanings: ['gun', 'arms'],
    fullDisplayMeanings: ['gun', 'arms'],
    meanings: ['gun', 'arms']
  },
  {
    id: 230,
    kanjiChar: '操',
    onyomi: ['sou ソウ', 'san サン'],
    kunyomi: ['misao みさお', 'ayatsu(ru) あやつ(る)'],
    displayMeanings: ['maneuver', 'operate'],
    fullDisplayMeanings: ['maneuver', 'manipulate', 'operate', 'steer', 'chastity', 'virginity', 'fidelity'],
    meanings: ['maneuver', 'manipulate', 'operate', 'steer', 'chastity', 'virginity', 'fidelity']
  },
  {
    id: 231,
    kanjiChar: '携',
    onyomi: ['kei ケイ'],
    kunyomi: ['tazusa(eru) たずさ(える)'],
    displayMeanings: ['portable', 'carry'],
    fullDisplayMeanings: ['portable', 'carry (in hand)', 'armed with', 'bring along'],
    meanings: ['portable', 'carry (in hand)', 'armed with', 'bring along']
  },
  {
    id: 232,
    kanjiChar: '診',
    onyomi: ['shin シン'],
    kunyomi: ['mi(ru) み(る)'],
    displayMeanings: ['checkup', 'diagnose'],
    fullDisplayMeanings: ['checkup', 'seeing', 'diagnose', 'examine'],
    meanings: ['checkup', 'seeing', 'diagnose', 'examine']
  },
  {
    id: 233,
    kanjiChar: '託',
    onyomi: ['taku タク'],
    kunyomi: ['kakotsu(keru) かこつ(ける)', 'kako(tsu) かこ(つ)'],
    displayMeanings: ['consign', 'entrust'],
    fullDisplayMeanings: ['consign', 'requesting', 'entrusting with', 'pretend', 'hint'],
    meanings: ['consign', 'requesting', 'entrusting with', 'pretend', 'hint']
  },
  {
    id: 234,
    kanjiChar: '撮',
    onyomi: ['satsu サツ'],
    kunyomi: ['to(ru) と(る)', 'tsuma(mu) つま(む)', '-do(ri) -ど(り)'],
    displayMeanings: ['snapshot', 'take pictures'],
    fullDisplayMeanings: ['snapshot', 'take pictures'],
    meanings: ['snapshot', 'take pictures']
  },
  {
    id: 235,
    kanjiChar: '誕',
    onyomi: ['tan タン'],
    kunyomi: [],
    displayMeanings: ['nativity', 'be born'],
    fullDisplayMeanings: ['nativity', 'be born', 'declension', 'lie', 'be arbitrary'],
    meanings: ['nativity', 'be born', 'declension', 'lie', 'be arbitrary']
  },
  {
    id: 236,
    kanjiChar: '侵',
    onyomi: ['shin シン'],
    kunyomi: ['oka(su) おか(す)'],
    displayMeanings: ['encroach', 'invade'],
    fullDisplayMeanings: ['encroach', 'invade', 'raid', 'trespass', 'violate'],
    meanings: ['encroach', 'invade', 'raid', 'trespass', 'violate']
  },
  {
    id: 237,
    kanjiChar: '括',
    onyomi: ['katsu カツ'],
    kunyomi: ['kuku(ru) くく(る)'],
    displayMeanings: ['fasten', 'tie up'],
    fullDisplayMeanings: ['fasten', 'tie up', 'arrest', 'constrict'],
    meanings: ['fasten', 'tie up', 'arrest', 'constrict']
  },
  {
    id: 238,
    kanjiChar: '謝',
    onyomi: ['sha シャ'],
    kunyomi: ['ayama(ru) あやま(る)'],
    displayMeanings: ['apologize', 'thank'],
    fullDisplayMeanings: ['apologize', 'thank', 'refuse'],
    meanings: ['apologize', 'thank', 'refuse']
  },
  {
    id: 239,
    kanjiChar: '孝',
    onyomi: ['kou コウ', 'kyou キョウ'],
    kunyomi: [],
    displayMeanings: ['filial piety', 'respect'],
    fullDisplayMeanings: ['filial piety', 'child\'s respect'],
    meanings: ['filial piety', 'child\'s respect']
  },
  {
    id: 240,
    kanjiChar: '駆',
    onyomi: ['ku ク'],
    kunyomi: ['ka(keru) か(ける)'],
    displayMeanings: ['drive', 'run'],
    fullDisplayMeanings: ['drive', 'run', 'gallop', 'advance', 'inspire', 'impel'],
    meanings: ['drive', 'run', 'gallop', 'advance', 'inspire', 'impel']
  },
  {
    id: 241,
    kanjiChar: '透',
    onyomi: ['tou トウ'],
    kunyomi: ['su(ku) す(く)', 'tou(ru) とう(る)'],
    displayMeanings: ['transparent', 'permeate'],
    fullDisplayMeanings: ['transparent', 'permeate', 'filter', 'penetrate'],
    meanings: ['transparent', 'permeate', 'filter', 'penetrate']
  },
  {
    id: 242,
    kanjiChar: '津',
    onyomi: ['shin シン'],
    kunyomi: ['tsu つ'],
    displayMeanings: ['haven', 'port'],
    fullDisplayMeanings: ['haven', 'port', 'harbor', 'ferry'],
    meanings: ['haven', 'port', 'harbor', 'ferry']
  },
  {
    id: 243,
    kanjiChar: '壁',
    onyomi: ['heki ヘキ'],
    kunyomi: ['kabe かべ'],
    displayMeanings: ['wall', 'fence'],
    fullDisplayMeanings: ['wall', 'lining (stomach)', 'fence'],
    meanings: ['wall', 'lining (stomach)', 'fence']
  },
  {
    id: 244,
    kanjiChar: '稲',
    onyomi: ['tou トウ', 'te テ'],
    kunyomi: ['ine いね', 'ina- いな-'],
    displayMeanings: ['rice plant'],
    fullDisplayMeanings: ['rice plant'],
    meanings: ['rice plant']
  },
  {
    id: 245,
    kanjiChar: '仮',
    onyomi: ['ka カ', 'ke ケ'],
    kunyomi: ['kari かり', 'kari- かり-'],
    displayMeanings: ['sham', 'temporary'],
    fullDisplayMeanings: ['sham', 'temporary', 'interim', 'assumed (name)', 'informal'],
    meanings: ['sham', 'temporary', 'interim', 'assumed (name)', 'informal']
  },
  {
    id: 246,
    kanjiChar: '裂',
    onyomi: ['retsu レツ'],
    kunyomi: ['sa(ku) さ(く)', '-gi(re) -ぎ(れ)'],
    displayMeanings: ['split', 'rend'],
    fullDisplayMeanings: ['split', 'rend', 'tear'],
    meanings: ['split', 'rend', 'tear']
  },
  {
    id: 247,
    kanjiChar: '敏',
    onyomi: ['bin ビン'],
    kunyomi: ['satoi さとい'],
    displayMeanings: ['cleverness', 'agile'],
    fullDisplayMeanings: ['cleverness', 'agile', 'alert'],
    meanings: ['cleverness', 'agile', 'alert']
  },
  {
    id: 248,
    kanjiChar: '是',
    onyomi: ['ze ゼ', 'shi シ'],
    kunyomi: ['kore これ', 'kono この', 'koko ここ'],
    displayMeanings: ['just so', 'this'],
    fullDisplayMeanings: ['just so', 'this', 'right', 'justice'],
    meanings: ['just so', 'this', 'right', 'justice']
  },
  {
    id: 249,
    kanjiChar: '排',
    onyomi: ['hai ハイ'],
    kunyomi: [],
    displayMeanings: ['repudiate', 'exclude'],
    fullDisplayMeanings: ['repudiate', 'exclude', 'expel', 'reject', 'line up', 'arrange'],
    meanings: ['repudiate', 'exclude', 'expel', 'reject', 'line up', 'arrange']
  },
  {
    id: 250,
    kanjiChar: '裕',
    onyomi: ['yuu ユウ'],
    kunyomi: [],
    displayMeanings: ['abundant', 'rich'],
    fullDisplayMeanings: ['abundant', 'rich', 'fertile'],
    meanings: ['abundant', 'rich', 'fertile']
  },
  {
    id: 251,
    kanjiChar: '堅',
    onyomi: ['ken ケン'],
    kunyomi: ['kata(i) かた(い)', '-gata(i) -がた(い)'],
    displayMeanings: ['strict', 'hard'],
    fullDisplayMeanings: ['strict', 'hard', 'solid', 'tough', 'tight', 'reliable'],
    meanings: ['strict', 'hard', 'solid', 'tough', 'tight', 'reliable']
  },
  {
    id: 252,
    kanjiChar: '訳',
    onyomi: ['yaku ヤク'],
    kunyomi: ['wake わけ'],
    displayMeanings: ['translate', 'reason'],
    fullDisplayMeanings: ['translate', 'reason', 'circumstance', 'case'],
    meanings: ['translate', 'reason', 'circumstance', 'case']
  },
  {
    id: 253,
    kanjiChar: '芝',
    onyomi: ['shi シ'],
    kunyomi: ['shiba しば'],
    displayMeanings: ['turf', 'lawn'],
    fullDisplayMeanings: ['turf', 'lawn'],
    meanings: ['turf', 'lawn']
  },
  {
    id: 254,
    kanjiChar: '綱',
    onyomi: ['kou コウ'],
    kunyomi: ['tsuna つな'],
    displayMeanings: ['hawser', 'rope'],
    fullDisplayMeanings: ['hawser', 'class (genus)', 'rope', 'cord', 'cable'],
    meanings: ['hawser', 'class (genus)', 'rope', 'cord', 'cable']
  },
  {
    id: 255,
    kanjiChar: '典',
    onyomi: ['ten テン', 'den デン'],
    kunyomi: ['fumi ふみ', 'nori のり'],
    displayMeanings: ['code', 'ceremony'],
    fullDisplayMeanings: ['code', 'ceremony', 'law', 'rule'],
    meanings: ['code', 'ceremony', 'law', 'rule']
  },
  {
    id: 256,
    kanjiChar: '賀',
    onyomi: ['ga ガ'],
    kunyomi: [],
    displayMeanings: ['congratulations', 'joy'],
    fullDisplayMeanings: ['congratulations', 'joy'],
    meanings: ['congratulations', 'joy']
  },
  {
    id: 257,
    kanjiChar: '扱',
    onyomi: ['sou ソウ', 'kyuu キュウ'],
    kunyomi: ['atsuka(i) あつか(い)', 'ko(ku) こ(く)'],
    displayMeanings: ['handle', 'entertain'],
    fullDisplayMeanings: ['handle', 'entertain', 'thresh', 'strip'],
    meanings: ['handle', 'entertain', 'thresh', 'strip']
  },
  {
    id: 258,
    kanjiChar: '顧',
    onyomi: ['ko コ'],
    kunyomi: ['kaeri(miru) かえり(みる)'],
    displayMeanings: ['look back', 'review'],
    fullDisplayMeanings: ['look back', 'review', 'examine oneself', 'turn around'],
    meanings: ['look back', 'review', 'examine oneself', 'turn around']
  },
  {
    id: 259,
    kanjiChar: '弘',
    onyomi: ['kou コウ', 'gu グ'],
    kunyomi: ['hiro(i) ひろ(い)'],
    displayMeanings: ['vast', 'broad'],
    fullDisplayMeanings: ['vast', 'broad', 'wide'],
    meanings: ['vast', 'broad', 'wide']
  },
  {
    id: 260,
    kanjiChar: '看',
    onyomi: ['kan カン'],
    kunyomi: ['mi(ru) み(る)'],
    displayMeanings: ['watch over', 'see'],
    fullDisplayMeanings: ['watch over', 'see'],
    meanings: ['watch over', 'see']
  },
  {
    id: 261,
    kanjiChar: '訟',
    onyomi: ['shou ショウ'],
    kunyomi: [],
    displayMeanings: ['sue', 'accuse'],
    fullDisplayMeanings: ['sue', 'accuse'],
    meanings: ['sue', 'accuse']
  },
  {
    id: 262,
    kanjiChar: '戒',
    onyomi: ['kai カイ'],
    kunyomi: ['imashi(meru) いまし(める)'],
    displayMeanings: ['commandment'],
    fullDisplayMeanings: ['commandment'],
    meanings: ['commandment']
  },
  {
    id: 263,
    kanjiChar: '祉',
    onyomi: ['shi シ'],
    kunyomi: [],
    displayMeanings: ['welfare', 'happiness'],
    fullDisplayMeanings: ['welfare', 'happiness'],
    meanings: ['welfare', 'happiness']
  },
  {
    id: 264,
    kanjiChar: '誉',
    onyomi: ['yo ヨ'],
    kunyomi: ['homa(re) ほま(れ)', 'ho(meru) ほ(める)'],
    displayMeanings: ['reputation', 'praise'],
    fullDisplayMeanings: ['reputation', 'praise', 'honor', 'glory'],
    meanings: ['reputation', 'praise', 'honor', 'glory']
  },
  {
    id: 265,
    kanjiChar: '歓',
    onyomi: ['kan カン'],
    kunyomi: ['yoroko(bu) よろこ(ぶ)'],
    displayMeanings: ['delight', 'joy'],
    fullDisplayMeanings: ['delight', 'joy'],
    meanings: ['delight', 'joy']
  },
  {
    id: 266,
    kanjiChar: '奏',
    onyomi: ['sou ソウ'],
    kunyomi: ['kana(deru) かな(でる)'],
    displayMeanings: ['play music', 'complete'],
    fullDisplayMeanings: ['play music', 'speak to a ruler', 'complete'],
    meanings: ['play music', 'speak to a ruler', 'complete']
  },
  {
    id: 267,
    kanjiChar: '勧',
    onyomi: ['kan カン', 'ken ケン'],
    kunyomi: ['susu(meru) すす(める)'],
    displayMeanings: ['persuade', 'recommend'],
    fullDisplayMeanings: ['persuade', 'recommend', 'advise', 'encourage', 'offer'],
    meanings: ['persuade', 'recommend', 'advise', 'encourage', 'offer']
  },
  {
    id: 268,
    kanjiChar: '騒',
    onyomi: ['sou ソウ'],
    kunyomi: ['sawa(gu) さわ(ぐ)', 'urei うれい'],
    displayMeanings: ['boisterous', 'make noise'],
    fullDisplayMeanings: ['boisterous', 'make noise', 'clamor', 'disturb', 'excite'],
    meanings: ['boisterous', 'make noise', 'clamor', 'disturb', 'excite']
  },
  {
    id: 269,
    kanjiChar: '閥',
    onyomi: ['batsu バツ'],
    kunyomi: [],
    displayMeanings: ['clique', 'faction'],
    fullDisplayMeanings: ['clique', 'lineage', 'pedigree', 'faction', 'clan'],
    meanings: ['clique', 'lineage', 'pedigree', 'faction', 'clan']
  },
  {
    id: 270,
    kanjiChar: '甲',
    onyomi: ['kou コウ', 'kan カン'],
    kunyomi: ['kinoe きのえ'],
    displayMeanings: ['armor', 'first class'],
    fullDisplayMeanings: ['armor', 'high (voice)', 'A grade', 'first class', 'former', 'instep', 'carapace'],
    meanings: ['armor', 'high (voice)', 'A grade', 'first class', 'former', 'instep', 'carapace']
  },
  {
    id: 271,
    kanjiChar: '縄',
    onyomi: ['jou ジョウ'],
    kunyomi: ['nawa なわ', 'tada(su) ただ(す)'],
    displayMeanings: ['straw rope', 'cord'],
    fullDisplayMeanings: ['straw rope', 'cord'],
    meanings: ['straw rope', 'cord']
  },
  {
    id: 272,
    kanjiChar: '郷',
    onyomi: ['kyou キョウ', 'gou ゴウ'],
    kunyomi: ['sato さと'],
    displayMeanings: ['home town', 'village'],
    fullDisplayMeanings: ['home town', 'village', 'native place', 'district'],
    meanings: ['home town', 'village', 'native place', 'district']
  },
  {
    id: 273,
    kanjiChar: '揺',
    onyomi: ['you ヨウ'],
    kunyomi: ['yu(reru) ゆ(れる)', 'ugo(ku) うご(く)'],
    displayMeanings: ['swing', 'shake'],
    fullDisplayMeanings: ['swing', 'shake', 'sway', 'rock', 'tremble', 'vibrate'],
    meanings: ['swing', 'shake', 'sway', 'rock', 'tremble', 'vibrate']
  },
  {
    id: 274,
    kanjiChar: '免',
    onyomi: ['men メン'],
    kunyomi: ['manuka(reru) まぬか(れる)', 'manuga(reru) まぬが(れる)'],
    displayMeanings: ['excuse', 'dismissal'],
    fullDisplayMeanings: ['excuse', 'dismissal'],
    meanings: ['excuse', 'dismissal']
  },
  {
    id: 275,
    kanjiChar: '既',
    onyomi: ['ki キ'],
    kunyomi: ['sude(ni) すで(に)'],
    displayMeanings: ['previously', 'already'],
    fullDisplayMeanings: ['previously', 'already', 'long ago'],
    meanings: ['previously', 'already', 'long ago']
  },
  {
    id: 276,
    kanjiChar: '薦',
    onyomi: ['sen セン'],
    kunyomi: ['susu(meru) すす(める)'],
    displayMeanings: ['recommend', 'advise'],
    fullDisplayMeanings: ['recommend', 'mat', 'advise', 'encourage', 'offer'],
    meanings: ['recommend', 'mat', 'advise', 'encourage', 'offer']
  },
  {
    id: 277,
    kanjiChar: '隣',
    onyomi: ['rin リン'],
    kunyomi: ['tona(ru) とな(る)', 'tonari となり'],
    displayMeanings: ['neighboring'],
    fullDisplayMeanings: ['neighboring'],
    meanings: ['neighboring']
  },
  {
    id: 278,
    kanjiChar: '華',
    onyomi: ['ka カ', 'ke ケ'],
    kunyomi: ['hana はな'],
    displayMeanings: ['splendor', 'flower'],
    fullDisplayMeanings: ['splendor', 'flower', 'petal', 'shine', 'luster', 'ostentatious', 'showy', 'gay', 'gorgeous'],
    meanings: ['splendor', 'flower', 'petal', 'shine', 'luster', 'ostentatious', 'showy', 'gay', 'gorgeous']
  },
  {
    id: 279,
    kanjiChar: '範',
    onyomi: ['han ハン'],
    kunyomi: [],
    displayMeanings: ['pattern', 'example'],
    fullDisplayMeanings: ['pattern', 'example', 'model'],
    meanings: ['pattern', 'example', 'model']
  },
  {
    id: 280,
    kanjiChar: '隠',
    onyomi: ['in イン', 'on オン'],
    kunyomi: ['kaku(su) かく(す)', 'yo(ru) よ(る)'],
    displayMeanings: ['conceal', 'hide'],
    fullDisplayMeanings: ['conceal', 'hide', 'cover'],
    meanings: ['conceal', 'hide', 'cover']
  },
  {
    id: 281,
    kanjiChar: '徳',
    onyomi: ['toku トク'],
    kunyomi: [],
    displayMeanings: ['benevolence', 'virtue'],
    fullDisplayMeanings: ['benevolence', 'virtue', 'goodness', 'commanding respect'],
    meanings: ['benevolence', 'virtue', 'goodness', 'commanding respect']
  },
  {
    id: 282,
    kanjiChar: '哲',
    onyomi: ['tetsu テツ'],
    kunyomi: ['satoi さとい', 'akiraka あきらか'],
    displayMeanings: ['philosophy', 'clear'],
    fullDisplayMeanings: ['philosophy', 'clear'],
    meanings: ['philosophy', 'clear']
  },
  {
    id: 283,
    kanjiChar: '杉',
    onyomi: ['san サン'],
    kunyomi: ['sugi すぎ'],
    displayMeanings: ['cedar', 'cryptomeria'],
    fullDisplayMeanings: ['cedar', 'cryptomeria'],
    meanings: ['cedar', 'cryptomeria']
  },
  {
    id: 284,
    kanjiChar: '里',
    onyomi: ['ri リ'],
    kunyomi: ['sato さと'],
    displayMeanings: ['ri', 'village'],
    fullDisplayMeanings: ['ri', 'village', 'parent\'s home', 'league'],
    meanings: ['ri', 'village', 'parent\'s home', 'league']
  },
  {
    id: 285,
    kanjiChar: '釈',
    onyomi: ['shaku シャク', 'seki セキ'],
    kunyomi: ['toku とく', 'su(teru) す(てる)', 'yuru(su) ゆる(す)'],
    displayMeanings: ['explanation'],
    fullDisplayMeanings: ['explanation'],
    meanings: ['explanation']
  },
  {
    id: 286,
    kanjiChar: '己',
    onyomi: ['ko コ', 'ki キ'],
    kunyomi: ['onore おのれ', 'tsuchinoto つちのと', 'na な'],
    displayMeanings: ['self'],
    fullDisplayMeanings: ['self'],
    meanings: ['self']
  },
  {
    id: 287,
    kanjiChar: '妥',
    onyomi: ['da ダ'],
    kunyomi: [],
    displayMeanings: ['gentle', 'peace'],
    fullDisplayMeanings: ['gentle', 'peace', 'satisfactory', 'appropriate'],
    meanings: ['gentle', 'peace', 'satisfactory', 'appropriate']
  },
  {
    id: 288,
    kanjiChar: '威',
    onyomi: ['i イ'],
    kunyomi: ['odo(su) おど(す)'],
    displayMeanings: ['intimidate', 'dignity'],
    fullDisplayMeanings: ['intimidate', 'dignity', 'majesty', 'menace', 'threaten'],
    meanings: ['intimidate', 'dignity', 'majesty', 'menace', 'threaten']
  },
  {
    id: 289,
    kanjiChar: '豪',
    onyomi: ['gou ゴウ'],
    kunyomi: ['era(i) えら(い)'],
    displayMeanings: ['overpowering', 'great'],
    fullDisplayMeanings: ['overpowering', 'great', 'powerful', 'excelling', 'Australia'],
    meanings: ['overpowering', 'great', 'powerful', 'excelling', 'Australia']
  },
  {
    id: 290,
    kanjiChar: '熊',
    onyomi: ['yuu ユウ'],
    kunyomi: ['kuma くま'],
    displayMeanings: ['bear'],
    fullDisplayMeanings: ['bear'],
    meanings: ['bear']
  },
  {
    id: 291,
    kanjiChar: '滞',
    onyomi: ['tai タイ', 'tei テイ'],
    kunyomi: ['todokoo(ru) とどこお(る)'],
    displayMeanings: ['stagnate', 'be delayed'],
    fullDisplayMeanings: ['stagnate', 'be delayed', 'overdue', 'arrears'],
    meanings: ['stagnate', 'be delayed', 'overdue', 'arrears']
  },
  {
    id: 292,
    kanjiChar: '微',
    onyomi: ['bi ビ'],
    kunyomi: ['kasu(ka) かす(か)'],
    displayMeanings: ['delicate', 'minuteness'],
    fullDisplayMeanings: ['delicate', 'minuteness', 'insignificance'],
    meanings: ['delicate', 'minuteness', 'insignificance']
  },
  {
    id: 293,
    kanjiChar: '隆',
    onyomi: ['ryuu リュウ'],
    kunyomi: [],
    displayMeanings: ['hump', 'high'],
    fullDisplayMeanings: ['hump', 'high', 'noble', 'prosperity'],
    meanings: ['hump', 'high', 'noble', 'prosperity']
  },
  {
    id: 294,
    kanjiChar: '症',
    onyomi: ['shou ショウ'],
    kunyomi: [],
    displayMeanings: ['symptoms', 'illness'],
    fullDisplayMeanings: ['symptoms', 'illness'],
    meanings: ['symptoms', 'illness']
  },
  {
    id: 295,
    kanjiChar: '暫',
    onyomi: ['zan ザン'],
    kunyomi: ['shibara(ku) しばら(く)'],
    displayMeanings: ['temporarily', 'a while'],
    fullDisplayMeanings: ['temporarily', 'a while', 'moment', 'long time'],
    meanings: ['temporarily', 'a while', 'moment', 'long time']
  },
  {
    id: 296,
    kanjiChar: '忠',
    onyomi: ['chuu チュウ'],
    kunyomi: [],
    displayMeanings: ['loyalty', 'fidelity'],
    fullDisplayMeanings: ['loyalty', 'fidelity', 'faithfulness'],
    meanings: ['loyalty', 'fidelity', 'faithfulness']
  },
  {
    id: 297,
    kanjiChar: '倉',
    onyomi: ['sou ソウ'],
    kunyomi: ['kura くら'],
    displayMeanings: ['godown', 'warehouse'],
    fullDisplayMeanings: ['godown', 'warehouse', 'storehouse', 'cellar', 'treasury'],
    meanings: ['godown', 'warehouse', 'storehouse', 'cellar', 'treasury']
  },
  {
    id: 298,
    kanjiChar: '彦',
    onyomi: ['gen ゲン'],
    kunyomi: ['hiko ひこ'],
    displayMeanings: ['lad', 'boy'],
    fullDisplayMeanings: ['lad', 'boy (ancient)'],
    meanings: ['lad', 'boy (ancient)']
  },
  {
    id: 299,
    kanjiChar: '肝',
    onyomi: ['kan カン'],
    kunyomi: ['kimo きも'],
    displayMeanings: ['liver', 'pluck'],
    fullDisplayMeanings: ['liver', 'pluck', 'nerve', 'chutzpah'],
    meanings: ['liver', 'pluck', 'nerve', 'chutzpah']
  },
  {
    id: 300,
    kanjiChar: '喚',
    onyomi: ['kan カン'],
    kunyomi: ['wame(ku) わめ(く)'],
    displayMeanings: ['yell', 'cry'],
    fullDisplayMeanings: ['yell', 'cry', 'call', 'scream', 'summon'],
    meanings: ['yell', 'cry', 'call', 'scream', 'summon']
  },
    {
    id: 301,
    kanjiChar: '沿',
    onyomi: ['en エン'],
    kunyomi: ['so(u) そ(う)', '-zo(i) -ぞ(い)'],
    displayMeanings: ['run alongside', 'follow along'],
    fullDisplayMeanings: ['run alongside', 'follow along', 'run along', 'lie along'],
    meanings: ['run alongside', 'follow along', 'run along', 'lie along']
  },
  {
    id: 302,
    kanjiChar: '妙',
    onyomi: ['myou ミョウ', 'byou ビョウ'],
    kunyomi: ['tae たえ'],
    displayMeanings: ['exquisite', 'strange'],
    fullDisplayMeanings: ['exquisite', 'strange', 'queer', 'mystery', 'miracle', 'excellent', 'delicate', 'charming'],
    meanings: ['exquisite', 'strange', 'queer', 'mystery', 'miracle', 'excellent', 'delicate', 'charming']
  },
  {
    id: 303,
    kanjiChar: '唱',
    onyomi: ['shou ショウ'],
    kunyomi: ['tona(eru) とな(える)'],
    displayMeanings: ['chant', 'recite'],
    fullDisplayMeanings: ['chant', 'recite', 'call upon', 'yell'],
    meanings: ['chant', 'recite', 'call upon', 'yell']
  },
  {
    id: 304,
    kanjiChar: '阿',
    onyomi: ['a ア', 'o オ'],
    kunyomi: ['omone(ru) おもね(る)', 'kuma くま'],
    displayMeanings: ['Africa', 'flatter'],
    fullDisplayMeanings: ['Africa', 'flatter', 'fawn upon', 'corner', 'nook', 'recess'],
    meanings: ['Africa', 'flatter', 'fawn upon', 'corner', 'nook', 'recess']
  },
  {
    id: 305,
    kanjiChar: '索',
    onyomi: ['saku サク'],
    kunyomi: [],
    displayMeanings: ['cord', 'searching'],
    fullDisplayMeanings: ['cord', 'rope', 'searching', 'inquiring'],
    meanings: ['cord', 'rope', 'searching', 'inquiring']
  },
  {
    id: 306,
    kanjiChar: '誠',
    onyomi: ['sei セイ'],
    kunyomi: ['makoto まこと'],
    displayMeanings: ['sincerity', 'truth'],
    fullDisplayMeanings: ['sincerity', 'admonish', 'warn', 'prohibit', 'truth', 'fidelity'],
    meanings: ['sincerity', 'admonish', 'warn', 'prohibit', 'truth', 'fidelity']
  },
  {
    id: 307,
    kanjiChar: '襲',
    onyomi: ['shuu シュウ'],
    kunyomi: ['oso(u) おそ(う)', 'kasa(ne) かさ(ね)'],
    displayMeanings: ['attack', 'advance on'],
    fullDisplayMeanings: ['attack', 'advance on', 'succeed to', 'pile', 'heap'],
    meanings: ['attack', 'advance on', 'succeed to', 'pile', 'heap']
  },
  {
    id: 308,
    kanjiChar: '懇',
    onyomi: ['kon コン'],
    kunyomi: ['nengo(ro) ねんご(ろ)'],
    displayMeanings: ['sociable', 'kind'],
    fullDisplayMeanings: ['sociable', 'kind', 'courteous', 'hospitable', 'cordial'],
    meanings: ['sociable', 'kind', 'courteous', 'hospitable', 'cordial']
  },
  {
    id: 309,
    kanjiChar: '俳',
    onyomi: ['hai ハイ'],
    kunyomi: [],
    displayMeanings: ['haiku', 'actor'],
    fullDisplayMeanings: ['haiku', 'actor'],
    meanings: ['haiku', 'actor']
  },
  {
    id: 310,
    kanjiChar: '柄',
    onyomi: ['hei ヘイ'],
    kunyomi: ['gara がら', 'e え', 'tsuka つか'],
    displayMeanings: ['design', 'pattern'],
    fullDisplayMeanings: ['design', 'pattern', 'build', 'nature', 'character', 'handle', 'crank', 'grip', 'knob', 'shaft'],
    meanings: ['design', 'pattern', 'build', 'nature', 'character', 'handle', 'crank', 'grip', 'knob', 'shaft']
  },
  {
    id: 311,
    kanjiChar: '驚',
    onyomi: ['kyou キョウ'],
    kunyomi: ['odoro(ku) おどろ(く)'],
    displayMeanings: ['wonder', 'be surprised'],
    fullDisplayMeanings: ['wonder', 'be surprised', 'frightened', 'amazed'],
    meanings: ['wonder', 'be surprised', 'frightened', 'amazed']
  },
  {
    id: 312,
    kanjiChar: '麻',
    onyomi: ['ma マ', 'maa マア'],
    kunyomi: ['asa あさ'],
    displayMeanings: ['hemp', 'flax'],
    fullDisplayMeanings: ['hemp', 'flax', 'numb'],
    meanings: ['hemp', 'flax', 'numb']
  },
  {
    id: 313,
    kanjiChar: '李',
    onyomi: ['ri リ'],
    kunyomi: ['sumomo すもも'],
    displayMeanings: ['plum'],
    fullDisplayMeanings: ['plum'],
    meanings: ['plum']
  },
  {
    id: 314,
    kanjiChar: '浩',
    onyomi: ['kou コウ'],
    kunyomi: ['ooki(i) おおき(い)', 'hiro(i) ひろ(い)'],
    displayMeanings: ['wide expanse', 'abundance'],
    fullDisplayMeanings: ['wide expanse', 'abundance', 'vigorous'],
    meanings: ['wide expanse', 'abundance', 'vigorous']
  },
  {
    id: 315,
    kanjiChar: '剤',
    onyomi: ['zai ザイ', 'sui スイ', 'sei セイ'],
    kunyomi: ['karu かる', 'kezu(ru) けず(る)'],
    displayMeanings: ['dose', 'medicine'],
    fullDisplayMeanings: ['dose', 'medicine', 'drug'],
    meanings: ['dose', 'medicine', 'drug']
  },
  {
    id: 316,
    kanjiChar: '瀬',
    onyomi: ['rai ライ'],
    kunyomi: ['se せ'],
    displayMeanings: ['rapids', 'current'],
    fullDisplayMeanings: ['rapids', 'current', 'torrent', 'shallows', 'shoal'],
    meanings: ['rapids', 'current', 'torrent', 'shallows', 'shoal']
  },
  {
    id: 317,
    kanjiChar: '趣',
    onyomi: ['shu シュ'],
    kunyomi: ['omomuki おもむき', 'omomu(ku) おもむ(く)'],
    displayMeanings: ['purport', 'gist'],
    fullDisplayMeanings: ['purport', 'gist', 'elegance', 'interest', 'proceed to', 'tend', 'become'],
    meanings: ['purport', 'gist', 'elegance', 'interest', 'proceed to', 'tend', 'become']
  },
  {
    id: 318,
    kanjiChar: '陥',
    onyomi: ['kan カン'],
    kunyomi: ['ochii(ru) おちい(る)', 'otoshii(reru) おとしい(れる)'],
    displayMeanings: ['collapse', 'fall into'],
    fullDisplayMeanings: ['collapse', 'fall into', 'cave in', 'fall (castle)', 'slide into'],
    meanings: ['collapse', 'fall into', 'cave in', 'fall (castle)', 'slide into']
  },
  {
    id: 319,
    kanjiChar: '斎',
    onyomi: ['sai サイ'],
    kunyomi: ['toki とき', 'tsutsushi(mu) つつし(む)', 'monoimi ものいみ', 'i(mu) い(む)', 'iwa(u) いわ(う)', 'itsu(ku) いつ(く)'],
    displayMeanings: ['purification', 'worship'],
    fullDisplayMeanings: ['purification', 'Buddhist food', 'room', 'worship', 'avoid', 'alike'],
    meanings: ['purification', 'Buddhist food', 'room', 'worship', 'avoid', 'alike']
  },
  {
    id: 320,
    kanjiChar: '貫',
    onyomi: ['kan カン'],
    kunyomi: ['tsuranu(ku) つらぬ(く)', 'nu(ku) ぬ(く)', 'nuki ぬき'],
    displayMeanings: ['pierce', 'penetrate'],
    fullDisplayMeanings: ['pierce', '8 1/3lbs', 'penetrate', 'brace'],
    meanings: ['pierce', '8 1/3lbs', 'penetrate', 'brace']
  },
  {
    id: 321,
    kanjiChar: '仙',
    onyomi: ['sen セン', 'sento セント'],
    kunyomi: [],
    displayMeanings: ['hermit', 'wizard'],
    fullDisplayMeanings: ['hermit', 'wizard', 'cent'],
    meanings: ['hermit', 'wizard', 'cent']
  },
  {
    id: 322,
    kanjiChar: '慰',
    onyomi: ['i イ'],
    kunyomi: ['nagusa(meru) なぐさ(める)'],
    displayMeanings: ['consolation', 'comfort'],
    fullDisplayMeanings: ['consolation', 'amusement', 'seduce', 'cheer', 'make sport of', 'comfort', 'console'],
    meanings: ['consolation', 'amusement', 'seduce', 'cheer', 'make sport of', 'comfort', 'console']
  },
  {
    id: 323,
    kanjiChar: '序',
    onyomi: ['jo ジョ'],
    kunyomi: ['tsui(de) つい(で)', 'tsuide ついで'],
    displayMeanings: ['preface', 'beginning'],
    fullDisplayMeanings: ['preface', 'beginning', 'order', 'precedence', 'occasion', 'chance', 'incidentally'],
    meanings: ['preface', 'beginning', 'order', 'precedence', 'occasion', 'chance', 'incidentally']
  },
  {
    id: 324,
    kanjiChar: '旬',
    onyomi: ['jun ジュン', 'shun シュン'],
    kunyomi: [],
    displayMeanings: ['ten-day period', 'season'],
    fullDisplayMeanings: ['decameron', 'ten-day period', 'season (for specific products)'],
    meanings: ['decameron', 'ten-day period', 'season (for specific products)']
  },
  {
    id: 325,
    kanjiChar: '兼',
    onyomi: ['ken ケン'],
    kunyomi: ['ka(neru) か(ねる)', '-ka(neru) -か(ねる)'],
    displayMeanings: ['concurrently', 'and'],
    fullDisplayMeanings: ['concurrently', 'and', 'beforehand', 'in advance'],
    meanings: ['concurrently', 'and', 'beforehand', 'in advance']
  },
  {
    id: 326,
    kanjiChar: '聖',
    onyomi: ['sei セイ', 'shou ショウ'],
    kunyomi: ['hijiri ひじり'],
    displayMeanings: ['holy', 'saint'],
    fullDisplayMeanings: ['holy', 'saint', 'sage', 'master', 'priest'],
    meanings: ['holy', 'saint', 'sage', 'master', 'priest']
  },
  {
    id: 327,
    kanjiChar: '旨',
    onyomi: ['shi シ'],
    kunyomi: ['mune むね', 'uma(i) うま(い)'],
    displayMeanings: ['delicious', 'purport'],
    fullDisplayMeanings: ['delicious', 'relish', 'show a liking for', 'purport', 'will', 'clever', 'expert'],
    meanings: ['delicious', 'relish', 'show a liking for', 'purport', 'will', 'clever', 'expert']
  },
  {
    id: 328,
    kanjiChar: '即',
    onyomi: ['soku ソク'],
    kunyomi: ['tsu(ku) つ(く)', 'sunawa(chi) すなわ(ち)'],
    displayMeanings: ['instant', 'namely'],
    fullDisplayMeanings: ['instant', 'namely', 'as is', 'conform', 'agree', 'adapt'],
    meanings: ['instant', 'namely', 'as is', 'conform', 'agree', 'adapt']
  },
  {
    id: 329,
    kanjiChar: '柳',
    onyomi: ['ryuu リュウ'],
    kunyomi: ['yanagi やなぎ'],
    displayMeanings: ['willow'],
    fullDisplayMeanings: ['willow'],
    meanings: ['willow']
  },
  {
    id: 330,
    kanjiChar: '舎',
    onyomi: ['sha シャ', 'seki セキ'],
    kunyomi: ['yado(ru) やど(る)'],
    displayMeanings: ['cottage', 'inn'],
    fullDisplayMeanings: ['cottage', 'inn', 'hut', 'house', 'mansion'],
    meanings: ['cottage', 'inn', 'hut', 'house', 'mansion']
  },
  {
    id: 331,
    kanjiChar: '偽',
    onyomi: ['gi ギ', 'ka カ'],
    kunyomi: ['itsuwa(ru) いつわ(る)', 'nise にせ'],
    displayMeanings: ['falsehood', 'lie'],
    fullDisplayMeanings: ['falsehood', 'lie', 'deceive', 'pretend', 'counterfeit', 'forgery'],
    meanings: ['falsehood', 'lie', 'deceive', 'pretend', 'counterfeit', 'forgery']
  },
  {
    id: 332,
    kanjiChar: '較',
    onyomi: ['kaku カク', 'kou コウ'],
    kunyomi: ['kura(beru) くら(べる)'],
    displayMeanings: ['contrast', 'compare'],
    fullDisplayMeanings: ['contrast', 'compare'],
    meanings: ['contrast', 'compare']
  },
  {
    id: 333,
    kanjiChar: '覇',
    onyomi: ['ha ハ', 'haku ハク'],
    kunyomi: ['hatagashira はたがしら'],
    displayMeanings: ['hegemony', 'supremacy'],
    fullDisplayMeanings: ['hegemony', 'supremacy', 'leadership', 'champion'],
    meanings: ['hegemony', 'supremacy', 'leadership', 'champion']
  },
  {
    id: 334,
    kanjiChar: '畑',
    onyomi: ['hata はた', 'hatake はたけ', '-batake -ばたけ'],
    kunyomi: [],
    displayMeanings: ['farm', 'field'],
    fullDisplayMeanings: ['farm', 'field', 'garden', 'one\'s specialty', '(kokuji)'],
    meanings: ['farm', 'field', 'garden', 'one\'s specialty', '(kokuji)']
  },
  {
    id: 335,
    kanjiChar: '詳',
    onyomi: ['shou ショウ'],
    kunyomi: ['kuwa(shii) くわ(しい)', 'tsumabi(raka) つまび(らか)'],
    displayMeanings: ['detailed', 'full'],
    fullDisplayMeanings: ['detailed', 'full', 'minute', 'accurate', 'well-informed'],
    meanings: ['detailed', 'full', 'minute', 'accurate', 'well-informed']
  },
  {
    id: 336,
    kanjiChar: '抵',
    onyomi: ['tei テイ'],
    kunyomi: [],
    displayMeanings: ['resist', 'reach'],
    fullDisplayMeanings: ['resist', 'reach', 'touch'],
    meanings: ['resist', 'reach', 'touch']
  },
  {
    id: 337,
    kanjiChar: '脅',
    onyomi: ['kyou キョウ'],
    kunyomi: ['obiya(kasu) おびや(かす)', 'odo(su) おど(す)'],
    displayMeanings: ['threaten', 'coerce'],
    fullDisplayMeanings: ['threaten', 'coerce'],
    meanings: ['threaten', 'coerce']
  },
  {
    id: 338,
    kanjiChar: '茂',
    onyomi: ['mo モ'],
    kunyomi: ['shige(ru) しげ(る)'],
    displayMeanings: ['overgrown', 'grow thick'],
    fullDisplayMeanings: ['overgrown', 'grow thick', 'be luxuriant'],
    meanings: ['overgrown', 'grow thick', 'be luxuriant']
  },
  {
    id: 339,
    kanjiChar: '犠',
    onyomi: ['gi ギ', 'ki キ'],
    kunyomi: ['ikenie いけにえ'],
    displayMeanings: ['sacrifice'],
    fullDisplayMeanings: ['sacrifice'],
    meanings: ['sacrifice']
  },
  {
    id: 340,
    kanjiChar: '旗',
    onyomi: ['ki キ'],
    kunyomi: ['hata はた'],
    displayMeanings: ['national flag', 'banner'],
    fullDisplayMeanings: ['national flag', 'banner', 'standard'],
    meanings: ['national flag', 'banner', 'standard']
  },
  {
    id: 341,
    kanjiChar: '距',
    onyomi: ['kyo キョ'],
    kunyomi: ['heda(taru) へだ(たる)', 'kedzume けづめ'],
    displayMeanings: ['long-distance', 'spur'],
    fullDisplayMeanings: ['long-distance', 'spur', 'fetlock'],
    meanings: ['long-distance', 'spur', 'fetlock']
  },
  {
    id: 342,
    kanjiChar: '雅',
    onyomi: ['ga ガ'],
    kunyomi: ['miya(bi) みや(び)'],
    displayMeanings: ['gracious', 'elegant'],
    fullDisplayMeanings: ['gracious', 'elegant', 'graceful', 'refined'],
    meanings: ['gracious', 'elegant', 'graceful', 'refined']
  },
  {
    id: 343,
    kanjiChar: '飾',
    onyomi: ['shoku ショク'],
    kunyomi: ['kaza(ru) かざ(る)'],
    displayMeanings: ['decorate', 'ornament'],
    fullDisplayMeanings: ['decorate', 'ornament', 'adorn', 'embellish'],
    meanings: ['decorate', 'ornament', 'adorn', 'embellish']
  },
  {
    id: 344,
    kanjiChar: '網',
    onyomi: ['mou モウ'],
    kunyomi: ['ami あみ'],
    displayMeanings: ['netting', 'network'],
    fullDisplayMeanings: ['netting', 'network'],
    meanings: ['netting', 'network']
  },
  {
    id: 345,
    kanjiChar: '竜',
    onyomi: ['ryuu リュウ', 'ryou リョウ', 'rou ロウ'],
    kunyomi: ['tatsu たつ', 'ise いせ'],
    displayMeanings: ['dragon', 'imperial'],
    fullDisplayMeanings: ['dragon', 'imperial'],
    meanings: ['dragon', 'imperial']
  },
  {
    id: 346,
    kanjiChar: '詩',
    onyomi: ['shi シ'],
    kunyomi: ['uta うた'],
    displayMeanings: ['poem', 'poetry'],
    fullDisplayMeanings: ['poem', 'poetry'],
    meanings: ['poem', 'poetry']
  },
  {
    id: 347,
    kanjiChar: '繁',
    onyomi: ['han ハン'],
    kunyomi: ['shige(ku) しげ(く)'],
    displayMeanings: ['luxuriant', 'thick'],
    fullDisplayMeanings: ['luxuriant', 'thick', 'overgrown', 'frequency', 'complexity', 'trouble'],
    meanings: ['luxuriant', 'thick', 'overgrown', 'frequency', 'complexity', 'trouble']
  },
  {
    id: 348,
    kanjiChar: '翼',
    onyomi: ['yoku ヨク'],
    kunyomi: ['tsubasa つばさ'],
    displayMeanings: ['wing', 'plane'],
    fullDisplayMeanings: ['wing', 'plane', 'flank'],
    meanings: ['wing', 'plane', 'flank']
  },
  {
    id: 349,
    kanjiChar: '茨',
    onyomi: ['shi シ', 'ji ジ'],
    kunyomi: ['ibara いばら', 'kaya かや', 'kusabuki くさぶき'],
    displayMeanings: ['briar', 'thorn'],
    fullDisplayMeanings: ['briar', 'thorn'],
    meanings: ['briar', 'thorn']
  },
  {
    id: 350,
    kanjiChar: '潟',
    onyomi: ['seki セキ'],
    kunyomi: ['kata かた', '-gata -がた'],
    displayMeanings: ['lagoon'],
    fullDisplayMeanings: ['lagoon'],
    meanings: ['lagoon']
  },
  {
    id: 351,
    kanjiChar: '敵',
    onyomi: ['teki テキ'],
    kunyomi: ['kataki かたき', 'ada あだ', 'kana(u) かな(う)'],
    displayMeanings: ['enemy', 'foe'],
    fullDisplayMeanings: ['enemy', 'foe', 'opponent'],
    meanings: ['enemy', 'foe', 'opponent']
  },
  {
    id: 352,
    kanjiChar: '魅',
    onyomi: ['mi ミ'],
    kunyomi: [],
    displayMeanings: ['fascination', 'charm'],
    fullDisplayMeanings: ['fascination', 'charm', 'bewitch'],
    meanings: ['fascination', 'charm', 'bewitch']
  },
  {
    id: 353,
    kanjiChar: '嫌',
    onyomi: ['ken ケン', 'gen ゲン'],
    kunyomi: ['kira(i) きら(い)', 'iya いや'],
    displayMeanings: ['dislike', 'detest'],
    fullDisplayMeanings: ['dislike', 'detest', 'hate'],
    meanings: ['dislike', 'detest', 'hate']
  },
  {
    id: 354,
    kanjiChar: '斉',
    onyomi: ['sei セイ', 'sai サイ'],
    kunyomi: ['soro(u) そろ(う)', 'hito(shii) ひと(しい)', 'ataru あたる', 'hayai はやい'],
    displayMeanings: ['adjusted', 'alike'],
    fullDisplayMeanings: ['adjusted', 'alike', 'equal', 'similar variety of'],
    meanings: ['adjusted', 'alike', 'equal', 'similar variety of']
  },
  {
    id: 355,
    kanjiChar: '敷',
    onyomi: ['fu フ'],
    kunyomi: ['shi(ku) し(く)', '-shi(ki) -し(き)'],
    displayMeanings: ['spread', 'pave'],
    fullDisplayMeanings: ['spread', 'pave', 'sit', 'promulgate'],
    meanings: ['spread', 'pave', 'sit', 'promulgate']
  },
  {
    id: 356,
    kanjiChar: '擁',
    onyomi: ['yoku ヨウ'],
    kunyomi: [],
    displayMeanings: ['hug', 'embrace'],
    fullDisplayMeanings: ['hug', 'embrace', 'possess', 'protect', 'lead'],
    meanings: ['hug', 'embrace', 'possess', 'protect', 'lead']
  },
  {
    id: 357,
    kanjiChar: '圏',
    onyomi: ['ken ケン'],
    kunyomi: ['kako(i) かこ(い)'],
    displayMeanings: ['sphere', 'circle'],
    fullDisplayMeanings: ['sphere', 'circle', 'radius', 'range'],
    meanings: ['sphere', 'circle', 'radius', 'range']
  },
  {
    id: 358,
    kanjiChar: '酸',
    onyomi: ['san サン'],
    kunyomi: ['su(i) す(い)'],
    displayMeanings: ['acid', 'sour'],
    fullDisplayMeanings: ['acid', 'bitterness', 'sour', 'tart'],
    meanings: ['acid', 'bitterness', 'sour', 'tart']
  },
  {
    id: 359,
    kanjiChar: '罰',
    onyomi: ['batsu バツ', 'bachi バチ', 'hatsu ハツ'],
    kunyomi: ['bas(suru) ばっ(する)'],
    displayMeanings: ['penalty', 'punishment'],
    fullDisplayMeanings: ['penalty', 'punishment'],
    meanings: ['penalty', 'punishment']
  },
  {
    id: 360,
    kanjiChar: '滅',
    onyomi: ['metsu メツ'],
    kunyomi: ['horo(biru) ほろ(びる)', 'horo(bu) ほろ(ぶ)', 'horo(basu) ほろ(ぼす)'],
    displayMeanings: ['destroy', 'ruin'],
    fullDisplayMeanings: ['destroy', 'ruin', 'overthrow', 'perish'],
    meanings: ['destroy', 'ruin', 'overthrow', 'perish']
  },
  {
    id: 361,
    kanjiChar: '礎',
    onyomi: ['so ソ'],
    kunyomi: ['ishizue いしずえ'],
    displayMeanings: ['cornerstone', 'foundation stone'],
    fullDisplayMeanings: ['cornerstone', 'foundation stone'],
    meanings: ['cornerstone', 'foundation stone']
  },
  {
    id: 362,
    kanjiChar: '腐',
    onyomi: ['fu フ'],
    kunyomi: ['kusa(ru) くさ(る)', '-kusa(ru) -くさ(る)'],
    displayMeanings: ['rot', 'decay'],
    fullDisplayMeanings: ['rot', 'decay', 'sour'],
    meanings: ['rot', 'decay', 'sour']
  },
  {
    id: 363,
    kanjiChar: '脚',
    onyomi: ['kyaku キャク', 'kya キャ', 'kaku カク'],
    kunyomi: ['ashi あし'],
    displayMeanings: ['leg', 'undercarriage'],
    fullDisplayMeanings: ['skids', 'leg', 'undercarriage', 'lower part', 'base'],
    meanings: ['skids', 'leg', 'undercarriage', 'lower part', 'base']
  },
  {
    id: 364,
    kanjiChar: '菱',
    onyomi: ['ryou リョウ'],
    kunyomi: ['hishi ひし'],
    displayMeanings: ['diamond (shape)', 'water chestnut'],
    fullDisplayMeanings: ['diamond (shape)', 'water chestnut', 'rhombus'],
    meanings: ['diamond (shape)', 'water chestnut', 'rhombus']
  },
  {
    id: 365,
    kanjiChar: '潮',
    onyomi: ['chou チョウ'],
    kunyomi: ['shio しお', 'ushio うしお'],
    displayMeanings: ['tide', 'salt water'],
    fullDisplayMeanings: ['tide', 'salt water', 'opportunity'],
    meanings: ['tide', 'salt water', 'opportunity']
  },
  {
    id: 366,
    kanjiChar: '梅',
    onyomi: ['bai バイ'],
    kunyomi: ['ume うめ'],
    displayMeanings: ['plum'],
    fullDisplayMeanings: ['plum'],
    meanings: ['plum']
  },
  {
    id: 367,
    kanjiChar: '尽',
    onyomi: ['jin ジン', 'san サン'],
    kunyomi: ['tsu(kiru) つ(きる)', 'tsu(kusu) つ(くす)', '-dzu(ku) -づ(く)', 'zu(ku) -ず(く)'],
    displayMeanings: ['exhaust', 'use up'],
    fullDisplayMeanings: ['exhaust', 'use up', 'run out of', 'deplete', 'befriend', 'serve'],
    meanings: ['exhaust', 'use up', 'run out of', 'deplete', 'befriend', 'serve']
  },
  {
    id: 368,
    kanjiChar: '僕',
    onyomi: ['boku ボク'],
    kunyomi: ['shimobe しもべ'],
    displayMeanings: ['me', 'I (male)'],
    fullDisplayMeanings: ['me', 'I (male)', 'servant', 'manservant'],
    meanings: ['me', 'I (male)', 'servant', 'manservant']
  },
  {
    id: 369,
    kanjiChar: '桜',
    onyomi: ['ou オウ', 'you ヨウ'],
    kunyomi: ['sakura さくら'],
    displayMeanings: ['cherry'],
    fullDisplayMeanings: ['cherry'],
    meanings: ['cherry']
  },
  {
    id: 370,
    kanjiChar: '滑',
    onyomi: ['katsu カツ', 'kotsu コツ'],
    kunyomi: ['sube(ru) すべ.る', 'name(raka) なめ.らか'],
    displayMeanings: ['slippery', 'slide'],
    fullDisplayMeanings: ['slippery', 'slide', 'slip', 'fail exam'],
    meanings: ['slippery', 'slide', 'slip', 'fail exam']
  },
  {
    id: 371,
    kanjiChar: '孤',
    onyomi: ['ko コ'],
    kunyomi: [],
    displayMeanings: ['orphan', 'alone'],
    fullDisplayMeanings: ['orphan', 'alone'],
    meanings: ['orphan', 'alone']
  },
  {
    id: 372,
    kanjiChar: '煕',
    onyomi: ['ki キ'],
    kunyomi: ['tanoshi(mu) たのし(む)', 'hika(ru) ひか(る)', 'hiro(i) ひろ(い)', 'yoroko(bu) よろこ(ぶ)', 'kawa(ku) かわ(く)', 'akiraka あきらか'],
    displayMeanings: ['shine'],
    fullDisplayMeanings: ['shine'],
    meanings: ['shine']
  },
  {
    id: 373,
    kanjiChar: '炎',
    onyomi: ['en エン'],
    kunyomi: ['honoo ほのお'],
    displayMeanings: ['inflammation', 'flame'],
    fullDisplayMeanings: ['inflammation', 'flame', 'blaze'],
    meanings: ['inflammation', 'flame', 'blaze']
  },
  {
    id: 374,
    kanjiChar: '賠',
    onyomi: ['bai バイ'],
    kunyomi: [],
    displayMeanings: ['compensation', 'indemnify'],
    fullDisplayMeanings: ['compensation', 'indemnify'],
    meanings: ['compensation', 'indemnify']
  },
  {
    id: 375,
    kanjiChar: '句',
    onyomi: ['ku ク'],
    kunyomi: [],
    displayMeanings: ['phrase', 'clause'],
    fullDisplayMeanings: ['phrase', 'clause', 'sentence', 'passage', 'paragraph', 'counter for haiku'],
    meanings: ['phrase', 'clause', 'sentence', 'passage', 'paragraph', 'counter for haiku']
  },
  {
    id: 376,
    kanjiChar: '寿',
    onyomi: ['ju ジュ', 'su ス', 'shuu シュウ'],
    kunyomi: ['kotobuki ことぶき', 'kotobu(ku) ことぶ(く)', 'kotoho(gu) ことほ(ぐ)'],
    displayMeanings: ['longevity', 'congratulations'],
    fullDisplayMeanings: ['longevity', 'congratulations', 'one\'s natural life'],
    meanings: ['longevity', 'congratulations', 'one\'s natural life']
  },
  {
    id: 377,
    kanjiChar: '鋼',
    onyomi: ['kou コウ'],
    kunyomi: ['hagane はがね'],
    displayMeanings: ['steel'],
    fullDisplayMeanings: ['steel'],
    meanings: ['steel']
  },
  {
    id: 378,
    kanjiChar: '頑',
    onyomi: ['gan ガン'],
    kunyomi: ['kataku(na) かたく(な)'],
    displayMeanings: ['stubborn', 'foolish'],
    fullDisplayMeanings: ['stubborn', 'foolish', 'firmly'],
    meanings: ['stubborn', 'foolish', 'firmly']
  },
  {
    id: 379,
    kanjiChar: '鎖',
    onyomi: ['sa サ'],
    kunyomi: ['kusari くさり', 'toza(su) とざ.す'],
    displayMeanings: ['chain', 'irons'],
    fullDisplayMeanings: ['chain', 'irons', 'connection'],
    meanings: ['chain', 'irons', 'connection']
  },
  {
    id: 380,
    kanjiChar: '彩',
    onyomi: ['sai サイ'],
    kunyomi: ['irodo(ru) いろど.る'],
    displayMeanings: ['coloring', 'paint'],
    fullDisplayMeanings: ['coloring', 'paint', 'makeup'],
    meanings: ['coloring', 'paint', 'makeup']
  },
  {
    id: 381,
    kanjiChar: '摩',
    onyomi: ['ma マ'],
    kunyomi: ['ma(suru) ま(する)', 'sasu(ru) さす(る)', 'su(ru) す(る)'],
    displayMeanings: ['chafe', 'rub'],
    fullDisplayMeanings: ['chafe', 'rub', 'polish', 'grind', 'scrape'],
    meanings: ['chafe', 'rub', 'polish', 'grind', 'scrape']
  },
  {
    id: 382,
    kanjiChar: '励',
    onyomi: ['rei レイ'],
    kunyomi: ['hage(mu) はげ(む)', 'hage(masu) はげ(ます)'],
    displayMeanings: ['encourage', 'be diligent'],
    fullDisplayMeanings: ['encourage', 'be diligent', 'inspire'],
    meanings: ['encourage', 'be diligent', 'inspire']
  },
  {
    id: 383,
    kanjiChar: '縦',
    onyomi: ['juu ジュウ'],
    kunyomi: ['tate たて'],
    displayMeanings: ['vertical', 'length'],
    fullDisplayMeanings: ['vertical', 'length', 'height', 'self-indulgent', 'wayward'],
    meanings: ['vertical', 'length', 'height', 'self-indulgent', 'wayward']
  },
  {
    id: 384,
    kanjiChar: '輝',
    onyomi: ['ki キ'],
    kunyomi: ['kagaya(ku) かがや(く)'],
    displayMeanings: ['radiance', 'shine'],
    fullDisplayMeanings: ['radiance', 'shine', 'sparkle', 'gleam', 'twinkle'],
    meanings: ['radiance', 'shine', 'sparkle', 'gleam', 'twinkle']
  },
  {
    id: 385,
    kanjiChar: '蓄',
    onyomi: ['chiku チク'],
    kunyomi: ['takuwa(eru) たくわ(える)'],
    displayMeanings: ['amass', 'raise'],
    fullDisplayMeanings: ['amass', 'raise', 'hoard', 'store'],
    meanings: ['amass', 'raise', 'hoard', 'store']
  },
  {
    id: 386,
    kanjiChar: '軸',
    onyomi: ['jiku ジク'],
    kunyomi: [],
    displayMeanings: ['axis', 'pivot'],
    fullDisplayMeanings: ['axis', 'pivot', 'stem', 'stalk', 'counter for book scrolls'],
    meanings: ['axis', 'pivot', 'stem', 'stalk', 'counter for book scrolls']
  },
  {
    id: 387,
    kanjiChar: '巡',
    onyomi: ['jun ジュン'],
    kunyomi: ['megu(ru) めぐ(る)', 'megu(ri) めぐ(り)'],
    displayMeanings: ['patrol', 'go around'],
    fullDisplayMeanings: ['patrol', 'go around', 'circumference'],
    meanings: ['patrol', 'go around', 'circumference']
  },
  {
    id: 388,
    kanjiChar: '稼',
    onyomi: ['ka カ'],
    kunyomi: ['kase(gu) かせ(ぐ)'],
    displayMeanings: ['earnings', 'work'],
    fullDisplayMeanings: ['earnings', 'work', 'earn money'],
    meanings: ['earnings', 'work', 'earn money']
  },
  {
    id: 389,
    kanjiChar: '瞬',
    onyomi: ['shun シュン'],
    kunyomi: ['matata(ku) またた(く)', 'majiro(gu) まじろ(ぐ)'],
    displayMeanings: ['wink', 'blink'],
    fullDisplayMeanings: ['wink', 'blink', 'twinkle'],
    meanings: ['wink', 'blink', 'twinkle']
  },
  {
    id: 390,
    kanjiChar: '砲',
    onyomi: ['hou ホウ'],
    kunyomi: [],
    displayMeanings: ['cannon', 'gun'],
    fullDisplayMeanings: ['cannon', 'gun'],
    meanings: ['cannon', 'gun']
  },
  {
    id: 391,
    kanjiChar: '噴',
    onyomi: ['fun フン'],
    kunyomi: ['fuku ふ(く)'],
    displayMeanings: ['erupt', 'spout'],
    fullDisplayMeanings: ['erupt', 'spout', 'emit', 'flush out'],
    meanings: ['erupt', 'spout', 'emit', 'flush out']
  },
  {
    id: 392,
    kanjiChar: '誇',
    onyomi: ['ko コ'],
    kunyomi: ['hoko(ru) ほこ(る)'],
    displayMeanings: ['boast', 'be proud'],
    fullDisplayMeanings: ['boast', 'be proud', 'pride', 'triumphantly'],
    meanings: ['boast', 'be proud', 'pride', 'triumphantly']
  },
  {
    id: 393,
    kanjiChar: '祥',
    onyomi: ['shou ショウ'],
    kunyomi: ['saiwa(i) さいわ(い)', 'kiza(shi) きざ(し)', 'yo(i) よ(い)', 'tsumabi(raka) つまび(らか)'],
    displayMeanings: ['auspicious', 'happiness'],
    fullDisplayMeanings: ['auspicious', 'happiness', 'blessedness', 'good omen', 'good fortune'],
    meanings: ['auspicious', 'happiness', 'blessedness', 'good omen', 'good fortune']
  },
  {
    id: 394,
    kanjiChar: '牲',
    onyomi: ['sei セイ'],
    kunyomi: [],
    displayMeanings: ['animal sacrifice', 'offering'],
    fullDisplayMeanings: ['animal sacrifice', 'offering'],
    meanings: ['animal sacrifice', 'offering']
  },
  {
    id: 395,
    kanjiChar: '秩',
    onyomi: ['chitsu チツ'],
    kunyomi: [],
    displayMeanings: ['regularity', 'salary'],
    fullDisplayMeanings: ['regularity', 'salary', 'order'],
    meanings: ['regularity', 'salary', 'order']
  },
  {
    id: 396,
    kanjiChar: '帝',
    onyomi: ['tei テイ'],
    kunyomi: ['mikado みかど'],
    displayMeanings: ['sovereign', 'emperor'],
    fullDisplayMeanings: ['sovereign', 'the emperor', 'god', 'creator'],
    meanings: ['sovereign', 'the emperor', 'god', 'creator']
  },
  {
    id: 397,
    kanjiChar: '宏',
    onyomi: ['kou コウ'],
    kunyomi: ['hiro(i) ひろ(い)'],
    displayMeanings: ['wide', 'large'],
    fullDisplayMeanings: ['wide', 'large'],
    meanings: ['wide', 'large']
  },
  {
    id: 398,
    kanjiChar: '唆',
    onyomi: ['sa サ'],
    kunyomi: ['soso(ru) そそ(る)', 'sosonoka(su) そそのか(す)'],
    displayMeanings: ['tempt', 'seduce'],
    fullDisplayMeanings: ['tempt', 'seduce', 'instigate', 'promote'],
    meanings: ['tempt', 'seduce', 'instigate', 'promote']
  },
  {
    id: 399,
    kanjiChar: '阻',
    onyomi: ['so ソ'],
    kunyomi: ['haba(mu) はば(む)'],
    displayMeanings: ['thwart', 'prevent'],
    fullDisplayMeanings: ['thwart', 'separate from', 'prevent', 'obstruct', 'deter', 'impede'],
    meanings: ['thwart', 'separate from', 'prevent', 'obstruct', 'deter', 'impede']
  },
  {
    id: 400,
    kanjiChar: '泰',
    onyomi: ['tai タイ'],
    kunyomi: [],
    displayMeanings: ['peaceful', 'calm'],
    fullDisplayMeanings: ['peaceful', 'calm', 'peace', 'easy', 'Thailand', 'extreme', 'excessive', 'great'],
    meanings: ['peaceful', 'calm', 'peace', 'easy', 'Thailand', 'extreme', 'excessive', 'great']
  },
    {
    id: 401,
    kanjiChar: '賄',
    onyomi: ['wai ワイ'],
    kunyomi: ['makana(u) まかな(う)'],
    displayMeanings: ['bribe', 'finance'],
    fullDisplayMeanings: ['bribe', 'board', 'supply', 'finance'],
    meanings: ['bribe', 'board', 'supply', 'finance']
  },
  {
    id: 402,
    kanjiChar: '撲',
    onyomi: ['boku ボク'],
    kunyomi: [],
    displayMeanings: ['slap', 'strike'],
    fullDisplayMeanings: ['slap', 'strike', 'hit', 'beat', 'tell', 'speak'],
    meanings: ['slap', 'strike', 'hit', 'beat', 'tell', 'speak']
  },
  {
    id: 403,
    kanjiChar: '堀',
    onyomi: ['kutsu クツ'],
    kunyomi: ['hori ほり'],
    displayMeanings: ['ditch', 'moat'],
    fullDisplayMeanings: ['ditch', 'moat', 'canal'],
    meanings: ['ditch', 'moat', 'canal']
  },
  {
    id: 404,
    kanjiChar: '菊',
    onyomi: ['kiku キク'],
    kunyomi: [],
    displayMeanings: ['chrysanthemum'],
    fullDisplayMeanings: ['chrysanthemum'],
    meanings: ['chrysanthemum']
  },
  {
    id: 405,
    kanjiChar: '絞',
    onyomi: ['kou コウ'],
    kunyomi: ['shibo(ru) しぼ(る)', 'shi(meru) し(める)', 'shi(maru) し(まる)'],
    displayMeanings: ['strangle', 'constrict'],
    fullDisplayMeanings: ['strangle', 'constrict', 'wring'],
    meanings: ['strangle', 'constrict', 'wring']
  },
  {
    id: 406,
    kanjiChar: '縁',
    onyomi: ['en エン', '-nen -ネン'],
    kunyomi: ['fuchi ふち', 'yukari ゆかり', 'yosuga よすが', 'heri へり', 'enishi えにし'],
    displayMeanings: ['affinity', 'relation'],
    fullDisplayMeanings: ['affinity', 'relation', 'connection', 'edge', 'border', 'verge', 'brink'],
    meanings: ['affinity', 'relation', 'connection', 'edge', 'border', 'verge', 'brink']
  },
  {
    id: 407,
    kanjiChar: '唯',
    onyomi: ['yui ユイ', 'i イ'],
    kunyomi: ['tada ただ'],
    displayMeanings: ['solely', 'only'],
    fullDisplayMeanings: ['solely', 'only', 'merely', 'simply'],
    meanings: ['solely', 'only', 'merely', 'simply']
  },
  {
    id: 408,
    kanjiChar: '膨',
    onyomi: ['bou ボウ'],
    kunyomi: ['fuku(ramu) ふく(らむ)', 'fuku(reru) ふく(れる)'],
    displayMeanings: ['swell', 'get fat'],
    fullDisplayMeanings: ['swell', 'get fat', 'thick'],
    meanings: ['swell', 'get fat', 'thick']
  },
  {
    id: 409,
    kanjiChar: '耐',
    onyomi: ['tai タイ'],
    kunyomi: ['ta(eru) た(える)'],
    displayMeanings: ['-proof', 'enduring'],
    fullDisplayMeanings: ['-proof', 'enduring'],
    meanings: ['-proof', 'enduring']
  },
  {
    id: 410,
    kanjiChar: '塾',
    onyomi: ['juku ジュク'],
    kunyomi: [],
    displayMeanings: ['cram school', 'private school'],
    fullDisplayMeanings: ['cram school', 'private school'],
    meanings: ['cram school', 'private school']
  },
  {
    id: 411,
    kanjiChar: '漏',
    onyomi: ['rou ロウ'],
    kunyomi: ['mo(ru) も(る)', 'mo(reru) も(れる)', 'mo(rasu) も(らす)'],
    displayMeanings: ['leak', 'escape'],
    fullDisplayMeanings: ['leak', 'escape', 'time'],
    meanings: ['leak', 'escape', 'time']
  },
  {
    id: 412,
    kanjiChar: '慶',
    onyomi: ['kei ケイ'],
    kunyomi: ['yoroko(bi) よろこ(び)'],
    displayMeanings: ['jubilation', 'congratulate'],
    fullDisplayMeanings: ['jubilation', 'congratulate', 'rejoice', 'be happy'],
    meanings: ['jubilation', 'congratulate', 'rejoice', 'be happy']
  },
  {
    id: 413,
    kanjiChar: '猛',
    onyomi: ['mou モウ'],
    kunyomi: [],
    displayMeanings: ['fierce', 'rave'],
    fullDisplayMeanings: ['fierce', 'rave', 'rush', 'become furious', 'wildness', 'strength'],
    meanings: ['fierce', 'rave', 'rush', 'become furious', 'wildness', 'strength']
  },
  {
    id: 414,
    kanjiChar: '芳',
    onyomi: ['hou ホウ'],
    kunyomi: ['kanba(shii) かんば(しい)'],
    displayMeanings: ['perfume', 'fragrant'],
    fullDisplayMeanings: ['perfume', 'balmy', 'favorable', 'fragrant'],
    meanings: ['perfume', 'balmy', 'favorable', 'fragrant']
  },
  {
    id: 415,
    kanjiChar: '懲',
    onyomi: ['chou チョウ'],
    kunyomi: ['ko(riru) こ(りる)', 'ko(rasu) こ(らす)', 'ko(rashimeru) こ(らしめる)'],
    displayMeanings: ['penal', 'chastise'],
    fullDisplayMeanings: ['penal', 'chastise', 'punish', 'discipline'],
    meanings: ['penal', 'chastise', 'punish', 'discipline']
  },
  {
    id: 416,
    kanjiChar: '剣',
    onyomi: ['ken ケン'],
    kunyomi: ['tsurugi つるぎ'],
    displayMeanings: ['sabre', 'sword'],
    fullDisplayMeanings: ['sabre', 'sword', 'blade', 'clock hand'],
    meanings: ['sabre', 'sword', 'blade', 'clock hand']
  },
  {
    id: 417,
    kanjiChar: '幌',
    onyomi: ['kou コウ'],
    kunyomi: ['horo ほろ', 'tobari とばり'],
    displayMeanings: ['canopy', 'awning'],
    fullDisplayMeanings: ['canopy', 'awning', 'hood', 'curtain'],
    meanings: ['canopy', 'awning', 'hood', 'curtain']
  },
  {
    id: 418,
    kanjiChar: '彰',
    onyomi: ['shou ショウ'],
    kunyomi: [],
    displayMeanings: ['patent', 'clear'],
    fullDisplayMeanings: ['patent', 'clear'],
    meanings: ['patent', 'clear']
  },
  {
    id: 419,
    kanjiChar: '棋',
    onyomi: ['ko キ'],
    kunyomi: ['go ご'],
    displayMeanings: ['chess piece', 'Japanese chess'],
    fullDisplayMeanings: ['chess piece', 'Japanese chess', 'shogi'],
    meanings: ['chess piece', 'Japanese chess', 'shogi']
  },
  {
    id: 420,
    kanjiChar: '丁',
    onyomi: ['chou チョウ', 'tei テイ', 'chin チン', 'tou トウ', 'chi チ'],
    kunyomi: ['hinoto ひのと'],
    displayMeanings: ['street', 'ward'],
    fullDisplayMeanings: ['street', 'ward', 'town', 'counter for guns', 'tools'],
    meanings: ['street', 'ward', 'town', 'counter for guns', 'tools']
  },
  {
    id: 421,
    kanjiChar: '恒',
    onyomi: ['kou コウ'],
    kunyomi: ['tsune つね', 'tsuneni つねに'],
    displayMeanings: ['constancy', 'always'],
    fullDisplayMeanings: ['constancy', 'always'],
    meanings: ['constancy', 'always']
  },
  {
    id: 422,
    kanjiChar: '揚',
    onyomi: ['you ヨウ'],
    kunyomi: ['a(geru) あ(げる)', '-a(ge) -あ(げ)'],
    displayMeanings: ['raise', 'elevate'],
    fullDisplayMeanings: ['raise', 'elevate', 'hoist', 'praise', 'extol', 'fry in deep fat'],
    meanings: ['raise', 'elevate', 'hoist', 'praise', 'extol', 'fry in deep fat']
  },
  {
    id: 423,
    kanjiChar: '冒',
    onyomi: ['bou ボウ'],
    kunyomi: ['oka(su) おか(す)'],
    displayMeanings: ['risk', 'face'],
    fullDisplayMeanings: ['risk', 'face', 'defy', 'dare', 'damage', 'assume (a name)'],
    meanings: ['risk', 'face', 'defy', 'dare', 'damage', 'assume (a name)']
  },
  {
    id: 424,
    kanjiChar: '之',
    onyomi: ['shi シ'],
    kunyomi: ['no の', 'kore これ', 'yuku ゆく', 'kono この'],
    displayMeanings: ['of', 'this'],
    fullDisplayMeanings: ['of', 'this'],
    meanings: ['of', 'this']
  },
  {
    id: 425,
    kanjiChar: '曽',
    onyomi: ['sou ソウ', 'so ソ'],
    kunyomi: ['katsu かつ', 'katsute かつて', 'sunawachi すなわち'],
    displayMeanings: ['formerly', 'once'],
    fullDisplayMeanings: ['formerly', 'once', 'before', 'ever', 'never', 'ex-'],
    meanings: ['formerly', 'once', 'before', 'ever', 'never', 'ex-']
  },
  {
    id: 426,
    kanjiChar: '倫',
    onyomi: ['rin リン'],
    kunyomi: [],
    displayMeanings: ['ethics', 'companion'],
    fullDisplayMeanings: ['ethics', 'companion'],
    meanings: ['ethics', 'companion']
  },
  {
    id: 427,
    kanjiChar: '陳',
    onyomi: ['chin チン'],
    kunyomi: ['hi(neru) ひ(ねる)'],
    displayMeanings: ['exhibit', 'state'],
    fullDisplayMeanings: ['exhibit', 'state', 'relate', 'explain'],
    meanings: ['exhibit', 'state', 'relate', 'explain']
  },
  {
    id: 428,
    kanjiChar: '憶',
    onyomi: ['oku オク'],
    kunyomi: [],
    displayMeanings: ['recollection', 'remember'],
    fullDisplayMeanings: ['recollection', 'think', 'remember'],
    meanings: ['recollection', 'think', 'remember']
  },
  {
    id: 429,
    kanjiChar: '潜',
    onyomi: ['sen セン'],
    kunyomi: ['hiso(mu) ひそ(む)', 'mogu(ru) もぐ(る)', 'kaku(reru) かく(れる)', 'kugu(ru) くぐ(る)'],
    displayMeanings: ['submerge', 'conceal'],
    fullDisplayMeanings: ['submerge', 'conceal', 'hide', 'lower (voice)', 'hush'],
    meanings: ['submerge', 'conceal', 'hide', 'lower (voice)', 'hush']
  },
  {
    id: 430,
    kanjiChar: '梨',
    onyomi: ['ri リ'],
    kunyomi: ['nashi なし'],
    displayMeanings: ['pear tree'],
    fullDisplayMeanings: ['pear tree'],
    meanings: ['pear tree']
  },
  {
    id: 431,
    kanjiChar: '仁',
    onyomi: ['jin ジン', 'ni ニ', 'nin ニン'],
    kunyomi: [],
    displayMeanings: ['humanity', 'virtue'],
    fullDisplayMeanings: ['humanity', 'virtue', 'benevolence', 'charity', 'man', 'kernel'],
    meanings: ['humanity', 'virtue', 'benevolence', 'charity', 'man', 'kernel']
  },
  {
    id: 432,
    kanjiChar: '克',
    onyomi: ['koku コク'],
    kunyomi: ['ka(tsu) か(つ)'],
    displayMeanings: ['overcome', 'skillfully'],
    fullDisplayMeanings: ['overcome', 'kindly', 'skillfully'],
    meanings: ['overcome', 'kindly', 'skillfully']
  },
  {
    id: 433,
    kanjiChar: '岳',
    onyomi: ['gaku ガク'],
    kunyomi: ['dake たけ'],
    displayMeanings: ['point', 'peak'],
    fullDisplayMeanings: ['point', 'peak', 'mountain'],
    meanings: ['point', 'peak', 'mountain']
  },
  {
    id: 434,
    kanjiChar: '概',
    onyomi: ['gai ガイ'],
    kunyomi: ['oomu(ne) おおむ(ね)'],
    displayMeanings: ['outline', 'approximation'],
    fullDisplayMeanings: ['outline', 'condition', 'approximation', 'generally'],
    meanings: ['outline', 'condition', 'approximation', 'generally']
  },
  {
    id: 435,
    kanjiChar: '拘',
    onyomi: ['kou コウ'],
    kunyomi: ['kaka(waru) かか(わる)'],
    displayMeanings: ['arrest', 'seize'],
    fullDisplayMeanings: ['arrest', 'seize', 'concerned', 'adhere to', 'despite'],
    meanings: ['arrest', 'seize', 'concerned', 'adhere to', 'despite']
  },
  {
    id: 436,
    kanjiChar: '墓',
    onyomi: ['bo ボ'],
    kunyomi: ['haka はか'],
    displayMeanings: ['grave', 'tomb'],
    fullDisplayMeanings: ['grave', 'tomb'],
    meanings: ['grave', 'tomb']
  },
  {
    id: 437,
    kanjiChar: '黙',
    onyomi: ['moku モク', 'boku ボク'],
    kunyomi: ['dama(ru) だま(る)', 'moda(su) もだ(す)'],
    displayMeanings: ['silence', 'become silent'],
    fullDisplayMeanings: ['silence', 'become silent', 'stop speaking', 'leave as is'],
    meanings: ['silence', 'become silent', 'stop speaking', 'leave as is']
  },
  {
    id: 438,
    kanjiChar: '須',
    onyomi: ['su ス', 'shu シュ'],
    kunyomi: ['subekara(ku) すべから(く)', 'subeshi すべし', 'hige ひげ', 'matsu まつ', 'mochi(iru) もち(いる)', 'moto(meru) もと(める)'],
    displayMeanings: ['ought', 'necessarily'],
    fullDisplayMeanings: ['ought', 'by all means', 'necessarily'],
    meanings: ['ought', 'by all means', 'necessarily']
  },
  {
    id: 439,
    kanjiChar: '偏',
    onyomi: ['hen ヘン'],
    kunyomi: ['katayo(ru) かたよ(る)'],
    displayMeanings: ['partial', 'biased'],
    fullDisplayMeanings: ['partial', 'side', 'left-side radical', 'inclining', 'biased'],
    meanings: ['partial', 'side', 'left-side radical', 'inclining', 'biased']
  },
  {
    id: 440,
    kanjiChar: '雰',
    onyomi: ['fun フン'],
    kunyomi: [],
    displayMeanings: ['atmosphere', 'fog'],
    fullDisplayMeanings: ['atmosphere', 'fog'],
    meanings: ['atmosphere', 'fog']
  },
  {
    id: 441,
    kanjiChar: '遇',
    onyomi: ['guu グウ'],
    kunyomi: ['a(u) あ(う)'],
    displayMeanings: ['meet', 'encounter'],
    fullDisplayMeanings: ['meet', 'encounter', 'interview', 'treat', 'entertain', 'receive', 'deal with'],
    meanings: ['meet', 'encounter', 'interview', 'treat', 'entertain', 'receive', 'deal with']
  },
  {
    id: 442,
    kanjiChar: '諮',
    onyomi: ['shi シ'],
    kunyomi: ['haka(ru) はか(る)'],
    displayMeanings: ['consult with'],
    fullDisplayMeanings: ['consult with'],
    meanings: ['consult with']
  },
  {
    id: 443,
    kanjiChar: '狭',
    onyomi: ['kyou キョウ', 'kou コウ'],
    kunyomi: ['sema(i) せま(い)', 'seba(meru) せば(める)', 'sa さ'],
    displayMeanings: ['cramped', 'narrow'],
    fullDisplayMeanings: ['cramped', 'narrow', 'contract', 'tight'],
    meanings: ['cramped', 'narrow', 'contract', 'tight']
  },
  {
    id: 444,
    kanjiChar: '卓',
    onyomi: ['taku タク'],
    kunyomi: [],
    displayMeanings: ['eminent', 'table'],
    fullDisplayMeanings: ['eminent', 'table', 'desk', 'high'],
    meanings: ['eminent', 'table', 'desk', 'high']
  },
  {
    id: 445,
    kanjiChar: '亀',
    onyomi: ['ki キ', 'kyuu キュウ', 'kin キン'],
    kunyomi: ['kame かめ'],
    displayMeanings: ['tortoise', 'turtle'],
    fullDisplayMeanings: ['tortoise', 'turtle'],
    meanings: ['tortoise', 'turtle']
  },
  {
    id: 446,
    kanjiChar: '糧',
    onyomi: ['ryou リョウ', 'rou ロウ'],
    kunyomi: ['kate かて'],
    displayMeanings: ['provisions', 'food'],
    fullDisplayMeanings: ['provisions', 'food', 'bread'],
    meanings: ['provisions', 'food', 'bread']
  },
  {
    id: 447,
    kanjiChar: '梶',
    onyomi: ['bi ビ'],
    kunyomi: ['kaji かじ', 'kozue こずえ'],
    displayMeanings: ['sculling oar'],
    fullDisplayMeanings: ['sculling oar'],
    meanings: ['sculling oar']
  },
  {
    id: 448,
    kanjiChar: '簿',
    onyomi: ['bo ボ'],
    kunyomi: [],
    displayMeanings: ['register', 'record book'],
    fullDisplayMeanings: ['register', 'record book'],
    meanings: ['register', 'record book']
  },
  {
    id: 449,
    kanjiChar: '炉',
    onyomi: ['ro ロ'],
    kunyomi: ['irori いろり'],
    displayMeanings: ['hearth', 'furnace'],
    fullDisplayMeanings: ['hearth', 'furnace', 'kiln', 'reactor'],
    meanings: ['hearth', 'furnace', 'kiln', 'reactor']
  },
  {
    id: 450,
    kanjiChar: '牧',
    onyomi: ['boku ボク'],
    kunyomi: ['maki まき'],
    displayMeanings: ['breed', 'care for'],
    fullDisplayMeanings: ['breed', 'care for', 'shepherd', 'feed', 'pasture'],
    meanings: ['breed', 'care for', 'shepherd', 'feed', 'pasture']
  },
  {
    id: 451,
    kanjiChar: '殊',
    onyomi: ['shu シュ'],
    kunyomi: ['koto こと'],
    displayMeanings: ['particularly', 'especially'],
    fullDisplayMeanings: ['particularly', 'especially', 'exceptionally'],
    meanings: ['particularly', 'especially', 'exceptionally']
  },
  {
    id: 452,
    kanjiChar: '殖',
    onyomi: ['shoku ショク'],
    kunyomi: ['fu(eru) ふ(える)', 'fu(yasu) ふ(やす)'],
    displayMeanings: ['augment', 'increase'],
    fullDisplayMeanings: ['augment', 'increase', 'multiply', 'raise'],
    meanings: ['augment', 'increase', 'multiply', 'raise']
  },
  {
    id: 453,
    kanjiChar: '艦',
    onyomi: ['kan カン'],
    kunyomi: [],
    displayMeanings: ['warship'],
    fullDisplayMeanings: ['warship'],
    meanings: ['warship']
  },
  {
    id: 454,
    kanjiChar: '輩',
    onyomi: ['hai ハイ'],
    kunyomi: ['-bara -ばら', 'yakara やから', 'yakai やかい', 'tomogara ともがら'],
    displayMeanings: ['comrade', 'fellow'],
    fullDisplayMeanings: ['comrade', 'fellow', 'people', 'companions'],
    meanings: ['comrade', 'fellow', 'people', 'companions']
  },
  {
    id: 455,
    kanjiChar: '穴',
    onyomi: ['ketsu ケツ'],
    kunyomi: ['ana あな'],
    displayMeanings: ['hole', 'aperture'],
    fullDisplayMeanings: ['hole', 'aperture', 'slit', 'cave', 'den'],
    meanings: ['hole', 'aperture', 'slit', 'cave', 'den']
  },
  {
    id: 456,
    kanjiChar: '奇',
    onyomi: ['ki キ'],
    kunyomi: ['ku(shiki) く(しき)', 'aya(shii) あや(しい)', 'kushi くし', 'mezura(shii) めずら(しい)'],
    displayMeanings: ['strange', 'strangeness'],
    fullDisplayMeanings: ['strange', 'strangeness', 'curiosity'],
    meanings: ['strange', 'strangeness', 'curiosity']
  },
  {
    id: 457,
    kanjiChar: '慢',
    onyomi: ['man マン'],
    kunyomi: [],
    displayMeanings: ['ridicule', 'laziness'],
    fullDisplayMeanings: ['ridicule', 'laziness'],
    meanings: ['ridicule', 'laziness']
  },
  {
    id: 458,
    kanjiChar: '鶴',
    onyomi: ['kaku カク'],
    kunyomi: ['tsuru つる'],
    displayMeanings: ['crane', 'stork'],
    fullDisplayMeanings: ['crane', 'stork'],
    meanings: ['crane', 'stork']
  },
  {
    id: 459,
    kanjiChar: '謀',
    onyomi: ['bou ボウ', 'mu ム'],
    kunyomi: ['haka(ru) はか(る)', 'tabaka(ru) たばか(る)', 'hakarigoto はかりごと'],
    displayMeanings: ['conspire', 'cheat'],
    fullDisplayMeanings: ['conspire', 'cheat', 'impose on', 'plan', 'devise', 'scheme', 'have in mind', 'deceive'],
    meanings: ['conspire', 'cheat', 'impose on', 'plan', 'devise', 'scheme', 'have in mind', 'deceive']
  },
  {
    id: 460,
    kanjiChar: '暖',
    onyomi: ['dan ダン', 'non ノン'],
    kunyomi: ['atata(kai) あたた(かい)'],
    displayMeanings: ['warmth'],
    fullDisplayMeanings: ['warmth'],
    meanings: ['warmth']
  },
  {
    id: 461,
    kanjiChar: '昌',
    onyomi: ['shou ショウ'],
    kunyomi: ['sakan さかん'],
    displayMeanings: ['prosperous', 'bright'],
    fullDisplayMeanings: ['prosperous', 'bright', 'clear'],
    meanings: ['prosperous', 'bright', 'clear']
  },
  {
    id: 462,
    kanjiChar: '拍',
    onyomi: ['haku ハク', 'hyou ヒョウ'],
    kunyomi: [],
    displayMeanings: ['clap', 'beat (music)'],
    fullDisplayMeanings: ['clap', 'beat (music)'],
    meanings: ['clap', 'beat (music)']
  },
  {
    id: 463,
    kanjiChar: '朗',
    onyomi: ['rou ロウ'],
    kunyomi: ['hoga(raka) ほが(らか)', 'aki(raka) あき(らか)'],
    displayMeanings: ['melodious', 'clear'],
    fullDisplayMeanings: ['melodious', 'clear', 'bright', 'serene', 'cheerful'],
    meanings: ['melodious', 'clear', 'bright', 'serene', 'cheerful']
  },
  {
    id: 464,
    kanjiChar: '丈',
    onyomi: ['jou ジョウ'],
    kunyomi: ['take たけ', 'dake だけ'],
    displayMeanings: ['length', 'measure'],
    fullDisplayMeanings: ['length', 'ten shaku', 'measure', 'Mr.', 'Ms.', 'height', 'stature', 'all (one has)', 'only', 'that\'s all', 'merely'],
    meanings: ['length', 'ten shaku', 'measure', 'Mr.', 'Ms.', 'height', 'stature', 'all (one has)', 'only', 'that\'s all', 'merely']
  },
  {
    id: 465,
    kanjiChar: '寛',
    onyomi: ['kan カン'],
    kunyomi: ['kutsuro(gu) くつろ(ぐ)', 'hiro(i) ひろ(い)', 'yuru(yaka) ゆる(やか)'],
    displayMeanings: ['tolerant', 'leniency'],
    fullDisplayMeanings: ['tolerant', 'leniency', 'generosity', 'relax', 'feel at home', 'be at ease', 'broadminded'],
    meanings: ['tolerant', 'leniency', 'generosity', 'relax', 'feel at home', 'be at ease', 'broadminded']
  },
  {
    id: 466,
    kanjiChar: '覆',
    onyomi: ['fuku フク'],
    kunyomi: ['oo(u) おお(う)', 'kutsugae(su) くつがえ(す)'],
    displayMeanings: ['capsize', 'cover'],
    fullDisplayMeanings: ['capsize', 'cover', 'shade', 'mantle', 'be ruined'],
    meanings: ['capsize', 'cover', 'shade', 'mantle', 'be ruined']
  },
  {
    id: 467,
    kanjiChar: '胞',
    onyomi: ['hou ホウ'],
    kunyomi: [],
    displayMeanings: ['placenta', 'sac'],
    fullDisplayMeanings: ['placenta', 'sac', 'sheath'],
    meanings: ['placenta', 'sac', 'sheath']
  },
  {
    id: 468,
    kanjiChar: '泣',
    onyomi: ['kyuu キュウ'],
    kunyomi: ['na(ku) な(く)'],
    displayMeanings: ['cry', 'weep'],
    fullDisplayMeanings: ['cry', 'weep', 'moan'],
    meanings: ['cry', 'weep', 'moan']
  },
  {
    id: 469,
    kanjiChar: '隔',
    onyomi: ['kaku カク'],
    kunyomi: ['heda(teru) へだ(てる)'],
    displayMeanings: ['isolate', 'distance'],
    fullDisplayMeanings: ['isolate', 'alternate', 'distance', 'separate', 'gulf'],
    meanings: ['isolate', 'alternate', 'distance', 'separate', 'gulf']
  },
  {
    id: 470,
    kanjiChar: '浄',
    onyomi: ['jou ジョウ', 'sei セイ'],
    kunyomi: ['kiyo(meru) きよ(める)', 'kiyo(i) きよ(い)'],
    displayMeanings: ['clean', 'purify'],
    fullDisplayMeanings: ['clean', 'purify', 'cleanse', 'exorcise', 'Manchu Dynasty'],
    meanings: ['clean', 'purify', 'cleanse', 'exorcise', 'Manchu Dynasty']
  },
  {
    id: 471,
    kanjiChar: '没',
    onyomi: ['botsu ボツ', 'motsu モツ'],
    kunyomi: ['obo(reru) おぼ(れる)', 'shizu(mu) しず(む)', 'nai ない'],
    displayMeanings: ['drown', 'sink'],
    fullDisplayMeanings: ['drown', 'sink', 'hide', 'fall into', 'disappear', 'die'],
    meanings: ['drown', 'sink', 'hide', 'fall into', 'disappear', 'die']
  },
  {
    id: 472,
    kanjiChar: '暇',
    onyomi: ['ka カ'],
    kunyomi: ['itoma ひま', 'いとま'],
    displayMeanings: ['spare time', 'leisure'],
    fullDisplayMeanings: ['spare time', 'rest', 'leisure', 'time', 'leave of absence'],
    meanings: ['spare time', 'rest', 'leisure', 'time', 'leave of absence']
  },
  {
    id: 473,
    kanjiChar: '肺',
    onyomi: ['hai ハイ'],
    kunyomi: [],
    displayMeanings: ['lungs'],
    fullDisplayMeanings: ['lungs'],
    meanings: ['lungs']
  },
  {
    id: 474,
    kanjiChar: '貞',
    onyomi: ['tei テイ', 'jou ジョウ'],
    kunyomi: ['tadashi(i) ただし(い)', 'sada さだ'],
    displayMeanings: ['upright', 'chastity'],
    fullDisplayMeanings: ['upright', 'chastity', 'constancy', 'righteousness'],
    meanings: ['upright', 'chastity', 'constancy', 'righteousness']
  },
  {
    id: 475,
    kanjiChar: '靖',
    onyomi: ['sei セイ', 'jou ジョウ'],
    kunyomi: ['yasu(njiru) やす(んじる)'],
    displayMeanings: ['peaceful'],
    fullDisplayMeanings: ['peaceful'],
    meanings: ['peaceful']
  },
  {
    id: 476,
    kanjiChar: '鑑',
    onyomi: ['kan カン'],
    kunyomi: ['kanga(miru) かんが(みる)', 'kagami かがみ'],
    displayMeanings: ['specimen', 'learn from'],
    fullDisplayMeanings: ['specimen', 'take warning from', 'learn from'],
    meanings: ['specimen', 'take warning from', 'learn from']
  },
  {
    id: 477,
    kanjiChar: '飼',
    onyomi: ['shi シ'],
    kunyomi: ['ka(u) か(う)'],
    displayMeanings: ['domesticate', 'raise'],
    fullDisplayMeanings: ['domesticate', 'raise', 'keep', 'feed'],
    meanings: ['domesticate', 'raise', 'keep', 'feed']
  },
  {
    id: 478,
    kanjiChar: '陰',
    onyomi: ['in イン'],
    kunyomi: ['kage かげ', 'kage(ru) かげ(る)'],
    displayMeanings: ['shade', 'yin'],
    fullDisplayMeanings: ['shade', 'yin', 'negative', 'sex organs', 'secret', 'shadow'],
    meanings: ['shade', 'yin', 'negative', 'sex organs', 'secret', 'shadow']
  },
  {
    id: 479,
    kanjiChar: '銘',
    onyomi: ['mei メイ'],
    kunyomi: [],
    displayMeanings: ['inscription', 'signature'],
    fullDisplayMeanings: ['inscription', 'signature (of artisan)'],
    meanings: ['inscription', 'signature (of artisan)']
  },
  {
    id: 480,
    kanjiChar: '随',
    onyomi: ['zui ズイ'],
    kunyomi: ['manima(ni) まにま(に)', 'shitaga(u) したが(う)'],
    displayMeanings: ['follow', 'obey'],
    fullDisplayMeanings: ['follow', 'though', 'notwithstanding', 'while', 'during', 'both', 'all', 'obey', 'submit to', 'comply'],
    meanings: ['follow', 'though', 'notwithstanding', 'while', 'during', 'both', 'all', 'obey', 'submit to', 'comply']
  },
  {
    id: 481,
    kanjiChar: '烈',
    onyomi: ['retsu レツ'],
    kunyomi: ['hage(shii) はげ(しい)'],
    displayMeanings: ['ardent', 'violent'],
    fullDisplayMeanings: ['ardent', 'violent', 'vehement', 'furious', 'severe', 'extreme'],
    meanings: ['ardent', 'violent', 'vehement', 'furious', 'severe', 'extreme']
  },
  {
    id: 482,
    kanjiChar: '尋',
    onyomi: ['jin ジン'],
    kunyomi: ['tazu(neru) たず(ねる)', 'hiro ひろ'],
    displayMeanings: ['inquire', 'fathom'],
    fullDisplayMeanings: ['inquire', 'fathom', 'look for'],
    meanings: ['inquire', 'fathom', 'look for']
  },
  {
    id: 483,
    kanjiChar: '渕',
    onyomi: ['en エン', 'kaku カク', 'kou コウ'],
    kunyomi: ['fuchi ふち', 'kata(i) かた(い)', 'hanawa はなわ'],
    displayMeanings: ['edge'],
    fullDisplayMeanings: ['edge'],
    meanings: ['edge']
  },
  {
    id: 484,
    kanjiChar: '稿',
    onyomi: ['kou コウ'],
    kunyomi: ['wara わら', 'shitagaki したがき'],
    displayMeanings: ['draft', 'manuscript'],
    fullDisplayMeanings: ['draft', 'copy', 'manuscript', 'straw'],
    meanings: ['draft', 'copy', 'manuscript', 'straw']
  },
  {
    id: 485,
    kanjiChar: '丹',
    onyomi: ['tan タン'],
    kunyomi: ['ni に'],
    displayMeanings: ['rust-colored', 'red'],
    fullDisplayMeanings: ['rust-colored', 'red', 'red lead', 'pills', 'sincerity'],
    meanings: ['rust-colored', 'red', 'red lead', 'pills', 'sincerity']
  },
  {
    id: 486,
    kanjiChar: '啓',
    onyomi: ['kei ケイ'],
    kunyomi: ['hira(ku) ひら(く)', 'sato(su) さと(す)'],
    displayMeanings: ['disclose', 'open'],
    fullDisplayMeanings: ['disclose', 'open', 'say'],
    meanings: ['disclose', 'open', 'say']
  },
  {
    id: 487,
    kanjiChar: '也',
    onyomi: ['ya ヤ', 'e エ'],
    kunyomi: ['nari なり', 'ka か', 'mata また'],
    displayMeanings: ['to be (classical)'],
    fullDisplayMeanings: ['to be (classical)'],
    meanings: ['to be (classical)']
  },
  {
    id: 488,
    kanjiChar: '丘',
    onyomi: ['kyuu キュウ'],
    kunyomi: ['oka おか'],
    displayMeanings: ['hill', 'knoll'],
    fullDisplayMeanings: ['hill', 'knoll'],
    meanings: ['hill', 'knoll']
  },
  {
    id: 489,
    kanjiChar: '棟',
    onyomi: ['tou トウ'],
    kunyomi: ['mune むね', 'muna- むな-'],
    displayMeanings: ['ridgepole', 'ridge'],
    fullDisplayMeanings: ['ridgepole', 'ridge'],
    meanings: ['ridgepole', 'ridge']
  },
  {
    id: 490,
    kanjiChar: '壌',
    onyomi: ['jou ジョウ'],
    kunyomi: ['tsuchi つち'],
    displayMeanings: ['lot', 'earth'],
    fullDisplayMeanings: ['lot', 'earth', 'soil'],
    meanings: ['lot', 'earth', 'soil']
  },
  {
    id: 491,
    kanjiChar: '漫',
    onyomi: ['man マン'],
    kunyomi: ['midari(ni) みだり(に)', 'sozo(ro) そぞ(ろ)'],
    displayMeanings: ['cartoon', 'unrestrained'],
    fullDisplayMeanings: ['cartoon', 'involuntarily', 'unrestrained', 'in spite of oneself', 'corrupt'],
    meanings: ['cartoon', 'involuntarily', 'unrestrained', 'in spite of oneself', 'corrupt']
  },
  {
    id: 492,
    kanjiChar: '玄',
    onyomi: ['gen ゲン'],
    kunyomi: ['kuro くろ', 'kuro(i) くろ(い)'],
    displayMeanings: ['mysterious', 'black'],
    fullDisplayMeanings: ['mysterious', 'occultness', 'black', 'deep', 'profound'],
    meanings: ['mysterious', 'occultness', 'black', 'deep', 'profound']
  },
  {
    id: 493,
    kanjiChar: '粘',
    onyomi: ['nen ネン'],
    kunyomi: ['neba(ru) ねば(る)'],
    displayMeanings: ['sticky', 'glutinous'],
    fullDisplayMeanings: ['sticky', 'glutinous', 'greasy', 'persevere'],
    meanings: ['sticky', 'glutinous', 'greasy', 'persevere']
  },
  {
    id: 494,
    kanjiChar: '悟',
    onyomi: ['go ゴ'],
    kunyomi: ['sato(ru) さと(る)'],
    displayMeanings: ['enlightenment', 'perceive'],
    fullDisplayMeanings: ['enlightenment', 'perceive', 'discern', 'realize', 'understand'],
    meanings: ['enlightenment', 'perceive', 'discern', 'realize', 'understand']
  },
  {
    id: 495,
    kanjiChar: '舗',
    onyomi: ['ho ホ'],
    kunyomi: [],
    displayMeanings: ['shop', 'store'],
    fullDisplayMeanings: ['shop', 'store', 'pave'],
    meanings: ['shop', 'store', 'pave']
  },
  {
    id: 496,
    kanjiChar: '妊',
    onyomi: ['nin ニン', 'jin ジン'],
    kunyomi: ['hara(mu) はら(む)', 'migomo(ru) みごも(る)'],
    displayMeanings: ['pregnancy'],
    fullDisplayMeanings: ['pregnancy'],
    meanings: ['pregnancy']
  },
  {
    id: 497,
    kanjiChar: '熟',
    onyomi: ['juku ジュク'],
    kunyomi: ['u(reru) う(れる)'],
    displayMeanings: ['mellow', 'ripen'],
    fullDisplayMeanings: ['mellow', 'ripen', 'mature', 'acquire skill'],
    meanings: ['mellow', 'ripen', 'mature', 'acquire skill']
  },
  {
    id: 498,
    kanjiChar: '旭',
    onyomi: ['kyoku キョク'],
    kunyomi: ['asahi あさひ'],
    displayMeanings: ['rising sun', 'morning sun'],
    fullDisplayMeanings: ['rising sun', 'morning sun'],
    meanings: ['rising sun', 'morning sun']
  },
  {
    id: 499,
    kanjiChar: '恩',
    onyomi: ['on オン'],
    kunyomi: [],
    displayMeanings: ['grace', 'kindness'],
    fullDisplayMeanings: ['grace', 'kindness', 'goodness', 'favor', 'mercy', 'blessing', 'benefit'],
    meanings: ['grace', 'kindness', 'goodness', 'favor', 'mercy', 'blessing', 'benefit']
  },
  {
    id: 500,
    kanjiChar: '騰',
    onyomi: ['tou トウ'],
    kunyomi: ['aga(ru) あが(る)', 'nobo(ru) のぼ(る)'],
    displayMeanings: ['leaping up', 'rising'],
    fullDisplayMeanings: ['leaping up', 'jumping up', 'rising', 'advancing', 'going'],
    meanings: ['leaping up', 'jumping up', 'rising', 'advancing', 'going']
  },
    {
    id: 501,
    kanjiChar: '往',
    onyomi: ['ou オウ'],
    kunyomi: ['i(ku) い(く)', 'inishie いにしえ', 'saki(ni) さき(に)', 'yu(ku) ゆ(く)'],
    displayMeanings: ['journey', 'travel'],
    fullDisplayMeanings: ['journey', 'travel', 'chase away', 'let go', 'going', 'before', 'formerly'],
    meanings: ['journey', 'travel', 'chase away', 'let go', 'going', 'before', 'formerly']
  },
  {
    id: 502,
    kanjiChar: '豆',
    onyomi: ['tou トウ', 'zu ズ'],
    kunyomi: ['mame まめ', 'mame- まめ-'],
    displayMeanings: ['beans', 'pea'],
    fullDisplayMeanings: ['beans', 'pea', 'midget'],
    meanings: ['beans', 'pea', 'midget']
  },
  {
    id: 503,
    kanjiChar: '遂',
    onyomi: ['sui スイ'],
    kunyomi: ['to(geru) と(げる)', 'tsui(ni) つい(に)'],
    displayMeanings: ['consummate', 'accomplish'],
    fullDisplayMeanings: ['consummate', 'accomplish', 'attain', 'commit (suicide)'],
    meanings: ['consummate', 'accomplish', 'attain', 'commit (suicide)']
  },
  {
    id: 504,
    kanjiChar: '狂',
    onyomi: ['kyou キョウ'],
    kunyomi: ['kuru(u) くる(う)'],
    displayMeanings: ['lunatic', 'insane'],
    fullDisplayMeanings: ['lunatic', 'insane', 'crazy', 'confuse'],
    meanings: ['lunatic', 'insane', 'crazy', 'confuse']
  },
  {
    id: 505,
    kanjiChar: '栃',
    onyomi: ['tochi とち'],
    kunyomi: [],
    displayMeanings: ['horse chestnut'],
    fullDisplayMeanings: ['horse chestnut', '(kokuji)'],
    meanings: ['horse chestnut', '(kokuji)']
  },
  {
    id: 506,
    kanjiChar: '岐',
    onyomi: ['ki キ', 'gi ギ'],
    kunyomi: [],
    displayMeanings: ['branch off', 'fork in road'],
    fullDisplayMeanings: ['branch off', 'fork in road', 'scene', 'arena', 'theater'],
    meanings: ['branch off', 'fork in road', 'scene', 'arena', 'theater']
  },
  {
    id: 507,
    kanjiChar: '陛',
    onyomi: ['hei ヘイ'],
    kunyomi: [],
    displayMeanings: ['highness', 'steps (of throne)'],
    fullDisplayMeanings: ['highness', 'steps (of throne)'],
    meanings: ['highness', 'steps (of throne)']
  },
  {
    id: 508,
    kanjiChar: '緯',
    onyomi: ['i イ'],
    kunyomi: ['yokoito よこいと', 'nuki ぬき'],
    displayMeanings: ['horizontal', 'woof'],
    fullDisplayMeanings: ['horizontal', 'woof', 'left & right', '(parallels of) latitude', 'prediction'],
    meanings: ['horizontal', 'woof', 'left & right', '(parallels of) latitude', 'prediction']
  },
  {
    id: 509,
    kanjiChar: '培',
    onyomi: ['bai バイ'],
    kunyomi: ['tsuchika(u) つちか(う)'],
    displayMeanings: ['cultivate', 'foster'],
    fullDisplayMeanings: ['cultivate', 'foster'],
    meanings: ['cultivate', 'foster']
  },
  {
    id: 510,
    kanjiChar: '衰',
    onyomi: ['sui スイ'],
    kunyomi: ['otoro(eru) おとろ(える)'],
    displayMeanings: ['decline', 'wane'],
    fullDisplayMeanings: ['decline', 'wane', 'weaken'],
    meanings: ['decline', 'wane', 'weaken']
  },
  {
    id: 511,
    kanjiChar: '艇',
    onyomi: ['tei テイ'],
    kunyomi: [],
    displayMeanings: ['rowboat', 'small boat'],
    fullDisplayMeanings: ['rowboat', 'small boat'],
    meanings: ['rowboat', 'small boat']
  },
  {
    id: 512,
    kanjiChar: '屈',
    onyomi: ['kutsu クツ'],
    kunyomi: ['kaga(mu) かが(む)'],
    displayMeanings: ['yield', 'bend'],
    fullDisplayMeanings: ['yield', 'bend', 'flinch', 'submit'],
    meanings: ['yield', 'bend', 'flinch', 'submit']
  },
  {
    id: 513,
    kanjiChar: '径',
    onyomi: ['kei ケイ'],
    kunyomi: ['michi みち', 'komichi こみち', 'sashiwatashi さしわたし', 'tadachini ただちに'],
    displayMeanings: ['diameter', 'path'],
    fullDisplayMeanings: ['diameter', 'path', 'method'],
    meanings: ['diameter', 'path', 'method']
  },
  {
    id: 514,
    kanjiChar: '淡',
    onyomi: ['tan タン'],
    kunyomi: ['awa(i) あわ(い)'],
    displayMeanings: ['thin', 'faint'],
    fullDisplayMeanings: ['thin', 'faint', 'pale', 'fleeting'],
    meanings: ['thin', 'faint', 'pale', 'fleeting']
  },
  {
    id: 515,
    kanjiChar: '抽',
    onyomi: ['chuu チュウ'],
    kunyomi: ['hiki- ひき-'],
    displayMeanings: ['pluck', 'pull'],
    fullDisplayMeanings: ['pluck', 'pull', 'extract', 'excel'],
    meanings: ['pluck', 'pull', 'extract', 'excel']
  },
  {
    id: 516,
    kanjiChar: '披',
    onyomi: ['hi ヒ'],
    kunyomi: [],
    displayMeanings: ['expose', 'open'],
    fullDisplayMeanings: ['expose', 'open'],
    meanings: ['expose', 'open']
  },
  {
    id: 517,
    kanjiChar: '廷',
    onyomi: ['tei テイ'],
    kunyomi: [],
    displayMeanings: ['courts', 'imperial court'],
    fullDisplayMeanings: ['courts', 'imperial court', 'government office'],
    meanings: ['courts', 'imperial court', 'government office']
  },
  {
    id: 518,
    kanjiChar: '錦',
    onyomi: ['kin キン'],
    kunyomi: ['nishiki にしき'],
    displayMeanings: ['brocade', 'fine dress'],
    fullDisplayMeanings: ['brocade', 'fine dress', 'honors'],
    meanings: ['brocade', 'fine dress', 'honors']
  },
  {
    id: 519,
    kanjiChar: '准',
    onyomi: ['jun ジュン'],
    kunyomi: [],
    displayMeanings: ['quasi-', 'semi-'],
    fullDisplayMeanings: ['quasi-', 'semi-', 'associate'],
    meanings: ['quasi-', 'semi-', 'associate']
  },
  {
    id: 520,
    kanjiChar: '暑',
    onyomi: ['sho ショ'],
    kunyomi: ['atsu(i) あつ(い)'],
    displayMeanings: ['sultry', 'hot'],
    fullDisplayMeanings: ['sultry', 'hot', 'summer heat'],
    meanings: ['sultry', 'hot', 'summer heat']
  },
  {
    id: 521,
    kanjiChar: '磯',
    onyomi: ['ki キ'],
    kunyomi: ['iso いそ'],
    displayMeanings: ['seashore', 'beach'],
    fullDisplayMeanings: ['seashore', 'beach'],
    meanings: ['seashore', 'beach']
  },
  {
    id: 522,
    kanjiChar: '奨',
    onyomi: ['shou ショウ', 'sou ソウ'],
    kunyomi: ['susu(meru) すす(める)'],
    displayMeanings: ['exhort', 'urge'],
    fullDisplayMeanings: ['exhort', 'urge', 'encourage'],
    meanings: ['exhort', 'urge', 'encourage']
  },
  {
    id: 523,
    kanjiChar: '浸',
    onyomi: ['shin シン'],
    kunyomi: ['hita(su) ひた(す)', 'tsu(karu) つ(かる)'],
    displayMeanings: ['immersed', 'soak'],
    fullDisplayMeanings: ['immersed', 'soak', 'dip', 'steep', 'moisten', 'wet', 'dunk'],
    meanings: ['immersed', 'soak', 'dip', 'steep', 'moisten', 'wet', 'dunk']
  },
  {
    id: 524,
    kanjiChar: '剰',
    onyomi: ['jou ジョウ'],
    kunyomi: ['amatsusae あまつさえ', 'ama(ri) あま(り)'],
    displayMeanings: ['surplus', 'besides'],
    fullDisplayMeanings: ['surplus', 'besides'],
    meanings: ['surplus', 'besides']
  },
  {
    id: 525,
    kanjiChar: '胆',
    onyomi: ['tan タン'],
    kunyomi: ['kimo きも'],
    displayMeanings: ['gall bladder', 'courage'],
    fullDisplayMeanings: ['gall bladder', 'courage', 'pluck', 'nerve'],
    meanings: ['gall bladder', 'courage', 'pluck', 'nerve']
  },
  {
    id: 526,
    kanjiChar: '繊',
    onyomi: ['sen セン'],
    kunyomi: [],
    displayMeanings: ['slender', 'fine'],
    fullDisplayMeanings: ['slender', 'fine', 'thin kimono'],
    meanings: ['slender', 'fine', 'thin kimono']
  },
  {
    id: 527,
    kanjiChar: '駒',
    onyomi: ['ku ク'],
    kunyomi: ['koma こま'],
    displayMeanings: ['pony', 'horse'],
    fullDisplayMeanings: ['pony', 'horse', 'colt'],
    meanings: ['pony', 'horse', 'colt']
  },
  {
    id: 528,
    kanjiChar: '虚',
    onyomi: ['kyo キョ', 'ko コ'],
    kunyomi: ['muna(shii) むな(しい)', 'utsu(ro) うつ(ろ)'],
    displayMeanings: ['void', 'emptiness'],
    fullDisplayMeanings: ['void', 'emptiness', 'unpreparedness', 'crack', 'fissure', 'untruth'],
    meanings: ['void', 'emptiness', 'unpreparedness', 'crack', 'fissure', 'untruth']
  },
  {
    id: 529,
    kanjiChar: '孜',
    onyomi: ['shi シ'],
    kunyomi: ['tsuto(meru) つと(める)'],
    displayMeanings: ['industriousness'],
    fullDisplayMeanings: ['industriousness'],
    meanings: ['industriousness']
  },
  {
    id: 530,
    kanjiChar: '霊',
    onyomi: ['rei レイ', 'ryou リョウ'],
    kunyomi: ['tama たま'],
    displayMeanings: ['spirits', 'soul'],
    fullDisplayMeanings: ['spirits', 'soul'],
    meanings: ['spirits', 'soul']
  },
  {
    id: 531,
    kanjiChar: '帳',
    onyomi: ['chou チョウ'],
    kunyomi: ['tobari とばり'],
    displayMeanings: ['notebook', 'account book'],
    fullDisplayMeanings: ['notebook', 'account book', 'album', 'curtain', 'veil', 'net', 'tent'],
    meanings: ['notebook', 'account book', 'album', 'curtain', 'veil', 'net', 'tent']
  },
  {
    id: 532,
    kanjiChar: '悔',
    onyomi: ['kai カイ'],
    kunyomi: ['ku(iru) く(いる)', 'ku(yamu) く(やむ)'],
    displayMeanings: ['repent', 'regret'],
    fullDisplayMeanings: ['repent', 'regret'],
    meanings: ['repent', 'regret']
  },
  {
    id: 533,
    kanjiChar: '諭',
    onyomi: ['yu ユ'],
    kunyomi: ['sato(su) さと(す)'],
    displayMeanings: ['rebuke', 'admonish'],
    fullDisplayMeanings: ['rebuke', 'admonish', 'charge', 'warn', 'persuade'],
    meanings: ['rebuke', 'admonish', 'charge', 'warn', 'persuade']
  },
  {
    id: 534,
    kanjiChar: '惨',
    onyomi: ['san サン', 'zan ザン'],
    kunyomi: ['miji(me) みじ(め)', 'ita(mu) いた(む)', 'mugo(i) むご(い)'],
    displayMeanings: ['wretched', 'disaster'],
    fullDisplayMeanings: ['wretched', 'disaster', 'cruelty', 'harsh'],
    meanings: ['wretched', 'disaster', 'cruelty', 'harsh']
  },
  {
    id: 535,
    kanjiChar: '虐',
    onyomi: ['gyaku ギャク'],
    kunyomi: ['shiita(geru) しいた(げる)'],
    displayMeanings: ['tyrannize', 'oppress'],
    fullDisplayMeanings: ['tyrannize', 'oppress'],
    meanings: ['tyrannize', 'oppress']
  },
  {
    id: 536,
    kanjiChar: '翻',
    onyomi: ['hon ホン', 'han ハン'],
    kunyomi: ['hirugae(ru) ひるがえ(る)'],
    displayMeanings: ['flip', 'turn over'],
    fullDisplayMeanings: ['flip', 'turn over', 'wave', 'flutter', 'change (mind)'],
    meanings: ['flip', 'turn over', 'wave', 'flutter', 'change (mind)']
  },
  {
    id: 537,
    kanjiChar: '墜',
    onyomi: ['tsui ツイ'],
    kunyomi: ['o(chiru) お(ちる)', 'o(tsu) お(つ)'],
    displayMeanings: ['crash', 'fall (down)'],
    fullDisplayMeanings: ['crash', 'fall (down)'],
    meanings: ['crash', 'fall (down)']
  },
  {
    id: 538,
    kanjiChar: '沼',
    onyomi: ['shou ショウ'],
    kunyomi: ['numa ぬま'],
    displayMeanings: ['marsh', 'lake'],
    fullDisplayMeanings: ['marsh', 'lake', 'bog', 'swamp', 'pond'],
    meanings: ['marsh', 'lake', 'bog', 'swamp', 'pond']
  },
  {
    id: 539,
    kanjiChar: '据',
    onyomi: ['kyo キョ'],
    kunyomi: ['su(eru) す(える)', 'su(waru) す(わる)'],
    displayMeanings: ['set', 'lay a foundation'],
    fullDisplayMeanings: ['set', 'lay a foundation', 'install', 'equip', 'squat down', 'sit down'],
    meanings: ['set', 'lay a foundation', 'install', 'equip', 'squat down', 'sit down']
  },
  {
    id: 540,
    kanjiChar: '肥',
    onyomi: ['hi ヒ'],
    kunyomi: ['ko(eru) こ(える)', 'koe こえ', 'ko(yasu) こ(やす)', 'futo(ru) ふと(る)'],
    displayMeanings: ['fertilizer', 'get fat'],
    fullDisplayMeanings: ['fertilizer', 'get fat', 'fertile', 'manure', 'pamper'],
    meanings: ['fertilizer', 'get fat', 'fertile', 'manure', 'pamper']
  },
  {
    id: 541,
    kanjiChar: '徐',
    onyomi: ['jo ジョ'],
    kunyomi: ['omomu(roni) おもむ(ろに)'],
    displayMeanings: ['gradually', 'slowly'],
    fullDisplayMeanings: ['gradually', 'slowly', 'deliberately', 'gently'],
    meanings: ['gradually', 'slowly', 'deliberately', 'gently']
  },
  {
    id: 542,
    kanjiChar: '糖',
    onyomi: ['tou トウ'],
    kunyomi: [],
    displayMeanings: ['sugar'],
    fullDisplayMeanings: ['sugar'],
    meanings: ['sugar']
  },
  {
    id: 543,
    kanjiChar: '搭',
    onyomi: ['tou トウ'],
    kunyomi: [],
    displayMeanings: ['board', 'load (a vehicle)'],
    fullDisplayMeanings: ['board', 'load (a vehicle)', 'ride'],
    meanings: ['board', 'load (a vehicle)', 'ride']
  },
  {
    id: 544,
    kanjiChar: '盾',
    onyomi: ['jun ジュン'],
    kunyomi: ['tate たて'],
    displayMeanings: ['shield', 'escutcheon'],
    fullDisplayMeanings: ['shield', 'escutcheon', 'pretext'],
    meanings: ['shield', 'escutcheon', 'pretext']
  },
  {
    id: 545,
    kanjiChar: '脈',
    onyomi: ['myaku ミャク'],
    kunyomi: ['suji すじ'],
    displayMeanings: ['vein', 'pulse'],
    fullDisplayMeanings: ['vein', 'pulse', 'hope'],
    meanings: ['vein', 'pulse', 'hope']
  },
  {
    id: 546,
    kanjiChar: '滝',
    onyomi: ['rou ロウ', 'sou ソウ'],
    kunyomi: ['taki たき'],
    displayMeanings: ['waterfall', 'rapids'],
    fullDisplayMeanings: ['waterfall', 'rapids', 'cascade'],
    meanings: ['waterfall', 'rapids', 'cascade']
  },
  {
    id: 547,
    kanjiChar: '軌',
    onyomi: ['ki キ'],
    kunyomi: [],
    displayMeanings: ['rut', 'wheel'],
    fullDisplayMeanings: ['rut', 'wheel', 'track', 'model', 'way of doing'],
    meanings: ['rut', 'wheel', 'track', 'model', 'way of doing']
  },
  {
    id: 548,
    kanjiChar: '俵',
    onyomi: ['hyou ヒョウ'],
    kunyomi: ['tawara たわら'],
    displayMeanings: ['bag', 'bale'],
    fullDisplayMeanings: ['bag', 'bale', 'sack', 'counter for bags'],
    meanings: ['bag', 'bale', 'sack', 'counter for bags']
  },
  {
    id: 549,
    kanjiChar: '妨',
    onyomi: ['bou ボウ'],
    kunyomi: ['samata(geru) さまた(げる)'],
    displayMeanings: ['disturb', 'prevent'],
    fullDisplayMeanings: ['disturb', 'prevent', 'hamper', 'obstruct'],
    meanings: ['disturb', 'prevent', 'hamper', 'obstruct']
  },
  {
    id: 550,
    kanjiChar: '盧',
    onyomi: ['ro ロ'],
    kunyomi: [],
    displayMeanings: ['hut'],
    fullDisplayMeanings: ['hut'],
    meanings: ['hut']
  },
  {
    id: 551,
    kanjiChar: '擦',
    onyomi: ['satsu サツ'],
    kunyomi: ['su(ru) す.る', '-zu(re) -ず.れ', 'kosu(ru) こす.る'],
    displayMeanings: ['grate', 'rub'],
    fullDisplayMeanings: ['grate', 'rub', 'scratch', 'scrape', 'chafe', 'scour'],
    meanings: ['grate', 'rub', 'scratch', 'scrape', 'chafe', 'scour']
  },
  {
    id: 552,
    kanjiChar: '鯨',
    onyomi: ['gei ゲイ'],
    kunyomi: ['kujira くじら'],
    displayMeanings: ['whale'],
    fullDisplayMeanings: ['whale'],
    meanings: ['whale']
  },
  {
    id: 553,
    kanjiChar: '荘',
    onyomi: ['sou ソウ', 'shou ショウ', 'chan チャン'],
    kunyomi: ['houki ほうき', 'ogoso(ka) おごそ(か)'],
    displayMeanings: ['villa', 'inn'],
    fullDisplayMeanings: ['villa', 'inn', 'cottage', 'feudal manor', 'solemn', 'dignified'],
    meanings: ['villa', 'inn', 'cottage', 'feudal manor', 'solemn', 'dignified']
  },
  {
    id: 554,
    kanjiChar: '諾',
    onyomi: ['daku ダク'],
    kunyomi: [],
    displayMeanings: ['consent', 'assent'],
    fullDisplayMeanings: ['consent', 'assent', 'agreement'],
    meanings: ['consent', 'assent', 'agreement']
  },
  {
    id: 555,
    kanjiChar: '雷',
    onyomi: ['rai ライ'],
    kunyomi: ['kamirari かみなり', 'ikazuchi いかずち', 'ikadzuchi いかづち'],
    displayMeanings: ['thunder', 'lightning bolt'],
    fullDisplayMeanings: ['thunder', 'lightning bolt'],
    meanings: ['thunder', 'lightning bolt']
  },
  {
    id: 556,
    kanjiChar: '漂',
    onyomi: ['hyou ヒョウ'],
    kunyomi: ['tadayo(u) ただよ(う)'],
    displayMeanings: ['drift', 'float (on liquid)'],
    fullDisplayMeanings: ['drift', 'float (on liquid)'],
    meanings: ['drift', 'float (on liquid)']
  },
  {
    id: 557,
    kanjiChar: '懐',
    onyomi: ['kai カイ', 'e エ'],
    kunyomi: ['futokoro ふところ', 'natsu(kashii) なつ(かしい)', 'nazu(keru) なず(ける)', 'ida(ku) いだ(く)', 'omo(u) おも(う)'],
    displayMeanings: ['feelings', 'heart'],
    fullDisplayMeanings: ['feelings', 'heart', 'yearn', 'miss someone', 'become attached to', 'bosom', 'breast', 'pocket'],
    meanings: ['feelings', 'heart', 'yearn', 'miss someone', 'become attached to', 'bosom', 'breast', 'pocket']
  },
  {
    id: 558,
    kanjiChar: '勘',
    onyomi: ['kan カン'],
    kunyomi: [],
    displayMeanings: ['intuition', 'perception'],
    fullDisplayMeanings: ['intuition', 'perception', 'check', 'compare', 'sixth sense'],
    meanings: ['intuition', 'perception', 'check', 'compare', 'sixth sense']
  },
  {
    id: 559,
    kanjiChar: '栽',
    onyomi: ['sai サイ'],
    kunyomi: [],
    displayMeanings: ['plantation', 'planting'],
    fullDisplayMeanings: ['plantation', 'planting'],
    meanings: ['plantation', 'planting']
  },
  {
    id: 560,
    kanjiChar: '拐',
    onyomi: ['kai カイ'],
    kunyomi: [],
    displayMeanings: ['kidnap', 'falsify'],
    fullDisplayMeanings: ['kidnap', 'falsify'],
    meanings: ['kidnap', 'falsify']
  },
  {
    id: 561,
    kanjiChar: '笠',
    onyomi: ['ryuu リュウ'],
    kunyomi: ['kasa かさ'],
    displayMeanings: ['bamboo hat', 'one\'s influence'],
    fullDisplayMeanings: ['bamboo hat', 'one\'s influence'],
    meanings: ['bamboo hat', 'one\'s influence']
  },
  {
    id: 562,
    kanjiChar: '駄',
    onyomi: ['da ダ', 'ta タ'],
    kunyomi: [],
    displayMeanings: ['burdensome', 'pack horse'],
    fullDisplayMeanings: ['burdensome', 'pack horse', 'horse load', 'send by horse', 'trivial', 'worthless'],
    meanings: ['burdensome', 'pack horse', 'horse load', 'send by horse', 'trivial', 'worthless']
  },
  {
    id: 563,
    kanjiChar: '添',
    onyomi: ['ten テン'],
    kunyomi: ['so(eru) そ(える)', 'so(u) そ(う)'],
    displayMeanings: ['annexed', 'accompany'],
    fullDisplayMeanings: ['annexed', 'accompany', 'marry', 'suit', 'meet', 'satisfy', 'attach', 'append', 'garnish', 'imitate'],
    meanings: ['annexed', 'accompany', 'marry', 'suit', 'meet', 'satisfy', 'attach', 'append', 'garnish', 'imitate']
  },
  {
    id: 564,
    kanjiChar: '冠',
    onyomi: ['kan カン'],
    kunyomi: ['kanmuri かんむり'],
    displayMeanings: ['crown', 'best'],
    fullDisplayMeanings: ['crown', 'best', 'peerless'],
    meanings: ['crown', 'best', 'peerless']
  },
  {
    id: 565,
    kanjiChar: '斜',
    onyomi: ['sha シャ'],
    kunyomi: ['nana(me) なな(め)', 'hasu はす'],
    displayMeanings: ['diagonal', 'slanting'],
    fullDisplayMeanings: ['diagonal', 'slanting', 'oblique'],
    meanings: ['diagonal', 'slanting', 'oblique']
  },
  {
    id: 566,
    kanjiChar: '鏡',
    onyomi: ['kyou キョウ', 'kei ケイ'],
    kunyomi: ['kagami かがみ'],
    displayMeanings: ['mirror', 'speculum'],
    fullDisplayMeanings: ['mirror', 'speculum', 'barrel-head', 'round rice-cake offering'],
    meanings: ['mirror', 'speculum', 'barrel-head', 'round rice-cake offering']
  },
  {
    id: 567,
    kanjiChar: '聡',
    onyomi: ['sou ソウ'],
    kunyomi: ['sato(i) さと(い)', 'mimizato(i) みみざと(い)'],
    displayMeanings: ['wise', 'fast learner'],
    fullDisplayMeanings: ['wise', 'fast learner'],
    meanings: ['wise', 'fast learner']
  },
  {
    id: 568,
    kanjiChar: '浪',
    onyomi: ['rou ロウ'],
    kunyomi: [],
    displayMeanings: ['wandering', 'waves'],
    fullDisplayMeanings: ['wandering', 'waves', 'billows', 'reckless', 'unrestrained'],
    meanings: ['wandering', 'waves', 'billows', 'reckless', 'unrestrained']
  },
  {
    id: 569,
    kanjiChar: '亜',
    onyomi: ['a ア'],
    kunyomi: ['tsu(gu) つ(ぐ)'],
    displayMeanings: ['Asia', 'rank next'],
    fullDisplayMeanings: ['Asia', 'rank next', 'come after', '-ous'],
    meanings: ['Asia', 'rank next', 'come after', '-ous']
  },
  {
    id: 570,
    kanjiChar: '覧',
    onyomi: ['ran ラン'],
    kunyomi: ['mi(ru) み(る)'],
    displayMeanings: ['perusal', 'see'],
    fullDisplayMeanings: ['perusal', 'see'],
    meanings: ['perusal', 'see']
  },
  {
    id: 571,
    kanjiChar: '詐',
    onyomi: ['sa サ'],
    kunyomi: ['itsuwa(ru) いつわ(る)'],
    displayMeanings: ['lie', 'falsehood'],
    fullDisplayMeanings: ['lie', 'falsehood', 'deceive', 'pretend'],
    meanings: ['lie', 'falsehood', 'deceive', 'pretend']
  },
  {
    id: 572,
    kanjiChar: '壇',
    onyomi: ['dan ダン', 'tan タン'],
    kunyomi: [],
    displayMeanings: ['podium', 'stage'],
    fullDisplayMeanings: ['podium', 'stage', 'rostrum', 'terrace'],
    meanings: ['podium', 'stage', 'rostrum', 'terrace']
  },
  {
    id: 573,
    kanjiChar: '勲',
    onyomi: ['kun クン'],
    kunyomi: ['isao いさお'],
    displayMeanings: ['meritorious deed', 'merit'],
    fullDisplayMeanings: ['meritorious deed', 'merit'],
    meanings: ['meritorious deed', 'merit']
  },
  {
    id: 574,
    kanjiChar: '魔',
    onyomi: ['ma マ'],
    kunyomi: [],
    displayMeanings: ['witch', 'demon'],
    fullDisplayMeanings: ['witch', 'demon', 'evil spirit'],
    meanings: ['witch', 'demon', 'evil spirit']
  },
  {
    id: 575,
    kanjiChar: '酬',
    onyomi: ['shuu シュウ', 'shu シュ', 'tou トウ'],
    kunyomi: ['muku(iru) むく(いる)'],
    displayMeanings: ['repay', 'reward'],
    fullDisplayMeanings: ['repay', 'reward', 'retribution'],
    meanings: ['repay', 'reward', 'retribution']
  },
  {
    id: 576,
    kanjiChar: '紫',
    onyomi: ['shi シ'],
    kunyomi: ['murasaki むらさき'],
    displayMeanings: ['purple', 'violet'],
    fullDisplayMeanings: ['purple', 'violet'],
    meanings: ['purple', 'violet']
  },
  {
    id: 577,
    kanjiChar: '曙',
    onyomi: ['sho ショ'],
    kunyomi: ['akebono あけぼの'],
    displayMeanings: ['dawn', 'daybreak'],
    fullDisplayMeanings: ['dawn', 'daybreak'],
    meanings: ['dawn', 'daybreak']
  },
  {
    id: 578,
    kanjiChar: '紋',
    onyomi: ['mon モン'],
    kunyomi: [],
    displayMeanings: ['family crest', 'figures'],
    fullDisplayMeanings: ['family crest', 'figures'],
    meanings: ['family crest', 'figures']
  },
  {
    id: 579,
    kanjiChar: '卸',
    onyomi: ['sha シャ'],
    kunyomi: ['oro(su) おろ(す)', 'oroshi おろし'],
    displayMeanings: ['wholesale'],
    fullDisplayMeanings: ['wholesale'],
    meanings: ['wholesale']
  },
  {
    id: 580,
    kanjiChar: '奮',
    onyomi: ['fun フン'],
    kunyomi: ['furu(u) ふる(う)'],
    displayMeanings: ['stirred up', 'be invigorated'],
    fullDisplayMeanings: ['stirred up', 'be invigorated', 'flourish'],
    meanings: ['stirred up', 'be invigorated', 'flourish']
  },
  {
    id: 581,
    kanjiChar: '趙',
    onyomi: ['chou チョウ', 'jou ジョウ', 'kyou キョウ'],
    kunyomi: [],
    displayMeanings: ['nimble', 'late-going'],
    fullDisplayMeanings: ['nimble', 'late-going'],
    meanings: ['nimble', 'late-going']
  },
  {
    id: 582,
    kanjiChar: '欄',
    onyomi: ['ran ラン'],
    kunyomi: ['tesuri てすり'],
    displayMeanings: ['column', 'handrail'],
    fullDisplayMeanings: ['column', 'handrail', 'blank', 'space'],
    meanings: ['column', 'handrail', 'blank', 'space']
  },
  {
    id: 583,
    kanjiChar: '逸',
    onyomi: ['itsu イツ'],
    kunyomi: ['so(reru) そ(れる)', 'hagu(reru) はぐ(れる)'],
    displayMeanings: ['deviate', 'idleness'],
    fullDisplayMeanings: ['deviate', 'idleness', 'leisure', 'miss the mark', 'evade', 'elude', 'parry', 'diverge'],
    meanings: ['deviate', 'idleness', 'leisure', 'miss the mark', 'evade', 'elude', 'parry', 'diverge']
  },
  {
    id: 584,
    kanjiChar: '涯',
    onyomi: ['gai ガイ'],
    kunyomi: ['hate はて'],
    displayMeanings: ['horizon', 'shore'],
    fullDisplayMeanings: ['horizon', 'shore', 'limit', 'bound'],
    meanings: ['horizon', 'shore', 'limit', 'bound']
  },
  {
    id: 585,
    kanjiChar: '拓',
    onyomi: ['taku タク'],
    kunyomi: ['hira(ku) ひら(く)'],
    displayMeanings: ['clear (the land)', 'open'],
    fullDisplayMeanings: ['clear (the land)', 'open', 'break up (land)'],
    meanings: ['clear (the land)', 'open', 'break up (land)']
  },
  {
    id: 586,
    kanjiChar: '眼',
    onyomi: ['gan ガン', 'gen ゲン'],
    kunyomi: ['manako まなこ', 'me め'],
    displayMeanings: ['eyeball'],
    fullDisplayMeanings: ['eyeball'],
    meanings: ['eyeball']
  },
  {
    id: 587,
    kanjiChar: '獄',
    onyomi: ['goku ゴク'],
    kunyomi: [],
    displayMeanings: ['prison', 'jail'],
    fullDisplayMeanings: ['prison', 'jail'],
    meanings: ['prison', 'jail']
  },
  {
    id: 588,
    kanjiChar: '筑',
    onyomi: ['chiku チク'],
    kunyomi: [],
    displayMeanings: ['an ancient musical instrument'],
    fullDisplayMeanings: ['an ancient musical instrument'],
    meanings: ['an ancient musical instrument']
  },
  {
    id: 589,
    kanjiChar: '尚',
    onyomi: ['shou ショウ'],
    kunyomi: ['nao なお'],
    displayMeanings: ['esteem', 'furthermore'],
    fullDisplayMeanings: ['esteem', 'furthermore', 'still', 'yet'],
    meanings: ['esteem', 'furthermore', 'still', 'yet']
  },
  {
    id: 590,
    kanjiChar: '阜',
    onyomi: ['fu フ', 'fuu フウ'],
    kunyomi: [],
    displayMeanings: ['hill', 'mound'],
    fullDisplayMeanings: ['hill', 'mound', 'left village radical (no. 170)'],
    meanings: ['hill', 'mound', 'left village radical (no. 170)']
  },
  {
    id: 591,
    kanjiChar: '彫',
    onyomi: ['chou チョウ'],
    kunyomi: ['ho(ru) ほ(る)', '-bo(ri) -ぼ(り)'],
    displayMeanings: ['carve', 'engrave'],
    fullDisplayMeanings: ['carve', 'engrave', 'chisel'],
    meanings: ['carve', 'engrave', 'chisel']
  },
  {
    id: 592,
    kanjiChar: '穏',
    onyomi: ['on オン'],
    kunyomi: ['oda(yaka) おだ(やか)'],
    displayMeanings: ['calm', 'quiet'],
    fullDisplayMeanings: ['calm', 'quiet', 'moderation'],
    meanings: ['calm', 'quiet', 'moderation']
  },
  {
    id: 593,
    kanjiChar: '顕',
    onyomi: ['kun ケン'],
    kunyomi: ['akiraka あきらか', 'arawa(reru) あらわ(れる)'],
    displayMeanings: ['appear', 'existing'],
    fullDisplayMeanings: ['appear', 'existing'],
    meanings: ['appear', 'existing']
  },
  {
    id: 594,
    kanjiChar: '巧',
    onyomi: ['kou コウ'],
    kunyomi: ['taku(mi) たく(み)', 'uma(i) うま(い)'],
    displayMeanings: ['adroit', 'skilled'],
    fullDisplayMeanings: ['adroit', 'skilled', 'ingenuity'],
    meanings: ['adroit', 'skilled', 'ingenuity']
  },
  {
    id: 595,
    kanjiChar: '矛',
    onyomi: ['mu ム', 'bou ボウ'],
    kunyomi: ['hoko ほこ'],
    displayMeanings: ['halberd', 'arms'],
    fullDisplayMeanings: ['halberd', 'arms', 'festival float'],
    meanings: ['halberd', 'arms', 'festival float']
  },
  {
    id: 596,
    kanjiChar: '垣',
    onyomi: ['en エン'],
    kunyomi: ['kaki かき'],
    displayMeanings: ['hedge', 'fence'],
    fullDisplayMeanings: ['hedge', 'fence', 'wall'],
    meanings: ['hedge', 'fence', 'wall']
  },
  {
    id: 597,
    kanjiChar: '欺',
    onyomi: ['gi ギ'],
    kunyomi: ['azamu(ku) あざむ(く)'],
    displayMeanings: ['deceit', 'cheat'],
    fullDisplayMeanings: ['deceit', 'cheat', 'delude'],
    meanings: ['deceit', 'cheat', 'delude']
  },
  {
    id: 598,
    kanjiChar: '釣',
    onyomi: ['chou チョウ'],
    kunyomi: ['tsu(ru) つ(る)'],
    displayMeanings: ['angling', 'fish'],
    fullDisplayMeanings: ['angling', 'fish', 'catch', 'allure', 'ensnare'],
    meanings: ['angling', 'fish', 'catch', 'allure', 'ensnare']
  },
  {
    id: 599,
    kanjiChar: '萩',
    onyomi: ['shuu シュウ'],
    kunyomi: ['hagi はぎ'],
    displayMeanings: ['bush clover'],
    fullDisplayMeanings: ['bush clover'],
    meanings: ['bush clover']
  },
  {
    id: 600,
    kanjiChar: '粧',
    onyomi: ['shou ショウ'],
    kunyomi: [],
    displayMeanings: ['cosmetics', 'adorn'],
    fullDisplayMeanings: ['cosmetics', 'adorn (one\'s person)'],
    meanings: ['cosmetics', 'adorn (one\'s person)']
  },
    {
    id: 601,
    kanjiChar: '葛',
    onyomi: ['katsu カツ', 'kachi カチ'],
    kunyomi: ['tsudzura つづら', 'kuzu くず'],
    displayMeanings: ['arrowroot', 'kudzu'],
    fullDisplayMeanings: ['arrowroot', 'kudzu'],
    meanings: ['arrowroot', 'kudzu']
  },
  {
    id: 602,
    kanjiChar: '粛',
    onyomi: ['shuku シュク', 'suku スク'],
    kunyomi: ['tsutsushi(mu) つつし(む)'],
    displayMeanings: ['solemn', 'quietly'],
    fullDisplayMeanings: ['solemn', 'quietly', 'softly'],
    meanings: ['solemn', 'quietly', 'softly']
  },
  {
    id: 603,
    kanjiChar: '栗',
    onyomi: ['ritsu リツ', 'ri リ'],
    kunyomi: ['kuri くり', 'ononoku おののく'],
    displayMeanings: ['chestnut'],
    fullDisplayMeanings: ['chestnut'],
    meanings: ['chestnut']
  },
  {
    id: 604,
    kanjiChar: '愚',
    onyomi: ['gu グ'],
    kunyomi: ['oro(ka) おろ(か)'],
    displayMeanings: ['foolish', 'folly'],
    fullDisplayMeanings: ['foolish', 'folly', 'absurdity', 'stupid'],
    meanings: ['foolish', 'folly', 'absurdity', 'stupid']
  },
  {
    id: 605,
    kanjiChar: '嘉',
    onyomi: ['ka カ'],
    kunyomi: ['yomi(suru) よみ(する)', 'yoi よい'],
    displayMeanings: ['applaud', 'praise'],
    fullDisplayMeanings: ['applaud', 'praise', 'esteem', 'happy', 'auspicious'],
    meanings: ['applaud', 'praise', 'esteem', 'happy', 'auspicious']
  },
  {
    id: 606,
    kanjiChar: '遭',
    onyomi: ['sou ソウ'],
    kunyomi: ['a(u) あ(う)', 'a(waseru) あ(わせる)'],
    displayMeanings: ['encounter', 'meet'],
    fullDisplayMeanings: ['encounter', 'meet', 'party', 'association', 'interview', 'join'],
    meanings: ['encounter', 'meet', 'party', 'association', 'interview', 'join']
  },
  {
    id: 607,
    kanjiChar: '架',
    onyomi: ['ka カ'],
    kunyomi: ['ka(keru) か(ける)'],
    displayMeanings: ['erect', 'frame'],
    fullDisplayMeanings: ['erect', 'frame', 'mount', 'support', 'shelf', 'construct'],
    meanings: ['erect', 'frame', 'mount', 'support', 'shelf', 'construct']
  },
  {
    id: 608,
    kanjiChar: '篠',
    onyomi: ['zou ゾウ', 'shou ショウ'],
    kunyomi: ['shino しの', 'sasa ささ', 'suzu すず'],
    displayMeanings: ['bamboo grass'],
    fullDisplayMeanings: ['bamboo grass'],
    meanings: ['bamboo grass']
  },
  {
    id: 609,
    kanjiChar: '鬼',
    onyomi: ['ki キ'],
    kunyomi: ['oni おに'],
    displayMeanings: ['ghost', 'devil'],
    fullDisplayMeanings: ['ghost', 'devil'],
    meanings: ['ghost', 'devil']
  },
  {
    id: 610,
    kanjiChar: '庶',
    onyomi: ['sho ショ'],
    kunyomi: [],
    displayMeanings: ['commoner', 'all'],
    fullDisplayMeanings: ['commoner', 'all', 'bastard'],
    meanings: ['commoner', 'all', 'bastard']
  },
  {
    id: 611,
    kanjiChar: '稚',
    onyomi: ['chi チ', 'ji ジ'],
    kunyomi: ['itokenai いとけない', 'osanai おさない', 'okute おくて', 'oderu おでる'],
    displayMeanings: ['immature', 'young'],
    fullDisplayMeanings: ['immature', 'young'],
    meanings: ['immature', 'young']
  },
  {
    id: 612,
    kanjiChar: '菅',
    onyomi: ['kan カン', 'ken ケン'],
    kunyomi: ['suge すげ'],
    displayMeanings: ['sedge'],
    fullDisplayMeanings: ['sedge'],
    meanings: ['sedge']
  },
  {
    id: 613,
    kanjiChar: '滋',
    onyomi: ['ji ジ', 'shi シ'],
    kunyomi: [],
    displayMeanings: ['nourishing', 'luxuriant'],
    fullDisplayMeanings: ['nourishing', 'more & more', 'be luxuriant', 'planting', 'turbidity'],
    meanings: ['nourishing', 'more & more', 'be luxuriant', 'planting', 'turbidity']
  },
  {
    id: 614,
    kanjiChar: '幻',
    onyomi: ['gen ゲン'],
    kunyomi: ['maboroshi まぼろし'],
    displayMeanings: ['phantasm', 'vision'],
    fullDisplayMeanings: ['phantasm', 'vision', 'dream', 'illusion', 'apparition'],
    meanings: ['phantasm', 'vision', 'dream', 'illusion', 'apparition']
  },
  {
    id: 615,
    kanjiChar: '煮',
    onyomi: ['sha シャ'],
    kunyomi: ['ni(ru) に(る)', '-ni -に'],
    displayMeanings: ['boil', 'cook'],
    fullDisplayMeanings: ['boil', 'cook'],
    meanings: ['boil', 'cook']
  },
  {
    id: 616,
    kanjiChar: '姫',
    onyomi: ['ki キ'],
    kunyomi: ['hime ひめ', 'hime- ひめ-'],
    displayMeanings: ['princess'],
    fullDisplayMeanings: ['princess'],
    meanings: ['princess']
  },
  {
    id: 617,
    kanjiChar: '誓',
    onyomi: ['sei セイ'],
    kunyomi: ['chika(u) ちか(う)'],
    displayMeanings: ['vow', 'swear'],
    fullDisplayMeanings: ['vow', 'swear', 'pledge'],
    meanings: ['vow', 'swear', 'pledge']
  },
  {
    id: 618,
    kanjiChar: '把',
    onyomi: ['ha ハ', 'wa ワ'],
    kunyomi: [],
    displayMeanings: ['grasp', 'bunch'],
    fullDisplayMeanings: ['grasp', 'faggot', 'bunch', 'counter for bundles'],
    meanings: ['grasp', 'faggot', 'bunch', 'counter for bundles']
  },
  {
    id: 619,
    kanjiChar: '践',
    onyomi: ['sen セン'],
    kunyomi: ['fu(mu) ふ(む)'],
    displayMeanings: ['tread', 'step on'],
    fullDisplayMeanings: ['tread', 'step on', 'trample', 'practice', 'carry through'],
    meanings: ['tread', 'step on', 'trample', 'practice', 'carry through']
  },
  {
    id: 620,
    kanjiChar: '呈',
    onyomi: ['tei テイ'],
    kunyomi: [],
    displayMeanings: ['display', 'offer'],
    fullDisplayMeanings: ['display', 'offer', 'present', 'send', 'exhibit'],
    meanings: ['display', 'offer', 'present', 'send', 'exhibit']
  },
  {
    id: 621,
    kanjiChar: '疎',
    onyomi: ['so ソ', 'sho ショ'],
    kunyomi: ['uto(i) うと(い)', 'maba(ra) まば(ら)'],
    displayMeanings: ['alienate', 'neglect'],
    fullDisplayMeanings: ['alienate', 'rough', 'neglect', 'shun', 'sparse', 'penetrate'],
    meanings: ['alienate', 'rough', 'neglect', 'shun', 'sparse', 'penetrate']
  },
  {
    id: 622,
    kanjiChar: '仰',
    onyomi: ['gyou ギョウ', 'kou コウ'],
    kunyomi: ['oo(gu) あお(ぐ)', 'o(ssharu) お(っしゃる)'],
    displayMeanings: ['face-up', 'look up'],
    fullDisplayMeanings: ['face-up', 'look up', 'depend', 'seek', 'respect', 'revere', 'drink', 'take'],
    meanings: ['face-up', 'look up', 'depend', 'seek', 'respect', 'revere', 'drink', 'take']
  },
  {
    id: 623,
    kanjiChar: '剛',
    onyomi: ['gou ゴウ'],
    kunyomi: [],
    displayMeanings: ['sturdy', 'strength'],
    fullDisplayMeanings: ['sturdy', 'strength'],
    meanings: ['sturdy', 'strength']
  },
  {
    id: 624,
    kanjiChar: '疾',
    onyomi: ['shitsu シツ'],
    kunyomi: ['haya(i) はや(い)'],
    displayMeanings: ['rapidly'],
    fullDisplayMeanings: ['rapidly'],
    meanings: ['rapidly']
  },
  {
    id: 625,
    kanjiChar: '征',
    onyomi: ['sei セイ'],
    kunyomi: [],
    displayMeanings: ['subjugate', 'attack'],
    fullDisplayMeanings: ['subjugate', 'attack the rebellious', 'collect taxes'],
    meanings: ['subjugate', 'attack the rebellious', 'collect taxes']
  },
  {
    id: 626,
    kanjiChar: '砕',
    onyomi: ['sai サイ'],
    kunyomi: ['kuda(ku) くだ(く)'],
    displayMeanings: ['smash', 'break'],
    fullDisplayMeanings: ['smash', 'break', 'crush', 'familiar', 'popular'],
    meanings: ['smash', 'break', 'crush', 'familiar', 'popular']
  },
  {
    id: 627,
    kanjiChar: '謡',
    onyomi: ['you ヨウ'],
    kunyomi: ['uta(i) うた(い)'],
    displayMeanings: ['song', 'sing'],
    fullDisplayMeanings: ['song', 'sing', 'ballad', 'noh chanting'],
    meanings: ['song', 'sing', 'ballad', 'noh chanting']
  },
  {
    id: 628,
    kanjiChar: '嫁',
    onyomi: ['ka カ'],
    kunyomi: ['yome よめ', 'totsu(gu) とつ(ぐ)', 'i(ku) い(く)', 'yu(ku) ゆ(く)'],
    displayMeanings: ['marry into', 'bride'],
    fullDisplayMeanings: ['marry into', 'bride'],
    meanings: ['marry into', 'bride']
  },
  {
    id: 629,
    kanjiChar: '謙',
    onyomi: ['ken ケン'],
    kunyomi: ['herikuda(ru) へりくだ(る)'],
    displayMeanings: ['self-effacing', 'humble'],
    fullDisplayMeanings: ['self-effacing', 'humble oneself', 'condescend', 'be modest'],
    meanings: ['self-effacing', 'humble oneself', 'condescend', 'be modest']
  },
  {
    id: 630,
    kanjiChar: '后',
    onyomi: ['kou コウ', 'go ゴ'],
    kunyomi: ['kisaki きさき'],
    displayMeanings: ['empress', 'queen'],
    fullDisplayMeanings: ['empress', 'queen', 'after', 'behind', 'back', 'later'],
    meanings: ['empress', 'queen', 'after', 'behind', 'back', 'later']
  },
  {
    id: 631,
    kanjiChar: '嘆',
    onyomi: ['tan タン'],
    kunyomi: ['nage(ku) なげ(く)', 'nage(kawashii) なげ(かわしい)'],
    displayMeanings: ['sigh', 'lament'],
    fullDisplayMeanings: ['sigh', 'lament', 'moan', 'grieve', 'sigh of admiration'],
    meanings: ['sigh', 'lament', 'moan', 'grieve', 'sigh of admiration']
  },
  {
    id: 632,
    kanjiChar: '俣',
    onyomi: ['mata また'],
    kunyomi: [],
    displayMeanings: ['crotch', 'thigh'],
    fullDisplayMeanings: ['crotch', 'thigh', 'groin', 'fork', 'junction', '(kokuji)'],
    meanings: ['crotch', 'thigh', 'groin', 'fork', 'junction', '(kokuji)']
  },
  {
    id: 633,
    kanjiChar: '菌',
    onyomi: ['kin キン'],
    kunyomi: [],
    displayMeanings: ['germ', 'fungus'],
    fullDisplayMeanings: ['germ', 'fungus', 'bacteria'],
    meanings: ['germ', 'fungus', 'bacteria']
  },
  {
    id: 634,
    kanjiChar: '鎌',
    onyomi: ['ren レン', 'ken ケン'],
    kunyomi: ['kama かま'],
    displayMeanings: ['sickle', 'scythe'],
    fullDisplayMeanings: ['sickle', 'scythe', 'trick'],
    meanings: ['sickle', 'scythe', 'trick']
  },
  {
    id: 635,
    kanjiChar: '巣',
    onyomi: ['sou ソウ'],
    kunyomi: ['su す', 'su(kuu) す(くう)'],
    displayMeanings: ['nest', 'rookery'],
    fullDisplayMeanings: ['nest', 'rookery', 'hive', 'cobweb', 'den'],
    meanings: ['nest', 'rookery', 'hive', 'cobweb', 'den']
  },
  {
    id: 636,
    kanjiChar: '頻',
    onyomi: ['hin ヒン'],
    kunyomi: ['shiki(rini) しき(りに)'],
    displayMeanings: ['repeatedly', 'recur'],
    fullDisplayMeanings: ['repeatedly', 'recur'],
    meanings: ['repeatedly', 'recur']
  },
  {
    id: 637,
    kanjiChar: '琴',
    onyomi: ['kin キン', 'gon ゴン'],
    kunyomi: ['koto こと'],
    displayMeanings: ['harp', 'koto'],
    fullDisplayMeanings: ['harp', 'koto'],
    meanings: ['harp', 'koto']
  },
  {
    id: 638,
    kanjiChar: '班',
    onyomi: ['han ハン'],
    kunyomi: [],
    displayMeanings: ['squad', 'corps'],
    fullDisplayMeanings: ['squad', 'corps', 'unit', 'group'],
    meanings: ['squad', 'corps', 'unit', 'group']
  },
  {
    id: 639,
    kanjiChar: '淵',
    onyomi: ['en エン', 'kaku カク', 'kou コウ'],
    kunyomi: ['fuchi ふち', 'kata(i) かた(い)', 'hanawa はなわ'],
    displayMeanings: ['abyss', 'edge'],
    fullDisplayMeanings: ['abyss', 'edge', 'deep pool', 'the depths'],
    meanings: ['abyss', 'edge', 'deep pool', 'the depths']
  },
  {
    id: 640,
    kanjiChar: '棚',
    onyomi: ['hou ホウ'],
    kunyomi: ['tana たな', '-dana -だな'],
    displayMeanings: ['shelf', 'ledge'],
    fullDisplayMeanings: ['shelf', 'ledge', 'rack', 'mount', 'mantle', 'trellis'],
    meanings: ['shelf', 'ledge', 'rack', 'mount', 'mantle', 'trellis']
  },
  {
    id: 641,
    kanjiChar: '潔',
    onyomi: ['ketsu ケツ'],
    kunyomi: ['isagiyo(i) いさぎよ(い)'],
    displayMeanings: ['undefiled', 'pure'],
    fullDisplayMeanings: ['undefiled', 'pure', 'clean', 'righteous', 'gallant'],
    meanings: ['undefiled', 'pure', 'clean', 'righteous', 'gallant']
  },
  {
    id: 642,
    kanjiChar: '酷',
    onyomi: ['koku コク'],
    kunyomi: ['hido(i) ひど(い)'],
    displayMeanings: ['cruel', 'severe'],
    fullDisplayMeanings: ['cruel', 'severe', 'atrocious', 'unjust'],
    meanings: ['cruel', 'severe', 'atrocious', 'unjust']
  },
  {
    id: 643,
    kanjiChar: '宰',
    onyomi: ['sai サイ'],
    kunyomi: [],
    displayMeanings: ['superintend', 'manager'],
    fullDisplayMeanings: ['superintend', 'manager', 'rule'],
    meanings: ['superintend', 'manager', 'rule']
  },
  {
    id: 644,
    kanjiChar: '廊',
    onyomi: ['rou ロウ'],
    kunyomi: [],
    displayMeanings: ['corridor', 'hall'],
    fullDisplayMeanings: ['corridor', 'hall', 'tower'],
    meanings: ['corridor', 'hall', 'tower']
  },
  {
    id: 645,
    kanjiChar: '寂',
    onyomi: ['jaku ジャク', 'seki セキ'],
    kunyomi: ['sabi さび', 'sabi(shii) さび(しい)', 'sami(shii) さみ(しい)'],
    displayMeanings: ['loneliness', 'quietly'],
    fullDisplayMeanings: ['loneliness', 'quietly', 'mellow', 'mature', 'death of a priest'],
    meanings: ['loneliness', 'quietly', 'mellow', 'mature', 'death of a priest']
  },
  {
    id: 646,
    kanjiChar: '辰',
    onyomi: ['shin シン', 'jin ジン'],
    kunyomi: ['tatsu たつ'],
    displayMeanings: ['sign of the dragon', '7-9AM'],
    fullDisplayMeanings: ['sign of the dragon', '7-9AM', 'fifth sign of Chinese zodiac', 'shin dragon radical (no. 161)'],
    meanings: ['sign of the dragon', '7-9AM', 'fifth sign of Chinese zodiac', 'shin dragon radical (no. 161)']
  },
  {
    id: 647,
    kanjiChar: '霞',
    onyomi: ['ka カ', 'ge ゲ'],
    kunyomi: ['kasumi かすみ', 'kasu(mu) かす(む)'],
    displayMeanings: ['be hazy', 'grow dim'],
    fullDisplayMeanings: ['be hazy', 'grow dim', 'blurred'],
    meanings: ['be hazy', 'grow dim', 'blurred']
  },
  {
    id: 648,
    kanjiChar: '伏',
    onyomi: ['fuku フク'],
    kunyomi: ['fu(seru) ふ(せる)', 'fu(su) ふ(す)'],
    displayMeanings: ['prostrated', 'bend down'],
    fullDisplayMeanings: ['prostrated', 'bend down', 'bow', 'cover', 'lay (pipes)'],
    meanings: ['prostrated', 'bend down', 'bow', 'cover', 'lay (pipes)']
  },
  {
    id: 649,
    kanjiChar: '柏',
    onyomi: ['haku ハク', 'hyaku ヒャク', 'byaku ビャク'],
    kunyomi: ['kashiwa かしわ'],
    displayMeanings: ['oak', 'cypress'],
    fullDisplayMeanings: ['oak', 'cypress'],
    meanings: ['oak', 'cypress']
  },
  {
    id: 650,
    kanjiChar: '碁',
    onyomi: ['go ゴ'],
    kunyomi: [],
    displayMeanings: ['Go'],
    fullDisplayMeanings: ['Go'],
    meanings: ['Go']
  },
  {
    id: 651,
    kanjiChar: '俗',
    onyomi: ['zoku ゾク'],
    kunyomi: [],
    displayMeanings: ['vulgar', 'customs'],
    fullDisplayMeanings: ['vulgar', 'customs', 'manners', 'worldliness', 'mundane things'],
    meanings: ['vulgar', 'customs', 'manners', 'worldliness', 'mundane things']
  },
  {
    id: 652,
    kanjiChar: '漠',
    onyomi: ['baku バク'],
    kunyomi: [],
    displayMeanings: ['vague', 'obscure'],
    fullDisplayMeanings: ['vague', 'obscure', 'desert', 'wide'],
    meanings: ['vague', 'obscure', 'desert', 'wide']
  },
  {
    id: 653,
    kanjiChar: '邪',
    onyomi: ['ja ジャ'],
    kunyomi: ['yokoshi(ma) よこし(ま)'],
    displayMeanings: ['wicked', 'injustice'],
    fullDisplayMeanings: ['wicked', 'injustice', 'wrong'],
    meanings: ['wicked', 'injustice', 'wrong']
  },
  {
    id: 654,
    kanjiChar: '晶',
    onyomi: ['shou ショウ'],
    kunyomi: [],
    displayMeanings: ['sparkle', 'clear'],
    fullDisplayMeanings: ['sparkle', 'clear', 'crystal'],
    meanings: ['sparkle', 'clear', 'crystal']
  },
  {
    id: 655,
    kanjiChar: '辻',
    onyomi: ['tsuji つじ'],
    kunyomi: [],
    displayMeanings: ['crossing', 'crossroad'],
    fullDisplayMeanings: ['crossing', 'crossroad', 'street corners', '(kokuji)'],
    meanings: ['crossing', 'crossroad', 'street corners', '(kokuji)']
  },
  {
    id: 656,
    kanjiChar: '墨',
    onyomi: ['boku ボク'],
    kunyomi: ['sumi すみ'],
    displayMeanings: ['black ink', 'India ink'],
    fullDisplayMeanings: ['black ink', 'India ink', 'ink stick', 'Mexico'],
    meanings: ['black ink', 'India ink', 'ink stick', 'Mexico']
  },
  {
    id: 657,
    kanjiChar: '鎮',
    onyomi: ['chin チン'],
    kunyomi: ['shizu(meru) しず(める)', 'osae おさえ'],
    displayMeanings: ['tranquilize', 'peace-preservation'],
    fullDisplayMeanings: ['tranquilize', 'ancient peace-preservation centers'],
    meanings: ['tranquilize', 'ancient peace-preservation centers']
  },
  {
    id: 658,
    kanjiChar: '洞',
    onyomi: ['dou ドウ'],
    kunyomi: ['hora ほら'],
    displayMeanings: ['den', 'cave'],
    fullDisplayMeanings: ['den', 'cave', 'excavation'],
    meanings: ['den', 'cave', 'excavation']
  },
  {
    id: 659,
    kanjiChar: '履',
    onyomi: ['ri リ'],
    kunyomi: ['ha(ku) は(く)'],
    displayMeanings: ['perform', 'complete'],
    fullDisplayMeanings: ['perform', 'complete', 'footgear', 'shoes', 'boots', 'put on (the feet)'],
    meanings: ['perform', 'complete', 'footgear', 'shoes', 'boots', 'put on (the feet)']
  },
  {
    id: 660,
    kanjiChar: '劣',
    onyomi: ['retsu レツ'],
    kunyomi: ['oto(ru) おと(る)'],
    displayMeanings: ['inferiority', 'be inferior'],
    fullDisplayMeanings: ['inferiority', 'be inferior to', 'be worse'],
    meanings: ['inferiority', 'be inferior to', 'be worse']
  },
  {
    id: 661,
    kanjiChar: '那',
    onyomi: ['na ナ', 'da ダ'],
    kunyomi: ['nani なに', 'nanzo なんぞ', 'ikan いかん'],
    displayMeanings: ['what?'],
    fullDisplayMeanings: ['what?'],
    meanings: ['what?']
  },
  {
    id: 662,
    kanjiChar: '殴',
    onyomi: ['ou オウ'],
    kunyomi: ['nagu(ru) なぐ(る)'],
    displayMeanings: ['assault', 'hit'],
    fullDisplayMeanings: ['assault', 'hit', 'beat', 'thrash'],
    meanings: ['assault', 'hit', 'beat', 'thrash']
  },
  {
    id: 663,
    kanjiChar: '娠',
    onyomi: ['shin シン'],
    kunyomi: [],
    displayMeanings: ['with child', 'pregnancy'],
    fullDisplayMeanings: ['with child', 'pregnancy'],
    meanings: ['with child', 'pregnancy']
  },
  {
    id: 664,
    kanjiChar: '奉',
    onyomi: ['hou ホウ', 'bu ブ'],
    kunyomi: ['tatematsu(ru) たてまつ(る)', 'matsu(ru) まつ(る)', 'hou(zuru) ほう(ずる)'],
    displayMeanings: ['observance', 'offer'],
    fullDisplayMeanings: ['observance', 'offer', 'present', 'dedicate'],
    meanings: ['observance', 'offer', 'present', 'dedicate']
  },
  {
    id: 665,
    kanjiChar: '憂',
    onyomi: ['yuu ユウ'],
    kunyomi: ['ure(eru) うれ(える)', 'ure(i) うれ(い)', 'u(i) う(い)', 'u(ki) う(き)'],
    displayMeanings: ['melancholy', 'grieve'],
    fullDisplayMeanings: ['melancholy', 'grieve', 'lament', 'be anxious', 'sad', 'unhappy'],
    meanings: ['melancholy', 'grieve', 'lament', 'be anxious', 'sad', 'unhappy']
  },
  {
    id: 666,
    kanjiChar: '朴',
    onyomi: ['boku ボク'],
    kunyomi: ['hou ほう', 'hoo ほお', 'enoki えのき'],
    displayMeanings: ['crude', 'simple'],
    fullDisplayMeanings: ['crude', 'simple', 'plain', 'docile'],
    meanings: ['crude', 'simple', 'plain', 'docile']
  },
  {
    id: 667,
    kanjiChar: '亭',
    onyomi: ['tei テイ', 'chin チン'],
    kunyomi: [],
    displayMeanings: ['pavilion', 'restaurant'],
    fullDisplayMeanings: ['pavilion', 'restaurant', 'mansion', 'arbor', 'cottage', 'vaudeville', 'music hall', 'stage name'],
    meanings: ['pavilion', 'restaurant', 'mansion', 'arbor', 'cottage', 'vaudeville', 'music hall', 'stage name']
  },
  {
    id: 668,
    kanjiChar: '淳',
    onyomi: ['jun ジュン', 'shun シュン'],
    kunyomi: ['atsu(i) あつ(い)'],
    displayMeanings: ['pure'],
    fullDisplayMeanings: ['pure'],
    meanings: ['pure']
  },
  {
    id: 669,
    kanjiChar: '荻',
    onyomi: ['teki テキ'],
    kunyomi: ['ogi おぎ'],
    displayMeanings: ['reed', 'rush'],
    fullDisplayMeanings: ['reed', 'rush'],
    meanings: ['reed', 'rush']
  },
  {
    id: 670,
    kanjiChar: '嶋',
    onyomi: ['tou トウ'],
    kunyomi: ['shima しま'],
    displayMeanings: ['island'],
    fullDisplayMeanings: ['island'],
    meanings: ['island']
  },
  {
    id: 671,
    kanjiChar: '怪',
    onyomi: ['kai カイ', 'ke ケ'],
    kunyomi: ['aya(shii) あや(しい)', 'aya(shimu) あや(しむ)'],
    displayMeanings: ['suspicious', 'mystery'],
    fullDisplayMeanings: ['suspicious', 'mystery', 'apparition'],
    meanings: ['suspicious', 'mystery', 'apparition']
  },
  {
    id: 672,
    kanjiChar: '鳩',
    onyomi: ['kyuu キュウ', 'ku ク'],
    kunyomi: ['hato はと', 'atsu(meru) あつ(める)'],
    displayMeanings: ['pigeon', 'dove'],
    fullDisplayMeanings: ['pigeon', 'dove'],
    meanings: ['pigeon', 'dove']
  },
  {
    id: 673,
    kanjiChar: '柴',
    onyomi: ['sai サイ', 'shi シ'],
    kunyomi: ['shiba しば'],
    displayMeanings: ['brush', 'firewood'],
    fullDisplayMeanings: ['brush', 'firewood'],
    meanings: ['brush', 'firewood']
  },
  {
    id: 674,
    kanjiChar: '酔',
    onyomi: ['sui スイ'],
    kunyomi: ['yo(u) よ(う)', 'yo(i) よ(い)', 'yo よ'],
    displayMeanings: ['drunk', 'feel sick'],
    fullDisplayMeanings: ['drunk', 'feel sick', 'poisoned', 'elated', 'spellbound'],
    meanings: ['drunk', 'feel sick', 'poisoned', 'elated', 'spellbound']
  },
  {
    id: 675,
    kanjiChar: '惜',
    onyomi: ['seki セキ'],
    kunyomi: ['o(shii) お(しい)', 'o(shimu) お(しむ)'],
    displayMeanings: ['pity', 'be sparing'],
    fullDisplayMeanings: ['pity', 'be sparing of', 'frugal', 'stingy', 'regret'],
    meanings: ['pity', 'be sparing of', 'frugal', 'stingy', 'regret']
  },
  {
    id: 676,
    kanjiChar: '穫',
    onyomi: ['kaku カク'],
    kunyomi: [],
    displayMeanings: ['harvest', 'reap'],
    fullDisplayMeanings: ['harvest', 'reap'],
    meanings: ['harvest', 'reap']
  },
  {
    id: 677,
    kanjiChar: '佳',
    onyomi: ['ka カ'],
    kunyomi: [],
    displayMeanings: ['excellent', 'beautiful'],
    fullDisplayMeanings: ['excellent', 'beautiful', 'good', 'pleasing', 'skilled'],
    meanings: ['excellent', 'beautiful', 'good', 'pleasing', 'skilled']
  },
  {
    id: 678,
    kanjiChar: '潤',
    onyomi: ['jun ジュン'],
    kunyomi: ['uruo(u) うるお(う)', 'uru(mu) うる(む)'],
    displayMeanings: ['wet', 'be watered'],
    fullDisplayMeanings: ['wet', 'be watered', 'profit by', 'receive benefits', 'favor', 'charm', 'steep'],
    meanings: ['wet', 'be watered', 'profit by', 'receive benefits', 'favor', 'charm', 'steep']
  },
  {
    id: 679,
    kanjiChar: '悼',
    onyomi: ['tou トウ'],
    kunyomi: ['ita(mu) いた(む)'],
    displayMeanings: ['lament', 'grieve over'],
    fullDisplayMeanings: ['lament', 'grieve over'],
    meanings: ['lament', 'grieve over']
  },
  {
    id: 680,
    kanjiChar: '乏',
    onyomi: ['bou ボウ'],
    kunyomi: ['tobo(shii) とぼ(しい)', 'tomo(shii) とも(しい)'],
    displayMeanings: ['destitution', 'scarce'],
    fullDisplayMeanings: ['destitution', 'scarce', 'limited'],
    meanings: ['destitution', 'scarce', 'limited']
  },
  {
    id: 681,
    kanjiChar: '該',
    onyomi: ['gai ガイ'],
    kunyomi: [],
    displayMeanings: ['above-stated', 'the said'],
    fullDisplayMeanings: ['above-stated', 'the said', 'that specific'],
    meanings: ['above-stated', 'the said', 'that specific']
  },
  {
    id: 682,
    kanjiChar: '赴',
    onyomi: ['fu フ'],
    kunyomi: ['omomu(ku) おもむ(く)'],
    displayMeanings: ['proceed', 'get'],
    fullDisplayMeanings: ['proceed', 'get', 'become', 'tend'],
    meanings: ['proceed', 'get', 'become', 'tend']
  },
  {
    id: 683,
    kanjiChar: '桑',
    onyomi: ['sou ソウ'],
    kunyomi: ['kuwa くわ'],
    displayMeanings: ['mulberry'],
    fullDisplayMeanings: ['mulberry'],
    meanings: ['mulberry']
  },
  {
    id: 684,
    kanjiChar: '桂',
    onyomi: ['kei ケイ'],
    kunyomi: ['katsura かつら'],
    displayMeanings: ['Japanese Judas-tree', 'cinnamon tree'],
    fullDisplayMeanings: ['Japanese Judas-tree', 'cinnamon tree'],
    meanings: ['Japanese Judas-tree', 'cinnamon tree']
  },
  {
    id: 685,
    kanjiChar: '髄',
    onyomi: ['zui ズイ'],
    kunyomi: [],
    displayMeanings: ['marrow', 'pith'],
    fullDisplayMeanings: ['marrow', 'pith', 'essence'],
    meanings: ['marrow', 'pith', 'essence']
  },
  {
    id: 686,
    kanjiChar: '虎',
    onyomi: ['ko コ'],
    kunyomi: ['tora とら'],
    displayMeanings: ['tiger', 'drunkard'],
    fullDisplayMeanings: ['tiger', 'drunkard'],
    meanings: ['tiger', 'drunkard']
  },
  {
    id: 687,
    kanjiChar: '盆',
    onyomi: ['bon ボン'],
    kunyomi: [],
    displayMeanings: ['basin', 'lantern festival'],
    fullDisplayMeanings: ['basin', 'lantern festival', 'tray'],
    meanings: ['basin', 'lantern festival', 'tray']
  },
  {
    id: 688,
    kanjiChar: '晋',
    onyomi: ['shin シン'],
    kunyomi: ['susu(mu) すす(む)'],
    displayMeanings: ['advance'],
    fullDisplayMeanings: ['advance'],
    meanings: ['advance']
  },
  {
    id: 689,
    kanjiChar: '穂',
    onyomi: ['sui スイ'],
    kunyomi: ['ho ほ'],
    displayMeanings: ['ear', 'ear (grain)'],
    fullDisplayMeanings: ['ear', 'ear (grain)', 'head', 'crest (wave)'],
    meanings: ['ear', 'ear (grain)', 'head', 'crest (wave)']
  },
  {
    id: 690,
    kanjiChar: '壮',
    onyomi: ['sou ソウ'],
    kunyomi: ['sakan さかん'],
    displayMeanings: ['robust', 'manhood'],
    fullDisplayMeanings: ['robust', 'manhood', 'prosperity'],
    meanings: ['robust', 'manhood', 'prosperity']
  },
  {
    id: 691,
    kanjiChar: '堤',
    onyomi: ['tei テイ'],
    kunyomi: ['tsutsumi つつみ'],
    displayMeanings: ['dike', 'bank'],
    fullDisplayMeanings: ['dike', 'bank', 'embankment'],
    meanings: ['dike', 'bank', 'embankment']
  },
  {
    id: 692,
    kanjiChar: '飢',
    onyomi: ['ki キ'],
    kunyomi: ['u(eru) う(える)'],
    displayMeanings: ['hungry', 'starve'],
    fullDisplayMeanings: ['hungry', 'starve'],
    meanings: ['hungry', 'starve']
  },
  {
    id: 693,
    kanjiChar: '傍',
    onyomi: ['bou ボウ'],
    kunyomi: ['katawa(ra) かたわ(ら)', 'waki わき', 'oka- おか-', 'hata はた', 'soba そば'],
    displayMeanings: ['bystander', 'side'],
    fullDisplayMeanings: ['bystander', 'side', 'besides', 'while', 'nearby', 'third person'],
    meanings: ['bystander', 'side', 'besides', 'while', 'nearby', 'third person']
  },
  {
    id: 694,
    kanjiChar: '疫',
    onyomi: ['eki エキ', 'yaku ヤク'],
    kunyomi: [],
    displayMeanings: ['epidemic'],
    fullDisplayMeanings: ['epidemic'],
    meanings: ['epidemic']
  },
  {
    id: 695,
    kanjiChar: '累',
    onyomi: ['rui ルイ'],
    kunyomi: [],
    displayMeanings: ['accumulate', 'involvement'],
    fullDisplayMeanings: ['accumulate', 'involvement', 'trouble', 'tie up', 'continually'],
    meanings: ['accumulate', 'involvement', 'trouble', 'tie up', 'continually']
  },
  {
    id: 696,
    kanjiChar: '痴',
    onyomi: ['chi チ'],
    kunyomi: ['shi(reru) し(れる)', 'oroka おろか'],
    displayMeanings: ['stupid', 'foolish'],
    fullDisplayMeanings: ['stupid', 'foolish'],
    meanings: ['stupid', 'foolish']
  },
  {
    id: 697,
    kanjiChar: '搬',
    onyomi: ['han ハン'],
    kunyomi: [],
    displayMeanings: ['conveyor', 'carry'],
    fullDisplayMeanings: ['conveyor', 'carry', 'transport'],
    meanings: ['conveyor', 'carry', 'transport']
  },
  {
    id: 698,
    kanjiChar: '晃',
    onyomi: ['kou コウ'],
    kunyomi: ['akiraka あきらか'],
    displayMeanings: ['clear'],
    fullDisplayMeanings: ['clear'],
    meanings: ['clear']
  },
  {
    id: 699,
    kanjiChar: '癒',
    onyomi: ['yu ユ'],
    kunyomi: ['i(eru) い(える)', 'iya(su) いや(す)'],
    displayMeanings: ['healing', 'cure'],
    fullDisplayMeanings: ['healing', 'cure', 'quench (thirst)', 'wreak'],
    meanings: ['healing', 'cure', 'quench (thirst)', 'wreak']
  },
  {
    id: 700,
    kanjiChar: '桐',
    onyomi: ['tou トウ', 'dou ドウ'],
    kunyomi: ['kiri きり'],
    displayMeanings: ['paulownia'],
    fullDisplayMeanings: ['paulownia'],
    meanings: ['paulownia']
  },
    {
    id: 701,
    kanjiChar: '寸',
    onyomi: ['sun スン'],
    kunyomi: [],
    displayMeanings: ['measurement', 'tenth of a shaku'],
    fullDisplayMeanings: ['measurement', 'tenth of a shaku', 'a little', 'small'],
    meanings: ['measurement', 'tenth of a shaku', 'a little', 'small']
  },
  {
    id: 702,
    kanjiChar: '郭',
    onyomi: ['kaku カク'],
    kunyomi: ['kuruwa くるわ'],
    displayMeanings: ['enclosure', 'quarters'],
    fullDisplayMeanings: ['enclosure', 'quarters', 'fortification', 'red-light district'],
    meanings: ['enclosure', 'quarters', 'fortification', 'red-light district']
  },
  {
    id: 703,
    kanjiChar: '尿',
    onyomi: ['nyou ニョウ'],
    kunyomi: ['yubari ゆばり', 'ibari いばり', 'shito しと'],
    displayMeanings: ['urine'],
    fullDisplayMeanings: ['urine'],
    meanings: ['urine']
  },
  {
    id: 704,
    kanjiChar: '凶',
    onyomi: ['kyou キョウ'],
    kunyomi: [],
    displayMeanings: ['villain', 'evil'],
    fullDisplayMeanings: ['villain', 'evil', 'bad luck', 'disaster'],
    meanings: ['villain', 'evil', 'bad luck', 'disaster']
  },
  {
    id: 705,
    kanjiChar: '吐',
    onyomi: ['to ト'],
    kunyomi: ['ha(ku) は(く)', 'tsu(ku) つ(く)'],
    displayMeanings: ['spit', 'vomit'],
    fullDisplayMeanings: ['spit', 'vomit', 'belch', 'confess', 'tell (lies)'],
    meanings: ['spit', 'vomit', 'belch', 'confess', 'tell (lies)']
  },
  {
    id: 706,
    kanjiChar: '宴',
    onyomi: ['en エン'],
    kunyomi: ['utage うたげ'],
    displayMeanings: ['banquet', 'feast'],
    fullDisplayMeanings: ['banquet', 'feast', 'party'],
    meanings: ['banquet', 'feast', 'party']
  },
  {
    id: 707,
    kanjiChar: '鷹',
    onyomi: ['you ヨウ', 'ou オウ'],
    kunyomi: ['taka たか'],
    displayMeanings: ['hawk'],
    fullDisplayMeanings: ['hawk'],
    meanings: ['hawk']
  },
  {
    id: 708,
    kanjiChar: '賓',
    onyomi: ['hin ヒン'],
    kunyomi: ['maroudo まろうど', 'shitagau したがう'],
    displayMeanings: ['V.I.P.', 'guest'],
    fullDisplayMeanings: ['V.I.P.', 'guest'],
    meanings: ['V.I.P.', 'guest']
  },
  {
    id: 709,
    kanjiChar: '虜',
    onyomi: ['ryo リョ', 'ro ロ'],
    kunyomi: ['toriko とりこ', 'toriku とりく'],
    displayMeanings: ['captive', 'barbarian'],
    fullDisplayMeanings: ['captive', 'barbarian', 'low epithet for the enemy'],
    meanings: ['captive', 'barbarian', 'low epithet for the enemy']
  },
  {
    id: 710,
    kanjiChar: '陶',
    onyomi: ['tou トウ'],
    kunyomi: ['sue すえ'],
    displayMeanings: ['pottery', 'porcelain'],
    fullDisplayMeanings: ['pottery', 'porcelain'],
    meanings: ['pottery', 'porcelain']
  },
  {
    id: 711,
    kanjiChar: '鐘',
    onyomi: ['shou ショウ'],
    kunyomi: ['kane かね'],
    displayMeanings: ['bell', 'gong'],
    fullDisplayMeanings: ['bell', 'gong', 'chimes'],
    meanings: ['bell', 'gong', 'chimes']
  },
  {
    id: 712,
    kanjiChar: '憾',
    onyomi: ['kan カン'],
    kunyomi: ['ura(mu) うら(む)'],
    displayMeanings: ['remorse', 'regret'],
    fullDisplayMeanings: ['remorse', 'regret', 'be sorry'],
    meanings: ['remorse', 'regret', 'be sorry']
  },
  {
    id: 713,
    kanjiChar: '畿',
    onyomi: ['ki キ'],
    kunyomi: ['miyako みやこ'],
    displayMeanings: ['capital', 'suburbs'],
    fullDisplayMeanings: ['capital', 'suburbs of capital'],
    meanings: ['capital', 'suburbs of capital']
  },
  {
    id: 714,
    kanjiChar: '猪',
    onyomi: ['cho チョ'],
    kunyomi: ['i い', 'inoshishi いのしし'],
    displayMeanings: ['boar'],
    fullDisplayMeanings: ['boar'],
    meanings: ['boar']
  },
  {
    id: 715,
    kanjiChar: '紘',
    onyomi: ['kou コウ'],
    kunyomi: ['oodzuna おおづな', 'tsuna つな', 'tsunagu つなぐ'],
    displayMeanings: ['large'],
    fullDisplayMeanings: ['large'],
    meanings: ['large']
  },
  {
    id: 716,
    kanjiChar: '磁',
    onyomi: ['ji ジ'],
    kunyomi: [],
    displayMeanings: ['magnet', 'porcelain'],
    fullDisplayMeanings: ['magnet', 'porcelain'],
    meanings: ['magnet', 'porcelain']
  },
  {
    id: 717,
    kanjiChar: '弥',
    onyomi: ['mi ミ', 'bi ビ'],
    kunyomi: ['ya や', 'iya いや', 'iyo(iyo) いよ(いよ)', 'wata(ru) わた(る)'],
    displayMeanings: ['all the more', 'increasingly'],
    fullDisplayMeanings: ['all the more', 'increasingly'],
    meanings: ['all the more', 'increasingly']
  },
  {
    id: 718,
    kanjiChar: '昆',
    onyomi: ['kon コン'],
    kunyomi: [],
    displayMeanings: ['descendants', 'elder brother'],
    fullDisplayMeanings: ['descendants', 'elder brother', 'insect'],
    meanings: ['descendants', 'elder brother', 'insect']
  },
  {
    id: 719,
    kanjiChar: '粗',
    onyomi: ['so ソ'],
    kunyomi: ['ara(i) あら(い)', 'ara- あら-'],
    displayMeanings: ['coarse', 'rough'],
    fullDisplayMeanings: ['coarse', 'rough', 'rugged'],
    meanings: ['coarse', 'rough', 'rugged']
  },
  {
    id: 720,
    kanjiChar: '訂',
    onyomi: ['tei テイ'],
    kunyomi: ['tada(su) ただ(す)'],
    displayMeanings: ['revise', 'correct'],
    fullDisplayMeanings: ['revise', 'correct', 'decide'],
    meanings: ['revise', 'correct', 'decide']
  },
  {
    id: 721,
    kanjiChar: '芽',
    onyomi: ['ga ガ'],
    kunyomi: ['me め'],
    displayMeanings: ['bud', 'sprout'],
    fullDisplayMeanings: ['bud', 'sprout', 'spear', 'gem'],
    meanings: ['bud', 'sprout', 'spear', 'gem']
  },
  {
    id: 722,
    kanjiChar: '尻',
    onyomi: ['kou コウ'],
    kunyomi: ['shiri しり'],
    displayMeanings: ['buttocks', 'hips'],
    fullDisplayMeanings: ['buttocks', 'hips', 'butt', 'rear'],
    meanings: ['buttocks', 'hips', 'butt', 'rear']
  },
  {
    id: 723,
    kanjiChar: '庄',
    onyomi: ['shou ショウ', 'so ソ', 'sou ソウ', 'hou ホウ'],
    kunyomi: [],
    displayMeanings: ['level', 'manor'],
    fullDisplayMeanings: ['level', 'in the country', 'manor', 'village', 'hamlet'],
    meanings: ['level', 'in the country', 'manor', 'village', 'hamlet']
  },
  {
    id: 724,
    kanjiChar: '傘',
    onyomi: ['san サン'],
    kunyomi: ['kasa かさ'],
    displayMeanings: ['umbrella'],
    fullDisplayMeanings: ['umbrella'],
    meanings: ['umbrella']
  },
  {
    id: 725,
    kanjiChar: '敦',
    onyomi: ['ton トン', 'tai タイ', 'dan ダン', 'chou チョウ'],
    kunyomi: ['atsu(i) あつ(い)'],
    displayMeanings: ['industry', 'kindliness'],
    fullDisplayMeanings: ['industry', 'kindliness'],
    meanings: ['industry', 'kindliness']
  },
  {
    id: 726,
    kanjiChar: '騎',
    onyomi: ['ki キ'],
    kunyomi: [],
    displayMeanings: ['equestrian', 'riding on horses'],
    fullDisplayMeanings: ['equestrian', 'riding on horses', 'counter for equestrians'],
    meanings: ['equestrian', 'riding on horses', 'counter for equestrians']
  },
  {
    id: 727,
    kanjiChar: '寧',
    onyomi: ['nei ネイ'],
    kunyomi: ['mushi(ro) むし(ろ)'],
    displayMeanings: ['rather', 'preferably'],
    fullDisplayMeanings: ['rather', 'preferably', 'peaceful', 'quiet', 'tranquility'],
    meanings: ['rather', 'preferably', 'peaceful', 'quiet', 'tranquility']
  },
  {
    id: 728,
    kanjiChar: '循',
    onyomi: ['jun ジュン'],
    kunyomi: [],
    displayMeanings: ['sequential', 'follow'],
    fullDisplayMeanings: ['sequential', 'follow'],
    meanings: ['sequential', 'follow']
  },
  {
    id: 729,
    kanjiChar: '忍',
    onyomi: ['nin ニン'],
    kunyomi: ['shino(bu) しの(ぶ)', 'shino(baseru) しの(ばせる)'],
    displayMeanings: ['endure', 'bear'],
    fullDisplayMeanings: ['endure', 'bear', 'put up with', 'conceal', 'secrete', 'spy', 'sneak'],
    meanings: ['endure', 'bear', 'put up with', 'conceal', 'secrete', 'spy', 'sneak']
  },
  {
    id: 730,
    kanjiChar: '磐',
    onyomi: ['ban バン', 'han ハン'],
    kunyomi: ['iwa いわ'],
    displayMeanings: ['rock', 'crag'],
    fullDisplayMeanings: ['rock', 'crag', 'cliff', 'wall (in a mine)'],
    meanings: ['rock', 'crag', 'cliff', 'wall (in a mine)']
  },
  {
    id: 731,
    kanjiChar: '怠',
    onyomi: ['tai タイ'],
    kunyomi: ['okota(ru) おこた(る)', 'nama(keru) なま(ける)'],
    displayMeanings: ['neglect', 'laziness'],
    fullDisplayMeanings: ['neglect', 'laziness'],
    meanings: ['neglect', 'laziness']
  },
  {
    id: 732,
    kanjiChar: '如',
    onyomi: ['jo ジョ', 'nyo ニョ'],
    kunyomi: ['goto(shi) ごと(し)'],
    displayMeanings: ['likeness', 'like'],
    fullDisplayMeanings: ['likeness', 'like', 'such as', 'as if', 'better', 'best', 'equal'],
    meanings: ['likeness', 'like', 'such as', 'as if', 'better', 'best', 'equal']
  },
  {
    id: 733,
    kanjiChar: '寮',
    onyomi: ['ryou リョウ'],
    kunyomi: [],
    displayMeanings: ['dormitory', 'hostel'],
    fullDisplayMeanings: ['dormitory', 'hostel', 'villa', 'tea pavillion'],
    meanings: ['dormitory', 'hostel', 'villa', 'tea pavillion']
  },
  {
    id: 734,
    kanjiChar: '祐',
    onyomi: ['yuu ユウ', 'u ウ'],
    kunyomi: ['tasu(keru) たす(ける)'],
    displayMeanings: ['help'],
    fullDisplayMeanings: ['help'],
    meanings: ['help']
  },
  {
    id: 735,
    kanjiChar: '鵬',
    onyomi: ['hou ホウ'],
    kunyomi: ['ootori おおとり'],
    displayMeanings: ['phoenix'],
    fullDisplayMeanings: ['phoenix'],
    meanings: ['phoenix']
  },
  {
    id: 736,
    kanjiChar: '鉛',
    onyomi: ['en エン'],
    kunyomi: ['namari なまり'],
    displayMeanings: ['lead'],
    fullDisplayMeanings: ['lead'],
    meanings: ['lead']
  },
  {
    id: 737,
    kanjiChar: '珠',
    onyomi: ['shu シュ'],
    kunyomi: ['tama たま'],
    displayMeanings: ['pearl', 'gem'],
    fullDisplayMeanings: ['pearl', 'gem', 'jewel'],
    meanings: ['pearl', 'gem', 'jewel']
  },
  {
    id: 738,
    kanjiChar: '凝',
    onyomi: ['gyou ギョウ'],
    kunyomi: ['ko(ru) こ(る)', 'kogo(rasu) こご(らす)'],
    displayMeanings: ['congeal', 'freeze'],
    fullDisplayMeanings: ['congeal', 'freeze', 'stiff', 'be absorbed in'],
    meanings: ['congeal', 'freeze', 'stiff', 'be absorbed in']
  },
  {
    id: 739,
    kanjiChar: '苗',
    onyomi: ['byou ビョウ', 'myou ミョウ'],
    kunyomi: ['nae なえ', 'nawa- なわ-'],
    displayMeanings: ['seedling', 'sapling'],
    fullDisplayMeanings: ['seedling', 'sapling', 'shoot'],
    meanings: ['seedling', 'sapling', 'shoot']
  },
  {
    id: 740,
    kanjiChar: '獣',
    onyomi: ['juu ジュウ'],
    kunyomi: ['kemono けもの', 'kedamono けだもの'],
    displayMeanings: ['animal', 'beast'],
    fullDisplayMeanings: ['animal', 'beast'],
    meanings: ['animal', 'beast']
  },
  {
    id: 741,
    kanjiChar: '哀',
    onyomi: ['ai アイ'],
    kunyomi: ['awa(re) あわ(れ)', 'kana(shii) かな(しい)'],
    displayMeanings: ['pathetic', 'grief'],
    fullDisplayMeanings: ['pathetic', 'grief', 'sorrow', 'pathos', 'pity', 'sympathize'],
    meanings: ['pathetic', 'grief', 'sorrow', 'pathos', 'pity', 'sympathize']
  },
  {
    id: 742,
    kanjiChar: '跳',
    onyomi: ['chou チョウ'],
    kunyomi: ['ha(neru) は(ねる)', 'to(bu) と(ぶ)', '-to(bi) -と(び)'],
    displayMeanings: ['hop', 'leap up'],
    fullDisplayMeanings: ['hop', 'leap up', 'spring', 'jerk', 'prance', 'buck', 'splash', 'sputter', 'snap'],
    meanings: ['hop', 'leap up', 'spring', 'jerk', 'prance', 'buck', 'splash', 'sputter', 'snap']
  },
  {
    id: 743,
    kanjiChar: '匠',
    onyomi: ['shou ショウ'],
    kunyomi: ['takumi たくみ'],
    displayMeanings: ['artisan', 'workman'],
    fullDisplayMeanings: ['artisan', 'workman', 'carpenter'],
    meanings: ['artisan', 'workman', 'carpenter']
  },
  {
    id: 744,
    kanjiChar: '垂',
    onyomi: ['sui スイ'],
    kunyomi: ['ta(reru) た(れる)', '-ta(re) -た(れ)', 'nannanto(su) なんなんと(す)'],
    displayMeanings: ['droop', 'suspend'],
    fullDisplayMeanings: ['droop', 'suspend', 'hang', 'slouch'],
    meanings: ['droop', 'suspend', 'hang', 'slouch']
  },
  {
    id: 745,
    kanjiChar: '蛇',
    onyomi: ['ja ジャ', 'da ダ', 'i イ', 'ya ヤ'],
    kunyomi: ['hebi へび'],
    displayMeanings: ['snake', 'serpent'],
    fullDisplayMeanings: ['snake', 'serpent', 'hard drinker'],
    meanings: ['snake', 'serpent', 'hard drinker']
  },
  {
    id: 746,
    kanjiChar: '澄',
    onyomi: ['chou チョウ'],
    kunyomi: ['su(mu) す(む)', 'su(masu) す(ます)', '-su(masu) -す(ます)'],
    displayMeanings: ['lucidity', 'be clear'],
    fullDisplayMeanings: ['lucidity', 'be clear', 'clear', 'clarify', 'settle', 'strain', 'look grave'],
    meanings: ['lucidity', 'be clear', 'clear', 'clarify', 'settle', 'strain', 'look grave']
  },
  {
    id: 747,
    kanjiChar: '縫',
    onyomi: ['hou ホウ'],
    kunyomi: ['nu(u) ぬ(う)'],
    displayMeanings: ['sew', 'stitch'],
    fullDisplayMeanings: ['sew', 'stitch', 'embroider'],
    meanings: ['sew', 'stitch', 'embroider']
  },
  {
    id: 748,
    kanjiChar: '僧',
    onyomi: ['sou ソウ'],
    kunyomi: [],
    displayMeanings: ['Buddhist priest', 'monk'],
    fullDisplayMeanings: ['Buddhist priest', 'monk'],
    meanings: ['Buddhist priest', 'monk']
  },
  {
    id: 749,
    kanjiChar: '眺',
    onyomi: ['chou チョウ'],
    kunyomi: ['naga(meru) なが(める)'],
    displayMeanings: ['stare', 'watch'],
    fullDisplayMeanings: ['stare', 'watch', 'look at', 'see', 'scrutinize'],
    meanings: ['stare', 'watch', 'look at', 'see', 'scrutinize']
  },
  {
    id: 750,
    kanjiChar: '唐',
    onyomi: ['tou トウ'],
    kunyomi: ['kara から'],
    displayMeanings: ['T\'ang', 'China'],
    fullDisplayMeanings: ['T\'ang', 'China', 'foreign'],
    meanings: ['T\'ang', 'China', 'foreign']
  },
  {
    id: 751,
    kanjiChar: '亘',
    onyomi: ['kou コウ', 'kan カン', 'sen セン'],
    kunyomi: ['wata(ru) わた(る)', 'moto(meru) もと(める)'],
    displayMeanings: ['span', 'range'],
    fullDisplayMeanings: ['span', 'range', 'extend over'],
    meanings: ['span', 'range', 'extend over']
  },
  {
    id: 752,
    kanjiChar: '呉',
    onyomi: ['go ゴ'],
    kunyomi: ['ku(reru) く(れる)'],
    displayMeanings: ['give', 'do something for'],
    fullDisplayMeanings: ['give', 'do something for', 'kingdom of Wu'],
    meanings: ['give', 'do something for', 'kingdom of Wu']
  },
  {
    id: 753,
    kanjiChar: '凡',
    onyomi: ['bon ボン', 'han ハン'],
    kunyomi: ['oyo(so) およ(そ)', 'ouyo(so) おうよ(そ)', 'sube(te) すべ(て)'],
    displayMeanings: ['commonplace', 'ordinary'],
    fullDisplayMeanings: ['commonplace', 'ordinary', 'mediocre'],
    meanings: ['commonplace', 'ordinary', 'mediocre']
  },
  {
    id: 754,
    kanjiChar: '憩',
    onyomi: ['kei ケイ'],
    kunyomi: ['iko(i) いこ(い)', 'iko(u) いこ(う)'],
    displayMeanings: ['recess', 'rest'],
    fullDisplayMeanings: ['recess', 'rest', 'relax', 'repose'],
    meanings: ['recess', 'rest', 'relax', 'repose']
  },
  {
    id: 755,
    kanjiChar: '鄭',
    onyomi: ['tei テイ', 'jou ジョウ'],
    kunyomi: [],
    displayMeanings: ['an ancient Chinese province'],
    fullDisplayMeanings: ['an ancient Chinese province'],
    meanings: ['an ancient Chinese province']
  },
  {
    id: 756,
    kanjiChar: '芦',
    onyomi: ['ro ロ'],
    kunyomi: ['ashi あし', 'yoshi よし'],
    displayMeanings: ['reed', 'bullrush'],
    fullDisplayMeanings: ['reed', 'bullrush'],
    meanings: ['reed', 'bullrush']
  },
  {
    id: 757,
    kanjiChar: '龍',
    onyomi: ['ryuu リュウ', 'ryou リョウ', 'rou ロウ'],
    kunyomi: ['tatsu たつ'],
    displayMeanings: ['dragon', 'imperial'],
    fullDisplayMeanings: ['dragon', 'imperial'],
    meanings: ['dragon', 'imperial']
  },
  {
    id: 758,
    kanjiChar: '媛',
    onyomi: ['en エン'],
    kunyomi: ['hime ひめ'],
    displayMeanings: ['beautiful woman', 'princess'],
    fullDisplayMeanings: ['beautiful woman', 'princess'],
    meanings: ['beautiful woman', 'princess']
  },
  {
    id: 759,
    kanjiChar: '溝',
    onyomi: ['kou コウ'],
    kunyomi: ['mizo みぞ'],
    displayMeanings: ['gutter', 'ditch'],
    fullDisplayMeanings: ['gutter', 'ditch', 'sewer', 'drain', '10**32'],
    meanings: ['gutter', 'ditch', 'sewer', 'drain', '10**32']
  },
  {
    id: 760,
    kanjiChar: '恭',
    onyomi: ['kyou キョウ'],
    kunyomi: ['uyauya(shii) うやうや(しい)'],
    displayMeanings: ['respect', 'reverent'],
    fullDisplayMeanings: ['respect', 'reverent'],
    meanings: ['respect', 'reverent']
  },
  {
    id: 761,
    kanjiChar: '刈',
    onyomi: ['gai ガイ', 'kai カイ'],
    kunyomi: ['ka(ru) か(る)'],
    displayMeanings: ['reap', 'cut'],
    fullDisplayMeanings: ['reap', 'cut', 'clip', 'trim', 'prune'],
    meanings: ['reap', 'cut', 'clip', 'trim', 'prune']
  },
  {
    id: 762,
    kanjiChar: '睡',
    onyomi: ['sui スイ'],
    kunyomi: ['nemu(ru) ねむ(る)', 'nemu(i) ねむ(い)'],
    displayMeanings: ['drowsy', 'sleep'],
    fullDisplayMeanings: ['drowsy', 'sleep', 'die'],
    meanings: ['drowsy', 'sleep', 'die']
  },
  {
    id: 763,
    kanjiChar: '錯',
    onyomi: ['saku サク', 'shaku シャク'],
    kunyomi: [],
    displayMeanings: ['confused', 'mix'],
    fullDisplayMeanings: ['confused', 'mix', 'be in disorder'],
    meanings: ['confused', 'mix', 'be in disorder']
  },
  {
    id: 764,
    kanjiChar: '伯',
    onyomi: ['haku ハク'],
    kunyomi: [],
    displayMeanings: ['chief', 'count'],
    fullDisplayMeanings: ['chief', 'count', 'earl', 'uncle', 'Brazil'],
    meanings: ['chief', 'count', 'earl', 'uncle', 'Brazil']
  },
  {
    id: 765,
    kanjiChar: '笹',
    onyomi: ['sasa ささ'],
    kunyomi: [],
    displayMeanings: ['bamboo grass'],
    fullDisplayMeanings: ['bamboo grass', '(kokuji)'],
    meanings: ['bamboo grass', '(kokuji)']
  },
  {
    id: 766,
    kanjiChar: '穀',
    onyomi: ['koku コク'],
    kunyomi: [],
    displayMeanings: ['cereals', 'grain'],
    fullDisplayMeanings: ['cereals', 'grain'],
    meanings: ['cereals', 'grain']
  },
  {
    id: 767,
    kanjiChar: '柿',
    onyomi: ['shi シ'],
    kunyomi: ['kaki かき'],
    displayMeanings: ['persimmon'],
    fullDisplayMeanings: ['persimmon'],
    meanings: ['persimmon']
  },
  {
    id: 768,
    kanjiChar: '陵',
    onyomi: ['ryou リョウ'],
    kunyomi: ['misasagi みささぎ'],
    displayMeanings: ['mausoleum', 'imperial tomb'],
    fullDisplayMeanings: ['mausoleum', 'imperial tomb', 'mound', 'hill'],
    meanings: ['mausoleum', 'imperial tomb', 'mound', 'hill']
  },
  {
    id: 769,
    kanjiChar: '霧',
    onyomi: ['mu ム', 'bou ボウ', 'bu ブ'],
    kunyomi: ['kiri きり'],
    displayMeanings: ['fog', 'mist'],
    fullDisplayMeanings: ['fog', 'mist'],
    meanings: ['fog', 'mist']
  },
  {
    id: 770,
    kanjiChar: '魂',
    onyomi: ['kon コン'],
    kunyomi: ['tamashii たましい', 'tama たま'],
    displayMeanings: ['soul', 'spirit'],
    fullDisplayMeanings: ['soul', 'spirit'],
    meanings: ['soul', 'spirit']
  },
  {
    id: 771,
    kanjiChar: '弊',
    onyomi: ['hei ヘイ'],
    kunyomi: [],
    displayMeanings: ['abuse', 'evil'],
    fullDisplayMeanings: ['abuse', 'evil', 'vice', 'breakage'],
    meanings: ['abuse', 'evil', 'vice', 'breakage']
  },
  {
    id: 772,
    kanjiChar: '釧',
    onyomi: ['sen セン'],
    kunyomi: ['kushiro くしろ', 'udewa うでわ'],
    displayMeanings: ['bracelet'],
    fullDisplayMeanings: ['bracelet'],
    meanings: ['bracelet']
  },
  {
    id: 773,
    kanjiChar: '妃',
    onyomi: ['hi ヒ'],
    kunyomi: ['kisaki きさき'],
    displayMeanings: ['queen', 'princess'],
    fullDisplayMeanings: ['queen', 'princess'],
    meanings: ['queen', 'princess']
  },
  {
    id: 774,
    kanjiChar: '舶',
    onyomi: ['haku ハク'],
    kunyomi: [],
    displayMeanings: ['liner', 'ship'],
    fullDisplayMeanings: ['liner', 'ship'],
    meanings: ['liner', 'ship']
  },
  {
    id: 775,
    kanjiChar: '餓',
    onyomi: ['ga ガ'],
    kunyomi: ['u(eru) う(える)'],
    displayMeanings: ['starve', 'hungry'],
    fullDisplayMeanings: ['starve', 'hungry', 'thirst'],
    meanings: ['starve', 'hungry', 'thirst']
  },
  {
    id: 776,
    kanjiChar: '腎',
    onyomi: ['jin ジン'],
    kunyomi: [],
    displayMeanings: ['kidney'],
    fullDisplayMeanings: ['kidney'],
    meanings: ['kidney']
  },
  {
    id: 777,
    kanjiChar: '窮',
    onyomi: ['kyuu キュウ', 'kyou キョウ'],
    kunyomi: ['kiwa(meru) きわ(める)'],
    displayMeanings: ['hard up', 'destitute'],
    fullDisplayMeanings: ['hard up', 'destitute', 'suffer', 'perplexed', 'cornered'],
    meanings: ['hard up', 'destitute', 'suffer', 'perplexed', 'cornered']
  },
  {
    id: 778,
    kanjiChar: '掌',
    onyomi: ['shou ショウ'],
    kunyomi: ['tenohira てのひら', 'tanagokoro たなごころ'],
    displayMeanings: ['manipulate', 'rule'],
    fullDisplayMeanings: ['manipulate', 'rule', 'administer', 'conduct', 'palm of hand'],
    meanings: ['manipulate', 'rule', 'administer', 'conduct', 'palm of hand']
  },
  {
    id: 779,
    kanjiChar: '麗',
    onyomi: ['rei レイ'],
    kunyomi: ['uruwa(shii) うるわ(しい)', 'ura(raka) うら(らか)'],
    displayMeanings: ['lovely', 'beautiful'],
    fullDisplayMeanings: ['lovely', 'beautiful', 'graceful', 'resplendent'],
    meanings: ['lovely', 'beautiful', 'graceful', 'resplendent']
  },
  {
    id: 780,
    kanjiChar: '綾',
    onyomi: ['rin リン'],
    kunyomi: ['aya あや'],
    displayMeanings: ['design', 'figured cloth'],
    fullDisplayMeanings: ['design', 'figured cloth', 'twill'],
    meanings: ['design', 'figured cloth', 'twill']
  },
  {
    id: 781,
    kanjiChar: '臭',
    onyomi: ['shuu シュウ'],
    kunyomi: ['kusa(i) くさ(い)', '-kusa(i) -くさ(い)', 'nio(u) にお(う)'],
    displayMeanings: ['stinking', 'ill-smelling'],
    fullDisplayMeanings: ['stinking', 'ill-smelling', 'suspicious looking', 'odor', 'savor', 'fragrance', 'be fragrant'],
    meanings: ['stinking', 'ill-smelling', 'suspicious looking', 'odor', 'savor', 'fragrance', 'be fragrant']
  },
  {
    id: 782,
    kanjiChar: '釜',
    onyomi: ['fu フ'],
    kunyomi: ['kama かま'],
    displayMeanings: ['kettle', 'cauldron'],
    fullDisplayMeanings: ['kettle', 'cauldron', 'iron pot'],
    meanings: ['kettle', 'cauldron', 'iron pot']
  },
  {
    id: 783,
    kanjiChar: '悦',
    onyomi: ['etsu エツ'],
    kunyomi: ['yoroko(bu) よろこ(ぶ)'],
    displayMeanings: ['ecstasy', 'joy'],
    fullDisplayMeanings: ['ecstasy', 'joy', 'rapture'],
    meanings: ['ecstasy', 'joy', 'rapture']
  },
  {
    id: 784,
    kanjiChar: '刃',
    onyomi: ['jin ジン', 'nin ニン'],
    kunyomi: ['ha は', 'yaiba やいば', 'ki(ru) き(る)'],
    displayMeanings: ['blade', 'sword'],
    fullDisplayMeanings: ['blade', 'sword', 'edge'],
    meanings: ['blade', 'sword', 'edge']
  },
  {
    id: 785,
    kanjiChar: '縛',
    onyomi: ['baku バク'],
    kunyomi: ['shiba(ru) しば(る)'],
    displayMeanings: ['truss', 'arrest'],
    fullDisplayMeanings: ['truss', 'arrest', 'bind', 'tie', 'restrain'],
    meanings: ['truss', 'arrest', 'bind', 'tie', 'restrain']
  },
  {
    id: 786,
    kanjiChar: '暦',
    onyomi: ['reki レキ', 'ryaku リャク'],
    kunyomi: ['koyomi こよみ'],
    displayMeanings: ['calendar', 'almanac'],
    fullDisplayMeanings: ['calendar', 'almanac'],
    meanings: ['calendar', 'almanac']
  },
  {
    id: 787,
    kanjiChar: '宜',
    onyomi: ['gi ギ'],
    kunyomi: ['yoro(shii) よろ(しい)'],
    displayMeanings: ['best regards', 'good'],
    fullDisplayMeanings: ['best regards', 'good'],
    meanings: ['best regards', 'good']
  },
  {
    id: 788,
    kanjiChar: '盲',
    onyomi: ['mou モウ'],
    kunyomi: ['mekura めくら'],
    displayMeanings: ['blind', 'blind man'],
    fullDisplayMeanings: ['blind', 'blind man', 'ignoramus'],
    meanings: ['blind', 'blind man', 'ignoramus']
  },
  {
    id: 789,
    kanjiChar: '粋',
    onyomi: ['sui スイ'],
    kunyomi: ['iki いき'],
    displayMeanings: ['chic', 'style'],
    fullDisplayMeanings: ['chic', 'style', 'purity', 'essence', 'pith', 'cream', 'elite', 'choice'],
    meanings: ['chic', 'style', 'purity', 'essence', 'pith', 'cream', 'elite', 'choice']
  },
  {
    id: 790,
    kanjiChar: '辱',
    onyomi: ['joku ジョク'],
    kunyomi: ['hazukashi(meru) はずかし(める)'],
    displayMeanings: ['embarrass', 'humiliate'],
    fullDisplayMeanings: ['embarrass', 'humiliate', 'shame'],
    meanings: ['embarrass', 'humiliate', 'shame']
  },
  {
    id: 791,
    kanjiChar: '毅',
    onyomi: ['ki キ', 'gi ギ'],
    kunyomi: ['tsuyo(i) つよ(い)'],
    displayMeanings: ['strong'],
    fullDisplayMeanings: ['strong'],
    meanings: ['strong']
  },
  {
    id: 792,
    kanjiChar: '轄',
    onyomi: ['katsu カツ'],
    kunyomi: ['kusabi くさび'],
    displayMeanings: ['control', 'wedge'],
    fullDisplayMeanings: ['control', 'wedge'],
    meanings: ['control', 'wedge']
  },
  {
    id: 793,
    kanjiChar: '猿',
    onyomi: ['en エン'],
    kunyomi: ['saru さる'],
    displayMeanings: ['monkey'],
    fullDisplayMeanings: ['monkey'],
    meanings: ['monkey']
  },
  {
    id: 794,
    kanjiChar: '弦',
    onyomi: ['gen ゲン'],
    kunyomi: ['tsuru つる'],
    displayMeanings: ['bowstring', 'chord'],
    fullDisplayMeanings: ['bowstring', 'chord', 'hypotenuse'],
    meanings: ['bowstring', 'chord', 'hypotenuse']
  },
  {
    id: 795,
    kanjiChar: '嶌',
    onyomi: ['tou トウ'],
    kunyomi: ['shima しま'],
    displayMeanings: ['island'],
    fullDisplayMeanings: ['island'],
    meanings: ['island']
  },
  {
    id: 796,
    kanjiChar: '稔',
    onyomi: ['nen ネン', 'jin ジン', 'nin ニン'],
    kunyomi: ['mino(ru) みの(る)', 'minori みのり'],
    displayMeanings: ['harvest', 'ripen'],
    fullDisplayMeanings: ['harvest', 'ripen'],
    meanings: ['harvest', 'ripen']
  },
  {
    id: 797,
    kanjiChar: '窒',
    onyomi: ['chitsu チツ'],
    kunyomi: [],
    displayMeanings: ['plug up', 'obstruct'],
    fullDisplayMeanings: ['plug up', 'obstruct'],
    meanings: ['plug up', 'obstruct']
  },
  {
    id: 798,
    kanjiChar: '炊',
    onyomi: ['sui スイ'],
    kunyomi: ['ta(ku) た(く)', '-da(ki) -だ(き)'],
    displayMeanings: ['cook', 'boil'],
    fullDisplayMeanings: ['cook', 'boil'],
    meanings: ['cook', 'boil']
  },
  {
    id: 799,
    kanjiChar: '洪',
    onyomi: ['kou コウ'],
    kunyomi: [],
    displayMeanings: ['deluge', 'flood'],
    fullDisplayMeanings: ['deluge', 'flood', 'vast'],
    meanings: ['deluge', 'flood', 'vast']
  },
  {
    id: 800,
    kanjiChar: '摂',
    onyomi: ['setsu セツ', 'shou ショウ'],
    kunyomi: ['osa(meru) おさ(める)', 'kane(ru) かね(る)', 'to(ru) と(る)'],
    displayMeanings: ['vicarious', 'surrogate'],
    fullDisplayMeanings: ['vicarious', 'surrogate', 'act in addition to', 'take in', 'absorb'],
    meanings: ['vicarious', 'surrogate', 'act in addition to', 'take in', 'absorb']
  },
  {
  id: 801,
  kanjiChar: '飽',
  onyomi: ['hou ホウ'],
  kunyomi: ['a(kiru) あ(きる)', 'a(kasu) あ(かす)', 'a(ku) あ(く)'],
  displayMeanings: ['sated', 'tired of'],
  fullDisplayMeanings: ['sated', 'tired of', 'bored', 'satiate'],
  meanings: ['sated', 'tired of', 'bored', 'satiate']
},
{
  id: 802,
  kanjiChar: '函',
  onyomi: ['kan カン'],
  kunyomi: ['hako はこ', 'i(reru) い(れる)'],
  displayMeanings: ['box (archaic)'],
  fullDisplayMeanings: ['box (archaic)'],
  meanings: ['box (archaic)']
},
{
  id: 803,
  kanjiChar: '冗',
  onyomi: ['jou ジョウ'],
  kunyomi: [],
  displayMeanings: ['superfluous', 'uselessness'],
  fullDisplayMeanings: ['superfluous', 'uselessness'],
  meanings: ['superfluous', 'uselessness']
},
{
  id: 804,
  kanjiChar: '桃',
  onyomi: ['tou トウ'],
  kunyomi: ['momo もも'],
  displayMeanings: ['peach'],
  fullDisplayMeanings: ['peach'],
  meanings: ['peach']
},
{
  id: 805,
  kanjiChar: '狩',
  onyomi: ['shu シュ'],
  kunyomi: ['ka(ru) か(る)', 'ka(ri) か(り)', '-ga(ri) -が(り)'],
  displayMeanings: ['hunt', 'raid'],
  fullDisplayMeanings: ['hunt', 'raid', 'gather'],
  meanings: ['hunt', 'raid', 'gather']
},
{
  id: 806,
  kanjiChar: '朱',
  onyomi: ['shu シュ'],
  kunyomi: ['ake あけ'],
  displayMeanings: ['vermilion', 'cinnabar'],
  fullDisplayMeanings: ['vermilion', 'cinnabar', 'scarlet', 'red', 'bloody'],
  meanings: ['vermilion', 'cinnabar', 'scarlet', 'red', 'bloody']
},
{
  id: 807,
  kanjiChar: '渦',
  onyomi: ['ka カ'],
  kunyomi: ['uzu うず'],
  displayMeanings: ['whirlpool', 'eddy'],
  fullDisplayMeanings: ['whirlpool', 'eddy', 'vortex'],
  meanings: ['whirlpool', 'eddy', 'vortex']
},
{
  id: 808,
  kanjiChar: '紳',
  onyomi: ['shin シン'],
  kunyomi: [],
  displayMeanings: ['sire', 'good belt'],
  fullDisplayMeanings: ['sire', 'good belt', 'gentleman'],
  meanings: ['sire', 'good belt', 'gentleman']
},
{
  id: 809,
  kanjiChar: '枢',
  onyomi: ['suu スウ', 'shu シュ'],
  kunyomi: ['toboso とぼそ', 'karakuri からくり'],
  displayMeanings: ['hinge', 'pivot'],
  fullDisplayMeanings: ['hinge', 'pivot', 'door', 'center of things'],
  meanings: ['hinge', 'pivot', 'door', 'center of things']
},
{
  id: 810,
  kanjiChar: '碑',
  onyomi: ['hi ヒ'],
  kunyomi: ['ishibumi いしぶみ'],
  displayMeanings: ['tombstone', 'monument'],
  fullDisplayMeanings: ['tombstone', 'monument'],
  meanings: ['tombstone', 'monument']
},
{
  id: 811,
  kanjiChar: '鍛',
  onyomi: ['tan タン'],
  kunyomi: ['kita(eru) きた(える)'],
  displayMeanings: ['forge', 'discipline'],
  fullDisplayMeanings: ['forge', 'discipline', 'train'],
  meanings: ['forge', 'discipline', 'train']
},
{
  id: 812,
  kanjiChar: '刀',
  onyomi: ['tou トウ'],
  kunyomi: ['katana かたな', 'sori そり'],
  displayMeanings: ['sword', 'saber'],
  fullDisplayMeanings: ['sword', 'saber', 'knife'],
  meanings: ['sword', 'saber', 'knife']
},
{
  id: 813,
  kanjiChar: '鼓',
  onyomi: ['ko コ'],
  kunyomi: ['tsudzumi つづみ'],
  displayMeanings: ['drum', 'beat'],
  fullDisplayMeanings: ['drum', 'beat', 'rouse', 'muster'],
  meanings: ['drum', 'beat', 'rouse', 'muster']
},
{
  id: 814,
  kanjiChar: '裸',
  onyomi: ['ra ラ'],
  kunyomi: ['hadaka はだか'],
  displayMeanings: ['naked', 'nude'],
  fullDisplayMeanings: ['naked', 'nude', 'uncovered', 'partially clothed'],
  meanings: ['naked', 'nude', 'uncovered', 'partially clothed']
},
{
  id: 815,
  kanjiChar: '鴨',
  onyomi: ['ou オウ'],
  kunyomi: ['kamo かも', 'ahiru あひる'],
  displayMeanings: ['wild duck', 'easy mark'],
  fullDisplayMeanings: ['wild duck', 'easy mark'],
  meanings: ['wild duck', 'easy mark']
},
{
  id: 816,
  kanjiChar: '猶',
  onyomi: ['yuu ユウ', 'yu ユ'],
  kunyomi: ['nao なお'],
  displayMeanings: ['furthermore', 'still'],
  fullDisplayMeanings: ['furthermore', 'still', 'yet'],
  meanings: ['furthermore', 'still', 'yet']
},
{
  id: 817,
  kanjiChar: '塊',
  onyomi: ['kai カイ', 'ke ケ'],
  kunyomi: ['katamari かたまり', 'tsuchikure つちくれ'],
  displayMeanings: ['clod', 'lump'],
  fullDisplayMeanings: ['clod', 'lump', 'chunk', 'clot', 'mass'],
  meanings: ['clod', 'lump', 'chunk', 'clot', 'mass']
},
{
  id: 818,
  kanjiChar: '旋',
  onyomi: ['sen セン'],
  kunyomi: ['mu(guru) め(ぐる)', 'ibari いばり'],
  displayMeanings: ['rotation', 'go around'],
  fullDisplayMeanings: ['rotation', 'go around'],
  meanings: ['rotation', 'go around']
},
{
  id: 819,
  kanjiChar: '弓',
  onyomi: ['kyuu キュウ'],
  kunyomi: ['yumi ゆみ'],
  displayMeanings: ['bow', 'bow (archery, violin)'],
  fullDisplayMeanings: ['bow', 'bow (archery, violin)'],
  meanings: ['bow', 'bow (archery, violin)']
},
{
  id: 820,
  kanjiChar: '幣',
  onyomi: ['hei ヘイ'],
  kunyomi: ['nusa ぬさ'],
  displayMeanings: ['cash', 'bad habit'],
  fullDisplayMeanings: ['cash', 'bad habit', 'humble prefix', 'gift'],
  meanings: ['cash', 'bad habit', 'humble prefix', 'gift']
},
{
  id: 821,
  kanjiChar: '膜',
  onyomi: ['maku マク'],
  kunyomi: [],
  displayMeanings: ['membrane'],
  fullDisplayMeanings: ['membrane'],
  meanings: ['membrane']
},
{
  id: 822,
  kanjiChar: '扇',
  onyomi: ['sen セン'],
  kunyomi: ['ougi おうぎ'],
  displayMeanings: ['fan', 'folding fan'],
  fullDisplayMeanings: ['fan', 'folding fan'],
  meanings: ['fan', 'folding fan']
},
{
  id: 823,
  kanjiChar: '脇',
  onyomi: ['kyou キョウ'],
  kunyomi: ['waki わき', 'wake わけ'],
  displayMeanings: ['armpit', 'the other way'],
  fullDisplayMeanings: ['armpit', 'the other way', 'another place', 'flank', 'supporting role'],
  meanings: ['armpit', 'the other way', 'another place', 'flank', 'supporting role']
},
{
  id: 824,
  kanjiChar: '腸',
  onyomi: ['chou チョウ'],
  kunyomi: ['harawata はらわた', 'wata わた'],
  displayMeanings: ['intestines', 'guts'],
  fullDisplayMeanings: ['intestines', 'guts', 'bowels', 'viscera'],
  meanings: ['intestines', 'guts', 'bowels', 'viscera']
},
{
  id: 825,
  kanjiChar: '槽',
  onyomi: ['sou ソウ'],
  kunyomi: ['fune ふね'],
  displayMeanings: ['vat', 'tub'],
  fullDisplayMeanings: ['vat', 'tub', 'tank'],
  meanings: ['vat', 'tub', 'tank']
},
{
  id: 826,
  kanjiChar: '鍋',
  onyomi: ['ka カ'],
  kunyomi: ['nabe なべ'],
  displayMeanings: ['pot', 'pan'],
  fullDisplayMeanings: ['pot', 'pan', 'kettle'],
  meanings: ['pot', 'pan', 'kettle']
},
{
  id: 827,
  kanjiChar: '慈',
  onyomi: ['ji ジ'],
  kunyomi: ['itsuku(shimu) いつく(しむ)'],
  displayMeanings: ['mercy'],
  fullDisplayMeanings: ['mercy'],
  meanings: ['mercy']
},
{
  id: 828,
  kanjiChar: '樋',
  onyomi: ['tou トウ'],
  kunyomi: ['hi ひ', 'toi とい'],
  displayMeanings: ['water pipe', 'gutter'],
  fullDisplayMeanings: ['water pipe', 'gutter', 'downspout', 'conduit'],
  meanings: ['water pipe', 'gutter', 'downspout', 'conduit']
},
{
  id: 829,
  kanjiChar: '楊',
  onyomi: ['you ヨウ'],
  kunyomi: ['yanagi やなぎ'],
  displayMeanings: ['willow'],
  fullDisplayMeanings: ['willow'],
  meanings: ['willow']
},
{
  id: 830,
  kanjiChar: '伐',
  onyomi: ['batsu バツ', 'hatsu ハツ', 'ka カ', 'bochi ボチ'],
  kunyomi: ['ki(ru) き(る)', 'somu(ku) そむ(く)', 'u(tsu) う(つ)'],
  displayMeanings: ['fell', 'strike'],
  fullDisplayMeanings: ['fell', 'strike', 'attack', 'punish'],
  meanings: ['fell', 'strike', 'attack', 'punish']
},
{
  id: 831,
  kanjiChar: '駿',
  onyomi: ['shun シュン', 'sun スン'],
  kunyomi: ['sugu(reru) すぐ(れる)'],
  displayMeanings: ['a good horse', 'speed'],
  fullDisplayMeanings: ['a good horse', 'speed', 'a fast person'],
  meanings: ['a good horse', 'speed', 'a fast person']
},
{
  id: 832,
  kanjiChar: '漬',
  onyomi: ['shi シ'],
  kunyomi: ['tsu(keru) つ(ける)', '-dzuke -づけ'],
  displayMeanings: ['pickling', 'soak'],
  fullDisplayMeanings: ['pickling', 'soak', 'moisten', 'steep'],
  meanings: ['pickling', 'soak', 'moisten', 'steep']
},
{
  id: 833,
  kanjiChar: '糾',
  onyomi: ['kyuu キュウ'],
  kunyomi: ['tada(su) ただ(す)'],
  displayMeanings: ['twist', 'ask'],
  fullDisplayMeanings: ['twist', 'ask', 'investigate', 'verify'],
  meanings: ['twist', 'ask', 'investigate', 'verify']
},
{
  id: 834,
  kanjiChar: '亮',
  onyomi: ['ryou リョウ'],
  kunyomi: ['akiraka あきらか'],
  displayMeanings: ['clear', 'help'],
  fullDisplayMeanings: ['clear', 'help'],
  meanings: ['clear', 'help']
},
{
  id: 835,
  kanjiChar: '墳',
  onyomi: ['fun フン'],
  kunyomi: [],
  displayMeanings: ['tomb', 'mound'],
  fullDisplayMeanings: ['tomb', 'mound'],
  meanings: ['tomb', 'mound']
},
{
  id: 836,
  kanjiChar: '坪',
  onyomi: ['hei ヘイ'],
  kunyomi: ['tsubo つぼ'],
  displayMeanings: ['two-mat area', 'approx. thirty-six sq ft'],
  fullDisplayMeanings: ['two-mat area', 'approx. thirty-six sq ft'],
  meanings: ['two-mat area', 'approx. thirty-six sq ft']
},
{
  id: 837,
  kanjiChar: '紺',
  onyomi: ['kon コン'],
  kunyomi: [],
  displayMeanings: ['dark blue', 'navy'],
  fullDisplayMeanings: ['dark blue', 'navy'],
  meanings: ['dark blue', 'navy']
},
{
  id: 838,
  kanjiChar: '慌',
  onyomi: ['kou コウ'],
  kunyomi: ['awa(teru) あわ(てる)', 'awa(tadashii) あわ(ただしい)'],
  displayMeanings: ['disconcerted', 'be confused'],
  fullDisplayMeanings: ['disconcerted', 'be confused', "lose one's head"],
  meanings: ['disconcerted', 'be confused', "lose one's head"]
},
{
  id: 839,
  kanjiChar: '娯',
  onyomi: ['go ゴ'],
  kunyomi: [],
  displayMeanings: ['recreation', 'pleasure'],
  fullDisplayMeanings: ['recreation', 'pleasure'],
  meanings: ['recreation', 'pleasure']
},
{
  id: 840,
  kanjiChar: '吾',
  onyomi: ['go ゴ'],
  kunyomi: ['ware われ', 'waga- わが-', 'a- あ-'],
  displayMeanings: ['I', 'my'],
  fullDisplayMeanings: ['I', 'my', 'our', "one's own"],
  meanings: ['I', 'my', 'our', "one's own"]
},
{
  id: 841,
  kanjiChar: '椿',
  onyomi: ['chin チン', 'chun チュン'],
  kunyomi: ['tsubaki つばき'],
  displayMeanings: ['camellia'],
  fullDisplayMeanings: ['camellia'],
  meanings: ['camellia']
},
{
  id: 842,
  kanjiChar: '舌',
  onyomi: ['zetsu ゼツ'],
  kunyomi: ['shita した'],
  displayMeanings: ['tongue', 'reed'],
  fullDisplayMeanings: ['tongue', 'reed', 'clapper'],
  meanings: ['tongue', 'reed', 'clapper']
},
{
  id: 843,
  kanjiChar: '羅',
  onyomi: ['ra ラ'],
  kunyomi: ['usumono うすもの'],
  displayMeanings: ['gauze', 'thin silk'],
  fullDisplayMeanings: ['gauze', 'thin silk', 'Rome', 'arrange', 'spread out'],
  meanings: ['gauze', 'thin silk', 'Rome', 'arrange', 'spread out']
},
{
  id: 844,
  kanjiChar: '峡',
  onyomi: ['kyou キョウ', 'kou コウ'],
  kunyomi: ['hazama はざま'],
  displayMeanings: ['gorge', 'ravine'],
  fullDisplayMeanings: ['gorge', 'ravine'],
  meanings: ['gorge', 'ravine']
},
{
  id: 845,
  kanjiChar: '俸',
  onyomi: ['hou ホウ'],
  kunyomi: [],
  displayMeanings: ['stipend', 'salary'],
  fullDisplayMeanings: ['stipend', 'salary'],
  meanings: ['stipend', 'salary']
},
{
  id: 846,
  kanjiChar: '厘',
  onyomi: ['rin リン'],
  kunyomi: [],
  displayMeanings: ['rin', '1/10 sen'],
  fullDisplayMeanings: ['rin', '1/10 sen', '1/10 bu'],
  meanings: ['rin', '1/10 sen', '1/10 bu']
},
{
  id: 847,
  kanjiChar: '峰',
  onyomi: ['hou ホウ'],
  kunyomi: ['mine みね', 'ne ね'],
  displayMeanings: ['summit', 'peak'],
  fullDisplayMeanings: ['summit', 'peak'],
  meanings: ['summit', 'peak']
},
{
  id: 848,
  kanjiChar: '圭',
  onyomi: ['kei ケイ', 'ke ケ'],
  kunyomi: [],
  displayMeanings: ['square jewel', 'corner'],
  fullDisplayMeanings: ['square jewel', 'corner', 'angle', 'edge'],
  meanings: ['square jewel', 'corner', 'angle', 'edge']
},
{
  id: 849,
  kanjiChar: '醸',
  onyomi: ['jou ジョウ'],
  kunyomi: ['kamo(su) かも(す)'],
  displayMeanings: ['brew', 'cause'],
  fullDisplayMeanings: ['brew', 'cause'],
  meanings: ['brew', 'cause']
},
{
  id: 850,
  kanjiChar: '蓮',
  onyomi: ['ren レン'],
  kunyomi: ['hasu はす', 'hachisu はちす'],
  displayMeanings: ['lotus'],
  fullDisplayMeanings: ['lotus'],
  meanings: ['lotus']
},
{
  id: 851,
  kanjiChar: '弔',
  onyomi: ['chou チョウ'],
  kunyomi: ['tomura(u) とむら(う)', 'tobura(u) とぶら(う)'],
  displayMeanings: ['condolences', 'mourning'],
  fullDisplayMeanings: ['condolences', 'mourning', 'funeral'],
  meanings: ['condolences', 'mourning', 'funeral']
},
{
  id: 852,
  kanjiChar: '乙',
  onyomi: ['otsu オツ', 'itsu イツ'],
  kunyomi: ['oto- おと-', 'kinoto きのと'],
  displayMeanings: ['the latter', 'duplicate'],
  fullDisplayMeanings: ['the latter', 'duplicate', 'strange', 'witty', 'fishhook radical (no. 5)'],
  meanings: ['the latter', 'duplicate', 'strange', 'witty', 'fishhook radical (no. 5)']
},
{
  id: 853,
  kanjiChar: '倶',
  onyomi: ['gu グ', 'ku ク'],
  kunyomi: ['tomo(ni) とも(に)'],
  displayMeanings: ['both', 'together'],
  fullDisplayMeanings: ['both', 'together', 'alike'],
  meanings: ['both', 'together', 'alike']
},
{
  id: 854,
  kanjiChar: '汁',
  onyomi: ['juu ジュウ'],
  kunyomi: ['shiru しる', '-shiru -しる', 'tsuyu つゆ'],
  displayMeanings: ['soup', 'juice'],
  fullDisplayMeanings: ['soup', 'juice', 'broth', 'sap', 'gravy', 'pus'],
  meanings: ['soup', 'juice', 'broth', 'sap', 'gravy', 'pus']
},
{
  id: 855,
  kanjiChar: '尼',
  onyomi: ['ni ニ'],
  kunyomi: ['ama あま'],
  displayMeanings: ['nun'],
  fullDisplayMeanings: ['nun'],
  meanings: ['nun']
},
{
  id: 856,
  kanjiChar: '遍',
  onyomi: ['hen ヘン'],
  kunyomi: ['amane(ku) あまね(く)'],
  displayMeanings: ['everywhere', 'times'],
  fullDisplayMeanings: ['everywhere', 'times', 'widely', 'generally'],
  meanings: ['everywhere', 'times', 'widely', 'generally']
},
{
  id: 857,
  kanjiChar: '堺',
  onyomi: ['kai カイ'],
  kunyomi: ['sakai さかい'],
  displayMeanings: ['world'],
  fullDisplayMeanings: ['world'],
  meanings: ['world']
},
{
  id: 858,
  kanjiChar: '衡',
  onyomi: ['kou コウ'],
  kunyomi: [],
  displayMeanings: ['equilibrium', 'measuring rod'],
  fullDisplayMeanings: ['equilibrium', 'measuring rod', 'scale'],
  meanings: ['equilibrium', 'measuring rod', 'scale']
},
{
  id: 859,
  kanjiChar: '呆',
  onyomi: ['hou ホウ'],
  kunyomi: ['bo(keru) ぼ(ける)', 'aki(reru) あき(れる)', 'oroka おろか'],
  displayMeanings: ['be amazed', 'disgusted'],
  fullDisplayMeanings: ['be amazed', 'disgusted', 'shocked'],
  meanings: ['be amazed', 'disgusted', 'shocked']
},
{
  id: 860,
  kanjiChar: '薫',
  onyomi: ['kun クン'],
  kunyomi: ['kao(ru) かお(る)'],
  displayMeanings: ['send forth fragrance', 'fragrant'],
  fullDisplayMeanings: ['send forth fragrance', 'fragrant', 'be scented', 'smoke (tobacco)'],
  meanings: ['send forth fragrance', 'fragrant', 'be scented', 'smoke (tobacco)']
},
{
  id: 861,
  kanjiChar: '瓦',
  onyomi: ['ga ガ'],
  kunyomi: ['kawara かわら', 'guramu ぐらむ'],
  displayMeanings: ['tile', 'gram'],
  fullDisplayMeanings: ['tile', 'gram'],
  meanings: ['tile', 'gram']
},
{
  id: 862,
  kanjiChar: '猟',
  onyomi: ['ryou リョウ'],
  kunyomi: ['kari かり', 'ka(ru) か(る)'],
  displayMeanings: ['game-hunting', 'shooting'],
  fullDisplayMeanings: ['game-hunting', 'shooting', 'game', 'bag'],
  meanings: ['game-hunting', 'shooting', 'game', 'bag']
},
{
  id: 863,
  kanjiChar: '羊',
  onyomi: ['you ヨウ'],
  kunyomi: ['hitsuji ひつじ'],
  displayMeanings: ['sheep'],
  fullDisplayMeanings: ['sheep'],
  meanings: ['sheep']
},
{
  id: 864,
  kanjiChar: '窪',
  onyomi: ['wa ワ', 'a ア'],
  kunyomi: ['kubo(mu) くぼ(む)'],
  displayMeanings: ['depression', 'cave in'],
  fullDisplayMeanings: ['depression', 'cave in', 'sink', 'become hollow'],
  meanings: ['depression', 'cave in', 'sink', 'become hollow']
},
{
  id: 865,
  kanjiChar: '款',
  onyomi: ['kan カン'],
  kunyomi: [],
  displayMeanings: ['goodwill', 'article'],
  fullDisplayMeanings: ['goodwill', 'article', 'section', 'friendship', 'collusion'],
  meanings: ['goodwill', 'article', 'section', 'friendship', 'collusion']
},
{
  id: 866,
  kanjiChar: '閲',
  onyomi: ['etsu エツ'],
  kunyomi: ['kemi(suru) けみ(する)'],
  displayMeanings: ['review', 'inspection'],
  fullDisplayMeanings: ['review', 'inspection', 'revision'],
  meanings: ['review', 'inspection', 'revision']
},
{
  id: 867,
  kanjiChar: '雀',
  onyomi: ['jaku ジャク', 'jan ジャン', 'saku サク', 'shaku シャク'],
  kunyomi: ['suzume すずめ'],
  displayMeanings: ['sparrow'],
  fullDisplayMeanings: ['sparrow'],
  meanings: ['sparrow']
},
{
  id: 868,
  kanjiChar: '偵',
  onyomi: ['tei テイ'],
  kunyomi: [],
  displayMeanings: ['spy'],
  fullDisplayMeanings: ['spy'],
  meanings: ['spy']
},
{
  id: 869,
  kanjiChar: '喝',
  onyomi: ['katsu カツ'],
  kunyomi: [],
  displayMeanings: ['hoarse', 'scold'],
  fullDisplayMeanings: ['hoarse', 'scold'],
  meanings: ['hoarse', 'scold']
},
{
  id: 870,
  kanjiChar: '敢',
  onyomi: ['kan カン'],
  kunyomi: ['a(ete) あ(えて)'],
  displayMeanings: ['daring', 'brave'],
  fullDisplayMeanings: ['daring', 'brave', 'bold', 'sad', 'tragic', 'pitiful'],
  meanings: ['daring', 'brave', 'bold', 'sad', 'tragic', 'pitiful']
},
{
  id: 871,
  kanjiChar: '畠',
  onyomi: ['hatake はたけ', 'hata はた'],
  kunyomi: [],
  displayMeanings: ['field', 'farm'],
  fullDisplayMeanings: ['field', 'farm', 'garden', '(kokuji)'],
  meanings: ['field', 'farm', 'garden', '(kokuji)']
},
{
  id: 872,
  kanjiChar: '胎',
  onyomi: ['tai タイ'],
  kunyomi: [],
  displayMeanings: ['womb', 'uterus'],
  fullDisplayMeanings: ['womb', 'uterus'],
  meanings: ['womb', 'uterus']
},
{
  id: 873,
  kanjiChar: '酵',
  onyomi: ['kou コウ'],
  kunyomi: [],
  displayMeanings: ['fermentation'],
  fullDisplayMeanings: ['fermentation'],
  meanings: ['fermentation']
},
{
  id: 874,
  kanjiChar: '憤',
  onyomi: ['fun フン'],
  kunyomi: ['ikidoo(ru) いきどお(る)'],
  displayMeanings: ['aroused', 'resent'],
  fullDisplayMeanings: ['aroused', 'resent', 'be indignant', 'anger'],
  meanings: ['aroused', 'resent', 'be indignant', 'anger']
},
{
  id: 875,
  kanjiChar: '豚',
  onyomi: ['ton トン'],
  kunyomi: ['buta ぶた'],
  displayMeanings: ['pork', 'pig'],
  fullDisplayMeanings: ['pork', 'pig'],
  meanings: ['pork', 'pig']
},
{
  id: 876,
  kanjiChar: '遮',
  onyomi: ['sha シャ'],
  kunyomi: ['saegi(ru) さえぎ(る)'],
  displayMeanings: ['intercept', 'interrupt'],
  fullDisplayMeanings: ['intercept', 'interrupt', 'obstruct'],
  meanings: ['intercept', 'interrupt', 'obstruct']
},
{
  id: 877,
  kanjiChar: '扉',
  onyomi: ['hi ヒ'],
  kunyomi: ['tobira とびら'],
  displayMeanings: ['front door', 'title page'],
  fullDisplayMeanings: ['front door', 'title page', 'front page'],
  meanings: ['front door', 'title page', 'front page']
},
{
  id: 878,
  kanjiChar: '硫',
  onyomi: ['ryuu リュウ'],
  kunyomi: [],
  displayMeanings: ['sulphur'],
  fullDisplayMeanings: ['sulphur'],
  meanings: ['sulphur']
},
{
  id: 879,
  kanjiChar: '赦',
  onyomi: ['sha シャ'],
  kunyomi: ['yuru(su) ゆる(す)'],
  displayMeanings: ['pardon', 'forgiveness'],
  fullDisplayMeanings: ['pardon', 'forgiveness'],
  meanings: ['pardon', 'forgiveness']
},
{
  id: 880,
  kanjiChar: '挫',
  onyomi: ['za ザ', 'sa サ'],
  kunyomi: ['kuji(ku) くじ(く)'],
  displayMeanings: ['crush', 'break'],
  fullDisplayMeanings: ['crush', 'break', 'sprain', 'discourage'],
  meanings: ['crush', 'break', 'sprain', 'discourage']
},
{
  id: 881,
  kanjiChar: '窃',
  onyomi: ['setsu セツ'],
  kunyomi: ['nusu(mu) ぬす(む)', 'hiso(ka) ひそ(か)'],
  displayMeanings: ['stealth', 'steal'],
  fullDisplayMeanings: ['stealth', 'steal', 'secret', 'private', 'hushed'],
  meanings: ['stealth', 'steal', 'secret', 'private', 'hushed']
},
{
  id: 882,
  kanjiChar: '泡',
  onyomi: ['hou ホウ'],
  kunyomi: ['awa あわ'],
  displayMeanings: ['bubbles', 'foam'],
  fullDisplayMeanings: ['bubbles', 'foam', 'suds', 'froth'],
  meanings: ['bubbles', 'foam', 'suds', 'froth']
},
{
  id: 883,
  kanjiChar: '瑞',
  onyomi: ['zui ズイ', 'sui スイ'],
  kunyomi: ['mizu- みず-', 'shirushi しるし'],
  displayMeanings: ['congratulations'],
  fullDisplayMeanings: ['congratulations'],
  meanings: ['congratulations']
},
{
  id: 884,
  kanjiChar: '又',
  onyomi: ['yuu ユウ'],
  kunyomi: ['mata また', 'mata- また-', 'mata(no-) また(の-)'],
  displayMeanings: ['or again', 'furthermore'],
  fullDisplayMeanings: ['or again', 'furthermore', 'on the other hand'],
  meanings: ['or again', 'furthermore', 'on the other hand']
},
{
  id: 885,
  kanjiChar: '慨',
  onyomi: ['gai ガイ'],
  kunyomi: ['nage(ku) なげ(く)'],
  displayMeanings: ['rue', 'be sad'],
  fullDisplayMeanings: ['rue', 'be sad', 'sigh', 'lament'],
  meanings: ['rue', 'be sad', 'sigh', 'lament']
},
{
  id: 886,
  kanjiChar: '紡',
  onyomi: ['bou ボウ'],
  kunyomi: ['tsumu(gu) つむ(ぐ)'],
  displayMeanings: ['spinning'],
  fullDisplayMeanings: ['spinning'],
  meanings: ['spinning']
},
{
  id: 887,
  kanjiChar: '恨',
  onyomi: ['kon コン'],
  kunyomi: ['ura(mu) うら(む)', 'ura(meshii) うら(めしい)'],
  displayMeanings: ['regret', 'bear a grudge'],
  fullDisplayMeanings: ['regret', 'bear a grudge', 'resentment', 'malice', 'hatred'],
  meanings: ['regret', 'bear a grudge', 'resentment', 'malice', 'hatred']
},
{
  id: 888,
  kanjiChar: '肪',
  onyomi: ['bou ボウ'],
  kunyomi: [],
  displayMeanings: ['obese', 'fat'],
  fullDisplayMeanings: ['obese', 'fat'],
  meanings: ['obese', 'fat']
},
{
  id: 889,
  kanjiChar: '扶',
  onyomi: ['fu フ'],
  kunyomi: ['tasu(keru) たす(ける)'],
  displayMeanings: ['aid', 'help'],
  fullDisplayMeanings: ['aid', 'help', 'assist'],
  meanings: ['aid', 'help', 'assist']
},
{
  id: 890,
  kanjiChar: '戯',
  onyomi: ['gi ギ', 'ge ゲ'],
  kunyomi: ['tawamu(reru) たわむ(れる)', 'za(reru) ざ(れる)', 'ja(reru) じゃ(れる)'],
  displayMeanings: ['frolic', 'play'],
  fullDisplayMeanings: ['frolic', 'play', 'sport'],
  meanings: ['frolic', 'play', 'sport']
},
{
  id: 891,
  kanjiChar: '伍',
  onyomi: ['go ゴ'],
  kunyomi: ['itsutsu いつつ'],
  displayMeanings: ['five', 'five-man squad'],
  fullDisplayMeanings: ['five', 'five-man squad', 'file', 'line'],
  meanings: ['five', 'five-man squad', 'file', 'line']
},
{
  id: 892,
  kanjiChar: '忌',
  onyomi: ['ki キ'],
  kunyomi: ['i(mu) い(む)', 'i(mi) い(み)', 'i(mawashii) い(まわしい)'],
  displayMeanings: ['mourning', 'abhor'],
  fullDisplayMeanings: ['mourning', 'abhor', 'detestable', 'death anniversary'],
  meanings: ['mourning', 'abhor', 'detestable', 'death anniversary']
},
{
  id: 893,
  kanjiChar: '濁',
  onyomi: ['daku ダク', 'joku ジョク'],
  kunyomi: ['nigo(ru) にご(る)'],
  displayMeanings: ['voiced', 'uncleanness'],
  fullDisplayMeanings: ['voiced', 'uncleanness', 'wrong', 'nigori', 'impurity'],
  meanings: ['voiced', 'uncleanness', 'wrong', 'nigori', 'impurity']
},
{
  id: 894,
  kanjiChar: '奔',
  onyomi: ['hon ホン'],
  kunyomi: ['hashi(ru) はし(る)'],
  displayMeanings: ['run', 'bustle'],
  fullDisplayMeanings: ['run', 'bustle'],
  meanings: ['run', 'bustle']
},
{
  id: 895,
  kanjiChar: '斗',
  onyomi: ['to ト', 'tou トウ'],
  kunyomi: [],
  displayMeanings: ['Big Dipper', 'ten sho (vol)'],
  fullDisplayMeanings: ['Big Dipper', 'ten sho (vol)', 'sake dipper', 'dots and cross radical (no. 68)'],
  meanings: ['Big Dipper', 'ten sho (vol)', 'sake dipper', 'dots and cross radical (no. 68)']
},
{
  id: 896,
  kanjiChar: '蘭',
  onyomi: ['ran ラン', 'ra ラ'],
  kunyomi: [],
  displayMeanings: ['orchid', 'Holland'],
  fullDisplayMeanings: ['orchid', 'Holland'],
  meanings: ['orchid', 'Holland']
},
{
  id: 897,
  kanjiChar: '蒲',
  onyomi: ['ho ホ', 'bo ボ', 'fu フ', 'bu ブ'],
  kunyomi: ['gama がま', 'kaba かば', 'kama かま'],
  displayMeanings: ['bullrush', 'flag'],
  fullDisplayMeanings: ['bullrush', 'flag', 'cattail'],
  meanings: ['bullrush', 'flag', 'cattail']
},
{
  id: 898,
  kanjiChar: '迅',
  onyomi: ['jin ジン'],
  kunyomi: [],
  displayMeanings: ['swift', 'fast'],
  fullDisplayMeanings: ['swift', 'fast'],
  meanings: ['swift', 'fast']
},
{
  id: 899,
  kanjiChar: '肖',
  onyomi: ['shou ショウ'],
  kunyomi: ['ayaka(ru) あやか(る)'],
  displayMeanings: ['resemblance'],
  fullDisplayMeanings: ['resemblance'],
  meanings: ['resemblance']
},
{
  id: 900,
  kanjiChar: '鉢',
  onyomi: ['hachi ハチ', 'hatsu ハツ'],
  kunyomi: [],
  displayMeanings: ['bowl', 'rice tub'],
  fullDisplayMeanings: ['bowl', 'rice tub', 'pot', 'crown'],
  meanings: ['bowl', 'rice tub', 'pot', 'crown']
},
  {
  id: 901,
  kanjiChar: '朽',
  onyomi: ['kyuu キュウ'],
  kunyomi: ['ku(chiru) く(ちる)'],
  displayMeanings: ['decay', 'rot'],
  fullDisplayMeanings: ['decay', 'rot', 'remain in seclusion'],
  meanings: ['decay', 'rot', 'remain in seclusion']
},
{
  id: 902,
  kanjiChar: '殻',
  onyomi: ['kaku カク', 'koku コク', 'bai バイ'],
  kunyomi: ['kara から', 'gara がら'],
  displayMeanings: ['husk', 'nut shell'],
  fullDisplayMeanings: ['husk', 'nut shell'],
  meanings: ['husk', 'nut shell']
},
{
  id: 903,
  kanjiChar: '享',
  onyomi: ['kyou キョウ', 'kou コウ'],
  kunyomi: ['u(keru) う(ける)'],
  displayMeanings: ['enjoy', 'receive'],
  fullDisplayMeanings: ['enjoy', 'receive', 'undergo', 'answer (phone)', 'take', 'get', 'catch'],
  meanings: ['enjoy', 'receive', 'undergo', 'answer (phone)', 'take', 'get', 'catch']
},
{
  id: 904,
  kanjiChar: '秦',
  onyomi: ['shin シン'],
  kunyomi: ['hata はた'],
  displayMeanings: ['Manchu dynasty'],
  fullDisplayMeanings: ['Manchu dynasty', 'name given to naturalized foreigners'],
  meanings: ['Manchu dynasty', 'name given to naturalized foreigners']
},
{
  id: 905,
  kanjiChar: '茅',
  onyomi: ['bou ボウ', 'myou ミョウ'],
  kunyomi: ['kaya かや', 'chigaya ちがや'],
  displayMeanings: ['miscanthus reed'],
  fullDisplayMeanings: ['miscanthus reed'],
  meanings: ['miscanthus reed']
},
{
  id: 906,
  kanjiChar: '藩',
  onyomi: ['han ハン'],
  kunyomi: [],
  displayMeanings: ['clan', 'enclosure'],
  fullDisplayMeanings: ['clan', 'enclosure'],
  meanings: ['clan', 'enclosure']
},
{
  id: 907,
  kanjiChar: '沙',
  onyomi: ['sa サ', 'sha シャ'],
  kunyomi: ['suna すな', 'yonageru よなげる'],
  displayMeanings: ['sand'],
  fullDisplayMeanings: ['sand'],
  meanings: ['sand']
},
{
  id: 908,
  kanjiChar: '輔',
  onyomi: ['ho ホ', 'fu フ'],
  kunyomi: ['tasu(keru) たす(ける)'],
  displayMeanings: ['help'],
  fullDisplayMeanings: ['help'],
  meanings: ['help']
},
{
  id: 909,
  kanjiChar: '媒',
  onyomi: ['bai バイ'],
  kunyomi: ['nakoudo なこうど'],
  displayMeanings: ['mediator', 'go-between'],
  fullDisplayMeanings: ['mediator', 'go-between'],
  meanings: ['mediator', 'go-between']
},
{
  id: 910,
  kanjiChar: '鶏',
  onyomi: ['kei ケイ'],
  kunyomi: ['niwatori にわとり', 'tori とり'],
  displayMeanings: ['chicken'],
  fullDisplayMeanings: ['chicken'],
  meanings: ['chicken']
},
{
  id: 911,
  kanjiChar: '禅',
  onyomi: ['zen ゼン', 'sen セン'],
  kunyomi: ['shizuka しずか', 'yuzu(ru) ゆず(る)'],
  displayMeanings: ['Zen', 'silent meditation'],
  fullDisplayMeanings: ['Zen', 'silent meditation'],
  meanings: ['Zen', 'silent meditation']
},
{
  id: 912,
  kanjiChar: '嘱',
  onyomi: ['shoku ショク'],
  kunyomi: ['shoku(suru) しょく(する)', 'tano(mu) たの(む)'],
  displayMeanings: ['entrust', 'request'],
  fullDisplayMeanings: ['entrust', 'request', 'send a message'],
  meanings: ['entrust', 'request', 'send a message']
},
{
  id: 913,
  kanjiChar: '胴',
  onyomi: ['dou ドウ'],
  kunyomi: [],
  displayMeanings: ['trunk', 'torso'],
  fullDisplayMeanings: ['trunk', 'torso', 'hull (ship)', 'hub of wheel'],
  meanings: ['trunk', 'torso', 'hull (ship)', 'hub of wheel']
},
{
  id: 914,
  kanjiChar: '粕',
  onyomi: ['haku ハク'],
  kunyomi: ['kasu かす'],
  displayMeanings: ['scrap', 'waste'],
  fullDisplayMeanings: ['scrap', 'waste'],
  meanings: ['scrap', 'waste']
},
{
  id: 915,
  kanjiChar: '冨',
  onyomi: ['fu フ', 'fuu フウ'],
  kunyomi: ['to(mu) と(む)', 'tomi とみ'],
  displayMeanings: ['enrich', 'wealthy'],
  fullDisplayMeanings: ['enrich', 'wealthy', 'abundant'],
  meanings: ['enrich', 'wealthy', 'abundant']
},
{
  id: 916,
  kanjiChar: '迭',
  onyomi: ['tetsu テツ'],
  kunyomi: [],
  displayMeanings: ['transfer', 'alternation'],
  fullDisplayMeanings: ['transfer', 'alternation'],
  meanings: ['transfer', 'alternation']
},
{
  id: 917,
  kanjiChar: '挿',
  onyomi: ['sou ソウ'],
  kunyomi: ['sa(su) さ(す)', 'hasa(mu) はさ(む)'],
  displayMeanings: ['insert', 'put in'],
  fullDisplayMeanings: ['insert', 'put in', 'graft', 'wear (sword)'],
  meanings: ['insert', 'put in', 'graft', 'wear (sword)']
},
{
  id: 918,
  kanjiChar: '湘',
  onyomi: ['shou ショウ'],
  kunyomi: [],
  displayMeanings: ['name of Chinese river'],
  fullDisplayMeanings: ['name of Chinese river', 'the Sagami river'],
  meanings: ['name of Chinese river', 'the Sagami river']
},
{
  id: 919,
  kanjiChar: '嵐',
  onyomi: ['ran ラン'],
  kunyomi: ['arashi あらし'],
  displayMeanings: ['storm', 'tempest'],
  fullDisplayMeanings: ['storm', 'tempest'],
  meanings: ['storm', 'tempest']
},
{
  id: 920,
  kanjiChar: '椎',
  onyomi: ['tsui ツイ', 'sui スイ'],
  kunyomi: ['tsuchi つち', 'u(tsu) う(つ)'],
  displayMeanings: ['chinquapin', 'mallet'],
  fullDisplayMeanings: ['chinquapin', 'mallet', 'spine'],
  meanings: ['chinquapin', 'mallet', 'spine']
},
{
id: 921,
kanjiChar: '灘',
onyomi: ['tan タン', 'dan ダン'],
kunyomi: ['nada なだ', 'se せ'],
displayMeanings: ['open sea'],
fullDisplayMeanings: ['open sea'],
meanings: ['open sea']
},
{
id: 922,
kanjiChar: '堰',
onyomi: ['en エン'],
kunyomi: ['seki せき', 'se(ku) せ(く)'],
displayMeanings: ['dam', 'prevent'],
fullDisplayMeanings: ['dam', 'prevent', 'stop up'],
meanings: ['dam', 'prevent', 'stop up']
},
{
id: 923,
kanjiChar: '獅',
onyomi: ['shi シ'],
kunyomi: ['shishi しし'],
displayMeanings: ['lion'],
fullDisplayMeanings: ['lion'],
meanings: ['lion']
},
{
id: 924,
kanjiChar: '姜',
onyomi: ['kyou キョウ', 'ga ガ'],
kunyomi: ['kou こう'],
displayMeanings: ['Chinese surname', 'ginger'],
fullDisplayMeanings: ['Chinese surname', 'ginger'],
meanings: ['Chinese surname', 'ginger']
},
{
id: 925,
kanjiChar: '絹',
onyomi: ['ken ケン'],
kunyomi: ['kinu きぬ'],
displayMeanings: ['silk'],
fullDisplayMeanings: ['silk'],
meanings: ['silk']
},
{
id: 926,
kanjiChar: '陪',
onyomi: ['bai バイ'],
kunyomi: [],
displayMeanings: ['obeisance', 'follow'],
fullDisplayMeanings: ['obeisance', 'follow', 'accompany', 'attend on'],
meanings: ['obeisance', 'follow', 'accompany', 'attend on']
},
{
id: 927,
kanjiChar: '剖',
onyomi: ['bou ボウ'],
kunyomi: [],
displayMeanings: ['divide'],
fullDisplayMeanings: ['divide'],
meanings: ['divide']
},
{
id: 928,
kanjiChar: '譜',
onyomi: ['fu フ'],
kunyomi: [],
displayMeanings: ['musical score', 'music'],
fullDisplayMeanings: ['musical score', 'music', 'note', 'staff', 'table', 'genealogy'],
meanings: ['musical score', 'music', 'note', 'staff', 'table', 'genealogy']
},
{
id: 929,
kanjiChar: '郁',
onyomi: ['iku イク'],
kunyomi: [],
displayMeanings: ['cultural progress', 'perfume'],
fullDisplayMeanings: ['cultural progress', 'perfume'],
meanings: ['cultural progress', 'perfume']
},
{
id: 930,
kanjiChar: '悠',
onyomi: ['yuu ユウ'],
kunyomi: [],
displayMeanings: ['permanence', 'distant'],
fullDisplayMeanings: ['permanence', 'distant', 'long time', 'leisure'],
meanings: ['permanence', 'distant', 'long time', 'leisure']
},
{
id: 931,
kanjiChar: '淑',
onyomi: ['shuku シュク'],
kunyomi: ['shito(yaka) しと(やか)'],
displayMeanings: ['graceful', 'gentle'],
fullDisplayMeanings: ['graceful', 'gentle', 'pure'],
meanings: ['graceful', 'gentle', 'pure']
},
{
id: 932,
kanjiChar: '帆',
onyomi: ['han ハン'],
kunyomi: ['ho ほ'],
displayMeanings: ['sail'],
fullDisplayMeanings: ['sail'],
meanings: ['sail']
},
{
id: 933,
kanjiChar: '暁',
onyomi: ['gyou ギョウ', 'kyou キョウ'],
kunyomi: ['akatsuki あかつき', 'sato(ru) さと(る)'],
displayMeanings: ['daybreak', 'dawn'],
fullDisplayMeanings: ['daybreak', 'dawn', 'in the event'],
meanings: ['daybreak', 'dawn', 'in the event']
},
{
id: 934,
kanjiChar: '鷲',
onyomi: ['shuu シュウ', 'ju ジュ'],
kunyomi: ['washi わし'],
displayMeanings: ['eagle'],
fullDisplayMeanings: ['eagle'],
meanings: ['eagle']
},
{
id: 935,
kanjiChar: '傑',
onyomi: ['ketsu ケツ'],
kunyomi: ['sugu(reru) すぐ(れる)'],
displayMeanings: ['greatness', 'excellence'],
fullDisplayMeanings: ['greatness', 'excellence'],
meanings: ['greatness', 'excellence']
},
{
id: 936,
kanjiChar: '楠',
onyomi: ['nan ナン', 'dan ダン', 'zen ゼン', 'nen ネン'],
kunyomi: ['kusu くす', 'kusunoki くすのき'],
displayMeanings: ['camphor tree'],
fullDisplayMeanings: ['camphor tree'],
meanings: ['camphor tree']
},
{
id: 937,
kanjiChar: '笛',
onyomi: ['teki テキ'],
kunyomi: ['fue ふえ'],
displayMeanings: ['flute', 'clarinet'],
fullDisplayMeanings: ['flute', 'clarinet', 'pipe', 'whistle', 'bagpipe', 'piccolo'],
meanings: ['flute', 'clarinet', 'pipe', 'whistle', 'bagpipe', 'piccolo']
},
{
id: 938,
kanjiChar: '芥',
onyomi: ['kai カイ', 'ke ケ'],
kunyomi: ['karashi からし', 'gomi ごみ', 'akuta あくた'],
displayMeanings: ['mustard', 'rape'],
fullDisplayMeanings: ['mustard', 'rape', 'dust', 'trash', 'rubbish'],
meanings: ['mustard', 'rape', 'dust', 'trash', 'rubbish']
},
{
id: 939,
kanjiChar: '其',
onyomi: ['ki キ', 'gi ギ', 'go ゴ'],
kunyomi: ['sore それ', 'sono その'],
displayMeanings: ['that'],
fullDisplayMeanings: ['that'],
meanings: ['that']
},
{
id: 940,
kanjiChar: '玲',
onyomi: ['rei レイ'],
kunyomi: [],
displayMeanings: ['sound of jewels'],
fullDisplayMeanings: ['sound of jewels'],
meanings: ['sound of jewels']
},
{
  id: 941,
  kanjiChar: '奴',
  onyomi: ['do ド'],
  kunyomi: ['yatsu やつ', 'yakko やっこ'],
  displayMeanings: ['guy', 'slave'],
  fullDisplayMeanings: ['guy', 'slave', 'manservant', 'fellow'],
  meanings: ['guy', 'slave', 'manservant', 'fellow']
},
{
  id: 942,
  kanjiChar: '錠',
  onyomi: ['jou ジョウ'],
  kunyomi: [],
  displayMeanings: ['lock', 'fetters'],
  fullDisplayMeanings: ['lock', 'fetters', 'shackles'],
  meanings: ['lock', 'fetters', 'shackles']
},
{
  id: 943,
  kanjiChar: '拳',
  onyomi: ['ken ケン', 'gen ゲン'],
  kunyomi: ['kobushi こぶし'],
  displayMeanings: ['fist'],
  fullDisplayMeanings: ['fist'],
  meanings: ['fist']
},
{
  id: 944,
  kanjiChar: '翔',
  onyomi: ['shou ショウ'],
  kunyomi: ['kake(ru) かけ(る)', 'to(bu) と(ぶ)'],
  displayMeanings: ['soar', 'fly'],
  fullDisplayMeanings: ['soar', 'fly'],
  meanings: ['soar', 'fly']
},
{
  id: 945,
  kanjiChar: '遷',
  onyomi: ['sen セン'],
  kunyomi: ['utsu(ru) うつ(る)', 'miyakogae みやこがえ'],
  displayMeanings: ['transition', 'move'],
  fullDisplayMeanings: ['transition', 'move', 'change'],
  meanings: ['transition', 'move', 'change']
},
{
  id: 946,
  kanjiChar: '拙',
  onyomi: ['setsu セツ'],
  kunyomi: ['tsutana(i) つたな(い)'],
  displayMeanings: ['bungling', 'clumsy'],
  fullDisplayMeanings: ['bungling', 'clumsy', 'unskillful'],
  meanings: ['bungling', 'clumsy', 'unskillful']
},
{
  id: 947,
  kanjiChar: '侍',
  onyomi: ['ji ジ', 'shi シ'],
  kunyomi: ['samu(rai) さむらい', 'habe(ru) はべ(る)'],
  displayMeanings: ['waiter', 'samurai'],
  fullDisplayMeanings: ['waiter', 'samurai', 'wait upon', 'serve'],
  meanings: ['waiter', 'samurai', 'wait upon', 'serve']
},
{
  id: 948,
  kanjiChar: '尺',
  onyomi: ['shaku シャク', 'seki セキ'],
  kunyomi: ['sashi さし'],
  displayMeanings: ['shaku', 'Japanese foot'],
  fullDisplayMeanings: ['shaku', 'Japanese foot', 'measure', 'scale', 'rule'],
  meanings: ['shaku', 'Japanese foot', 'measure', 'scale', 'rule']
},
{
  id: 949,
  kanjiChar: '峠',
  onyomi: ['touge とうげ'],
  kunyomi: [],
  displayMeanings: ['mountain peak', 'mountain pass'],
  fullDisplayMeanings: ['mountain peak', 'mountain pass', 'climax', 'crest', '(kokuji)'],
  meanings: ['mountain peak', 'mountain pass', 'climax', 'crest', '(kokuji)']
},
{
  id: 950,
  kanjiChar: '篤',
  onyomi: ['toku トク'],
  kunyomi: ['atsu(i) あつ(い)'],
  displayMeanings: ['fervent', 'kind'],
  fullDisplayMeanings: ['fervent', 'kind', 'cordial', 'serious', 'deliberate'],
  meanings: ['fervent', 'kind', 'cordial', 'serious', 'deliberate']
},
{
  id: 951,
  kanjiChar: '肇',
  onyomi: ['chou チョウ', 'jou ジョウ', 'tou トウ'],
  kunyomi: ['haji(meru) はじ(める)', 'hajime はじめ'],
  displayMeanings: ['beginning'],
  fullDisplayMeanings: ['beginning'],
  meanings: ['beginning']
},
{
  id: 952,
  kanjiChar: '渇',
  onyomi: ['katsu カツ'],
  kunyomi: ['kawa(ku) かわ(く)'],
  displayMeanings: ['thirst', 'dry up'],
  fullDisplayMeanings: ['thirst', 'dry up', 'parch'],
  meanings: ['thirst', 'dry up', 'parch']
},
{
  id: 953,
  kanjiChar: '榎',
  onyomi: ['ka カ'],
  kunyomi: ['enoki えのき'],
  displayMeanings: ['lotus tree', 'nettle tree'],
  fullDisplayMeanings: ['lotus tree', 'nettle tree', 'hackberry'],
  meanings: ['lotus tree', 'nettle tree', 'hackberry']
},
{
  id: 954,
  kanjiChar: '劉',
  onyomi: ['ryuu リュウ', 'ru ル'],
  kunyomi: ['koro(su) ころ(す)'],
  displayMeanings: ['weapon of war', 'logging axe'],
  fullDisplayMeanings: ['weapon of war', 'logging axe', 'kill en masse', 'peeling (paint off a wall, etc)', 'sparse', 'faded'],
  meanings: ['weapon of war', 'logging axe', 'kill en masse', 'peeling (paint off a wall, etc)', 'sparse', 'faded']
},
{
  id: 955,
  kanjiChar: '幡',
  onyomi: ['man マン', 'han ハン', 'ban バン', 'hon ホン'],
  kunyomi: ['hata はた'],
  displayMeanings: ['flag'],
  fullDisplayMeanings: ['flag'],
  meanings: ['flag']
},
{
  id: 956,
  kanjiChar: '諏',
  onyomi: ['shu シュ', 'su ス'],
  kunyomi: ['sou そう', 'haka(ru) はか(る)'],
  displayMeanings: ['consult'],
  fullDisplayMeanings: ['consult'],
  meanings: ['consult']
},
{
  id: 957,
  kanjiChar: '叔',
  onyomi: ['shuku シュク'],
  kunyomi: [],
  displayMeanings: ['uncle', 'youth'],
  fullDisplayMeanings: ['uncle', 'youth'],
  meanings: ['uncle', 'youth']
},
{
  id: 958,
  kanjiChar: '雌',
  onyomi: ['shi シ'],
  kunyomi: ['me- め-', 'mesu めす', 'men めん'],
  displayMeanings: ['feminine', 'female'],
  fullDisplayMeanings: ['feminine', 'female'],
  meanings: ['feminine', 'female']
},
{
  id: 959,
  kanjiChar: '亨',
  onyomi: ['kou コウ', 'kyou キョウ', 'hou ホウ'],
  kunyomi: ['too(ru) とお(る)'],
  displayMeanings: ['pass through', 'go smoothly'],
  fullDisplayMeanings: ['pass through', 'go smoothly'],
  meanings: ['pass through', 'go smoothly']
},
{
  id: 960,
  kanjiChar: '堪',
  onyomi: ['kan カン', 'tan タン'],
  kunyomi: ['ta(eru) た(える)', 'tama(ru) たま(る)', 'kora(eru) こら(える)', 'kota(eru) こた(える)'],
  displayMeanings: ['withstand', 'endure'],
  fullDisplayMeanings: ['withstand', 'endure', 'support', 'resist'],
  meanings: ['withstand', 'endure', 'support', 'resist']
},
{
  id: 961,
  kanjiChar: '叙',
  onyomi: ['jo ジョ'],
  kunyomi: ['tsui(zu) つい(ず)', 'tsuide ついで'],
  displayMeanings: ['confer', 'relate'],
  fullDisplayMeanings: ['confer', 'relate', 'narrate', 'describe'],
  meanings: ['confer', 'relate', 'narrate', 'describe']
},
{
  id: 962,
  kanjiChar: '酢',
  onyomi: ['saku サク'],
  kunyomi: ['su す'],
  displayMeanings: ['vinegar', 'sour'],
  fullDisplayMeanings: ['vinegar', 'sour', 'acid', 'tart'],
  meanings: ['vinegar', 'sour', 'acid', 'tart']
},
{
  id: 963,
  kanjiChar: '吟',
  onyomi: ['gin ギン'],
  kunyomi: [],
  displayMeanings: ['versify', 'singing'],
  fullDisplayMeanings: ['versify', 'singing', 'recital'],
  meanings: ['versify', 'singing', 'recital']
},
{
  id: 964,
  kanjiChar: '逓',
  onyomi: ['tei テイ'],
  kunyomi: ['kawa(ru) かわ(る)', 'tagaini たがいに'],
  displayMeanings: ['relay', 'in turn'],
  fullDisplayMeanings: ['relay', 'in turn', 'sending'],
  meanings: ['relay', 'in turn', 'sending']
},
{
  id: 965,
  kanjiChar: '痕',
  onyomi: ['kon コン'],
  kunyomi: ['ato あと'],
  displayMeanings: ['mark', 'foot print'],
  fullDisplayMeanings: ['mark', 'foot print'],
  meanings: ['mark', 'foot print']
},
{
  id: 966,
  kanjiChar: '嶺',
  onyomi: ['rei レイ', 'ryou リョウ'],
  kunyomi: ['mine みね'],
  displayMeanings: ['peak', 'summit'],
  fullDisplayMeanings: ['peak', 'summit'],
  meanings: ['peak', 'summit']
},
{
  id: 967,
  kanjiChar: '袖',
  onyomi: ['shuu シュウ'],
  kunyomi: ['sode そで'],
  displayMeanings: ['sleeve', 'wing (building)'],
  fullDisplayMeanings: ['sleeve', 'wing (building)', 'extension', 'give cold shoulder'],
  meanings: ['sleeve', 'wing (building)', 'extension', 'give cold shoulder']
},
{
  id: 968,
  kanjiChar: '甚',
  onyomi: ['jin ジン'],
  kunyomi: ['hanaha(da) はなは(だ)', 'hanaha(dashii) はなは(だしい)'],
  displayMeanings: ['tremendously', 'very'],
  fullDisplayMeanings: ['tremendously', 'very', 'great', 'exceedingly'],
  meanings: ['tremendously', 'very', 'great', 'exceedingly']
},
{
  id: 969,
  kanjiChar: '喬',
  onyomi: ['kyou キョウ'],
  kunyomi: ['taka(i) たか(い)'],
  displayMeanings: ['high', 'boasting'],
  fullDisplayMeanings: ['high', 'boasting'],
  meanings: ['high', 'boasting']
},
{
  id: 970,
  kanjiChar: '崔',
  onyomi: ['gai ガイ', 'sai サイ', 'sui スイ'],
  kunyomi: ['gake がけ'],
  displayMeanings: ['cliff', 'bluff'],
  fullDisplayMeanings: ['cliff', 'bluff', 'precipice'],
  meanings: ['cliff', 'bluff', 'precipice']
},
{
  id: 971,
  kanjiChar: '妖',
  onyomi: ['you ヨウ'],
  kunyomi: ['aya(shii) あや(しい)', 'nama(meku) なま(めく)', 'wazawa(i) わざわ(い)'],
  displayMeanings: ['attractive', 'bewitching'],
  fullDisplayMeanings: ['attractive', 'bewitching', 'calamity'],
  meanings: ['attractive', 'bewitching', 'calamity']
},
{
  id: 972,
  kanjiChar: '琵',
  onyomi: ['bi ビ', 'hi ヒ'],
  kunyomi: [],
  displayMeanings: ['glissando on strings', 'lute'],
  fullDisplayMeanings: ['glissando on strings', 'lute'],
  meanings: ['glissando on strings', 'lute']
},
{
  id: 973,
  kanjiChar: '琶',
  onyomi: ['ha ハ', 'be ベ', 'wa ワ'],
  kunyomi: [],
  displayMeanings: ['lute'],
  fullDisplayMeanings: ['lute'],
  meanings: ['lute']
},
{
  id: 974,
  kanjiChar: '聯',
  onyomi: ['ren レン'],
  kunyomi: ['tsura(naru) つら(なる)', 'tsura(neru) つら(ねる)'],
  displayMeanings: ['party', 'gang'],
  fullDisplayMeanings: ['party', 'gang', 'clique'],
  meanings: ['party', 'gang', 'clique']
},
{
  id: 975,
  kanjiChar: '蘇',
  onyomi: ['so ソ', 'su ス'],
  kunyomi: ['yomigae(ru) よみがえ(る)'],
  displayMeanings: ['be resuscitated', 'revived'],
  fullDisplayMeanings: ['be resuscitated', 'revived', 'perilla', 'shiso'],
  meanings: ['be resuscitated', 'revived', 'perilla', 'shiso']
},
{
  id: 976,
  kanjiChar: '闇',
  onyomi: ['an アン', 'on オン'],
  kunyomi: ['yami やみ', 'kura(i) くら(い)'],
  displayMeanings: ['get dark', 'gloom'],
  fullDisplayMeanings: ['get dark', 'gloom', 'disorder'],
  meanings: ['get dark', 'gloom', 'disorder']
},
{
  id: 977,
  kanjiChar: '崇',
  onyomi: ['suu スウ'],
  kunyomi: ['aga(meru) あが(める)'],
  displayMeanings: ['adore', 'respect'],
  fullDisplayMeanings: ['adore', 'respect', 'revere', 'worship'],
  meanings: ['adore', 'respect', 'revere', 'worship']
},
{
  id: 978,
  kanjiChar: '漆',
  onyomi: ['shitsu シツ'],
  kunyomi: ['urushi うるし'],
  displayMeanings: ['lacquer', 'varnish'],
  fullDisplayMeanings: ['lacquer', 'varnish', 'seven'],
  meanings: ['lacquer', 'varnish', 'seven']
},
{
  id: 979,
  kanjiChar: '岬',
  onyomi: ['kou コウ'],
  kunyomi: ['misaki みさき'],
  displayMeanings: ['headland', 'cape'],
  fullDisplayMeanings: ['headland', 'cape', 'spit', 'promontory'],
  meanings: ['headland', 'cape', 'spit', 'promontory']
},
{
  id: 980,
  kanjiChar: '癖',
  onyomi: ['heki ヘキ'],
  kunyomi: ['kuse くせ', 'kuse(ni) くせ(に)'],
  displayMeanings: ['mannerism', 'habit'],
  fullDisplayMeanings: ['mannerism', 'habit', 'vice', 'trait', 'fault', 'kink'],
  meanings: ['mannerism', 'habit', 'vice', 'trait', 'fault', 'kink']
},
{
  id: 981,
  kanjiChar: '愉',
  onyomi: ['yu ユ'],
  kunyomi: ['tano(shii) たの(しい)', 'tano(shimu) たの(しむ)'],
  displayMeanings: ['pleasure', 'happy'],
  fullDisplayMeanings: ['pleasure', 'happy', 'rejoice'],
  meanings: ['pleasure', 'happy', 'rejoice']
},
{
  id: 982,
  kanjiChar: '寅',
  onyomi: ['in イン'],
  kunyomi: ['tora とら'],
  displayMeanings: ['sign of the tiger', '3-5AM'],
  fullDisplayMeanings: ['sign of the tiger', '3-5AM', 'third sign of Chinese zodiac'],
  meanings: ['sign of the tiger', '3-5AM', 'third sign of Chinese zodiac']
},
{
  id: 983,
  kanjiChar: '捉',
  onyomi: ['soku ソク', 'saku サク'],
  kunyomi: ['tora(eru) とら(える)'],
  displayMeanings: ['catch', 'capture'],
  fullDisplayMeanings: ['catch', 'capture'],
  meanings: ['catch', 'capture']
},
{
  id: 984,
  kanjiChar: '礁',
  onyomi: ['shou ショウ'],
  kunyomi: [],
  displayMeanings: ['reef', 'sunken rock'],
  fullDisplayMeanings: ['reef', 'sunken rock'],
  meanings: ['reef', 'sunken rock']
},
{
  id: 985,
  kanjiChar: '乃',
  onyomi: ['nai ナイ', 'dai ダイ', 'no ノ', 'ai アイ'],
  kunyomi: ['no の', 'sunawa(chi) すなわ(ち)', 'nanji なんじ'],
  displayMeanings: ['from', 'possessive particle'],
  fullDisplayMeanings: ['from', 'possessive particle', 'whereupon', 'accordingly'],
  meanings: ['from', 'possessive particle', 'whereupon', 'accordingly']
},
{
  id: 986,
  kanjiChar: '洲',
  onyomi: ['shuu シュウ', 'su ス'],
  kunyomi: ['shima しま'],
  displayMeanings: ['continent', 'sandbar'],
  fullDisplayMeanings: ['continent', 'sandbar', 'island', 'country'],
  meanings: ['continent', 'sandbar', 'island', 'country']
},
{
  id: 987,
  kanjiChar: '屯',
  onyomi: ['ton トン'],
  kunyomi: ['tamuro たむろ'],
  displayMeanings: ['barracks', 'police station'],
  fullDisplayMeanings: ['barracks', 'police station', 'camp', 'ton'],
  meanings: ['barracks', 'police station', 'camp', 'ton']
},
{
  id: 988,
  kanjiChar: '樽',
  onyomi: ['son ソン'],
  kunyomi: ['taru たる'],
  displayMeanings: ['barrel', 'cask'],
  fullDisplayMeanings: ['barrel', 'cask', 'keg'],
  meanings: ['barrel', 'cask', 'keg']
},
{
  id: 989,
  kanjiChar: '樺',
  onyomi: ['ka カ'],
  kunyomi: ['kaba かば', 'kanba かんば'],
  displayMeanings: ['birch', 'dark red'],
  fullDisplayMeanings: ['birch', 'dark red'],
  meanings: ['birch', 'dark red']
},
{
  id: 990,
  kanjiChar: '槙',
  onyomi: ['ten テン', 'shin シン'],
  kunyomi: ['maki まき', 'kozue こずえ'],
  displayMeanings: ['twig', 'ornamental evergreen'],
  fullDisplayMeanings: ['twig', 'ornamental evergreen'],
  meanings: ['twig', 'ornamental evergreen']
},
{
  id: 991,
  kanjiChar: '薩',
  onyomi: ['satsu サツ', 'sachi サチ'],
  kunyomi: [],
  displayMeanings: ['salvation', 'Buddha'],
  fullDisplayMeanings: ['salvation', 'Buddha'],
  meanings: ['salvation', 'Buddha']
},
{
  id: 992,
  kanjiChar: '姻',
  onyomi: ['in イン'],
  kunyomi: [],
  displayMeanings: ['matrimony', 'marry'],
  fullDisplayMeanings: ['matrimony', 'marry'],
  meanings: ['matrimony', 'marry']
},
{
  id: 993,
  kanjiChar: '巌',
  onyomi: ['gan ガン'],
  kunyomi: ['iwa いわ', 'iwao いわお', 'kewa(shii) けわ(しい)'],
  displayMeanings: ['rock', 'crag'],
  fullDisplayMeanings: ['rock', 'crag', 'boulder'],
  meanings: ['rock', 'crag', 'boulder']
},
{
  id: 994,
  kanjiChar: '淀',
  onyomi: ['ten テン', 'den デン'],
  kunyomi: ['yodo(mu) よど(む)'],
  displayMeanings: ['pool', 'eddy'],
  fullDisplayMeanings: ['pool', 'eddy'],
  meanings: ['pool', 'eddy']
},
{
  id: 995,
  kanjiChar: '麹',
  onyomi: ['kiku キク'],
  kunyomi: ['kouji こうじ'],
  displayMeanings: ['malt', 'yeast'],
  fullDisplayMeanings: ['malt', 'yeast'],
  meanings: ['malt', 'yeast']
},
{
  id: 996,
  kanjiChar: '賭',
  onyomi: ['to ト'],
  kunyomi: ['ka(keru) か(ける)', 'kake かけ'],
  displayMeanings: ['gamble', 'wager'],
  fullDisplayMeanings: ['gamble', 'wager', 'bet'],
  meanings: ['gamble', 'wager', 'bet']
},
{
  id: 997,
  kanjiChar: '擬',
  onyomi: ['gi ギ'],
  kunyomi: ['maga(i) まが(い)', 'modo(ki) もど(き)'],
  displayMeanings: ['mimic', 'aim (a gun) at'],
  fullDisplayMeanings: ['mimic', 'aim (a gun) at', 'nominate', 'imitate'],
  meanings: ['mimic', 'aim (a gun) at', 'nominate', 'imitate']
},
{
  id: 998,
  kanjiChar: '塀',
  onyomi: ['hei ヘイ', 'bei ベイ'],
  kunyomi: [],
  displayMeanings: ['fence', 'wall'],
  fullDisplayMeanings: ['fence', 'wall', '(kokuji)'],
  meanings: ['fence', 'wall', '(kokuji)']
},
{
  id: 999,
  kanjiChar: '唇',
  onyomi: ['shin シン'],
  kunyomi: ['kuchibiru くちびる'],
  displayMeanings: ['lips'],
  fullDisplayMeanings: ['lips'],
  meanings: ['lips']
},
{
  id: 1000,
  kanjiChar: '睦',
  onyomi: ['boku ボク', 'moku モク'],
  kunyomi: ['mutsu(majii) むつ(まじい)', 'mutsu(mu) むつ(む)', 'mutsu(bu) むつ(ぶ)'],
  displayMeanings: ['intimate', 'friendly'],
  fullDisplayMeanings: ['intimate', 'friendly', 'harmonious'],
  meanings: ['intimate', 'friendly', 'harmonious']
},
{
  id: 1001,
  kanjiChar: '閑',
  onyomi: ['kan カン'],
  kunyomi: [],
  displayMeanings: ['leisure'],
  fullDisplayMeanings: ['leisure'],
  meanings: ['leisure']
},
{
  id: 1002,
  kanjiChar: '胡',
  onyomi: ['u ウ', 'ko コ', 'go ゴ'],
  kunyomi: ['nanzo なんぞ'],
  displayMeanings: ['barbarian', 'foreign'],
  fullDisplayMeanings: ['barbarian', 'foreign'],
  meanings: ['barbarian', 'foreign']
},
{
  id: 1003,
  kanjiChar: '幽',
  onyomi: ['yuu ユウ'],
  kunyomi: ['fuka(i) ふか(い)', 'kasu(ka) かす(か)', 'kura(i) くら(い)', 'shiro(i) しろ(い)'],
  displayMeanings: ['seclude', 'confine to a room'],
  fullDisplayMeanings: ['seclude', 'confine to a room', 'deep', 'profound', 'secluded', 'faint', 'dark', 'tranquil', 'calm'],
  meanings: ['seclude', 'confine to a room', 'deep', 'profound', 'secluded', 'faint', 'dark', 'tranquil', 'calm']
},
{
  id: 1004,
  kanjiChar: '峻',
  onyomi: ['shun シュン'],
  kunyomi: ['kewa(shii) けわ(しい)', 'taka(i) たか(い)'],
  displayMeanings: ['high', 'steep'],
  fullDisplayMeanings: ['high', 'steep'],
  meanings: ['high', 'steep']
},
{
  id: 1005,
  kanjiChar: '曹',
  onyomi: ['sou ソウ', 'zou ゾウ'],
  kunyomi: [],
  displayMeanings: ['office', 'official'],
  fullDisplayMeanings: ['office', 'official', 'comrade', 'fellow'],
  meanings: ['office', 'official', 'comrade', 'fellow']
},
{
  id: 1006,
  kanjiChar: '哨',
  onyomi: ['shou ショウ'],
  kunyomi: ['mihari みはり'],
  displayMeanings: ['scout', 'sentinel'],
  fullDisplayMeanings: ['scout', 'sentinel'],
  meanings: ['scout', 'sentinel']
},
{
  id: 1007,
  kanjiChar: '詠',
  onyomi: ['ei エイ'],
  kunyomi: ['yo(mu) よ(む)', 'uta(u) うた(う)'],
  displayMeanings: ['recitation', 'poem'],
  fullDisplayMeanings: ['recitation', 'poem', 'song', 'composing'],
  meanings: ['recitation', 'poem', 'song', 'composing']
},
{
  id: 1008,
  kanjiChar: '炒',
  onyomi: ['sou ソウ', 'shou ショウ'],
  kunyomi: ['i(ru) い(る)', 'ita(meru) いた(める)'],
  displayMeanings: ['broil', 'parch'],
  fullDisplayMeanings: ['broil', 'parch', 'roast', 'fry'],
  meanings: ['broil', 'parch', 'roast', 'fry']
},
{
  id: 1009,
  kanjiChar: '屏',
  onyomi: ['hei ヘイ', 'byou ビョウ'],
  kunyomi: ['oo(u) おお(う)', 'shirizo(ku) しりぞ(く)', 'byou(bu) びょう(ぶ)'],
  displayMeanings: ['wall', 'fence'],
  fullDisplayMeanings: ['wall', 'fence'],
  meanings: ['wall', 'fence']
},
{
  id: 1010,
  kanjiChar: '卑',
  onyomi: ['hi ヒ'],
  kunyomi: ['iya(shii) いや(しい)'],
  displayMeanings: ['lowly', 'base'],
  fullDisplayMeanings: ['lowly', 'base', 'vile', 'vulgar', 'despise'],
  meanings: ['lowly', 'base', 'vile', 'vulgar', 'despise']
},
{
  id: 1011,
  kanjiChar: '侮',
  onyomi: ['bu ブ'],
  kunyomi: ['anado(ru) あなど(る)'],
  displayMeanings: ['scorn', 'despise'],
  fullDisplayMeanings: ['scorn', 'despise', 'make light of', 'contempt'],
  meanings: ['scorn', 'despise', 'make light of', 'contempt']
},
{
  id: 1012,
  kanjiChar: '鋳',
  onyomi: ['chuu チュウ', 'i イ', 'shu シュ', 'shuu シュウ'],
  kunyomi: ['i(ru) い(る)'],
  displayMeanings: ['casting', 'mint'],
  fullDisplayMeanings: ['casting', 'mint'],
  meanings: ['casting', 'mint']
},
{
  id: 1013,
  kanjiChar: '抹',
  onyomi: ['matsu マツ'],
  kunyomi: [],
  displayMeanings: ['rub', 'paint'],
  fullDisplayMeanings: ['rub', 'paint', 'erase'],
  meanings: ['rub', 'paint', 'erase']
},
{
  id: 1014,
  kanjiChar: '尉',
  onyomi: ['i イ', 'jou ジョウ'],
  kunyomi: [],
  displayMeanings: ['military officer', 'jailer'],
  fullDisplayMeanings: ['military officer', 'jailer', 'old man', 'rank'],
  meanings: ['military officer', 'jailer', 'old man', 'rank']
},
{
  id: 1015,
  kanjiChar: '槻',
  onyomi: ['ki キ'],
  kunyomi: ['tsuki つき'],
  displayMeanings: ['Zelkova tree'],
  fullDisplayMeanings: ['Zelkova tree'],
  meanings: ['Zelkova tree']
},
{
  id: 1016,
  kanjiChar: '隷',
  onyomi: ['rei レイ'],
  kunyomi: ['shitaga(u) したが(う)', 'shimobe しもべ'],
  displayMeanings: ['slave', 'servant'],
  fullDisplayMeanings: ['slave', 'servant', 'prisoner', 'criminal', 'follower'],
  meanings: ['slave', 'servant', 'prisoner', 'criminal', 'follower']
},
{
  id: 1017,
  kanjiChar: '禍',
  onyomi: ['ka カ'],
  kunyomi: ['kazawai わざわい'],
  displayMeanings: ['calamity', 'misfortune'],
  fullDisplayMeanings: ['calamity', 'misfortune', 'evil', 'curse'],
  meanings: ['calamity', 'misfortune', 'evil', 'curse']
},
{
  id: 1018,
  kanjiChar: '蝶',
  onyomi: ['chou チョウ'],
  kunyomi: [],
  displayMeanings: ['butterfly'],
  fullDisplayMeanings: ['butterfly'],
  meanings: ['butterfly']
},
{
  id: 1019,
  kanjiChar: '酪',
  onyomi: ['raku ラク'],
  kunyomi: [],
  displayMeanings: ['dairy products', 'whey'],
  fullDisplayMeanings: ['dairy products', 'whey', 'broth', 'fruit juice'],
  meanings: ['dairy products', 'whey', 'broth', 'fruit juice']
},
{
  id: 1020,
  kanjiChar: '茎',
  onyomi: ['kei ケイ', 'kyou キョウ'],
  kunyomi: ['kuki くき'],
  displayMeanings: ['stalk', 'stem'],
  fullDisplayMeanings: ['stalk', 'stem'],
  meanings: ['stalk', 'stem']
},
{
  id: 1021,
  kanjiChar: '汎',
  onyomi: ['han ハン', 'bu ブ', 'fuu フウ', 'hou ホウ', 'hon ホン'],
  kunyomi: ['tadayo(u) ただよ(う)', 'hiro(i) ひろ(い)'],
  displayMeanings: ['pan-'],
  fullDisplayMeanings: ['pan-'],
  meanings: ['pan-']
},
{
  id: 1022,
  kanjiChar: '頃',
  onyomi: ['kei ケイ', 'kyou キョウ'],
  kunyomi: ['koro ころ', 'goro ごろ', 'shibara(ku) しばら(く)'],
  displayMeanings: ['time', 'about'],
  fullDisplayMeanings: ['time', 'about', 'toward'],
  meanings: ['time', 'about', 'toward']
},
{
  id: 1023,
  kanjiChar: '帥',
  onyomi: ['sui スイ'],
  kunyomi: [],
  displayMeanings: ['commander', 'leading troops'],
  fullDisplayMeanings: ['commander', 'leading troops', 'governor'],
  meanings: ['commander', 'leading troops', 'governor']
},
{
  id: 1024,
  kanjiChar: '梁',
  onyomi: ['ryou リョウ'],
  kunyomi: ['hari はり', 'utsubari うつばり', 'uchibari うちばり', 'yana やな', 'hashi はし'],
  displayMeanings: ['weir', 'fish trap'],
  fullDisplayMeanings: ['weir', 'fish trap', 'beam', 'girder'],
  meanings: ['weir', 'fish trap', 'beam', 'girder']
},
{
  id: 1025,
  kanjiChar: '逝',
  onyomi: ['sei セイ'],
  kunyomi: ['yu(ku) ゆ(く)', 'i(ku) い(く)'],
  displayMeanings: ['departed', 'die'],
  fullDisplayMeanings: ['departed', 'die'],
  meanings: ['departed', 'die']
},
{
  id: 1026,
  kanjiChar: '汽',
  onyomi: ['ki キ'],
  kunyomi: [],
  displayMeanings: ['vapor', 'steam'],
  fullDisplayMeanings: ['vapor', 'steam'],
  meanings: ['vapor', 'steam']
},
{
  id: 1027,
  kanjiChar: '謎',
  onyomi: ['mei メイ', 'bei ベイ'],
  kunyomi: ['nazo なぞ'],
  displayMeanings: ['riddle', 'puzzle'],
  fullDisplayMeanings: ['riddle', 'puzzle', 'enigma', 'hint', 'tip'],
  meanings: ['riddle', 'puzzle', 'enigma', 'hint', 'tip']
},
{
  id: 1028,
  kanjiChar: '琢',
  onyomi: ['taku タク'],
  kunyomi: ['miga(ku) みが(く)'],
  displayMeanings: ['polish'],
  fullDisplayMeanings: ['polish'],
  meanings: ['polish']
},
{
  id: 1029,
  kanjiChar: '箕',
  onyomi: ['ki キ'],
  kunyomi: ['mi み'],
  displayMeanings: ['winnowing'],
  fullDisplayMeanings: ['winnowing'],
  meanings: ['winnowing']
},
{
  id: 1030,
  kanjiChar: '匿',
  onyomi: ['toku トク'],
  kunyomi: ['kakuma(u) かくま(う)'],
  displayMeanings: ['hide', 'shelter'],
  fullDisplayMeanings: ['hide', 'shelter', 'shield'],
  meanings: ['hide', 'shelter', 'shield']
},
{
  id: 1031,
  kanjiChar: '爪',
  onyomi: ['sou ソウ'],
  kunyomi: ['tsume つめ', 'tsuma- つま-'],
  displayMeanings: ['claw', 'nail'],
  fullDisplayMeanings: ['claw', 'nail', 'talon'],
  meanings: ['claw', 'nail', 'talon']
},
{
  id: 1032,
  kanjiChar: '芭',
  onyomi: ['ba バ', 'ha ハ'],
  kunyomi: [],
  displayMeanings: ['banana'],
  fullDisplayMeanings: ['banana'],
  meanings: ['banana']
},
{
  id: 1033,
  kanjiChar: '逗',
  onyomi: ['tou トウ', 'zu ズ'],
  kunyomi: ['todo(maru) とど(まる)'],
  displayMeanings: ['stop'],
  fullDisplayMeanings: ['stop'],
  meanings: ['stop']
},
{
  id: 1034,
  kanjiChar: '苫',
  onyomi: ['sen セン'],
  kunyomi: ['toma とま'],
  displayMeanings: ['rush matting'],
  fullDisplayMeanings: ['rush matting'],
  meanings: ['rush matting']
},
{
  id: 1035,
  kanjiChar: '鍵',
  onyomi: ['ken ケン'],
  kunyomi: ['kagi かぎ'],
  displayMeanings: ['key'],
  fullDisplayMeanings: ['key'],
  meanings: ['key']
},
{
  id: 1036,
  kanjiChar: '襟',
  onyomi: ['kin キン'],
  kunyomi: ['eri えり'],
  displayMeanings: ['collar', 'neck'],
  fullDisplayMeanings: ['collar', 'neck', 'lapel', "one's inner feelings"],
  meanings: ['collar', 'neck', 'lapel', "one's inner feelings"]
},
{
  id: 1037,
  kanjiChar: '蛍',
  onyomi: ['kei ケイ'],
  kunyomi: ['hotaru ほたる'],
  displayMeanings: ['lightning-bug', 'firefly'],
  fullDisplayMeanings: ['lightning-bug', 'firefly'],
  meanings: ['lightning-bug', 'firefly']
},
{
  id: 1038,
  kanjiChar: '楢',
  onyomi: ['shuu シュウ', 'yuu ユウ'],
  kunyomi: ['nara なら'],
  displayMeanings: ['oak'],
  fullDisplayMeanings: ['oak'],
  meanings: ['oak']
},
{
  id: 1039,
  kanjiChar: '蕉',
  onyomi: ['shou ショウ'],
  kunyomi: [],
  displayMeanings: ['banana', 'plantain'],
  fullDisplayMeanings: ['banana', 'plantain'],
  meanings: ['banana', 'plantain']
},
{
  id: 1040,
  kanjiChar: '兜',
  onyomi: ['tou トウ', 'to ト'],
  kunyomi: ['kabuto かぶと'],
  displayMeanings: ['helmet', 'head piece'],
  fullDisplayMeanings: ['helmet', 'head piece'],
  meanings: ['helmet', 'head piece']
},
{
  id: 1041,
  kanjiChar: '寡',
  onyomi: ['ka カ'],
  kunyomi: [],
  displayMeanings: ['widow', 'minority'],
  fullDisplayMeanings: ['widow', 'minority', 'few'],
  meanings: ['widow', 'minority', 'few']
},
{
  id: 1042,
  kanjiChar: '琉',
  onyomi: ['ryuu リュウ', 'ru ル'],
  kunyomi: [],
  displayMeanings: ['precious stone', 'gem'],
  fullDisplayMeanings: ['precious stone', 'gem', 'lapis lazuli'],
  meanings: ['precious stone', 'gem', 'lapis lazuli']
},
{
  id: 1043,
  kanjiChar: '痢',
  onyomi: ['ri リ'],
  kunyomi: [],
  displayMeanings: ['diarrhea'],
  fullDisplayMeanings: ['diarrhea'],
  meanings: ['diarrhea']
},
{
  id: 1044,
  kanjiChar: '庸',
  onyomi: ['you ヨウ'],
  kunyomi: [],
  displayMeanings: ['commonplace', 'ordinary'],
  fullDisplayMeanings: ['commonplace', 'ordinary', 'employment'],
  meanings: ['commonplace', 'ordinary', 'employment']
},
{
  id: 1045,
  kanjiChar: '朋',
  onyomi: ['hou ホウ'],
  kunyomi: ['tomo とも'],
  displayMeanings: ['companion', 'friend'],
  fullDisplayMeanings: ['companion', 'friend'],
  meanings: ['companion', 'friend']
},
{
  id: 1046,
  kanjiChar: '坑',
  onyomi: ['kou コウ'],
  kunyomi: [],
  displayMeanings: ['pit', 'hole'],
  fullDisplayMeanings: ['pit', 'hole'],
  meanings: ['pit', 'hole']
},
{
  id: 1047,
  kanjiChar: '姑',
  onyomi: ['ko コ'],
  kunyomi: ['shuutome しゅうとめ', 'shuuto しゅうと', 'oba おば', 'shibaraku しばらく'],
  displayMeanings: ['mother-in-law'],
  fullDisplayMeanings: ['mother-in-law'],
  meanings: ['mother-in-law']
},
{
  id: 1048,
  kanjiChar: '烏',
  onyomi: ['u ウ', 'o オ'],
  kunyomi: ['karasu からす', 'izukunzo いずくんぞ', 'nanzo なんぞ'],
  displayMeanings: ['crow', 'raven'],
  fullDisplayMeanings: ['crow', 'raven'],
  meanings: ['crow', 'raven']
},
{
  id: 1049,
  kanjiChar: '藍',
  onyomi: ['ran ラン'],
  kunyomi: ['ai あい'],
  displayMeanings: ['indigo'],
  fullDisplayMeanings: ['indigo'],
  meanings: ['indigo']
},
{
  id: 1050,
  kanjiChar: '僑',
  onyomi: ['kyou キョウ'],
  kunyomi: [],
  displayMeanings: ['expatriate', 'person living abroad'],
  fullDisplayMeanings: ['expatriate', 'person living abroad', 'temporary home'],
  meanings: ['expatriate', 'person living abroad', 'temporary home']
},
{
  id: 1051,
  kanjiChar: '賊',
  onyomi: ['zoku ゾク'],
  kunyomi: [],
  displayMeanings: ['burglar', 'rebel'],
  fullDisplayMeanings: ['burglar', 'rebel', 'traitor', 'robber'],
  meanings: ['burglar', 'rebel', 'traitor', 'robber']
},
{
  id: 1052,
  kanjiChar: '搾',
  onyomi: ['saku サク'],
  kunyomi: ['shibo(ru) しぼ(る)'],
  displayMeanings: ['squeeze'],
  fullDisplayMeanings: ['squeeze'],
  meanings: ['squeeze']
},
{
  id: 1053,
  kanjiChar: '奄',
  onyomi: ['en エン'],
  kunyomi: ['oo(u) おお(う)', 'tachimachi たちまち'],
  displayMeanings: ['cover', 'suffocate'],
  fullDisplayMeanings: ['cover', 'suffocate', 'obstruct'],
  meanings: ['cover', 'suffocate', 'obstruct']
},
{
  id: 1054,
  kanjiChar: '臼',
  onyomi: ['kyuu キュウ', 'gu グ'],
  kunyomi: ['usu うす', 'usudzu(ku) うすづ(く)'],
  displayMeanings: ['mortar'],
  fullDisplayMeanings: ['mortar'],
  meanings: ['mortar']
},
{
  id: 1055,
  kanjiChar: '畔',
  onyomi: ['han ハン'],
  kunyomi: ['aze あぜ', 'kuro くろ', 'hotori ほとり'],
  displayMeanings: ['paddy ridge', 'levee'],
  fullDisplayMeanings: ['paddy ridge', 'levee'],
  meanings: ['paddy ridge', 'levee']
},
{
  id: 1056,
  kanjiChar: '遼',
  onyomi: ['ryou リョウ'],
  kunyomi: [],
  displayMeanings: ['distant'],
  fullDisplayMeanings: ['distant'],
  meanings: ['distant']
},
{
  id: 1057,
  kanjiChar: '唄',
  onyomi: ['bai バイ'],
  kunyomi: ['uta うた', 'uta(u) うた(う)'],
  displayMeanings: ['song', 'ballad'],
  fullDisplayMeanings: ['song', 'ballad'],
  meanings: ['song', 'ballad']
},
{
  id: 1058,
  kanjiChar: '孔',
  onyomi: ['kou コウ', 'ku ク'],
  kunyomi: ['ana あな'],
  displayMeanings: ['cavity', 'hole'],
  fullDisplayMeanings: ['cavity', 'hole', 'slit', 'very', 'great', 'exceedingly'],
  meanings: ['cavity', 'hole', 'slit', 'very', 'great', 'exceedingly']
},
{
  id: 1059,
  kanjiChar: '橘',
  onyomi: ['kitsu キツ'],
  kunyomi: ['tachibana たちばな'],
  displayMeanings: ['mandarin orange'],
  fullDisplayMeanings: ['mandarin orange'],
  meanings: ['mandarin orange']
},
{
  id: 1060,
  kanjiChar: '漱',
  onyomi: ['sou ソウ', 'shuu シュウ', 'su ス'],
  kunyomi: ['kuchisusu(gu) くちすす(ぐ)', 'kuchisoso(gu) くちそそ(ぐ)', 'ugai うがい', 'susu(gu) すす(ぐ)'],
  displayMeanings: ['gargle', 'rinse mouth'],
  fullDisplayMeanings: ['gargle', 'rinse mouth'],
  meanings: ['gargle', 'rinse mouth']
},
{
  id: 1061,
  kanjiChar: '呂',
  onyomi: ['ro ロ', 'ryo リョ'],
  kunyomi: ['sebone せぼね'],
  displayMeanings: ['spine', 'backbone'],
  fullDisplayMeanings: ['spine', 'backbone'],
  meanings: ['spine', 'backbone']
},
{
  id: 1062,
  kanjiChar: '桧',
  onyomi: ['kai カイ'],
  kunyomi: ['hinoki ひのき', 'hi ひ'],
  displayMeanings: ['Japanese cypress'],
  fullDisplayMeanings: ['Japanese cypress'],
  meanings: ['Japanese cypress']
},
{
  id: 1063,
  kanjiChar: '拷',
  onyomi: ['gou ゴウ'],
  kunyomi: [],
  displayMeanings: ['torture', 'beat'],
  fullDisplayMeanings: ['torture', 'beat'],
  meanings: ['torture', 'beat']
},
{
  id: 1064,
  kanjiChar: '宋',
  onyomi: ['sou ソウ'],
  kunyomi: [],
  displayMeanings: ['dwell', 'Sung dynasty'],
  fullDisplayMeanings: ['dwell', 'Sung dynasty'],
  meanings: ['dwell', 'Sung dynasty']
},
{
  id: 1065,
  kanjiChar: '嬢',
  onyomi: ['jou ジョウ'],
  kunyomi: ['musume むすめ'],
  displayMeanings: ['lass', 'girl'],
  fullDisplayMeanings: ['lass', 'girl', 'Miss', 'daughter'],
  meanings: ['lass', 'girl', 'Miss', 'daughter']
},
{
  id: 1066,
  kanjiChar: '苑',
  onyomi: ['en エン', 'on オン'],
  kunyomi: ['sono その', 'u(tsu) う(つ)'],
  displayMeanings: ['garden', 'farm'],
  fullDisplayMeanings: ['garden', 'farm', 'park'],
  meanings: ['garden', 'farm', 'park']
},
{
  id: 1067,
  kanjiChar: '巽',
  onyomi: ['son ソン'],
  kunyomi: ['tatsumi たつみ'],
  displayMeanings: ['southeast'],
  fullDisplayMeanings: ['southeast'],
  meanings: ['southeast']
},
{
  id: 1068,
  kanjiChar: '杜',
  onyomi: ['to ト', 'tou トウ', 'zu ズ'],
  kunyomi: ['mori もり', 'fusa(gu) ふさ(ぐ)', 'yamanashi やまなし'],
  displayMeanings: ['woods', 'grove'],
  fullDisplayMeanings: ['woods', 'grove'],
  meanings: ['woods', 'grove']
},
{
  id: 1069,
  kanjiChar: '渓',
  onyomi: ['kei ケイ'],
  kunyomi: ['tani たに', 'tanigawa たにがわ'],
  displayMeanings: ['mountain stream', 'valley'],
  fullDisplayMeanings: ['mountain stream', 'valley'],
  meanings: ['mountain stream', 'valley']
},
{
  id: 1070,
  kanjiChar: '翁',
  onyomi: ['ou オウ'],
  kunyomi: ['okina おきな'],
  displayMeanings: ['venerable old man'],
  fullDisplayMeanings: ['venerable old man'],
  meanings: ['venerable old man']
},
{
  id: 1071,
  kanjiChar: '藝',
  onyomi: ['gei ゲイ', 'un ウン'],
  kunyomi: ['u(eru) う(える)', 'nori のり', 'waza わざ'],
  displayMeanings: ['art', 'craft'],
  fullDisplayMeanings: ['art', 'craft', 'performance', 'acting', 'trick', 'stunt'],
  meanings: ['art', 'craft', 'performance', 'acting', 'trick', 'stunt']
},
{
  id: 1072,
  kanjiChar: '廉',
  onyomi: ['ren レン'],
  kunyomi: [],
  displayMeanings: ['bargain', 'reason'],
  fullDisplayMeanings: ['bargain', 'reason', 'charge', 'suspicion', 'point', 'account', 'purity'],
  meanings: ['bargain', 'reason', 'charge', 'suspicion', 'point', 'account', 'purity']
},
{
  id: 1073,
  kanjiChar: '牙',
  onyomi: ['ga ガ', 'ge ゲ'],
  kunyomi: ['kiba きば', 'ha は'],
  displayMeanings: ['tusk', 'fang'],
  fullDisplayMeanings: ['tusk', 'fang', 'tusk radical (no. 92)'],
  meanings: ['tusk', 'fang', 'tusk radical (no. 92)']
},
{
  id: 1074,
  kanjiChar: '謹',
  onyomi: ['kin キン'],
  kunyomi: ['tsutsushi(mu) つつし(む)'],
  displayMeanings: ['discreet', 'reverently'],
  fullDisplayMeanings: ['discreet', 'reverently', 'humbly'],
  meanings: ['discreet', 'reverently', 'humbly']
},
{
  id: 1075,
  kanjiChar: '瞳',
  onyomi: ['dou ドウ', 'tou トウ'],
  kunyomi: ['hitomi ひとみ'],
  displayMeanings: ['pupil (of eye)'],
  fullDisplayMeanings: ['pupil (of eye)'],
  meanings: ['pupil (of eye)']
},
{
  id: 1076,
  kanjiChar: '湧',
  onyomi: ['yuu ユウ', 'you ヨウ', 'yu ユ'],
  kunyomi: ['wa(ku) わ(く)'],
  displayMeanings: ['boil', 'ferment'],
  fullDisplayMeanings: ['boil', 'ferment', 'seethe', 'uproar', 'breed'],
  meanings: ['boil', 'ferment', 'seethe', 'uproar', 'breed']
},
{
  id: 1077,
  kanjiChar: '欣',
  onyomi: ['kin キン', 'gon ゴン', 'kon コン'],
  kunyomi: ['yoroko(bu) よろこ(ぶ)'],
  displayMeanings: ['take pleasure in', 'rejoice'],
  fullDisplayMeanings: ['take pleasure in', 'rejoice'],
  meanings: ['take pleasure in', 'rejoice']
},
{
  id: 1078,
  kanjiChar: '窯',
  onyomi: ['you ヨウ'],
  kunyomi: ['kama かま'],
  displayMeanings: ['kiln', 'oven'],
  fullDisplayMeanings: ['kiln', 'oven', 'furnace'],
  meanings: ['kiln', 'oven', 'furnace']
},
{
  id: 1079,
  kanjiChar: '褒',
  onyomi: ['hou ホウ'],
  kunyomi: ['ho(meru) ほ(める)'],
  displayMeanings: ['praise', 'extol'],
  fullDisplayMeanings: ['praise', 'extol'],
  meanings: ['praise', 'extol']
},
{
  id: 1080,
  kanjiChar: '醜',
  onyomi: ['shuu シュウ'],
  kunyomi: ['miniku(i) みにく(い)', 'shiko しこ'],
  displayMeanings: ['ugly', 'unclean'],
  fullDisplayMeanings: ['ugly', 'unclean', 'shame', 'bad looking'],
  meanings: ['ugly', 'unclean', 'shame', 'bad looking']
},
{
  id: 1081,
  kanjiChar: '魏',
  onyomi: ['gi ギ'],
  kunyomi: ['taka(i) たか(い)'],
  displayMeanings: ['high', 'large'],
  fullDisplayMeanings: ['high', 'large', 'Kingdom of Wei'],
  meanings: ['high', 'large', 'Kingdom of Wei']
},
{
  id: 1082,
  kanjiChar: '篇',
  onyomi: ['hen ヘン'],
  kunyomi: [],
  displayMeanings: ['volume', 'chapter'],
  fullDisplayMeanings: ['volume', 'chapter', 'book', 'editing', 'compilation'],
  meanings: ['volume', 'chapter', 'book', 'editing', 'compilation']
},
{
  id: 1083,
  kanjiChar: '升',
  onyomi: ['shou ショウ'],
  kunyomi: ['masu ます'],
  displayMeanings: ['measuring box', '1.8 liter'],
  fullDisplayMeanings: ['measuring box', '1.8 liter'],
  meanings: ['measuring box', '1.8 liter']
},
{
  id: 1084,
  kanjiChar: '此',
  onyomi: ['shi シ'],
  kunyomi: ['kore これ', 'kono この', 'koko ここ'],
  displayMeanings: ['this', 'current'],
  fullDisplayMeanings: ['this', 'current', 'next', 'coming', 'last', 'past'],
  meanings: ['this', 'current', 'next', 'coming', 'last', 'past']
},
{
  id: 1085,
  kanjiChar: '峯',
  onyomi: ['hou ホウ'],
  kunyomi: ['mine みね', 'ne ね'],
  displayMeanings: ['peak', 'summit'],
  fullDisplayMeanings: ['peak', 'summit'],
  meanings: ['peak', 'summit']
},
{
  id: 1086,
  kanjiChar: '殉',
  onyomi: ['jun ジュン'],
  kunyomi: [],
  displayMeanings: ['martyrdom', 'follow by resigning'],
  fullDisplayMeanings: ['martyrdom', 'follow by resigning'],
  meanings: ['martyrdom', 'follow by resigning']
},
{
  id: 1087,
  kanjiChar: '煩',
  onyomi: ['han ハン', 'bon ボン'],
  kunyomi: ['wazura(u) わずら(う)', 'urusa(garu) うるさ(がる)'],
  displayMeanings: ['anxiety', 'trouble'],
  fullDisplayMeanings: ['anxiety', 'trouble', 'worry', 'pain', 'ill', 'annoy', 'nuisance', 'irksome'],
  meanings: ['anxiety', 'trouble', 'worry', 'pain', 'ill', 'annoy', 'nuisance', 'irksome']
},
{
  id: 1088,
  kanjiChar: '巴',
  onyomi: ['ha ハ'],
  kunyomi: ['tomoe ともえ', 'uzumaki うずまき'],
  displayMeanings: ['comma-design'],
  fullDisplayMeanings: ['comma-design'],
  meanings: ['comma-design']
},
{
  id: 1089,
  kanjiChar: '禎',
  onyomi: ['tei テイ'],
  kunyomi: ['saiwa(i) さいわ(い)'],
  displayMeanings: ['happiness', 'blessed'],
  fullDisplayMeanings: ['happiness', 'blessed', 'good fortune', 'auspicious'],
  meanings: ['happiness', 'blessed', 'good fortune', 'auspicious']
},
{
  id: 1090,
  kanjiChar: '枕',
  onyomi: ['chin チン', 'shin シン'],
  kunyomi: ['makura まくら'],
  displayMeanings: ['pillow'],
  fullDisplayMeanings: ['pillow'],
  meanings: ['pillow']
},
{
  id: 1091,
  kanjiChar: '劾',
  onyomi: ['gai ガイ'],
  kunyomi: [],
  displayMeanings: ['censure', 'criminal investigation'],
  fullDisplayMeanings: ['censure', 'criminal investigation'],
  meanings: ['censure', 'criminal investigation']
},
{
  id: 1092,
  kanjiChar: '菩',
  onyomi: ['bo ボ'],
  kunyomi: [],
  displayMeanings: ['kind of grass', 'sacred tree'],
  fullDisplayMeanings: ['kind of grass', 'sacred tree'],
  meanings: ['kind of grass', 'sacred tree']
},
{
  id: 1093,
  kanjiChar: '堕',
  onyomi: ['da ダ'],
  kunyomi: ['o(chiru) お(ちる)', 'kuzu(su) くず(す)'],
  displayMeanings: ['degenerate', 'descend to'],
  fullDisplayMeanings: ['degenerate', 'descend to', 'lapse into'],
  meanings: ['degenerate', 'descend to', 'lapse into']
},
{
  id: 1094,
  kanjiChar: '丼',
  onyomi: ['ton トン', 'tan タン', 'shou ショウ', 'sei セイ'],
  kunyomi: ['donburi どんぶり'],
  displayMeanings: ['bowl', 'bowl of food'],
  fullDisplayMeanings: ['bowl', 'bowl of food'],
  meanings: ['bowl', 'bowl of food']
},
{
  id: 1095,
  kanjiChar: '租',
  onyomi: ['so ソ'],
  kunyomi: [],
  displayMeanings: ['tariff', 'crop tax'],
  fullDisplayMeanings: ['tariff', 'crop tax', 'borrowing'],
  meanings: ['tariff', 'crop tax', 'borrowing']
},
{
  id: 1096,
  kanjiChar: '檜',
  onyomi: ['kai カイ'],
  kunyomi: ['hinoki ひのき', 'hi ひ'],
  displayMeanings: ['Japanese cypress'],
  fullDisplayMeanings: ['Japanese cypress'],
  meanings: ['Japanese cypress']
},
{
  id: 1097,
  kanjiChar: '稜',
  onyomi: ['ryou リョウ', 'rou ロウ'],
  kunyomi: ['itsu いつ', 'kado かど'],
  displayMeanings: ['angle', 'edge'],
  fullDisplayMeanings: ['angle', 'edge', 'corner', 'power', 'majesty'],
  meanings: ['angle', 'edge', 'corner', 'power', 'majesty']
},
{
  id: 1098,
  kanjiChar: '牟',
  onyomi: ['bou ボウ', 'mu ム'],
  kunyomi: [],
  displayMeanings: ['pupil (eye)', 'moo (cow sound)'],
  fullDisplayMeanings: ['pupil (eye)', 'moo (cow sound)'],
  meanings: ['pupil (eye)', 'moo (cow sound)']
},
{
  id: 1099,
  kanjiChar: '桟',
  onyomi: ['san サン', 'sen セン'],
  kunyomi: ['kakehashi かけはし'],
  displayMeanings: ['scaffold', 'cleat'],
  fullDisplayMeanings: ['scaffold', 'cleat', 'frame', 'jetty', 'bolt (door)'],
  meanings: ['scaffold', 'cleat', 'frame', 'jetty', 'bolt (door)']
},
{
  id: 1100,
  kanjiChar: '榊',
  onyomi: ['sakaki さかき'],
  kunyomi: [],
  displayMeanings: ['sacred Shinto tree'],
  fullDisplayMeanings: ['sacred Shinto tree', '(kokuji)'],
  meanings: ['sacred Shinto tree', '(kokuji)']
},
{
  id: 1101,
  kanjiChar: '錫',
  onyomi: ['seki セキ', 'shaku シャク'],
  kunyomi: ['suzu すず', 'tama(u) たま(う)'],
  displayMeanings: ['copper', 'tin'],
  fullDisplayMeanings: ['copper', 'tin'],
  meanings: ['copper', 'tin']
},
{
  id: 1102,
  kanjiChar: '荏',
  onyomi: ['jin ジン', 'nin ニン'],
  kunyomi: [],
  displayMeanings: ['bean', 'perilla'],
  fullDisplayMeanings: ['bean', 'perilla', 'herb', 'soft', 'pliable'],
  meanings: ['bean', 'perilla', 'herb', 'soft', 'pliable']
},
{
  id: 1103,
  kanjiChar: '惧',
  onyomi: ['ku ク', 'gu グ'],
  kunyomi: ['oso(reru) おそ(れる)'],
  displayMeanings: ['fear', 'be afraid of'],
  fullDisplayMeanings: ['fear', 'be afraid of', 'dread'],
  meanings: ['fear', 'be afraid of', 'dread']
},
{
  id: 1104,
  kanjiChar: '倭',
  onyomi: ['wa ワ', 'i イ'],
  kunyomi: ['yamato やまと', 'shitaga(u) したが(う)'],
  displayMeanings: ['Yamato', 'ancient Japan'],
  fullDisplayMeanings: ['Yamato', 'ancient Japan'],
  meanings: ['Yamato', 'ancient Japan']
},
{
  id: 1105,
  kanjiChar: '婿',
  onyomi: ['sei セイ'],
  kunyomi: ['muko むこ'],
  displayMeanings: ['bridegroom', 'son-in-law'],
  fullDisplayMeanings: ['bridegroom', 'son-in-law'],
  meanings: ['bridegroom', 'son-in-law']
},
{
  id: 1106,
  kanjiChar: '慕',
  onyomi: ['bo ボ'],
  kunyomi: ['shita(u) した(う)'],
  displayMeanings: ['pining', 'yearn for'],
  fullDisplayMeanings: ['pining', 'yearn for', 'love dearly', 'adore'],
  meanings: ['pining', 'yearn for', 'love dearly', 'adore']
},
{
  id: 1107,
  kanjiChar: '廟',
  onyomi: ['byou ビョウ', 'myou ミョウ'],
  kunyomi: ['tamaya たまや', 'mitamaya みたまや', 'yashiro やしろ'],
  displayMeanings: ['mausoleum', 'shrine'],
  fullDisplayMeanings: ['mausoleum', 'shrine', 'palace'],
  meanings: ['mausoleum', 'shrine', 'palace']
},
{
  id: 1108,
  kanjiChar: '銚',
  onyomi: ['chou チョウ', 'you ヨウ'],
  kunyomi: ['nabe なべ'],
  displayMeanings: ['sake bottle'],
  fullDisplayMeanings: ['sake bottle'],
  meanings: ['sake bottle']
},
{
  id: 1109,
  kanjiChar: '斐',
  onyomi: ['hi ヒ', 'i イ'],
  kunyomi: [],
  displayMeanings: ['beautiful', 'patterned'],
  fullDisplayMeanings: ['beautiful', 'patterned'],
  meanings: ['beautiful', 'patterned']
},
{
  id: 1110,
  kanjiChar: '罷',
  onyomi: ['hi ヒ'],
  kunyomi: ['maka(ri-) まか(り-)', 'ya(meru) や(める)'],
  displayMeanings: ['quit', 'stop'],
  fullDisplayMeanings: ['quit', 'stop', 'leave', 'withdraw', 'go'],
  meanings: ['quit', 'stop', 'leave', 'withdraw', 'go']
},
{
  id: 1111,
  kanjiChar: '矯',
  onyomi: ['kyou キョウ'],
  kunyomi: ['ta(meru) た(める)'],
  displayMeanings: ['rectify', 'straighten'],
  fullDisplayMeanings: ['rectify', 'straighten', 'correct', 'reform', 'cure', 'control', 'pretend', 'falsify'],
  meanings: ['rectify', 'straighten', 'correct', 'reform', 'cure', 'control', 'pretend', 'falsify']
},
{
  id: 1112,
  kanjiChar: '某',
  onyomi: ['bou ボウ'],
  kunyomi: ['soregashi それがし', 'nanigashi なにがし'],
  displayMeanings: ['so-and-so', 'one'],
  fullDisplayMeanings: ['so-and-so', 'one', 'a certain', 'that person'],
  meanings: ['so-and-so', 'one', 'a certain', 'that person']
},
{
  id: 1113,
  kanjiChar: '囚',
  onyomi: ['shuu シュウ'],
  kunyomi: ['tora(wareru) とら(われる)'],
  displayMeanings: ['captured', 'criminal'],
  fullDisplayMeanings: ['captured', 'criminal', 'arrest', 'catch'],
  meanings: ['captured', 'criminal', 'arrest', 'catch']
},
{
  id: 1114,
  kanjiChar: '魁',
  onyomi: ['kai カイ'],
  kunyomi: ['sakigake さきがけ', 'kashira かしら'],
  displayMeanings: ['charging ahead of others'],
  fullDisplayMeanings: ['charging ahead of others'],
  meanings: ['charging ahead of others']
},
{
  id: 1115,
  kanjiChar: '薮',
  onyomi: ['sou ソウ'],
  kunyomi: ['yabu やぶ'],
  displayMeanings: ['thicket', 'bush'],
  fullDisplayMeanings: ['thicket', 'bush', 'underbrush', 'grove'],
  meanings: ['thicket', 'bush', 'underbrush', 'grove']
},
{
  id: 1116,
  kanjiChar: '虹',
  onyomi: ['kou コウ'],
  kunyomi: ['niji にじ'],
  displayMeanings: ['rainbow'],
  fullDisplayMeanings: ['rainbow'],
  meanings: ['rainbow']
},
{
  id: 1117,
  kanjiChar: '鴻',
  onyomi: ['kou コウ', 'gou ゴウ'],
  kunyomi: ['ootori おおとり', 'hishikui ひしくい', 'oogari おおがり'],
  displayMeanings: ['large bird', 'wild goose'],
  fullDisplayMeanings: ['large bird', 'wild goose', 'large', 'great', 'powerful', 'prosperous'],
  meanings: ['large bird', 'wild goose', 'large', 'great', 'powerful', 'prosperous']
},
{
  id: 1118,
  kanjiChar: '泌',
  onyomi: ['hitsu ヒツ', 'hi ヒ'],
  kunyomi: [],
  displayMeanings: ['ooze', 'flow'],
  fullDisplayMeanings: ['ooze', 'flow', 'soak in', 'penetrate', 'secrete'],
  meanings: ['ooze', 'flow', 'soak in', 'penetrate', 'secrete']
},
{
  id: 1119,
  kanjiChar: '於',
  onyomi: ['o オ', 'yo ヨ'],
  kunyomi: ['oi(te) おい(て)', 'o(keru) お(ける)', 'aa ああ', 'yori より'],
  displayMeanings: ['at', 'in'],
  fullDisplayMeanings: ['at', 'in', 'on', 'as for'],
  meanings: ['at', 'in', 'on', 'as for']
},
{
  id: 1120,
  kanjiChar: '赳',
  onyomi: ['kyuu キュウ'],
  kunyomi: [],
  displayMeanings: ['strong and brave'],
  fullDisplayMeanings: ['strong and brave'],
  meanings: ['strong and brave']
},
{
  id: 1121,
  kanjiChar: '漸',
  onyomi: ['zen ゼン'],
  kunyomi: ['youya(ku) ようや(く)', 'yaya やや', 'youyo(u) ようよ(う)', 'susu(mu) すす(む)'],
  displayMeanings: ['steadily', 'gradually advancing'],
  fullDisplayMeanings: ['steadily', 'gradually advancing', 'finally', 'barely'],
  meanings: ['steadily', 'gradually advancing', 'finally', 'barely']
},
{
  id: 1122,
  kanjiChar: '逢',
  onyomi: ['hou ホウ'],
  kunyomi: ['a(u) あ(う)', 'muka(eru) むか(える)'],
  displayMeanings: ['meeting', 'tryst'],
  fullDisplayMeanings: ['meeting', 'tryst', 'date', 'rendezvous'],
  meanings: ['meeting', 'tryst', 'date', 'rendezvous']
},
{
  id: 1123,
  kanjiChar: '凧',
  onyomi: ['ikanobori いかのぼり', 'tako たこ'],
  kunyomi: [],
  displayMeanings: ['kite'],
  fullDisplayMeanings: ['kite', '(kokuji)'],
  meanings: ['kite', '(kokuji)']
},
{
  id: 1124,
  kanjiChar: '鵜',
  onyomi: ['tei テイ', 'dai ダイ'],
  kunyomi: ['u う'],
  displayMeanings: ['cormorant'],
  fullDisplayMeanings: ['cormorant'],
  meanings: ['cormorant']
},
{
  id: 1125,
  kanjiChar: '庵',
  onyomi: ['an アン'],
  kunyomi: ['iori いおり', 'io いお'],
  displayMeanings: ['hermitage', 'retreat'],
  fullDisplayMeanings: ['hermitage', 'retreat'],
  meanings: ['hermitage', 'retreat']
},
{
  id: 1126,
  kanjiChar: '膳',
  onyomi: ['zen ゼン', 'sen セン'],
  kunyomi: ['kashiwa かしわ', 'susu(meru) すす(める)', 'sona(eru) そな(える)'],
  displayMeanings: ['small low table', 'tray'],
  fullDisplayMeanings: ['small low table', 'tray'],
  meanings: ['small low table', 'tray']
},
{
  id: 1127,
  kanjiChar: '蚊',
  onyomi: ['bun ブン'],
  kunyomi: ['ka か'],
  displayMeanings: ['mosquito'],
  fullDisplayMeanings: ['mosquito'],
  meanings: ['mosquito']
},
{
  id: 1128,
  kanjiChar: '葵',
  onyomi: ['ki キ'],
  kunyomi: ['aoi あおい'],
  displayMeanings: ['hollyhock'],
  fullDisplayMeanings: ['hollyhock'],
  meanings: ['hollyhock']
},
{
  id: 1129,
  kanjiChar: '厄',
  onyomi: ['yaku ヤク'],
  kunyomi: [],
  displayMeanings: ['unlucky', 'misfortune'],
  fullDisplayMeanings: ['unlucky', 'misfortune', 'bad luck', 'disaster'],
  meanings: ['unlucky', 'misfortune', 'bad luck', 'disaster']
},
{
  id: 1130,
  kanjiChar: '藻',
  onyomi: ['sou ソウ'],
  kunyomi: ['mo も'],
  displayMeanings: ['seaweed', 'duckweed'],
  fullDisplayMeanings: ['seaweed', 'duckweed'],
  meanings: ['seaweed', 'duckweed']
},
{
  id: 1131,
  kanjiChar: '萬',
  onyomi: ['man マン', 'ban バン'],
  kunyomi: ['yorozu よろず'],
  displayMeanings: ['ten thousand', '10,000'],
  fullDisplayMeanings: ['ten thousand', '10,000'],
  meanings: ['ten thousand', '10,000']
},
{
  id: 1132,
  kanjiChar: '禄',
  onyomi: ['roku ロク'],
  kunyomi: ['saiwa(i) さいわ(い)', 'fuchi ふち'],
  displayMeanings: ['fief', 'allowance'],
  fullDisplayMeanings: ['fief', 'allowance', 'pension', 'grant', 'happiness'],
  meanings: ['fief', 'allowance', 'pension', 'grant', 'happiness']
},
{
  id: 1133,
  kanjiChar: '孟',
  onyomi: ['mou モウ', 'bou ボウ', 'myou ミョウ'],
  kunyomi: ['kashira かしら'],
  displayMeanings: ['chief', 'beginning'],
  fullDisplayMeanings: ['chief', 'beginning'],
  meanings: ['chief', 'beginning']
},
{
  id: 1134,
  kanjiChar: '鴈',
  onyomi: ['gan ガン'],
  kunyomi: ['kari かり', 'karigane かりがね'],
  displayMeanings: ['wild goose'],
  fullDisplayMeanings: ['wild goose'],
  meanings: ['wild goose']
},
{
  id: 1135,
  kanjiChar: '狼',
  onyomi: ['rou ロウ'],
  kunyomi: ['ookami おおかみ'],
  displayMeanings: ['wolf'],
  fullDisplayMeanings: ['wolf'],
  meanings: ['wolf']
},
{
  id: 1136,
  kanjiChar: '嫡',
  onyomi: ['chaku チャク', 'teki テキ'],
  kunyomi: [],
  displayMeanings: ['legitimate wife', 'direct descent'],
  fullDisplayMeanings: ['legitimate wife', 'direct descent (non-bastard)'],
  meanings: ['legitimate wife', 'direct descent (non-bastard)']
},
{
  id: 1137,
  kanjiChar: '呪',
  onyomi: ['ju ジュ', 'shu シュ', 'shuu シュウ', 'zu ズ'],
  kunyomi: ['majina(u) まじな(う)', 'noro(i) のろ(い)'],
  displayMeanings: ['spell', 'curse'],
  fullDisplayMeanings: ['spell', 'curse', 'charm', 'malediction'],
  meanings: ['spell', 'curse', 'charm', 'malediction']
},
{
  id: 1138,
  kanjiChar: '斬',
  onyomi: ['zan ザン', 'san サン', 'sen セン', 'zen ゼン'],
  kunyomi: ['ki(ru) き(る)'],
  displayMeanings: ['beheading', 'kill'],
  fullDisplayMeanings: ['beheading', 'kill', 'murder'],
  meanings: ['beheading', 'kill', 'murder']
},
{
  id: 1139,
  kanjiChar: '尖',
  onyomi: ['sen セン'],
  kunyomi: ['toga(ru) とが(る)', 'saki さき', 'surudo(i) するど(い)'],
  displayMeanings: ['be pointed', 'sharp'],
  fullDisplayMeanings: ['be pointed', 'sharp', 'taper', 'displeased', 'angry', 'edgy'],
  meanings: ['be pointed', 'sharp', 'taper', 'displeased', 'angry', 'edgy']
},
{
  id: 1140,
  kanjiChar: '翫',
  onyomi: ['gan ガン'],
  kunyomi: ['moteaso(bu) もてあそ(ぶ)'],
  displayMeanings: ['take pleasure in', 'play instrument'],
  fullDisplayMeanings: ['take pleasure in', 'play instrument'],
  meanings: ['take pleasure in', 'play instrument']
},
{
  id: 1141,
  kanjiChar: '嶽',
  onyomi: ['gaku ガク'],
  kunyomi: ['take たけ'],
  displayMeanings: ['peak'],
  fullDisplayMeanings: ['peak'],
  meanings: ['peak']
},
{
  id: 1142,
  kanjiChar: '尭',
  onyomi: ['gyou ギョウ'],
  kunyomi: ['taka(i) たか(い)'],
  displayMeanings: ['high', 'far'],
  fullDisplayMeanings: ['high', 'far'],
  meanings: ['high', 'far']
},
{
  id: 1143,
  kanjiChar: '怨',
  onyomi: ['en エン', 'on オン', 'un ウン'],
  kunyomi: ['ura(mu) うら(む)'],
  displayMeanings: ['grudge', 'show resentment'],
  fullDisplayMeanings: ['grudge', 'show resentment', 'be jealous'],
  meanings: ['grudge', 'show resentment', 'be jealous']
},
{
  id: 1144,
  kanjiChar: '卿',
  onyomi: ['kei ケイ', 'kyou キョウ'],
  kunyomi: ['kimi きみ'],
  displayMeanings: ['you', 'lord'],
  fullDisplayMeanings: ['you', 'lord', 'secretary', 'state minister'],
  meanings: ['you', 'lord', 'secretary', 'state minister']
},
{
  id: 1145,
  kanjiChar: '串',
  onyomi: ['kan カン', 'ken ケン', 'sen セン'],
  kunyomi: ['kushi くし', 'tsuranu(ku) つらぬ(く)'],
  displayMeanings: ['spit', 'skewer'],
  fullDisplayMeanings: ['spit', 'skewer'],
  meanings: ['spit', 'skewer']
},
{
  id: 1146,
  kanjiChar: '已',
  onyomi: ['i イ'],
  kunyomi: ['ya(mu) や(む)', 'sude(ni) すで(に)', 'nomi のみ', 'hanahada はなはだ'],
  displayMeanings: ['stop', 'halt'],
  fullDisplayMeanings: ['stop', 'halt', 'previously', 'already', 'long ago'],
  meanings: ['stop', 'halt', 'previously', 'already', 'long ago']
},
{
  id: 1147,
  kanjiChar: '嚇',
  onyomi: ['kaku カク'],
  kunyomi: ['odo(su) おど(す)'],
  displayMeanings: ['menacing', 'dignity'],
  fullDisplayMeanings: ['menacing', 'dignity', 'majesty', 'threaten'],
  meanings: ['menacing', 'dignity', 'majesty', 'threaten']
},
{
  id: 1148,
  kanjiChar: '巳',
  onyomi: ['shi シ'],
  kunyomi: ['mi み'],
  displayMeanings: ['sign of the snake', '9-11AM'],
  fullDisplayMeanings: ['sign of the snake or serpent', '9-11AM', 'sixth sign of Chinese zodiac'],
  meanings: ['sign of the snake or serpent', '9-11AM', 'sixth sign of Chinese zodiac']
},
{
  id: 1149,
  kanjiChar: '凸',
  onyomi: ['totsu トツ'],
  kunyomi: ['deko でこ'],
  displayMeanings: ['convex', 'beetle brow'],
  fullDisplayMeanings: ['convex', 'beetle brow', 'uneven'],
  meanings: ['convex', 'beetle brow', 'uneven']
},
{
  id: 1150,
  kanjiChar: '暢',
  onyomi: ['chou チョウ'],
  kunyomi: ['nobi(ru) のび(る)'],
  displayMeanings: ['stretch'],
  fullDisplayMeanings: ['stretch'],
  meanings: ['stretch']
},
{
  id: 1151,
  kanjiChar: '腫',
  onyomi: ['shu シュ', 'shou ショウ'],
  kunyomi: ['ha(reru) は(れる)', 'ha(re) は(れ)', 'ha(rasu) は(らす)', 'haremono はれもの'],
  displayMeanings: ['tumor', 'swelling'],
  fullDisplayMeanings: ['tumor', 'swelling'],
  meanings: ['tumor', 'swelling']
},
{
  id: 1152,
  kanjiChar: '粟',
  onyomi: ['zoku ゾク', 'shoku ショク', 'soku ソク'],
  kunyomi: ['awa あわ', 'momi もみ'],
  displayMeanings: ['millet'],
  fullDisplayMeanings: ['millet'],
  meanings: ['millet']
},
{
  id: 1153,
  kanjiChar: '燕',
  onyomi: ['en エン'],
  kunyomi: ['tsubame つばめ', 'tsubakura つばくら', 'tsubakuro つばくろ'],
  displayMeanings: ['swallow (bird)'],
  fullDisplayMeanings: ['swallow (bird)'],
  meanings: ['swallow (bird)']
},
{
  id: 1154,
  kanjiChar: '韻',
  onyomi: ['in イン'],
  kunyomi: [],
  displayMeanings: ['rhyme', 'elegance'],
  fullDisplayMeanings: ['rhyme', 'elegance', 'tone'],
  meanings: ['rhyme', 'elegance', 'tone']
},
{
  id: 1155,
  kanjiChar: '綴',
  onyomi: ['tei テイ', 'tetsu テツ', 'techi テチ', 'getsu ゲツ'],
  kunyomi: ['to(jiru) と(じる)', 'tsudzu(ru) つづ(る)', 'tsudzuri つづり', 'sumi(yaka) すみ(やか)'],
  displayMeanings: ['compose', 'spell'],
  fullDisplayMeanings: ['compose', 'spell', 'write', 'bind (books)'],
  meanings: ['compose', 'spell', 'write', 'bind (books)']
},
{
  id: 1156,
  kanjiChar: '埴',
  onyomi: ['shoku ショク'],
  kunyomi: ['hani はに', 'hena へな'],
  displayMeanings: ['clay'],
  fullDisplayMeanings: ['clay'],
  meanings: ['clay']
},
{
  id: 1157,
  kanjiChar: '霜',
  onyomi: ['sou ソウ'],
  kunyomi: ['shimo しも'],
  displayMeanings: ['frost'],
  fullDisplayMeanings: ['frost'],
  meanings: ['frost']
},
{
  id: 1158,
  kanjiChar: '餅',
  onyomi: ['hei ヘイ', 'hyou ヒョウ'],
  kunyomi: ['mochi もち', 'mochii もちい'],
  displayMeanings: ['mochi rice cake'],
  fullDisplayMeanings: ['mochi rice cake'],
  meanings: ['mochi rice cake']
},
{
  id: 1159,
  kanjiChar: '魯',
  onyomi: ['ro ロ'],
  kunyomi: ['oroka おろか'],
  displayMeanings: ['foolish', 'Russia'],
  fullDisplayMeanings: ['foolish', 'Russia'],
  meanings: ['foolish', 'Russia']
},
{
  id: 1160,
  kanjiChar: '硝',
  onyomi: ['shou ショウ'],
  kunyomi: [],
  displayMeanings: ['nitrate', 'saltpeter'],
  fullDisplayMeanings: ['nitrate', 'saltpeter'],
  meanings: ['nitrate', 'saltpeter']
},
{
  id: 1161,
  kanjiChar: '牡',
  onyomi: ['bo ボ', 'bou ボウ'],
  kunyomi: ['osu おす', 'o- お-', 'on- おん-'],
  displayMeanings: ['male'],
  fullDisplayMeanings: ['male'],
  meanings: ['male']
},
{
  id: 1162,
  kanjiChar: '箸',
  onyomi: ['cho チョ', 'chaku チャク'],
  kunyomi: ['hashi はし'],
  displayMeanings: ['chopsticks'],
  fullDisplayMeanings: ['chopsticks'],
  meanings: ['chopsticks']
},
{
  id: 1163,
  kanjiChar: '勅',
  onyomi: ['choku チョク'],
  kunyomi: ['imashi(meru) いまし(める)', 'mikotonori みことのり'],
  displayMeanings: ['imperial order'],
  fullDisplayMeanings: ['imperial order'],
  meanings: ['imperial order']
},
{
  id: 1164,
  kanjiChar: '芹',
  onyomi: ['kin キン'],
  kunyomi: ['seri せり'],
  displayMeanings: ['parsley'],
  fullDisplayMeanings: ['parsley'],
  meanings: ['parsley']
},
{
  id: 1165,
  kanjiChar: '杏',
  onyomi: ['kyou キョウ', 'an アン', 'kou コウ'],
  kunyomi: ['anzu あんず'],
  displayMeanings: ['apricot'],
  fullDisplayMeanings: ['apricot'],
  meanings: ['apricot']
},
{
  id: 1166,
  kanjiChar: '迦',
  onyomi: ['ka カ', 'ke ケ'],
  kunyomi: [],
  displayMeanings: ['(used phonetically)'],
  fullDisplayMeanings: ['(used phonetically)'],
  meanings: ['(used phonetically)']
},
{
  id: 1167,
  kanjiChar: '棺',
  onyomi: ['kan カン'],
  kunyomi: [],
  displayMeanings: ['coffin', 'casket'],
  fullDisplayMeanings: ['coffin', 'casket'],
  meanings: ['coffin', 'casket']
},
{
  id: 1168,
  kanjiChar: '儒',
  onyomi: ['ju ジュ'],
  kunyomi: [],
  displayMeanings: ['Confucian'],
  fullDisplayMeanings: ['Confucian'],
  meanings: ['Confucian']
},
{
  id: 1169,
  kanjiChar: '鳳',
  onyomi: ['hou ホウ', 'fuu フウ'],
  kunyomi: [],
  displayMeanings: ['male mythical bird'],
  fullDisplayMeanings: ['male mythical bird'],
  meanings: ['male mythical bird']
},
{
  id: 1170,
  kanjiChar: '馨',
  onyomi: ['kei ケイ', 'kyou キョウ'],
  kunyomi: ['kao(ru) かお(る)', 'kaori かおり'],
  displayMeanings: ['fragrant', 'balmy'],
  fullDisplayMeanings: ['fragrant', 'balmy', 'favourable'],
  meanings: ['fragrant', 'balmy', 'favourable']
},
{
  id: 1171,
  kanjiChar: '斑',
  onyomi: ['han ハン'],
  kunyomi: ['fu ふ', 'madara まだら'],
  displayMeanings: ['spot', 'blemish'],
  fullDisplayMeanings: ['spot', 'blemish', 'speck', 'patches'],
  meanings: ['spot', 'blemish', 'speck', 'patches']
},
{
  id: 1172,
  kanjiChar: '蔭',
  onyomi: ['in イン', 'on オン'],
  kunyomi: ['kage かげ'],
  displayMeanings: ['shade', 'shadow'],
  fullDisplayMeanings: ['shade', 'shadow', 'backing assistance'],
  meanings: ['shade', 'shadow', 'backing assistance']
},
{
  id: 1173,
  kanjiChar: '焉',
  onyomi: ['en エン'],
  kunyomi: ['izuku(nzo) いずく(んぞ)', 'kokoni ここに', 'kore これ'],
  displayMeanings: ['how', 'why'],
  fullDisplayMeanings: ['how', 'why', 'then'],
  meanings: ['how', 'why', 'then']
},
{
  id: 1174,
  kanjiChar: '慧',
  onyomi: ['kei ケイ', 'e エ'],
  kunyomi: ['satoi さとい'],
  displayMeanings: ['wise'],
  fullDisplayMeanings: ['wise'],
  meanings: ['wise']
},
{
  id: 1175,
  kanjiChar: '祇',
  onyomi: ['gi ギ', 'ki キ', 'shi シ'],
  kunyomi: ['kunitsukami くにつかみ', 'tada ただ', 'masani まさに'],
  displayMeanings: ['national or local god', 'peaceful'],
  fullDisplayMeanings: ['national or local god', 'peaceful', 'great'],
  meanings: ['national or local god', 'peaceful', 'great']
},
{
  id: 1176,
  kanjiChar: '摯',
  onyomi: ['shi シ'],
  kunyomi: ['ita(ru) いた(る)', 'tsuka(mu) つか(む)', 'nie にえ'],
  displayMeanings: ['gift', 'seriousness'],
  fullDisplayMeanings: ['gift', 'seriousness'],
  meanings: ['gift', 'seriousness']
},
{
  id: 1177,
  kanjiChar: '愁',
  onyomi: ['shuu シュウ'],
  kunyomi: ['ure(eru) うれ(える)', 'ure(i) うれ(い)'],
  displayMeanings: ['distress', 'grieve'],
  fullDisplayMeanings: ['distress', 'grieve', 'lament', 'be anxious'],
  meanings: ['distress', 'grieve', 'lament', 'be anxious']
},
{
  id: 1178,
  kanjiChar: '鷺',
  onyomi: ['ro ロ'],
  kunyomi: ['sagi さぎ'],
  displayMeanings: ['heron'],
  fullDisplayMeanings: ['heron'],
  meanings: ['heron']
},
{
  id: 1179,
  kanjiChar: '楼',
  onyomi: ['rou ロウ'],
  kunyomi: ['takadono たかどの'],
  displayMeanings: ['watchtower', 'lookout'],
  fullDisplayMeanings: ['watchtower', 'lookout', 'high building'],
  meanings: ['watchtower', 'lookout', 'high building']
},
{
  id: 1180,
  kanjiChar: '彬',
  onyomi: ['hin ヒン', 'fun フン'],
  kunyomi: ['uruwa(shii) うるわ(しい)', 'aki(raka) あき(らか)'],
  displayMeanings: ['refined', 'gentle'],
  fullDisplayMeanings: ['refined', 'gentle'],
  meanings: ['refined', 'gentle']
},
{
  id: 1181,
  kanjiChar: '袴',
  onyomi: ['ko コ', 'ku ク'],
  kunyomi: ['hakama はかま', 'zubon ずぼん'],
  displayMeanings: ["men's formal divided skirt"],
  fullDisplayMeanings: ["men's formal divided skirt"],
  meanings: ["men's formal divided skirt"]
},
{
  id: 1182,
  kanjiChar: '匡',
  onyomi: ['kyou キョウ', 'ou オウ'],
  kunyomi: ['suku(u) すく(う)', 'tada(su) ただ(す)'],
  displayMeanings: ['correct', 'save'],
  fullDisplayMeanings: ['correct', 'save', 'assist'],
  meanings: ['correct', 'save', 'assist']
},
{
  id: 1183,
  kanjiChar: '眉',
  onyomi: ['bi ビ', 'mi ミ'],
  kunyomi: ['mayu まゆ'],
  displayMeanings: ['eyebrow'],
  fullDisplayMeanings: ['eyebrow'],
  meanings: ['eyebrow']
},
{
  id: 1184,
  kanjiChar: '苅',
  onyomi: ['gai ガイ', 'kai カイ'],
  kunyomi: ['ka(ru) か(る)'],
  displayMeanings: ['cutting (grass)'],
  fullDisplayMeanings: ['cutting (grass)'],
  meanings: ['cutting (grass)']
},
{
  id: 1185,
  kanjiChar: '讃',
  onyomi: ['san サン'],
  kunyomi: ['ho(meru) ほ(める)', 'tata(eru) たた(える)'],
  displayMeanings: ['praise', 'title on a picture'],
  fullDisplayMeanings: ['praise', 'title on a picture'],
  meanings: ['praise', 'title on a picture']
},
{
  id: 1186,
  kanjiChar: '尹',
  onyomi: ['in イン'],
  kunyomi: ['osa おさ', 'tada(su) ただ(す)'],
  displayMeanings: ['an official rank'],
  fullDisplayMeanings: ['an official rank'],
  meanings: ['an official rank']
},
{
  id: 1187,
  kanjiChar: '欽',
  onyomi: ['kin キン', 'kon コン'],
  kunyomi: ['tsutsushi(mu) つつし(む)'],
  displayMeanings: ['respect', 'revere'],
  fullDisplayMeanings: ['respect', 'revere', 'long for'],
  meanings: ['respect', 'revere', 'long for']
},
{
  id: 1188,
  kanjiChar: '薪',
  onyomi: ['shin シン'],
  kunyomi: ['takigi たきぎ', 'maki まき'],
  displayMeanings: ['fuel', 'firewood'],
  fullDisplayMeanings: ['fuel', 'firewood', 'kindling'],
  meanings: ['fuel', 'firewood', 'kindling']
},
{
  id: 1189,
  kanjiChar: '湛',
  onyomi: ['tan タン', 'chin チン', 'jin ジン', 'sen セン'],
  kunyomi: ['shizu(mu) しず(む)', 'tata(eru) たた(える)'],
  displayMeanings: ['fill', 'wear (a smile)'],
  fullDisplayMeanings: ['fill', 'wear (a smile)', 'clear', 'pure', 'dense', 'deep'],
  meanings: ['fill', 'wear (a smile)', 'clear', 'pure', 'dense', 'deep']
},
{
  id: 1190,
  kanjiChar: '堆',
  onyomi: ['tai タイ', 'tsui ツイ'],
  kunyomi: ['uzutaka(i) うずたか(い)'],
  displayMeanings: ['piled high'],
  fullDisplayMeanings: ['piled high'],
  meanings: ['piled high']
},
{
  id: 1191,
  kanjiChar: '狐',
  onyomi: ['ko コ'],
  kunyomi: ['kitsune きつね'],
  displayMeanings: ['fox'],
  fullDisplayMeanings: ['fox'],
  meanings: ['fox']
},
{
  id: 1192,
  kanjiChar: '褐',
  onyomi: ['katsu カツ'],
  kunyomi: [],
  displayMeanings: ['brown', 'woollen kimono'],
  fullDisplayMeanings: ['brown', 'woollen kimono'],
  meanings: ['brown', 'woollen kimono']
},
{
  id: 1193,
  kanjiChar: '鴎',
  onyomi: ['ou オウ'],
  kunyomi: ['kamome かもめ'],
  displayMeanings: ['seagull'],
  fullDisplayMeanings: ['seagull'],
  meanings: ['seagull']
},
{
  id: 1194,
  kanjiChar: '瀋',
  onyomi: ['shin シン'],
  kunyomi: [],
  displayMeanings: ['juice', 'broth'],
  fullDisplayMeanings: ['juice', 'broth'],
  meanings: ['juice', 'broth']
},
{
  id: 1195,
  kanjiChar: '挺',
  onyomi: ['chou チョウ', 'tei テイ'],
  kunyomi: ['nu(ku) ぬ(く)'],
  displayMeanings: ['bravely volunteer', 'counter for guns'],
  fullDisplayMeanings: ['bravely volunteer', 'counter for guns', 'inksticks', 'palanquins'],
  meanings: ['bravely volunteer', 'counter for guns', 'inksticks', 'palanquins']
},
{
  id: 1196,
  kanjiChar: '賜',
  onyomi: ['shi シ'],
  kunyomi: ['tamawa(ru) たまわ(る)', 'tama(u) たま(う)', 'tamo(u) たも(う)'],
  displayMeanings: ['grant', 'gift'],
  fullDisplayMeanings: ['grant', 'gift', 'boon', 'results'],
  meanings: ['grant', 'gift', 'boon', 'results']
},
{
  id: 1197,
  kanjiChar: '嵯',
  onyomi: ['sa サ', 'shi シ'],
  kunyomi: [],
  displayMeanings: ['steep', 'craggy'],
  fullDisplayMeanings: ['steep', 'craggy', 'rugged'],
  meanings: ['steep', 'craggy', 'rugged']
},
{
  id: 1198,
  kanjiChar: '雁',
  onyomi: ['gan ガン'],
  kunyomi: ['kari かり', 'karigane かりがね'],
  displayMeanings: ['wild goose'],
  fullDisplayMeanings: ['wild goose'],
  meanings: ['wild goose']
},
{
  id: 1199,
  kanjiChar: '佃',
  onyomi: ['ten テン', 'den デン'],
  kunyomi: ['tsukuda つくだ'],
  displayMeanings: ['cultivated rice field'],
  fullDisplayMeanings: ['cultivated rice field'],
  meanings: ['cultivated rice field']
},
{
  id: 1200,
  kanjiChar: '綜',
  onyomi: ['sou ソウ'],
  kunyomi: ['osa(meru) おさ(める)', 'su(beru) す(べる)'],
  displayMeanings: ['rule', 'synthesize'],
  fullDisplayMeanings: ['rule', 'synthesize'],
  meanings: ['rule', 'synthesize']
},
{
  id: 1201,
  kanjiChar: '繕',
  onyomi: ['zen ゼン'],
  kunyomi: ['tsukuro(u) つくろ(う)'],
  displayMeanings: ['darning', 'repair'],
  fullDisplayMeanings: ['darning', 'repair', 'mend', 'trim', 'tidy up', 'adjust'],
  meanings: ['darning', 'repair', 'mend', 'trim', 'tidy up', 'adjust']
},
{
  id: 1202,
  kanjiChar: '狛',
  onyomi: ['haku ハク'],
  kunyomi: ['koma こま'],
  displayMeanings: ['archaic part of Korea', 'lion-dog shrine guards'],
  fullDisplayMeanings: ['archaic part of Korea', 'lion-dog shrine guards'],
  meanings: ['archaic part of Korea', 'lion-dog shrine guards']
},
{
  id: 1203,
  kanjiChar: '壷',
  onyomi: ['ko コ'],
  kunyomi: ['tsubo つぼ'],
  displayMeanings: ['jar', 'pot'],
  fullDisplayMeanings: ['jar', 'pot', 'hinge knuckle', "one's aim"],
  meanings: ['jar', 'pot', 'hinge knuckle', "one's aim"]
},
{
  id: 1204,
  kanjiChar: '橿',
  onyomi: ['kyou キョウ'],
  kunyomi: ['kashi かし', 'mochinoki もちのき'],
  displayMeanings: ['oak'],
  fullDisplayMeanings: ['oak'],
  meanings: ['oak']
},
{
  id: 1205,
  kanjiChar: '栓',
  onyomi: ['sen セン'],
  kunyomi: [],
  displayMeanings: ['plug', 'bolt'],
  fullDisplayMeanings: ['plug', 'bolt', 'cork', 'bung', 'stopper'],
  meanings: ['plug', 'bolt', 'cork', 'bung', 'stopper']
},
{
  id: 1206,
  kanjiChar: '翠',
  onyomi: ['sui スイ'],
  kunyomi: ['kawasemi かわせみ', 'midori みどり'],
  displayMeanings: ['green', 'kingfisher'],
  fullDisplayMeanings: ['green', 'kingfisher'],
  meanings: ['green', 'kingfisher']
},
{
  id: 1207,
  kanjiChar: '鮎',
  onyomi: ['den デン', 'nen ネン'],
  kunyomi: ['ayu あゆ', 'namazu なまず'],
  displayMeanings: ['freshwater trout', 'smelt'],
  fullDisplayMeanings: ['freshwater trout', 'smelt'],
  meanings: ['freshwater trout', 'smelt']
},
{
  id: 1208,
  kanjiChar: '芯',
  onyomi: ['shin シン'],
  kunyomi: [],
  displayMeanings: ['wick'],
  fullDisplayMeanings: ['wick'],
  meanings: ['wick']
},
{
  id: 1209,
  kanjiChar: '蜜',
  onyomi: ['mitsu ミツ', 'bitsu ビツ'],
  kunyomi: [],
  displayMeanings: ['honey', 'nectar'],
  fullDisplayMeanings: ['honey', 'nectar', 'molasses'],
  meanings: ['honey', 'nectar', 'molasses']
},
{
  id: 1210,
  kanjiChar: '播',
  onyomi: ['ha ハ', 'ban バン', 'han ハン'],
  kunyomi: ['ma(ku) ま(く)'],
  displayMeanings: ['plant', 'sow'],
  fullDisplayMeanings: ['plant', 'sow'],
  meanings: ['plant', 'sow']
},
{
  id: 1211,
  kanjiChar: '榛',
  onyomi: ['shin シン', 'han ハン'],
  kunyomi: ['hashibami はしばみ', 'hari はり'],
  displayMeanings: ['hazelnut', 'filbert'],
  fullDisplayMeanings: ['hazelnut', 'filbert'],
  meanings: ['hazelnut', 'filbert']
},
{
  id: 1212,
  kanjiChar: '凹',
  onyomi: ['ou オウ'],
  kunyomi: ['kubo(mu) くぼ(む)', 'heko(mu) へこ(む)', 'boko ぼこ'],
  displayMeanings: ['concave', 'hollow'],
  fullDisplayMeanings: ['concave', 'hollow', 'sunken'],
  meanings: ['concave', 'hollow', 'sunken']
},
{
  id: 1213,
  kanjiChar: '艶',
  onyomi: ['en エン'],
  kunyomi: ['tsuya つや', 'nama(mekashii) なま(めかしい)', 'ade(yaka) あで(やか)', 'tsuya(meku) つや(めく)'],
  displayMeanings: ['glossy', 'luster'],
  fullDisplayMeanings: ['glossy', 'luster', 'glaze', 'polish', 'charm', 'colorful', 'captivating'],
  meanings: ['glossy', 'luster', 'glaze', 'polish', 'charm', 'colorful', 'captivating']
},
{
  id: 1214,
  kanjiChar: '帖',
  onyomi: ['chou チョウ', 'jou ジョウ'],
  kunyomi: ['kakimono かきもの'],
  displayMeanings: ['quire (of paper)', 'bundle of seaweed'],
  fullDisplayMeanings: ['quire (of paper)', 'bundle of seaweed', 'counter for screens', 'notebook'],
  meanings: ['quire (of paper)', 'bundle of seaweed', 'counter for screens', 'notebook']
},
{
  id: 1215,
  kanjiChar: '桶',
  onyomi: ['you ヨウ', 'tou トウ'],
  kunyomi: ['oke おけ'],
  displayMeanings: ['tub', 'bucket'],
  fullDisplayMeanings: ['tub', 'bucket'],
  meanings: ['tub', 'bucket']
},
{
  id: 1216,
  kanjiChar: '惣',
  onyomi: ['sou ソウ'],
  kunyomi: ['sube(te) すべ(て)'],
  displayMeanings: ['all'],
  fullDisplayMeanings: ['all'],
  meanings: ['all']
},
{
  id: 1217,
  kanjiChar: '股',
  onyomi: ['ko コ'],
  kunyomi: ['mata また', 'momo もも'],
  displayMeanings: ['thigh', 'crotch'],
  fullDisplayMeanings: ['thigh', 'crotch'],
  meanings: ['thigh', 'crotch']
},
{
  id: 1218,
  kanjiChar: '匂',
  onyomi: [],
  kunyomi: ['nio(u) にお(う)', 'nio(i) にお(い)', 'nio(waseru) にお(わせる)'],
  displayMeanings: ['fragrant', 'stink'],
  fullDisplayMeanings: ['fragrant', 'stink', 'glow', 'insinuate', '(kokuji)'],
  meanings: ['fragrant', 'stink', 'glow', 'insinuate', '(kokuji)']
},
{
  id: 1219,
  kanjiChar: '鞍',
  onyomi: ['an アン'],
  kunyomi: ['kura くら'],
  displayMeanings: ['saddle'],
  fullDisplayMeanings: ['saddle'],
  meanings: ['saddle']
},
{
  id: 1220,
  kanjiChar: '蔦',
  onyomi: ['chou チョウ'],
  kunyomi: ['tsuta つた'],
  displayMeanings: ['vine', 'ivy'],
  fullDisplayMeanings: ['vine', 'ivy'],
  meanings: ['vine', 'ivy']
},
{
  id: 1221,
  kanjiChar: '玩',
  onyomi: ['gan ガン'],
  kunyomi: ['mochiaso(bu) もちあそ(ぶ)', 'moteaso(bu) もてあそ(ぶ)'],
  displayMeanings: ['play', 'take pleasure in'],
  fullDisplayMeanings: ['play', 'take pleasure in', 'trifle with', 'make sport of'],
  meanings: ['play', 'take pleasure in', 'trifle with', 'make sport of']
},
{
  id: 1222,
  kanjiChar: '萱',
  onyomi: ['ken ケン'],
  kunyomi: ['kaya かや', 'kanzou かんぞう'],
  displayMeanings: ['miscanthus reed'],
  fullDisplayMeanings: ['miscanthus reed'],
  meanings: ['miscanthus reed']
},
{
  id: 1223,
  kanjiChar: '梯',
  onyomi: ['tei テイ', 'tai タイ'],
  kunyomi: ['hashigo はしご'],
  displayMeanings: ['ladder', 'stairs'],
  fullDisplayMeanings: ['ladder', 'stairs', 'insatiable drinking'],
  meanings: ['ladder', 'stairs', 'insatiable drinking']
},
{
  id: 1224,
  kanjiChar: '雫',
  onyomi: ['da ダ'],
  kunyomi: ['shizuku しずく'],
  displayMeanings: ['drop', 'trickle'],
  fullDisplayMeanings: ['drop', 'trickle', 'dripping', '(kokuji)'],
  meanings: ['drop', 'trickle', 'dripping', '(kokuji)']
},
{
  id: 1225,
  kanjiChar: '絆',
  onyomi: ['han ハン'],
  kunyomi: ['kizuna きずな', 'hoda(su) ほだ(す)', 'tsuna(gu) つな(ぐ)'],
  displayMeanings: ['bonds', 'fetters'],
  fullDisplayMeanings: ['bonds', 'fetters'],
  meanings: ['bonds', 'fetters']
},
{
  id: 1226,
  kanjiChar: '錬',
  onyomi: ['ren レン'],
  kunyomi: ['ne(ru) ね(る)'],
  displayMeanings: ['tempering', 'refine'],
  fullDisplayMeanings: ['tempering', 'refine', 'drill', 'train', 'polish'],
  meanings: ['tempering', 'refine', 'drill', 'train', 'polish']
},
{
  id: 1227,
  kanjiChar: '湊',
  onyomi: ['sou ソウ'],
  kunyomi: ['minato みなと', 'atsu(maru) あつ(まる)'],
  displayMeanings: ['port', 'harbor'],
  fullDisplayMeanings: ['port', 'harbor'],
  meanings: ['port', 'harbor']
},
{
  id: 1228,
  kanjiChar: '蜂',
  onyomi: ['hou ホウ'],
  kunyomi: ['hachi はち'],
  displayMeanings: ['bee', 'wasp'],
  fullDisplayMeanings: ['bee', 'wasp', 'hornet'],
  meanings: ['bee', 'wasp', 'hornet']
},
{
  id: 1229,
  kanjiChar: '隼',
  onyomi: ['shun シュン', 'jun ジュン'],
  kunyomi: ['hayabusa はやぶさ'],
  displayMeanings: ['falcon'],
  fullDisplayMeanings: ['falcon'],
  meanings: ['falcon']
},
{
  id: 1230,
  kanjiChar: '舵',
  onyomi: ['da ダ', 'ta タ'],
  kunyomi: ['kaji かじ'],
  displayMeanings: ['rudder', 'helm'],
  fullDisplayMeanings: ['rudder', 'helm', 'wheel'],
  meanings: ['rudder', 'helm', 'wheel']
},
{
  id: 1231,
  kanjiChar: '渚',
  onyomi: ['sho ショ'],
  kunyomi: ['nagisa なぎさ'],
  displayMeanings: ['strand', 'beach'],
  fullDisplayMeanings: ['strand', 'beach', 'shore'],
  meanings: ['strand', 'beach', 'shore']
},
{
  id: 1232,
  kanjiChar: '珂',
  onyomi: ['ka カ'],
  kunyomi: [],
  displayMeanings: ['jewel'],
  fullDisplayMeanings: ['jewel'],
  meanings: ['jewel']
},
{
  id: 1233,
  kanjiChar: '煥',
  onyomi: ['kan カン'],
  kunyomi: ['akiraka あきらか'],
  displayMeanings: ['shine'],
  fullDisplayMeanings: ['shine'],
  meanings: ['shine']
},
{
  id: 1234,
  kanjiChar: '衷',
  onyomi: ['chuu チュウ'],
  kunyomi: [],
  displayMeanings: ['inmost', 'heart'],
  fullDisplayMeanings: ['inmost', 'heart', 'mind', 'inside'],
  meanings: ['inmost', 'heart', 'mind', 'inside']
},
{
  id: 1235,
  kanjiChar: '逐',
  onyomi: ['chiku チク'],
  kunyomi: [],
  displayMeanings: ['pursue', 'drive away'],
  fullDisplayMeanings: ['pursue', 'drive away', 'chase', 'accomplish', 'attain', 'commit'],
  meanings: ['pursue', 'drive away', 'chase', 'accomplish', 'attain', 'commit']
},
{
  id: 1236,
  kanjiChar: '斥',
  onyomi: ['seki セキ'],
  kunyomi: ['shirizo(keru) しりぞ(ける)'],
  displayMeanings: ['reject', 'retreat'],
  fullDisplayMeanings: ['reject', 'retreat', 'recede', 'withdraw', 'repel', 'repulse'],
  meanings: ['reject', 'retreat', 'recede', 'withdraw', 'repel', 'repulse']
},
{
  id: 1237,
  kanjiChar: '稀',
  onyomi: ['ki キ', 'ke ケ'],
  kunyomi: ['mare まれ', 'mabara まばら'],
  displayMeanings: ['rare', 'phenomenal'],
  fullDisplayMeanings: ['rare', 'phenomenal', 'dilute (acid)'],
  meanings: ['rare', 'phenomenal', 'dilute (acid)']
},
{
  id: 1238,
  kanjiChar: '癌',
  onyomi: ['gan ガン'],
  kunyomi: [],
  displayMeanings: ['cancer', 'cancerous evil'],
  fullDisplayMeanings: ['cancer', 'cancerous evil'],
  meanings: ['cancer', 'cancerous evil']
},
{
  id: 1239,
  kanjiChar: '峨',
  onyomi: ['ga ガ'],
  kunyomi: ['kewa(shii) けわ(しい)'],
  displayMeanings: ['high mountain'],
  fullDisplayMeanings: ['high mountain'],
  meanings: ['high mountain']
},
{
  id: 1240,
  kanjiChar: '嘘',
  onyomi: ['kyo キョ', 'ko コ'],
  kunyomi: ['uso うそ', 'fu(ku) ふ(く)'],
  displayMeanings: ['lie', 'falsehood'],
  fullDisplayMeanings: ['lie', 'falsehood'],
  meanings: ['lie', 'falsehood']
},
{
  id: 1241,
  kanjiChar: '旛',
  onyomi: ['hen ヘン', 'han ハン'],
  kunyomi: ['hata はた'],
  displayMeanings: ['flag'],
  fullDisplayMeanings: ['flag'],
  meanings: ['flag']
},
{
  id: 1242,
  kanjiChar: '篭',
  onyomi: ['rou ロウ', 'ru ル'],
  kunyomi: ['kago かご', 'ko(meru) こ(める)', 'komo(ru) こも(る)', 'ko(mu) こ(む)'],
  displayMeanings: ['seclude oneself', 'cage'],
  fullDisplayMeanings: ['seclude oneself', 'cage', 'coop', 'implied'],
  meanings: ['seclude oneself', 'cage', 'coop', 'implied']
},
{
  id: 1243,
  kanjiChar: '芙',
  onyomi: ['fu フ'],
  kunyomi: [],
  displayMeanings: ['lotus', 'Mt Fuji'],
  fullDisplayMeanings: ['lotus', 'Mt Fuji'],
  meanings: ['lotus', 'Mt Fuji']
},
{
  id: 1244,
  kanjiChar: '詔',
  onyomi: ['shou ショウ'],
  kunyomi: ['mikotonori みことのり'],
  displayMeanings: ['imperial edict'],
  fullDisplayMeanings: ['imperial edict'],
  meanings: ['imperial edict']
},
{
  id: 1245,
  kanjiChar: '皐',
  onyomi: ['kou コウ'],
  kunyomi: ['satsuki さつき'],
  displayMeanings: ['swamp', 'shore'],
  fullDisplayMeanings: ['swamp', 'shore', 'fifth month'],
  meanings: ['swamp', 'shore', 'fifth month']
},
{
  id: 1246,
  kanjiChar: '雛',
  onyomi: ['suu スウ', 'su ス', 'ju ジュ'],
  kunyomi: ['hina ひな', 'hiyoko ひよこ'],
  displayMeanings: ['chick', 'squab'],
  fullDisplayMeanings: ['chick', 'squab', 'duckling', 'doll'],
  meanings: ['chick', 'squab', 'duckling', 'doll']
},
{
  id: 1247,
  kanjiChar: '娼',
  onyomi: ['shou ショウ'],
  kunyomi: ['asobime あそびめ'],
  displayMeanings: ['prostitute'],
  fullDisplayMeanings: ['prostitute'],
  meanings: ['prostitute']
},
{
  id: 1248,
  kanjiChar: '篆',
  onyomi: ['ten テン'],
  kunyomi: [],
  displayMeanings: ['seal-style characters'],
  fullDisplayMeanings: ['seal-style characters'],
  meanings: ['seal-style characters']
},
{
  id: 1249,
  kanjiChar: '鮫',
  onyomi: ['kou コウ'],
  kunyomi: ['same さめ', 'mizuchi みずち'],
  displayMeanings: ['shark'],
  fullDisplayMeanings: ['shark'],
  meanings: ['shark']
},
{
  id: 1250,
  kanjiChar: '椅',
  onyomi: ['i イ'],
  kunyomi: [],
  displayMeanings: ['chair'],
  fullDisplayMeanings: ['chair'],
  meanings: ['chair']
},
{
  id: 1251,
  kanjiChar: '惟',
  onyomi: ['i イ', 'yui ユイ'],
  kunyomi: ['omo(nmiru) おも(んみる)', 'kore これ', 'omo(uni) おも(うに)'],
  displayMeanings: ['consider', 'reflect'],
  fullDisplayMeanings: ['consider', 'reflect', 'think'],
  meanings: ['consider', 'reflect', 'think']
},
{
  id: 1252,
  kanjiChar: '牌',
  onyomi: ['hai ハイ'],
  kunyomi: ['pai ぱい', 'fuda ふだ'],
  displayMeanings: ['label', 'signboard'],
  fullDisplayMeanings: ['label', 'signboard', 'medal', 'mahjong tiles'],
  meanings: ['label', 'signboard', 'medal', 'mahjong tiles']
},
{
  id: 1253,
  kanjiChar: '宕',
  onyomi: ['tou トウ'],
  kunyomi: ['sugiru すぎる'],
  displayMeanings: ['cave'],
  fullDisplayMeanings: ['cave'],
  meanings: ['cave']
},
{
  id: 1254,
  kanjiChar: '喧',
  onyomi: ['ken ケン'],
  kunyomi: ['yakama(shii) やかま(しい)', 'kamabisu(shii) かまびす(しい)'],
  displayMeanings: ['noisy', 'boisterous'],
  fullDisplayMeanings: ['noisy', 'boisterous'],
  meanings: ['noisy', 'boisterous']
},
{
  id: 1255,
  kanjiChar: '佑',
  onyomi: ['yuu ユウ', 'u ウ'],
  kunyomi: ['tasu(keru) たす(ける)'],
  displayMeanings: ['help', 'assist'],
  fullDisplayMeanings: ['help', 'assist'],
  meanings: ['help', 'assist']
},
{
  id: 1256,
  kanjiChar: '蒋',
  onyomi: ['shou ショウ', 'sou ソウ'],
  kunyomi: ['makomo まこも', 'hage(masu) はげ(ます)'],
  displayMeanings: ['reed'],
  fullDisplayMeanings: ['reed'],
  meanings: ['reed']
},
{
  id: 1257,
  kanjiChar: '樟',
  onyomi: ['shou ショウ'],
  kunyomi: ['kusu くす'],
  displayMeanings: ['camphor'],
  fullDisplayMeanings: ['camphor'],
  meanings: ['camphor']
},
{
  id: 1258,
  kanjiChar: '耀',
  onyomi: ['you ヨウ'],
  kunyomi: ['kagaya(ku) かがや(く)', 'hikari ひかり'],
  displayMeanings: ['shine', 'sparkle'],
  fullDisplayMeanings: ['shine', 'sparkle', 'gleam', 'twinkle'],
  meanings: ['shine', 'sparkle', 'gleam', 'twinkle']
},
{
  id: 1259,
  kanjiChar: '黛',
  onyomi: ['tai タイ'],
  kunyomi: ['mayuzumi まゆずみ'],
  displayMeanings: ['blackened eyebrows'],
  fullDisplayMeanings: ['blackened eyebrows'],
  meanings: ['blackened eyebrows']
},
{
  id: 1260,
  kanjiChar: '叱',
  onyomi: ['shitsu シツ', 'shichi シチ', 'ka カ'],
  kunyomi: ['shika(ru) しか(る)'],
  displayMeanings: ['scold', 'reprove'],
  fullDisplayMeanings: ['scold', 'reprove'],
  meanings: ['scold', 'reprove']
},
{
  id: 1261,
  kanjiChar: '櫛',
  onyomi: ['shitsu シツ'],
  kunyomi: ['kushi くし', 'kushikezu(ru) くしけず(る)'],
  displayMeanings: ['comb'],
  fullDisplayMeanings: ['comb'],
  meanings: ['comb']
},
{
  id: 1262,
  kanjiChar: '渥',
  onyomi: ['aku アク'],
  kunyomi: ['atsu(i) あつ(い)', 'uruo(u) うるお(う)'],
  displayMeanings: ['kindness', 'moisten'],
  fullDisplayMeanings: ['kindness', 'moisten'],
  meanings: ['kindness', 'moisten']
},
{
  id: 1263,
  kanjiChar: '挨',
  onyomi: ['ai アイ'],
  kunyomi: ['hira(ku) ひら(く)'],
  displayMeanings: ['approach', 'draw near'],
  fullDisplayMeanings: ['approach', 'draw near', 'push open'],
  meanings: ['approach', 'draw near', 'push open']
},
{
  id: 1264,
  kanjiChar: '憧',
  onyomi: ['shou ショウ', 'tou トウ', 'dou ドウ'],
  kunyomi: ['akoga(reru) あこが(れる)'],
  displayMeanings: ['yearn after', 'long for'],
  fullDisplayMeanings: ['yearn after', 'long for', 'aspire to', 'admire', 'adore'],
  meanings: ['yearn after', 'long for', 'aspire to', 'admire', 'adore']
},
{
  id: 1265,
  kanjiChar: '濡',
  onyomi: ['ju ジュ', 'nyu ニュ'],
  kunyomi: ['nure(ru) ぬれ(る)', 'uruo(i) うるお(い)'],
  displayMeanings: ['get wet', 'damp'],
  fullDisplayMeanings: ['get wet', 'damp', 'make love'],
  meanings: ['get wet', 'damp', 'make love']
},
{
  id: 1266,
  kanjiChar: '槍',
  onyomi: ['sou ソウ', 'shou ショウ'],
  kunyomi: ['yari やり'],
  displayMeanings: ['spear', 'lance'],
  fullDisplayMeanings: ['spear', 'lance', 'javelin'],
  meanings: ['spear', 'lance', 'javelin']
},
{
  id: 1267,
  kanjiChar: '宵',
  onyomi: ['shou ショウ'],
  kunyomi: ['yoi よい'],
  displayMeanings: ['wee hours', 'evening'],
  fullDisplayMeanings: ['wee hours', 'evening', 'early night'],
  meanings: ['wee hours', 'evening', 'early night']
},
{
  id: 1268,
  kanjiChar: '襄',
  onyomi: ['jou ジョウ', 'shou ショウ'],
  kunyomi: ['hara(u) はら(う)'],
  displayMeanings: ['rise', 'raise'],
  fullDisplayMeanings: ['rise', 'raise'],
  meanings: ['rise', 'raise']
},
{
  id: 1269,
  kanjiChar: '妄',
  onyomi: ['mou モウ', 'bou ボウ'],
  kunyomi: ['mida(rini) みだ(りに)'],
  displayMeanings: ['delusion', 'unnecessarily'],
  fullDisplayMeanings: ['delusion', 'unnecessarily', 'without authority', 'reckless'],
  meanings: ['delusion', 'unnecessarily', 'without authority', 'reckless']
},
{
  id: 1270,
  kanjiChar: '惇',
  onyomi: ['shun シュン', 'jun ジュン', 'ton トン'],
  kunyomi: ['atsu(i) あつ(い)'],
  displayMeanings: ['sincere', 'kind'],
  fullDisplayMeanings: ['sincere', 'kind', 'considerate'],
  meanings: ['sincere', 'kind', 'considerate']
},
{
  id: 1271,
  kanjiChar: '蛋',
  onyomi: ['tan タン'],
  kunyomi: [],
  displayMeanings: ['barbarian', 'egg'],
  fullDisplayMeanings: ['barbarian', 'egg'],
  meanings: ['barbarian', 'egg']
},
{
  id: 1272,
  kanjiChar: '脩',
  onyomi: ['shuu シュウ'],
  kunyomi: ['osa(meru) おさ(める)', 'naga(i) なが(い)', 'hojishi ほじし'],
  displayMeanings: ['dried meat'],
  fullDisplayMeanings: ['dried meat'],
  meanings: ['dried meat']
},
{
  id: 1273,
  kanjiChar: '笘',
  onyomi: ['sen セン', 'chou チョウ'],
  kunyomi: [],
  displayMeanings: ['whip', 'cane'],
  fullDisplayMeanings: ['whip', 'cane', 'wooden writing slate'],
  meanings: ['whip', 'cane', 'wooden writing slate']
},
{
  id: 1274,
  kanjiChar: '宍',
  onyomi: ['niku ニク', 'jiku ジク'],
  kunyomi: ['shishi しし'],
  displayMeanings: ['muscles', 'meat'],
  fullDisplayMeanings: ['muscles', 'meat'],
  meanings: ['muscles', 'meat']
},
{
  id: 1275,
  kanjiChar: '甫',
  onyomi: ['ho ホ', 'fu フ'],
  kunyomi: ['haji(mete) はじ(めて)'],
  displayMeanings: ['for the first time', 'not until'],
  fullDisplayMeanings: ['for the first time', 'not until'],
  meanings: ['for the first time', 'not until']
},
{
  id: 1276,
  kanjiChar: '酌',
  onyomi: ['shaku シャク'],
  kunyomi: ['ku(mu) く(む)'],
  displayMeanings: ['bar-tending', 'serving sake'],
  fullDisplayMeanings: ['bar-tending', 'serving sake', 'the host', 'draw (water)', 'ladle', 'scoop', 'pump'],
  meanings: ['bar-tending', 'serving sake', 'the host', 'draw (water)', 'ladle', 'scoop', 'pump']
},
{
  id: 1277,
  kanjiChar: '蚕',
  onyomi: ['san サン', 'ten テン'],
  kunyomi: ['kaiko かいこ', 'ko こ'],
  displayMeanings: ['silkworm'],
  fullDisplayMeanings: ['silkworm'],
  meanings: ['silkworm']
},
{
  id: 1278,
  kanjiChar: '壕',
  onyomi: ['kou コウ', 'gou ゴウ'],
  kunyomi: ['hori ほり'],
  displayMeanings: ['trench', 'dugout'],
  fullDisplayMeanings: ['trench', 'dugout', 'air raid shelter'],
  meanings: ['trench', 'dugout', 'air raid shelter']
},
{
  id: 1279,
  kanjiChar: '嬉',
  onyomi: ['ki キ'],
  kunyomi: ['ure(shii) うれ(しい)', 'tano(shimu) たの(しむ)'],
  displayMeanings: ['glad', 'pleased'],
  fullDisplayMeanings: ['glad', 'pleased', 'rejoice'],
  meanings: ['glad', 'pleased', 'rejoice']
},
{
  id: 1280,
  kanjiChar: '囃',
  onyomi: ['satsu サツ', 'sou ソウ'],
  kunyomi: ['haya(su) はや(す)', 'hayashi はやし'],
  displayMeanings: ['play (music)', 'accompany'],
  fullDisplayMeanings: ['play (music)', 'accompany', 'beat time', 'banter', 'jeer', 'applaud'],
  meanings: ['play (music)', 'accompany', 'beat time', 'banter', 'jeer', 'applaud']
},
{
  id: 1281,
  kanjiChar: '蒼',
  onyomi: ['sou ソウ'],
  kunyomi: ['ao(i) あお(い)'],
  displayMeanings: ['blue', 'pale'],
  fullDisplayMeanings: ['blue', 'pale'],
  meanings: ['blue', 'pale']
},
{
  id: 1282,
  kanjiChar: '餌',
  onyomi: ['ji ジ', 'ni ニ'],
  kunyomi: ['e え', 'eba えば', 'esa えさ', 'mochi もち'],
  displayMeanings: ['food', 'bait'],
  fullDisplayMeanings: ['food', 'bait', 'prey', 'tempting profit'],
  meanings: ['food', 'bait', 'prey', 'tempting profit']
},
{
  id: 1283,
  kanjiChar: '簗',
  onyomi: ['ryou リョウ'],
  kunyomi: ['yana やな'],
  displayMeanings: ['weir', 'fish trap'],
  fullDisplayMeanings: ['weir', 'fish trap', '(kokuji)'],
  meanings: ['weir', 'fish trap', '(kokuji)']
},
{
  id: 1284,
  kanjiChar: '峙',
  onyomi: ['ji ジ'],
  kunyomi: ['sobada(tsu) そばだ(つ)'],
  displayMeanings: ['tower', 'soar'],
  fullDisplayMeanings: ['tower', 'soar'],
  meanings: ['tower', 'soar']
},
{
  id: 1285,
  kanjiChar: '粥',
  onyomi: ['iku イク', 'shuku シュク', 'juku ジュク'],
  kunyomi: ['kayu かゆ', 'kai かい', 'hisa(gu) ひさ(ぐ)'],
  displayMeanings: ['rice gruel'],
  fullDisplayMeanings: ['rice gruel'],
  meanings: ['rice gruel']
},
{
  id: 1286,
  kanjiChar: '舘',
  onyomi: ['kan カン'],
  kunyomi: ['yakata やかた', 'tate たて'],
  displayMeanings: ['mansion', 'large building'],
  fullDisplayMeanings: ['mansion', 'large building', 'palace'],
  meanings: ['mansion', 'large building', 'palace']
},
{
  id: 1287,
  kanjiChar: '銕',
  onyomi: ['tetsu テツ'],
  kunyomi: ['kurogane くろがね'],
  displayMeanings: ['iron', 'strong'],
  fullDisplayMeanings: ['iron', 'strong', 'solid', 'firm'],
  meanings: ['iron', 'strong', 'solid', 'firm']
},
{
  id: 1288,
  kanjiChar: '鄒',
  onyomi: ['suu スウ', 'shu シュ', 'shuu シュウ'],
  kunyomi: [],
  displayMeanings: ['place name'],
  fullDisplayMeanings: ['place name'],
  meanings: ['place name']
},
{
  id: 1289,
  kanjiChar: '蜷',
  onyomi: ['ken ケン'],
  kunyomi: ['nina にな'],
  displayMeanings: ['an edible river snail'],
  fullDisplayMeanings: ['an edible river snail'],
  meanings: ['an edible river snail']
},
{
  id: 1290,
  kanjiChar: '暉',
  onyomi: ['ki キ'],
  kunyomi: ['kaga(yaku) かが(やく)'],
  displayMeanings: ['shine', 'light'],
  fullDisplayMeanings: ['shine', 'light'],
  meanings: ['shine', 'light']
},
{
  id: 1291,
  kanjiChar: '捧',
  onyomi: ['hou ホウ'],
  kunyomi: ['sasa(geru) ささ(げる)'],
  displayMeanings: ['lift up', 'give'],
  fullDisplayMeanings: ['lift up', 'give', 'offer', 'consecrate', 'sacrifice', 'dedicate'],
  meanings: ['lift up', 'give', 'offer', 'consecrate', 'sacrifice', 'dedicate']
},
{
  id: 1292,
  kanjiChar: '頒',
  onyomi: ['han ハン'],
  kunyomi: ['wa(katsu) わ(かつ)', 'wa(keru) わ(ける)'],
  displayMeanings: ['distribute', 'disseminate'],
  fullDisplayMeanings: ['distribute', 'disseminate', 'partition', 'understand'],
  meanings: ['distribute', 'disseminate', 'partition', 'understand']
},
{
  id: 1293,
  kanjiChar: '只',
  onyomi: ['shi シ'],
  kunyomi: ['tada ただ'],
  displayMeanings: ['only', 'free'],
  fullDisplayMeanings: ['only', 'free', 'in addition'],
  meanings: ['only', 'free', 'in addition']
},
{
  id: 1294,
  kanjiChar: '肢',
  onyomi: ['shi シ'],
  kunyomi: [],
  displayMeanings: ['limb', 'arms & legs'],
  fullDisplayMeanings: ['limb', 'arms & legs'],
  meanings: ['limb', 'arms & legs']
},
{
  id: 1295,
  kanjiChar: '箏',
  onyomi: ['sou ソウ', 'shou ショウ'],
  kunyomi: ['koto こと'],
  displayMeanings: ['a koto'],
  fullDisplayMeanings: ['a koto'],
  meanings: ['a koto']
},
{
  id: 1296,
  kanjiChar: '檀',
  onyomi: ['dan ダン', 'tan タン'],
  kunyomi: ['mayumi まゆみ'],
  displayMeanings: ['cedar', 'sandalwood'],
  fullDisplayMeanings: ['cedar', 'sandalwood', 'spindle tree'],
  meanings: ['cedar', 'sandalwood', 'spindle tree']
},
{
  id: 1297,
  kanjiChar: '鵠',
  onyomi: ['koku コク', 'kou コウ'],
  kunyomi: ['kugui くぐい', 'mato まと'],
  displayMeanings: ['swan'],
  fullDisplayMeanings: ['swan'],
  meanings: ['swan']
},
{
  id: 1298,
  kanjiChar: '凱',
  onyomi: ['gai ガイ', 'kai カイ'],
  kunyomi: ['kachidoki かちどき', 'yawaragu やわらぐ'],
  displayMeanings: ['victory song'],
  fullDisplayMeanings: ['victory song'],
  meanings: ['victory song']
},
{
  id: 1299,
  kanjiChar: '彗',
  onyomi: ['sui スイ', 'e エ', 'kei ケイ', 'sei セイ'],
  kunyomi: ['houki ほうき'],
  displayMeanings: ['comet'],
  fullDisplayMeanings: ['comet'],
  meanings: ['comet']
},
{
  id: 1300,
  kanjiChar: '謄',
  onyomi: ['tou トウ'],
  kunyomi: [],
  displayMeanings: ['mimeograph', 'copy'],
  fullDisplayMeanings: ['mimeograph', 'copy'],
  meanings: ['mimeograph', 'copy']
},
{
  id: 1301,
  kanjiChar: '諌',
  onyomi: ['kan カン'],
  kunyomi: ['isa(me) いさ(め)'],
  displayMeanings: ['admonish', 'dissuade'],
  fullDisplayMeanings: ['admonish', 'dissuade'],
  meanings: ['admonish', 'dissuade']
},
{
  id: 1302,
  kanjiChar: '樫',
  onyomi: ['kashi かし'],
  kunyomi: [],
  displayMeanings: ['evergreen oak'],
  fullDisplayMeanings: ['evergreen oak', '(kokuji)'],
  meanings: ['evergreen oak', '(kokuji)']
},
{
  id: 1303,
  kanjiChar: '噂',
  onyomi: ['son ソン'],
  kunyomi: ['uwasa うわさ'],
  displayMeanings: ['rumor', 'gossip'],
  fullDisplayMeanings: ['rumor', 'gossip', 'hearsay'],
  meanings: ['rumor', 'gossip', 'hearsay']
},
{
  id: 1304,
  kanjiChar: '脊',
  onyomi: ['seki セキ'],
  kunyomi: ['se せ', 'sei せい'],
  displayMeanings: ['stature', 'height'],
  fullDisplayMeanings: ['stature', 'height', 'spine'],
  meanings: ['stature', 'height', 'spine']
},
{
  id: 1305,
  kanjiChar: '牝',
  onyomi: ['hin ヒン'],
  kunyomi: ['mesu めす', 'me- め-', 'men めん'],
  displayMeanings: ['female'],
  fullDisplayMeanings: ['female'],
  meanings: ['female']
},
{
  id: 1306,
  kanjiChar: '梓',
  onyomi: ['shi シ'],
  kunyomi: ['azusa あずさ'],
  displayMeanings: ['catalpa tree', 'woodblock printing'],
  fullDisplayMeanings: ['catalpa tree', 'woodblock printing'],
  meanings: ['catalpa tree', 'woodblock printing']
},
{
  id: 1307,
  kanjiChar: '洛',
  onyomi: ['raku ラク'],
  kunyomi: [],
  displayMeanings: ['Kyoto', 'the capital'],
  fullDisplayMeanings: ['Kyoto', 'the capital'],
  meanings: ['Kyoto', 'the capital']
},
{
  id: 1308,
  kanjiChar: '醍',
  onyomi: ['dai ダイ', 'tai タイ', 'tei テイ'],
  kunyomi: [],
  displayMeanings: ['whey', 'good Buddhist teaching'],
  fullDisplayMeanings: ['whey', 'good Buddhist teaching'],
  meanings: ['whey', 'good Buddhist teaching']
},
{
  id: 1309,
  kanjiChar: '砦',
  onyomi: ['sai サイ'],
  kunyomi: ['toride とりで'],
  displayMeanings: ['fort', 'stronghold'],
  fullDisplayMeanings: ['fort', 'stronghold', 'entrenchments'],
  meanings: ['fort', 'stronghold', 'entrenchments']
},
{
  id: 1310,
  kanjiChar: '丑',
  onyomi: ['chuu チュウ'],
  kunyomi: ['ushi うし'],
  displayMeanings: ['sign of the ox', '1-3AM'],
  fullDisplayMeanings: ['sign of the ox or cow', '1-3AM', 'second sign of Chinese zodiac'],
  meanings: ['sign of the ox or cow', '1-3AM', 'second sign of Chinese zodiac']
},
{
  id: 1311,
  kanjiChar: '笏',
  onyomi: ['kotsu コツ'],
  kunyomi: ['shaku しゃく'],
  displayMeanings: ['mace', 'baton'],
  fullDisplayMeanings: ['mace', 'baton', 'scepter'],
  meanings: ['mace', 'baton', 'scepter']
},
{
  id: 1312,
  kanjiChar: '蕨',
  onyomi: ['ketsu ケツ'],
  kunyomi: ['warabi わらび'],
  displayMeanings: ['bracken', 'fernbrake'],
  fullDisplayMeanings: ['bracken', 'fernbrake'],
  meanings: ['bracken', 'fernbrake']
},
{
  id: 1313,
  kanjiChar: '噺',
  onyomi: ['hanashi はなし'],
  kunyomi: [],
  displayMeanings: ['talk'],
  fullDisplayMeanings: ['talk', '(kokuji)'],
  meanings: ['talk', '(kokuji)']
},
{
  id: 1314,
  kanjiChar: '抒',
  onyomi: ['jo ジョ', 'sho ショ'],
  kunyomi: ['ku(mu) く(む)', 'no(beru) の(べる)'],
  displayMeanings: ['tell', '10**24'],
  fullDisplayMeanings: ['tell', '10**24'],
  meanings: ['tell', '10**24']
},
{
  id: 1315,
  kanjiChar: '嗣',
  onyomi: ['shi シ'],
  kunyomi: [],
  displayMeanings: ['heir', 'succeed'],
  fullDisplayMeanings: ['heir', 'succeed'],
  meanings: ['heir', 'succeed']
},
{
  id: 1316,
  kanjiChar: '隈',
  onyomi: ['wai ワイ', 'e エ'],
  kunyomi: ['kuma くま', 'sumi すみ'],
  displayMeanings: ['corner', 'nook'],
  fullDisplayMeanings: ['corner', 'nook', 'recess'],
  meanings: ['corner', 'nook', 'recess']
},
{
  id: 1317,
  kanjiChar: '叶',
  onyomi: ['kyou キョウ'],
  kunyomi: ['kana(eru) かな(える)', 'kana(u) かな(う)'],
  displayMeanings: ['grant', 'answer'],
  fullDisplayMeanings: ['grant', 'answer'],
  meanings: ['grant', 'answer']
},
{
  id: 1318,
  kanjiChar: '凄',
  onyomi: ['sei セイ', 'sai サイ'],
  kunyomi: ['samu(i) さむ(い)', 'sugo(i) すご(い)', 'susa(majii) すさ(まじい)'],
  displayMeanings: ['uncanny', 'weird'],
  fullDisplayMeanings: ['uncanny', 'weird', 'threatening', 'horrible'],
  meanings: ['uncanny', 'weird', 'threatening', 'horrible']
},
{
  id: 1319,
  kanjiChar: '汐',
  onyomi: ['seki セキ'],
  kunyomi: ['shio しお', 'ushio うしお', 'sei せい'],
  displayMeanings: ['eventide', 'tide'],
  fullDisplayMeanings: ['eventide', 'tide', 'salt water', 'opportunity'],
  meanings: ['eventide', 'tide', 'salt water', 'opportunity']
},
{
  id: 1320,
  kanjiChar: '絢',
  onyomi: ['ken ケン'],
  kunyomi: [],
  displayMeanings: ['brilliant fabric design'],
  fullDisplayMeanings: ['brilliant fabric design'],
  meanings: ['brilliant fabric design']
},
{
  id: 1321,
  kanjiChar: '叩',
  onyomi: ['kou コウ'],
  kunyomi: ['tata(ku) たた(く)', 'hata(ku) はた(く)', 'sugi すぎ'],
  displayMeanings: ['strike', 'beat'],
  fullDisplayMeanings: ['strike', 'beat', 'kow tow', 'hit', 'thrash', 'criticize'],
  meanings: ['strike', 'beat', 'kow tow', 'hit', 'thrash', 'criticize']
},
{
  id: 1322,
  kanjiChar: '嫉',
  onyomi: ['shitsu シツ'],
  kunyomi: ['sone(mu) そね(む)', 'neta(mu) ねた(む)', 'niku(mu) にく(む)'],
  displayMeanings: ['jealous', 'envy'],
  fullDisplayMeanings: ['jealous', 'envy'],
  meanings: ['jealous', 'envy']
},
{
  id: 1323,
  kanjiChar: '朔',
  onyomi: ['saku サク'],
  kunyomi: ['tsuitachi ついたち'],
  displayMeanings: ['conjunction (astronomy)', 'first day of month'],
  fullDisplayMeanings: ['conjunction (astronomy)', 'first day of month', 'north'],
  meanings: ['conjunction (astronomy)', 'first day of month', 'north']
},
{
  id: 1324,
  kanjiChar: '蔡',
  onyomi: ['sai サイ'],
  kunyomi: [],
  displayMeanings: ['type of tortoise used for divination'],
  fullDisplayMeanings: ['type of tortoise used for divination'],
  meanings: ['type of tortoise used for divination']
},
{
  id: 1325,
  kanjiChar: '膝',
  onyomi: ['shitsu シツ'],
  kunyomi: ['hiza ひざ'],
  displayMeanings: ['knee', 'lap'],
  fullDisplayMeanings: ['knee', 'lap'],
  meanings: ['knee', 'lap']
},
{
  id: 1326,
  kanjiChar: '鍾',
  onyomi: ['shou ショウ', 'shu シュ'],
  kunyomi: ['atsu(meru) あつ(める)', 'sakazuki さかずき', 'kane かね'],
  displayMeanings: ['spindle', 'gather'],
  fullDisplayMeanings: ['spindle', 'gather', 'collect'],
  meanings: ['spindle', 'gather', 'collect']
},
{
  id: 1327,
  kanjiChar: '仇',
  onyomi: ['kyuu キュウ', 'gu グ'],
  kunyomi: ['ada あだ', 'ata あた', 'kataki かたき', 'tsureai つれあい'],
  displayMeanings: ['foe', 'enemy'],
  fullDisplayMeanings: ['foe', 'enemy', 'revenge', 'grudge', 'feud'],
  meanings: ['foe', 'enemy', 'revenge', 'grudge', 'feud']
},
{
  id: 1328,
  kanjiChar: '伽',
  onyomi: ['ka カ', 'ga ガ', 'kya キャ', 'gya ギャ'],
  kunyomi: ['togi とぎ'],
  displayMeanings: ['nursing', 'attending'],
  fullDisplayMeanings: ['nursing', 'attending', 'entertainer'],
  meanings: ['nursing', 'attending', 'entertainer']
},
{
  id: 1329,
  kanjiChar: '夷',
  onyomi: ['i イ'],
  kunyomi: ['ebisu えびす', 'emishi えみし', 'koro(su) ころ(す)', 'tai(rageru) たい(らげる)'],
  displayMeanings: ['barbarian', 'savage'],
  fullDisplayMeanings: ['barbarian', 'savage', 'Ainu'],
  meanings: ['barbarian', 'savage', 'Ainu']
},
{
  id: 1330,
  kanjiChar: '恣',
  onyomi: ['shi シ'],
  kunyomi: ['hoshiimama ほしいまま'],
  displayMeanings: ['selfish', 'arbitrary'],
  fullDisplayMeanings: ['selfish', 'arbitrary'],
  meanings: ['selfish', 'arbitrary']
},
{
  id: 1331,
  kanjiChar: '瞑',
  onyomi: ['mei メイ', 'ben ベン', 'myou ミョウ', 'min ミン', 'men メン'],
  kunyomi: ['mei(suru) めい(する)', 'tsubu(ru) つぶ(る)', 'tsumu(ru) つむ(る)', 'kura(i) くら(い)'],
  displayMeanings: ['sleep', 'dark'],
  fullDisplayMeanings: ['sleep', 'dark', 'close eyes'],
  meanings: ['sleep', 'dark', 'close eyes']
},
{
  id: 1332,
  kanjiChar: '畝',
  onyomi: ['bou ボウ', 'ho ホ', 'mo モ', 'mu ム'],
  kunyomi: ['se せ', 'une うね'],
  displayMeanings: ['furrow', 'thirty tsubo'],
  fullDisplayMeanings: ['furrow', 'thirty tsubo', 'ridge', 'rib'],
  meanings: ['furrow', 'thirty tsubo', 'ridge', 'rib']
},
{
  id: 1333,
  kanjiChar: '抄',
  onyomi: ['shou ショウ'],
  kunyomi: [],
  displayMeanings: ['extract', 'selection'],
  fullDisplayMeanings: ['extract', 'selection', 'summary', 'copy', 'spread thin'],
  meanings: ['extract', 'selection', 'summary', 'copy', 'spread thin']
},
{
  id: 1334,
  kanjiChar: '杭',
  onyomi: ['kou コウ'],
  kunyomi: ['kui くい'],
  displayMeanings: ['stake', 'post'],
  fullDisplayMeanings: ['stake', 'post', 'picket'],
  meanings: ['stake', 'post', 'picket']
},
{
  id: 1335,
  kanjiChar: '寓',
  onyomi: ['guu グウ', 'gu グ', 'dou ドウ'],
  kunyomi: ['guu(suru) ぐう(する)', 'kakotsu(keru) かこつ(ける)', 'yo(ru) よ(る)', 'karizumai かりずまい'],
  displayMeanings: ['temporary abode', 'imply'],
  fullDisplayMeanings: ['temporary abode', 'imply', 'suggest'],
  meanings: ['temporary abode', 'imply', 'suggest']
},
{
  id: 1336,
  kanjiChar: '麺',
  onyomi: ['men メン', 'ben ベン'],
  kunyomi: ['mugiko むぎこ'],
  displayMeanings: ['noodles', 'wheat flour'],
  fullDisplayMeanings: ['noodles', 'wheat flour'],
  meanings: ['noodles', 'wheat flour']
},
{
  id: 1337,
  kanjiChar: '戴',
  onyomi: ['tai タイ'],
  kunyomi: ['itada(ku) いただ(く)'],
  displayMeanings: ['be crowned with', 'live under (a ruler)'],
  fullDisplayMeanings: ['be crowned with', 'live under (a ruler)', 'receive'],
  meanings: ['be crowned with', 'live under (a ruler)', 'receive']
},
{
  id: 1338,
  kanjiChar: '爽',
  onyomi: ['sou ソウ'],
  kunyomi: ['aki(raka) あき(らか)', 'sawa(yaka) さわ(やか)', 'tagau たがう'],
  displayMeanings: ['refreshing', 'bracing'],
  fullDisplayMeanings: ['refreshing', 'bracing', 'resonant', 'sweet', 'clear'],
  meanings: ['refreshing', 'bracing', 'resonant', 'sweet', 'clear']
},
{
  id: 1339,
  kanjiChar: '裾',
  onyomi: ['kyo キョ', 'ko コ'],
  kunyomi: ['suso すそ'],
  displayMeanings: ['cuff', 'hem'],
  fullDisplayMeanings: ['cuff', 'hem', 'foot of mountain'],
  meanings: ['cuff', 'hem', 'foot of mountain']
},
{
  id: 1340,
  kanjiChar: '黎',
  onyomi: ['rei レイ', 'ri リ'],
  kunyomi: ['kuro(i) くろ(い)'],
  displayMeanings: ['dark', 'black'],
  fullDisplayMeanings: ['dark', 'black', 'many'],
  meanings: ['dark', 'black', 'many']
},
{
  id: 1341,
  kanjiChar: '惰',
  onyomi: ['da ダ'],
  kunyomi: [],
  displayMeanings: ['lazy', 'laziness'],
  fullDisplayMeanings: ['lazy', 'laziness'],
  meanings: ['lazy', 'laziness']
},
{
  id: 1342,
  kanjiChar: '坐',
  onyomi: ['za ザ', 'sa サ'],
  kunyomi: ['suwa(ru) すわ(る)', 'owasu おわす', 'sozoroni そぞろに', 'mashimasu まします'],
  displayMeanings: ['sit'],
  fullDisplayMeanings: ['sit'],
  meanings: ['sit']
},
{
  id: 1343,
  kanjiChar: '鍼',
  onyomi: ['shin シン'],
  kunyomi: ['hari はり', 'sa(su) さ(す)'],
  displayMeanings: ['needle'],
  fullDisplayMeanings: ['needle'],
  meanings: ['needle']
},
{
  id: 1344,
  kanjiChar: '蛮',
  onyomi: ['ban バン'],
  kunyomi: ['ebisu えびす'],
  displayMeanings: ['barbarian'],
  fullDisplayMeanings: ['barbarian'],
  meanings: ['barbarian']
},
{
  id: 1345,
  kanjiChar: '塙',
  onyomi: ['kaku カク', 'kou コウ'],
  kunyomi: ['hanawa はなわ', 'kata(i) かた(い)'],
  displayMeanings: ['projecting tableland or mountain'],
  fullDisplayMeanings: ['projecting tableland or mountain'],
  meanings: ['projecting tableland or mountain']
},
{
  id: 1346,
  kanjiChar: '冴',
  onyomi: ['go ゴ', 'ko コ'],
  kunyomi: ['sa(eru) さ(える)', 'koo(ru) こお(る)', 'hi(eru) ひ(える)'],
  displayMeanings: ['be clear', 'serene'],
  fullDisplayMeanings: ['be clear', 'serene', 'cold', 'skilful'],
  meanings: ['be clear', 'serene', 'cold', 'skilful']
},
{
  id: 1347,
  kanjiChar: '旺',
  onyomi: ['ou オウ', 'kyou キョウ', 'gou ゴウ'],
  kunyomi: ['kagaya(ki) かがや(き)', 'utsukushi(i) うつくし(い)', 'sakan さかん'],
  displayMeanings: ['flourishing', 'successful'],
  fullDisplayMeanings: ['flourishing', 'successful', 'beautiful', 'vigorous'],
  meanings: ['flourishing', 'successful', 'beautiful', 'vigorous']
},
{
  id: 1348,
  kanjiChar: '葦',
  onyomi: ['i イ'],
  kunyomi: ['ashi あし', 'yoshi よし', 'shio(reru) しお(れる)', 'shina(biru) しな(びる)', 'shibo(mu) しぼ(む)', 'na(eru) な(える)'],
  displayMeanings: ['reed', 'bullrush'],
  fullDisplayMeanings: ['reed', 'bullrush'],
  meanings: ['reed', 'bullrush']
},
{
  id: 1349,
  kanjiChar: '礒',
  onyomi: ['gi ギ', 'ga ガ'],
  kunyomi: ['iso いそ', 'iwao いわお'],
  displayMeanings: ['rock', 'beach'],
  fullDisplayMeanings: ['rock', 'beach', 'shore'],
  meanings: ['rock', 'beach', 'shore']
},
{
  id: 1350,
  kanjiChar: '咸',
  onyomi: ['kan カン', 'gen ゲン'],
  kunyomi: [],
  displayMeanings: ['all', 'same'],
  fullDisplayMeanings: ['all', 'same'],
  meanings: ['all', 'same']
},
{
  id: 1351,
  kanjiChar: '萌',
  onyomi: ['hou ホウ'],
  kunyomi: ['mo(eru) も(える)', 'kiza(su) きざ(す)', 'mebae めばえ'],
  displayMeanings: ['show symptoms of', 'sprout'],
  fullDisplayMeanings: ['show symptoms of', 'sprout', 'bud', 'malt'],
  meanings: ['show symptoms of', 'sprout', 'bud', 'malt']
},
{
  id: 1352,
  kanjiChar: '饗',
  onyomi: ['kyou キョウ'],
  kunyomi: ['u(keru) う(ける)', 'motena(su) もてな(す)'],
  displayMeanings: ['banquet'],
  fullDisplayMeanings: ['banquet'],
  meanings: ['banquet']
},
{
  id: 1353,
  kanjiChar: '歪',
  onyomi: ['wai ワイ', 'e エ'],
  kunyomi: ['iga(mu) いが(む)', 'ibitsu いびつ', 'hizu(mu) ひず(む)', 'yuga(mu) ゆが(む)'],
  displayMeanings: ['warp', 'bend'],
  fullDisplayMeanings: ['warp', 'bend', 'strained', 'distort'],
  meanings: ['warp', 'bend', 'strained', 'distort']
},
{
  id: 1354,
  kanjiChar: '冥',
  onyomi: ['mei メイ', 'myou ミョウ'],
  kunyomi: ['kura(i) くら(い)'],
  displayMeanings: ['dark'],
  fullDisplayMeanings: ['dark'],
  meanings: ['dark']
},
{
  id: 1355,
  kanjiChar: '偲',
  onyomi: ['sai サイ', 'shi シ'],
  kunyomi: ['shino(bu) しの(ぶ)'],
  displayMeanings: ['recollect', 'remember'],
  fullDisplayMeanings: ['recollect', 'remember'],
  meanings: ['recollect', 'remember']
},
{
  id: 1356,
  kanjiChar: '壱',
  onyomi: ['ichi イチ', 'itsu イツ'],
  kunyomi: ['hitotsu ひとつ'],
  displayMeanings: ['one (in documents)'],
  fullDisplayMeanings: ['one (in documents)'],
  meanings: ['one (in documents)']
},
{
  id: 1357,
  kanjiChar: '瑠',
  onyomi: ['ru ル', 'ryuu リュウ'],
  kunyomi: [],
  displayMeanings: ['lapis lazuli'],
  fullDisplayMeanings: ['lapis lazuli'],
  meanings: ['lapis lazuli']
},
{
  id: 1358,
  kanjiChar: '韮',
  onyomi: ['kyuu キュウ', 'ku ク'],
  kunyomi: ['nira にら'],
  displayMeanings: ['leek'],
  fullDisplayMeanings: ['leek'],
  meanings: ['leek']
},
{
  id: 1359,
  kanjiChar: '漕',
  onyomi: ['sou ソウ'],
  kunyomi: ['ko(gu) こ(ぐ)', 'hako(bu) はこ(ぶ)'],
  displayMeanings: ['rowing', 'scull'],
  fullDisplayMeanings: ['rowing', 'scull', 'paddle'],
  meanings: ['rowing', 'scull', 'paddle']
},
{
  id: 1360,
  kanjiChar: '杵',
  onyomi: ['sho ショ', 'so ソ'],
  kunyomi: ['kine きね'],
  displayMeanings: ['wooden pestle'],
  fullDisplayMeanings: ['wooden pestle'],
  meanings: ['wooden pestle']
},
{
  id: 1361,
  kanjiChar: '薔',
  onyomi: ['ba バ', 'shou ショウ', 'shoku ショク', 'sou ソウ'],
  kunyomi: ['mizutade みずたで'],
  displayMeanings: ['water pepper'],
  fullDisplayMeanings: ['water pepper'],
  meanings: ['water pepper']
},
{
  id: 1362,
  kanjiChar: '膠',
  onyomi: ['kou コウ', 'kyou キョウ'],
  kunyomi: ['nikawa にかわ', 'nibe にべ'],
  displayMeanings: ['glue', 'isinglass'],
  fullDisplayMeanings: ['glue', 'isinglass'],
  meanings: ['glue', 'isinglass']
},
{
  id: 1363,
  kanjiChar: '允',
  onyomi: ['in イン'],
  kunyomi: ['jou じょう', 'makoto(ni) まこと(に)', 'yurusu ゆるす'],
  displayMeanings: ['license', 'sincerity'],
  fullDisplayMeanings: ['license', 'sincerity', 'permit'],
  meanings: ['license', 'sincerity', 'permit']
},
{
  id: 1364,
  kanjiChar: '眞',
  onyomi: ['shin シン'],
  kunyomi: ['ma ま', 'makoto まこと'],
  displayMeanings: ['truth', 'reality'],
  fullDisplayMeanings: ['truth', 'reality', 'Buddhist sect'],
  meanings: ['truth', 'reality', 'Buddhist sect']
},
{
  id: 1365,
  kanjiChar: '蒙',
  onyomi: ['mou モウ', 'bou ボウ'],
  kunyomi: ['koumu(ru) こうむ(る)', 'oo(u) おお(う)', 'kura(i) くら(い)'],
  displayMeanings: ['ignorance', 'darkness'],
  fullDisplayMeanings: ['ignorance', 'darkness', 'get', 'receive', 'be subjected to', 'sustain', 'Mongolia'],
  meanings: ['ignorance', 'darkness', 'get', 'receive', 'be subjected to', 'sustain', 'Mongolia']
},
{
  id: 1366,
  kanjiChar: '蕃',
  onyomi: ['ban バン', 'han ハン'],
  kunyomi: [],
  displayMeanings: ['grow luxuriously'],
  fullDisplayMeanings: ['grow luxuriously'],
  meanings: ['grow luxuriously']
},
{
  id: 1367,
  kanjiChar: '呑',
  onyomi: ['ton トン', 'don ドン'],
  kunyomi: ['no(mu) の(む)'],
  displayMeanings: ['drink'],
  fullDisplayMeanings: ['drink'],
  meanings: ['drink']
},
{
  id: 1368,
  kanjiChar: '侯',
  onyomi: ['kou コウ'],
  kunyomi: [],
  displayMeanings: ['marquis', 'lord'],
  fullDisplayMeanings: ['marquis', 'lord', 'daimyo'],
  meanings: ['marquis', 'lord', 'daimyo']
},
{
  id: 1369,
  kanjiChar: '碓',
  onyomi: ['kaku カク', 'tai タイ'],
  kunyomi: ['tashi(ka) たし(か)', 'kaku(taru) かく(たる)'],
  displayMeanings: ['pestle'],
  fullDisplayMeanings: ['pestle'],
  meanings: ['pestle']
},
{
  id: 1370,
  kanjiChar: '茗',
  onyomi: ['myou ミョウ', 'mei メイ'],
  kunyomi: ['cha ちゃ'],
  displayMeanings: ['tea'],
  fullDisplayMeanings: ['tea'],
  meanings: ['tea']
},
{
  id: 1371,
  kanjiChar: '麓',
  onyomi: ['roku ロク'],
  kunyomi: ['fumoto ふもと'],
  displayMeanings: ['foot of a mountain'],
  fullDisplayMeanings: ['foot of a mountain'],
  meanings: ['foot of a mountain']
},
{
  id: 1372,
  kanjiChar: '瀕',
  onyomi: ['hin ヒン'],
  kunyomi: ['hotori ほとり'],
  displayMeanings: ['shore', 'brink'],
  fullDisplayMeanings: ['shore', 'brink', 'verge'],
  meanings: ['shore', 'brink', 'verge']
},
{
  id: 1373,
  kanjiChar: '蒔',
  onyomi: ['shi シ', 'ji ジ'],
  kunyomi: ['u(eru) う(える)', 'ma(ku) ま(く)'],
  displayMeanings: ['sow (seeds)'],
  fullDisplayMeanings: ['sow (seeds)'],
  meanings: ['sow (seeds)']
},
{
  id: 1374,
  kanjiChar: '鯉',
  onyomi: ['ri リ'],
  kunyomi: ['koi こい'],
  displayMeanings: ['carp'],
  fullDisplayMeanings: ['carp'],
  meanings: ['carp']
},
{
  id: 1375,
  kanjiChar: '竪',
  onyomi: ['ju ジュ'],
  kunyomi: ['tate たて', 'ta(teru) た(てる)', 'kodomo こども'],
  displayMeanings: ['length', 'height'],
  fullDisplayMeanings: ['length', 'height', 'warp'],
  meanings: ['length', 'height', 'warp']
},
{
  id: 1376,
  kanjiChar: '弧',
  onyomi: ['ko コ'],
  kunyomi: [],
  displayMeanings: ['arc', 'arch'],
  fullDisplayMeanings: ['arc', 'arch', 'bow'],
  meanings: ['arc', 'arch', 'bow']
},
{
  id: 1377,
  kanjiChar: '稽',
  onyomi: ['kei ケイ'],
  kunyomi: ['kanga(eru) かんが(える)', 'todo(meru) とど(める)'],
  displayMeanings: ['think', 'consider'],
  fullDisplayMeanings: ['think', 'consider'],
  meanings: ['think', 'consider']
},
{
  id: 1378,
  kanjiChar: '瘤',
  onyomi: ['ryuu リュウ', 'ru ル'],
  kunyomi: ['kobu こぶ'],
  displayMeanings: ['lump', 'swelling'],
  fullDisplayMeanings: ['lump', 'swelling'],
  meanings: ['lump', 'swelling']
},
{
  id: 1379,
  kanjiChar: '澤',
  onyomi: ['taku タク'],
  kunyomi: ['sawa さわ', 'uruo(i) うるお(い)', 'uruo(su) うるお(す)', 'tsuya つや'],
  displayMeanings: ['swamp'],
  fullDisplayMeanings: ['swamp'],
  meanings: ['swamp']
},
{
  id: 1380,
  kanjiChar: '溥',
  onyomi: ['fu フ', 'haku ハク'],
  kunyomi: ['amaneshi あまねし'],
  displayMeanings: ['far and wide'],
  fullDisplayMeanings: ['far and wide'],
  meanings: ['far and wide']
},
{
  id: 1381,
  kanjiChar: '遥',
  onyomi: ['you ヨウ'],
  kunyomi: ['haru(ka) はる(か)'],
  displayMeanings: ['far off', 'distant'],
  fullDisplayMeanings: ['far off', 'distant', 'long ago'],
  meanings: ['far off', 'distant', 'long ago']
},
{
  id: 1382,
  kanjiChar: '蹴',
  onyomi: ['shuku シュク', 'shuu シュウ'],
  kunyomi: ['ke(ru) け(る)'],
  displayMeanings: ['kick'],
  fullDisplayMeanings: ['kick'],
  meanings: ['kick']
},
{
  id: 1383,
  kanjiChar: '或',
  onyomi: ['waku ワク', 'koku コク', 'iki イキ'],
  kunyomi: ['a(ru) あ(る)', 'arui あるい', 'aruiwa あるいは'],
  displayMeanings: ['some', 'one'],
  fullDisplayMeanings: ['some', 'one', 'or', 'possibly', 'a certain'],
  meanings: ['some', 'one', 'or', 'possibly', 'a certain']
},
{
  id: 1384,
  kanjiChar: '訃',
  onyomi: ['fu フ'],
  kunyomi: ['shirase しらせ'],
  displayMeanings: ['obituary'],
  fullDisplayMeanings: ['obituary'],
  meanings: ['obituary']
},
{
  id: 1385,
  kanjiChar: '矩',
  onyomi: ['ku ク'],
  kunyomi: ['kane かね', 'kanezashi かねざし', 'sashigane さしがね'],
  displayMeanings: ['ruler', "carpenter's square"],
  fullDisplayMeanings: ['ruler', "carpenter's square"],
  meanings: ['ruler', "carpenter's square"]
},
{
  id: 1386,
  kanjiChar: '厦',
  onyomi: ['ka カ', 'sa サ'],
  kunyomi: ['ie いえ'],
  displayMeanings: ['house'],
  fullDisplayMeanings: ['house'],
  meanings: ['house']
},
{
  id: 1387,
  kanjiChar: '冤',
  onyomi: ['en エン'],
  kunyomi: [],
  displayMeanings: ['false charge', 'hatred'],
  fullDisplayMeanings: ['false charge', 'hatred'],
  meanings: ['false charge', 'hatred']
},
{
  id: 1388,
  kanjiChar: '剥',
  onyomi: ['haku ハク', 'hoku ホク'],
  kunyomi: ['he(gu) へ(ぐ)', 'mu(ku) む(く)', 'ha(gareru) は(がれる)'],
  displayMeanings: ['come off', 'peel'],
  fullDisplayMeanings: ['come off', 'peel', 'fade', 'discolor'],
  meanings: ['come off', 'peel', 'fade', 'discolor']
},
{
  id: 1389,
  kanjiChar: '舜',
  onyomi: ['shun シュン'],
  kunyomi: [],
  displayMeanings: ['type of morning glory', 'rose of Sharon'],
  fullDisplayMeanings: ['type of morning glory', 'rose of Sharon', 'althea'],
  meanings: ['type of morning glory', 'rose of Sharon', 'althea']
},
{
  id: 1390,
  kanjiChar: '侠',
  onyomi: ['kyou キョウ'],
  kunyomi: ['kyan きゃん', 'otokodate おとこだて'],
  displayMeanings: ['tomboy', 'chivalry'],
  fullDisplayMeanings: ['tomboy', 'chivalry'],
  meanings: ['tomboy', 'chivalry']
},
{
  id: 1391,
  kanjiChar: '贅',
  onyomi: ['zei ゼイ', 'sei セイ'],
  kunyomi: ['ibo いぼ'],
  displayMeanings: ['luxury'],
  fullDisplayMeanings: ['luxury'],
  meanings: ['luxury']
},
{
  id: 1392,
  kanjiChar: '杖',
  onyomi: ['jou ジョウ'],
  kunyomi: ['tsue つえ'],
  displayMeanings: ['staff', 'cane'],
  fullDisplayMeanings: ['staff', 'cane'],
  meanings: ['staff', 'cane']
},
{
  id: 1393,
  kanjiChar: '蓋',
  onyomi: ['gai ガイ', 'kai カイ', 'kou コウ'],
  kunyomi: ['futa ふた', 'keda(shi) けだ(し)', 'oo(u) おお(う)', 'kasa かさ', 'kakou かこう'],
  displayMeanings: ['cover', 'lid'],
  fullDisplayMeanings: ['cover', 'lid', 'flap'],
  meanings: ['cover', 'lid', 'flap']
},
{
  id: 1394,
  kanjiChar: '畏',
  onyomi: ['i イ'],
  kunyomi: ['oso(reru) おそ(れる)', 'kashikoma(ru) かしこま(る)', 'kashiko かしこ', 'kashiko(shi) かしこ(し)'],
  displayMeanings: ['fear', 'majestic'],
  fullDisplayMeanings: ['fear', 'majestic', 'graciously', 'be apprehensive'],
  meanings: ['fear', 'majestic', 'graciously', 'be apprehensive']
},
{
  id: 1395,
  kanjiChar: '喉',
  onyomi: ['kou コウ'],
  kunyomi: ['nodo のど'],
  displayMeanings: ['throat', 'voice'],
  fullDisplayMeanings: ['throat', 'voice'],
  meanings: ['throat', 'voice']
},
{
  id: 1396,
  kanjiChar: '汪',
  onyomi: ['ou オウ'],
  kunyomi: [],
  displayMeanings: ['flowing full', 'expanse of water'],
  fullDisplayMeanings: ['flowing full', 'expanse of water', 'wide', 'deep'],
  meanings: ['flowing full', 'expanse of water', 'wide', 'deep']
},
{
  id: 1397,
  kanjiChar: '猷',
  onyomi: ['yuu ユウ', 'you ヨウ'],
  kunyomi: ['hakarigoto はかりごと', 'haka(ru) はか(る)'],
  displayMeanings: ['plan', 'scheme'],
  fullDisplayMeanings: ['plan', 'scheme', 'plot', 'way'],
  meanings: ['plan', 'scheme', 'plot', 'way']
},
{
  id: 1398,
  kanjiChar: '瑛',
  onyomi: ['ei エイ'],
  kunyomi: [],
  displayMeanings: ['sparkle of jewelry', 'crystal'],
  fullDisplayMeanings: ['sparkle of jewelry', 'crystal'],
  meanings: ['sparkle of jewelry', 'crystal']
},
{
  id: 1399,
  kanjiChar: '搜',
  onyomi: ['sou ソウ', 'shu シュ', 'shuu シュウ'],
  kunyomi: ['saga(su) さが(す)'],
  displayMeanings: ['search', 'seek'],
  fullDisplayMeanings: ['search', 'seek', 'investigate'],
  meanings: ['search', 'seek', 'investigate']
},
{
  id: 1400,
  kanjiChar: '曼',
  onyomi: ['man マン', 'ban バン'],
  kunyomi: ['naga(i) なが(い)'],
  displayMeanings: ['wide', 'beautiful'],
  fullDisplayMeanings: ['wide', 'beautiful'],
  meanings: ['wide', 'beautiful']
},
{
    id: 1401,
    kanjiChar: '附',
    onyomi: ['fu フ'],
    kunyomi: ['tsu(keru) つ(ける)', 'tsu(ku) つ(く)'],
    displayMeanings: ['affixed', 'attach'],
    fullDisplayMeanings: ['affixed', 'attach', 'refer to', 'append'],
    meanings: ['affixed', 'attach', 'refer to', 'append']
  },
  {
    id: 1402,
    kanjiChar: '彪',
    onyomi: ['hyou ヒョウ', 'hyuu ヒュウ'],
    kunyomi: ['aya あや'],
    displayMeanings: ['spotted', 'mottled'],
    fullDisplayMeanings: ['spotted', 'mottled', 'patterned', 'small tiger'],
    meanings: ['spotted', 'mottled', 'patterned', 'small tiger']
  },
  {
    id: 1403,
    kanjiChar: '撚',
    onyomi: ['nen ネン'],
    kunyomi: ['yo(ru) よ(る)', 'yo(reru) よ(れる)', 'yori より', 'hi(neru) ひね(る)'],
    displayMeanings: ['twist', 'twine'],
    fullDisplayMeanings: ['twist', 'twine', 'kinky'],
    meanings: ['twist', 'twine', 'kinky']
  },
  {
    id: 1404,
    kanjiChar: '噛',
    onyomi: ['kou コウ', 'gou ゴウ'],
    kunyomi: ['ka(mu) か(む)', 'ka(jiru) か(じる)'],
    displayMeanings: ['chew', 'bite'],
    fullDisplayMeanings: ['chew', 'bite', 'gnaw'],
    meanings: ['chew', 'bite', 'gnaw']
  },
  {
    id: 1405,
    kanjiChar: '卯',
    onyomi: ['bou ボウ', 'mou モウ'],
    kunyomi: ['u う'],
    displayMeanings: ['sign of the hare or rabbit'],
    fullDisplayMeanings: ['sign of the hare or rabbit', 'fourth sign of Chinese zodiac', '5-7AM', 'east'],
    meanings: ['sign of the hare or rabbit', 'fourth sign of Chinese zodiac', '5-7AM', 'east']
  },
  {
    id: 1406,
    kanjiChar: '桝',
    onyomi: ['masu ます'],
    kunyomi: [],
    displayMeanings: ['measuring box'],
    fullDisplayMeanings: ['measuring box'],
    meanings: ['measuring box']
  },
  {
    id: 1407,
    kanjiChar: '撫',
    onyomi: ['bu ブ', 'fu フ'],
    kunyomi: ['na(deru) な(でる)'],
    displayMeanings: ['stroke', 'pat'],
    fullDisplayMeanings: ['stroke', 'pat', 'smooth down'],
    meanings: ['stroke', 'pat', 'smooth down']
  },
  {
    id: 1408,
    kanjiChar: '喋',
    onyomi: ['chou チョウ', 'tou トウ'],
    kunyomi: ['shabe(ru) しゃべ(る)', 'tsuiba(mu) ついば(む)'],
    displayMeanings: ['talk', 'chat'],
    fullDisplayMeanings: ['talk', 'chat', 'chatter'],
    meanings: ['talk', 'chat', 'chatter']
  },
  {
    id: 1409,
    kanjiChar: '但',
    onyomi: ['tan タン'],
    kunyomi: ['tada(shi) ただ(し)'],
    displayMeanings: ['however', 'but'],
    fullDisplayMeanings: ['however', 'but'],
    meanings: ['however', 'but']
  },
  {
    id: 1410,
    kanjiChar: '溢',
    onyomi: ['itsu イツ'],
    kunyomi: ['kobo(reru) こぼ(れる)', 'afu(reru) あふ(れる)', 'mi(chiru) み(ちる)'],
    displayMeanings: ['overflow', 'inundate'],
    fullDisplayMeanings: ['overflow', 'inundate', 'spill'],
    meanings: ['overflow', 'inundate', 'spill']
  },
  {
    id: 1411,
    kanjiChar: '闊',
    onyomi: ['katsu カツ'],
    kunyomi: ['hiro(i) ひろ(い)'],
    displayMeanings: ['wide'],
    fullDisplayMeanings: ['wide'],
    meanings: ['wide']
  },
  {
    id: 1412,
    kanjiChar: '藏',
    onyomi: ['zou ゾウ', 'sou ソウ'],
    kunyomi: ['kura くら', 'osa(meru) おさ(める)', 'kaku(reru) かく(れる)'],
    displayMeanings: ['hide', 'own'],
    fullDisplayMeanings: ['hide', 'own', 'have', 'possess'],
    meanings: ['hide', 'own', 'have', 'possess']
  },
  {
    id: 1413,
    kanjiChar: '浙',
    onyomi: ['setsu セツ'],
    kunyomi: [],
    displayMeanings: ['name of a Chinese river'],
    fullDisplayMeanings: ['name of a Chinese river'],
    meanings: ['name of a Chinese river']
  },
  {
    id: 1414,
    kanjiChar: '彭',
    onyomi: ['hou ホウ'],
    kunyomi: [],
    displayMeanings: ['swelling', 'sound of drum'],
    fullDisplayMeanings: ['swelling', 'sound of drum'],
    meanings: ['swelling', 'sound of drum']
  },
  {
    id: 1415,
    kanjiChar: '淘',
    onyomi: ['tou トウ'],
    kunyomi: ['yona(geru) よな(げる)'],
    displayMeanings: ['select'],
    fullDisplayMeanings: ['select'],
    meanings: ['select']
  },
  {
    id: 1416,
    kanjiChar: '剃',
    onyomi: ['tei テイ'],
    kunyomi: ['mai まい', 'so(ru) そ(る)', 'su(ru) す(る)'],
    displayMeanings: ['shave'],
    fullDisplayMeanings: ['shave'],
    meanings: ['shave']
  },
  {
    id: 1417,
    kanjiChar: '揃',
    onyomi: ['sen セン'],
    kunyomi: ['soro(eru) そろ(える)', 'ki(ru) き(る)'],
    displayMeanings: ['be complete', 'uniform'],
    fullDisplayMeanings: ['be complete', 'uniform', 'all present'],
    meanings: ['be complete', 'uniform', 'all present']
  },
  {
    id: 1418,
    kanjiChar: '綺',
    onyomi: ['ki キ'],
    kunyomi: ['aya あや'],
    displayMeanings: ['figured cloth', 'beautiful'],
    fullDisplayMeanings: ['figured cloth', 'beautiful'],
    meanings: ['figured cloth', 'beautiful']
  },
  {
    id: 1419,
    kanjiChar: '徘',
    onyomi: ['hai ハイ'],
    kunyomi: ['samayo(u) さまよ(う)'],
    displayMeanings: ['wander'],
    fullDisplayMeanings: ['wander'],
    meanings: ['wander']
  },
  {
    id: 1420,
    kanjiChar: '巷',
    onyomi: ['kou コウ'],
    kunyomi: ['chimata ちまた'],
    displayMeanings: ['fork in road', 'scene'],
    fullDisplayMeanings: ['fork in road', 'scene', 'arena', 'theater'],
    meanings: ['fork in road', 'scene', 'arena', 'theater']
  },
  {
    id: 1421,
    kanjiChar: '竿',
    onyomi: ['kan カン'],
    kunyomi: ['sao さお'],
    displayMeanings: ['pole', 'rod'],
    fullDisplayMeanings: ['pole', 'rod', 'scale beam', 'violin neck'],
    meanings: ['pole', 'rod', 'scale beam', 'violin neck']
  },
  {
    id: 1422,
    kanjiChar: '蟹',
    onyomi: ['kai カイ'],
    kunyomi: ['kani かに'],
    displayMeanings: ['crab'],
    fullDisplayMeanings: ['crab'],
    meanings: ['crab']
  },
  {
    id: 1423,
    kanjiChar: '芋',
    onyomi: ['u ウ'],
    kunyomi: ['imo いも'],
    displayMeanings: ['potato'],
    fullDisplayMeanings: ['potato'],
    meanings: ['potato']
  },
  {
    id: 1424,
    kanjiChar: '袁',
    onyomi: ['en エン', 'on オン'],
    kunyomi: [],
    displayMeanings: ['long kimono'],
    fullDisplayMeanings: ['long kimono'],
    meanings: ['long kimono']
  },
  {
    id: 1425,
    kanjiChar: '舩',
    onyomi: ['sen セン'],
    kunyomi: ['fune ふね', 'funa- ふな-'],
    displayMeanings: ['boat', 'ship'],
    fullDisplayMeanings: ['boat', 'ship', 'vessel'],
    meanings: ['boat', 'ship', 'vessel']
  },
  {
    id: 1426,
    kanjiChar: '拭',
    onyomi: ['shoku ショク', 'shiki シキ'],
    kunyomi: ['nugu(u) ぬぐ(う)', 'fu(ku) ふ(く)'],
    displayMeanings: ['wipe', 'mop'],
    fullDisplayMeanings: ['wipe', 'mop', 'swab'],
    meanings: ['wipe', 'mop', 'swab']
  },
  {
    id: 1427,
    kanjiChar: '茜',
    onyomi: ['sen セン'],
    kunyomi: ['akane あかね'],
    displayMeanings: ['madder', 'red dye'],
    fullDisplayMeanings: ['madder', 'red dye', 'Turkey red'],
    meanings: ['madder', 'red dye', 'Turkey red']
  },
  {
    id: 1428,
    kanjiChar: '凌',
    onyomi: ['ryou リョウ'],
    kunyomi: ['shino(gu) しの(ぐ)'],
    displayMeanings: ['endure', 'keep (rain)out'],
    fullDisplayMeanings: ['endure', 'keep (rain)out', 'stave off', 'tide over', 'defy', 'slight', 'surpass'],
    meanings: ['endure', 'keep (rain)out', 'stave off', 'tide over', 'defy', 'slight', 'surpass']
  },
  {
    id: 1429,
    kanjiChar: '頬',
    onyomi: ['kyou キョウ'],
    kunyomi: ['hoo ほお', 'hoho ほほ'],
    displayMeanings: ['cheeks', 'jaw'],
    fullDisplayMeanings: ['cheeks', 'jaw'],
    meanings: ['cheeks', 'jaw']
  },
  {
    id: 1430,
    kanjiChar: '厨',
    onyomi: ['shuu シュウ', 'zu ズ', 'chu チュ', 'chuu チュウ'],
    kunyomi: ['kuriya くりや'],
    displayMeanings: ['kitchen'],
    fullDisplayMeanings: ['kitchen'],
    meanings: ['kitchen']
  },
  {
    id: 1431,
    kanjiChar: '犀',
    onyomi: ['sai サイ', 'sei セイ'],
    kunyomi: [],
    displayMeanings: ['rhinoceros'],
    fullDisplayMeanings: ['rhinoceros'],
    meanings: ['rhinoceros']
  },
  {
    id: 1432,
    kanjiChar: '簑',
    onyomi: ['sa サ', 'sai サイ'],
    kunyomi: ['mino みの'],
    displayMeanings: ['a coat raincoat'],
    fullDisplayMeanings: ['a coat raincoat'],
    meanings: ['a coat raincoat']
  },
  {
    id: 1433,
    kanjiChar: '皓',
    onyomi: ['kou コウ'],
    kunyomi: ['shiro(i) しろ(い)', 'hika(ru) ひか(る)'],
    displayMeanings: ['white', 'clear'],
    fullDisplayMeanings: ['white', 'clear'],
    meanings: ['white', 'clear']
  },
  {
    id: 1434,
    kanjiChar: '甦',
    onyomi: ['so ソ', 'kou コウ'],
    kunyomi: ['yomigae(ru) よみがえ(る)'],
    displayMeanings: ['be resuscitated', 'revived'],
    fullDisplayMeanings: ['be resuscitated', 'revived'],
    meanings: ['be resuscitated', 'revived']
  },
  {
    id: 1435,
    kanjiChar: '洸',
    onyomi: ['kou コウ'],
    kunyomi: [],
    displayMeanings: ['sparkling water'],
    fullDisplayMeanings: ['sparkling water'],
    meanings: ['sparkling water']
  },
  {
    id: 1436,
    kanjiChar: '毬',
    onyomi: ['kyuu キュウ'],
    kunyomi: ['iga いが', 'mari まり'],
    displayMeanings: ['burr', 'ball'],
    fullDisplayMeanings: ['burr', 'ball'],
    meanings: ['burr', 'ball']
  },
  {
    id: 1437,
    kanjiChar: '檄',
    onyomi: ['keki ケキ'],
    kunyomi: ['geki(suru) げき(する)', 'furebumi ふれぶみ'],
    displayMeanings: ['written appeal', 'manifesto'],
    fullDisplayMeanings: ['written appeal', 'manifesto'],
    meanings: ['written appeal', 'manifesto']
  },
  {
    id: 1438,
    kanjiChar: '姚',
    onyomi: ['you ヨウ', 'chou チョウ'],
    kunyomi: ['utsuku(shii) うつく(しい)'],
    displayMeanings: ['beautiful'],
    fullDisplayMeanings: ['beautiful'],
    meanings: ['beautiful']
  },
  {
    id: 1439,
    kanjiChar: '蛭',
    onyomi: ['shitsu シツ', 'chitsu チツ'],
    kunyomi: ['hiru ひる'],
    displayMeanings: ['leech'],
    fullDisplayMeanings: ['leech'],
    meanings: ['leech']
  },
  {
    id: 1440,
    kanjiChar: '婆',
    onyomi: ['ba バ'],
    kunyomi: ['baba ばば', 'baa ばあ'],
    displayMeanings: ['old woman', 'grandma'],
    fullDisplayMeanings: ['old woman', 'grandma', 'wet nurse'],
    meanings: ['old woman', 'grandma', 'wet nurse']
  },
  {
    id: 1441,
    kanjiChar: '叢',
    onyomi: ['sou ソウ', 'su ス'],
    kunyomi: ['kusamura くさむら', 'mura(garu) むら(がる)', 'mura むら'],
    displayMeanings: ['plexus', 'clump of bushes'],
    fullDisplayMeanings: ['plexus', 'clump of bushes', 'thicket'],
    meanings: ['plexus', 'clump of bushes', 'thicket']
  },
  {
    id: 1442,
    kanjiChar: '椙',
    onyomi: ['sugi すぎ'],
    kunyomi: [],
    displayMeanings: ['Japanese cedar', 'cryptomeria'],
    fullDisplayMeanings: ['Japanese cedar', 'cryptomeria'],
    meanings: ['Japanese cedar', 'cryptomeria']
  },
  {
    id: 1443,
    kanjiChar: '轟',
    onyomi: ['gou ゴウ', 'kou コウ'],
    kunyomi: ['todoro(kasu) とどろ(かす)', 'todoro(ku) とどろ(く)'],
    displayMeanings: ['roar', 'thunder'],
    fullDisplayMeanings: ['roar', 'thunder', 'boom resound'],
    meanings: ['roar', 'thunder', 'boom resound']
  },
  {
    id: 1444,
    kanjiChar: '贋',
    onyomi: ['gan ガン'],
    kunyomi: ['nise にせ'],
    displayMeanings: ['counterfeit', 'forgery'],
    fullDisplayMeanings: ['counterfeit', 'forgery'],
    meanings: ['counterfeit', 'forgery']
  },
  {
    id: 1445,
    kanjiChar: '洒',
    onyomi: ['sha シャ', 'son ソン', 'sai サイ', 'sen セン', 'sei セイ'],
    kunyomi: ['susu(gu) すす(ぐ)', 'ara(u) あら(う)'],
    displayMeanings: ['wash', 'sprinkle'],
    fullDisplayMeanings: ['wash', 'sprinkle'],
    meanings: ['wash', 'sprinkle']
  },
  {
    id: 1446,
    kanjiChar: '貰',
    onyomi: ['sei セイ', 'sha シャ'],
    kunyomi: ['mora(u) もら(う)'],
    displayMeanings: ['get', 'have'],
    fullDisplayMeanings: ['get', 'have', 'obtain'],
    meanings: ['get', 'have', 'obtain']
  },
  {
    id: 1447,
    kanjiChar: '儲',
    onyomi: ['cho チョ'],
    kunyomi: ['mou(keru) もう(ける)', 'mou(karu) もう(かる)', 'mouke もうけ', 'takuwa(eru) たくわ(える)'],
    displayMeanings: ['be profitable', 'yield profit'],
    fullDisplayMeanings: ['be profitable', 'yield profit'],
    meanings: ['be profitable', 'yield profit']
  },
  {
    id: 1448,
    kanjiChar: '緋',
    onyomi: ['hi ヒ'],
    kunyomi: ['ake あけ', 'aka あか'],
    displayMeanings: ['scarlet', 'cardinal'],
    fullDisplayMeanings: ['scarlet', 'cardinal'],
    meanings: ['scarlet', 'cardinal']
  },
  {
    id: 1449,
    kanjiChar: '諜',
    onyomi: ['chou チョウ'],
    kunyomi: ['chou(zuru) ちょう(ずる)', 'ukaga(u) うかが(う)', 'shime(su) しめ(す)'],
    displayMeanings: ['spy out', 'reconnoiter'],
    fullDisplayMeanings: ['spy out', 'reconnoiter'],
    meanings: ['spy out', 'reconnoiter']
  },
  {
    id: 1450,
    kanjiChar: '鯛',
    onyomi: ['chou チョウ'],
    kunyomi: ['tai たい'],
    displayMeanings: ['sea bream', 'red snapper'],
    fullDisplayMeanings: ['sea bream', 'red snapper'],
    meanings: ['sea bream', 'red snapper']
  },
  {
    id: 1451,
    kanjiChar: '蓼',
    onyomi: ['shin シン', 'riku リク', 'ryou リョウ'],
    kunyomi: ['tade たで'],
    displayMeanings: ['luxurious grass', 'a smartweed'],
    fullDisplayMeanings: ['luxurious grass', 'a smartweed'],
    meanings: ['luxurious grass', 'a smartweed']
  },
  {
    id: 1452,
    kanjiChar: '甕',
    onyomi: ['ou オウ'],
    kunyomi: ['kame かめ', 'mika みか'],
    displayMeanings: ['jar', 'jug'],
    fullDisplayMeanings: ['jar', 'jug', 'vat'],
    meanings: ['jar', 'jug', 'vat']
  },
  {
    id: 1453,
    kanjiChar: '喘',
    onyomi: ['zen ゼン', 'sen セン'],
    kunyomi: ['ae(gu) あえ(ぐ)', 'seki せき'],
    displayMeanings: ['pant', 'gasp'],
    fullDisplayMeanings: ['pant', 'gasp', 'breathe hard'],
    meanings: ['pant', 'gasp', 'breathe hard']
  },
  {
    id: 1454,
    kanjiChar: '怜',
    onyomi: ['rei レイ', 'ren レン', 'ryou リョウ'],
    kunyomi: ['awa(remu) あわ(れむ)', 'sato(i) さと(い)'],
    displayMeanings: ['wise'],
    fullDisplayMeanings: ['wise'],
    meanings: ['wise']
  },
  {
    id: 1455,
    kanjiChar: '溜',
    onyomi: ['ryuu リュウ'],
    kunyomi: ['ta(maru) た(まる)', 'tama(ru) たま(る)', 'shitata(ru) したた(る)'],
    displayMeanings: ['collect', 'gather'],
    fullDisplayMeanings: ['collect', 'gather', 'be in arrears'],
    meanings: ['collect', 'gather', 'be in arrears']
  },
  {
    id: 1456,
    kanjiChar: '邑',
    onyomi: ['yuu ユウ'],
    kunyomi: ['mura むら'],
    displayMeanings: ['village', 'rural community'],
    fullDisplayMeanings: ['village', 'rural community', 'right village radical (no. 163)'],
    meanings: ['village', 'rural community', 'right village radical (no. 163)']
  },
  {
    id: 1457,
    kanjiChar: '鉾',
    onyomi: ['bou ボウ', 'mu ム'],
    kunyomi: ['hoko ほこ'],
    displayMeanings: ['halberd', 'arms'],
    fullDisplayMeanings: ['halberd', 'arms', 'festival float'],
    meanings: ['halberd', 'arms', 'festival float']
  },
  {
    id: 1458,
    kanjiChar: '倣',
    onyomi: ['hou ホウ'],
    kunyomi: ['nara(u) なら(う)'],
    displayMeanings: ['emulate', 'imitate'],
    fullDisplayMeanings: ['emulate', 'imitate'],
    meanings: ['emulate', 'imitate']
  },
  {
    id: 1459,
    kanjiChar: '碧',
    onyomi: ['heki ヘキ', 'hyaku ヒャク'],
    kunyomi: [],
    displayMeanings: ['blue', 'green'],
    fullDisplayMeanings: ['blue', 'green'],
    meanings: ['blue', 'green']
  },
  {
    id: 1460,
    kanjiChar: '燈',
    onyomi: ['tou トウ'],
    kunyomi: ['hi ひ', 'ho- ほ-', 'tomoshibi ともしび', 'tomo(su) とも(す)', 'akari あかり'],
    displayMeanings: ['lamp', 'light'],
    fullDisplayMeanings: ['lamp', 'light', 'counter for lights'],
    meanings: ['lamp', 'light', 'counter for lights']
  },
  {
    id: 1461,
    kanjiChar: '諦',
    onyomi: ['tei テイ', 'tai タイ'],
    kunyomi: ['akira(meru) あきら(める)', 'tsumabiraka つまびらか', 'makoto まこと'],
    displayMeanings: ['truth', 'clarity'],
    fullDisplayMeanings: ['truth', 'clarity', 'abandon', 'give up'],
    meanings: ['truth', 'clarity', 'abandon', 'give up']
  },
  {
    id: 1462,
    kanjiChar: '煎',
    onyomi: ['sen セン'],
    kunyomi: ['sen(jiru) せん(じる)', 'i(ru) い(る)', 'ni(ru) に(る)'],
    displayMeanings: ['broil', 'parch'],
    fullDisplayMeanings: ['broil', 'parch', 'roast', 'boil'],
    meanings: ['broil', 'parch', 'roast', 'boil']
  },
  {
    id: 1463,
    kanjiChar: '瓜',
    onyomi: ['ka カ', 'ke ケ'],
    kunyomi: ['uri うり'],
    displayMeanings: ['melon'],
    fullDisplayMeanings: ['melon'],
    meanings: ['melon']
  },
  {
    id: 1464,
    kanjiChar: '緻',
    onyomi: ['chi チ'],
    kunyomi: ['komaka(i) こまか(い)'],
    displayMeanings: ['fine (i.e. not coarse)'],
    fullDisplayMeanings: ['fine (i.e. not coarse)'],
    meanings: ['fine (i.e. not coarse)']
  },
  {
    id: 1465,
    kanjiChar: '哺',
    onyomi: ['ho ホ'],
    kunyomi: ['haguku(mu) はぐく(む)', 'fuku(mu) ふく(む)'],
    displayMeanings: ['nurse', 'suckle'],
    fullDisplayMeanings: ['nurse', 'suckle'],
    meanings: ['nurse', 'suckle']
  },
  {
    id: 1466,
    kanjiChar: '槌',
    onyomi: ['tsui ツイ'],
    kunyomi: ['tsuchi つち'],
    displayMeanings: ['hammer', 'mallet'],
    fullDisplayMeanings: ['hammer', 'mallet'],
    meanings: ['hammer', 'mallet']
  },
  {
    id: 1467,
    kanjiChar: '啄',
    onyomi: ['taku タク', 'tsuku ツク', 'toku トク'],
    kunyomi: ['tsuiba(mu) ついば(む)', 'tsutsu(ku) つつ(く)'],
    displayMeanings: ['peck', 'pick up'],
    fullDisplayMeanings: ['peck', 'pick up'],
    meanings: ['peck', 'pick up']
  },
  {
    id: 1468,
    kanjiChar: '穣',
    onyomi: ['jou ジョウ'],
    kunyomi: ['wara わら', 'yutaka ゆたか'],
    displayMeanings: ['good crops', 'prosperity'],
    fullDisplayMeanings: ['good crops', 'prosperity', '10**28'],
    meanings: ['good crops', 'prosperity', '10**28']
  },
  {
    id: 1469,
    kanjiChar: '嗜',
    onyomi: ['shi シ'],
    kunyomi: ['tashina(mu) たしな(む)', 'kono(mu) この(む)'],
    displayMeanings: ['like', 'taste'],
    fullDisplayMeanings: ['like', 'taste', 'modest'],
    meanings: ['like', 'taste', 'modest']
  },
  {
    id: 1470,
    kanjiChar: '偕',
    onyomi: ['kai カイ'],
    kunyomi: ['tomoni ともに'],
    displayMeanings: ['together'],
    fullDisplayMeanings: ['together'],
    meanings: ['together']
  },
  {
    id: 1471,
    kanjiChar: '罵',
    onyomi: ['ba バ'],
    kunyomi: ['nonoshi(ru) ののし(る)'],
    displayMeanings: ['abuse', 'insult'],
    fullDisplayMeanings: ['abuse', 'insult'],
    meanings: ['abuse', 'insult']
  },
  {
    id: 1472,
    kanjiChar: '酉',
    onyomi: ['yuu ユウ'],
    kunyomi: ['tori とり'],
    displayMeanings: ['west', 'bird'],
    fullDisplayMeanings: ['west', 'bird', 'sign of the bird', '5-7PM', 'tenth sign of Chinese zodiac', 'sake radical (no. 164)'],
    meanings: ['west', 'bird', 'sign of the bird', '5-7PM', 'tenth sign of Chinese zodiac', 'sake radical (no. 164)']
  },
  {
    id: 1473,
    kanjiChar: '蹄',
    onyomi: ['tei テイ'],
    kunyomi: ['hidzume ひづめ'],
    displayMeanings: ['hoof'],
    fullDisplayMeanings: ['hoof'],
    meanings: ['hoof']
  },
  {
    id: 1474,
    kanjiChar: '頚',
    onyomi: ['kei ケイ'],
    kunyomi: ['kubi くび'],
    displayMeanings: ['neck', 'head'],
    fullDisplayMeanings: ['neck', 'head'],
    meanings: ['neck', 'head']
  },
  {
    id: 1475,
    kanjiChar: '胚',
    onyomi: ['hai ハイ'],
    kunyomi: ['harami はらみ', 'hara(mu) はら(む)'],
    displayMeanings: ['embryo'],
    fullDisplayMeanings: ['embryo'],
    meanings: ['embryo']
  },
  {
    id: 1476,
    kanjiChar: '牢',
    onyomi: ['rou ロウ'],
    kunyomi: ['kata(i) かた(い)', 'hitoya ひとや'],
    displayMeanings: ['prison', 'jail'],
    fullDisplayMeanings: ['prison', 'jail', 'hardness'],
    meanings: ['prison', 'jail', 'hardness']
  },
  {
    id: 1477,
    kanjiChar: '糞',
    onyomi: ['fun フン'],
    kunyomi: ['kuso くそ'],
    displayMeanings: ['shit', 'feces'],
    fullDisplayMeanings: ['shit', 'feces', 'excrement'],
    meanings: ['shit', 'feces', 'excrement']
  },
  {
    id: 1478,
    kanjiChar: '悌',
    onyomi: ['tei テイ', 'dai ダイ'],
    kunyomi: [],
    displayMeanings: ['serving our elders'],
    fullDisplayMeanings: ['serving our elders'],
    meanings: ['serving our elders']
  },
  {
    id: 1479,
    kanjiChar: '吊',
    onyomi: ['chou チョウ'],
    kunyomi: ['tsu(ru) つ(る)', 'tsuru(su) つる(す)'],
    displayMeanings: ['suspend', 'hang'],
    fullDisplayMeanings: ['suspend', 'hang', 'wear (sword)'],
    meanings: ['suspend', 'hang', 'wear (sword)']
  },
  {
    id: 1480,
    kanjiChar: '楕',
    onyomi: ['da ダ', 'ta タ'],
    kunyomi: [],
    displayMeanings: ['ellipse'],
    fullDisplayMeanings: ['ellipse'],
    meanings: ['ellipse']
  },
  {
    id: 1481,
    kanjiChar: '鮭',
    onyomi: ['kai カイ', 'kei ケイ'],
    kunyomi: ['sake さけ', 'shake しゃけ', 'fugu ふぐ'],
    displayMeanings: ['salmon'],
    fullDisplayMeanings: ['salmon'],
    meanings: ['salmon']
  },
  {
    id: 1482,
    kanjiChar: '乞',
    onyomi: ['kotsu コツ', 'kitsu キツ', 'ki キ', 'kike キケ', 'kochi コチ'],
    kunyomi: ['ko(u) こ(う)'],
    displayMeanings: ['beg', 'invite'],
    fullDisplayMeanings: ['beg', 'invite', 'ask'],
    meanings: ['beg', 'invite', 'ask']
  },
  {
    id: 1483,
    kanjiChar: '倹',
    onyomi: ['ken ケン'],
    kunyomi: ['tsuma(shii) つま(しい)', 'tsudzumayaka つづまやか'],
    displayMeanings: ['frugal', 'economy'],
    fullDisplayMeanings: ['frugal', 'economy', 'thrifty'],
    meanings: ['frugal', 'economy', 'thrifty']
  },
  {
    id: 1484,
    kanjiChar: '嗅',
    onyomi: ['kyuu キュウ'],
    kunyomi: ['ka(gu) か(ぐ)'],
    displayMeanings: ['smell', 'sniff'],
    fullDisplayMeanings: ['smell', 'sniff', 'scent'],
    meanings: ['smell', 'sniff', 'scent']
  },
  {
    id: 1485,
    kanjiChar: '詫',
    onyomi: ['ta タ'],
    kunyomi: ['wabi わび', 'wabi(shii) わび(しい)', 'kakotsu かこつ', 'wa(biru) わ(びる)'],
    displayMeanings: ['apologize'],
    fullDisplayMeanings: ['apologize'],
    meanings: ['apologize']
  },
  {
    id: 1486,
    kanjiChar: '鱒',
    onyomi: ['son ソン', 'sen セン', 'zan ザン'],
    kunyomi: ['masu ます'],
    displayMeanings: ['salmon trout'],
    fullDisplayMeanings: ['salmon trout'],
    meanings: ['salmon trout']
  },
  {
    id: 1487,
    kanjiChar: '蔑',
    onyomi: ['betsu ベツ'],
    kunyomi: ['naigashiro ないがしろ', 'nami(suru) なみ(する)', 'kurai くらい', 'sagesu(mu) さげす(む)'],
    displayMeanings: ['ignore', 'despise'],
    fullDisplayMeanings: ['ignore', 'despise', 'neglect', 'ridicule'],
    meanings: ['ignore', 'despise', 'neglect', 'ridicule']
  },
  {
    id: 1488,
    kanjiChar: '轍',
    onyomi: ['tetsu テツ'],
    kunyomi: ['wadachii わだちい', 'wadachi わだち'],
    displayMeanings: ['rut', 'wheel track'],
    fullDisplayMeanings: ['rut', 'wheel track'],
    meanings: ['rut', 'wheel track']
  },
  {
    id: 1489,
    kanjiChar: '醤',
    onyomi: ['shou ショウ'],
    kunyomi: ['hishio ひしお'],
    displayMeanings: ['a kind of miso'],
    fullDisplayMeanings: ['a kind of miso'],
    meanings: ['a kind of miso']
  },
  {
    id: 1490,
    kanjiChar: '惚',
    onyomi: ['kotsu コツ'],
    kunyomi: ['hoke(ru) ほけ(る)', 'bo(keru) ぼ(ける)', 'ho(reru) ほ(れる)'],
    displayMeanings: ['fall in love with', 'admire'],
    fullDisplayMeanings: ['fall in love with', 'admire', 'grow senile'],
    meanings: ['fall in love with', 'admire', 'grow senile']
  },
  {
    id: 1491,
    kanjiChar: '廣',
    onyomi: ['kou コウ'],
    kunyomi: ['hiro(i) ひろ(い)'],
    displayMeanings: ['broad', 'wide'],
    fullDisplayMeanings: ['broad', 'wide', 'spacious'],
    meanings: ['broad', 'wide', 'spacious']
  },
  {
    id: 1492,
    kanjiChar: '藁',
    onyomi: ['kou コウ'],
    kunyomi: ['wara わら'],
    displayMeanings: ['straw'],
    fullDisplayMeanings: ['straw'],
    meanings: ['straw']
  },
  {
    id: 1493,
    kanjiChar: '柚',
    onyomi: ['yu ユ', 'yuu ユウ', 'jiku ジク'],
    kunyomi: ['yuzu ゆず'],
    displayMeanings: ['citron'],
    fullDisplayMeanings: ['citron'],
    meanings: ['citron']
  },
  {
    id: 1494,
    kanjiChar: '舛',
    onyomi: ['bu ブ', 'sen セン'],
    kunyomi: ['mai まい', 'somu(ku) そむ(く)'],
    displayMeanings: ['dancing radical (no. 136)'],
    fullDisplayMeanings: ['dancing radical (no. 136)'],
    meanings: ['dancing radical (no. 136)']
  },
  {
    id: 1495,
    kanjiChar: '縞',
    onyomi: ['kou コウ'],
    kunyomi: ['shima しま', 'shiroginu しろぎぬ'],
    displayMeanings: ['stripe'],
    fullDisplayMeanings: ['stripe'],
    meanings: ['stripe']
  },
  {
    id: 1496,
    kanjiChar: '謳',
    onyomi: ['ou オウ', 'u ウ'],
    kunyomi: ['uta(u) うた(う)'],
    displayMeanings: ['extol', 'declare'],
    fullDisplayMeanings: ['extol', 'declare', 'express'],
    meanings: ['extol', 'declare', 'express']
  },
  {
    id: 1497,
    kanjiChar: '杞',
    onyomi: ['ko コ', 'ki キ'],
    kunyomi: [],
    displayMeanings: ['river willow'],
    fullDisplayMeanings: ['river willow'],
    meanings: ['river willow']
  },
  {
    id: 1498,
    kanjiChar: '鱗',
    onyomi: ['rin リン'],
    kunyomi: ['uroko うろこ', 'koke こけ', 'kokera こけら'],
    displayMeanings: ['scales (fish)'],
    fullDisplayMeanings: ['scales (fish)'],
    meanings: ['scales (fish)']
  },
  {
    id: 1499,
    kanjiChar: '繭',
    onyomi: ['ken ケン'],
    kunyomi: ['mayu まゆ', 'kinu きぬ'],
    displayMeanings: ['cocoon'],
    fullDisplayMeanings: ['cocoon'],
    meanings: ['cocoon']
  },
  {
    id: 1500,
    kanjiChar: '釘',
    onyomi: ['tei テイ', 'chou チョウ'],
    kunyomi: ['kugi くぎ'],
    displayMeanings: ['nail', 'tack'],
    fullDisplayMeanings: ['nail', 'tack', 'peg'],
    meanings: ['nail', 'tack', 'peg']
  },
  {
    id: 1501,
    kanjiChar: '弛',
    onyomi: ['chi チ', 'shi シ'],
    kunyomi: ['taru(mu) たる(む)', 'tayu(mu) たゆ(む)', 'yuru(mu) ゆる(む)'],
    displayMeanings: ['slacken', 'relax'],
    fullDisplayMeanings: ['slacken', 'relax'],
    meanings: ['slacken', 'relax']
  },
  {
    id: 1502,
    kanjiChar: '狸',
    onyomi: ['ri リ', 'rai ライ'],
    kunyomi: ['tanuki たぬき'],
    displayMeanings: ['tanuki', 'raccoon'],
    fullDisplayMeanings: ['tanuki', 'raccoon'],
    meanings: ['tanuki', 'raccoon']
  },
  {
    id: 1503,
    kanjiChar: '壬',
    onyomi: ['nin ニン', 'jin ジン', 'i イ'],
    kunyomi: ['mizunoe みずのえ'],
    displayMeanings: ['9th calendar sign'],
    fullDisplayMeanings: ['9th calendar sign'],
    meanings: ['9th calendar sign']
  },
  {
    id: 1504,
    kanjiChar: '硯',
    onyomi: ['ken ケン', 'gen ゲン'],
    kunyomi: ['suzuri すずり'],
    displayMeanings: ['inkstone'],
    fullDisplayMeanings: ['inkstone'],
    meanings: ['inkstone']
  }
];
export default N1;