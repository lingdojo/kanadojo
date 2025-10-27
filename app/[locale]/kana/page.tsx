import type { Metadata } from 'next';
import DojoMenu from '@/components/reusable/Menu/DojoMenu';

export const metadata: Metadata = {
  title: 'KanaDojo: Kana',
  description:
    'The kana dojo is the place where you can learn and practice the two core syllabaries of Japanese - Hiragana and Katakana.',
  openGraph: {
    title: 'KanaDojo: Kana',
    description:
      'The kana dojo is the place where you can learn and practice the two core syllabaries of Japanese - Hiragana and Katakana.',
    url: 'https://kanadojo.com/kana',
    type: 'website',
    locale: 'en_US',
  },
};

export default function KanaPage() {
  return <DojoMenu />;
}
