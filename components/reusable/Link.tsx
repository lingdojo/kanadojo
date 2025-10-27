'use client';

import { Link as NextIntlLink } from '@/i18n/routing';
import { ComponentProps } from 'react';

type LinkProps = ComponentProps<typeof NextIntlLink>;

export function Link(props: LinkProps) {
  return <NextIntlLink {...props} />;
}

export default Link;
