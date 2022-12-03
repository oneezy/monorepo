<script>
  import { Intro, App, Hero, Logo, Theme, Link } from '@packages/components'
  import '@packages/components/css/global.css';
  import '$docs/app.css';
</script>

<!-- Layout -->
<Intro>
  <nav class="h-screen w-48 border-r fixed left-0 top-0 bottom-0 z-10">
    <div class="grid items-center justify-center gap-4 my-4">
      <Logo />
      <Theme />
    </div>
    <Link href="/docs/page-1">Page 1</Link>
    <Link href="/docs/page-2">Page 2</Link>
    <Link href="/docs/page-3">Page 3</Link>
  </nav>

  <App id="docs">
    <Hero>
      <svelte:fragment slot="title"><slot/></svelte:fragment>
      <svelte:fragment slot="description">Check out that sweeet sidebar</svelte:fragment>
    </Hero>
  </App>
</Intro>
