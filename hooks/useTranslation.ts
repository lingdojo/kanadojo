'use client';

import { useTranslations as useNextIntlTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import type { Locale } from '@/i18n/config';

export function useTranslation() {
  const params = useParams();
  const locale = (params?.locale as Locale) || 'en';
  const t = useNextIntlTranslations();

  return {
    locale,
    t
  };
}
