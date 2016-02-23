/**
 * Directive to watch toast events and positioning FAB button..
 * @name fabWatcher
 * @param {Object} $rootScope - to catch toast events.
 * @param {Object} styles - to get CSS properties.
 */
// Directive name
const directiveName = 'fabWatcher';

// Directive Function
const directive = ($rootScope, styles) => {
  let directive = {
    link: link,
    restrict: 'A'
  };
  return directive;

  /////////////////
  /** Link function */
  function link(scope, element, attrs, ctrl) {
    let component = element[0];
      
      // Action when toast is shown
      $rootScope.$on('toastShown', ($event, element) => {
        // Move Element from bottom.
        let fontSize = styles.getRootFontSize();
        let toast = element[0];
        let bottom = toast.clientHeight / fontSize + 1;
        component.style.bottom = bottom + 'rem';
      });
      
      // Action when toast is start hide
      $rootScope.$on('toastHide', ($event, element) => {
        component.style['bottom'] = '';
      });
  }
};

// Injection array for minification compatibility
directive.$inject = ['$rootScope', 'styles'];

/** @exports directive name and class */
export default {
  name: directiveName,
  directive: directive
};