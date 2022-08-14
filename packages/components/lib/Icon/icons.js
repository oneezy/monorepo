import { derived } from 'svelte/store';
import { describe } from './describe.js';

// Icons (svg paths)
import { defaultIcons } from './icons/default.js';
import { socialIcons } from './icons/socials.js';
import { logoIcons } from './icons/logos.js';

export const icons = derived([defaultIcons, socialIcons, logoIcons], ([$defaultIcons, $socialIcons, $logoIcons]) => {
	return {
		...$defaultIcons,
		...$socialIcons,
		...$logoIcons,
	};
});

/* All Icon derived stores for describe
***********************************************************************/
// Normal
export const normal = derived([describe], ([$describe]) => { 
	let normal = [];
	
	if ($describe.hasOwnProperty("normal")) {
		normal = $describe.normal
	}
	
	return normal;
});

// Socials
export const socials = derived([describe], ([$describe]) => { 
	let socials = [];
	
	if ($describe.hasOwnProperty("socials")) {
		socials = $describe.socials
	}
	
	return socials;
});