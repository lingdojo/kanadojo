// instrumentation-client.ts
import posthog from 'posthog-js';

const posthogKey = process.env.NEXT_PUBLIC_POSTHOG_KEY;

if (posthogKey) {
  posthog.init(posthogKey, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
    defaults: '2025-05-24',
  });
} else {
  console.warn(
    'NEXT_PUBLIC_POSTHOG_KEY is not set; PostHog will not be initialized.'
  );
}
