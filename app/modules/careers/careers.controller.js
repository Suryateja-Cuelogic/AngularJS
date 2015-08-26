angular.module('careers.controller', [])
	.controller('careersCtrl', ['$scope', careersController]);

function careersController($scope) {
	$scope.message = "This is Careers Screen";
}