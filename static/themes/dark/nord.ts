import { ThemeDefinition } from '../types';

export const nordTheme: ThemeDefinition = {
  id: 'nord',
  name: 'Nord',
  description: 'Arctic, north-bluish color palette',
  creator: {
    name: 'KanaDojo Team',
  },
  tags: ["dark","popular"],

  // shadcn/ui color properties (oklch format)
  background: 'oklch(0.230 0.048 220)',
  foreground: 'oklch(0.650 0.084 92)',
  card: 'oklch(0.300 0.048 220)',
  cardForeground: 'oklch(0.650 0.084 92)',
  popover: 'oklch(0.300 0.048 220)',
  popoverForeground: 'oklch(0.650 0.084 92)',
  primary: 'oklch(0.922 0 0)',
  primaryForeground: 'oklch(0.230 0.048 220)',
  secondary: 'oklch(0.300 0.048 220)',
  secondaryForeground: 'oklch(0.650 0.084 92)',
  muted: 'oklch(0.300 0.048 220)',
  mutedForeground: 'oklch(0.5 0 0)',
  accent: 'oklch(0.300 0.048 220)',
  accentForeground: 'oklch(0.650 0.084 92)',
  destructive: 'oklch(0.704 0.191 22.216)',
  border: 'oklch(0.400 0.048 220)',
  input: 'oklch(0.400 0.048 220)',
  ring: 'oklch(0.5 0 0)',
  radius: '0.625rem',

  // Legacy properties for backwards compatibility
  backgroundColor: 'hsl(220, 16%, 23%)',
  cardColor: 'hsl(220, 16%, 30%)',
  borderColor: 'hsl(220, 16%, 40%)',
  mainColor: 'hsl(92, 28%, 65%)',
  secondaryColor: 'rgb(200, 157, 191)',
};
