/**
 * Plop JS
 * https://plopjs.com/documentation/
 */

export default function (plop) {
  
  // create your generators here
  plop.setGenerator("component", {
    description: "Create a new component",
    
    prompts: [ // array of prompts
      {
        type: "input",
        name: "name",
        message: "What is the name of the component?"
      }
    ], 
    actions: [ // array of actions
      {
        type: "add",
        path: "packages/ui/components/{{properCase name}}/{{properCase name}}.svelte",
        templateFile: ".templates/component.svelte.hbs"
      },
      {
        type: "append",
        path: "packages/ui/index.js",
        templateFile: ".templates/index.js.hbs"
      }
    ], 
  });
  
  // lowerCaseNoSpace: convert "Awesome Text" to "awesometext"
  plop.setHelper("lowerCaseNoSpace", function(str) {
    return str.toLowerCase().replace(/\s/g, '');
  });

}