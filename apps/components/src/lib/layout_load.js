// Layout load is the load function that finds all stories,
// and scoops them up and puts them in $bookit_state. This grabs all kinds of information via createTree()
import { createTree } from './create_tree';
import { bookit_state } from './state';
export async function layoutLoad() {
    bookit_state.init(async () => createTree());
    return {};
}
