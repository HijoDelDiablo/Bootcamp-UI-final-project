app.controller('twitterController',['$scope', 'twitterFactory',function ($scope, twitterFactory){
	/*$scope.title = "Holi";*/
	var tweets = function() {
		/*$scope.loading = true;
		twitterFactory.query({
			url: 'http://localhost:3000/timeline',},
			function(data){
				$scope.loading = false;
			});
		});*/
	};

	var call = function(b) {
		console.log("ajax done");
		console.log(b);
		return b;
	};

	twitterFactory.goHome(call);
}]);