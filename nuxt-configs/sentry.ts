import type { ModuleOptions } from '@nuxtjs/sentry';
const { execSync } = require('child_process');
// @ts-ignore
const isRunNuxtBuild = process.env.npm_lifecycle_script.includes('nuxt build');
const SENTRY_STATUS = process.env.SENTRY || 'off';

const sentryConfig: ModuleOptions =
  SENTRY_STATUS === 'on'
    ? {
        dsn: '',
        publishRelease: {
          authToken: '', //
          org: '', //
          project: 'javascript-vue8',
          include: './dist',
          ignore: ['node_modules'],
        },
        disableClientRelease: !isRunNuxtBuild,
        config: {
          release: '',
        },
        sourceMapStyle: 'source-map',
      }
    : {};

if (SENTRY_STATUS && isRunNuxtBuild) {
  if (sentryConfig.config) {
    sentryConfig.config.release = (() => {
      try {
        return execSync('git describe --abbrev=0 --tags').toString().trim();
      } catch (e) {
        return `javascript-vue8-${new Date().toISOString()}`;
      }
    })();
  }
}
export const sentry = sentryConfig;
