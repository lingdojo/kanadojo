import { ThemeDefinition } from '../types';

export const galaxyOracleTheme: ThemeDefinition = {
  id: 'galaxy-oracle',
  name: 'Galaxy Oracle',
  creator: {
    name: 'KanaDojo Team',
  },
  tags: ["dark","space"],

  // shadcn/ui color properties (oklch format)
  background: 'oklch(0.070 0.234 219)',
  foreground: 'oklch(0.780 0.252 296)',
  card: 'oklch(0.140 0.201 254)',
  cardForeground: 'oklch(0.780 0.252 296)',
  popover: 'oklch(0.140 0.201 254)',
  popoverForeground: 'oklch(0.780 0.252 296)',
  primary: 'oklch(0.922 0 0)',
  primaryForeground: 'oklch(0.070 0.234 219)',
  secondary: 'oklch(0.140 0.201 254)',
  secondaryForeground: 'oklch(0.780 0.252 296)',
  muted: 'oklch(0.140 0.201 254)',
  mutedForeground: 'oklch(0.730 0.300 222)',
  accent: 'oklch(0.140 0.201 254)',
  accentForeground: 'oklch(0.780 0.252 296)',
  destructive: 'oklch(0.704 0.191 22.216)',
  border: 'oklch(0.250 0.201 254)',
  input: 'oklch(0.250 0.201 254)',
  ring: 'oklch(0.730 0.300 222)',
  radius: '0.625rem',

  // Legacy properties for backwards compatibility
  backgroundColor: 'hsla(219, 78%, 7%, 1)',
  cardColor: 'hsla(254, 67%, 14%, 1)',
  borderColor: 'hsla(254, 67%, 25%, 1)',
  mainColor: 'hsla(296, 84%, 78%, 1)',
  secondaryColor: 'hsla(222, 100%, 73%, 1)',
};
