/** 
 * nmd-progress-linear component. 
 * @name nmdProgressLinear
 */

// Component name
const componentName = 'nmdProgressLinear'

// Template

// Controller

// Component object
const component = {
  bindings: {
    color: '@progressColor'
  },
  template: '<div class="progress__content" ng-class="$ctrl.color"></div>'
}

/** @exports component options */
export default {
  name: componentName,
  options: component
}