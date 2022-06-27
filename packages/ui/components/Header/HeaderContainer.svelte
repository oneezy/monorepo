<script>
	let CLASS; 
	export { CLASS as class };
</script>

{#if $$slots.left || $$slots.center || $$slots.right}

  <div class="header-container container mx-auto flex items-center justify-center {CLASS || ''}">
    <section class="flex-1 flex justify-start relative"><slot name="left"></slot></section>
    <section class="grow flex justify-center relative"><slot name="center"></slot></section>
    <section class="flex-1 flex justify-end relative"><slot name="right"></slot></section>
  </div>

{:else}

  <div class="header-container container mx-auto {CLASS || ''}">
    <slot />  
  </div>

{/if}