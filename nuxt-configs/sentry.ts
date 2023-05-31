import type { ModuleOptions } from '@nuxtjs/sentry';
const SENTRY_STATUS = process.env.SENTRY || 'off';

const sentryConfig: ModuleOptions =
  SENTRY_STATUS === 'on'
    ? {
        dsn: '',
      }
    : {};

export const sentry = sentryConfig;
