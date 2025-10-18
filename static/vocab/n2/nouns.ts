const N2Nouns = [
  {
    word: '明け方',
    reading: 'akegata あけがた',
    displayMeanings: ['dawn'],
    meanings: ['dawn']
  },
  {
    word: '足跡',
    reading: 'ashiato あしあと',
    displayMeanings: ['footprints'],
    meanings: ['footprints']
  },
  {
    word: '売買',
    reading: 'baibai ばいばい',
    displayMeanings: ['trade', 'buying and selling'],
    meanings: ['trade', 'buying and selling']
  },
  {
    word: '売店',
    reading: 'baiten ばいてん',
    displayMeanings: ['stand', 'stall', 'booth', 'kiosk', 'store'],
    meanings: ['stand', 'stall', 'booth', 'kiosk', 'store']
  },
  {
    word: '募集',
    reading: 'boshuu ぼしゅう',
    displayMeanings: [
      'recruitment',
      'invitation',
      'taking applications',
      'solicitation'
    ],
    meanings: [
      'recruitment',
      'invitation',
      'taking applications',
      'solicitation'
    ]
  },
  {
    word: '長男',
    reading: 'chounan ちょうなん',
    displayMeanings: ['eldest son', 'first-born son'],
    meanings: ['eldest son', 'first-born son']
  },
  {
    word: '楕円',
    reading: 'daen だえん',
    displayMeanings: ['ellipse'],
    meanings: ['ellipse']
  },
  {
    word: '大学院',
    reading: 'daigakuin だいがくいん',
    displayMeanings: ['graduate school'],
    meanings: ['graduate school']
  },
  {
    word: '出入口',
    reading: 'deiriguchi でいりぐち',
    displayMeanings: ['exit and entrance'],
    meanings: ['exit and entrance']
  },
  {
    word: '宴会',
    reading: 'enkai えんかい',
    displayMeanings: ['party', 'banquet', 'reception', 'feast', 'dinner'],
    meanings: ['party', 'banquet', 'reception', 'feast', 'dinner']
  },
  {
    word: '円周',
    reading: 'enshuu えんしゅう',
    displayMeanings: ['circumference'],
    meanings: ['circumference']
  },
  {
    word: '遠足',
    reading: 'ensoku えんそく',
    displayMeanings: ['excursion', 'outing', 'trip'],
    meanings: ['excursion', 'outing', 'trip']
  },
  {
    word: '父母',
    reading: 'fubo ふぼ',
    displayMeanings: ['father and mother', 'parents'],
    meanings: ['father and mother', 'parents']
  },
  {
    word: '学科',
    reading: 'gakka がっか',
    displayMeanings: ['study subject', 'course of study', 'department'],
    meanings: ['study subject', 'course of study', 'department']
  },
  {
    word: '学会',
    reading: 'gakkai がっかい',
    displayMeanings: [
      'scientific society',
      'academic meeting',
      'academic conference'
    ],
    meanings: ['scientific society', 'academic meeting', 'academic conference']
  },
  {
    word: '学力',
    reading: 'gakuryoku がくりょく',
    displayMeanings: [
      'scholarly ability',
      'scholarship',
      'knowledge',
      'literary ability'
    ],
    meanings: [
      'scholarly ability',
      'scholarship',
      'knowledge',
      'literary ability'
    ]
  },
  {
    word: '外科',
    reading: 'geka げか',
    displayMeanings: ['surgery', 'department of surgery'],
    meanings: ['surgery', 'department of surgery']
  },
  {
    word: '花火',
    reading: 'hanabi はなび',
    displayMeanings: ['fireworks'],
    meanings: ['fireworks']
  },
  {
    word: '半径',
    reading: 'hankei はんけい',
    displayMeanings: ['radius'],
    meanings: ['radius']
  },
  {
    word: '半島',
    reading: 'hantou はんとう',
    displayMeanings: ['peninsula'],
    meanings: ['peninsula']
  },
  {
    word: '発売',
    reading: 'hatsubai はつばい',
    displayMeanings: ['sale', 'release (for sale)', 'launch (product)'],
    meanings: ['sale', 'release (for sale)', 'launch (product)']
  },
  {
    word: '早口',
    reading: 'hayaguchi はやぐち',
    displayMeanings: ['fast-talking', 'rapid talking'],
    meanings: ['fast-talking', 'rapid talking']
  },
  {
    word: '昼寝',
    reading: 'hirune ひるね',
    displayMeanings: ['nap, siesta'],
    meanings: ['nap', 'siesta']
  },
  {
    word: '意地悪',
    reading: 'ijiwaru いじわる',
    displayMeanings: ['malicious', 'ill-tempered', 'unkind'],
    meanings: ['malicious', 'ill-tempered', 'unkind']
  },
  {
    word: '移転',
    reading: 'iten いてん',
    displayMeanings: ['moving', 'relocation', 'change of address'],
    meanings: ['moving', 'relocation', 'change of address']
  },
  {
    word: '寺院',
    reading: "ji'in じいん",
    displayMeanings: ['Buddhist temple', 'religious building'],
    meanings: ['Buddhist temple', 'religious building']
  },
  {
    word: '人文科学',
    reading: 'jinbunkagaku じんぶんかがく',
    displayMeanings: ['humanities', 'social sciences', 'liberal arts'],
    meanings: ['humanities', 'social sciences', 'liberal arts']
  },
  {
    word: '自習',
    reading: 'jishuu じしゅう',
    displayMeanings: ['self-study', 'teaching oneself'],
    meanings: ['self-study', 'teaching oneself']
  },
  {
    word: '時速',
    reading: 'jisoku じそく',
    displayMeanings: ['speed (per hour)'],
    meanings: ['speed (per hour)']
  },
  {
    word: '実習',
    reading: 'jisshuu じっしゅう',
    displayMeanings: ['practice', 'training', 'practical exercise', 'drill'],
    meanings: ['practice', 'training', 'practical exercise', 'drill']
  },
  {
    word: '過半数',
    reading: 'kahansuu かはんすう',
    displayMeanings: ['majority'],
    meanings: ['majority']
  },
  {
    word: '開会',
    reading: 'kaikai かいかい',
    displayMeanings: ['opening of a meeting', 'starting (an event, etc)'],
    meanings: ['opening of a meeting', 'starting (an event, etc)']
  },
  {
    word: '会館',
    reading: 'kaikan かいかん',
    displayMeanings: ['meeting hall', 'assembly hall'],
    meanings: ['meeting hall', 'assembly hall']
  },
  {
    word: '回転',
    reading: 'kaiten かいてん',
    displayMeanings: ['rotation', 'revolution', 'turning'],
    meanings: ['rotation', 'revolution', 'turning']
  },
  {
    word: '加速',
    reading: 'kasoku かそく',
    displayMeanings: ['acceleration', 'speeding up'],
    meanings: ['acceleration', 'speeding up']
  },
  {
    word: '加速度',
    reading: 'kasokudo かそくど',
    displayMeanings: ['acceleration'],
    meanings: ['acceleration']
  },
  {
    word: '見学',
    reading: 'kengaku けんがく',
    displayMeanings: [
      'study by observation',
      'field trip',
      'tour',
      'review',
      'inspection'
    ],
    meanings: [
      'study by observation',
      'field trip',
      'tour',
      'review',
      'inspection'
    ]
  },
  {
    word: '国王',
    reading: 'kokuou こくおう',
    displayMeanings: ['king', 'queen', 'monarch', 'sovereign'],
    meanings: ['king', 'queen', 'monarch', 'sovereign']
  },
  {
    word: '国立',
    reading: 'kokuritsu こくりつ',
    displayMeanings: ['national'],
    meanings: ['national']
  },
  {
    word: '国籍',
    reading: 'kokuseki こくせき',
    displayMeanings: ['nationality', 'citizenship'],
    meanings: ['nationality', 'citizenship']
  },
  {
    word: '校舎',
    reading: 'kousha こうしゃ',
    displayMeanings: ['school building', 'schoolhouse'],
    meanings: ['school building', 'schoolhouse']
  },
  {
    word: '校庭',
    reading: 'koutei こうてい',
    displayMeanings: ['schoolyard', 'playground', 'school grounds', 'campus'],
    meanings: ['schoolyard', 'playground', 'school grounds', 'campus']
  },
  {
    word: '待合室',
    reading: 'machiaishitsu まちあいしつ',
    displayMeanings: ['waiting room'],
    meanings: ['waiting room']
  },
  {
    word: '窓口',
    reading: 'madoguchi まどぐち',
    displayMeanings: ['ticket window', 'teller window', 'counter'],
    meanings: ['ticket window', 'teller window', 'counter']
  },
  {
    word: '毎度',
    reading: 'maido まいど',
    displayMeanings: [
      'each time',
      'always',
      'often',
      'thank you for your continued patronage'
    ],
    meanings: [
      'each time',
      'always',
      'often',
      'thank you for your continued patronage'
    ]
  },
  {
    word: '真っ青',
    reading: 'massao まっさお',
    displayMeanings: [
      'deep blue',
      'bright blue',
      'ghastly pale',
      'white as a sheet'
    ],
    meanings: ['deep blue', 'bright blue', 'ghastly pale', 'white as a sheet']
  },
  {
    word: '真っ白',
    reading: 'masshiro まっしろ',
    displayMeanings: ['pure white', 'blank'],
    meanings: ['pure white', 'blank']
  },
  {
    word: '名刺',
    reading: 'meishi めいし',
    displayMeanings: ['business card'],
    meanings: ['business card']
  },
  {
    word: '店屋',
    reading: 'miseya みせや',
    displayMeanings: ['store', 'shop'],
    meanings: ['store', 'shop']
  },
  {
    word: '木材',
    reading: 'mokuzai もくざい',
    displayMeanings: ['lumber', 'timber', 'wood'],
    meanings: ['lumber', 'timber', 'wood']
  },
  {
    word: '内科',
    reading: 'naika ないか',
    displayMeanings: ['internal medicine'],
    meanings: ['internal medicine']
  },
  {
    word: '並木',
    reading: 'namiki なみき',
    displayMeanings: ['roadside tree', 'row of trees'],
    meanings: ['roadside tree', 'row of trees']
  },
  {
    word: '入社',
    reading: 'nyuusha にゅうしゃ',
    displayMeanings: ['joining a company'],
    meanings: ['joining a company']
  },
  {
    word: '理科',
    reading: 'rika りか',
    displayMeanings: ['science (department', 'course)'],
    meanings: ['science (department', 'course)']
  },
  {
    word: '領収',
    reading: 'ryoushuu りょうしゅう',
    displayMeanings: ['receipt (of money)', 'receiving'],
    meanings: ['receipt (of money)', 'receiving']
  },
  {
    word: '刺身',
    reading: 'sashimi さしみ',
    displayMeanings: ['sashimi (raw sliced fish, shellfish or crustaceans)'],
    meanings: ['sashimi (raw sliced fish, shellfish or crustaceans)']
  },
  {
    word: '青少年',
    reading: 'seishounen せいしょうねん',
    displayMeanings: ['youth', 'young person'],
    meanings: ['youth', 'young person']
  },
  {
    word: '赤道',
    reading: 'sekidou せきどう',
    displayMeanings: ['equator'],
    meanings: ['equator']
  },
  {
    word: '社会科学',
    reading: 'shakaikagaku しゃかいかがく',
    displayMeanings: ['social science'],
    meanings: ['social science']
  },
  {
    word: '社説',
    reading: 'shasetsu しゃせつ',
    displayMeanings: ['editorial', 'leading article', 'leader'],
    meanings: ['editorial', 'leading article', 'leader']
  },
  {
    word: '司会',
    reading: 'shikai しかい',
    displayMeanings: [
      'master of ceremonies',
      'leading a meeting',
      'presenter',
      'host'
    ],
    meanings: ['master of ceremonies', 'leading a meeting', 'presenter', 'host']
  },
  {
    word: '新幹線',
    reading: 'shinkansen しんかんせん',
    displayMeanings: ['Japanese bullet train'],
    meanings: ['Japanese bullet train']
  },
  {
    word: '白髪',
    reading: 'shiraga しらが',
    displayMeanings: ['white hair', 'grey hair'],
    meanings: ['white hair', 'grey hair']
  },
  {
    word: '自然科学',
    reading: 'shizenkagaku しぜんかがく',
    displayMeanings: ['natural science'],
    meanings: ['natural science']
  },
  {
    word: '書店',
    reading: 'shoten しょてん',
    displayMeanings: ['bookshop', 'bookstore'],
    meanings: ['bookshop', 'bookstore']
  },
  {
    word: '商社',
    reading: 'shousha しょうしゃ',
    displayMeanings: ['trading company', 'firm'],
    meanings: ['trading company', 'firm']
  },
  {
    word: '商店',
    reading: 'shouten しょうてん',
    displayMeanings: ['shop', 'small store', 'business', 'firm'],
    meanings: ['shop', 'small store', 'business', 'firm']
  },
  {
    word: '集合',
    reading: 'shuugou しゅうごう',
    displayMeanings: ['gathering', 'assembly', 'meeting'],
    meanings: ['gathering', 'assembly', 'meeting']
  },
  {
    word: '習字',
    reading: 'shuuji しゅうじ',
    displayMeanings: ['calligraphy', 'penmanship'],
    meanings: ['calligraphy', 'penmanship']
  },
  {
    word: '集会',
    reading: 'shuukai しゅうかい',
    displayMeanings: [
      'meeting',
      'assembly',
      'gathering',
      'convention',
      'rally'
    ],
    meanings: ['meeting', 'assembly', 'gathering', 'convention', 'rally']
  },
  {
    word: '速力',
    reading: 'sokuryoku そくりょく',
    displayMeanings: ['speed'],
    meanings: ['speed']
  },
  {
    word: '速達',
    reading: 'sokutatsu そくたつ',
    displayMeanings: ['express', 'special delivery'],
    meanings: ['express', 'special delivery']
  },
  {
    word: '足袋',
    reading: 'tabi たび',
    displayMeanings: ['Japanese socks (with split toe)'],
    meanings: ['Japanese socks (with split toe)']
  },
  {
    word: '特売',
    reading: 'tokubai とくばい',
    displayMeanings: ['special sale'],
    meanings: ['special sale']
  },
  {
    word: '透明',
    reading: 'toumei とうめい',
    displayMeanings: ['transparent', 'clear'],
    meanings: ['transparent', 'clear']
  },
  {
    word: '東洋',
    reading: 'touyou とうよう',
    displayMeanings: ['Orient'],
    meanings: ['Orient']
  },
  {
    word: '売れ行き',
    reading: 'ureyuki うれゆき',
    displayMeanings: ['sales', 'demand'],
    meanings: ['sales', 'demand']
  },
  {
    word: '売上',
    reading: 'uriage うりあげ',
    displayMeanings: ['amount sold', 'sales', 'proceeds', 'turnover'],
    meanings: ['amount sold', 'sales', 'proceeds', 'turnover']
  },
  {
    word: '売り切れ',
    reading: 'urikire うりきれ',
    displayMeanings: ['sold out'],
    meanings: ['sold out']
  },
  {
    word: '洋品店',
    reading: 'youhinten ようひんてん',
    displayMeanings: [
      'shop that handles Western-style apparel and accessories'
    ],
    meanings: ['shop that handles Western-style apparel and accessories']
  },
  {
    word: '輸血',
    reading: 'yuketsu ゆけつ',
    displayMeanings: ['blood transfusion'],
    meanings: ['blood transfusion']
  },
  {
    word: '輸送',
    reading: 'yusou ゆそう',
    displayMeanings: ['transport', 'transportation'],
    meanings: ['transport', 'transportation']
  },
  {
    word: '材木',
    reading: 'zaimoku ざいもく',
    displayMeanings: ['lumber', 'timber'],
    meanings: ['lumber', 'timber']
  }
];

export default N2Nouns;
