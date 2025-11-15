import { ThemeDefinition } from '../types';

export const christmasEveTheme: ThemeDefinition = {
  id: 'christmas-eve',
  name: 'Christmas Eve',
  description: 'Midnight blue with warm golden lights',
  creator: {
    name: 'KanaDojo Team',
  },
  tags: ['dark', 'christmas', 'seasonal', 'blue', 'gold'],

  // shadcn/ui color properties (oklch format)
  background: 'oklch(0.150 0.135 230)',
  foreground: 'oklch(0.600 0.285 45)',
  card: 'oklch(0.220 0.150 230)',
  cardForeground: 'oklch(0.600 0.285 45)',
  popover: 'oklch(0.220 0.150 230)',
  popoverForeground: 'oklch(0.600 0.285 45)',
  primary: 'oklch(0.922 0 0)',
  primaryForeground: 'oklch(0.150 0.135 230)',
  secondary: 'oklch(0.220 0.150 230)',
  secondaryForeground: 'oklch(0.600 0.285 45)',
  muted: 'oklch(0.220 0.150 230)',
  mutedForeground: 'oklch(0.400 0.165 140)',
  accent: 'oklch(0.220 0.150 230)',
  accentForeground: 'oklch(0.600 0.285 45)',
  destructive: 'oklch(0.704 0.191 22.216)',
  border: 'oklch(0.300 0.150 230)',
  input: 'oklch(0.300 0.150 230)',
  ring: 'oklch(0.400 0.165 140)',
  radius: '0.625rem',

  // Legacy properties for backwards compatibility
  backgroundColor: 'hsla(230, 45%, 15%, 1)',
  cardColor: 'hsla(230, 50%, 22%, 1)',
  borderColor: 'hsla(230, 50%, 30%, 1)',
  mainColor: 'hsla(45, 95%, 60%, 1)',
  secondaryColor: 'hsla(140, 55%, 40%, 1)',
};
