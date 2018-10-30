import 'babel-polyfill';

import angular from 'angular';
import 'angular-sanitize';
import 'angular-material';
import 'angular-messages';
import 'angular-aria';
import 'angular-sanitize';
import 'angular-animate';

import './scss/index.scss';
import 'angular-material/angular-material.css';

var MyApp = angular
  .module('MyApp', ['ngMaterial', 'ngMessages', 'ngSanitize'])

MyApp.controller('DemoCtrl', DemoCtrl);
DemoCtrl.$inject = ['$scope'];
function DemoCtrl($scope) {
  
  $scope.helloWorld = "Hello World!";

}