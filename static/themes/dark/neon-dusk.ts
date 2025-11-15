import { ThemeDefinition } from '../types';

export const neonDuskTheme: ThemeDefinition = {
  id: 'neon-dusk',
  name: 'Neon Dusk',
  creator: {
    name: 'KanaDojo Team',
  },
  tags: ["dark","neon","cyber","night"],

  // shadcn/ui color properties (oklch format)
  background: 'oklch(0.100 0.174 250)',
  foreground: 'oklch(0.500 0.300 190)',
  card: 'oklch(0.150 0.174 250)',
  cardForeground: 'oklch(0.500 0.300 190)',
  popover: 'oklch(0.150 0.174 250)',
  popoverForeground: 'oklch(0.500 0.300 190)',
  primary: 'oklch(0.922 0 0)',
  primaryForeground: 'oklch(0.100 0.174 250)',
  secondary: 'oklch(0.150 0.174 250)',
  secondaryForeground: 'oklch(0.500 0.300 190)',
  muted: 'oklch(0.150 0.174 250)',
  mutedForeground: 'oklch(0.480 0.300 45)',
  accent: 'oklch(0.150 0.174 250)',
  accentForeground: 'oklch(0.500 0.300 190)',
  destructive: 'oklch(0.704 0.191 22.216)',
  border: 'oklch(0.220 0.120 250)',
  input: 'oklch(0.220 0.120 250)',
  ring: 'oklch(0.480 0.300 45)',
  radius: '0.625rem',

  // Legacy properties for backwards compatibility
  backgroundColor: 'hsla(250, 58%, 10%, 1)',
  cardColor: 'hsla(250, 58%, 15%, 1)',
  borderColor: 'hsla(250, 40%, 22%, 1)',
  mainColor: 'hsla(190, 100%, 50%, 1)',
  secondaryColor: 'hsla(45, 100%, 48%, 1)',
};
