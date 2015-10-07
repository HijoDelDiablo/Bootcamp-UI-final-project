app.controller('twitterController',['$scope', 'twitterFactory',function ($scope, twitterFactory){
	/*$scope.title = "Holi";*/
	twitterFactory.goHome(function (response){
		$scope.twts = response.data;

	});
}]);