## Fix angular ^1.5.0-rc.2 JSPM bundle and bundle-sfx problem

### The problem

The browser console print:
```js
Uncaught (in promise) Error: t.module is not a function(…)
```
or
```js
Uncaught (in promise) Error: angular.module is not a function(…)
```
When use jspm bundle ... or jspm bundle-sfx command.
 
### Short way

Copy content of npm folder in jspm_packages folder.

### Manual way

1) Comment line 2 "format global" in jspm_packages/npm/angular@1.5.0/index.js file.

```js
/* */ 
// "format global";
require('./angular');
module.exports = angular;
```

2) Comment line 1 and replace by the new one in jspm_packages/npm/angular@1.5.0.js file.

```js
// module.exports = require("npm:angular@1.5.0/angular");
module.exports = require("npm:angular@1.5.0/index");
``` 