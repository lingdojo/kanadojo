import { ThemeDefinition } from '../types';

export const nekokotoLightTheme: ThemeDefinition = {
  id: 'nekokoto-light',
  name: 'Nekokoto Light',
  description: 'Clean and minimal light theme from Nekokoto',
  creator: {
    name: 'Alekoi',
    url: 'https://nekokoto.com',
  },
  tags: ['light', 'minimal', 'nekokoto'],

  // shadcn/ui color properties (oklch format)
  background: 'oklch(0.98 0.01 330)',
  foreground: 'oklch(0.25 0.02 330)',
  card: 'oklch(0.995 0.005 330)',
  cardForeground: 'oklch(0.25 0.02 330)',
  popover: 'oklch(0.995 0.005 330)',
  popoverForeground: 'oklch(0.25 0.02 330)',
  primary: 'oklch(0.75 0.15 15)',
  primaryForeground: 'oklch(1 0 0)',
  secondary: 'oklch(0.92 0.08 280)',
  secondaryForeground: 'oklch(0.25 0.02 280)',
  muted: 'oklch(0.95 0.02 330)',
  mutedForeground: 'oklch(0.55 0.02 330)',
  accent: 'oklch(0.93 0.08 180)',
  accentForeground: 'oklch(0.25 0.02 180)',
  destructive: 'oklch(0.65 0.2 20)',
  border: 'oklch(0.92 0.02 330)',
  input: 'oklch(0.94 0.02 330)',
  ring: 'oklch(0.75 0.12 15)',

  // Chart colors
  chart1: 'oklch(0.75 0.15 350)',
  chart2: 'oklch(0.75 0.12 280)',
  chart3: 'oklch(0.75 0.12 180)',
  chart4: 'oklch(0.75 0.12 60)',
  chart5: 'oklch(0.75 0.12 120)',

  // Border radius
  radius: '0.925rem',

  // Legacy properties for backwards compatibility
  backgroundColor: 'oklch(0.98 0.01 330)',
  cardColor: 'oklch(0.995 0.005 330)',
  borderColor: 'oklch(0.92 0.02 330)',
  mainColor: 'oklch(0.25 0.02 330)',
  secondaryColor: 'oklch(0.55 0.02 330)',
};
