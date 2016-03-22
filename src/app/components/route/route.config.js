/**
 * Config function to declare in config element of route module.
 * @module route.config
 * @param {Object} $locationProvider - to set url friendly.
 * @param {Object} $urlRouterProvider - to declare default path.
 * @param {Object} $uiViewScrollProvider - to use core $anchorScroll
 */
/** export config function for route module */
export default ['$locationProvider', '$urlRouterProvider', '$uiViewScrollProvider', ($locationProvider, $urlRouterProvider, $uiViewScrollProvider) => {
  // Redirect path to * urls
  $urlRouterProvider.otherwise('/')

  // Use the core $anchorScroll
  $uiViewScrollProvider.useAnchorScroll()

  // use the HTML5 History API
  $locationProvider.html5Mode(true)
}]