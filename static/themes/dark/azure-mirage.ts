import { ThemeDefinition } from '../types';

export const azureMirageTheme: ThemeDefinition = {
  id: 'azure-mirage',
  name: 'Azure Mirage',
  creator: {
    name: 'KanaDojo Team',
  },
  tags: ["dark","blue"],

  // shadcn/ui color properties (oklch format)
  background: 'oklch(0.070 0.300 191)',
  foreground: 'oklch(0.830 0.210 195)',
  card: 'oklch(0.150 0.300 195)',
  cardForeground: 'oklch(0.810 0.205 198)',
  popover: 'oklch(0.165 0.290 188)',
  popoverForeground: 'oklch(0.820 0.200 192)',
  primary: 'oklch(0.922 0 0)',
  primaryForeground: 'oklch(0.070 0.300 191)',
  secondary: 'oklch(0.140 0.270 200)',
  secondaryForeground: 'oklch(0.800 0.195 195)',
  muted: 'oklch(0.155 0.280 193)',
  mutedForeground: 'oklch(0.660 0.190 195)',
  accent: 'oklch(0.160 0.310 185)',
  accentForeground: 'oklch(0.840 0.215 197)',
  destructive: 'oklch(0.704 0.191 22.216)',
  border: 'oklch(0.270 0.279 191)',
  input: 'oklch(0.270 0.279 191)',
  ring: 'oklch(0.690 0.300 52)',
  radius: '0.625rem',

  // Legacy properties for backwards compatibility
  backgroundColor: 'hsla(191, 100%, 7%, 1)',
  cardColor: 'hsla(191, 93%, 16%, 1)',
  borderColor: 'hsla(191, 93%, 27%, 1)',
  mainColor: 'hsla(271, 99%, 72%, 1)',
  secondaryColor: 'hsla(52, 100%, 69%, 1)',
};
