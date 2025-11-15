import { ThemeDefinition } from '../types';

export const etherealDawnTheme: ThemeDefinition = {
  id: 'ethereal-dawn',
  name: 'Ethereal Dawn',
  creator: {
    name: 'KanaDojo Team',
  },
  tags: ["dark","mystical"],

  // shadcn/ui color properties (oklch format)
  background: 'oklch(0.120 0.156 263)',
  foreground: 'oklch(0.670 0.294 41)',
  card: 'oklch(0.170 0.171 263)',
  cardForeground: 'oklch(0.670 0.294 41)',
  popover: 'oklch(0.170 0.171 263)',
  popoverForeground: 'oklch(0.670 0.294 41)',
  primary: 'oklch(0.922 0 0)',
  primaryForeground: 'oklch(0.120 0.156 263)',
  secondary: 'oklch(0.170 0.171 263)',
  secondaryForeground: 'oklch(0.670 0.294 41)',
  muted: 'oklch(0.170 0.171 263)',
  mutedForeground: 'oklch(0.650 0.234 172)',
  accent: 'oklch(0.170 0.171 263)',
  accentForeground: 'oklch(0.670 0.294 41)',
  destructive: 'oklch(0.704 0.191 22.216)',
  border: 'oklch(0.290 0.171 263)',
  input: 'oklch(0.290 0.171 263)',
  ring: 'oklch(0.650 0.234 172)',
  radius: '0.625rem',

  // Legacy properties for backwards compatibility
  backgroundColor: 'hsla(263, 52%, 12%, 1)',
  cardColor: 'hsla(263, 57%, 17%, 1)',
  borderColor: 'hsla(263, 57%, 29%, 1)',
  mainColor: 'hsla(41, 98%, 67%, 1)',
  secondaryColor: 'hsla(172, 78%, 65%, 1)',
};
