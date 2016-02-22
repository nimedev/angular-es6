/** 
 * app configuration.
 * Put in 'production' object all parameters of the app.
 * Put in 'development' object the parameters to be overwritten or add
 * in production object, like restUrl, dev, etc.  
 */

/** @exports config object */
export default {
  // application name for angular
  appName: 'ng-es6',
  
  // Host names to select production configuration
  productionHosts: [
    'angular-es6.dev'
  ],
  
  // Production configuration
  production: {
    // server base url
    restUrl: 'http://www.site.com/api/v1'
  },
  
  // Development configuration
  development: {
    // server base url
    restUrl: 'localhost:3000',

    // development mode
    dev: true
  }
};