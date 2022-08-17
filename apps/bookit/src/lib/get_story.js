import { get } from 'svelte/store';
import { bookit_state } from './state';
// Takes parent and title and plucks the correct
// story from the tree
export async function getStory({ parent, title }) {
    const tree = get(bookit_state).tree;
    const group = tree === null || tree === void 0 ? void 0 : tree[parent];
    if (group) {
        const found_story = group.find((item) => item.title === title);
        return found_story;
    }
    else {
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
