<script>
	import { socials } from '$data/socials.js';
</script>

<div class="socials flex items-center justify-center gap-2">

	{#each socials as social}
    {#if social.view !== 'HIDDEN' }
      <a href="{social.url}" target="_blank" class="social" title="{social.name}">
        <img class="h-9 w-9 dark:invert" src="/images/social/{social.name}.svg" alt="{social.name}">
      </a>
    {/if}
	{/each}

</div>