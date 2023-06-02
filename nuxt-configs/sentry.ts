import type { ModuleOptions } from '@nuxtjs/sentry';
const { execSync } = require('child_process');
// @ts-ignore
const isRunNuxtBuild = process.env.npm_lifecycle_script.includes('nuxt build');
const SENTRY_STATUS = process.env.SENTRY || 'off';

const sentryConfig: ModuleOptions =
  SENTRY_STATUS === 'on'
    ? {
        dsn: '',
        sourceMapStyle: 'source-map',
        disabled: true,
        config: {},
      }
    : {};

if (SENTRY_STATUS && isRunNuxtBuild) {
  console.log('들어오냐?');
  sentryConfig.publishRelease = {
    authToken: '',
    org: '',
    project: 'javascript-vue6',
    include: ['./dist'],
    ignore: ['node_modules'],
    release: (() => {
      try {
        return execSync('git describe --abbrev=0 --tags').toString().trim();
      } catch (e) {
        return `nuxt-sample4-${new Date().toISOString()}`;
      }
    })(),
  };
}
console.log('config ==>>>', sentryConfig);
export const sentry = sentryConfig;
