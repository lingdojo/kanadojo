import { ThemeDefinition } from '../types';

export const vaporpopTheme: ThemeDefinition = {
  id: 'vaporpop',
  name: 'Vaporpop',
  description: 'Vaporwave aesthetics meet pop art',
  creator: {
    name: 'KanaDojo Team',
  },
  tags: ["dark"],

  // shadcn/ui color properties (oklch format)
  background: 'oklch(0.140 0.060 176)',
  foreground: 'oklch(0.810 0.294 317)',
  card: 'oklch(0.210 0.060 176)',
  cardForeground: 'oklch(0.810 0.294 317)',
  popover: 'oklch(0.210 0.060 176)',
  popoverForeground: 'oklch(0.810 0.294 317)',
  primary: 'oklch(0.922 0 0)',
  primaryForeground: 'oklch(0.140 0.060 176)',
  secondary: 'oklch(0.210 0.060 176)',
  secondaryForeground: 'oklch(0.810 0.294 317)',
  muted: 'oklch(0.210 0.060 176)',
  mutedForeground: 'oklch(0.620 0.300 61)',
  accent: 'oklch(0.210 0.060 176)',
  accentForeground: 'oklch(0.810 0.294 317)',
  destructive: 'oklch(0.704 0.191 22.216)',
  border: 'oklch(0.330 0.060 176)',
  input: 'oklch(0.330 0.060 176)',
  ring: 'oklch(0.620 0.300 61)',
  radius: '0.625rem',

  // Legacy properties for backwards compatibility
  backgroundColor: 'hsla(176, 20%, 14%, 1)',
  cardColor: 'hsla(176, 20%, 21%, 1)',
  borderColor: 'hsla(176, 20%, 33%, 1)',
  mainColor: 'hsla(317, 98%, 81%, 1)',
  secondaryColor: 'hsla(61, 100%, 62%, 1)',
};
