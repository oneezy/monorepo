import { onDestroy } from 'svelte';
import { writable } from 'svelte/store';

export const mediaQuery = (query, defaultState = false) => {
	const { set, subscribe } = writable(
		defaultState
	);
	
	if (typeof window !== 'undefined') {
		const mql = window.matchMedia(query);
    
		const onChange = () => set(!!mql.matches);
    mql.addListener(onChange);
    set(mql.matches);
		
		onDestroy(() => mql.removeListener(onChange));
	}

  return { subscribe };
};