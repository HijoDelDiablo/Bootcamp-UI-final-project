app.controller('twitterController',['$scope', 'twitterFactory',function ($scope, twitterFactory){
	$scope.tweets = {} ;

		var getTweets = function(b) {
			console.log("ajax is working");

			$scope.tweets = b.data;  //b contains factory's data

			

			/*var i = 0, Twlen = tweets.data.length;

			if(Twlen) {
				for (i; i < Twlen; i++) {
					console.log("tweet" + i + " = " + tweets.data[i].user.screen_name);
				};
			};*/

			//console.log(tweets);

			return $scope.tweets;
		};

		twitterFactory.goHome(getTweets); //Calling factory

}]);