// app/layout.tsx
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css';
import '@fortawesome/fontawesome-svg-core/styles.css';

import GoogleAnalytics from '@/components/analytics/GoogleAnalytics';
import MSClarity from '@/components/analytics/MSClarity';
import BackToTopButton from '@/components/BackToTopButton';

// ✅ Important: do NOT add 'use client' here — layouts must be server components.
// We'll handle client logic safely inside BackToTopButton instead.



// Optional: define metadata and viewport here if used in your project
// export const metadata: Metadata = { title: 'LingDojo', description: '...' };
// export const viewport: Viewport = { width: 'device-width', initialScale: 1 };

const isAnalyticsEnabled =
  process.env.NODE_ENV === 'production' &&
  process.env.ANALYTICS_DISABLED !== 'true';

interface RootLayoutProps {
  readonly children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground">
        {/* ✅ Analytics and speed insights */}
        {isAnalyticsEnabled && (
          <>
            <GoogleAnalytics />
            <MSClarity />
            <Analytics />
            <SpeedInsights />
          </>
        )}

        {/* ✅ Render main page content */}
        {children}

        {/* ✅ BackToTopButton only for non-home routes (logic inside component) */}
        <BackToTopButton />
      </body>
    </html>
  );
}
