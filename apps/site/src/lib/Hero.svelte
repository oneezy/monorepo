<script>
  import  { SITE_NAME, SITE_DESCRIPTION } from '@packages/metadata';
  import { Section, Container, Content, Button } from '@packages/components';
  import TextAnimate from './TextAnimate.svelte';
</script>

<Section class="h-screen pt-20 md:pt-32 md:pb-[10vh]" {...$$restProps}>
  <Container class="h-full bg-blue-500/0">
    <Content class="h-full flex flex-col justify-around">
      <h1 class="text-black dark:text-white text-4xl font-bold sr-only">{SITE_NAME}</h1>
    
      <h3 class="select-none grid items-center justify-center text-center text-6xl md:text-[14vw] lg:text-[12vw] xl:text-[8vw] tracking-tight font-black">
        <span class="-mb-6">Sveltekit</span>
        <TextAnimate class="py-6">Turborepo</TextAnimate>
        <span class="-mt-6">Tailwind</span>
      </h3>
      
      <h2 class="text--secondary text-center font-medium text-base md:text-2xl md:mt-10 tracking-wide">{SITE_DESCRIPTION}</h2>
    
      <div class="flex flex-col md:flex-row items-center justify-center gap-4">
        <Button href="/#features" display="hero">Learn More</Button>
        <Button href="https://scavengerbot.io/dashboard" button="outline" display="hero">Create Bot</Button>
      </div>
    </Content>
  </Container>
</Section>