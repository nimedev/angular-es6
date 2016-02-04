/**
 * Service to control nmd-toast component.
 * @name nmdToast
 * @class NmdToast
 * @param {Object} $compile - to compile new dialog directive.
 * @param {Object} $rootScope - to create new scope for compiled component.
 */
// Service name
let serviceName = 'nmdToast';

// Service class
class NmdToast {
  /*@ngInject*/
  constructor($compile, $rootScope) {
    // Save dependencies
    this.$compile = $compile;
    this.$rootScope = $rootScope;

    /** Class Fields */

  }

  /** Class Methods */
}

// Injection array for minification compatibility
let inject = ['$compile', '$rootScope', NmdToast];

/** @exports injection array with service class */
export default {
  name: serviceName,
  service: inject
};