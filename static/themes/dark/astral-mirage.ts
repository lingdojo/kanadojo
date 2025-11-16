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
  foreground: 'oklch(0.840 0.200 275)',
  card: 'oklch(0.145 0.260 195)',
  cardForeground: 'oklch(0.820 0.195 272)',
  popover: 'oklch(0.160 0.250 188)',
  popoverForeground: 'oklch(0.830 0.190 278)',
  primary: 'oklch(0.922 0 0)',
  primaryForeground: 'oklch(0.090 0.225 191)',
  secondary: 'oklch(0.135 0.230 200)',
  secondaryForeground: 'oklch(0.810 0.185 270)',
  muted: 'oklch(0.150 0.235 192)',
  mutedForeground: 'oklch(0.650 0.180 275)',
  accent: 'oklch(0.155 0.270 185)',
  accentForeground: 'oklch(0.850 0.205 280)',
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
