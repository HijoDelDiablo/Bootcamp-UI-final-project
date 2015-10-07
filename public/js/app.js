var app = angular.module('twitterApp',['ngRoute']);

app.config(function($routeProvider){
	
	$routeProvider.when('/', {
		controller: 'twitterController',
		templateUrl: 'views/timeline.html'
	})

	.otherwise({
      redirectTo: '/'
    });

});