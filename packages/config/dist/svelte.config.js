import { resolve } from 'path';
import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-auto';

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