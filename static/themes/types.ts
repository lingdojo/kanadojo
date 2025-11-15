/**
 * Creator/contributor information
 */
export interface ThemeCreator {
  name: string;
  url?: string;
  github?: string;
  twitter?: string;
}

/**
 * Complete theme definition with metadata
 * Uses shadcn/ui color architecture with CSS custom properties
 */
export interface ThemeDefinition {
  id: string;
  name: string;
  description?: string;
  creator?: ThemeCreator;
  tags?: string[];
  createdAt?: string;

  // shadcn/ui color properties (using oklch format)
  background: string;
  foreground: string;
  card: string;
  cardForeground: string;
  popover: string;
  popoverForeground: string;
  primary: string;
  primaryForeground: string;
  secondary: string;
  secondaryForeground: string;
  muted: string;
  mutedForeground: string;
  accent: string;
  accentForeground: string;
  destructive: string;
  border: string;
  input: string;
  ring: string;

  // Chart colors (optional)
  chart1?: string;
  chart2?: string;
  chart3?: string;
  chart4?: string;
  chart5?: string;

  // Border radius
  radius?: string;

  // Preview image
  preview?: string;

  // Legacy properties for backwards compatibility (deprecated)
  /** @deprecated Use background instead */
  backgroundColor?: string;
  /** @deprecated Use card instead */
  cardColor?: string;
  /** @deprecated Use border instead */
  borderColor?: string;
  /** @deprecated Use foreground instead */
  mainColor?: string;
  /** @deprecated Use secondaryForeground instead */
  secondaryColor?: string;
}

/**
 * Theme group for organizing themes
 */
export interface ThemeGroup {
  name: string;
  icon: any; // Icon data from @hugeicons/core-free-icons
  themes: ThemeDefinition[];
}

/**
 * Legacy Theme interface for backward compatibility
 */
export interface Theme {
  id: string;
  backgroundColor: string;
  cardColor: string;
  borderColor: string;
  mainColor: string;
  secondaryColor: string;
}
