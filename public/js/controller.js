app.controller('twitterController',['$scope', function ($scope){
	/*$scope.title = "Holi";*/
	twitterController.goHome(function (response){
		$scope.twts = response.data;

	});
}]);