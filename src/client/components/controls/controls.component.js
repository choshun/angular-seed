import template from './controls.html';
import controller from './controls.controller';

let newComponent = {
  restrict: 'E',
  scope: {},
  template: template,
  controller: controller,
  controllerAs: 'controls'
};

export default newComponent;