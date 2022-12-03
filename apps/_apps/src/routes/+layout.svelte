<script>
	import { mediaQuery, Intro, App, Header, Scrollbar, Dialog, Nav, Logo, Theme, Button, Social, Device, Link, Icon } from '@packages/components'
	import '@packages/components/css/global.css';
  import '$apps/app.css';

	const sm = mediaQuery('(min-width: 0px) and (max-width: 767px)')
	const md = mediaQuery('(min-width: 0px) and (max-width: 1024px)')

	let device
</script>

<Device device="hidden" />

{#if !$md}
  <Scrollbar />
{/if}

<!-- Mobile -->
<Header class="block md:hidden">
  <Dialog slot="left" type="nav">
    <Nav />
  </Dialog>
  <Logo slot="center" />
  <Theme slot="right" />
</Header>

<!-- Desktop -->
<Header class="hidden md:block">
  <Logo slot="left" class="ml-8" />
  <Nav slot="center" />
  <div class="flex items-center justify-center gap-2" slot="right">
    <Link href="https://discord.gg/6Ys7gEr" target="_blank" rel="noreferrer">
      <Icon name="discord" viewBox="0 0 28 28" size="42" class="fill--primary rounded-full" />
    </Link>
    <Theme />
    <Button href="/signin" class="ml-2">Sign Up</Button>
  </div>
</Header>

<Intro>
  <App>
    <slot />
  </App>
</Intro>

<footer class="container mx-auto p-4 md:p-8">
  <Social />
</footer>