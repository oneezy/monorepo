import { writable, derived } from 'svelte/store';

/* Device Stats
************************************************************/
export const screenH = writable(0)
export const screenW = writable(0)
export const scrollY = writable(0)
export const mouse   = writable({ x: 0, y: 0 })

let prevY;
let prevUpY; 
let prevDownY;

// Scroll Direction
export const scrollDir = derived(
	scrollY,
	$scrollY => {
		const dir = $scrollY > prevY ? 'down' : 'up';
		prevY = $scrollY;
		return dir;
	}
)

// Scroll Up
export const scrollUp = derived(
	scrollY,
	$scrollY => {
		const up = $scrollY < prevUpY;
		prevUpY = $scrollY;
		return up;
	}
)

// Scroll Down
export const scrollDown = derived(
	scrollY,
	$scrollY => {
		const down = $scrollY > prevDownY;
		prevDownY = $scrollY;
		return down;
	}
)

// Scroll Top
export const scrollTop = derived(
	[scrollY],
	([$scrollY]) => $scrollY <= 0
)

// Scroll Bottom
export const scrollBottom = derived(
	[scrollY, screenH],
	([$scrollY, $screenH]) => $scrollY >= $screenH
)

// Mouse Move
export const mouseMove = (e) => {
	mouse.update(() => ({ x: e.clientX, y: e.clientY }))
}

/* Screen Sizes
************************************************************/
export const smW = writable(767)
export const mdW = writable(1023)
export const lgW = writable(1279)
export const xlW = writable(1280)

export const sm = derived(
	[screenW, smW],
	([$screenW, $smW]) => $screenW < $smW,
)

export const md = derived(
	[screenW, mdW],
	([$screenW, $mdW]) => $screenW < $mdW,
)

export const lg = derived(
	[screenW, lgW],
	([$screenW, $lgW]) => $screenW < $lgW,
)

export const xl = derived(
	[screenW, xlW],
	([$screenW, $xlW]) => $screenW < $xlW,
)