import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./core/i18n/request.ts');

const nextConfig: NextConfig = {
  // Performance optimizations
  reactStrictMode: false, // Disable in dev for faster startup (enable in production)

  // Compiler optimizations
  compiler: {
    removeConsole:
      process.env.NODE_ENV === 'production'
        ? {
            exclude: ['error', 'warn']
          }
        : false
  },

  // Experimental features for better performance
  experimental: {
    // Use optimized package imports
    optimizePackageImports: [
      'framer-motion',
      'lucide-react',
      '@fortawesome/react-fontawesome',
      '@fortawesome/free-solid-svg-icons',
      '@fortawesome/free-regular-svg-icons',
      '@fortawesome/free-brands-svg-icons'
    ],
    // Faster builds
    webpackBuildWorker: true
  },

  // Reduce overhead in development
  devIndicators: {
  },

  // Optimize images
  images: {
    formats: ['image/avif', 'image/webp']
  }
};

export default withNextIntl(nextConfig);
