import { LucideIcon } from 'lucide-react';

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
 * Note: Colors are flattened to maintain backwards compatibility
 */
export interface ThemeDefinition {
  id: string;
  name: string;
  description?: string;
  creator?: ThemeCreator;
  tags?: string[];
  createdAt?: string;
  // Color properties (flattened for backwards compatibility)
  backgroundColor: string;
  cardColor: string;
  borderColor: string;
  mainColor: string;
  secondaryColor: string;
  preview?: string;
}

/**
 * Theme group for organizing themes
 */
export interface ThemeGroup {
  name: string;
  icon: LucideIcon;
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
