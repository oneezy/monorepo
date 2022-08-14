![image](https://oneezy.vercel.app/logo.svg) 

# Turborepo + Sveltekit + PNPM + Tailwind Starter [(Demo)](https://oneezy-monorepo.vercel.app)


This is a monorepo starter powered by [Turborepo](https://turborepo.org/), [PNPM Workspaces](https://pnpm.io/), [Sveltekit](https://kit.svelte.dev/), and [TailWindCSS](https://tailwindcss.com/).

# Features

- [x] Turborepo
- [x] PNPM Workspaces
- [x] Husky
- [x] Commitlint
- [x] Symlink routes between apps
- [x] Shared `@packages/*` between `@apps/*`
- [x] Remove all build folder w/ `pnpm clean` script
- [x] Open multiple apps on different ports w/ `pnpm dev`
- [x] Build multiple apps w/ `pnpm build` (turborepo build under hood)
- [x] Preview built apps w/ `pnpm preview`
- [ ] Commitlint Emojis
- [ ] Implement Changelogs w/ [(Changesets)](https://github.com/changesets/changesets)
- [ ] Setup Docker w/ Turborepo
- [ ] Deploy `dev`, `beta`, and `prod` to real web host
- [ ] CI Build Process
- [ ] Create `env` variables shared in `packages`
- [ ] Limit access certain directories
- [ ] Setup git submodules for opensource repos

### Apps
websites and webapps live in the `./apps` folder. They all live at the same level but the app routes are also *symlinked* into the **site (main app)** so they inherit Sveltekit's SPA routing system (Single Page Application).

- **site** (main)
- **docs**

### Packages
libraries, configs and components live in the `./packages` folder.
- **config**
  - shared configs between all apps
- **dependencies**
  - shared `dependencies` and `devDependencies` between alls apps
- **libs**
  - useful libraries from npm and other 3rd party resources
- **metadata**
  - base metadata shared between apps
- **ui**
  - where components live
- **utils**
  - where utilities live


# Setup

**Prereqs**
```
node v16.13.2  (or later)
pnpm v7        (or later)
```

**Installation**
```diff
git clone https://github.com/oneezy/monorepo.git
pnpm i

+ start all apps
pnpm dev

+ start single app
pnpm dev --filter @apps/site

+ production build all apps
pnpm build

+ production preview all apps
pnpm preview

+ production preview single app
pnpm preview --filter @apps/site
```

**Add Package**
1. create new folder in `./apps` (i.e. `docs`)
2. create new folder in `./packages` (i.e. `ui`)
3. go to `ui` folder and create `package.json` with proper namespace
```json
{
  "name": "@packages/components",
  "version": "0.1.0",
  "type": "module",
  "main": "index.js"
}
```
4. cd into the app you want to add the package to and use the `pnpm add` command
```
cd apps/docs
pnpm add @packages/components
```

> *pnpm adds the workspace at the bottom of your `docs/package.json`*
```json
"dependencies": {
  "@packages/components": "workspace:^0.1.0"
}
```

**Add Component**
1. create new component in `packages/components/lib` directory 
2. export new component from `packages/components/index.js` file
> ***PROTIP:** Quickly geneate components using [plop](https://plopjs.com/documentation)! (automatically handles steps 1 and 2)*
```
pnpm plop
```
3. use component in an app `apps/site/src/routes/index.svelte`
```html
<script>
  import * as UI from '@packages/components';
</script>

<UI.MyComponent />
```
> *Or...*
```html
<script>
  import { MyComponent } from '@packages/components/lib/MyComponent/MyComponent.svelte';
</script>

<MyComponent />
```

# Project Configuration

### Modify the root `package.json`

Make sure to modify the contents in the project's root package json to fit your needs.
### `Package.json` inheritance from `@packages/dependencies`

You can create *base* `package.json`'s to inherit from each other. 

i.e.
`packages/dependencies/package.site.json`
```json
{
    "devDependencies": {
        "svrollbar": "^0.12.0",
        "svelte-accessible-accordion": "^2.1.0"
    },
    "dependencies": {
        "@packages/config": "workspace:^0.1.0",
        "@packages/metadata": "workspace:^0.1.0",
        "@packages/components": "workspace:^0.1.0"
    }
}
```
And then add it to the app's `package.json` like...
```json
  "name": "@apps/site",
  "inherits": [
    "@packages/dependencies/package.svelte.json",
    "@packages/dependencies/package.site.json"
  ],
```

### Running Multiple Dev Environments

If you want to run multiple dev enviornments in parallel, you will have to define different ports in each of your apps `package.json` npm scripts (i.e. `-p 4000`). Each apps port will need to be different.

```json
"name": "@apps/docs",
"version": "0.1.0",
"scripts": {
  "dev": "svelte-kit dev -p 4000 -o",
  "build": "svelte-kit build",
  "preview": "svelte-kit preview -p 4000 -o",
  "check": "svelte-check --tsconfig ./tsconfig.json",
  "check:watch": "svelte-check --tsconfig ./tsconfig.json --watch",
  "package": "svelte-kit package"
},
```

# Setting up Symlinks (if you're on Windows)

## Prerequisites

### Symlink Permissions
You have 1 of 3 options. If you try to create a symlink without one of these, you will see:
```
Failed to create symbolic link 'link' : Operation not permitted
```

<details>
<summary>🟦 Option 1: Run as Administrator</summary><br>

When you make a symlink this way, you'll always need to open up the terminal as an `Administrator`. 
</details>

<details>
<summary>🟦 Option 2: Developer Mode</summary><br>

This is the easiest way but not the safest (security risk). 
1. Go to your start menu and search *"Developer Settings"*. 
2. Turn **Developer Mode** `On`.
</details>

<details open>
<summary>✅ Option 3: Local Security Policy</summary><br>

1. Go to your start menu and search *"Local Security Policy"*. 
2. Double click on `Create symbolic links`
```diff
+ Security Settings > Local Policies > User Rights Assignment > Create symbolic links
```
3. Click the **Add User or Group** button
4. Type in your username and click the **OK** button
5. Click the **Apply** button
6. Restart your computer for the settings to take place
</details>










## Choose a Path: `Command Prompt`, `Git Bash` or `WSL`

### Command Prompt
1. Open the **Command Prompt**
2. Use `cd` to go into your project where you want to add the `symlink`
```
cd C:\Users\oneezy\Desktop\sveltekit-symlinks\src\routes
```
3. Create a relative `symlink` *(not absolute!)* to a **directory folder** *(not a file!)*
```
mklink /D my-new-symlink ..\..\symlinked-docs
```
4. And your finished!




## Git Bash

### Step 1. Setting System Environment Variables

<details>
<summary>🟦 Option 1: Exporting variable per session (tedious)</summary><br>

In your terminal you'll need to write the following command every time you restart git bash.
```
export MSYS=winsymlinks:nativestrict
```
</details>


<details open>
<summary>✅ Option 2: Create an entry for MSYS (once)</summary><br>

1. Go to your start menu and search for *"System Settings"*
2. Click the **Environment Variables...** button
3. Go to `System variables` section and click the **New** button
4. Enter in the **New System Variable** `name` and `value` and click the **OK** button.
```
Variable name:    MSYS
Variable value:   winsymlinks:nativestrict
```
5. Click the **OK** button again to confirm.
6. Congratulations! Now you have the power to create symlinks whenever you want!
</details>

### Step 2. Enable Symlinks in Gitconfig
You may also need to enable symlinks in your `.gitconfig` user profile.
```
git config --global core.symlinks true
```
> This will add the `symlinks = true` to `C:\Users\username\.gitconfig`
```
[core]
  symlinks = true
```

You may also need to manually add `symlinks = true` to the **gitconfig** inside `C:\Program Files\Git\etc\gitconfig` if it's not there already
```
[core]
  symlinks = true
```


### Step 3. Create Symlink (Git Bash)

1. Open up **Git Bash**
2. Use `cd` to go into your project where you want to add the `symlink`
```
cd c/users/oneezy/desktop/sveltekit-symlinks/src/routes
```
3. Create a relative `symlink` *(not absolute!)* to a **directory folder** *(not a file!)*
```
ln -s ../../../docs docs
```
4. And your finished!

> **PROTIP:** To see a list of your symlinks use the `ls -l` command
```diff
oneezy@oneezy MINGW64 ~/Desktop/sveltekit-symlinks/src/routes (main)
$ ls -l

rw-r--r-- 1 oneezy 197609 1354 Jun  1 13:00 index.svelte
+lrwxrwxrwx 1 oneezy 197609   20 Jun  1 20:45 docs -> ../../docs/
```
# Deploying
This uses Sveltkits `adapter-auto` and is being deployed to [Vercel](vercel.com) but you may need to change it depending on how you want to deploy.

> _**Note:** You might have to do something like this for your build command (I tried running pnpm build --filter @apps/site but it was complaining_
```
cd ../.. && npx turbo run build --scope=site --include-dependencies --no-deps
```
![image](https://user-images.githubusercontent.com/7369575/176028732-4aabef62-240b-43d5-852b-89c9dd9db50a.png)


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
- [✨ BooKit](https://bookit.leveluptutorials.com/)

**Blog Starters**
- [✨ Hagura](https://github.com/sharu725/hagura-sveltekit)

**Tailwind UI**
- [✨ Tailblocks](https://tailblocks.cc/)
- [✨ HyperUI](https://www.hyperui.dev/)

**Svelte Themes**
- [✨ Svelte Themes](https://www.sveltethemes.dev/)

**Full-Stack Sveltekit**
- [SVEMIX](https://www.svemix.com/)


# Thanks Everyone for your help!
