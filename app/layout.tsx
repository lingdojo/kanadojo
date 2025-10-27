import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import GoogleAnalytics from '@/components/analytics/GoogleAnalytics';
import MSClarity from '@/components/analytics/MSClarity';
import { Metadata, Viewport } from 'next';

const googleVerificationToken = process.env.GOOGLE_VERIFICATION_TOKEN || '';
const msVerificationToken = process.env.MS_VERIFICATION_TOKEN || '';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0,
  maximumScale: 1.0,
  userScalable: false,
};

export const metadata: Metadata = {
  manifest: '/manifest.json',
  title: 'KanaDojo',
  description:
    'KanaDojo is a fun, minimalist, aesthetic platform for learning and practicing Japanese online.',
  verification: {
    google: googleVerificationToken,
    other: { 'msvalidate.01': msVerificationToken },
  },
  keywords:
    'learn japanese, learn hiragana, learn katakana, learn kana, hiragana practice, katakana practice, learn kanji, kanji practice online, kana learning, japanese online lessons, hiragana chart, katakana chart, japanese writing system',
  openGraph: {
    title: 'KanaDojo',
    description:
      'KanaDojo is a fun, minimalist, aesthetic platform for learning and practicing Japanese online.',
    url: 'https://kanadojo.com',
    type: 'website',
    locale: 'en_US',
  },
};

// Move analytics condition to a constant to avoid repeated evaluation
const isAnalyticsEnabled =
  process.env.NODE_ENV === 'production' &&
  process.env.ANALYTICS_DISABLED !== 'true';

interface RootLayoutProps {
  readonly children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html>
      <body>
        {isAnalyticsEnabled && (
          <>
            <GoogleAnalytics />
            <MSClarity />
            <Analytics />
            <SpeedInsights />
          </>
        )}
        {children}
      </body>
    </html>
  );
}