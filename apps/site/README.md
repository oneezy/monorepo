# Scavenger Site
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

## Setup
**Install**

```
npx degit https://github.com/oneezy/sveltekit-starter my-app
pnpm i
pnpm dev
```

## Todo Considerations *(brain vomit)*

**Development**
- [ ] Husky
- [ ] Conventional Commits
- [ ] Emoji Commits
- [ ] Github Actions
- [ ] Continuous Integration
- [ ] Changelogs [(changesets)](https://github.com/changesets/changesets)
- [ ] Monorepo [(pnpm workspaces)](https://pnpm.io/workspaces)
  - [ ] App 
  - [ ] Admin 
  - [ ] Pages 
  - [ ] Blog 
  - [ ] Docs [(gitbook)](https://vitebook.dev/) 
  - [ ] Shop 
  - [ ] UI Library [(vitebook)](https://vitebook.dev/) 
  - [ ] Affiliate System
  - [ ] Tradingview Scripts 

**SEO**
- [ ] Canonical Links
- [ ] Sitemap
- [ ] Robots.txt
- [ ] Humans.txt
- [ ] RSS Feed
- [ ] LD+JSON
- [ ] Top level URLs `/blog-post` instead of `/blog/blog-post`
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