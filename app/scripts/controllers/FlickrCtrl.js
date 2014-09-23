'use strict';

var FlickrCtrl = function( $scope, $http ){
	$scope.flickr = 'this is a fourth test';

	$http.get("https://api.flickr.com/services/rest/?&method=flickr.people.getPublicPhotos&api_key=c607d2435746dc7c7cd10a562e0fcc81&user_id=118418195@N05&format=json&per_page=500").success(function(data) {
  		$scope.flickrPhotos = data;

//		console.log(data.photos.photo[0].id); //cannot read property 'photo' of undefined
//		console.log(data.photos[0].photo[0].id); //cannot read property '0' of undefined
//		console.log(data.photos[0].photo.id); //cannot read property '0' of undefined

//		console.log(data.photo[0].id); //cannot read property '0' of undefined
//		console.log(data.photos[0].id);////cannot read property '0' of undefined
//		console.log(data.photos.photo[0].id); //cannot read property 'photo' of undefined
  		
//		console.log(data.photos.photo.id[0]); //cannot read property 'photo' of undefined
//		console.log(data.photo.id[0]); //cannot read property 'id' of undefined
//		console.log(data.photos.id[0]);////cannot read property 'id' of undefined

//		console.log(jsonFlickrApi.photos.photo.id[0]); //jsonFlickrApi is not defined
//		console.log(jsonFlickrApi.photo.id[0]); //jsonFlickrApi is not defined
//		console.log(jsonFlickrApi.photos.id[0]);//jsonFlickrApi is not defined

//		console.log($scope.flickrPhotos.photos.photo.id[0]); //cannot read property 'photo' of undefined
//		console.log($scope.flickrPhotos.photo.id[0]); //cannot read property 'id' of undefined
//		console.log($scope.flickrPhotos.photos.id[0]);//cannot read property 'id' of undefined

//		console.log($scope.flickrPhotos.photos.photo[0].id); //cannot read property 'photo' of undefined
//		console.log($scope.flickrPhotos.photo[0].id); //cannot read property 'photo' of undefined
		console.log($scope.flickrPhotos.photos[0].id);//cannot read property '0' of undefined


		console.log($scope.flickrPhotos);
			});

};

module.exports = FlickrCtrl;




