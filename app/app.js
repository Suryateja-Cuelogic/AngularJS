// Declare app level module which depends on views, and components
var app = angular.module('BlogApp', ['ngRoute', 'ngStorage']);

app.config(['$locationProvider', '$routeProvider', function($location, $routeProvider) {
	$routeProvider.
		when('/home', {
			templateUrl: 'home/index.html',
			controller: 'HomeController',
			access: { requiredLogin: true }
		}).
		when('/about-us', {
			templateUrl: 'aboutus/index.html',
			controller: 'AboutUsController',
			access: { requiredLogin: true }
		}).
		when('/join-us', {
			templateUrl: 'careers/index.html',
			controller: 'CareersController',
			access: { requiredLogin: true }
		}).
		when('/cuelogic/clients', {
			templateUrl: 'clients/index.html',
			controller: 'ClientsController',
			access: { requiredLogin: true }
		}).
		when('/terms-and-conditions', {
			templateUrl: 'toc/index.html',
			controller: 'TocController',
			access: { requiredLogin: true }
		}).
		when('/login',{
			templateUrl: 'login/index.html',
			controller: 'LoginController',
			access: { requiredLogin: false }
		}).
		otherwise({
			redirectTo: '/home'
		});
}]);

app.run(function($rootScope, $location, $localStorage) {
	$rootScope.$on("$routeChangeStart", function(event, nextRoute, currentRoute) {
        if (nextRoute.access.requiredLogin && !$localStorage.token) {
            $location.path("/login");
        }
    });
});

app.controller('HomeController',['$scope', '$http', '$localStorage', function($scope, $http, $localStorage) {
	$scope.token = $localStorage.token;
	$scope.message = "This is Home Screen";
	$scope.logout = function() {
		$http.get('http://localhost:2001/logout', {
			    headers: {'Authorization': 'Bearer '+$localStorage.token }
			}).
			success(function(data) {
				delete $localStorage.token;
				window.location = "/app/";  
			}).	
			error(function(data) {
				if (data.statusCode === 403) {
					$scope.errorMessage = data.message;
				}
			});
	}
}]).
controller('AboutUsController',['$scope', function($scope) {
	$scope.message = "This is AboutUs Screen";
}]).
controller('CareersController',['$scope', function($scope) {
	$scope.message = "This is Careers Screen";
}]).
controller('ClientsController',['$scope', function($scope) {
	$scope.message = "This is Clients Screen";
}]).
controller('TocController',['$scope', function($scope) {
	$scope.message = "This is terms-and-conditions Screen";
}]).controller('LoginController',['$scope', '$http', '$localStorage', function($scope, $http, $localStorage) {
	$scope.checkLogin = function() {
		var loginData = {
			email : $scope.username,
			password : $scope.password
		};
		
		$http.post('http://localhost:2001/login',loginData).
			success(function(data) {
				$localStorage.token = data.token;
				window.location = "/app/";  
			}).	
			error(function(data) {
				if (data.statusCode === 403) {
					$scope.errorMessage = data.message;
				}
			});
	};
}]);