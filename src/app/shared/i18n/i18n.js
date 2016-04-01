/** 
 * Module for translations. 
 * Use angular-translate. 
 * @module i18n
 */
/** Angular modules */
import angular from 'angular'

/** Comunity modules */
import translate from 'angular-translate'
import handlerLog from 'angular-translate-handler-log'
import loaderStaticFiles from 'angular-translate-loader-static-files'
import storageCookie from 'angular-translate-storage-cookie'
import storageLocal from 'angular-translate-storage-local'

/** Others modules */
import defaultLanguage from 'assets/i18n/locale-en.json!'

/** Component */

/** Services */
import i18n from './i18n.service'

// Variables

// Constants
const moduleName = 'i18n'

// Define module.
angular
  .module(moduleName, [
    translate,
    handlerLog,
    loaderStaticFiles,
    storageCookie,
    storageLocal
  ])
  .config(['$translateProvider', ($translateProvider) => {
    // angular-translate configuration
    $translateProvider.translations('en', defaultLanguage)
    $translateProvider.useStaticFilesLoader({
      prefix: 'assets/i18n/locale-',
      suffix: '.json'
    })
    $translateProvider.preferredLanguage('en')
    $translateProvider.fallbackLanguage('en')
    $translateProvider.useLocalStorage()
    $translateProvider.useSanitizeValueStrategy('escape')
    $translateProvider.useMissingTranslationHandlerLog()
  }])
  .run(['$rootScope', 'i18n', ($rootScope, i18n) => {
    i18n.load()
    $rootScope.$on('$translateChangeSuccess', () => i18n.loadAndNotify())
  }])
  .service(i18n.name, i18n.constructor)

/** @exports module name */
export default moduleName