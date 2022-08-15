import { clientPlugin, defineConfig } from '@vitebook/client/node';
import { svelteMarkdownPlugin } from '@vitebook/markdown-svelte/node';
import { defaultThemePlugin } from '@vitebook/theme-default/node';

export default defineConfig({
  include: ['src/**/*.md', 'src/**/*.story.svelte'],
  plugins: [
    svelteMarkdownPlugin(),
    clientPlugin({ appFile: 'App.svelte' }),
    defaultThemePlugin(),
  ],
  site: {
    title: 'Components',
    description: 'Design system powered by vitebook + svelte',
    /** @type {(import('@vitebook/theme-default/node').DefaultThemeConfig} */
    theme: {},
  },
});
