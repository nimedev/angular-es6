/**
 * Module for nmd-components component.
 * @module nmdComponents
 */
/** Angular modules */
import * as angular from 'angular';

/** Comunity modules */

/** Submodules */
import nmdDialog from './nmd-dialog/nmd-dialog';
import nmdToast from './nmd-toast/nmd-toast';

/** Component or Directive */

/** Services */

// Constants
const moduleName = 'nmdComponents';

// Variables

// Define module
angular
  .module(moduleName, [
    nmdDialog,
    nmdToast
  ]);

/** @exports module name */
export default moduleName;