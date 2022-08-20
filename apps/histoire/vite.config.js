/// <reference types="histoire" />

import { svelte } from '@sveltejs/vite-plugin-svelte'
import { HstSvelte } from '@histoire/plugin-svelte'
import { defaultColors } from 'histoire'

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [
    svelte(),
  ],
  histoire: {
    plugins: [
      HstSvelte(),
    ],
    setupFile: '/histoire.setup.js',
    tree: {
      groups: [
        {
          id: 'top',
          title: '',
        },
      ],
    },
    theme: {
      title: 'Oneezy',
      logo: {
        square: '/assets/logo.svg',
        light: '/assets/logo.svg',
        dark: '/assets/logo.svg'
      },
      logoHref: '/',
      favicon: './assets/favicon.png',

      colors: {
        gray: defaultColors.gray,
        primary: defaultColors.blue,
      }
    }
  },
  server: {
    open: '/'
  },
};

export default config