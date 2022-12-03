<script>
  import Icon from '../Icon/Icon.svelte';
  import Link from '../Link/Link.svelte';
  import { mediaQuery } from '../mediaQuery/mediaQuery'

	const md = mediaQuery('(min-width: 0px) and (max-width: 1024px)')
</script>

<Link href="/">
  <Icon name="scavenger" width="100" class="fill--primary" />
</Link>