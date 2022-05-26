import { resolve } from 'path';
import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';
import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],

	kit: {
		adapter: adapter(),
		vite: {
			resolve: {
				alias: {
					$lib: resolve('./src/lib'),
					$data: resolve('./src/data'),
					$routes: resolve('./src/routes'),
					$stores: resolve('./src/stores'),
				}
			}
		}
	},

	preprocess: [
		preprocess({
			postcss: true
		}),
		mdsvex(mdsvexConfig)
	],

	experimental: {
		inspector: true
	}
};

export default config;
