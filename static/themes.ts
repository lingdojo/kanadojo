import {
  Atom,
  Sun,
  Moon,
  // Sparkles,
  LucideIcon,
  CloudLightning,
  TreePine,
} from 'lucide-react';

interface Theme {
  id: string;
  backgroundColor: string;
  cardColor: string;
  borderColor: string;
  mainColor: string;
  secondaryColor: string;
}

interface ThemeGroup {
  name: string;
  icon: LucideIcon;
  themes: Theme[];
}

const themes: ThemeGroup[] = [
  {
    name: 'Base',
    icon: Atom,
    themes: [
      {
        id: 'light',
        backgroundColor: 'hsla(210, 17%, 100%, 1)',
        cardColor: 'hsla(210, 17%, 91%, 1)',
        borderColor: 'hsla(210, 17%, 76%, 1)',

        mainColor: 'hsla(0, 0%, 0%, 1)',
        secondaryColor: 'hsla(0, 0%, 35%, 1)',
      },
      {
        id: 'dark',
        backgroundColor: 'hsla(0, 0%, 11%, 1)',
        cardColor: 'hsla(0, 0%, 16%, 1)',
        borderColor: 'hsla(0, 0%, 30%, 1)',

        mainColor: 'hsla(0, 0%, 100%, 1)',
        secondaryColor: 'hsla(0, 0%, 75%, 1)',
      },
    ],
  },
  {
    name: 'Light',
    icon: Sun,
    themes: [
      {
        id: 'long',
        backgroundColor: 'hsl(350, 100%, 91%)',
        cardColor: 'hsl(350, 100%, 90%)',
        borderColor: 'hsl(350, 100%, 85%)',
        mainColor: ' hsl(270, 70%, 65%)',
        secondaryColor: 'hsl(270, 100%, 70%)',
      },
      {
        id: 'amethyst',
        backgroundColor: 'hsl(270, 80%, 95%)',
        cardColor: 'hsl(270, 80%, 94%)',
        borderColor: 'hsl(270, 80%, 80%)',
        mainColor: 'hsl(270, 100%, 65%)',
        secondaryColor: 'hsl(270, 100%, 70%)',
      },
    ],
  },

  {
    name: 'Dark',
    icon: Moon,
    themes: [
      {
        id: 'monkeytype',
        backgroundColor: 'hsla(210, 5%, 22%, 1)',
        cardColor: 'hsla(220, 5%, 27%, 1)',
        borderColor: 'hsla(220, 5%, 35%, 1)',
        mainColor: 'hsla(49, 82%, 49%, 1)',
        secondaryColor: 'hsla(49, 14%, 81%, 1)',
      },
      {
        id: 'nord',
        backgroundColor: 'hsl(220, 16%, 23%)',
        cardColor: 'hsl(220, 16%, 30%)',
        borderColor: 'hsl(220, 16%, 40%)',
        mainColor: 'hsl(92, 28%, 65%)',
        secondaryColor: 'rgb(200, 157, 191)',
      },
      {
        id: 'yukata',
        backgroundColor: 'hsla(220, 50%, 10%, 1)',
        cardColor: 'hsla(220, 48%, 14%, 1)',
        borderColor: 'hsla(220, 45%, 22%, 1)',
        mainColor: 'hsla(350, 82%, 62%, 1)',
        secondaryColor: 'hsla(280, 65%, 68%, 1)',
      },
      {
        id: 'dusk-voyager',
        backgroundColor: 'hsla(216, 32%, 11%, 1)',
        cardColor: 'hsla(216, 29%, 16%, 1)',
        borderColor: 'hsla(216, 26%, 24%, 1)',
        mainColor: 'hsla(198, 78%, 71%, 1)',
        secondaryColor: 'hsla(49, 94%, 57%, 1)',
      },
      {
        id: 'aizome',
        backgroundColor: 'hsla(215, 48%, 11%, 1)',
        cardColor: 'hsla(215, 46%, 15%, 1)',
        borderColor: 'hsla(215, 43%, 23%, 1)',
        mainColor: 'hsla(210, 75%, 58%, 1)',
        secondaryColor: 'hsla(35, 35%, 72%, 1)',
      },
      {
        id: 'fuji',
        backgroundColor: 'hsla(210, 28%, 11%, 1)',
        cardColor: 'hsla(210, 26%, 15%, 1)',
        borderColor: 'hsla(210, 24%, 23%, 1)',
        mainColor: 'hsla(200, 55%, 75%, 1)',
        secondaryColor: 'hsla(0, 0%, 92%, 1)',
      },

      {
        id: 'arashiyama',
        backgroundColor: 'hsla(150, 32%, 10%, 1)',
        cardColor: 'hsla(150, 30%, 14%, 1)',
        borderColor: 'hsla(150, 28%, 22%, 1)',
        mainColor: 'hsla(125, 65%, 52%, 1)',
        secondaryColor: 'hsla(85, 40%, 65%, 1)',
      },
      {
        id: 'moonlit-waterfall',
        backgroundColor: 'hsla(215, 52%, 13%, 1)',
        cardColor: 'hsla(249, 32%, 17%, 1)',
        borderColor: 'hsla(183, 87%, 53%, 1)',
        mainColor: 'hsla(267, 97%, 81%, 1)',
        secondaryColor: 'hsla(180, 100%, 89%, 1)',
      },
      {
        id: 'mirage-solis',
        backgroundColor: 'hsla(322, 68%, 14%, 1)',
        cardColor: 'hsla(24, 86%, 17%, 1)',
        borderColor: 'hsla(281, 78%, 38%, 1)',
        mainColor: 'hsla(43, 100%, 68%, 1)',
        secondaryColor: 'hsla(199, 87%, 70%, 1)',
      },
      {
        id: 'wasabi-garden',
        backgroundColor: 'hsla(100, 42%, 12%, 1)',
        cardColor: 'hsla(100, 40%, 16%, 1)',
        borderColor: 'hsla(100, 36%, 24%, 1)',
        mainColor: 'hsla(115, 85%, 60%, 1)',
        secondaryColor: 'hsla(33, 80%, 60%, 1)',
      },
      {
        id: 'wabi',
        backgroundColor: 'hsla(3, 20%, 11%, 1)',
        cardColor: 'hsla(3, 18%, 15%, 1)',
        borderColor: 'hsla(3, 17%, 22%, 1)',
        mainColor: 'hsla(8, 85%, 59%, 1)',
        secondaryColor: 'hsla(32, 25%, 70%, 1)',
      },

      {
        id: 'matrix',
        backgroundColor: 'hsl(0, 0%, 0%)',
        cardColor: 'hsl(0, 0%, 2.5%)',
        borderColor: 'hsl(0, 0%, 5%)',
        mainColor: '#15ff00',
        secondaryColor: 'hsl(115, 50%, 50%)',
      },
      {
        id: 'incognito',
        backgroundColor: 'hsl(0, 0%, 5%)',
        cardColor: 'hsl(0, 0%, 6%)',
        borderColor: 'hsl(0, 0%, 12%)',
        mainColor: '#ff9900',
        secondaryColor: 'hsl(36, 50%, 50%)',
      },
      {
        id: 'noir',
        backgroundColor: 'hsla(0, 0%, 0%, 1)',
        cardColor: 'hsla(0, 0%, 5%, 1)',
        borderColor: 'hsla(0, 0%, 20%, 1)',
        mainColor: 'hsla(0, 0%, 100%, 1)',
        secondaryColor: 'hsla(0, 0%, 75%, 1)',
      },

      {
        id: 'midnight-blossom',
        backgroundColor: 'hsla(265, 40%, 14%, 1)',
        cardColor: 'hsla(265, 40%, 17%, 1)',
        borderColor: 'hsla(265, 30%, 27%, 1)',
        mainColor: 'hsla(330, 75%, 60%, 1)',
        secondaryColor: 'hsla(285, 60%, 65%, 1)',
      },
      {
        id: 'neon-dusk',
        backgroundColor: 'hsla(250, 58%, 10%, 1)',
        cardColor: 'hsla(250, 58%, 15%, 1)',
        borderColor: 'hsla(250, 40%, 22%, 1)',
        mainColor: 'hsla(190, 100%, 50%, 1)',
        secondaryColor: 'hsla(45, 100%, 48%, 1)',
      },
      {
        id: 'mystic-forest',
        backgroundColor: 'hsla(146, 30%, 12%, 1)',
        cardColor: 'hsla(146, 32%, 17%, 1)',
        borderColor: 'hsla(146, 26%, 25%, 1)',
        mainColor: 'hsla(111, 62%, 45%, 1)',
        secondaryColor: 'hsla(96, 45%, 60%, 1)',
      },
      {
        id: 'velvet-night',
        backgroundColor: 'hsla(220, 26%, 13%, 1)',
        cardColor: 'hsla(220, 26%, 17%, 1)',
        borderColor: 'hsla(220, 22%, 28%, 1)',
        mainColor: 'hsla(271, 85%, 57%, 1)',
        secondaryColor: 'hsla(340, 77%, 53%, 1)',
      },
      {
        id: 'cosmic-charcoal',
        backgroundColor: 'hsla(210, 15%, 11%, 1)',
        cardColor: 'hsla(210, 15%, 15%, 1)',
        borderColor: 'hsla(210, 15%, 25%, 1)',
        mainColor: 'hsla(15, 95%, 62%, 1)',
        secondaryColor: 'hsla(29, 100%, 55%, 1)',
      },
      {
        id: 'sapphire-frost',
        backgroundColor: 'hsla(209, 60%, 10%, 1)',
        cardColor: 'hsla(209, 60%, 14%, 1)',
        borderColor: 'hsla(205, 45%, 25%, 1)',
        mainColor: 'hsla(196, 100%, 68%, 1)',
        secondaryColor: 'hsla(170, 55%, 67%, 1)',
      },
      {
        id: 'jade-mirage',
        backgroundColor: 'hsla(163, 21%, 13%, 1)',
        cardColor: 'hsla(163, 25%, 17%, 1)',
        borderColor: 'hsla(166, 25%, 27%, 1)',
        mainColor: 'hsla(150, 66%, 54%, 1)',
        secondaryColor: 'hsla(170, 64%, 54%, 1)',
      },
      {
        id: 'nebula-veil',
        backgroundColor: 'hsla(248, 31%, 11%, 1)',
        cardColor: 'hsla(263, 41%, 17%, 1)',
        borderColor: 'hsla(286, 54%, 27%, 1)',
        mainColor: 'hsla(293, 83%, 74%, 1)',
        secondaryColor: 'hsla(192, 92%, 71%, 1)',
      },
      {
        id: 'velvet-citrus-dream',
        backgroundColor: 'hsla(274, 33%, 13%, 1)',
        cardColor: 'hsla(274, 36%, 17%, 1)',
        borderColor: 'hsla(274, 36%, 27%, 1)',
        mainColor: 'hsla(48, 100%, 67%, 1)',
        secondaryColor: 'hsla(17, 98%, 64%, 1)',
      },
      {
        id: 'arctic-inferno',
        backgroundColor: 'hsla(217, 44%, 14%, 1)',
        cardColor: 'hsla(220, 60%, 17%, 1)',
        borderColor: 'hsla(220, 60%, 27%, 1)',
        mainColor: 'hsla(6, 96%, 66%, 1)',
        secondaryColor: 'hsla(181, 100%, 65%, 1)',
      },
      {
        id: 'haunted-lagoon',
        backgroundColor: 'hsla(194, 80%, 9%, 1)',
        cardColor: 'hsla(177, 47%, 14%, 1)',
        borderColor: 'hsla(177, 47%, 27%, 1)',
        mainColor: 'hsla(168, 81%, 56%, 1)',
        secondaryColor: 'hsla(117, 39%, 64%, 1)',
      },
      {
        id: 'celestial-grove',
        backgroundColor: 'hsla(170, 35%, 10%, 1)',
        cardColor: 'hsla(170, 37%, 15%, 1)',
        borderColor: 'hsla(170, 37%, 25%, 1)',
        mainColor: 'hsla(86, 68%, 57%, 1)',
        secondaryColor: 'hsla(43, 93%, 64%, 1)',
      },
      {
        id: 'amethyst-nightfall',
        backgroundColor: 'hsla(277, 34%, 12%, 1)',
        cardColor: 'hsla(277, 38%, 18%, 1)',
        borderColor: 'hsla(277, 38%, 28%, 1)',
        mainColor: 'hsla(289, 72%, 63%, 1)',
        secondaryColor: 'hsla(214, 77%, 65%, 1)',
      },
      {
        id: 'luminous-tide',
        backgroundColor: 'hsla(209, 49%, 11%, 1)',
        cardColor: 'hsla(209, 54%, 16%, 1)',
        borderColor: 'hsla(209, 54%, 26%, 1)',
        mainColor: 'hsla(45, 96%, 62%, 1)',
        secondaryColor: 'hsla(188, 85%, 50%, 1)',
      },
      {
        id: 'orchid-eclipse',
        backgroundColor: 'hsla(325, 24%, 14%, 1)',
        cardColor: 'hsla(325, 27%, 18%, 1)',
        borderColor: 'hsla(325, 27%, 28%, 1)',
        mainColor: 'hsla(304, 71%, 67%, 1)',
        secondaryColor: 'hsla(164, 75%, 54%, 1)',
      },
      {
        id: 'andromeda-dream',
        backgroundColor: 'hsla(264, 51%, 10%, 1)',
        cardColor: 'hsla(264, 53%, 16%, 1)',
        borderColor: 'hsla(264, 53%, 27%, 1)',
        mainColor: 'hsla(312, 76%, 72%, 1)',
        secondaryColor: 'hsla(194, 100%, 69%, 1)',
      },
      {
        id: 'luminous-nebula',
        backgroundColor: 'hsla(239, 71%, 9%, 1)',
        cardColor: 'hsla(239, 74%, 16%, 1)',
        borderColor: 'hsla(239, 74%, 28%, 1)',
        mainColor: 'hsla(288, 99%, 70%, 1)',
        secondaryColor: 'hsla(199, 100%, 75%, 1)',
      },
      {
        id: 'seraphic-aurora',
        backgroundColor: 'hsla(217, 52%, 12%, 1)',
        cardColor: 'hsla(197, 56%, 18%, 1)',
        borderColor: 'hsla(197, 56%, 28%, 1)',
        mainColor: 'hsla(153, 100%, 60%, 1)',
        secondaryColor: 'hsla(273, 97%, 74%, 1)',
      },
      {
        id: 'cosmic-prism',
        backgroundColor: 'hsla(287, 65%, 11%, 1)',
        cardColor: 'hsla(287, 72%, 18%, 1)',
        borderColor: 'hsla(287, 72%, 28%, 1)',
        mainColor: 'hsla(341, 100%, 71%, 1)',
        secondaryColor: 'hsla(179, 97%, 68%, 1)',
      },
      {
        id: 'opaline-zodiac',
        backgroundColor: 'hsla(197, 51%, 13%, 1)',
        cardColor: 'hsla(197, 56%, 19%, 1)',
        borderColor: 'hsla(197, 56%, 29%, 1)',
        mainColor: 'hsla(174, 100%, 67%, 1)',
        secondaryColor: 'hsla(56, 100%, 73%, 1)',
      },
      {
        id: 'velvet-abyss',
        backgroundColor: 'hsla(258, 60%, 8%, 1)',
        cardColor: 'hsla(258, 60%, 12%, 1)',
        borderColor: 'hsla(258, 60%, 24%, 1)',
        mainColor: 'hsla(12, 83%, 55%, 1)',
        secondaryColor: 'hsla(172, 86%, 65%, 1)',
      },
      {
        id: 'polaris-veil',
        backgroundColor: 'hsla(222, 46%, 12%, 1)',
        cardColor: 'hsla(222, 46%, 17%, 1)',
        borderColor: 'hsla(222, 46%, 29%, 1)',
        mainColor: 'hsla(196, 100%, 72%, 1)',
        secondaryColor: 'hsla(60, 100%, 73%, 1)',
      },
      {
        id: 'rose-nebula',
        backgroundColor: 'hsla(310, 38%, 13%, 1)',
        cardColor: 'hsla(310, 38%, 19%, 1)',
        borderColor: 'hsla(310, 38%, 28%, 1)',
        mainColor: 'hsla(346, 75%, 69%, 1)',
        secondaryColor: 'hsla(273, 98%, 75%, 1)',
      },
      {
        id: 'azure-twilight',
        backgroundColor: 'hsla(219, 37%, 11%, 1)',
        cardColor: 'hsla(219, 39%, 16%, 1)',
        borderColor: 'hsla(219, 39%, 27%, 1)',
        mainColor: 'hsla(187, 97%, 58%, 1)',
        secondaryColor: 'hsla(261, 74%, 78%, 1)',
      },
      {
        id: 'ethereal-dawn',
        backgroundColor: 'hsla(263, 52%, 12%, 1)',
        cardColor: 'hsla(263, 57%, 17%, 1)',
        borderColor: 'hsla(263, 57%, 29%, 1)',
        mainColor: 'hsla(41, 98%, 67%, 1)',
        secondaryColor: 'hsla(172, 78%, 65%, 1)',
      },
      {
        id: 'hyperion-skies',
        backgroundColor: 'hsla(209, 54%, 11%, 1)',
        cardColor: 'hsla(209, 57%, 17%, 1)',
        borderColor: 'hsla(209, 57%, 26%, 1)',
        mainColor: 'hsla(199, 96%, 68%, 1)',
        secondaryColor: 'hsla(47, 100%, 63%, 1)',
      },
      {
        id: 'velvet-starlight',
        backgroundColor: 'hsla(291, 39%, 11%, 1)',
        cardColor: 'hsla(291, 43%, 19%, 1)',
        borderColor: 'hsla(291, 43%, 32%, 1)',
        mainColor: 'hsla(317, 94%, 67%, 1)',
        secondaryColor: 'hsla(235, 92%, 82%, 1)',
      },
      {
        id: 'astral-mirage',
        backgroundColor: 'hsla(191, 75%, 9%, 1)',
        cardColor: 'hsla(191, 81%, 13%, 1)',
        borderColor: 'hsla(191, 81%, 27%, 1)',
        mainColor: 'hsla(271, 97%, 73%, 1)',
        secondaryColor: 'hsla(47, 94%, 65%, 1)',
      },
      {
        id: 'oceanic-aurora',
        backgroundColor: 'hsla(204, 67%, 12%, 1)',
        cardColor: 'hsla(204, 70%, 17%, 1)',
        borderColor: 'hsla(204, 70%, 27%, 1)',
        mainColor: 'hsla(162, 92%, 62%, 1)',
        secondaryColor: 'hsla(280, 78%, 76%, 1)',
      },
      {
        id: 'zephyrite-dream',
        backgroundColor: 'hsla(157, 29%, 11%, 1)',
        cardColor: 'hsla(157, 33%, 17%, 1)',
        borderColor: 'hsla(157, 33%, 29%, 1)',
        mainColor: 'hsla(196, 93%, 69%, 1)',
        secondaryColor: 'hsla(98, 82%, 63%, 1)',
      },
      {
        id: 'lapis-cascade',
        backgroundColor: 'hsla(215, 50%, 11%, 1)',
        cardColor: 'hsla(215, 55%, 17%, 1)',
        borderColor: 'hsla(215, 55%, 29%, 1)',
        mainColor: 'hsla(230, 100%, 75%, 1)',
        secondaryColor: 'hsla(186, 88%, 52%, 1)',
      },
      {
        id: 'lucid-dusk',
        backgroundColor: 'hsla(246, 42%, 13%, 1)',
        cardColor: 'hsla(246, 45%, 18%, 1)',
        borderColor: 'hsla(246, 45%, 28%, 1)',
        mainColor: 'hsla(6, 81%, 68%, 1)',
        secondaryColor: 'hsla(182, 100%, 68%, 1)',
      },
      {
        id: 'sapphire-bloom',
        backgroundColor: 'hsla(224, 41%, 14%, 1)',
        cardColor: 'hsla(224, 47%, 19%, 1)',
        borderColor: 'hsla(224, 47%, 30%, 1)',
        mainColor: 'hsla(261, 100%, 83%, 1)',
        secondaryColor: 'hsla(166, 100%, 59%, 1)',
      },
      {
        id: 'celestite-frost',
        backgroundColor: 'hsla(196, 43%, 13%, 1)',
        cardColor: 'hsla(196, 50%, 19%, 1)',
        borderColor: 'hsla(196, 50%, 29%, 1)',
        mainColor: 'hsla(196, 100%, 85%, 1)',
        secondaryColor: 'hsla(314, 86%, 76%, 1)',
      },
      {
        id: 'topaz-drift',
        backgroundColor: 'hsla(172, 34%, 11%, 1)',
        cardColor: 'hsla(172, 37%, 17%, 1)',
        borderColor: 'hsla(172, 37%, 29%, 1)',
        mainColor: 'hsla(45, 98%, 71%, 1)',
        secondaryColor: 'hsla(18, 88%, 64%, 1)',
      },
      {
        id: 'nebulous-maw',
        backgroundColor: 'hsla(252, 59%, 8%, 1)',
        cardColor: 'hsla(247, 65%, 18%, 1)',
        borderColor: 'hsla(247, 65%, 28%, 1)',
        mainColor: 'hsla(46, 100%, 69%, 1)',
        secondaryColor: 'hsla(321, 99%, 78%, 1)',
      },
      {
        id: 'vortex-requiem',
        backgroundColor: 'hsla(290, 51%, 10%, 1)',
        cardColor: 'hsla(227, 41%, 18%, 1)',
        borderColor: 'hsla(227, 41%, 29%, 1)',
        mainColor: 'hsla(192, 100%, 64%, 1)',
        secondaryColor: 'hsla(292, 100%, 62%, 1)',
      },
      {
        id: 'ultraviolet-oracle',
        backgroundColor: 'hsla(265, 81%, 9%, 1)',
        cardColor: 'hsla(267, 82%, 16%, 1)',
        borderColor: 'hsla(267, 82%, 29%, 1)',
        mainColor: 'hsla(210, 100%, 69%, 1)',
        secondaryColor: 'hsla(273, 93%, 73%, 1)',
      },
      {
        id: 'blue-emberveil',
        backgroundColor: 'hsla(212, 60%, 10%, 1)',
        cardColor: 'hsla(288, 35%, 16%, 1)',
        borderColor: 'hsla(288, 35%, 29%, 1)',
        mainColor: 'hsla(199, 94%, 71%, 1)',
        secondaryColor: 'hsla(19, 97%, 61%, 1)',
      },
      {
        id: 'nautilus-star',
        backgroundColor: 'hsla(205, 47%, 8%, 1)',
        cardColor: 'hsla(205, 47%, 16%, 1)',
        borderColor: 'hsla(205, 47%, 29%, 1)',
        mainColor: 'hsla(207, 95%, 65%, 1)',
        secondaryColor: 'hsla(30, 92%, 72%, 1)',
      },
      {
        id: 'cyanic-wisdom',
        backgroundColor: 'hsla(197, 62%, 9%, 1)',
        cardColor: 'hsla(203, 75%, 15%, 1)',
        borderColor: 'hsla(203, 75%, 28%, 1)',
        mainColor: 'hsla(192, 100%, 73%, 1)',
        secondaryColor: 'hsla(331, 79%, 74%, 1)',
      },
      {
        id: 'twilight-oracle',
        backgroundColor: 'hsla(256, 42%, 12%, 1)',
        cardColor: 'hsla(256, 42%, 16%, 1)',
        borderColor: 'hsla(256, 42%, 25%, 1)',
        mainColor: 'hsla(5, 92%, 66%, 1)',
        secondaryColor: 'hsla(208, 70%, 70%, 1)',
      },
      {
        id: 'silica-dusk',
        backgroundColor: 'hsla(19, 29%, 8%, 1)',
        cardColor: 'hsla(29, 17%, 14%, 1)',
        borderColor: 'hsla(29, 17%, 24%, 1)',
        mainColor: 'hsla(359, 95%, 78%, 1)',
        secondaryColor: 'hsla(186, 88%, 69%, 1)',
      },
      {
        id: 'galaxy-oracle',
        backgroundColor: 'hsla(219, 78%, 7%, 1)',
        cardColor: 'hsla(254, 67%, 14%, 1)',
        borderColor: 'hsla(254, 67%, 25%, 1)',
        mainColor: 'hsla(296, 84%, 78%, 1)',
        secondaryColor: 'hsla(222, 100%, 73%, 1)',
      },
      {
        id: 'fathom-frost',
        backgroundColor: 'hsla(200, 58%, 10%, 1)',
        cardColor: 'hsla(202, 68%, 13%, 1)',
        borderColor: 'hsla(202, 68%, 27%, 1)',
        mainColor: 'hsla(123, 84%, 59%, 1)',
        secondaryColor: 'hsla(319, 91%, 78%, 1)',
      },
      {
        id: 'lapis-solara',
        backgroundColor: 'hsla(226, 63%, 9%, 1)',
        cardColor: 'hsla(208, 69%, 18%, 1)',
        borderColor: 'hsla(208, 69%, 30%, 1)',
        mainColor: 'hsla(57, 100%, 77%, 1)',
        secondaryColor: 'hsla(259, 97%, 82%, 1)',
      },
      {
        id: 'arcane-fathoms',
        backgroundColor: 'hsla(207, 74%, 10%, 1)',
        cardColor: 'hsla(207, 74%, 13%, 1)',
        borderColor: 'hsla(207, 74%, 20%, 1)',
        mainColor: 'hsla(97, 76%, 66%, 1)',
        secondaryColor: 'hsla(281, 93%, 80%, 1)',
      },
      {
        id: 'melancholy-halo',
        backgroundColor: 'hsla(222, 29%, 9%, 1)',
        cardColor: 'hsla(253, 30%, 16%, 1)',
        borderColor: 'hsla(253, 30%, 27%, 1)',
        mainColor: 'hsla(257, 94%, 74%, 1)',
        secondaryColor: 'hsla(159, 96%, 66%, 1)',
      },
      {
        id: 'azure-mirage',
        backgroundColor: 'hsla(191, 100%, 7%, 1)',
        cardColor: 'hsla(191, 93%, 16%, 1)',
        borderColor: 'hsla(191, 93%, 27%, 1)',
        mainColor: 'hsla(271, 99%, 72%, 1)',
        secondaryColor: 'hsla(52, 100%, 69%, 1)',
      },
      {
        id: 'cobalt-lumen',
        backgroundColor: 'hsla(205, 90%, 8%, 1)',
        cardColor: 'hsla(210, 71%, 18%, 1)',
        borderColor: 'hsla(210, 71%, 31%, 1)',
        mainColor: 'hsla(193, 97%, 67%, 1)',
        secondaryColor: 'hsla(299, 94%, 62%, 1)',
      },
      {
        id: 'aero-blossom',
        backgroundColor: 'hsla(200, 25%, 10%, 1)',
        cardColor: 'hsla(222, 61%, 18%, 1)',
        borderColor: 'hsla(222, 61%, 29%, 1)',
        mainColor: 'hsla(155, 93%, 66%, 1)',
        secondaryColor: 'hsla(335, 92%, 72%, 1)',
      },
      {
        id: 'prairie-star',
        backgroundColor: 'hsla(220, 46%, 11%, 1)',
        cardColor: 'hsla(220, 48%, 18%, 1)',
        borderColor: 'hsla(220, 48%, 28%, 1)',
        mainColor: 'hsla(218, 93%, 61%, 1)',
        secondaryColor: 'hsla(0, 92%, 64%, 1)',
      },
      {
        id: 'midnight-fjord',
        backgroundColor: 'hsla(216, 48%, 12%, 1)',
        cardColor: 'hsla(214, 56%, 19%, 1)',
        borderColor: 'hsla(214, 56%, 31%, 1)',
        mainColor: 'hsla(48, 100%, 65%, 1)',
        secondaryColor: 'hsla(198, 100%, 68%, 1)',
      },
      {
        id: 'liquid-graphite',
        backgroundColor: 'hsla(222, 12%, 9%, 1)',
        cardColor: 'hsla(222, 12%, 18%, 1)',
        borderColor: 'hsla(222, 12%, 31%, 1)',
        mainColor: 'hsla(195, 70%, 63%, 1)',
        secondaryColor: 'hsla(29, 100%, 59%, 1)',
      },
      {
        id: 'digital-bloom',
        backgroundColor: 'hsla(308, 16%, 13%, 1)',
        cardColor: 'hsla(308, 16%, 20%, 1)',
        borderColor: 'hsla(308, 16%, 31%, 1)',
        mainColor: 'hsla(93, 90%, 55%, 1)',
        secondaryColor: 'hsla(207, 95%, 66%, 1)',
      },
      {
        id: 'velvet-nightshade',
        backgroundColor: 'hsla(268, 34%, 12%, 1)',
        cardColor: 'hsla(268, 34%, 20%, 1)',
        borderColor: 'hsla(268, 34%, 30%, 1)',
        mainColor: 'hsla(98, 72%, 62%, 1)',
        secondaryColor: 'hsla(19, 86%, 56%, 1)',
      },
      {
        id: 'rainforest-mist',
        backgroundColor: 'hsla(141, 26%, 11%, 1)',
        cardColor: 'hsla(141, 26%, 19%, 1)',
        borderColor: 'hsla(141, 26%, 29%, 1)',
        mainColor: 'hsla(183, 38%, 62%, 1)',
        secondaryColor: 'hsla(43, 83%, 64%, 1)',
      },
      {
        id: 'jungle-twilight',
        backgroundColor: 'hsla(164, 31%, 10%, 1)',
        cardColor: 'hsla(164, 31%, 17%, 1)',
        borderColor: 'hsla(164, 31%, 27%, 1)',
        mainColor: 'hsla(27, 98%, 65%, 1)',
        secondaryColor: 'hsla(244, 64%, 69%, 1)',
      },
      {
        id: 'neon-tokyo',
        backgroundColor: 'hsla(288, 25%, 12%, 1)',
        cardColor: 'hsla(288, 25%, 19%, 1)',
        borderColor: 'hsla(288, 25%, 29%, 1)',
        mainColor: 'hsla(327, 92%, 67%, 1)',
        secondaryColor: 'hsla(195, 100%, 54%, 1)',
      },
      {
        id: 'nyc-midnight',
        backgroundColor: 'hsla(227, 27%, 11%, 1)',
        cardColor: 'hsla(227, 27%, 17%, 1)',
        borderColor: 'hsla(227, 27%, 29%, 1)',
        mainColor: 'hsla(45, 100%, 66%, 1)',
        secondaryColor: 'hsla(192, 92%, 61%, 1)',
      },
      {
        id: 'paris-metro',
        backgroundColor: 'hsla(216, 16%, 13%, 1)',
        cardColor: 'hsla(216, 16%, 20%, 1)',
        borderColor: 'hsla(216, 16%, 29%, 1)',
        mainColor: 'hsla(339, 77%, 63%, 1)',
        secondaryColor: 'hsla(60, 90%, 64%, 1)',
      },
      {
        id: 'london-fog',
        backgroundColor: 'hsla(203, 9%, 15%, 1)',
        cardColor: 'hsla(203, 9%, 21%, 1)',
        borderColor: 'hsla(203, 9%, 31%, 1)',
        mainColor: 'hsla(75, 29%, 69%, 1)',
        secondaryColor: 'hsla(207, 86%, 74%, 1)',
      },
      {
        id: 'synthwave-night',
        backgroundColor: 'hsla(265, 26%, 13%, 1)',
        cardColor: 'hsla(265, 26%, 20%, 1)',
        borderColor: 'hsla(265, 26%, 31%, 1)',
        mainColor: 'hsla(314, 92%, 66%, 1)',
        secondaryColor: 'hsla(173, 97%, 60%, 1)',
      },
      {
        id: 'old-library',
        backgroundColor: 'hsla(34, 18%, 12%, 1)',
        cardColor: 'hsla(34, 18%, 19%, 1)',
        borderColor: 'hsla(34, 18%, 30%, 1)',
        secondaryColor: 'hsla(30, 41%, 60%, 1)',
        mainColor: 'hsla(48, 92%, 58%, 1)',
      },
      {
        id: 'vaporpop',
        backgroundColor: 'hsla(176, 20%, 14%, 1)',
        cardColor: 'hsla(176, 20%, 21%, 1)',
        borderColor: 'hsla(176, 20%, 33%, 1)',
        mainColor: 'hsla(317, 98%, 81%, 1)',
        secondaryColor: 'hsla(61, 100%, 62%, 1)',
      },
      {
        id: 'gruvbox',
        backgroundColor: 'hsla(0, 0%, 13%, 1)',
        cardColor: 'hsla(0, 0%, 18%, 1)',
        borderColor: 'hsla(0, 0%, 25%, 1)',
        mainColor: 'hsla(120, 14%, 52%, 1)',
        secondaryColor: 'hsla(344, 34%, 61%, 1)',
      },
      {
        id: 'absolute-darkness',
        backgroundColor: 'hsla(264, 26%, 4%, 1)',
        cardColor: 'hsla(240, 14%, 14%, 1)',
        borderColor: 'hsla(240, 14%, 22%, 1)',
        mainColor: 'hsla(28, 82%, 47%, 1)',
        secondaryColor: 'hsla(272, 84%, 60%, 1)',
      },

      {
        id: 'catppuccin',
        backgroundColor: 'hsl(240, 21%, 15%)',
        cardColor: 'hsl(237deg, 16%, 23%)',
        borderColor: 'hsl(230, 13%, 55%)',
        mainColor: 'hsl(267deg, 84%, 81%)',
        secondaryColor: 'hsl(226, 64%, 88%)',
      },
      {
        id: 'cosmic-dream',
        backgroundColor: 'hsla(260, 62%, 11%, 1)',
        cardColor: 'hsla(260, 62%, 18%, 1)',
        borderColor: 'hsla(260, 62%, 25%, 1)',
        mainColor: 'hsla(294, 100%, 67%, 1)',
        secondaryColor: 'hsla(192, 100%, 86%, 1)',
      },
    ],
  },

  // 🎃 NEW HALLOWEEN THEME GROUP 🎃
  {
    name: 'Halloween',
    icon: CloudLightning, // Using Moon, as suggested, but could be a custom icon
    themes: [
      {
        id: 'pumpkin-night',
        // Dark, deep purple/black background
        backgroundColor: 'hsla(280, 20%, 8%, 1)',
        cardColor: 'hsla(280, 25%, 15%, 1)',
        borderColor: 'hsla(280, 25%, 22%, 1)',
        // Bright orange for main focus
        mainColor: 'hsla(25, 100%, 60%, 1)',
        // Spooky accent color (magenta/purple)
        secondaryColor: 'hsla(315, 70%, 55%, 1)',
      },
      {
        id: 'spooky-glow',
        // Very dark background
        backgroundColor: 'hsla(210, 10%, 5%, 1)',
        cardColor: 'hsla(210, 15%, 12%, 1)',
        borderColor: 'hsla(210, 15%, 22%, 1)',
        // Neon green/slime color for main focus
        mainColor: 'hsla(90, 85%, 65%, 1)',
        // Bright purple for contrast
        secondaryColor: 'hsla(270, 90%, 70%, 1)',
      },
    ],
  },

  // 🎄 CHRISTMAS THEME GROUP 🎄
  {
    name: 'Christmas',
    icon: TreePine,
    themes: [
      {
        id: 'santa-night',
        // Deep night blue background
        backgroundColor: 'hsla(220, 50%, 12%, 1)',
        cardColor: 'hsla(220, 55%, 18%, 1)',
        borderColor: 'hsla(220, 55%, 25%, 1)',
        // Bright festive red
        mainColor: 'hsla(355, 85%, 55%, 1)',
        // Golden star accent
        secondaryColor: 'hsla(45, 100%, 55%, 1)',
      },
      {
        id: 'winter-wonderland',
        // Cool mint background
        backgroundColor: 'hsla(170, 30%, 92%, 1)',
        cardColor: 'hsla(170, 35%, 88%, 1)',
        borderColor: 'hsla(170, 35%, 75%, 1)',
        // Peppermint red
        mainColor: 'hsla(355, 75%, 50%, 1)',
        // Fresh mint green
        secondaryColor: 'hsla(165, 60%, 45%, 1)',
      },
      {
        id: 'christmas-eve',
        // Midnight blue background
        backgroundColor: 'hsla(230, 45%, 15%, 1)',
        cardColor: 'hsla(230, 50%, 22%, 1)',
        borderColor: 'hsla(230, 50%, 30%, 1)',
        // Warm golden light
        mainColor: 'hsla(45, 95%, 60%, 1)',
        // Holly green
        secondaryColor: 'hsla(140, 55%, 40%, 1)',
      },

      {
        id: 'northern-lights',
        // Dark arctic night
        backgroundColor: 'hsla(200, 30%, 10%, 1)',
        cardColor: 'hsla(200, 35%, 16%, 1)',
        borderColor: 'hsla(200, 35%, 25%, 1)',
        // Bright aurora green
        mainColor: 'hsla(165, 90%, 55%, 1)',
        // Aurora purple/pink
        secondaryColor: 'hsla(280, 85%, 65%, 1)',
      },
    ],
  },
];

// Flatten all themes into a map for easy lookup
const themeMap = new Map<string, Theme>();
themes.forEach(group => {
  group.themes.forEach(theme => {
    themeMap.set(theme.id, theme);
  });
});

export function applyTheme(themeId: string) {
  const theme = themeMap.get(themeId);

  if (!theme) {
    console.error(`Theme "${themeId}" not found`);
    return;
  }

  const root = document.documentElement;

  root.style.setProperty('--background-color', theme.backgroundColor);
  root.style.setProperty('--card-color', theme.cardColor);
  root.style.setProperty('--border-color', theme.borderColor);
  root.style.setProperty('--main-color', theme.mainColor);

  if (theme.secondaryColor) {
    root.style.setProperty('--secondary-color', theme.secondaryColor);
  }

  root.setAttribute('data-theme', theme.id);
}

// Helper to get a specific theme
export function getTheme(themeId: string): Theme | undefined {
  return themeMap.get(themeId);
}

export default themes;
