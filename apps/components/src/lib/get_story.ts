import { get } from 'svelte/store';
import { bookit_state } from './state';

interface GetStory {
	parent: string;
	title: string;
}

// Takes parent and title and plucks the correct
// story from the tree
export async function getStory({ parent, title }: GetStory) {
	const tree = get(bookit_state).tree;
	const group = tree?.[parent];

	if (group) {
		const found_story = group.find((item) => item.title === title);
		return found_story;
	} else {
		return null;
	}
}

export function load({ params }) {
	return {
		props: {
			params
		}
	};
}
