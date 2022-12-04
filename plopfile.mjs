/**
 * Plop JS
 * https://plopjs.com/documentation/
 */

 export default function (plop) {

  /* App
  ***********************************************************/
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
  ***********************************************************/
  plop.setGenerator("component", {
    description: "Create a new component",
    prompts: [
      { // Name your Component
        type: "input",
        name: "name",
        message: "What is the name of your component?"
      }
    ],
    actions: [
      { // Create the component and add to @components workspace
        type: "addMany",
        destination: "./packages/components/src/{{name}}",
        base: `.templates/component/template`,
        templateFiles: `.templates/component/template/**/*`
      },
      { // Export component 
        type: "append",
        path: "./packages/components/index.js",
        templateFile: ".templates/component/index.js.hbs"
      },
      { // Histoire: Create Component.story.svelte
        type: "addMany",
        destination: "./apps/+stories/src/{{name}}",
        base: `.templates/story/`,
        templateFiles: `.templates/story/**/*.hbs`
      }
    ],
  });


  /* Story
  ***********************************************************/
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
  ***********************************************************/
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


  /* Helper functions
  ***********************************************************/
  // lowerCaseNoSpace: convert "Awesome Text" to "awesometext"
  plop.setHelper("lowerCaseNoSpace", function (str) {
    return str.toLowerCase().replace(/\s/g, '');
  });

  plop.setHelper("createPortNumber", function () {
    return Math.floor(Math.random() * 1000) + 3000;
  });
}