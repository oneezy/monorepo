<script>
  // import { base } from '$app/paths'
  
  export let alt
  export let src
</script>

<img 
  class="max-w-full {$$props.class || ''}" 
  src="{src}"
  {alt}
  {...$$restProps}
/>