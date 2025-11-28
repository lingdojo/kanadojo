// Statistics Feature - Barrel Export

// Store - Export useStatsStore as default for backward compatibility
export { default } from './store/useStatsStore';
export { default as useStatsStore } from './store/useStatsStore';
export { default as useVisitStore } from './store/useVisitStore';

// Components
export { default as AchievementProgress } from '../Achievements/components/AchievementProgress';
export { default as ProgressWithSidebar } from './components/ProgressWithSidebar';
export { default as SimpleProgress } from './components/SimpleProgress';
export { default as StreakProgress } from './components/StreakProgress';
export { default as StreakGrid } from './components/StreakGrid';
export { default as StreakStats } from './components/StreakStats';

// Hooks
export { useVisitTracker } from './hooks/useVisitTracker';
