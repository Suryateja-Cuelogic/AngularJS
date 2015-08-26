angular.module('toc.controller',[])
	.controller('tocCtrl',['$scope', tocController]);

function tocController($scope) {
	$scope.message = "This is terms-and-conditions Screen";
}