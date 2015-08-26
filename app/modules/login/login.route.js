angular.module('login.route', ['ngRoute'])
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/login', {
			templateUrl: 'modules/login/views/login.html',
			controller: 'loginCtrl',
			access: { requiredLogin: false }
		});
	}]);