/** 
 * Module for translations. 
 * Use angular-translate. 
 * @module i18n
 */
/** Angular modules */
import * as angular from 'angular';

/** Comunity modules */
import * as translate from 'angular-translate';
import * as handlerLog from 'angular-translate-handler-log';
import * as loaderStaticFiles from 'angular-translate-loader-static-files';
import * as storageCookie from 'angular-translate-storage-cookie';
import * as storageLocal from 'angular-translate-storage-local';

/** Others modules */
import defaultLanguage from 'assets/i18n/locale-en.json!';

// Constants
const moduleName = 'i18n';

// Variables
let config;

// Config function
config = ($translateProvider) => {
  // angular-translate configuration
  $translateProvider.translations('en', defaultLanguage);
  $translateProvider.useStaticFilesLoader({
    prefix: 'assets/i18n/locale-',
    suffix: '.json'
  });
  $translateProvider.preferredLanguage('en');
  $translateProvider.fallbackLanguage('en');
  $translateProvider.useLocalStorage();
  $translateProvider.useSanitizeValueStrategy('escape');
  $translateProvider.useMissingTranslationHandlerLog();
};
config.$inject = ['$translateProvider'];

// Define module.
angular
  .module(moduleName, ['pascalprecht.translate'])
  .config(config);

/** @exports module name */
export default moduleName;