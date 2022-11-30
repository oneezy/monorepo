import { viteConfig } from '@packages/config';

/** @type {import('vite').UserConfig} */
const config = {
  ...viteConfig,
  server: {
    host: '0.0.0.0',
    open: '/site'
  },
};

export default config;