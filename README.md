## Angular ES6

> A starting point for building web applications with `AngularJS 1.5` using JSPM and ES6


### Install dependencies

#### For experienced users
```sh
  npm install jspm gulp -g && npm install && jspm install
```

#### Prerequisites

- [Node.js](https://nodejs.org/en/download/), used to run jspm and gulp tools from command line.
- [npm](https://www.npmjs.com/), installed with Node.js. Used to install development dependencies (Gulp).
- [gulp](http://gulpjs.com/), a build tool.
- [jspm](http://jspm.io/), a package manager for SystemJS.

**To install dependencies:**

1) Check Node.js version.

```sh
node --version
```

The version should be at or above 4.x.

2) If you don't have Node.js intalled go to [nodejs](https://nodejs.org/en/download/) and install the appropiate version.

3) Install `JSPM` and `gulp` globally.

```sh
npm install jspm gulp -g
```

This lets you run `jspm` and `gulp` from the command line.

4)  Install the local `jspm` and `npm` dependencies.

```sh
# cd to your project folder (default: angular-es6)
npm install && jspm install
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
npm run dev-server:src
```

This create a server using [browser-sync](https://www.npmjs.com/package/browser-sync) and serves source and dev folder.

All files are served from source folder except style.css file. This file is served from dev folder after being compiled from SASS framework.

The browser reloads when any file change according to their respective task.

**Live reload from dev folder**

```sh
#cd to your project folder
npm run dev-server
```

This create a server using [browser-sync](https://www.npmjs.com/package/browser-sync) and serves dev folder.

This compile and move all files in dev folder and the browser reloads when any file change according to their respective task.

It is almost the same as production files but use sourcemaps for style.css and app.js.

> Believe it or not this workflow is faster than `dev-server:src` when you try test in browsers that are not the local machine.

**Production**

```sh
#cd to your project folder
npm run deploy
```

Put all in dist folder ready for production.


### Styling

This repository include a fork of **[Wakkos-CSS-Framework](https://github.com/Wakkos/Wakkos-CSS-Framework)**.

I recommend this framework for those who like to create their own styles.


### Angular HTML5 mode or pretty URLs

This mode is set by default. If use it consider this:

- All call related to links like `href="/link/to/anyware"`, `$location.path('/link/to');`, etc. result as a hit to server. Use it only for SEO porpuses.
- To avoid unnecesary hits to server (SPA) you can use `ui-sref="/link/to"` in html files or `$state` service in angular files.


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
      "import angular from 'angular'",
      "",
      "/** Comunity modules */",
      "",
      "/** Submodules */",
      "",
      "/** Component & Directives */",
      "import component from './${2:file-name}.component'",
      "",
      "/** Services */",
      "",
      "// Constants",
      "const moduleName = '${1:name}'",
      "",
      "// Variables",
      "",
      "// Define module",
      "angular",
      "\t.module(moduleName, [])",
      "\t.config(['', () => {",
      "",
      "\t}])",
      "\t.component(component.name, component)",
      "",
      "/** @exports module name */",
      "export default moduleName"
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
      "import template from './${1:file-name}.html!text'",
      "",
      "// Controller",
      "import controller from './${1:file-name}.controller'",
      "",
      "// Component object",
      "const component = {",
      "\tbindings: {},",
      "\tcontroller,",
      "\tname: '${2:name}',",
      "\ttemplate",
      "}",
      "",
      "/** @exports component object */",
      "export default component"
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
      "\t\tthis.${3:paramName} = ${3:paramName}",
      "",
      "\t\t/** Class Fields */",
      "",
      "\t}",
      "",
      "\t/** Class Methods */",
      "}",
      "",
      "// Injection array for minification compatibility",
      "${2:ClassName}.$inject = ['${3:paramName}']"
    ],
    "description": "Angular ES6 controller"
  }
```

*Service:*
```js
  "ng-es6 Service": {
    "prefix": "ngserv-es6",
    "body": [
      "/**",
      " * Service used to ${1:description}.",
      " * @name ${4:serviceName}",
      " * @class ${2:ClassName}",
      " * @param {Object} ${3:paramName} - ...",
      " */",
      "// Service name",
      "const serviceName = '${4:serviceName}'",
      "",
      "// Service class",
      "class ${2:ClassName} {",
      "\t/*@ngInject*/",
      "\tconstructor(${3:paramName}) {",
      "\t\t// Save dependencies",
      "\t\tthis.${3:paramName} = ${3:paramName}",
      "",
      "\t\t/** Class Fields */",
      "",
      "\t}",
      "",
      "\t/** Class Methods */",
      "}",
      "",
      "// Injection array for minification compatibility",
      "${2:ClassName}.$inject = ['${3:paramName}']",
      "",
      "/** @exports service name and class */",
      "export default {",
      "\tname: serviceName,",
      "\tservice: ${2:ClassName}",
      "}"
    ],
    "description": "Angular ES6 service"
  }
```

*Directive:*
```js
  "ng-es6 Directive": {
    "prefix": "ngdire-es6",
    "body": [
      "/**",
      " * Directive used to ${1:description}.",
      " * @name ${2:directiveName}",
      " * @param {Object} ${3:paramName} - ...",
      " */",
      "// Directive name",
      "const directiveName = '${2:directiveNamen}'",
      "",
      "// Directive Function",
      "const directive = (${3:paramName}) => {",
      "\tlet directive = {",
      "\t\tlink: link,",
      "\t\trestrict: 'A',",
      "\t\tscope: {}",
      "\t}",
      "\treturn directive",
      "",
      "\t/////////////////",
      "\t/** Link function */",
      "\tfunction link(scope, element, attrs) {",
      "\t\t",
      "\t}",
      "}",
      "",
      "// Injection array for minification compatibility",
      "directive.$inject = ['${3:paramName}']",
      "",
      "/** @exports directive name and function */",
      "export default {",
      "\tname: directiveName,",
      "\tdirective: directive",
      "}"
    ],
    "description": "Angular ES6 directive"
  }
```

*Factory*:
```js
  "ng-es6 Factory": {
    "prefix": "ngfact-es6",
    "body": [
      "/**",
      " * Factory used to ${1:description}.",
      " * @name ${2:FactoryName}",
      " * @param {Object} ${3:paramName} - ...",
      " */",
      "// Factory name",
      "const factoryName = '${2:FactoryNamen}'",
      "",
      "// Directive Function",
      "const factory = (${3:paramName}) => {",
      "\tlet service = {",
      "\t\texposedFn: exposedFn",
      "\t}",
      "\treturn service",
      "",
      "\t/////////////////",
      "\t/** Exposed function */",
      "\tfunction exposedFn() {",
      "\t\t",
      "\t}",
      "}",
      "",
      "// Injection array for minification compatibility",
      "factory.$inject = ['${3:paramName}']",
      "",
      "/** @exports factory name and function */",
      "export default {",
      "\tname: factoryName,",
      "\tfactory: factory",
      "}"
    ],
    "description": "Angular ES6 factory"
  }
```
