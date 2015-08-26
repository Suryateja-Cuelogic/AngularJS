// Declare app level module which depends on views, and components
angular.module('app', ['ngRoute', 'ngStorage', 'home', 'aboutUs', 'careers', 'clients', 'toc', 'login'])
	.config(['$locationProvider', '$routeProvider', function($location, $routeProvider) {
		$routeProvider.otherwise({
				redirectTo: '/home'
			});
	}])
	.run(function($rootScope, $location, $localStorage) {
		$rootScope.$on("$routeChangeStart", function(event, nextRoute, currentRoute) {
	        if (nextRoute.access.requiredLogin && !$localStorage.token) {
	            $location.path("/login");
	        }
	    });
	});
