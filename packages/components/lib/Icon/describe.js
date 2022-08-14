import { writable } from 'svelte/store';

// create writeable store from fetching data from https://api.scavengerbot.io/v1/describe
export const describe = writable({}, set => {
    fetch('https://api-dev.scavengerbot.io/v1/describe')
        .then(response => response.json())
        .then(data => set(data.data));
})