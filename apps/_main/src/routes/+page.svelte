<script>
	import { SITE_NAME, SITE_TITLE, SITE_SEPARATOR, SITE_AUTHOR, SITE_DESCRIPTION } from '@packages/metadata'
	import { page } from '$app/stores'
  import { Section, Container, Content, Button, TextAnimate } from '@packages/components';

  export let data
</script>

<svelte:head>
	<title>{SITE_NAME} {SITE_SEPARATOR} {SITE_TITLE}</title>
	<meta name="description" content={SITE_DESCRIPTION} />

	<meta property="og:title" content="{SITE_NAME} {SITE_SEPARATOR} {SITE_TITLE}" />
	<meta property="og:description" content={SITE_DESCRIPTION} />
	<meta property="og:image" content="{$page.url.origin}/og.png" />
</svelte:head>

<Section class="h-screen pt-20 md:pt-32 md:pb-[10vh]" {...$$restProps}>
  <Container class="h-full bg-blue-500/0">
    <Content class="h-full flex flex-col justify-around">
      <h1 class="text-black dark:text-white text-4xl font-bold sr-only">{SITE_NAME}</h1>
    
      <h3 class="select-none grid items-center justify-center text-center text-6xl md:text-[14vw] lg:text-[12vw] xl:text-[8vw] tracking-tight font-black">
        <span class="-mb-6">The</span>
        <TextAnimate class="py-6">{data.user.name}</TextAnimate>
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