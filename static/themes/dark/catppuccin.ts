import { ThemeDefinition } from '../types';

export const catppuccinTheme: ThemeDefinition = {
  id: 'catppuccin',
  name: 'Catppuccin',
  description: 'Soothing pastel theme for the high-spirited',
  creator: {
    name: 'KanaDojo Team',
  },
  tags: ["dark","popular"],

  // shadcn/ui color properties (oklch format)
  background: 'oklch(0.150 0.063 240)',
  foreground: 'oklch(0.5 0 0)',
  card: 'oklch(0.5 0 0)',
  cardForeground: 'oklch(0.5 0 0)',
  popover: 'oklch(0.5 0 0)',
  popoverForeground: 'oklch(0.5 0 0)',
  primary: 'oklch(0.922 0 0)',
  primaryForeground: 'oklch(0.150 0.063 240)',
  secondary: 'oklch(0.5 0 0)',
  secondaryForeground: 'oklch(0.5 0 0)',
  muted: 'oklch(0.5 0 0)',
  mutedForeground: 'oklch(0.880 0.192 226)',
  accent: 'oklch(0.5 0 0)',
  accentForeground: 'oklch(0.5 0 0)',
  destructive: 'oklch(0.704 0.191 22.216)',
  border: 'oklch(0.550 0.039 230)',
  input: 'oklch(0.550 0.039 230)',
  ring: 'oklch(0.880 0.192 226)',
  radius: '0.625rem',

  // Legacy properties for backwards compatibility
  backgroundColor: 'hsl(240, 21%, 15%)',
  cardColor: 'hsl(237deg, 16%, 23%)',
  borderColor: 'hsl(230, 13%, 55%)',
  mainColor: 'hsl(267deg, 84%, 81%)',
  secondaryColor: 'hsl(226, 64%, 88%)',
};
