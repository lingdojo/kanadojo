'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import clsx from 'clsx';
import { HugeiconsIcon } from '@hugeicons/react';
import { AwardIcon as TrophyIcon, StarIcon, ZapIcon, CrownIcon, DiamondIcon as GemIcon, LockIcon as LockIcon, RotateLeft01Icon as RotateCcwIcon } from '@hugeicons/core-free-icons';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import useAchievementStore, {
  ACHIEVEMENTS,
  type Achievement,
  type AchievementRarity
} from '@/store/useAchievementStore';
import useStatsStore from '@/store/useStatsStore';
import { useClick } from '@/hooks/useAudio';

const rarityConfig: Record<
  AchievementRarity,
  {
    color: string;
    bgColor: string;
    borderColor: string;
    icon: typeof StarIcon;
    label: string;
  }
> = {
  common: {
    color: '#6B7280',
    bgColor: '#F9FAFB',
    borderColor: '#D1D5DB',
    icon: StarIcon,
    label: 'Common'
  },
  uncommon: {
    color: '#059669',
    bgColor: '#ECFDF5',
    borderColor: '#A7F3D0',
    icon: ZapIcon,
    label: 'Uncommon'
  },
  rare: {
    color: '#2563EB',
    bgColor: '#EFF6FF',
    borderColor: '#93C5FD',
    icon: TrophyIcon,
    label: 'Rare'
  },
  epic: {
    color: '#7C3AED',
    bgColor: '#F5F3FF',
    borderColor: '#C4B5FD',
    icon: CrownIcon,
    label: 'Epic'
  },
  legendary: {
    color: '#DC2626',
    bgColor: '#FEF2F2',
    borderColor: '#FECACA',
    icon: GemIcon,
    label: 'Legendary'
  }
};

const categories = [
  { id: 'all', label: 'All Achievements', icon: TrophyIcon },
  { id: 'milestone', label: 'Milestones', icon: StarIcon },
  { id: 'streak', label: 'Streaks', icon: ZapIcon },
  { id: 'consistency', label: 'Consistency', icon: CrownIcon },
  { id: 'mastery', label: 'Mastery', icon: GemIcon }
];

interface AchievementCardProps {
  achievement: Achievement;
  isUnlocked: boolean;
  progress: number;
  onClick: () => void;
}

const AchievementCard = ({
  achievement,
  isUnlocked,
  progress,
  onClick
}: AchievementCardProps) => {
  const config = rarityConfig[achievement.rarity];

  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={clsx(
        'relative p-6 cursor-pointer transition-all duration-300',
        'rounded-2xl border-2 overflow-hidden group',
        isUnlocked
          ? 'bg-[var(--card)] border-[var(--border)] hover:border-[var(--foreground)]/30'
          : 'bg-[var(--background)] border-[var(--border)]/50 opacity-80 hover:opacity-100'
      )}
      onClick={onClick}
    >
      {/* Gradient overlay for unlocked achievements */}
      {isUnlocked && (
        <div
          className='absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-300'
          style={{
            background: `linear-gradient(135deg, ${config.color}20, transparent)`
          }}
        />
      )}

      {/* Rarity badge */}
      <div className='absolute top-3 right-3'>
        <div
          className={clsx(
            'flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium',
            'border backdrop-blur-sm'
          )}
          style={
            isUnlocked
              ? {
                  backgroundColor: `${config.color}15`,
                  borderColor: `${config.color}30`,
                  color: config.color
                }
              : {
                  backgroundColor: '#F3F4F620',
                  borderColor: '#D1D5DB50',
                  color: '#9CA3AF'
                }
          }
        >
          <HugeiconsIcon icon={config.icon} size={12} color="currentColor" />
          {config.label}
        </div>
      </div>

      <div className='space-y-4'>
        {/* Achievement icon and title */}
        <div className='flex items-center gap-4'>
          <div
            className={clsx(
              'w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold',
              'border-2 transition-all duration-300 group-hover:scale-110'
            )}
            style={
              isUnlocked
                ? {
                    backgroundColor: config.bgColor,
                    borderColor: config.borderColor,
                    color: config.color
                  }
                : {
                    backgroundColor: '#F3F4F6',
                    borderColor: '#D1D5DB',
                    color: '#9CA3AF'
                  }
            }
          >
            {isUnlocked ? achievement.icon : <HugeiconsIcon icon={LockIcon} size={24} color="currentColor" />}
          </div>

          <div className='flex-1 min-w-0'>
            <h3
              className={clsx(
                'font-bold text-lg mb-1 group-hover:text-[var(--foreground)] transition-colors',
                isUnlocked
                  ? 'text-[var(--foreground)]'
                  : 'text-[var(--muted-foreground)]'
              )}
            >
              {achievement.title}
            </h3>

            <p
              className={clsx(
                'text-sm leading-relaxed',
                isUnlocked
                  ? 'text-[var(--muted-foreground)]'
                  : 'text-[var(--muted-foreground)]/70'
              )}
            >
              {achievement.description}
            </p>
          </div>
        </div>

        {/* Progress bar for locked achievements */}
        {!isUnlocked && progress > 0 && (
          <div className='space-y-2'>
            <div className='flex justify-between items-center'>
              <span className='text-sm font-medium text-[var(--foreground)]'>
                Progress
              </span>
              <span className='text-sm font-bold text-[var(--foreground)]'>
                {Math.round(progress)}%
              </span>
            </div>
            <div className='w-full bg-[var(--border)] rounded-full h-2'>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className='h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500'
              />
            </div>
          </div>
        )}

        {/* Footer */}
        <div className='flex items-center justify-between pt-2 border-t border-[var(--border)]/30'>
          <div className='flex items-center gap-2'>
            <HugeiconsIcon icon={TrophyIcon} size={16} color="currentColor" className={
                isUnlocked ? 'text-yellow-500' : 'text-[var(--border)]'
              } />
            <span
              className={clsx(
                'text-sm font-bold',
                isUnlocked
                  ? 'text-[var(--foreground)]'
                  : 'text-[var(--muted-foreground)]'
              )}
            >
              {achievement.points} points
            </span>
          </div>

          {isUnlocked && (
            <div className='text-xs text-[var(--muted-foreground)] bg-[var(--background)] px-2 py-1 rounded-full'>
              Unlocked ✓
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const AchievementProgress = () => {
  const { playClick } = useClick();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const unlockedAchievements = useAchievementStore(
    state => state.unlockedAchievements
  );
  const totalPoints = useAchievementStore(state => state.totalPoints);
  const level = useAchievementStore(state => state.level);
  const stats = useStatsStore();

  // Helper function to calculate achievement progress
  const getAchievementProgress = (achievementId: string) => {
    const achievement = ACHIEVEMENTS.find(a => a.id === achievementId);
    if (!achievement) return 0;

    let current = 0;
    const target = achievement.requirements.value;

    switch (achievement.requirements.type) {
      case 'total_correct':
        current = stats.allTimeStats.totalCorrect;
        break;
      case 'streak':
        current = stats.allTimeStats.bestStreak;
        break;
      case 'sessions':
        current = stats.allTimeStats.totalSessions;
        break;
      case 'accuracy':
        const totalAnswers =
          stats.allTimeStats.totalCorrect + stats.allTimeStats.totalIncorrect;
        current =
          totalAnswers > 0
            ? (stats.allTimeStats.totalCorrect / totalAnswers) * 100
            : 0;
        break;
    }

    return Math.min((current / target) * 100, 100);
  };

  const filteredAchievements =
    selectedCategory === 'all'
      ? ACHIEVEMENTS
      : ACHIEVEMENTS.filter(
          achievement => achievement.category === selectedCategory
        );

  const unlockedCount = Object.keys(unlockedAchievements).length;
  const totalCount = ACHIEVEMENTS.length;
  const completionPercentage = (unlockedCount / totalCount) * 100;

  const handleCategorySelect = (categoryId: string) => {
    playClick();
    setSelectedCategory(categoryId);
  };

  const handleAchievementClick = (achievement: Achievement) => {
    playClick();
    // Could open achievement details modal here
    console.log(achievement);
  };

  // Get category stats
  const getCategoryStats = (categoryId: string) => {
    const categoryAchievements =
      categoryId === 'all'
        ? ACHIEVEMENTS
        : ACHIEVEMENTS.filter(a => a.category === categoryId);
    const categoryUnlocked = categoryAchievements.filter(
      a => unlockedAchievements[a.id]
    ).length;
    return { total: categoryAchievements.length, unlocked: categoryUnlocked };
  };

  return (
    <div className='w-full'>
      {/* Hero Section */}
      <div className='relative overflow-hidden'>
        <div className='relative px-6 py-12 text-center'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className='space-y-4'
          >
            <div className='flex items-center justify-center gap-3 mb-4'>
              <HugeiconsIcon icon={TrophyIcon} size={40} color="currentColor" className="text-yellow-500" />
              <h1 className='text-4xl font-bold text-[var(--foreground)]'>
                Achievements
              </h1>
            </div>
            <p className='text-lg text-[var(--muted-foreground)] max-w-2xl mx-auto'>
              Track your Japanese learning journey and celebrate your milestones
            </p>

            {/* Stats Cards */}
            <div className='grid grid-cols-1 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-8'>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <Card className='bg-[var(--card)] border-[var(--border)] p-6 text-center'>
                  <div className='text-3xl font-bold text-[var(--foreground)] mb-1'>
                    {unlockedCount}
                  </div>
                  <div className='text-sm text-[var(--muted-foreground)]'>
                    Unlocked
                  </div>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Card className='bg-[var(--card)] border-[var(--border)] p-6 text-center'>
                  <div className='text-3xl font-bold text-[var(--foreground)] mb-1'>
                    {totalCount}
                  </div>
                  <div className='text-sm text-[var(--muted-foreground)]'>
                    Total
                  </div>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Card className='bg-[var(--card)] border-[var(--border)] p-6 text-center'>
                  <div className='text-3xl font-bold text-[var(--foreground)] mb-1'>
                    {totalPoints}
                  </div>
                  <div className='text-sm text-[var(--muted-foreground)]'>
                    Points
                  </div>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Card className='bg-[var(--card)] border-[var(--border)] p-6 text-center'>
                  <div className='text-3xl font-bold text-[var(--foreground)] mb-1'>
                    {level}
                  </div>
                  <div className='text-sm text-[var(--muted-foreground)]'>
                    Level
                  </div>
                </Card>
              </motion.div>
            </div>

            {/* Overall Progress */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className='max-w-md mx-auto mt-6'
            >
              <div className='flex justify-between items-center mb-2'>
                <span className='text-sm font-medium text-[var(--foreground)]'>
                  Overall Progress
                </span>
                <span className='text-sm font-bold text-[var(--foreground)]'>
                  {Math.round(completionPercentage)}%
                </span>
              </div>
              <div className='w-full bg-[var(--border)] rounded-full h-3'>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${completionPercentage}%` }}
                  transition={{ duration: 1.5, ease: 'easeOut' }}
                  className='h-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full'
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Category Tabs */}
      <div className='px-6 py-6'>
        <div className='max-w-6xl mx-auto'>
          <div className='flex flex-wrap gap-2 mb-8 justify-center'>
            {categories.map((category, index) => {
              const stats = getCategoryStats(category.id);
              const isSelected = selectedCategory === category.id;

              return (
                <motion.button
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  onClick={() => handleCategorySelect(category.id)}
                  className={clsx(
                    'flex items-center gap-2 px-4 py-3 rounded-xl transition-all duration-200',
                    'border-2 font-medium',
                    isSelected
                      ? 'bg-[var(--foreground)] text-[var(--background)] border-[var(--foreground)]'
                      : 'bg-[var(--card)] text-[var(--foreground)] border-[var(--border)] hover:border-[var(--foreground)]'
                  )}
                >
                  <HugeiconsIcon icon={category.icon} size={18} color="currentColor" />
                  <span>{category.label}</span>
                  <span
                    className={clsx(
                      'text-xs px-2 py-1 rounded-full',
                      isSelected
                        ? 'bg-[var(--background)]/20 text-[var(--background)]'
                        : 'bg-[var(--background)] text-[var(--muted-foreground)]'
                    )}
                  >
                    {stats.unlocked}/{stats.total}
                  </span>
                </motion.button>
              );
            })}
          </div>

          {/* Achievement Grid */}
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
          >
            {filteredAchievements.map((achievement, index) => {
              const isUnlocked = !!unlockedAchievements[achievement.id];
              const progress = getAchievementProgress(achievement.id);

              return (
                <motion.div
                  key={achievement.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * index }}
                >
                  <AchievementCard
                    achievement={achievement}
                    isUnlocked={isUnlocked}
                    progress={progress}
                    onClick={() => handleAchievementClick(achievement)}
                  />
                </motion.div>
              );
            })}
          </motion.div>

          {/* Empty State */}
          {filteredAchievements.length === 0 && (
            <div className='text-center py-12'>
              <HugeiconsIcon icon={TrophyIcon} size={48} color="currentColor" className="mx-auto text-[var(--border)] mb-4" />
              <h3 className='text-lg font-semibold text-[var(--foreground)] mb-2'>
                No achievements in this category
              </h3>
              <p className='text-[var(--muted-foreground)]'>
                Try selecting a different category to see more achievements.
              </p>
            </div>
          )}
        </div>

        {/* Achievement Management Section */}
        <AchievementManagement />
      </div>
    </div>
  );
};

// Achievement Management Component
const AchievementManagement = () => {
  const { playClick } = useClick();
  const stats = useStatsStore();

  const handleRecalculateAchievements = () => {
    playClick();
    // Trigger a full recalculation of achievements based on current stats
    useAchievementStore.getState().checkAchievements(stats);
  };

  return (
    <div className='max-w-4xl mx-auto mt-12'>
      {/* Management Header */}
      <Card className='bg-[var(--card)] border-[var(--border)]'>
        <CardHeader>
          <div className='flex items-center gap-3'>
            <HugeiconsIcon icon={RotateCcwIcon} size={24} color="currentColor" className="text-[var(--foreground)]" />
            <CardTitle className='text-xl font-bold text-[var(--foreground)]'>
              Achievement Management
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className='text-[var(--muted-foreground)] mb-6'>
            Check for any missed achievements based on your current progress.
          </p>

          {/* Recalculate Achievements */}
          <div className='flex items-center justify-between p-4 bg-[var(--background)] rounded-lg border border-[var(--border)]'>
            <div>
              <h4 className='font-medium text-[var(--foreground)]'>
                Recalculate Achievements
              </h4>
              <p className='text-sm text-[var(--muted-foreground)]'>
                Scan your progress and unlock any achievements you may have earned
              </p>
            </div>
            <Button
              onClick={handleRecalculateAchievements}
              variant="outline"
              className='flex items-center gap-2'
            >
              <HugeiconsIcon icon={RotateCcwIcon} size={16} color="currentColor" />
              Recalculate
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AchievementProgress;
