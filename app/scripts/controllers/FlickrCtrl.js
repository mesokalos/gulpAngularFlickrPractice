'use strict';

var FlickrCtrl = function( $scope, $http ){
	$scope.flickr = 'this is a fourth test';

	$http.get("https://api.flickr.com/services/rest/?&method=flickr.people.getPublicPhotos&api_key=c607d2435746dc7c7cd10a562e0fcc81&user_id=118418195@N05&format=json&per_page=500").success(function(data) {
  		$scope.flickrPhotos = data;
  		console.log($scope.flickrPhotos);
  		console.log(data.photos.photo.id[2]);
	});

};

module.exports = FlickrCtrl;




