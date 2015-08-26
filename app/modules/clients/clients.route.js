angular.module('clients.route', ['ngRoute'])
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/cuelogic/clients', {
			templateUrl: 'modules/clients/views/clients.html',
			controller: 'clientsCtrl',
			access: { requiredLogin: true }
		});
	}]);