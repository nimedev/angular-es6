/**
 * Service used to add a dialog component in html body.
 * @name nmdDialog
 * @class Dialog
 * @param {Object} $compile - to compile new dialog directive.
 * @param {Object} $rootScope - to create new scope for compiled component.
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
   * Remove a dialog component acording to nd-component attribute.
   * @param {String} component - Used to select the dialog to remove.
   */
  close(component) {
    let dialog = angular.element(document.querySelector(`nmd-dialog[nd-component=${component}]`));
    
    // remove component from scope
    dialog.scope().$destroy();
    
    // remove component from DOM
    dialog.remove();
  }
  
  /** 
   * Append a dialog at end of body and insert a component inside it.
   * @param {String} component - Name of component to insert in HTML format
   *                             (component-name) 
   */
  open(component) {
    let node = angular.element(document).find('body');
    let newDialog = `<nmd-dialog nd-component="${component}" dialog-watcher></nmd-dialog>`;
    let oldDialog = document.querySelector(`nmd-dialog[nd-component=${component}]`);
    let scope;
    
    // Create new dialog if is no there a dialog with de same nd-component attribute
    if (!oldDialog) {
      // Create new isolate scope
      scope = this.$rootScope.$new(true);
    
      // Compile dialog template and add to body
      node.append(this.$compile(newDialog)(scope));
    }
  }
}

// Injection array for minification compatibility
let inject = ['$compile', '$rootScope', Dialog];

/** @exports injection array with service class */
export default {
  name: serviceName,
  service: inject
};