import { ThemeDefinition } from '../types';

export const aizomeTheme: ThemeDefinition = {
  id: 'aizome',
  name: 'Aizome',
  description: 'Traditional Japanese indigo dyeing technique',
  creator: {
    name: 'KanaDojo Team',
  },
  tags: ["dark","japanese"],

  // shadcn/ui color properties (oklch format)
  background: 'oklch(0.110 0.144 215)',
  foreground: 'oklch(0.580 0.225 210)',
  card: 'oklch(0.150 0.138 215)',
  cardForeground: 'oklch(0.580 0.225 210)',
  popover: 'oklch(0.150 0.138 215)',
  popoverForeground: 'oklch(0.580 0.225 210)',
  primary: 'oklch(0.922 0 0)',
  primaryForeground: 'oklch(0.110 0.144 215)',
  secondary: 'oklch(0.150 0.138 215)',
  secondaryForeground: 'oklch(0.580 0.225 210)',
  muted: 'oklch(0.150 0.138 215)',
  mutedForeground: 'oklch(0.720 0.105 35)',
  accent: 'oklch(0.150 0.138 215)',
  accentForeground: 'oklch(0.580 0.225 210)',
  destructive: 'oklch(0.704 0.191 22.216)',
  border: 'oklch(0.230 0.129 215)',
  input: 'oklch(0.230 0.129 215)',
  ring: 'oklch(0.720 0.105 35)',
  radius: '0.625rem',

  // Legacy properties for backwards compatibility
  backgroundColor: 'hsla(215, 48%, 11%, 1)',
  cardColor: 'hsla(215, 46%, 15%, 1)',
  borderColor: 'hsla(215, 43%, 23%, 1)',
  mainColor: 'hsla(210, 75%, 58%, 1)',
  secondaryColor: 'hsla(35, 35%, 72%, 1)',
};
