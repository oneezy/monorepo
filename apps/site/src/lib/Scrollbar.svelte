<script>
  import { Svrollbar, Svroller } from 'svrollbar';
</script>

<Svrollbar />
<!-- <Svrollbar initiallyVisible={true} /> -->
<!-- <Svrollbar alwaysVisible={true} /> -->

<style>
  :global(html),
  :global(body) {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  :global(html::-webkit-scrollbar),
  :global(body::-webkit-scrollbar) {
    display: none;
  }

  :global(html) {
    
    /* Track */
    --svrollbar-track-width: 32px;
    --svrollbar-track-background:	initial;
    --svrollbar-track-radius:	initial;
    --svrollbar-track-opacity:	0;
    --svrollbar-track-shadow:	initial;

    /* Thumb */
    --svrollbar-thumb-width: 16px;
    --svrollbar-thumb-radius:	100px;
    --svrollbar-thumb-shadow:	initial;
    --svrollbar-thumb-opacity: 1;
    --svrollbar-thumb-background: black;
    /* --svrollbar-thumb-background:  
      linear-gradient( -60deg, 
        rgba(0, 0, 0, 1),
        rgba(0, 0, 0, .15) 40%, 
        rgba(0, 0, 0, .15) 60%, 
        rgba(0, 0, 0, 1)
      ); */
  }

  :global(html .v-scrollbar) { transform: scale(.98); z-index: 20; }
  /* :global(html .v-thumb) { 
    border: 1px solid black;
    backdrop-filter: blur(20px) brightness(100%);
    -webkit-backdrop-filter: blur(20px) brightness(100%); 
  } */
  
  /* :global(html .v-track)    {  } */
  /* :global(html .v-thumb)    {  } */

  :global(html.dark) {

    /* Thumb */
    /* --svrollbar-thumb-background:  rgba(255,255,255,.5); */
    --svrollbar-thumb-background:  
      linear-gradient( -60deg, 
        rgba(255, 255, 255, 1),
        rgba(255, 255, 255, .65) 40%, 
        rgba(255, 255, 255, .65) 60%, 
        rgba(255, 255, 255, 1)
      );
  }

  :global(html.dark .v-thumb) { 
    border: 1px solid white;
    backdrop-filter: blur(20px) brightness(1500%);
    /* backdrop-filter: blur(10px) saturate(200%) brightness(200%); */
    -webkit-backdrop-filter: blur(20px) brightness(1500%); 
  }
</style>