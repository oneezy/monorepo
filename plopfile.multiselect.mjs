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
            destination: "./packages/components/src/stores",
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
            destination: "./packages/components/src/actions",
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