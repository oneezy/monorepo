<script>
	import { screenH, screenW, scrollY, scrollDir, scrollUp, scrollDown, scrollTop, scrollBottom, mouse, mouseMove, sm, md, lg, xl } from '$stores/device.js';
	
	export let device;
	
// 	$: {
// 		console.clear()
// 		console.table({ $screenH, $scrollY, $scrollDir, $scrollUp, $scrollDown, $scrollTop, $scrollBottom }) 
// 	}
</script> 

<svelte:window 
	bind:innerHeight={$screenH}
	bind:innerWidth={$screenW}
	bind:scrollY={$scrollY}
	on:mousemove={(e) => mouseMove(e)} 
/>
	
	{#if device == 'stats'}
	<div class="bg-black text-white rounded-md p-6 fixed bottom-20 right-20 z-10 w-96">
		<h3 class="text-2xl font-semibold border-b mb-1 pb-1">Device Stats</h3>
		<ul class="flex flex-col items-start justify-centerlist-none mb-8">
			<li><b>screenH: </b><i>{$screenH}</i></li>
			<li><b>screenW: </b><i>{$screenW}</i></li>
			<li><b>mouse: </b><i>{$mouse.x}, {$mouse.y}</i></li>
			<li><b>scrollY: </b><i>{$scrollY}</i></li>
			<li><b>direction: </b><i>{$scrollDir}</i></li>
			<li><b>scrollTop: </b><i style:color={$scrollTop == true ? 'lime' : 'red'}>{$scrollTop}</i></li>
			<li><b>scrollUp: </b><i style:color={$scrollUp == true ? 'lime' : 'red'}>{$scrollUp}</i></li>
			<li><b>scrollDown: </b><i style:color={$scrollDown == true ? 'lime' : 'red'}>{$scrollDown}</i></li>
			<li><b>scrollBottom: </b><i style:color={$scrollBottom == true ? 'lime' : 'red'}>{$scrollBottom}</i></li>
		</ul> 

		<h3 class="text-2xl font-semibold border-b mb-1 pb-1">Screen Sizes</h3>
		<ul class="boolean flex flex-col items-start justify-centerlist-none mb-8">
			<li><b>Small: </b><i style:color={$sm == true ? 'lime' : 'red'}>{$sm}</i></li>
			<li><b>Medium: </b><i style:color={$md == true ? 'lime' : 'red'}>{$md}</i></li>
			<li><b>Large: </b><i style:color={$lg == true ? 'lime' : 'red'}>{$lg}</i></li>
			<li><b>XLarge: </b><i style:color={$xl == true ? 'lime' : 'red'}>{$xl}</i></li>
		</ul>
	</div>
	{/if}

	<style>
		li { display: flex; }
		b { width: 180px; display: block; }
		i { font-style: normal; }
	</style>