import { ThemeDefinition } from '../types';

export const zephyriteDreamTheme: ThemeDefinition = {
  id: 'zephyrite-dream',
  name: 'Zephyrite Dream',
  creator: {
    name: 'KanaDojo Team',
  },
  tags: ["dark"],

  // shadcn/ui color properties (oklch format)
  background: 'oklch(0.110 0.087 157)',
  foreground: 'oklch(0.690 0.279 196)',
  card: 'oklch(0.170 0.099 157)',
  cardForeground: 'oklch(0.690 0.279 196)',
  popover: 'oklch(0.170 0.099 157)',
  popoverForeground: 'oklch(0.690 0.279 196)',
  primary: 'oklch(0.922 0 0)',
  primaryForeground: 'oklch(0.110 0.087 157)',
  secondary: 'oklch(0.170 0.099 157)',
  secondaryForeground: 'oklch(0.690 0.279 196)',
  muted: 'oklch(0.170 0.099 157)',
  mutedForeground: 'oklch(0.630 0.246 98)',
  accent: 'oklch(0.170 0.099 157)',
  accentForeground: 'oklch(0.690 0.279 196)',
  destructive: 'oklch(0.704 0.191 22.216)',
  border: 'oklch(0.290 0.099 157)',
  input: 'oklch(0.290 0.099 157)',
  ring: 'oklch(0.630 0.246 98)',
  radius: '0.625rem',

  // Legacy properties for backwards compatibility
  backgroundColor: 'hsla(157, 29%, 11%, 1)',
  cardColor: 'hsla(157, 33%, 17%, 1)',
  borderColor: 'hsla(157, 33%, 29%, 1)',
  mainColor: 'hsla(196, 93%, 69%, 1)',
  secondaryColor: 'hsla(98, 82%, 63%, 1)',
};
