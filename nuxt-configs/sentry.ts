import type { ModuleOptions } from '@nuxtjs/sentry';
const { execSync } = require('child_process');
const SENTRY_STATUS = process.env.SENTRY || 'off';

const sentryConfig: ModuleOptions =
  SENTRY_STATUS === 'on'
    ? {
        dsn: '',
        publishRelease: {
          authToken: '',
          org: '',
          project: 'nuxt-sample',
          include: ['./dist'],
          ignore: ['node_modules'],
        },
        sourceMapStyle: 'source-map',
        config: {
          release: (() => {
            try {
              return execSync('git describe --abbrev=0 --tags')
                .toString()
                .trim();
            } catch (e) {
              return `nuxt-sample-${new Date().toISOString()}`;
            }
          })(),
        },
      }
    : {};
export const sentry = sentryConfig;
