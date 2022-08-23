import { viteConfig } from '@packages/config';
import { sveltekit } from '@sveltejs/kit/vite';


/** @type {import('vite').UserConfig} */
const config = {
  ...viteConfig,
  
  plugins: [
     sveltekit(),
  ],
};

export default config;