'use client';

import { motion } from 'motion/react';
import clsx from 'clsx';
import { HugeiconsIcon } from '@hugeicons/react';
import { AwardIcon as TrophyIcon } from '@hugeicons/core-free-icons';
import useAchievements from '@/hooks/useAchievements';
import { useClick } from '@/hooks/useAudio';

interface AchievementBadgeProps {
  onClick?: () => void;
  showNotificationDot?: boolean;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'icon' | 'full';
}

const AchievementBadge = ({
  onClick,
  showNotificationDot = true,
  size = 'md',
  variant = 'icon'
}: AchievementBadgeProps) => {
  const { playClick } = useClick();
  const { totalPoints, level, unlockedCount, hasUnseenNotifications } =
    useAchievements();

  const handleClick = () => {
    playClick();
    onClick?.();
  };

  const sizeClasses = {
    sm: 'p-2 text-sm',
    md: 'p-3 text-base',
    lg: 'p-4 text-lg'
  };

  const iconSizes = {
    sm: 16,
    md: 20,
    lg: 24
  };

  if (variant === 'full') {
    return (
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleClick}
        className={clsx(
          'relative flex items-center gap-3 rounded-xl',
          'bg-[var(--card)] hover:bg-[var(--background)]',
          'border border-[var(--border)]',
          'transition-all duration-200',
          sizeClasses[size]
        )}
      >
        <div className='relative'>
          <HugeiconsIcon icon={TrophyIcon} size={iconSizes[size]} color="currentColor" className="text-yellow-500" />
          {showNotificationDot && hasUnseenNotifications && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className='absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-[var(--card)]'
            />
          )}
        </div>

        <div className='text-left'>
          <div className='flex items-center gap-2'>
            <span className='font-semibold text-[var(--foreground)]'>
              Level {level}
            </span>
            <span className='text-xs text-[var(--muted-foreground)]'>
              ({totalPoints} pts)
            </span>
          </div>
          <div className='text-xs text-[var(--muted-foreground)]'>
            {unlockedCount} achievements
          </div>
        </div>
      </motion.button>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={handleClick}
      className={clsx(
        'relative rounded-full',
        'bg-[var(--card)] hover:bg-[var(--background)]',
        'border border-[var(--border)]',
        'transition-all duration-200',
        sizeClasses[size]
      )}
    >
      <HugeiconsIcon icon={TrophyIcon} size={iconSizes[size]} color="currentColor" className="text-yellow-500" />

      {/* Notification dot */}
      {showNotificationDot && hasUnseenNotifications && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className='absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-[var(--card)]'
        />
      )}

      {/* Level indicator */}
      {level > 1 && (
        <div className='absolute -bottom-1 -right-1 w-5 h-5 bg-blue-500 text-white text-xs font-bold rounded-full flex items-center justify-center border-2 border-[var(--card)]'>
          {level}
        </div>
      )}
    </motion.button>
  );
};

export default AchievementBadge;
