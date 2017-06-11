'use strict';

// Declare app level module which depends on views, and components
angular.module('kataSolution', [
  'ngRoute',
  'kataSolution.kata',
  'kataSolution.view2'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/kata'});
}]);
