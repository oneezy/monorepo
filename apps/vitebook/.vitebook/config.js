import { svelte } from '@sveltejs/vite-plugin-svelte';
import { svelteMarkdownPlugin } from '@vitebook/markdown-svelte/node';
import { clientPlugin, defineConfig } from '@vitebook/client/node';
import { defaultThemePlugin } from '@vitebook/theme-default/node';
import preprocess from 'svelte-preprocess';

process.env.VITEBOOK = "true";

export default defineConfig({
  include: ['src/**/*.md', 'src/**/*.story.svelte'],
  alias: {

    // App
    $app:         '/node_modules/@sveltejs/kit/assets/app',
    $lib:         '/src/lib',

    // Packages
    $components:  '/node_modules/@packages/components',
    $config:      '/node_modules/@packages/config',
    $metadata:    '/node_modules/@packages/metadata',

  },
  plugins: [
    svelteMarkdownPlugin(),
    clientPlugin({ appFile: 'App.svelte' }),
    defaultThemePlugin(),
    svelte({
      compilerOptions: {
        hydratable: true
      },
      extensions: ['.md', '.svelte'],
      preprocess: preprocess(),
    }),
  ],
  site: {
    title: 'Components',
    description: 'Big Question: Will it work?',
    /** @type {(import('@vitebook/theme-default/node').DefaultThemeConfig} */
    theme: {},
  },
});
