import type { Metadata } from 'next';
import DojoMenu from '@/components/reusable/Menu/DojoMenu';

// export const metadata: Metadata = {
//   title: 'KanaDojo: Vocabulary',
//   description:
//     'The vocabulary dojo is the place where you can learn and practice the words and vocabulary used in day-to-day Japanese.',
//   openGraph: {
//     title: 'KanaDojo: Vocabulary',
//     description:
//       'The vocabulary dojo is the place where you can learn and practice the words and vocabulary used in day-to-day Japanese.',
//     url: 'https://kanadojo.com/vocabulary',
//     type: 'website',
//     locale: 'en_US',
//   },
// };

export const metadata = {
  title: "Vocabulary",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};


export default function VocabPage() {
  return <DojoMenu />;
}
