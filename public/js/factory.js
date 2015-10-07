app.factory('twitterFactory', ['$http', function ($http){
	
	var goHome = function(cback){
		$http({
			method: 'get',
			url: "http://localhost:3000/timeline?count=40"
		}).then(function (response){
			cback(response);
			console.log("it works");
			console.log(response);
		}, function (response){
			console.log("it doesn't work");
		});
	}

	return {
		goHome: goHome
	};
}]);