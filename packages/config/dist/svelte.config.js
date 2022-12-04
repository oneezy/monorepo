import { resolve } from 'path';
import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    alias: {
      // Root
      $root: resolve('../../../'),

      // App (main)
      $apps: resolve('../../apps/+app/src'),
      
      // Apps (plop added)
      $site: resolve('../../apps/site/src'),
      $docs: resolve('../../apps/docs/src'),
    },
  },

  preprocess: [
    preprocess({
      postcss: true
    }),
  ]
};

export default config;