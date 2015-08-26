angular.module('aboutus.route',[])
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/about-us', {
			templateUrl: 'modules/aboutus/views/aboutUs.html',
			controller: 'aboutUsCtrl',
			access: { requiredLogin: true }
		});
	}]);