<script>
  import { Container, Content, Button } from '@packages/components';
  
  const stories = [
    { id: 1, name: 'vitebook', repo: 'https://github.com/vitebook/vitebook', demo: 'https://vitebook.dev' },
    { id: 2, name: 'bookit', repo: 'https://github.com/leveluptuts/bookit', demo: 'https://bookit.leveluptutorials.com' },
    { id: 3, name: 'histoire', repo: 'https://github.com/histoire-dev/histoire', demo: 'https://histoire.dev' },
  ]
</script>

<Container class="{`flex gap-10 md:gap-20 items-center justify-center ${$$props.class || ''}`}" >
  {#each stories as story} 
    <a href="{story.demo}" target="_blank" class="flex flex-col items-center justify-center w-32">
      <img class="max-w-full h-40" src="/images/logos/{story.name}.svg" alt="{story.name}">
      <h3 class="text-center text-xl text--primary font-medium lg:mb-2 capitalize">{story.name}</h3>
    </a>
  {/each}
</Container>