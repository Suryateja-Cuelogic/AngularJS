// Declare app level module which depends on views, and components
var app = angular.module('BlogApp', ['ngRoute']);

app.config(['$routeProvider',function($routeProvider) {
	$routeProvider.
		when('/home', {
			templateUrl: 'home/index.html',
			controller: 'HomeController'
		}).
		when('/about-us', {
			templateUrl: 'aboutus/index.html',
			controller: 'AboutUsController'
		}).
		when('/join-us', {
			templateUrl: 'careers/index.html',
			controller: 'CareersController'
		}).
		when('/cuelogic/clients', {
			templateUrl: 'clients/index.html',
			controller: 'ClientsController'
		}).
		when('/terms-and-conditions', {
			templateUrl: 'toc/index.html',
			controller: 'TocController'
		}).
		otherwise({
			redirectTo: '/home'
		});
}]);

app.controller('HomeController',['$scope', function($scope) {
	$scope.message = "This is Home Screen";
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
}]);