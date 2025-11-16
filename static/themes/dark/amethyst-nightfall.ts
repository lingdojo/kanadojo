import { ThemeDefinition } from '../types';

export const amethystNightfallTheme: ThemeDefinition = {
  id: 'amethyst-nightfall',
  name: 'Amethyst Nightfall',
  creator: {
    name: 'KanaDojo Team',
  },
  tags: ["dark","purple","night"],

  // shadcn/ui color properties (oklch format)
  background: 'oklch(0.120 0.102 277)',
  foreground: 'oklch(0.800 0.150 285)',
  card: 'oklch(0.170 0.130 280)',
  cardForeground: 'oklch(0.780 0.145 282)',
  popover: 'oklch(0.160 0.140 274)',
  popoverForeground: 'oklch(0.790 0.140 287)',
  primary: 'oklch(0.922 0 0)',
  primaryForeground: 'oklch(0.120 0.102 277)',
  secondary: 'oklch(0.190 0.110 290)',
  secondaryForeground: 'oklch(0.770 0.135 280)',
  muted: 'oklch(0.165 0.095 275)',
  mutedForeground: 'oklch(0.620 0.120 280)',
  accent: 'oklch(0.185 0.160 270)',
  accentForeground: 'oklch(0.810 0.155 285)',
  destructive: 'oklch(0.704 0.191 22.216)',
  border: 'oklch(0.280 0.114 277)',
  input: 'oklch(0.280 0.114 277)',
  ring: 'oklch(0.650 0.231 214)',
  radius: '0.625rem',

  // Legacy properties for backwards compatibility
  backgroundColor: 'hsla(277, 34%, 12%, 1)',
  cardColor: 'hsla(277, 38%, 18%, 1)',
  borderColor: 'hsla(277, 38%, 28%, 1)',
  mainColor: 'hsla(289, 72%, 63%, 1)',
  secondaryColor: 'hsla(214, 77%, 65%, 1)',
};
