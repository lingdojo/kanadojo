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
  foreground: 'oklch(0.750 0.160 210)',
  card: 'oklch(0.160 0.150 218)',
  cardForeground: 'oklch(0.720 0.155 212)',
  popover: 'oklch(0.145 0.165 208)',
  popoverForeground: 'oklch(0.740 0.150 215)',
  primary: 'oklch(0.922 0 0)',
  primaryForeground: 'oklch(0.110 0.144 215)',
  secondary: 'oklch(0.180 0.120 225)',
  secondaryForeground: 'oklch(0.700 0.140 218)',
  muted: 'oklch(0.155 0.135 220)',
  mutedForeground: 'oklch(0.580 0.110 210)',
  accent: 'oklch(0.170 0.180 205)',
  accentForeground: 'oklch(0.760 0.165 210)',
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
