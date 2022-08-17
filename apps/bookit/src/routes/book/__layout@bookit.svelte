<script context="module">
	import Toy from '@leveluptuts/svelte-toy/Toy.svelte';
	import { bookit_state } from '$bookit/lib/state';
	import { layoutLoad as load, Book } from '$bookit/lib';
	export { load };
</script>

<Book>
	<slot />
</Book>

<Toy theme="dark" top="0vh" register={{ bookit_state }} />

