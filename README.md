# PNPM + Turborepo + Sveltekit Starter 

This is an unofficial SvelteKit monorepo starter powered by Turborepo.

# What's inside?

### Features
- PNPM
- Turborepo
- Sveltekit

### Apps and Packages

**Apps**
- `./apps/site`: main website
- `./apps/docs`: [KitDocs](https://github.com/svelteness/kit-docs)
  
**Packages**
- `./packages/components`: core components
- `./packages/rename-tsconfig`: shared `tsconfig.json`s used throughout the monorepo
- `./packages/eslint-preset-rename`: ESLint preset

Each package and app is 100% [Typescript](https://www.typescriptlang.org/).

# Setup

**Prereqs**
```
node v14  (or later)
pnpm v7   (or later)
```

**Installation**
```
git clone https://gitlab.com/scavenger/scavenger.git
pnpm i
pnpm dev
```

**Add Package**
```
1. create folder in ./packages named 'components'
2. create package.json with proper namespace

  {
    "name": "@scavenger/components",
    "version": "0.0.1",
    "type": "module",
    "main": "index.js"
  }

3. navigate to the package you want to share 'components' to

  cd packages/site
  pnpm add @scavenger/components
```

# Project Configuration

### **Modify the root `package.json`**

Make sure to modify the contents in the project's root package json to fit your needs.

### **Running concurrent dev enviornments**

As of now if you want to run multiple dev enviornments in parallel, you will have to define different ports in your scripts.

So you will have to change each `package.json` like such:

```bash
"scripts": {
    "dev": "svelte-kit dev -p 3200",
    "build": "svelte-kit build",
    "preview": "svelte-kit preview",
    "check": "svelte-check --tsconfig ./tsconfig.json",
    "check:watch": "svelte-check --tsconfig ./tsconfig.json --watch",
    "package": "svelte-kit package"
  },
```

Each project's port will need to be different.

### **Changing the NPM organization scope**

The NPM organization scope for this design system starter is `@rename`. To change this, it's a bit manual at the moment, but you'll need to do the following:

- Rename folders in `packages/*` to replace `rename` with your desired scope
- Search and replace `rename` with your desired scope
- Re-run `npm install`

# Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

# References
**Monorepo**
- [📽️ Building Svelte Society: Monorepos with pngwn🐧](https://youtu.be/gKxz7R9dX0w)
- [📽️ Monorepos: Any Size Fits All, by Altan Stalker](https://www.youtube.com/watch?v=elKsZvowdok)
- [🎧 How to Setup a PNPM Monorepo (Wes Bos and Scott Telenski)](https://syntax.fm/show/401/hasty-treat-how-to-setup-a-pnpm-monorepo)
- [📖 Visual Studio Code tips for monorepo development](https://medium.com/rewrite-tech/visual-studio-code-tips-for-monorepo-development-with-multi-root-workspaces-and-extension-6b69420ecd12)
- [📖 Exploring The Monorepo (6 Part Series)](https://dev.to/jonlauridsen/series/12073)
- [📖 Mono repository done right!](https://blog.ghaiklor.com/2020/07/12/mono-repository-done-right/)
- [📖 Replacing Lerna + Yarn with PNPM Workspaces](https://www.raulmelo.dev/blog/replacing-lerna-and-yarn-with-pnpm-workspaces)
- [📖 How to set up monorepo build in GitLab CI](https://how-to.dev/how-to-set-up-monorepo-build-in-gitlab-ci)
- [🛠️ Monorepo Tools](https://monorepo.tools)
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