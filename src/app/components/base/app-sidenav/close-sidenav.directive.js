/**
 * Directive to close sidenav when click in element.
 * @name closeSidenav
 * @param {Object} sideNav - ...
 */
// Directive name
const directiveName = 'closeSidenav'

// Directive Function
const directive = (sideNav) => {
  let directive = {
    link: link,
    restrict: 'A',
    scope: {}
  }
  return directive

  /////////////////
  /** Link function */
  function link(scope, element) {
    element.on('click', () => {
      sideNav.safeClose()
    })
  }
}

// Injection array for minification compatibility
directive.$inject = ['sideNav']

/** @exports directive name and class */
export default {
  name: directiveName,
  factory: directive
}