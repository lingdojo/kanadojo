import { ThemeDefinition } from '../types';

export const sapphireFrostTheme: ThemeDefinition = {
  id: 'sapphire-frost',
  name: 'Sapphire Frost',
  creator: {
    name: 'KanaDojo Team',
  },
  tags: ["dark","blue"],

  // shadcn/ui color properties (oklch format)
  background: 'oklch(0.100 0.180 209)',
  foreground: 'oklch(0.680 0.300 196)',
  card: 'oklch(0.140 0.180 209)',
  cardForeground: 'oklch(0.680 0.300 196)',
  popover: 'oklch(0.140 0.180 209)',
  popoverForeground: 'oklch(0.680 0.300 196)',
  primary: 'oklch(0.922 0 0)',
  primaryForeground: 'oklch(0.100 0.180 209)',
  secondary: 'oklch(0.140 0.180 209)',
  secondaryForeground: 'oklch(0.680 0.300 196)',
  muted: 'oklch(0.140 0.180 209)',
  mutedForeground: 'oklch(0.670 0.165 170)',
  accent: 'oklch(0.140 0.180 209)',
  accentForeground: 'oklch(0.680 0.300 196)',
  destructive: 'oklch(0.704 0.191 22.216)',
  border: 'oklch(0.250 0.135 205)',
  input: 'oklch(0.250 0.135 205)',
  ring: 'oklch(0.670 0.165 170)',
  radius: '0.625rem',

  // Legacy properties for backwards compatibility
  backgroundColor: 'hsla(209, 60%, 10%, 1)',
  cardColor: 'hsla(209, 60%, 14%, 1)',
  borderColor: 'hsla(205, 45%, 25%, 1)',
  mainColor: 'hsla(196, 100%, 68%, 1)',
  secondaryColor: 'hsla(170, 55%, 67%, 1)',
};
