import angular from 'angular';
import AppComponent from './app.component.js';
import Components from './components/components';
import './global.scss';

// angular.module('myApp', [])

angular.module('myApp', [
  Components.name
])
.directive('app', AppComponent);