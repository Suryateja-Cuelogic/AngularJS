angular.module('home.controller',[])
	.controller('homeCtrl', ['$scope', homeController]);

function homeController($scope) {
	$scope.message = "This is Home Screen";	
}