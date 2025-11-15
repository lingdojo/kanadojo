import { ThemeDefinition } from '../types';

export const velvetNightshadeTheme: ThemeDefinition = {
  id: 'velvet-nightshade',
  name: 'Velvet Nightshade',
  creator: {
    name: 'KanaDojo Team',
  },
  tags: ["dark","elegant","night"],

  // shadcn/ui color properties (oklch format)
  background: 'oklch(0.120 0.102 268)',
  foreground: 'oklch(0.620 0.216 98)',
  card: 'oklch(0.200 0.102 268)',
  cardForeground: 'oklch(0.620 0.216 98)',
  popover: 'oklch(0.200 0.102 268)',
  popoverForeground: 'oklch(0.620 0.216 98)',
  primary: 'oklch(0.922 0 0)',
  primaryForeground: 'oklch(0.120 0.102 268)',
  secondary: 'oklch(0.200 0.102 268)',
  secondaryForeground: 'oklch(0.620 0.216 98)',
  muted: 'oklch(0.200 0.102 268)',
  mutedForeground: 'oklch(0.560 0.258 19)',
  accent: 'oklch(0.200 0.102 268)',
  accentForeground: 'oklch(0.620 0.216 98)',
  destructive: 'oklch(0.704 0.191 22.216)',
  border: 'oklch(0.300 0.102 268)',
  input: 'oklch(0.300 0.102 268)',
  ring: 'oklch(0.560 0.258 19)',
  radius: '0.625rem',

  // Legacy properties for backwards compatibility
  backgroundColor: 'hsla(268, 34%, 12%, 1)',
  cardColor: 'hsla(268, 34%, 20%, 1)',
  borderColor: 'hsla(268, 34%, 30%, 1)',
  mainColor: 'hsla(98, 72%, 62%, 1)',
  secondaryColor: 'hsla(19, 86%, 56%, 1)',
};
