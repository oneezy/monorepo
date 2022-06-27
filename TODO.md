# Goals

We're creating a monorepo (Turborepo + Sveltekit + PNPM) that allows us to develop multiple stand-alone "child" apps (@site / @docs / @apps) that can be served on multiple ports for development. These child apps will then feed into our "parent" Sveltekit app as *symlinked* page routes located in the `main (parent) > src > routes` folder. It's important the apps are symlinked into the `routes` folder so they'll inherit all the page routing features Sveltekit provides.

We've made it pretty far with our approach, but have ran into a few issues along the way.

The main issue we're facing now is that our symlinked directories aren't able to find their npm packages. 

Are there any **PNPM** tricks that can help with this?