<script>
	import { socials } from '@packages/metadata'
	import Button from '../Button/Button.svelte'
</script>

<div class="socials flex items-center justify-center gap-2">
	{#each socials as social}
    <Button
      button="icon"
      icon="{social.name}"
      size="42"
      href={social.url}
      target="_blank"
      aria-label={social.title} />
	{/each}
</div>
