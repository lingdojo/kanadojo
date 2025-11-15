import { ThemeDefinition } from '../types';

export const cosmicPrismTheme: ThemeDefinition = {
  id: 'cosmic-prism',
  name: 'Cosmic Prism',
  creator: {
    name: 'KanaDojo Team',
  },
  tags: ["dark","space"],

  // shadcn/ui color properties (oklch format)
  background: 'oklch(0.110 0.195 287)',
  foreground: 'oklch(0.710 0.300 341)',
  card: 'oklch(0.180 0.216 287)',
  cardForeground: 'oklch(0.710 0.300 341)',
  popover: 'oklch(0.180 0.216 287)',
  popoverForeground: 'oklch(0.710 0.300 341)',
  primary: 'oklch(0.922 0 0)',
  primaryForeground: 'oklch(0.110 0.195 287)',
  secondary: 'oklch(0.180 0.216 287)',
  secondaryForeground: 'oklch(0.710 0.300 341)',
  muted: 'oklch(0.180 0.216 287)',
  mutedForeground: 'oklch(0.680 0.291 179)',
  accent: 'oklch(0.180 0.216 287)',
  accentForeground: 'oklch(0.710 0.300 341)',
  destructive: 'oklch(0.704 0.191 22.216)',
  border: 'oklch(0.280 0.216 287)',
  input: 'oklch(0.280 0.216 287)',
  ring: 'oklch(0.680 0.291 179)',
  radius: '0.625rem',

  // Legacy properties for backwards compatibility
  backgroundColor: 'hsla(287, 65%, 11%, 1)',
  cardColor: 'hsla(287, 72%, 18%, 1)',
  borderColor: 'hsla(287, 72%, 28%, 1)',
  mainColor: 'hsla(341, 100%, 71%, 1)',
  secondaryColor: 'hsla(179, 97%, 68%, 1)',
};
