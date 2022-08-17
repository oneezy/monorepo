import { writable } from 'svelte/store';
// The main store that keeps track of all Bookit's state
// Bookit's state includes everything needed for the entire app to function
// Helper
const IS_SERVER = typeof window === 'undefined';
// Some store state is kept in local storage for persistance
// This is just a helper to make sure we can use local storage and initialize if we can
function local_storage_checker(initial, key) {
    if (!IS_SERVER) {
        const local_storage_data = localStorage.getItem(key);
        if (local_storage_data) {
            return local_storage_data;
        }
        else {
            localStorage.setItem(key, initial);
        }
    }
    return initial;
}
// Custom store wrapper
const newBookit = () => {
    // Initialize Nav based on local storage
    const initial_nav = local_storage_checker('VISIBLE', 'BOOKIT_NAV');
    const initial_code = local_storage_checker('HIDDEN', 'BOOKIT_CODE');
    const { subscribe, update, set } = writable({
        code: initial_code,
        nav: initial_nav,
        canvasBg: '#111',
        selected_frame: null,
        tree: {},
        loaded: {}
    });
    return {
        subscribe,
        update,
        set,
        // Initializes our state beyond the default state with all info about found stories
        init: async (data) => {
            // data is an async function that runs the getTree function
            const tree = await data();
            update((prev) => (Object.assign(Object.assign({}, prev), { tree })));
        },
        toggleCode: () => {
            update((prev) => {
                const new_code = prev.code === 'VISIBLE' ? 'HIDDEN' : 'VISIBLE';
                localStorage.setItem('BOOKIT_CODE', new_code);
                return Object.assign(Object.assign({}, prev), { code: new_code });
            });
        },
        toggleNav: () => {
            update((prev) => {
                const new_nav = prev.nav === 'VISIBLE' ? 'HIDDEN' : 'VISIBLE';
                localStorage.setItem('BOOKIT_NAV', new_nav);
                return Object.assign(Object.assign({}, prev), { nav: new_nav });
            });
        }
    };
};
export const bookit_state = newBookit();