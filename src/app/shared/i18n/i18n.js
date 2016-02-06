/** 
 * Module for translations. 
 * Use angular-translate. 
 * @module i18n
 */
/** Angular modules */
import * as angular from 'angular';

/** Comunity modules */
import translate from 'angular-translate';
import handlerLog from 'angular-translate-handler-log';
import loaderStaticFiles from 'angular-translate-loader-static-files';
import storageCookie from 'angular-translate-storage-cookie';
import storageLocal from 'angular-translate-storage-local';

/** Others modules */
import defaultLanguage from 'assets/i18n/locale-en.json!';

// Constants
const moduleName = 'i18n';

// Define module.
angular
  .module(moduleName, ['pascalprecht.translate'])
  .config(['$translateProvider', ($translateProvider) => {
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
  }]);

/** @exports module name */
export default moduleName;