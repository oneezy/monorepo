import argv from "argv-to-object";
import path from "path";
import { update } from './update.js';
import { check } from "./check.js";

// get the provided options from the command line as an object
let options = argv({
    'update': {
        'keypath': 'update',
        'type': 'boolean',
        'alias': 'u',
        'description': 'Update the package.json file with the latest inheritance'
    },
    'check': {
        'keypath': 'check',
        'type': 'boolean',
        'alias': 'c',
        'description': 'Check for differences in the package.json file'
    },
    'root': {
        'keypath': 'root',
        'alias': 'r',
        'default': `${process.cwd()}`,
        'description': 'Root directory to reference files from'
    },
    'recovery': {
        'keypath': 'recovery',
        'description': 'Custom recovery command to show developers when the check has failed'
    }
});

let command = (options.hasOwnProperty('update')) ? "update" : (options.hasOwnProperty('check')) ? "check" : '';
let root = path.resolve(options.root);

(async function () {
    switch (command) {
        case "update":
            await update(root)
            break;

        case "check":
            await check(root, options);
            break;

        default:
            console.log(`
                Usage: inherit -u | -c
                This utility will update package.json in a monorepo to inherit from another package.json template.
                Currently, only "scripts", "devDependencies", and "dependencies" are merged into the package.json
                Commands:
                -u | --update      updates the package.json for all packages in a monorepo to match inheritance
                -c | --check       checks all the package.json inheritance are consistent
                -r | --root        root directory to reference files from
                Options:
                --recovery  custom recovery command to show developers when the check has failed
            `);
            break;
    }
})();