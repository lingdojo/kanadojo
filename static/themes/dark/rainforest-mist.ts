import { ThemeDefinition } from '../types';

export const rainforestMistTheme: ThemeDefinition = {
  id: 'rainforest-mist',
  name: 'Rainforest Mist',
  creator: {
    name: 'KanaDojo Team',
  },
  tags: ["dark","green","nature"],

  // shadcn/ui color properties (oklch format)
  background: 'oklch(0.110 0.078 141)',
  foreground: 'oklch(0.620 0.114 183)',
  card: 'oklch(0.190 0.078 141)',
  cardForeground: 'oklch(0.620 0.114 183)',
  popover: 'oklch(0.190 0.078 141)',
  popoverForeground: 'oklch(0.620 0.114 183)',
  primary: 'oklch(0.922 0 0)',
  primaryForeground: 'oklch(0.110 0.078 141)',
  secondary: 'oklch(0.190 0.078 141)',
  secondaryForeground: 'oklch(0.620 0.114 183)',
  muted: 'oklch(0.190 0.078 141)',
  mutedForeground: 'oklch(0.640 0.249 43)',
  accent: 'oklch(0.190 0.078 141)',
  accentForeground: 'oklch(0.620 0.114 183)',
  destructive: 'oklch(0.704 0.191 22.216)',
  border: 'oklch(0.290 0.078 141)',
  input: 'oklch(0.290 0.078 141)',
  ring: 'oklch(0.640 0.249 43)',
  radius: '0.625rem',

  // Legacy properties for backwards compatibility
  backgroundColor: 'hsla(141, 26%, 11%, 1)',
  cardColor: 'hsla(141, 26%, 19%, 1)',
  borderColor: 'hsla(141, 26%, 29%, 1)',
  mainColor: 'hsla(183, 38%, 62%, 1)',
  secondaryColor: 'hsla(43, 83%, 64%, 1)',
};
