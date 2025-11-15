import { ThemeDefinition } from '../types';

export const roseNebulaTheme: ThemeDefinition = {
  id: 'rose-nebula',
  name: 'Rose Nebula',
  creator: {
    name: 'KanaDojo Team',
  },
  tags: ["dark","red","space"],

  // shadcn/ui color properties (oklch format)
  background: 'oklch(0.130 0.114 310)',
  foreground: 'oklch(0.690 0.225 346)',
  card: 'oklch(0.190 0.114 310)',
  cardForeground: 'oklch(0.690 0.225 346)',
  popover: 'oklch(0.190 0.114 310)',
  popoverForeground: 'oklch(0.690 0.225 346)',
  primary: 'oklch(0.922 0 0)',
  primaryForeground: 'oklch(0.130 0.114 310)',
  secondary: 'oklch(0.190 0.114 310)',
  secondaryForeground: 'oklch(0.690 0.225 346)',
  muted: 'oklch(0.190 0.114 310)',
  mutedForeground: 'oklch(0.750 0.294 273)',
  accent: 'oklch(0.190 0.114 310)',
  accentForeground: 'oklch(0.690 0.225 346)',
  destructive: 'oklch(0.704 0.191 22.216)',
  border: 'oklch(0.280 0.114 310)',
  input: 'oklch(0.280 0.114 310)',
  ring: 'oklch(0.750 0.294 273)',
  radius: '0.625rem',

  // Legacy properties for backwards compatibility
  backgroundColor: 'hsla(310, 38%, 13%, 1)',
  cardColor: 'hsla(310, 38%, 19%, 1)',
  borderColor: 'hsla(310, 38%, 28%, 1)',
  mainColor: 'hsla(346, 75%, 69%, 1)',
  secondaryColor: 'hsla(273, 98%, 75%, 1)',
};
