## Angular ES6

> A starting point for building web applications with `AngularJS 1.5` using JSPM and ES6


### Install dependencies

#### For experienced users
```sh
  npm install jspm gulp -g && jspm install && npm install
```

#### Prerequisites

- Node.js, used to run jspm and gulp tools from command line.
- npm, installed with Node.js. Used to install development dependencies (Gulp).
- gulp, a build tool.
- jspm, a package manager for SystemJS.

**To install dependencies:**

1) Check Node.js version.

```sh
node --version
```

The version should be at or above 4.x.

2) If you don't have Node.js intalled.

3) Install `JSPM` and `gulp` globally.

```sh
npm install jspm gulp -g
```

This lets you run `jspm` and `gulp` from the command line.

4)  Install the local `jspm` and `npm` dependencies.

```sh
# cd to your project folder (default: angular-es6)
jspm install && npm install
```

This installs angular, ui-router and dependencies required for gulp tasks.

5) (Optional) Install a manager for TypeScript definitions `typings`.

You can use `typings` for intellisense (I use this in VScode).

```sh
npm install typings -g
# cd to your project folder
typings install
```

This create a typings folder which you can reference in your JavaScript files to get intellisense.


### Development workflow

**Live reload from source folder**

```sh
#cd to your project folder
gulp hot-reload:src
```

This create a server using [browser-sync](https://www.npmjs.com/package/browser-sync) and serves source and dev folder.

All files are served from source folder except style.css file. This file is served from dev folder after being compiled from SASS framework.

The browser reloads when any file change according to their respective task.

**Live reload from dev folder**

```sh
#cd to your project folder
gulp hot-reload:dev
```

This create a server using [browser-sync](https://www.npmjs.com/package/browser-sync) and serves dev folder.

This compile and move all files in dev folder and the browser reloads when any file change according to their respective task.

It is almost the same as production files but use sourcemaps in style.css and app.js is not minified.

> Believe it or not this workflow is faster than `hot-reload:src` when you try test in browsers that are not the local machine.

**Production**

```sh
#cd to your project folder
gulp
```

Put all in dist folder ready for production.

:warning: **Important**

Before run `hot-reload:dev` or `default` tasks be sure you fix this *[issue](https://github.com/nimedev/angular-es6/tree/master/resources/fix-jspm_bundle)*.


### Styling

This repository include a fork of **[Wakkos-CSS-Framework](https://github.com/Wakkos/Wakkos-CSS-Framework)**.

I recommend this framework for those who like to create their own styles.


### VSCode snippets

Put this snippets in javascript file:

*Module:*
```js
  "ng-es6 module": {
    "prefix": "ngmod-es6",
    "body": [
      "/**",
      " * Module for ${2:file-name} component.",
      " * @module ${1:name}",
      " */",
      "/** Angular modules */",
      "import angular from 'angular';",
      "",
      "/** Comunity modules */",
      "",
      "/** Submodules */",
      "",
      "/** Component & Directives */",
      "import component from './${2:file-name}.component';",
      "",
      "/** Services */",
      "",
      "// Constants",
      "const moduleName = '${1:name}';",
      "",
      "// Variables",
      "",
      "// Define module",
      "angular",
      "\t.module(moduleName, [])",
      "\t.config(['', () => {",
      "",
      "\t}])",
      "\t.component(component.name, component);",
      "",
      "/** @exports module name */",
      "export default moduleName;"
    ],
    "description": "Angular ES6 module"
  }
```

*Component:*
```js
  "ng-es6 component": {
    "prefix": "ngcomp-es6",
    "body": [
      "/** ${1:file-name} component. */",
      "// Template",
      "import template from './${1:file-name}.html!text';",
      "",
      "// Controller",
      "import controller from './${1:file-name}.controller';",
      "",
      "// Component object",
      "let component = {",
      "\tbindings: {},",
      "\tcontroller,",
      "\tname: '${2:name}',",
      "\ttemplate",
      "};",
      "",
      "/** @exports component object */",
      "export default component;"
    ],
    "description": "Angular ES6 component"
  }
```

*Controller:*
```js
  "ng-es6 Controller": {
    "prefix": "ngctrl-es6",
    "body": [
      "/**",
      " * Controller for ${1:description}.",
      " * @class ${2:ClassName}",
      " * @param {Object} ${3:paramName} - ...",
      " */",
      "/** @exports Controller class */",
      "export default class ${2:ClassName} {",
      "\t/*@ngInject*/",
      "\tconstructor(${3:paramName}) {",
      "\t\t// Save dependencies",
      "\t\tthis.${3:paramName} = ${3:paramName};",
      "",
      "\t\t/** Class Fields */",
      "\t}",
      "",
      "\t/** Class Methods */",
      "}",
      "",
      "// Injection array for minification compatibility",
      "${2:ClassName}.$inject = ['${3:paramName}'];"
    ],
    "description": "Angular NS6 controller"
  }
```

*Service:*
```js
  "ng-es6 Service": {
    "prefix": "ngserv-es6",
    "body": [
      "/**",
      " * Service to ${1:description}.",
      " * @name ${4:serviceName}",
      " * @class ${2:ClassName}",
      " * @param {Object} ${3:paramName} - ...",
      " */",
      "// Service name",
      "let serviceName = '${4:serviceName}';",
      "",
      "// Service class",
      "class ${2:ClassName} {",
      "\t/*@ngInject*/",
      "\tconstructor(${3:paramName}) {",
      "\t\t// Save dependencies",
      "\t\tthis.${3:paramName} = ${3:paramName};",
      "",
      "\t\t/** Class Fields */",
      "",
      "\t}",
      "",
      "\t/** Class Methods */",
      "}",
      "",
      "// Injection array for minification compatibility",
      "${2:ClassName}.$inject = ['${3:paramName}'];",
      "",
      "/** @exports service name and class */",
      "export default {",
      "\tname: serviceName,",
      "\tservice: ${2:ClassName}",
      "};"
    ],
    "description": "Angular NS6 service"
  }
```

*Directive:*
```js
  "ng-es6 Directive": {
    "prefix": "ngdire-es6",
    "body": [
      "/**",
      " * Directive to ${1:description}.",
      " * @name ${4:directiveName}",
      " * @class ${2:ClassName}",
      " * @param {Object} ${3:paramName} - ...",
      " */",
      "// Directive name",
      "let directiveName = '${4:directiveNamen}';",
      "",
      "// Directive class",
      "class ${2:ClassName} {",
      "\t/*@ngInject*/",
      "\tconstructor(${3:paramName}) {",
      "\t\t// Save dependencies",
      "\t\tthis.${3:paramName} = ${3:paramName};",
      "",
      "\t\t/** Class Fields */",
      "\t\tthis.restrict = 'A';",
      "\t\tthis.scope =  {};",
      "",
      "\t\t/** Link function */",
      "\t\tthis.link = (scope, el, attr, ctrl) => {",
      "",
      "\t\t};",
      "\t}",
      "",
      "\t/** Class Methods */",
      "",
      "\t/** Directive factory */",
      "\tstatic factory(${3:paramName}) {",
      "\t\t${2:ClassName}.instance = new ${2:ClassName}(${3:paramName});",
      "\t\treturn ${2:ClassName}.instance;",
      "\t}",
      "}",
      "",
      "// Injection array for minification compatibility",
      "${2:ClassName}.factory.$inject = ['${3:paramName}'];",
      "",
      "/** @exports directive name and class */",
      "export default {",
      "\tname: directiveName,",
      "\tdirective: ${2:ClassName}.factory",
      "};"
    ],
    "description": "Angular NS6 directive"
  }
```