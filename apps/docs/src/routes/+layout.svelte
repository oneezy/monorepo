<script>
  import { Intro, Logo, Theme, Link } from '@packages/components'
  import '@packages/components/css/global.css';
  import '$docs/app.css';
  import Docs from '$docs/lib/Docs.svelte'
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

  <Docs>
    <slot />
  </Docs>
</Intro>