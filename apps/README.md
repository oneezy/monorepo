I have a sveltekit monorepo that uses symlinks to link apps together as routes. The **@site** is the main entry point, thus all other apps *`@app`* and *`@docs`* become sub-routes living in the *`@site > src > routes`* directory.

During development it works great since we're able to serve each app as it's own stand-alone project and port number i.e.

```diff
pnpm dev
starting 3 dev servers...

+ http:localhost:3000    (@site)
+ http:localhost:4000    (@docs)
+ http:localhost:5000    (@app)
```

But we run into problems with our actual **@site** symlink structure because the symlinked sub-routes can't access their *`../relatively`* associated files i.e.

```js
// @app ➜ __layout.svelte 
import '../app.css';   //❌ not here!

// @docs ➜ __layout.svelte 
import '../docs.css';  //❌ not here!
```

How would I go about solving this problem? 

> *Here's the basic structure of our monorepo...*

```diff
🚀 main app    📦 app (sub-route)    ➡️ symlink

 ./
 ├─ apps
 │  ├─ 📦 @app
 │  │  └─ 📁 src
 │  │     ├─ 📁 routes ➡️
 │  │     │  ├─ 📄 __layout.svelte
 │  │     │  ├─ 📄 index.svelte
 │  │     └─ 📄 app.css
 │  │     
 │  ├─ 📦 @docs
 │  │  └─ 📁 src
 │  │     ├─ 📁 routes ➡️
 │  │     │  ├─ 📄 __layout.svelte
 │  │     │  ├─ 📄 index.svelte
 │  │     └─ 📄 docs.css
 │  │     
+│  └─ 🚀 @site (main)
 │     └─ 📁 src
 │        ├─ 📁 routes
 │        │  ├─ 📄 __layout.svelte
 │        │  ├─ 📄 index.svelte
 │        │  ├─ ➡️ app  (../../../app/src/routes)
 │        │  │  ├─ ➡️ __layout.svelte
 │        │  │  └─ ➡️ index.svelte
 │        │  │
 │        │  ├─ ➡️ docs (../../../docs/src/routes)
 │        │  │  ├─ ➡️ __layout.svelte
 │        │  │  └─ ➡️ index.svelte
 │        └─ 📄site.css
 │
 ├─ packages
 │  ├─ @static
 │  ├─ @utils
 │  └─ @ui
```