<script>
	import { onDestroy } from 'svelte'
	import { icons } from './icons.js'

	export let name, data
	export let size = null
	export let width = null
	export let height = null
	export let aspectRatio = null
	export let viewBox = null

	const unsubscribe = icons.subscribe(d => {
		data = d[name]

		if (data) {
			// if data does not have an attributes property then create one
			if (!data.hasOwnProperty('attributes')) {
				data.attributes = {}
			}

			// if user has specified size, use it instead of data attribute size (if any)
			data.attributes.size = size
				? size
				: data.attributes.hasOwnProperty('size')
				? data.attributes.size
				: null

			// if data attribute size is specified than set width to that value or if user has specified width, use it instead of data attribute width (if any)
			data.attributes.width = data.attributes.size
				? data.attributes.size
				: width
				? width
				: data.attributes.hasOwnProperty('width')
				? data.attributes.width
				: null

			// if data attribute size is specified than set height to that value or if user has specified height, use it instead of data attribute height (if any)
			data.attributes.height = data.attributes.size
				? data.attributes.size
				: height
				? height
				: data.attributes.hasOwnProperty('height')
				? data.attributes.height
				: null

			// if user has specified aspectRatio, use it instead of data attribute aspectRatio (if any)
			data.attributes.aspectRatio = aspectRatio
				? aspectRatio
				: data.attributes.hasOwnProperty('preserveAspectRatio')
				? data.attributes.aspectRatio
				: 'xMidYMid meet'

			// if user has specified viewBox, use it instead of data attribute viewBox (if any)
			data.attributes.viewBox = viewBox
				? viewBox
				: data.attributes.hasOwnProperty('viewBox')
				? data.attributes.viewBox
				: '0 0 24 24'
		} else {
		}
	})

	onDestroy(unsubscribe)
</script>

{#if data}
	<svg
    {...data.attributes}
		xmlns="http://www.w3.org/2000/svg"
		class={`group max-w-full ${$$props.class || ''}`}
		style={`${$$props.style || ''}`}>
		{@html data.body}
	</svg>
{/if}
