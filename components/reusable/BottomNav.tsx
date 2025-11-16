'use client';

import { Link, usePathname, useRouter } from '@/i18n/routing';
import { HugeiconsIcon } from '@hugeicons/react';
import {
  ChartIncreaseIcon as ProgressIcon,
  Settings02Icon as SettingsIcon,
} from '@hugeicons/core-free-icons';
import { useClick } from '@/hooks/useAudio';
import { removeLocaleFromPath } from '@/lib/pathUtils';

const BottomNav = () => {
  const { playClick } = useClick();
  const pathname = usePathname();
  const router = useRouter();
  const pathWithoutLocale = removeLocaleFromPath(pathname);

  // Determine active tab based on route
  const activeTab = pathWithoutLocale === '/kanji' ? 'kanji'
    : pathWithoutLocale === '/vocabulary' ? 'vocabulary'
    : pathWithoutLocale === '/progress' ? 'progress'
    : pathWithoutLocale === '/preferences' ? 'preferences'
    : 'kana';

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[var(--background)] border-t border-[var(--border)]">
      <div className="flex items-center justify-around px-2 py-2 max-w-2xl mx-auto">
        {/* Kana Tab */}
        <button
          onClick={() => {
            playClick();
            router.push('/');
          }}
          className={`flex flex-col items-center justify-center min-w-0 flex-1 py-1 px-2 rounded-lg transition-all ${
            activeTab === 'kana'
              ? 'text-[var(--foreground)]'
              : 'text-[var(--muted-foreground)] hover:text-[var(--foreground)]'
          }`}
        >
          <span lang="ja" className="text-xl mb-0.5 transition-colors" style={{ color: 'currentColor' }}>あ</span>
          <span className="text-[10px] font-medium transition-colors" style={{ color: 'currentColor' }}>Kana</span>
        </button>

        {/* Kanji Tab */}
        <button
          onClick={() => {
            playClick();
            router.push('/kanji');
          }}
          className={`flex flex-col items-center justify-center min-w-0 flex-1 py-1 px-2 rounded-lg transition-all ${
            activeTab === 'kanji'
              ? 'text-[var(--foreground)]'
              : 'text-[var(--muted-foreground)] hover:text-[var(--foreground)]'
          }`}
        >
          <span lang="ja" className="text-xl mb-0.5 transition-colors" style={{ color: 'currentColor' }}>字</span>
          <span className="text-[10px] font-medium transition-colors" style={{ color: 'currentColor' }}>Kanji</span>
        </button>

        {/* Vocabulary Tab */}
        <button
          onClick={() => {
            playClick();
            router.push('/vocabulary');
          }}
          className={`flex flex-col items-center justify-center min-w-0 flex-1 py-1 px-2 rounded-lg transition-all ${
            activeTab === 'vocabulary'
              ? 'text-[var(--foreground)]'
              : 'text-[var(--muted-foreground)] hover:text-[var(--foreground)]'
          }`}
        >
          <span lang="ja" className="text-xl mb-0.5 transition-colors" style={{ color: 'currentColor' }}>語</span>
          <span className="text-[10px] font-medium transition-colors" style={{ color: 'currentColor' }}>Vocab</span>
        </button>

        {/* Progress Tab */}
        <Link
          href="/progress"
          onClick={playClick}
          className={`flex flex-col items-center justify-center min-w-0 flex-1 py-1 px-2 rounded-lg transition-all ${
            activeTab === 'progress'
              ? 'text-[var(--foreground)]'
              : 'text-[var(--muted-foreground)] hover:text-[var(--foreground)]'
          }`}
        >
          <HugeiconsIcon icon={ProgressIcon} size={24} className="mb-0.5" color="currentColor" />
          <span className="text-[10px] font-medium transition-colors" style={{ color: 'currentColor' }}>Progress</span>
        </Link>

        {/* Settings Tab */}
        <Link
          href="/preferences"
          onClick={playClick}
          className={`flex flex-col items-center justify-center min-w-0 flex-1 py-1 px-2 rounded-lg transition-all ${
            activeTab === 'preferences'
              ? 'text-[var(--foreground)]'
              : 'text-[var(--muted-foreground)] hover:text-[var(--foreground)]'
          }`}
        >
          <HugeiconsIcon icon={SettingsIcon} size={24} className="mb-0.5" color="currentColor" />
          <span className="text-[10px] font-medium transition-colors" style={{ color: 'currentColor' }}>Settings</span>
        </Link>
      </div>
    </div>
  );
};

export default BottomNav;
