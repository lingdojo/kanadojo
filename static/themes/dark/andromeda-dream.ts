import { ThemeDefinition } from '../types';

export const andromedaDreamTheme: ThemeDefinition = {
  id: 'andromeda-dream',
  name: 'Andromeda Dream',
  creator: {
    name: 'KanaDojo Team',
  },
  tags: ["dark","space"],

  // shadcn/ui color properties (oklch format)
  background: 'oklch(0.100 0.153 264)',
  foreground: 'oklch(0.720 0.228 312)',
  card: 'oklch(0.160 0.159 264)',
  cardForeground: 'oklch(0.720 0.228 312)',
  popover: 'oklch(0.160 0.159 264)',
  popoverForeground: 'oklch(0.720 0.228 312)',
  primary: 'oklch(0.922 0 0)',
  primaryForeground: 'oklch(0.100 0.153 264)',
  secondary: 'oklch(0.160 0.159 264)',
  secondaryForeground: 'oklch(0.720 0.228 312)',
  muted: 'oklch(0.160 0.159 264)',
  mutedForeground: 'oklch(0.690 0.300 194)',
  accent: 'oklch(0.160 0.159 264)',
  accentForeground: 'oklch(0.720 0.228 312)',
  destructive: 'oklch(0.704 0.191 22.216)',
  border: 'oklch(0.270 0.159 264)',
  input: 'oklch(0.270 0.159 264)',
  ring: 'oklch(0.690 0.300 194)',
  radius: '0.625rem',

  // Legacy properties for backwards compatibility
  backgroundColor: 'hsla(264, 51%, 10%, 1)',
  cardColor: 'hsla(264, 53%, 16%, 1)',
  borderColor: 'hsla(264, 53%, 27%, 1)',
  mainColor: 'hsla(312, 76%, 72%, 1)',
  secondaryColor: 'hsla(194, 100%, 69%, 1)',
};
