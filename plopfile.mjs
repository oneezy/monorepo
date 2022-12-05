/**
 * Plop JS
 * https://plopjs.com/documentation/
 */


 export default function (plop) {

  /* App
  ▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃ */
  plop.setGenerator("app", {
    description: "create new app",
    prompts: [
      { // Name your app
        type: "input",
        name: "name",
        message: "What is the name of your app?"
      }
    ],
    actions: [
      { // Create the app and add to @apps workspace
        type: "addMany",
        destination: "./apps/{{name}}",
        base: `.templates/app`,
        templateFiles: `.templates/app/**/*`
      },
      { // Create the app $alias for svelte.config.js
        type: "append",
        path: "./packages/config/dist/svelte.config.js",
        pattern: /\(plop added\)/g,
        templateFile: ".templates/svelte.config.js.hbs"
      },
      { // Add app to symlink function
        type: "append",
        path: "./.sh/symlinks.sh",
        pattern: /# create symlinks/g,
        templateFile: ".templates/symlinks.sh.hbs"
      }
    ]
  })


  /* Component
  ▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃ */
  plop.setGenerator("component", {
    description: "create new component",

    prompts: [
      { // Name
        type: "input",
        name: "name",
        message: "What's the name of your component?"
      },
      
      { // Type
        type: 'list',
        name: 'component',
        message: 'What type of component?',
        choices: ['Atom', 'Molecule', 'Organism', 'Template', 'Page', 'Particle' ]
      }
    ],

    actions: [
      { // create component
        type: "addMany",
        destination: "./packages/components/src/components/{{name}}",
        base: `.templates/component/template`,
        templateFiles: `.templates/component/template/**/*`
      },
      { // export component
        type: "append",
        path: "./packages/components/index.js",
        pattern: /\/\* components \*\//i,
        templateFile: ".templates/component/index.js.hbs"
      },
      { // create story
        type: "addMany",
        destination: "./apps/+stories/src/{{name}}",
        base: `.templates/story/`,
        templateFiles: `.templates/story/**/*.hbs`
      }
    ],
  });

  
  /* Store
  ▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃ */
  plop.setGenerator("store", {
    description: "create new store",

    prompts: [
      { // Name
        type: "input",
        name: "name",
        message: "What's the name of your store?"
      },
    ],

    actions: [
      { // create store
        type: "addMany",
        destination: "./packages/components/src/stores",
        base: `.templates/store/template`,
        templateFiles: `.templates/store/template/**/*`
      },
      { // export store
        type: "append",
        path: "./packages/components/index.js",
        pattern: /\/\* stores \*\//i,
        templateFile: ".templates/store/index.js.hbs"
      }
    ],
  });


  /* Action
  ▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃ */
  plop.setGenerator("action", {
    description: "create new action",

    prompts: [
      { // Name
        type: "input",
        name: "name",
        message: "What's the name of your action?"
      },
    ],

    actions: [
      { // create action
        type: "addMany",
        destination: "./packages/components/src/actions",
        base: `.templates/action/template`,
        templateFiles: `.templates/action/template/**/*`
      },
      { // export action
        type: "append",
        path: "./packages/components/index.js",
        pattern: /\/\* actions \*\//i,
        templateFile: ".templates/action/index.js.hbs"
      }
    ],
  });


  /* Story
  ▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃ */
  plop.setGenerator("story", {
    description: "create new story",

    prompts: [
      { // Name story
        type: "input",
        name: "name",
        message: "What is the name of your story?"
      }
    ],

    actions: [
      { // Create story
        type: "addMany",
        destination: "./apps/+stories/src/{{name}}",
        base: `.templates/story/`,
        templateFiles: `.templates/story/**/*.hbs`
      }
    ],
  });


  /* CI 
  ▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃ */
  plop.setGenerator("ci", {
    description: "create new CI",
    prompts: [
      { // Name your CI
        type: "input",
        name: "name",
        message: "What is the name of the app?"
      }
    ],
    actions: [
      { // Add CI templates
        type: "addMany",
        destination: "./apps/{{name}}/",
        base: `.templates/ci/`,
        templateFiles: `.templates/ci/**/*.hbs`
      },
      { // Add to the "include" inside the root .gitlab-ci.yml file
        type: "append",
        path: "./.gitlab-ci.yml",
        pattern: /include\:/g,
        templateFile: ".templates/.gitlab-ci.yml.hbs"
      }
    ],
  });









  
  /* Helpers
  ▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃ */
  plop.setHelper("lowerCaseNoSpace", function (str) {
    return str.toLowerCase().replace(/\s/g, '');
  });

  plop.setHelper("createPortNumber", function () {
    return Math.floor(Math.random() * 1000) + 3000;
  });
}