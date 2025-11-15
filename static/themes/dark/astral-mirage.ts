import { ThemeDefinition } from '../types';

export const astralMirageTheme: ThemeDefinition = {
  id: 'astral-mirage',
  name: 'Astral Mirage',
  creator: {
    name: 'KanaDojo Team',
  },
  tags: ["dark","space"],

  // shadcn/ui color properties (oklch format)
  background: 'oklch(0.090 0.225 191)',
  foreground: 'oklch(0.730 0.291 271)',
  card: 'oklch(0.130 0.243 191)',
  cardForeground: 'oklch(0.730 0.291 271)',
  popover: 'oklch(0.130 0.243 191)',
  popoverForeground: 'oklch(0.730 0.291 271)',
  primary: 'oklch(0.922 0 0)',
  primaryForeground: 'oklch(0.090 0.225 191)',
  secondary: 'oklch(0.130 0.243 191)',
  secondaryForeground: 'oklch(0.730 0.291 271)',
  muted: 'oklch(0.130 0.243 191)',
  mutedForeground: 'oklch(0.650 0.282 47)',
  accent: 'oklch(0.130 0.243 191)',
  accentForeground: 'oklch(0.730 0.291 271)',
  destructive: 'oklch(0.704 0.191 22.216)',
  border: 'oklch(0.270 0.243 191)',
  input: 'oklch(0.270 0.243 191)',
  ring: 'oklch(0.650 0.282 47)',
  radius: '0.625rem',

  // Legacy properties for backwards compatibility
  backgroundColor: 'hsla(191, 75%, 9%, 1)',
  cardColor: 'hsla(191, 81%, 13%, 1)',
  borderColor: 'hsla(191, 81%, 27%, 1)',
  mainColor: 'hsla(271, 97%, 73%, 1)',
  secondaryColor: 'hsla(47, 94%, 65%, 1)',
};
