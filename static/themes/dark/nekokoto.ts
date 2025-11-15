import { ThemeDefinition } from '../types';

export const nekokotoDarkTheme: ThemeDefinition = {
  id: 'nekokoto-dark',
  name: 'Nekokoto Dark',
  description: 'Clean and minimal dark theme from Nekokoto',
  creator: {
    name: 'Alekoi',
    url: 'https://nekokoto.com',
  },
  tags: ['dark', 'minimal', 'nekokoto'],

  // shadcn/ui color properties (oklch format)
  background: 'oklch(0.12 0.03 330)',
  foreground: 'oklch(0.95 0.02 330)',
  card: 'oklch(0.16 0.04 330)',
  cardForeground: 'oklch(0.95 0.02 330)',
  popover: 'oklch(0.16 0.04 330)',
  popoverForeground: 'oklch(0.95 0.02 330)',
  primary: 'oklch(0.75 0.18 330)',
  primaryForeground: 'oklch(0.12 0.03 330)',
  secondary: 'oklch(0.22 0.06 320)',
  secondaryForeground: 'oklch(0.90 0.05 330)',
  muted: 'oklch(0.20 0.03 330)',
  mutedForeground: 'oklch(0.70 0.04 330)',
  accent: 'oklch(0.25 0.06 310)',
  accentForeground: 'oklch(0.90 0.05 330)',
  destructive: 'oklch(0.70 0.18 15)',
  border: 'oklch(0.24 0.04 330)',
  input: 'oklch(0.18 0.04 330)',
  ring: 'oklch(0.75 0.15 330)',

  // Chart colors
  chart1: 'oklch(0.75 0.15 330)',
  chart2: 'oklch(0.72 0.15 320)',
  chart3: 'oklch(0.75 0.12 310)',
  chart4: 'oklch(0.75 0.12 340)',
  chart5: 'oklch(0.70 0.12 300)',

  // Border radius
  radius: '0.925rem',

  // Legacy properties for backwards compatibility
  backgroundColor: 'oklch(0.12 0.03 330)',
  cardColor: 'oklch(0.16 0.04 330)',
  borderColor: 'oklch(0.24 0.04 330)',
  mainColor: 'oklch(0.95 0.02 330)',
  secondaryColor: 'oklch(0.70 0.04 330)',
};
