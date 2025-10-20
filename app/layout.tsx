import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import ClientLayout from './ClientLayout';
import './globals.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import GoogleAnalytics from '@/components/analytics/GoogleAnalytics';
import MSClarity from '@/components/analytics/MSClarity';
import { Metadata } from 'next';
import {NextIntlClientProvider} from "next-intl"

const googleVerificationToken = process.env.GOOGLE_VERIFICATION_TOKEN || '';
const msVerificationToken = process.env.MS_VERIFICATION_TOKEN || '';

export const metadata: Metadata = {
  manifest: '/manifest.json',


  viewport:
    'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no',
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
// next-intl support for client component requires async RootLayout
export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      {/* It's recommended to remove the <head> tag here, as Next.js 13+ with the App Router manages it via the metadata object */}
      <body>
        {isAnalyticsEnabled && (
          <>
            <GoogleAnalytics />
            <MSClarity />
            <Analytics />
            <SpeedInsights />
          </>
        )}
        <ClientLayout>
          {/* next-intl translation support for client components */}
          <NextIntlClientProvider>
            {children}
          </NextIntlClientProvider>
          </ClientLayout>
      </body>
    </html>
  );
}