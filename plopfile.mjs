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
      
      { // Create the component and add to @packages workspace
        type: "addMany",
        destination: "./packages/components/lib/{{properCase name}}",
        base: `.templates/component/`,
        templateFiles: `.templates/component/**/*.hbs`
      },
      { // Export component 
        type: "append",
        path: "./packages/components/index.js",
        templateFile: ".templates/component/index.js.hbs"
      },
      {
        // Vitebook: Create Component.story.svelte
        type: "addMany",
        destination: "./apps/vitebook/lib/{{properCase name}}",
        base: `.templates/component/`,
        templateFiles: `.templates/component/**/*.hbs`
      },
    ], 
  });
  

  /* Helper functions
  ***********************************************************/
  // lowerCaseNoSpace: convert "Awesome Text" to "awesometext"
  plop.setHelper("lowerCaseNoSpace", function(str) {
    return str.toLowerCase().replace(/\s/g, '');
  });
  
  plop.setHelper("createPortNumber", function() {
    return Math.floor(Math.random() * 1000) + 3000;
  });
}