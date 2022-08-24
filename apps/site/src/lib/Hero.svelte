<script>
  import  { SITE_NAME, SITE_DESCRIPTION } from '@packages/metadata';
  import { Section, Container, Content, Button, Link } from '@packages/components';
  import TextAnimate from './TextAnimate.svelte';
  import Stories from './Stories.svelte';
</script>

<Section class="h-screen pt-20 md:pt-32 md:pb-[10vh]" {...$$restProps}>
  <Container class="h-full bg-blue-500/0">
    <Content class="h-full flex flex-col justify-around">
      <h1 class="text-black dark:text-white text-4xl font-bold sr-only">{SITE_NAME}</h1>
    
      <h3 class="select-none grid items-center justify-center text-center text-6xl md:text-[12vw] lg:text-[10vw] xl:text-[7vw] tracking-tight font-black">
        <span class="-mb-6">Sveltekit</span>
        <TextAnimate class="py-6">Turborepo</TextAnimate>
        <span class="-mt-6">Tailwind</span>
      </h3>

      <Stories class="my-2 lg:my-10" />
    
      <div class="flex flex-col md:flex-row items-center justify-center gap-4">
        <Button href="https://github.com/oneezy/monorepo" target="_blank" display="hero">Github</Button>
        <Button href="https://oneezy-monorepo.vercel.app" target="_blank" button="outline" display="hero">Demo</Button>
      </div>
    
      <h2 class="text--primary text-center font-medium text-base md:text-2xl md:mt-10 tracking-wide">
        Built with ❤️ by the <a href="https://scavengerbot.io" class="text--brand" target="_blank">ScavengerBot™</a> Team  
      </h2>
    </Content>
  </Container>
</Section>