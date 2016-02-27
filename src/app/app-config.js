/** 
 * app configuration.
 * Put in 'common' object all common parameters of the app.
 * Name a object with the host name of the enviroment and put 
 * all parameters for this environment.  
 */

/** @exports config object */
export default {
  // application name for angular
  appName: 'ng-es6',
  
  // Common configuration parameters
  common: {
    
  },
  
  // Production configuration
  'angular-es6.dev': {
    // server base url
    restUrl: 'http://www.site.com/api/v1'
  },
  
  // Development configuration
  'localhost': {
    // server base url
    restUrl: 'localhost:3000',

    // development mode
    dev: true
  }
};