angular.module('kataSolution.kata', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/kata', {
    templateUrl: 'kata/kata.html',
    controller: 'KataCtrl'
  });
}])

.controller('KataCtrl', ['$scope', '$http', function($scope, $http) {
  console.log($scope); //test scope of Kata Ctrl JB
  $http.get('fixtures/order.json')
       .then(function(res){
          $scope.order = res.data;    
          console.log('jess');
        });
}]);