// FILE: C:/Users/oneezy/Desktop/www/2.Starters/monorepo/apps/vitebook/.vitebook/config.js

import __vitebook__path from 'path';
import { fileURLToPath as __vitebook__fileURLToPath } from 'url';
import { createRequire as __vitebook__createRequire } from 'module';
const require = __vitebook__createRequire(import.meta.url);
var __require = function(x) { return require(x); };
__require.__proto__.resolve = require.resolve;
const __filename = __vitebook__fileURLToPath(import.meta.url);
const __dirname = __vitebook__path.dirname(__filename);

// .vitebook/config.js
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { svelteMarkdownPlugin } from "@vitebook/markdown-svelte/node";
import { clientPlugin, defineConfig } from "@vitebook/client/node";
import { defaultThemePlugin } from "@vitebook/theme-default/node";
import preprocess from "svelte-preprocess";
process.env.VITEBOOK = "true";
var config_default = defineConfig({
  include: ["src/**/*.md", "src/**/*.story.svelte"],
  alias: {
    $app: "/node_modules/@sveltejs/kit/assets/app",
    $lib: "/src/lib",
    $components: "/node_modules/@packages/components/lib",
    $config: "/node_modules/@packages/config",
    $metadata: "/node_modules/@packages/metadata"
  },
  plugins: [
    svelteMarkdownPlugin(),
    clientPlugin({ appFile: "App.svelte" }),
    defaultThemePlugin(),
    svelte({
      compilerOptions: {
        hydratable: true
      },
      extensions: [".md", ".svelte"],
      preprocess: preprocess()
    })
  ],
  site: {
    title: "Components",
    description: "Big Question: Will it work?",
    theme: {}
  }
});
export {
  config_default as default
};
