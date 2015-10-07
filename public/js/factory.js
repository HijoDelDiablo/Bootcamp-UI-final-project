app.factory('twitterFactory', ['$http', function ($http){
	
	var goHome = function(response){
		$http({
			method: 'get',
			url: "http://localhost:3000/timeline?count=100"
		}).then(function successCallback(response){
			response(response);
			console.log("it works");
		}, function errorCallback(response){
			console.log("it doesn't work");
		});
	}

	return goHome;
}]);