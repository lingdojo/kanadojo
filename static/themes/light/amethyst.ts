import { ThemeDefinition } from '../types';

export const amethystTheme: ThemeDefinition = {
  id: 'amethyst',
  name: 'Amethyst',
  description: 'Gentle purple theme with crystal-like clarity',
  creator: {
    name: 'KanaDojo Team',
  },
  tags: ['light', 'purple', 'pastel', 'crystal'],

  // shadcn/ui color properties (oklch format)
  background: 'oklch(0.950 0.240 270)',
  foreground: 'oklch(0.650 0.300 270)',
  card: 'oklch(0.940 0.240 270)',
  cardForeground: 'oklch(0.650 0.300 270)',
  popover: 'oklch(0.940 0.240 270)',
  popoverForeground: 'oklch(0.650 0.300 270)',
  primary: 'oklch(0.205 0 0)',
  primaryForeground: 'oklch(0.985 0 0)',
  secondary: 'oklch(0.940 0.240 270)',
  secondaryForeground: 'oklch(0.650 0.300 270)',
  muted: 'oklch(0.940 0.240 270)',
  mutedForeground: 'oklch(0.700 0.300 270)',
  accent: 'oklch(0.940 0.240 270)',
  accentForeground: 'oklch(0.650 0.300 270)',
  destructive: 'oklch(0.577 0.245 27.325)',
  border: 'oklch(0.800 0.240 270)',
  input: 'oklch(0.800 0.240 270)',
  ring: 'oklch(0.700 0.300 270)',
  radius: '0.625rem',

  // Legacy properties for backwards compatibility
  backgroundColor: 'hsl(270, 80%, 95%)',
  cardColor: 'hsl(270, 80%, 94%)',
  borderColor: 'hsl(270, 80%, 80%)',
  mainColor: 'hsl(270, 100%, 65%)',
  secondaryColor: 'hsl(270, 100%, 70%)',
};
