angular.module('home.route', ['ngRoute'])
	.config(['$routeProvider',function($routeProvider) {
		$routeProvider.when('/home',{
				templateUrl: 'modules/home/views/home.html',
				controller: 'homeCtrl',
				access: { requiredLogin: true }
			});
	}]);