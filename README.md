# PNPM + Turborepo + Sveltekit Starter 

This is an unofficial [Sveltekit](https://kit.svelte.dev/) monorepo starter powered by [Turborepo](https://turborepo.org/) and [PNPM](https://pnpm.io/).

# What's inside?
### Apps and Packages

Apps and sites live in the `apps` folder while libraries and configs live in the `packages` folder.

**Apps**
- `web`: [Sveltekit Skeleton](https://kit.svelte.dev)
- `docs`: [Sveltekit Skeleton](https://kit.svelte.dev) + [TailWindCSS](https://tailwindcss.com/)
  
**Packages**
- `components`: UI Library
- `tsconfig`: shared `tsconfig.json`s used throughout the monorepo
- `eslint-preset`: ESLint preset

# Setup

**Prereqs**
```
node v14  (or later)
pnpm v7   (or later)
```

**Installation**
```
git clone https://github.com/oneezy/monorepo.git
pnpm i
pnpm dev
```

**Add Package**
1. create new folder in `./apps` (i.e. `docs`)
2. create new folder in `./packages` (i.e. `components`)
3. go to `components` folder and create `package.json` with proper namespace
```json
{
  "name": "@oneezy/components",
  "version": "0.0.1",
  "type": "module",
  "main": "index.js"
}
```
4. cd into the app you want to add the package to and use the `pnpm add` command
```json
cd apps/docs
pnpm add @oneezy/components

// pnpm adds the workspace at the bottom of your docs/package.json
"dependencies": {
  "@oneezy/components": "workspace:^0.0.1"
}
```

# Project Configuration

### Modify the root `package.json`

Make sure to modify the contents in the project's root package json to fit your needs.

### Running Multiple Dev Environments

If you want to run multiple dev enviornments in parallel, you will have to define different ports in each of your apps `package.json` npm scripts (i.e. `-p 3001`). Each apps port will need to be different.

```json
"name": "@oneezy/docs",
"version": "0.0.1",
"scripts": {
  "dev": "svelte-kit dev -p 3001 -o",
  "build": "svelte-kit build",
  "preview": "svelte-kit preview",
  "check": "svelte-check --tsconfig ./tsconfig.json",
  "check:watch": "svelte-check --tsconfig ./tsconfig.json --watch",
  "package": "svelte-kit package"
},
```

# Todo
- [ ] create **tailwind** `package` and add to `apps`
- [ ] would backend code live in `apps` or `packages` or somewhere else?
- [ ] create `clean` command to remove `.build` directories, `node_modules` and `package-lock`'s
- [ ] why is `pnpm build` failing on `apps/docs`?
- [ ] make `pnpm preview` work on multiple ports
- [ ] learn how to open one dev environment at a time i.e. `pnpm dev:docs`
- [ ] setup turborepo cache
- [ ] show example how to create turborepo dependency graph
- [ ] make sure to keep this example basic as possible
- [ ] create more advanced example from the basic example
  - [ ] husky
  - [ ] semver
  - [ ] changelogs

# Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

# References

**Monorepo**
- [📽️ Building Svelte Society: Monorepos with pngwn🐧](https://youtu.be/gKxz7R9dX0w)
- [📽️ Monorepos: Any Size Fits All, by Altan Stalker](https://www.youtube.com/watch?v=elKsZvowdok)
- [🎧 How to Setup a PNPM Monorepo (Wes Bos and Scott Telenski)](https://syntax.fm/show/401/hasty-treat-how-to-setup-a-pnpm-monorepo)
- [🎧 Monorepos! Workspaces, pnpm, turborepo + more! (Wes Bos and Scott Telenski)](https://syntax.fm/show/426/monorepos-workspaces-pnpm-turborepo-more)
- [📖 Visual Studio Code tips for monorepo development](https://medium.com/rewrite-tech/visual-studio-code-tips-for-monorepo-development-with-multi-root-workspaces-and-extension-6b69420ecd12)
- [📖 Exploring The Monorepo (6 Part Series)](https://dev.to/jonlauridsen/series/12073)
- [📖 Mono repository done right!](https://blog.ghaiklor.com/2020/07/12/mono-repository-done-right/)
- [📖 Replacing Lerna + Yarn with PNPM Workspaces](https://www.raulmelo.dev/blog/replacing-lerna-and-yarn-with-pnpm-workspaces)
- [📖 How to set up monorepo build in GitLab CI](https://how-to.dev/how-to-set-up-monorepo-build-in-gitlab-ci)
- [📖 Why TurboRepo Will Be The First Big Trend of 2022](https://dev.to/swyx/why-turborepo-will-be-the-first-big-trend-of-2022-4gfj)
- [📖 Turborepo with Svelte](https://nenadkostic.com/blog/turborepo-sveltekit/)
- [🛠️ Monorepo.tools](https://monorepo.tools)
- [🛠️ Monorepo Workspace (VS Plugin)](https://marketplace.visualstudio.com/items?itemName=folke.vscode-monorepo-workspace)
- [✨ Prisma + PNPM workspace Starter](https://github.com/millsp/prisma-pnpm-workspace)
- [✨ Turborepo + Sveltekit Starter](https://github.com/Brisklemonade/turbosvelte)
- [✨ Vidstack (Big Turborepo + Sveltekit Example)](https://github.com/vidstack/vidstack)
- [✨ SvelteUI (Big Turborepo + Sveltekit Example)](https://github.com/svelteuidev/svelteui)

**Docs Starters**
- [✨ Sveleton](https://github.com/Brisklemonade/sveleton)
- [✨ KitDocs](https://github.com/svelteness/kit-docs)
- [✨ Vitebook](https://github.com/vitebook/vitebook)
- [✨ BooKit](https://vitebook.dev)

**Blog Starters**
- [✨ Hagura](https://github.com/sharu725/hagura-sveltekit)

**Tailwind UI**
- [✨ Tailblocks](https://tailblocks.cc/)
- [✨ HyperUI](https://www.hyperui.dev/)

**Svelte Themes**
- [✨ Svelte Themes](https://www.sveltethemes.dev/)

**Full-Stack Sveltekit**
- [SVEMIX](https://www.svemix.com/)


# Thanks Everyone!