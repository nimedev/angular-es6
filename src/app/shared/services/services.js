/**
 * Module for services component.
 * @module services
 */
/** Angular modules */
import * as angular from 'angular';

/** Comunity modules */

/** Submodules */
import styles from './styles.service'; 

/** Component or Directive */

/** Services */

// Constants
const moduleName = 'services';

// Variables

// Define module
angular
  .module(moduleName, [])
  .service(styles.name, styles.service);

/** @exports module name */
export default moduleName;