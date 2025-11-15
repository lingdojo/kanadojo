import { ThemeDefinition } from '../types';

export const gruvboxTheme: ThemeDefinition = {
  id: 'gruvbox',
  name: 'Gruvbox',
  description: 'Retro groove color scheme for coders',
  creator: {
    name: 'KanaDojo Team',
  },
  tags: ["dark","popular"],

  // shadcn/ui color properties (oklch format)
  background: 'oklch(0.130 0 0)',
  foreground: 'oklch(0.520 0.042 120)',
  card: 'oklch(0.180 0 0)',
  cardForeground: 'oklch(0.520 0.042 120)',
  popover: 'oklch(0.180 0 0)',
  popoverForeground: 'oklch(0.520 0.042 120)',
  primary: 'oklch(0.922 0 0)',
  primaryForeground: 'oklch(0.130 0 0)',
  secondary: 'oklch(0.180 0 0)',
  secondaryForeground: 'oklch(0.520 0.042 120)',
  muted: 'oklch(0.180 0 0)',
  mutedForeground: 'oklch(0.610 0.102 344)',
  accent: 'oklch(0.180 0 0)',
  accentForeground: 'oklch(0.520 0.042 120)',
  destructive: 'oklch(0.704 0.191 22.216)',
  border: 'oklch(0.250 0 0)',
  input: 'oklch(0.250 0 0)',
  ring: 'oklch(0.610 0.102 344)',
  radius: '0.625rem',

  // Legacy properties for backwards compatibility
  backgroundColor: 'hsla(0, 0%, 13%, 1)',
  cardColor: 'hsla(0, 0%, 18%, 1)',
  borderColor: 'hsla(0, 0%, 25%, 1)',
  mainColor: 'hsla(120, 14%, 52%, 1)',
  secondaryColor: 'hsla(344, 34%, 61%, 1)',
};
