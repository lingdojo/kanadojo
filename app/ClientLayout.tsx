'use client';
import clsx from 'clsx';
import { useState, useEffect } from 'react';
import usePreferencesStore from '@/features/Themes';
import useCrazyModeStore from '@/features/CrazyMode/store/useCrazyModeStore';
import { usePathname } from 'next/navigation';
import { ScrollRestoration } from 'next-scroll-restoration';
import WelcomeModal from '@/shared/components/Modals/WelcomeModal';
import { AchievementNotificationContainer } from '@/shared/components/AchievementNotification';
import AchievementIntegration from '@/shared/components/AchievementIntegration';
import { applyTheme } from '@/features/Themes';
import BackToTop from '@/shared/components/BackToTop';
import { GlobalErrorBoundary } from '@/shared/components';

// Define a type for the font object for clarity, adjust as needed
type FontObject = {
  name: string;
  font: {
    className: string;
  };
};

export default function ClientLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { theme } = usePreferencesStore();
  const font = usePreferencesStore(state => state.font);

  // Crazy Mode Integration
  const isCrazyMode = useCrazyModeStore(state => state.isCrazyMode);
  const activeThemeId = useCrazyModeStore(state => state.activeThemeId);
  const activeFontName = useCrazyModeStore(state => state.activeFontName);
  const randomize = useCrazyModeStore(state => state.randomize);

  // Determine effective theme and font
  const effectiveTheme = isCrazyMode && activeThemeId ? activeThemeId : theme;
  const effectiveFont = isCrazyMode && activeFontName ? activeFontName : font;

  // 3. Create state to hold the fonts module
  const [fontsModule, setFontsModule] = useState<FontObject[] | null>(null);

  // Calculate fontClassName based on the stateful fontsModule
  const fontClassName = fontsModule
    ? fontsModule.find((fontObj: FontObject) => effectiveFont === fontObj.name)
        ?.font.className
    : '';

  useEffect(() => {
    applyTheme(effectiveTheme); // This now sets both CSS variables AND data-theme attribute

    if (typeof window !== 'undefined') {
      window.history.scrollRestoration = 'manual';
    }
  }, [effectiveTheme]);

  // Trigger randomization on page navigation
  const pathname = usePathname();
  useEffect(() => {
    if (isCrazyMode) {
      randomize();
    }
  }, [pathname, isCrazyMode, randomize]);

  // Dynamically import the fonts module only in production
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      import('@/features/Themes/data/fonts')
        .then(module => {
          // Assuming 'fonts' is a default export from that module
          setFontsModule(module.default);
        })
        .catch(err => {
          console.error('Failed to dynamically load fonts:', err);
        });
    } else {
      // In development, import statically for easier debugging
      import('@/features/Themes/data/fonts').then(module => {
        setFontsModule(module.default);
      });
    }
  }, []); // Empty dependency array ensures this runs only once on mount

  useEffect(() => {
    // Resume AudioContext on first user interaction
    const handleClick = () => {
      // @ts-expect-error (use-sound exposes Howler globally)
      if (window.Howler?.ctx?.state === 'suspended') {
        // @ts-expect-error (use-sound exposes Howler globally)
        window.Howler.ctx.resume();
      }
    };

    document.addEventListener('click', handleClick, { once: true });
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <GlobalErrorBoundary>
      <div
        data-scroll-restoration-id='container'
        className={clsx(
          'bg-[var(--background-color)] text-[var(--main-color)] min-h-[100dvh] max-w-[100dvw]',
          fontClassName
        )}
        style={{
          height: '100dvh',
          overflowY: 'scroll'
        }}
      >
        {children}
        <ScrollRestoration />
        <WelcomeModal />
        <AchievementNotificationContainer />
        <AchievementIntegration />
        <BackToTop />
      </div>
    </GlobalErrorBoundary>
  );
}
