import { resolve } from 'path';
import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    alias: {
      // Root
      $root: resolve('../../'),

      // App (main)
      $site: resolve('../../apps/site/src'),
      
      // Apps (plop added)
      $docs: resolve('../../apps/docs/src'),
      $bookit: resolve('../../apps/bookit/src'),
      $vitebook: resolve('../../apps/vitebook/src'),
    }
  },

  preprocess: [
    preprocess({
      postcss: true
    }),
  ]
};

export default config;