// instrumentation-client.ts
import posthog from 'posthog-js';

// --- ADDED: Check for development environment ---
if (process.env.NODE_ENV === 'development') {
  console.log('PostHog client instrumentation disabled in development mode.');
  // Return early or simply let the file exit without running the initialization logic
} else {
  // --- EXISTING LOGIC MOVED INSIDE ELSE BLOCK ---
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
}
