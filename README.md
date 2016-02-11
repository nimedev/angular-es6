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

The version should be at or above 0.12.x.

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

This installs the angular, ui-router and dependencies required for gulp tasks.

5) (Optional) Install DefinitelyTyped `tsd`.

You can use `tsd` for intellisense (I use this in VScode).

```sh
npm install tsd -g
# cd to your project folder
tsd install
```

This create a typings folder with a tsd.d.ts file which you can reference in your JavaScript files to get intellisense.

### Development workflow

> Coming soon ...