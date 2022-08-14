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
      {
        type: "input",
        name: "name",
        message: "What is the name of your app?"
      }
    ],
    actions: [
      {
        type: "addMany",
        destination: "./apps/{{name}}",
        base: `.templates/app`,
        templateFiles: `.templates/app/**/*`
      },
      {
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
      {
        type: "input",
        name: "name",
        message: "What is the name of your component?"
      }
    ], 
    actions: [ 
      {
        type: "addMany",
        destination: "./packages/components/lib/{{properCase name}}",
        base: `.templates/component/`,
        templateFiles: `.templates/component/**/*.hbs`
      },
      {
        type: "append",
        path: "./packages/components/index.js",
        templateFile: ".templates/component/index.js.hbs"
      }
    ], 
  });
  

  /* Helper functions
  ***********************************************************/
  // lowerCaseNoSpace: convert "Awesome Text" to "awesometext"
  plop.setHelper("lowerCaseNoSpace", function(str) {
    return str.toLowerCase().replace(/\s/g, '');
  });
  
  plop.setHelper("createDevPortNumber", function() {
    return Math.floor(Math.random() * 1000) + 4000;
  });
  
  plop.setHelper("createProdPortNumber", function() {
    return Math.floor(Math.random() * 1000) + 5000;
  });
}