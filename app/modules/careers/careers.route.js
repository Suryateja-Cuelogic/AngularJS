angular.module('careers.route', ['ngRoute'])
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/join-us', {
			templateUrl: 'modules/careers/views/careers.html',
			controller: 'careersCtrl',
			access: { requiredLogin: true }
		});
	}]);