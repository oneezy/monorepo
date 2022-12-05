/**
 * Plop JS
 * https://plopjs.com/documentation/
 */


 export default function (plop) {

  /* App
  ▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃ */
  plop.setGenerator("app", {
    description: "create a new app",
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
    description: "Create a new component",

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
        choices: ['Component', 'Action', 'Store']
      }
    ],

    actions: function(data) {
      let actions = [];

      /* Component Type */
      switch (data.component) {
        case 'Component':
          // create component
          actions.push({
            type: "addMany",
            destination: "./packages/components/src/{{name}}",
            base: `.templates/component/template`,
            templateFiles: `.templates/component/template/**/*`
          });
          // export component
          actions.push({
            type: "append",
            path: "./packages/components/index.js",
            pattern: /\/\* components \*\//i,
            templateFile: ".templates/component/index.js.hbs"
          });
          // create story
          actions.push({
            type: "addMany",
            destination: "./apps/+stories/src/{{name}}",
            base: `.templates/story/`,
            templateFiles: `.templates/story/**/*.hbs`
          });
          break;

        case 'Store':
          // create store
          actions.push({
            type: "addMany",
            destination: "./packages/components/src/stores/{{name}}",
            base: `.templates/store/template`,
            templateFiles: `.templates/store/template/**/*`
          });
          // export store
          actions.push({
            type: "append",
            path: "./packages/components/index.js",
            pattern: /\/\* stores \*\//i,
            templateFile: ".templates/store/index.js.hbs"
          });
          break;

        case 'Action':
          // create action
          actions.push({
            type: "addMany",
            destination: "./packages/components/src/actions/{{name}}",
            base: `.templates/action/template`,
            templateFiles: `.templates/action/template/**/*`
          });
          // export action
          actions.push({
            type: "append",
            path: "./packages/components/index.js",
            pattern: /\/\* actions \*\//i,
            templateFile: ".templates/action/index.js.hbs"
          });
          break;

        default:
          // create component
          actions.push({
            type: "addMany",
            destination: "./packages/components/src/{{name}}",
            base: `.templates/component/template`,
            templateFiles: `.templates/component/template/**/*`
          });
          // export component
          actions.push({
            type: "append",
            path: "./packages/components/index.js",
            pattern: /\/\* components \*\//i,
            templateFile: ".templates/component/index.js.hbs"
          });
          // create story
          actions.push({
            type: "addMany",
            destination: "./apps/+stories/src/{{name}}",
            base: `.templates/story/`,
            templateFiles: `.templates/story/**/*.hbs`
          });
      }

      return actions;
      
    },
  });


  /* Story
  ▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃ */
  plop.setGenerator("story", {
    description: "Create a new story",
    prompts: [
      { // Name your story
        type: "input",
        name: "name",
        message: "What is the name of your story?"
      }
    ],
    actions: [
      { // Histoire: Create Component.story.svelte
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
    description: "Create a new CI",
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