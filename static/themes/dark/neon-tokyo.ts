import { ThemeDefinition } from '../types';

export const neonTokyoTheme: ThemeDefinition = {
  id: 'neon-tokyo',
  name: 'Neon Tokyo',
  description: 'Electric nights in Tokyo',
  creator: {
    name: 'KanaDojo Team',
  },
  tags: ["dark","neon","cyber","japanese"],

  // shadcn/ui color properties (oklch format)
  background: 'oklch(0.120 0.075 288)',
  foreground: 'oklch(0.670 0.276 327)',
  card: 'oklch(0.190 0.075 288)',
  cardForeground: 'oklch(0.670 0.276 327)',
  popover: 'oklch(0.190 0.075 288)',
  popoverForeground: 'oklch(0.670 0.276 327)',
  primary: 'oklch(0.922 0 0)',
  primaryForeground: 'oklch(0.120 0.075 288)',
  secondary: 'oklch(0.190 0.075 288)',
  secondaryForeground: 'oklch(0.670 0.276 327)',
  muted: 'oklch(0.190 0.075 288)',
  mutedForeground: 'oklch(0.540 0.300 195)',
  accent: 'oklch(0.190 0.075 288)',
  accentForeground: 'oklch(0.670 0.276 327)',
  destructive: 'oklch(0.704 0.191 22.216)',
  border: 'oklch(0.290 0.075 288)',
  input: 'oklch(0.290 0.075 288)',
  ring: 'oklch(0.540 0.300 195)',
  radius: '0.625rem',

  // Legacy properties for backwards compatibility
  backgroundColor: 'hsla(288, 25%, 12%, 1)',
  cardColor: 'hsla(288, 25%, 19%, 1)',
  borderColor: 'hsla(288, 25%, 29%, 1)',
  mainColor: 'hsla(327, 92%, 67%, 1)',
  secondaryColor: 'hsla(195, 100%, 54%, 1)',
};
