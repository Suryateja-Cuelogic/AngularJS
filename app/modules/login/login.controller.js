angular.module('login.controller', ['login.service'])
	.controller('loginCtrl', ['$scope', '$localStorage', 'authService', loginController]);

function loginController($scope, $localStorage, authService) {
	$scope.checkLogin = function() {
		var loginData = {
			email : $scope.username,
			password : $scope.password
		};

		authService.authenticate(loginData);	
		
	};

	$scope.logout = function() {
		authService.logout();
	}

	$scope.token = $localStorage.token;
}