app.controller('twitterController',['$scope', 'twitterFactory', '$http',function ($scope, twitterFactory, $http){

		var getTweets = function(b) {
			console.log("ajax is working");
			var tweets = [],

			/*$http.get('http://localhost:3000/timeline', function(data) {
			params = {
				count: 10
			};*/

			tweets = b;
			var i = 0, Twlen = tweets.data.length;

			if(Twlen) {
				for (i; i < Twlen; i++) {
					console.log("tweet" + i + " = " + tweets.data[i].user.screen_name);
				};
			};

			console.log(tweets)
			return tweets;
		};
		twitterFactory.goHome(getTweets);
		

	/*var call = function(b) {
		console.log("ajax work");
		console.log(b);
		return b;
	};

	twitterFactory.goHome(call);*/
}]);