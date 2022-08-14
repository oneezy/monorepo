<script>
  import Icon from '../Icon/Icon.svelte';
  import Link from '../Link/Link.svelte';
  import { mediaQuery } from '../mediaQuery/mediaQuery'

	const md = mediaQuery('(min-width: 0px) and (max-width: 1024px)')
</script>

<a href="/">
  {#if $md}
    <Icon name="oneezy-icon" width="48" href="/" />
  {:else}
    <Icon name="oneezy-logo" width="200" href="/" class="-mb-6 fill--primary" />
  {/if}
</a>