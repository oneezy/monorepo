// Used in route files
import Book from './Book.svelte'; // The main component wrapper used in the main layout of bookit
import Bookit from './Bookit.svelte'; // This is what loads a .story file. ie, a story file component loads into this component
// Used In .story files
import Canvas from './Canvas.svelte'; // The canvas where you put all your docs/frames etc.
import Frame from './Frame.svelte'; // If you want a component frame, required for stories
import Docs from './docs/Docs.svelte'; // A wrapper to add heading, p and other elements to your docs
import Callout from './docs/Callout.svelte'; // A docs callout, to be used as a child of <Docs>
import PropTable from './docs/PropTable.svelte'; // A docs prop table, to be used as a child of <Docs>
// Load functions needed to populate bookit state via glob imports
export { load } from './get_story';
export { layoutLoad } from './layout_load';
export { Book, Frame, Bookit, Docs, PropTable, Canvas, Callout };
