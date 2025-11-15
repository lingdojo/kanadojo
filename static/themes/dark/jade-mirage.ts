import { ThemeDefinition } from '../types';

export const jadeMirageTheme: ThemeDefinition = {
  id: 'jade-mirage',
  name: 'Jade Mirage',
  creator: {
    name: 'KanaDojo Team',
  },
  tags: ["dark","green"],

  // shadcn/ui color properties (oklch format)
  background: 'oklch(0.130 0.063 163)',
  foreground: 'oklch(0.540 0.198 150)',
  card: 'oklch(0.170 0.075 163)',
  cardForeground: 'oklch(0.540 0.198 150)',
  popover: 'oklch(0.170 0.075 163)',
  popoverForeground: 'oklch(0.540 0.198 150)',
  primary: 'oklch(0.922 0 0)',
  primaryForeground: 'oklch(0.130 0.063 163)',
  secondary: 'oklch(0.170 0.075 163)',
  secondaryForeground: 'oklch(0.540 0.198 150)',
  muted: 'oklch(0.170 0.075 163)',
  mutedForeground: 'oklch(0.540 0.192 170)',
  accent: 'oklch(0.170 0.075 163)',
  accentForeground: 'oklch(0.540 0.198 150)',
  destructive: 'oklch(0.704 0.191 22.216)',
  border: 'oklch(0.270 0.075 166)',
  input: 'oklch(0.270 0.075 166)',
  ring: 'oklch(0.540 0.192 170)',
  radius: '0.625rem',

  // Legacy properties for backwards compatibility
  backgroundColor: 'hsla(163, 21%, 13%, 1)',
  cardColor: 'hsla(163, 25%, 17%, 1)',
  borderColor: 'hsla(166, 25%, 27%, 1)',
  mainColor: 'hsla(150, 66%, 54%, 1)',
  secondaryColor: 'hsla(170, 64%, 54%, 1)',
};
