var myApp = angular.module('Controller', []);
console.log("Controller_1");
myApp.controller('ContactController', ['$scope', function($scope) {
    console.log("Controller_2");
	$scope.contacts = ["1 - A", "2 - B", "3 - C", "4 - D", "5 - E", "6 - E", "7 - E", "8 - E", "9 - F", "10 - G"];
}]);