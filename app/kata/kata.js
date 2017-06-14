angular.module('kataSolution.kata', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/kata', {
    templateUrl: 'kata/kata.html',
    controller: 'KataCtrl'
  });
}])

// .controller('KataCtrl', [function($scope, $http) {
//   console.log($scope); //test scope of Kata Ctrl JB
//   $http.get('../fixtures/order.json')
//     .then(function(response) {
//       $scope.orderData = response.data;
//   })

.controller('KataCtrl', ['$scope', '$http', function ($scope, $http) {
    $http.get('fixtures/order.json')
        .success(function(data) {
          $scope.orders = data;
          alert(data.element);
        })
        .error(function(data) {
          // log error
          alert('error');
    });
}]);

