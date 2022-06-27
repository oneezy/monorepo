# `@apps/site`
The homepage for Scavenger Bot
## Features

- SvelteKit
- Tailwind 3 `svelte-add`
  - Tailwind Typography
  - Custom Fonts
  - Swyx Fixes
- Dark Mode 
  - saves with localstorage
  - prefers color-scheme support
- Markdown [(mdsvex)](https://mdsvex.com/) `svelte-add`
  - Rehype Plugin Support [(for html)](https://github.com/rehypejs/rehype/blob/main/doc/plugins.md#list-of-plugins)
  - Remark Plugin Support [(for markdown)](https://github.com/remarkjs/remark/blob/main/doc/plugins.md#list-of-plugins)
- PWA Installable App (100% Lighthouse Score)
- Social Icons
- Custom Scrollbar [(svrollbar)](https://github.com/daylilyfield/svrollbar#readme)
- Custom 404 Pages

# Features + Todos

## Shareable Packages

Many packages can be shared across apps. A full sweep needs to be done on all apps `scavenger/apps/*` and ported over to `scavenger/packages/*`. The package could be things like `ui | lib | shared | static | common | config`, but the main purpose is for reusability.

**Packages**
- ui
  - [ ] css
  - [ ] js
  - [ ] components
- static
  - [ ] fonts
  - [ ] images
    - [ ] bg
    - [ ] icons
    - [ ] manifest
    - [ ] social
    - [ ] opengraph
    - [ ] email
    - [ ] marketing
    - [ ] exchanges
  - [ ] video
- metadata
  - [ ] company
  - [ ] social
- utils
- congif
  - [ ] svelte.config.js
  - [ ] tailwind.config.cjs
  - [ ] mdsvex.config.js

## Extending / Overriding Packages

Many packages start out as a `base.{js,json}` and need to be extended to be used for app specific purposes.

**Create Examples**
- [ ] `base.js` > `extended.js`
- [ ] `base.json` > `extended.json`
- [ ] `base.css` > `extended.css`
- [ ] `base.svelte` > `extended.svelte`

## App Specific

For things that are specific to the app that won't be shared. Things like `seo | data | content | analytics | components | edge cases`.

**SEO**
- [ ] Canonical Links
- [ ] Sitemap
- [ ] Robots.txt
- [ ] Humans.txt
- [ ] RSS Feed
- [ ] LD+JSON
- [ ] Top level URLs `/my-page` instead of `/pages/my-page`
- [ ] Opengraph and metatags (auto generated)

**PWA Optimized**
- [ ] Make button to install PWA instead of relying on default

**MDSveX**
- [ ] Rehype Plugins [(for html)](https://github.com/rehypejs/rehype/blob/main/doc/plugins.md#list-of-plugins)
- [ ] Remark Plugins [(for markdown)](https://github.com/remarkjs/remark/blob/main/doc/plugins.md#list-of-plugins)
  - [ ] Syntax Highlighting 

**UI/UX**
- [ ] Social Share
- [ ] Variable Fonts
- [ ] Web Mentions
- [ ] i18n
- [ ] Charting

**Performance**
- [ ] Cloudinary

**Authentication**
- [ ] Auth0 
  - [ ] Social Signins
  - [ ] User Roles
  - [ ] Email Templates

**Analytics**
- [ ] Google Analytics
- [ ] Facebook Pixel