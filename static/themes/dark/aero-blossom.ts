import { ThemeDefinition } from '../types';

export const aeroBlossomTheme: ThemeDefinition = {
  id: 'aero-blossom',
  name: 'Aero Blossom',
  creator: {
    name: 'KanaDojo Team',
  },
  tags: ["dark","pink"],

  // shadcn/ui color properties (oklch format)
  background: 'oklch(0.100 0.075 200)',
  foreground: 'oklch(0.660 0.279 155)',
  card: 'oklch(0.180 0.183 222)',
  cardForeground: 'oklch(0.660 0.279 155)',
  popover: 'oklch(0.180 0.183 222)',
  popoverForeground: 'oklch(0.660 0.279 155)',
  primary: 'oklch(0.922 0 0)',
  primaryForeground: 'oklch(0.100 0.075 200)',
  secondary: 'oklch(0.180 0.183 222)',
  secondaryForeground: 'oklch(0.660 0.279 155)',
  muted: 'oklch(0.180 0.183 222)',
  mutedForeground: 'oklch(0.720 0.276 335)',
  accent: 'oklch(0.180 0.183 222)',
  accentForeground: 'oklch(0.660 0.279 155)',
  destructive: 'oklch(0.704 0.191 22.216)',
  border: 'oklch(0.290 0.183 222)',
  input: 'oklch(0.290 0.183 222)',
  ring: 'oklch(0.720 0.276 335)',
  radius: '0.625rem',

  // Legacy properties for backwards compatibility
  backgroundColor: 'hsla(200, 25%, 10%, 1)',
  cardColor: 'hsla(222, 61%, 18%, 1)',
  borderColor: 'hsla(222, 61%, 29%, 1)',
  mainColor: 'hsla(155, 93%, 66%, 1)',
  secondaryColor: 'hsla(335, 92%, 72%, 1)',
};
