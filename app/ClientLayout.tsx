'use client';
import clsx from 'clsx';
// 1. Import useState to hold the dynamically imported module
import { useEffect, useState } from 'react';
import usePreferencesStore from '@/store/usePreferencesStore';
// 2. Remove the static import
// import fonts from '@/static/fonts';
import { ScrollRestoration } from 'next-scroll-restoration';
import WelcomeModal from '@/components/Modals/WelcomeModal';
import { AchievementNotificationContainer } from '@/components/reusable/AchievementNotification';
import AchievementIntegration from '@/components/reusable/AchievementIntegration';
import { applyTheme } from '@/static/themes';
import BackToTop from '@/components/reusable/BackToTop';
import { GlobalErrorBoundary } from '@/components/ErrorBoundary';

// Define a type for the font object for clarity, adjust as needed
type FontObject = {
  name: string;
  font: {
    className: string;
  };
};

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { theme } = usePreferencesStore();
  const font = usePreferencesStore(state => state.font);

  // 3. Create state to hold the fonts module
  const [fontsModule, setFontsModule] = useState<FontObject[] | null>(null);

  // 4. Dynamically import the fonts module only in production
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      import('@/static/fonts')
        .then(module => {
          // Assuming 'fonts' is a default export from that module
          setFontsModule(module.default);
        })
        .catch(err => {
          console.error('Failed to dynamically load fonts:', err);
        });
    }
  }, []); // Empty dependency array ensures this runs only once on mount

  // 5. Calculate fontClassName based on the stateful fontsModule
  // This will be an empty string if fontsModule is null (i.e., in dev or before prod load)
  const fontClassName = fontsModule
    ? fontsModule.find(fontObj => font === fontObj.name)?.font.className
    : '';

  useEffect(() => {
    applyTheme(theme); // This now sets both CSS variables AND data-theme attribute

    if (typeof window !== 'undefined') {
      window.history.scrollRestoration = 'manual';
    }
  }, [theme]);

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
        data-scroll-restoration-id="container"
        className={clsx(
          'bg-[var(--background-color)] text-[var(--main-color)] min-h-[100dvh] max-w-[100dvw]',
          // 6. Apply fontClassName. This is now implicitly conditional
          // because fontClassName will only have a value in prod after load.
          fontClassName
        )}
        style={{
          height: '100dvh',
          overflowY: 'scroll',
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
