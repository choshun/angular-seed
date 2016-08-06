import angular from 'angular';
import targetComponent from './target.component';
import targetService from './target.service';

let targetModule = angular.module('target', [])
.component('target', targetComponent)
.service('targetService', targetService);

export default targetModule;