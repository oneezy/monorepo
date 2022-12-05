<script>
	let _class = null; 
	export { _class as class };

  export let prose = null;
  export let noprose = null;
</script>

<article 
  class="mx-auto {_class || ''}

  { /* Prose 
    *************************/
    prose ? 'prose prose-scavenger lg:prose-xl dark:prose-invert' : 
    noprose ? '' : ''}"

  { ...$$restProps }>

  <slot />

</article>