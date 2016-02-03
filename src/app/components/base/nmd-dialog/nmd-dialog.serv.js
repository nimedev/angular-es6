/**
 * Service used to add a dialog component in html body.
 * @name nmdDialog
 * @class Dialog
 * @param {Object} $compile - to compile new dialog directive.
 * @param {Object} $rootScope - to compile new dialog directive.
 */
// Service name
let serviceName = 'nmdDialog';

// Service class
class Dialog {
  /*@ngInject*/
  constructor($compile, $rootScope) {
    // Save dependencies
    this.$compile = $compile;
    this.$rootScope = $rootScope;

    /** Class Fields */

  }

  /** Class Methods */
  /** 
   * Append a dialog at end of body and insert a component inside it.
   * @param {String} component - Name of component to insert in HTML format
   *                             (component-name) 
   */
  open(component) {
    let node = angular.element(document).find('body');
    let dialog = `<nmd-dialog nd-component="${component}" dialog-watcher></nmd-dialog>`;
    let scope = this.$rootScope.$new();
    
    // Compile dialog template and add to body
    node.append(this.$compile(dialog)(scope));
  }
}

// Injection array for minification compatibility
let inject = ['$compile', '$rootScope', Dialog];

/** @exports injection array with service class */
export default {
  name: serviceName,
  service: inject
};