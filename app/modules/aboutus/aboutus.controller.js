angular.module('aboutus.controller',[])
	.controller('aboutUsCtrl', ['$scope', aboutUsController]);

function aboutUsController($scope) {
	$scope.message = "This is AboutUs Screen";
}