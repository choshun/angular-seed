import template from './target.html';
import controller from './target.controller';

let targetComponent = {
  restrict: 'E',
  template,
  controller,
  controllerAs: 'targetCtrl',
  bindings: {
    data: '<'
  }
};

export default targetComponent;