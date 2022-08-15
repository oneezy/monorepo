import { sveltekit } from '@sveltejs/kit/vite';
import { join } from 'path';
import { readFileSync } from 'fs';
import { cwd } from 'process';

const pkg = JSON.parse(readFileSync(join(cwd(), 'package.json')));

/** @type {import('vite').UserConfig} */
const config = {
	build: {
		target: ['es2020'],
	},
	resolve: {
		preserveSymlinks: false,
		build: {
			sourcemap: true
		},
	},
	ssr: {
		noExternal: Object.keys(pkg.dependencies || {})
	},
	// plugins: [sveltekit()],
  plugins: [
    // WORKAROUND Vitebook doesn't work with SvelteKit
    // https://github.com/vitebook/vitebook/issues/89
    process.env.KLUDGE_VITEBOOK ? undefined : sveltekit(),
  ],
};

if (process.env.NODE_ENV === "production") config.resolve.preserveSymlinks = true;

export default config;
