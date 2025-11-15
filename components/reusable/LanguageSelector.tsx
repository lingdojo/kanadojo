'use client';

import { useParams } from 'next/navigation';
import { useRouter, usePathname } from '@/i18n/routing';
import { localeNames, type Locale } from '@/i18n/config';
import { routing } from '@/i18n/routing';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export function LanguageSelector() {
  const params = useParams();
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = (params?.locale as Locale) || routing.defaultLocale;

  const changeLocale = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale as Locale });
  };

  return (
    <Select value={currentLocale} onValueChange={changeLocale}>
      <SelectTrigger className="w-auto h-auto border-none bg-transparent text-xs text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors focus:ring-0 focus:ring-offset-0 shadow-none px-0 gap-1">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {routing.locales.map((locale) => (
          <SelectItem key={locale} value={locale}>
            {localeNames[locale]}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
