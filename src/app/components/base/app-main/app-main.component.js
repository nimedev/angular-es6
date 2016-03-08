/** app-main component. */
// Template

// Controller
import controller from './app-main.controller.js'

// Component object
const component = {
  controller,
  name: 'appMain',
  template: '<main ng-class="[$ctrl.headerNav.cssClass, $ctrl.sideNav.cssClass]" ui-view="app-content"></main>'
}

/** @exports component object */
export default component