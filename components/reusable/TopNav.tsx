'use client';
import { usePathname } from 'next/navigation';
import { Link } from '@/i18n/routing';
import { HugeiconsIcon } from '@hugeicons/react';
import {
  SparklesIcon,
  ChartIncreaseIcon,
  FavouriteIcon as HeartIcon,
  Coffee01Icon as CoffeeIcon,
  Target01Icon as TargetIcon,
} from '@hugeicons/core-free-icons';
import clsx from 'clsx';
import { useClick } from '@/hooks/useAudio';
import { Button } from '@/components/ui/button';

const TopNav = () => {
  const pathname = usePathname();
  const { playClick } = useClick();

  // Remove locale from pathname for comparison
  const pathWithoutLocale = pathname.replace(/^\/(en|es)/, '') || '/';

  const navItems = [
    { href: '/', label: 'あ', sublabel: 'Kana' },
    { href: '/kanji', label: '字', sublabel: 'Kanji' },
    { href: '/vocabulary', label: '語', sublabel: 'Vocab' },
    { href: '/practice', icon: TargetIcon, label: 'Practice' },
    { href: '/progress', icon: ChartIncreaseIcon, label: 'Progress' },
    { href: '/preferences', icon: SparklesIcon, label: 'Preferences' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--background)] border-b border-[var(--border)]">
      <div className="flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link
          href="/"
          className="flex flex-col hover:opacity-80 transition-opacity"
          onClick={playClick}
        >
          <span className="text-base md:text-lg font-semibold">KanaDojo</span>
          <span className="text-xs md:text-sm text-[var(--muted-foreground)]" lang="ja">
            かな道場
          </span>
        </Link>

        {/* Navigation Items and Support Buttons */}
        <div className="flex items-center gap-3">
          {/* Main Navigation */}
          <div className="flex items-center gap-1 md:gap-2">
            {navItems.map((item) => {
              const isActive = item.href === '/'
                ? pathWithoutLocale === '/'
                : pathWithoutLocale.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={playClick}
                  className={clsx(
                    'flex items-center gap-1.5 px-3 py-2 rounded-lg transition-all duration-200',
                    'text-sm md:text-base',
                    isActive
                      ? 'bg-[var(--card)] text-[var(--foreground)]'
                      : 'text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--card)]'
                  )}
                >
                  {item.icon ? (
                    <>
                      <HugeiconsIcon icon={item.icon} size={18} />
                      <span className="hidden md:inline">{item.label}</span>
                    </>
                  ) : (
                    <>
                      <span className="text-lg md:text-xl">{item.label}</span>
                      <span className="hidden md:inline text-sm">{item.sublabel}</span>
                    </>
                  )}
                </Link>
              );
            })}
          </div>

          {/* Divider */}
          <div className="hidden sm:block w-px h-6 bg-[var(--border)]" />

          {/* Support Buttons */}
          <div className="flex items-center gap-2">
            <Button
              variant="secondary"
              size="sm"
              onClick={() => {
                playClick();
                window.open('https://ko-fi.com/kanadojo', '_blank');
              }}
              aria-label="Support on Ko-fi"
            >
              <HugeiconsIcon icon={CoffeeIcon} size={18} />
              Ko-fi
            </Button>
            <Button
              variant="default"
              size="sm"
              onClick={() => {
                playClick();
                window.open('https://www.patreon.com/kanadojo', '_blank');
              }}
              aria-label="Support on Patreon"
            >
              <HugeiconsIcon icon={HeartIcon} size={18} className="fill-current" />
              Patreon
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
