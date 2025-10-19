import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin'

const nextConfig: NextConfig = {
  /* config options here */
};

// instanciate next-intl toolkit builtin custom next configuration
const withNextIntl = createNextIntlPlugin();

// implement next-intl custom next settings along with project existing ones
export default withNextIntl(nextConfig);
