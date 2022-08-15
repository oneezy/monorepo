import { writable } from 'svelte/store';

// The main store that keeps track of all Bookit's state
// Bookit's state includes everything needed for the entire app to function

// Helper
const IS_SERVER: boolean = typeof window === 'undefined';

type BookitInterfaceStatus = 'VISIBLE' | 'HIDDEN';

// Some store state is kept in local storage for persistance
// This is just a helper to make sure we can use local storage and initialize if we can
function local_storage_checker<T>(initial: T, key: string): T {
	if (!IS_SERVER) {
		const local_storage_data = localStorage.getItem(key);
		if (local_storage_data) {
			return local_storage_data as unknown as T;
		} else {
			localStorage.setItem(key, initial as unknown as string);
		}
	}
	return initial;
}

// Custom store wrapper
const newBookit = () => {
	// Initialize Nav based on local storage
	const initial_nav = local_storage_checker<BookitInterfaceStatus>('VISIBLE', 'BOOKIT_NAV');
	const initial_code = local_storage_checker<BookitInterfaceStatus>('HIDDEN', 'BOOKIT_CODE');

	const { subscribe, update, set } = writable<{
		canvasBg: string; // The background color of the canvas
		selected_frame: any; // The selected frame
		code: BookitInterfaceStatus; // The status of the code interface ie if it's hidden or not
		nav: BookitInterfaceStatus; // The status of the nav interface ie if it's hidden or not
		loaded: {}; // The story that is loaded
		tree: {
			// All loaded stories based on their parent and title props
			[key: string]: {
				title: string;
				parent: string;
				icon: string;
			}[];
		};
	}>({
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
			update((prev) => ({ ...prev, tree }));
		},

		toggleCode: () => {
			update((prev) => {
				const new_code = prev.code === 'VISIBLE' ? 'HIDDEN' : 'VISIBLE';
				localStorage.setItem('BOOKIT_CODE', new_code);
				return { ...prev, code: new_code };
			});
		},

		toggleNav: () => {
			update((prev) => {
				const new_nav = prev.nav === 'VISIBLE' ? 'HIDDEN' : 'VISIBLE';
				localStorage.setItem('BOOKIT_NAV', new_nav);
				return { ...prev, nav: new_nav };
			});
		}
	};
};

export const bookit_state = newBookit();
