<p align="center">
  <h1 align="center">Turborepo SvelteKit System starter</h1>
  <h3 align="center">This is an unofficial SvelteKit monorepo starter powered by Turborepo.</h3>
</p>

# What's inside?

This Turborepo includes the following packages and apps:

### Apps and Packages

- `docs`: [Sveleton](https://github.com/Brisklemonade/sveleton) placeholder documentation site
- `rename-core`: core components
- `rename-tsconfig`: shared `tsconfig.json`s used throughout the monorepo
- `eslint-preset-rename`: ESLint preset

Each package and app is 100% [Typescript](https://www.typescriptlang.org/).

# Installation

Run the following command:

```bash
npx create-turbosvelte app-name
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

# License

[MIT](https://choosealicense.com/licenses/mit/)
