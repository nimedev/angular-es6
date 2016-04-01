/**
 * Module for shared services.
 * @module services
 */
/** Angular modules */
import angular from 'angular'

/** Comunity modules */

/** Submodules */
import styles from './styles.service'

/** Component or Directive */

/** Services */

// Constants
const moduleName = 'services'

// Variables

// Define module
angular
  .module(moduleName, [])
  .service(styles.name, styles.constructor)

/** @exports module name */
export default moduleName