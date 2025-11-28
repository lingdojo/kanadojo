import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import DojoMenu from '@/shared/components/Menu/DojoMenu';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('kana.metadata');
  
  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: 'https://kanadojo.com/kana',
      type: 'website',
      locale: 'en_US',
    },
  };
}

export default function KanaPage() {
  return <DojoMenu />;
}
