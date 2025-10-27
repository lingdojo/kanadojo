import type { Metadata } from 'next';
import DojoMenu from '@/components/reusable/Menu/DojoMenu';

export const metadata: Metadata = {
  title: 'KanaDojo: Kanji',
  description:
    'The kanji dojo is the place where you can learn and practice the main component of the Japanese writing system - the kanji characters.',
  openGraph: {
    title: 'KanaDojo: Kanji',
    description:
      'The kanji dojo is the place where you can learn and practice the main component of the Japanese writing system - the kanji characters.',
    url: 'https://kanadojo.com/kanji',
    type: 'website',
    locale: 'en_US',
  },
};

export default function KanjiPage() {
  return <DojoMenu />;
}
