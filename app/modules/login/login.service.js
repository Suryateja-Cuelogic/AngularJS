angular.module('login.service',[])
	.service('authService', ['$http', '$localStorage', authenticationService]);

function authenticationService($http, $localStorage) {

	this.authenticate = function(loginData) {
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
	}

	this.logout = function() {
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
}