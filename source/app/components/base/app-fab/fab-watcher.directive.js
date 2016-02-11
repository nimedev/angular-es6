/**
 * Directive to watch toast events and positioning FAB button.
 * @name fabWatcher
 * @class FabWatcher
 * @param {Object} $rootScope - to catch toast events.
 * @param {Object} styles - to get CSS properties.
 */
// Directive name
let directiveName = 'fabWatcher';

// Directive class
class FabWatcher {
  /*@ngInject*/
  constructor($rootScope, styles) {
    // Save dependencies

    /** Class Fields */
    this.restrict = 'A';

    /** Link function */
    this.link = (scope, el, attr, ctrl) => {
      let component = el[0];
      
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
    };
  }

  /** Class Methods */

  /** Directive factory */
  static factory($rootScope, styles) {
    FabWatcher.instance = new FabWatcher($rootScope, styles);
    return FabWatcher.instance;
  }
}

// Injection array for minification compatibility
FabWatcher.factory.$inject = ['$rootScope', 'styles'];

/** @exports directive name and class */
export default {
  name: directiveName,
  directive: FabWatcher.factory
};