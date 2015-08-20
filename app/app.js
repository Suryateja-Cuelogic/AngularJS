// Declare app level module which depends on views, and components
var app = angular.module('BlogApp', [ ]);

app.controller('HelloController', function() {
	this.data = "Hello World";
});
