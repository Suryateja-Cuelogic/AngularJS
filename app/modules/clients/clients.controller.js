angular.module('clients.controller', [])
	.controller('clientsCtrl',['$scope',clientsController]);

function clientsController($scope) {
	$scope.message = "This is Clients Screen";
}