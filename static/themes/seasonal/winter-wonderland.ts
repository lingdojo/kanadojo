import { ThemeDefinition } from '../types';

export const winterWonderlandTheme: ThemeDefinition = {
  id: 'winter-wonderland',
  name: 'Winter Wonderland',
  description: 'Cool mint background with peppermint colors',
  creator: {
    name: 'KanaDojo Team',
  },
  tags: ['light', 'christmas', 'seasonal', 'mint', 'red'],

  // shadcn/ui color properties (oklch format)
  background: 'oklch(0.920 0.090 170)',
  foreground: 'oklch(0.500 0.225 355)',
  card: 'oklch(0.880 0.105 170)',
  cardForeground: 'oklch(0.500 0.225 355)',
  popover: 'oklch(0.880 0.105 170)',
  popoverForeground: 'oklch(0.500 0.225 355)',
  primary: 'oklch(0.205 0 0)',
  primaryForeground: 'oklch(0.985 0 0)',
  secondary: 'oklch(0.880 0.105 170)',
  secondaryForeground: 'oklch(0.500 0.225 355)',
  muted: 'oklch(0.880 0.105 170)',
  mutedForeground: 'oklch(0.450 0.180 165)',
  accent: 'oklch(0.880 0.105 170)',
  accentForeground: 'oklch(0.500 0.225 355)',
  destructive: 'oklch(0.577 0.245 27.325)',
  border: 'oklch(0.750 0.105 170)',
  input: 'oklch(0.750 0.105 170)',
  ring: 'oklch(0.450 0.180 165)',
  radius: '0.625rem',

  // Legacy properties for backwards compatibility
  backgroundColor: 'hsla(170, 30%, 92%, 1)',
  cardColor: 'hsla(170, 35%, 88%, 1)',
  borderColor: 'hsla(170, 35%, 75%, 1)',
  mainColor: 'hsla(355, 75%, 50%, 1)',
  secondaryColor: 'hsla(165, 60%, 45%, 1)',
};
