import angular from 'angular';
import Controls from './controls/controls';
import Target from './target/target';

export default angular.module('app.components', [
	Controls.name,
	Target.name
]);