import angular from 'angular';
import controlsComponent from './controls.component';
// import controlsService from './controls.service';

let githubModule = angular.module('controls', [])

.component('controls', controlsComponent);
// .service('controlsService', controlsService);

export default githubModule;