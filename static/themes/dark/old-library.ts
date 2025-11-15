import { ThemeDefinition } from '../types';

export const oldLibraryTheme: ThemeDefinition = {
  id: 'old-library',
  name: 'Old Library',
  creator: {
    name: 'KanaDojo Team',
  },
  tags: ["dark","retro"],

  // shadcn/ui color properties (oklch format)
  background: 'oklch(0.120 0.054 34)',
  foreground: 'oklch(0.600 0.123 30)',
  card: 'oklch(0.190 0.054 34)',
  cardForeground: 'oklch(0.600 0.123 30)',
  popover: 'oklch(0.190 0.054 34)',
  popoverForeground: 'oklch(0.600 0.123 30)',
  primary: 'oklch(0.922 0 0)',
  primaryForeground: 'oklch(0.120 0.054 34)',
  secondary: 'oklch(0.190 0.054 34)',
  secondaryForeground: 'oklch(0.600 0.123 30)',
  muted: 'oklch(0.190 0.054 34)',
  mutedForeground: 'oklch(0.580 0.276 48)',
  accent: 'oklch(0.190 0.054 34)',
  accentForeground: 'oklch(0.600 0.123 30)',
  destructive: 'oklch(0.704 0.191 22.216)',
  border: 'oklch(0.300 0.054 34)',
  input: 'oklch(0.300 0.054 34)',
  ring: 'oklch(0.580 0.276 48)',
  radius: '0.625rem',

  // Legacy properties for backwards compatibility
  backgroundColor: 'hsla(34, 18%, 12%, 1)',
  cardColor: 'hsla(34, 18%, 19%, 1)',
  borderColor: 'hsla(34, 18%, 30%, 1)',
  mainColor: 'hsla(30, 41%, 60%, 1)',
  secondaryColor: 'hsla(48, 92%, 58%, 1)',
};
