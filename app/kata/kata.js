'use strict';

angular.module('kataSolution.kata', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/kata', {
    templateUrl: 'kata/kata.html',
    controller: 'KataCtrl'
  });
}])

.controller('KataCtrl', [function() {

}]);