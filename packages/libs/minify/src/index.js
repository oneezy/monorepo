import { minify } from "terser";
import fs from "fs";
import path from "path";
import argv from "argv-to-object";
import rfdc from "rfdc";

// get files to be minified 
async function getFiles(options) {
    const dirs = (options.hasOwnProperty('dirs')) ? options.dirs.split(",") : [];

    // if options.files is not an array then split it into an array and combined with options.root otherwise return options.files if it is an array otherwise return an empty array
    if (options.hasOwnProperty("files")) {
        if (!Array.isArray(options.files)) {
            options.files = options.files.split(",");
            options.files = options.files.map(file => path.join(`${options.root}/fromRoot`, file));
        }
    } else {
        options.files = [];
    }

    // for each dir get the files to be minified
    dirs.forEach(dir => {
        // get all files in the dir
        const files = fs.readdirSync(dir);

        // for each file in files if is a directory call getFiles again with the new dirPath otherwise push to options.files
        files.forEach(file => {
            if (fs.statSync(`${dir}/${file}`).isDirectory()) {
                options.dirs = `${dir}/${file}`;
                getFiles(options);
            } else {
                options.files.push(`${options.root}/${dir}/${file}`);
            }
        });
    });

    return options.files.filter(path => path.match(/\.js$/));
}

async function minifyFiles(filePaths) {
    // remove output dir if it exists
    if (fs.existsSync(options.output)) {
        fs.rmSync(`${options.root}/${options.output}`, { recursive: true }, (err) => { if (err) throw err; });
        console.log(`Removed ${options.output}`);
    }

    // minify each file
    for (const filePath of filePaths) {
        try {
            console.log(`Minifying ${filePath}`);

            // clone options to prevent mutating the original
            const clone = rfdc();
            const _options = clone(options);

            // update the filePath
            let file = filePath.replace(/src|fromRoot/, options.output);

            // delete key from object where options key is dirs, files, root, output, or clean
            ['dirs', 'files', 'root', 'output', 'clean'].forEach(e => delete _options[e]);

            // minify the file
            let code = (await minify(fs.readFileSync(filePath.replace(/fromRoot\//, ""), "utf8"), _options)).code || "";

            // if there is minified code write it to the file in options.output
            if (code) {
                // if directory doesn't exist create it recursively
                if (!fs.existsSync(path.dirname(file))) {
                    console.log(`Creating directory ${path.dirname(file)}`);
                    fs.mkdirSync(path.dirname(file), { recursive: true });
                }

                // write file to options.output folder
                fs.writeFileSync(file, code);
                console.log('Minified file created successfully');
            }
        } catch (error) {
            console.error(`Error minifying file`, error.message);
        }
    };
}

// get the provided options from the command line as an object
let options = argv({
    'help': {
        'keypath': 'help',
        'type': 'boolean',
        'alias': 'h',
        'description': 'Print usage information'
    },
    'version': {
        'keypath': 'version',
        'type': 'boolean',
        'alias': 'V',
        'description': 'Print version number'
    },
    'files': {
        'keypath': 'files',
        'alias': 'f',
        'description': 'Files to minify'
    },
    'dirs': {
        'keypath': 'dirs',
        'alias': 'd',
        'description': 'Directories to minify'
    },
    'root': {
        'keypath': 'root',
        'alias': 'r',
        'default': `${process.cwd()}`,
        'description': 'Root directory to reference files from'
    },
    'parse': {
        'keypath': 'parse',
        'alias': 'p',
        'description': 'Specify the parse option'
    },
    'clean': {
        'keypath': 'clean',
        'type': 'boolean',
        'default': true,
        'description': 'Clean output directory'
    },
    'compress': {
        'keypath': 'compress',
        'alias': 'c',
        'description': 'Specify the compress option'
    },
    'mangle': {
        'keypath': 'mangle',
        'type': 'boolean',
        'default': true,
        'alias': 'm',
        'description': 'Specify the mangle option'
    },
    'mangle-props': {
        'keypath': 'mangle-props',
        'alias': 'M',
        'description': 'Specify the mangle-props option'
    },
    'format': {
        'keypath': 'format',
        'description': 'Specify the format option'
    },
    'output': {
        'keypath': 'output',
        'alias': 'o',
        'default': `dist`,
        'description': 'Specify the output location'
    },
    'comments': {
        'keypath': 'comments',
        'alias': 'C',
        'description': 'Specify the comments option'
    },
    'config-file': {
        'keypath': 'config-file',
        'description': 'Specify the config file'
    },
    'define': {
        'keypath': 'define',
        'description': 'Specify the global definitions'
    },
    'ecma': {
        'keypath': 'ecma',
        'type': 'integer',
        'default': 5,
        'description': 'Specify the ecma version'
    },
    'enclose': {
        'keypath': 'enclose',
        'alias': 'e',
        'description': 'Embed output in a function'
    },
    'ie8': {
        'keypath': 'ie8',
        'type': 'boolean',
        'default': false,
        'description': 'Support IE8'
    },
    'keep-classnames': {
        'keypath': 'keep_classnames',
        'type': 'boolean',
        'default': false,
        'description': 'Keep classnames'
    },
    'keep-fnames': {
        'keypath': 'keep_fnames',
        'type': 'boolean',
        'default': false,
        'description': 'Keep function names'
    },
    'module': {
        'keypath': 'module',
        'type': 'boolean',
        'default': false,
        'description': 'Specify the module as es6 input'
    },
    'name-cache': {
        'keypath': 'nameCache',
        'description': 'Specify the name cache for holding mangled names'
    },
    'safari10': {
        'keypath': 'safari10',
        'type': 'boolean',
        'default': false,
        'description': 'Support Safari 10'
    },
    'sourcemap': {
        'keypath': 'sourcemap',
        'description': 'Specify the sourcemap option'
    },
    'timings': {
        'keypath': 'timings',
        'description': 'Print timings'
    },
    'toplevel': {
        'keypath': 'toplevel',
        'type': 'boolean',
        'default': false,
        'description': 'Compress and/or mangle the top-level scope'
    },
    'wrap': {
        'keypath': 'wrap',
        'description': 'Wrap the output in a function'
    }
});

// get files to be minified or mangled
(async function () {
    let files = await getFiles(options);
    await minifyFiles(files);
})();