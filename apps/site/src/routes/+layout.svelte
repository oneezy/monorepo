<script>
  import { Intro, App, Hero } from '@packages/components'
  import '@packages/components/css/global.css';
  import '$site/app.css';
</script>

<!-- Layout -->
<Intro>
  <App id="site">
    <Hero>
      <svelte:fragment slot="title"><slot/></svelte:fragment>
      <svelte:fragment slot="description">A badass starter project</svelte:fragment>
    </Hero>
  </App>
</Intro>