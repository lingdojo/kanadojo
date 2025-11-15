import { ThemeDefinition } from '../types';

export const topazDriftTheme: ThemeDefinition = {
  id: 'topaz-drift',
  name: 'Topaz Drift',
  creator: {
    name: 'KanaDojo Team',
  },
  tags: ["dark","yellow"],

  // shadcn/ui color properties (oklch format)
  background: 'oklch(0.110 0.102 172)',
  foreground: 'oklch(0.710 0.294 45)',
  card: 'oklch(0.170 0.111 172)',
  cardForeground: 'oklch(0.710 0.294 45)',
  popover: 'oklch(0.170 0.111 172)',
  popoverForeground: 'oklch(0.710 0.294 45)',
  primary: 'oklch(0.922 0 0)',
  primaryForeground: 'oklch(0.110 0.102 172)',
  secondary: 'oklch(0.170 0.111 172)',
  secondaryForeground: 'oklch(0.710 0.294 45)',
  muted: 'oklch(0.170 0.111 172)',
  mutedForeground: 'oklch(0.640 0.264 18)',
  accent: 'oklch(0.170 0.111 172)',
  accentForeground: 'oklch(0.710 0.294 45)',
  destructive: 'oklch(0.704 0.191 22.216)',
  border: 'oklch(0.290 0.111 172)',
  input: 'oklch(0.290 0.111 172)',
  ring: 'oklch(0.640 0.264 18)',
  radius: '0.625rem',

  // Legacy properties for backwards compatibility
  backgroundColor: 'hsla(172, 34%, 11%, 1)',
  cardColor: 'hsla(172, 37%, 17%, 1)',
  borderColor: 'hsla(172, 37%, 29%, 1)',
  mainColor: 'hsla(45, 98%, 71%, 1)',
  secondaryColor: 'hsla(18, 88%, 64%, 1)',
};
