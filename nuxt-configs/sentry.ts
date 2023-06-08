import type { ModuleConfiguration } from '@nuxtjs/sentry';
const { execSync } = require('child_process');
// @ts-ignore
const isRunNuxtBuild = process.env.npm_lifecycle_script.includes('nuxt build');
const SENTRY_STATUS = process.env.SENTRY || 'off';

const sentryConfig: Partial<ModuleConfiguration & { url: string }> =
  SENTRY_STATUS
    ? {
        dsn: '',
        publishRelease: {
          authToken: '', //
          org: '', //
          project: 'javascript-vue7',
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
        return `javascript-vue7-${new Date().toISOString()}`;
      }
    })();
  }
}
console.log(!isRunNuxtBuild);
console.log('config ==>>>>>>>>>>', sentryConfig);
export const sentry = sentryConfig;
