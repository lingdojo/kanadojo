import { ThemeDefinition } from '../types';

export const cyberpunkTheme: ThemeDefinition = {
  id: 'cyberpunk',
  name: 'Cyberpunk',
  description: 'Neon-lit dystopian future with cyan and magenta accents',
  creator: {
    name: 'KanaDojo Team',
  },
  tags: ['dark', 'neon', 'cyber', 'futuristic', 'pink', 'cyan'],

  // shadcn/ui color properties (oklch format)
  background: 'oklch(0.080 0.090 240)',
  foreground: 'oklch(0.600 0.300 180)',
  card: 'oklch(0.120 0.075 240)',
  cardForeground: 'oklch(0.600 0.300 180)',
  popover: 'oklch(0.120 0.075 240)',
  popoverForeground: 'oklch(0.600 0.300 180)',
  primary: 'oklch(0.922 0 0)',
  primaryForeground: 'oklch(0.080 0.090 240)',
  secondary: 'oklch(0.120 0.075 240)',
  secondaryForeground: 'oklch(0.600 0.300 180)',
  muted: 'oklch(0.120 0.075 240)',
  mutedForeground: 'oklch(0.650 0.300 320)',
  accent: 'oklch(0.120 0.075 240)',
  accentForeground: 'oklch(0.600 0.300 180)',
  destructive: 'oklch(0.704 0.191 22.216)',
  border: 'oklch(0.200 0.060 240)',
  input: 'oklch(0.200 0.060 240)',
  ring: 'oklch(0.650 0.300 320)',
  radius: '0.625rem',

  // Legacy properties for backwards compatibility
  backgroundColor: 'hsl(240, 30%, 8%)',
  cardColor: 'hsl(240, 25%, 12%)',
  borderColor: 'hsl(240, 20%, 20%)',
  mainColor: 'hsl(180, 100%, 60%)',
  secondaryColor: 'hsl(320, 100%, 65%)',
};
