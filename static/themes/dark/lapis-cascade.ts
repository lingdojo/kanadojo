import { ThemeDefinition } from '../types';

export const lapisCascadeTheme: ThemeDefinition = {
  id: 'lapis-cascade',
  name: 'Lapis Cascade',
  creator: {
    name: 'KanaDojo Team',
  },
  tags: ["dark","blue"],

  // shadcn/ui color properties (oklch format)
  background: 'oklch(0.110 0.150 215)',
  foreground: 'oklch(0.750 0.300 230)',
  card: 'oklch(0.170 0.165 215)',
  cardForeground: 'oklch(0.750 0.300 230)',
  popover: 'oklch(0.170 0.165 215)',
  popoverForeground: 'oklch(0.750 0.300 230)',
  primary: 'oklch(0.922 0 0)',
  primaryForeground: 'oklch(0.110 0.150 215)',
  secondary: 'oklch(0.170 0.165 215)',
  secondaryForeground: 'oklch(0.750 0.300 230)',
  muted: 'oklch(0.170 0.165 215)',
  mutedForeground: 'oklch(0.520 0.264 186)',
  accent: 'oklch(0.170 0.165 215)',
  accentForeground: 'oklch(0.750 0.300 230)',
  destructive: 'oklch(0.704 0.191 22.216)',
  border: 'oklch(0.290 0.165 215)',
  input: 'oklch(0.290 0.165 215)',
  ring: 'oklch(0.520 0.264 186)',
  radius: '0.625rem',

  // Legacy properties for backwards compatibility
  backgroundColor: 'hsla(215, 50%, 11%, 1)',
  cardColor: 'hsla(215, 55%, 17%, 1)',
  borderColor: 'hsla(215, 55%, 29%, 1)',
  mainColor: 'hsla(230, 100%, 75%, 1)',
  secondaryColor: 'hsla(186, 88%, 52%, 1)',
};
