import { ThemeDefinition } from '../types';

export const opalineZodiacTheme: ThemeDefinition = {
  id: 'opaline-zodiac',
  name: 'Opaline Zodiac',
  creator: {
    name: 'KanaDojo Team',
  },
  tags: ["dark","mystical"],

  // shadcn/ui color properties (oklch format)
  background: 'oklch(0.130 0.153 197)',
  foreground: 'oklch(0.670 0.300 174)',
  card: 'oklch(0.190 0.168 197)',
  cardForeground: 'oklch(0.670 0.300 174)',
  popover: 'oklch(0.190 0.168 197)',
  popoverForeground: 'oklch(0.670 0.300 174)',
  primary: 'oklch(0.922 0 0)',
  primaryForeground: 'oklch(0.130 0.153 197)',
  secondary: 'oklch(0.190 0.168 197)',
  secondaryForeground: 'oklch(0.670 0.300 174)',
  muted: 'oklch(0.190 0.168 197)',
  mutedForeground: 'oklch(0.730 0.300 56)',
  accent: 'oklch(0.190 0.168 197)',
  accentForeground: 'oklch(0.670 0.300 174)',
  destructive: 'oklch(0.704 0.191 22.216)',
  border: 'oklch(0.290 0.168 197)',
  input: 'oklch(0.290 0.168 197)',
  ring: 'oklch(0.730 0.300 56)',
  radius: '0.625rem',

  // Legacy properties for backwards compatibility
  backgroundColor: 'hsla(197, 51%, 13%, 1)',
  cardColor: 'hsla(197, 56%, 19%, 1)',
  borderColor: 'hsla(197, 56%, 29%, 1)',
  mainColor: 'hsla(174, 100%, 67%, 1)',
  secondaryColor: 'hsla(56, 100%, 73%, 1)',
};
