/** nmd-progress-linear component. */
// Template

// Controller

// Component object
let component = {
  bindings: {
    color: '@progressColor'
  },
  name: 'nmdProgressLinear',
  template: '<div class="progress__content" ng-class="$ctrl.color"></div>'
};

/** @exports component object */
export default component;