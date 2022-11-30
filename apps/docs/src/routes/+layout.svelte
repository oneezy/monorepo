<script>
	import { page } from '$app/stores'
  import { fade, fly } from 'svelte/transition';
	import { SITE_URL, SITE_NAME, SITE_TITLE, SITE_SEPARATOR, SITE_AUTHOR, SITE_DESCRIPTION } from '@packages/metadata'
	import { Section, Container, Content, TextAnimate, mediaQuery, Intro, Header, Scrollbar, Dialog, Nav, Logo, Theme, Button, Social, Device, Page, Link, Icon } from '@packages/components'

  import '@packages/components/css/global.css';
  import '$docs/app.css';

	const sm = mediaQuery('(min-width: 0px) and (max-width: 767px)')
	const md = mediaQuery('(min-width: 0px) and (max-width: 1024px)')
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

  <Section class="pt-20 md:pt-32 md:pb-[10vh]" {...$$restProps}>
    <Container class="h-full bg-blue-500/0">
      <Content class="h-full flex flex-col justify-around">
        <h1 class="text-black dark:text-white text-4xl font-bold sr-only">{SITE_NAME}</h1>
      
        <h3 class="select-none grid items-center justify-center text-center text-6xl md:text-[14vw] lg:text-[12vw] xl:text-[8vw] tracking-tight font-black">
          <span class="-mb-6">The</span>
          <TextAnimate class="py-6"><slot /></TextAnimate>
          <span class="-mt-6">Page</span>
        </h3>
        
        <h2 class="text--secondary text-center font-medium text-base md:text-2xl md:mt-10 tracking-wide">{SITE_DESCRIPTION}</h2>
      
        <div class="flex flex-col md:flex-row items-center justify-center gap-4">
          <Button href="https://scavengerbot.io" display="hero">Learn More</Button>
          <Button href="https://scavengerbot.io" button="outline" display="hero">Sign Up</Button>
        </div>
      </Content>
    </Container>
  </Section>
</Intro>