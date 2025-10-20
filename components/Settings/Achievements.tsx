'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import clsx from 'clsx';
import { Trophy, RotateCcw, Download, Upload, AlertTriangle } from 'lucide-react';
import useAchievementStore from '@/store/useAchievementStore';
import useStatsStore from '@/store/useStatsStore';
import { useClick } from '@/lib/hooks/useAudio';
import { cardBorderStyles, buttonBorderStyles } from '@/static/styles';

const AchievementSettings = () => {
  const { playClick } = useClick();
  const [showResetConfirm, setShowResetConfirm] = useState(false);
  const [showExportSuccess, setShowExportSuccess] = useState(false);
  
  const achievementStore = useAchievementStore();
  const statsStore = useStatsStore();
  
  const unlockedCount = Object.keys(achievementStore.unlockedAchievements).length;
  const totalPoints = achievementStore.totalPoints;
  const level = achievementStore.level;

  const handleResetAchievements = () => {
    playClick();
    if (!showResetConfirm) {
      setShowResetConfirm(true);
      return;
    }

    // Reset achievements (this would need to be implemented in the store)
    // For now, we'll just clear notifications
    achievementStore.clearAllNotifications();
    setShowResetConfirm(false);
  };

  const handleExportProgress = () => {
    playClick();
    
    const exportData = {
      achievements: achievementStore.unlockedAchievements,
      totalPoints: achievementStore.totalPoints,
      level: achievementStore.level,
      exportDate: new Date().toISOString(),
      version: '1.0'
    };

    const dataStr = JSON.stringify(exportData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = `kanadojo-achievements-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setShowExportSuccess(true);
    setTimeout(() => setShowExportSuccess(false), 3000);
  };

  const handleImportProgress = () => {
    playClick();
    
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const importData = JSON.parse(e.target?.result as string);
          
          // Validate import data structure
          if (importData.achievements && importData.totalPoints !== undefined) {
            // This would need proper implementation in the store
            console.log('Import data:', importData);
            // For now, just log the data
          } else {
            alert('Invalid achievement data file');
          }
        } catch (error) {
          alert('Error reading achievement data file');
        }
      };
      reader.readAsText(file);
    };
    
    input.click();
  };

  const handleRecalculateAchievements = () => {
    playClick();
    // Trigger a full recalculation of achievements based on current stats
    achievementStore.checkAchievements(statsStore);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className={clsx('p-6', cardBorderStyles)}>
        <div className="flex items-center gap-3 mb-4">
          <Trophy className="text-yellow-500" size={24} />
          <h2 className="text-xl font-bold text-[var(--main-color)]">
            Achievement Settings
          </h2>
        </div>
        
        <p className="text-[var(--secondary-color)] mb-6">
          Manage your achievement progress, export your data, or reset your achievements.
        </p>

        {/* Current Progress Summary */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 bg-[var(--background-color)] rounded-lg">
          <div className="text-center">
            <div className="text-2xl font-bold text-[var(--main-color)]">
              {unlockedCount}
            </div>
            <div className="text-sm text-[var(--secondary-color)]">
              Achievements Unlocked
            </div>
          </div>
          
          <div className="text-center">
            <div className="text-2xl font-bold text-[var(--main-color)]">
              {totalPoints}
            </div>
            <div className="text-sm text-[var(--secondary-color)]">
              Total Points
            </div>
          </div>
          
          <div className="text-center">
            <div className="text-2xl font-bold text-[var(--main-color)]">
              {level}
            </div>
            <div className="text-sm text-[var(--secondary-color)]">
              Current Level
            </div>
          </div>
        </div>
      </div>

      {/* Management Actions */}
      <div className={clsx('p-6 space-y-4', cardBorderStyles)}>
        <h3 className="text-lg font-semibold text-[var(--main-color)] mb-4">
          Achievement Management
        </h3>

        {/* Recalculate Achievements */}
        <div className="flex items-center justify-between p-4 bg-[var(--background-color)] rounded-lg">
          <div>
            <h4 className="font-medium text-[var(--main-color)]">
              Recalculate Achievements
            </h4>
            <p className="text-sm text-[var(--secondary-color)]">
              Check for any missed achievements based on your current progress
            </p>
          </div>
          <button
            onClick={handleRecalculateAchievements}
            className={clsx(
              'px-4 py-2 rounded-lg flex items-center gap-2',
              buttonBorderStyles,
              'text-[var(--main-color)] hover:bg-[var(--border-color)]'
            )}
          >
            <RotateCcw size={16} />
            Recalculate
          </button>
        </div>

        {/* Export Progress */}
        <div className="flex items-center justify-between p-4 bg-[var(--background-color)] rounded-lg">
          <div>
            <h4 className="font-medium text-[var(--main-color)]">
              Export Achievement Data
            </h4>
            <p className="text-sm text-[var(--secondary-color)]">
              Download your achievement progress as a backup file
            </p>
          </div>
          <button
            onClick={handleExportProgress}
            className={clsx(
              'px-4 py-2 rounded-lg flex items-center gap-2',
              buttonBorderStyles,
              'text-[var(--main-color)] hover:bg-[var(--border-color)]'
            )}
          >
            <Download size={16} />
            Export
          </button>
        </div>

        {/* Import Progress */}
        <div className="flex items-center justify-between p-4 bg-[var(--background-color)] rounded-lg">
          <div>
            <h4 className="font-medium text-[var(--main-color)]">
              Import Achievement Data
            </h4>
            <p className="text-sm text-[var(--secondary-color)]">
              Restore achievement progress from a backup file
            </p>
          </div>
          <button
            onClick={handleImportProgress}
            className={clsx(
              'px-4 py-2 rounded-lg flex items-center gap-2',
              buttonBorderStyles,
              'text-[var(--main-color)] hover:bg-[var(--border-color)]'
            )}
          >
            <Upload size={16} />
            Import
          </button>
        </div>

        {/* Export Success Message */}
        {showExportSuccess && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="p-3 bg-green-100 border border-green-300 text-green-700 rounded-lg text-sm"
          >
            Achievement data exported successfully!
          </motion.div>
        )}
      </div>

      {/* Danger Zone */}
      <div className={clsx('p-6 space-y-4', cardBorderStyles, 'border-red-200')}>
        <div className="flex items-center gap-2 mb-4">
          <AlertTriangle className="text-red-500" size={20} />
          <h3 className="text-lg font-semibold text-red-600">
            Danger Zone
          </h3>
        </div>

        <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg border border-red-200">
          <div>
            <h4 className="font-medium text-red-700">
              Reset All Achievements
            </h4>
            <p className="text-sm text-red-600">
              This will permanently delete all your achievement progress. This action cannot be undone.
            </p>
          </div>
          <div className="flex gap-2">
            {showResetConfirm && (
              <button
                onClick={() => {
                  playClick();
                  setShowResetConfirm(false);
                }}
                className="px-4 py-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors duration-200"
              >
                Cancel
              </button>
            )}
            <button
              onClick={handleResetAchievements}
              className={clsx(
                'px-4 py-2 rounded-lg flex items-center gap-2 transition-colors duration-200',
                showResetConfirm
                  ? 'bg-red-600 text-white hover:bg-red-700'
                  : 'bg-red-100 text-red-600 hover:bg-red-200'
              )}
            >
              <RotateCcw size={16} />
              {showResetConfirm ? 'Confirm Reset' : 'Reset Achievements'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AchievementSettings;