angular.module('toc.route', ['ngRoute'])
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/terms-and-conditions', {
			templateUrl: 'modules/toc/views/toc.html',
			controller: 'tocCtrl',
			access: { requiredLogin: true }
		});
	}]);