<script>
  import { Intro } from '@packages/components'
  import '@packages/components/css/global.css';
  import '$site/app.css';
  import Site from '$site/lib/Site.svelte'
</script>

<!-- Layout -->
<Intro>
  <Site>
    <slot />
  </Site>
</Intro>