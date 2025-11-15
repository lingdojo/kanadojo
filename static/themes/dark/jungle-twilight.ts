import { ThemeDefinition } from '../types';

export const jungleTwilightTheme: ThemeDefinition = {
  id: 'jungle-twilight',
  name: 'Jungle Twilight',
  creator: {
    name: 'KanaDojo Team',
  },
  tags: ["dark","night","nature"],

  // shadcn/ui color properties (oklch format)
  background: 'oklch(0.100 0.093 164)',
  foreground: 'oklch(0.650 0.294 27)',
  card: 'oklch(0.170 0.093 164)',
  cardForeground: 'oklch(0.650 0.294 27)',
  popover: 'oklch(0.170 0.093 164)',
  popoverForeground: 'oklch(0.650 0.294 27)',
  primary: 'oklch(0.922 0 0)',
  primaryForeground: 'oklch(0.100 0.093 164)',
  secondary: 'oklch(0.170 0.093 164)',
  secondaryForeground: 'oklch(0.650 0.294 27)',
  muted: 'oklch(0.170 0.093 164)',
  mutedForeground: 'oklch(0.690 0.192 244)',
  accent: 'oklch(0.170 0.093 164)',
  accentForeground: 'oklch(0.650 0.294 27)',
  destructive: 'oklch(0.704 0.191 22.216)',
  border: 'oklch(0.270 0.093 164)',
  input: 'oklch(0.270 0.093 164)',
  ring: 'oklch(0.690 0.192 244)',
  radius: '0.625rem',

  // Legacy properties for backwards compatibility
  backgroundColor: 'hsla(164, 31%, 10%, 1)',
  cardColor: 'hsla(164, 31%, 17%, 1)',
  borderColor: 'hsla(164, 31%, 27%, 1)',
  mainColor: 'hsla(27, 98%, 65%, 1)',
  secondaryColor: 'hsla(244, 64%, 69%, 1)',
};
