// import { onMount } from 'svelte'

// onMount(async () => {
//   const res = await fetch(`/tutorial/api/album`);
//   photos = await res.json();
// });

let intersectionObserver;

function ensureIntersectionObserver() {
  if (intersectionObserver) return;

  intersectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        const eventName = entry.isIntersecting ? 'enterViewport' : 'exitViewport';
        entry.target.dispatchEvent(new CustomEvent(eventName));
      });
    }
  );
}
  
export function viewport(element) {
  if (typeof IntersectionObserver !== 'undefined') {
    ensureIntersectionObserver();

    intersectionObserver.observe(element);

    return {
      destroy() {
        intersectionObserver.unobserve(element);
      }
    }
  }
}