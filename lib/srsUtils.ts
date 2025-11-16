import { Stage } from './interfaces';

/**
 * Get CSS variable color for SRS stage
 */
export function getStageColor(stage: Stage): string {
  switch (stage) {
    case 'new': return 'var(--muted-foreground)';
    case 'learning': return 'var(--destructive)';
    case 'young': return 'var(--chart-3)';
    case 'mature': return 'var(--chart-2)';
    case 'mastered': return 'var(--chart-1)';
    default: return 'var(--muted-foreground)';
  }
}

/**
 * Get background color class for SRS stage (for use with bg- classes)
 */
export function getStageBgClass(stage: Stage): string {
  // These return CSS custom properties that can be used with style attribute
  switch (stage) {
    case 'new': return 'bg-[var(--muted-foreground)]';
    case 'learning': return 'bg-[var(--destructive)]';
    case 'young': return 'bg-[var(--chart-3)]';
    case 'mature': return 'bg-[var(--chart-2)]';
    case 'mastered': return 'bg-[var(--chart-1)]';
    default: return 'bg-[var(--muted-foreground)]';
  }
}

/**
 * Get label for SRS stage
 */
export function getStageLabel(stage: Stage): string {
  switch (stage) {
    case 'new': return 'New';
    case 'learning': return 'Learning';
    case 'young': return 'Young';
    case 'mature': return 'Mature';
    case 'mastered': return 'Mastered';
    default: return 'New';
  }
}

/**
 * Get short label for SRS stage (for compact displays)
 */
export function getStageShortLabel(stage: Stage): string {
  switch (stage) {
    case 'new': return 'N';
    case 'learning': return 'L';
    case 'young': return 'Y';
    case 'mature': return 'M';
    case 'mastered': return 'A'; // A for Advanced/Achieved
    default: return 'N';
  }
}
