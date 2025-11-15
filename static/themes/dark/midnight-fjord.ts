import { ThemeDefinition } from '../types';

export const midnightFjordTheme: ThemeDefinition = {
  id: 'midnight-fjord',
  name: 'Midnight Fjord',
  creator: {
    name: 'KanaDojo Team',
  },
  tags: ["dark","night"],

  // shadcn/ui color properties (oklch format)
  background: 'oklch(0.120 0.144 216)',
  foreground: 'oklch(0.650 0.300 48)',
  card: 'oklch(0.190 0.168 214)',
  cardForeground: 'oklch(0.650 0.300 48)',
  popover: 'oklch(0.190 0.168 214)',
  popoverForeground: 'oklch(0.650 0.300 48)',
  primary: 'oklch(0.922 0 0)',
  primaryForeground: 'oklch(0.120 0.144 216)',
  secondary: 'oklch(0.190 0.168 214)',
  secondaryForeground: 'oklch(0.650 0.300 48)',
  muted: 'oklch(0.190 0.168 214)',
  mutedForeground: 'oklch(0.680 0.300 198)',
  accent: 'oklch(0.190 0.168 214)',
  accentForeground: 'oklch(0.650 0.300 48)',
  destructive: 'oklch(0.704 0.191 22.216)',
  border: 'oklch(0.310 0.168 214)',
  input: 'oklch(0.310 0.168 214)',
  ring: 'oklch(0.680 0.300 198)',
  radius: '0.625rem',

  // Legacy properties for backwards compatibility
  backgroundColor: 'hsla(216, 48%, 12%, 1)',
  cardColor: 'hsla(214, 56%, 19%, 1)',
  borderColor: 'hsla(214, 56%, 31%, 1)',
  mainColor: 'hsla(48, 100%, 65%, 1)',
  secondaryColor: 'hsla(198, 100%, 68%, 1)',
};
