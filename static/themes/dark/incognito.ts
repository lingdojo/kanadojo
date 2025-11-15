import { ThemeDefinition } from '../types';

export const incognitoTheme: ThemeDefinition = {
  id: 'incognito',
  name: 'Incognito',
  description: 'Stealth mode inspired by browser incognito',
  creator: {
    name: 'KanaDojo Team',
  },
  tags: ["dark"],

  // shadcn/ui color properties (oklch format)
  background: 'oklch(0.050 0 0)',
  foreground: 'oklch(0.5 0 0)',
  card: 'oklch(0.060 0 0)',
  cardForeground: 'oklch(0.5 0 0)',
  popover: 'oklch(0.060 0 0)',
  popoverForeground: 'oklch(0.5 0 0)',
  primary: 'oklch(0.922 0 0)',
  primaryForeground: 'oklch(0.050 0 0)',
  secondary: 'oklch(0.060 0 0)',
  secondaryForeground: 'oklch(0.5 0 0)',
  muted: 'oklch(0.060 0 0)',
  mutedForeground: 'oklch(0.500 0.150 36)',
  accent: 'oklch(0.060 0 0)',
  accentForeground: 'oklch(0.5 0 0)',
  destructive: 'oklch(0.704 0.191 22.216)',
  border: 'oklch(0.120 0 0)',
  input: 'oklch(0.120 0 0)',
  ring: 'oklch(0.500 0.150 36)',
  radius: '0.625rem',

  // Legacy properties for backwards compatibility
  backgroundColor: 'hsl(0, 0%, 5%)',
  cardColor: 'hsl(0, 0%, 6%)',
  borderColor: 'hsl(0, 0%, 12%)',
  mainColor: '#ff9900',
  secondaryColor: 'hsl(36, 50%, 50%)',
};
