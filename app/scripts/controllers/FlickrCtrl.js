'use strict';

var FlickrCtrl = function( $scope, $http ){
	$scope.flickr = 'this is a fourth test';
	var apiUrl = "https://api.flickr.com/services/rest/";
	var flickrPublicPhotos = "?&method=flickr.people.getPublicPhotos";
	var apiKey = "&api_key=c607d2435746dc7c7cd10a562e0fcc81&user_id=118418195@N05";
	var extras = "&extras=description,license,date_upload,date_taken,owner_name,icon_server,original_format,last_update,geo,tags,machine_tags,o_dims,views,media,path_alias,url_sq,url_t,url_s,url_q,url_m,url_n,url_z,url_c,url_l,url_o"
	$http.get(
		apiUrl + flickrPublicPhotos + apiKey + "&format=json&per_page=500" + "&nojsoncallback=1" +extras).success(function(data) {
  		$scope.flickrPhotos = data;
  		$scope.allPhotos = data.photos.photo;

  		console.log(allPhotos);


		$scope.randomSort = function(allPhotos) {
		  return Math.random();
		};
  		// console.log(data);

//  	var photo1 = photos.photo[0].id;//Reference error: photos is not defined
//  	var photo1 = data.photos[photo][0].id; //ReferenceError: photo is not defined
// 		var photo1 = data.photos[photo][0].id; //ReferenceError: photo is not defined
 		var photo1 = $scope.flickrPhotos.photos.photo[0]; //TypeError: Cannot read property 'photo' of undefined
 		var allPhotos = $scope.flickrPhotos.photos.photo;
 		console.log(photo1.id);
 		console.log(allPhotos);

//		console.log(data.photos.photo[0].id); //TypeError: cannot read property 'photo' of undefined
//		console.log(data.photos[0].photo[0].id); //TypeError: cannot read property '0' of undefined
//		console.log(data.photos[0].photo.id); //TypeError: cannot read property '0' of undefined

//		console.log(data.photo[0].id); //TypeError: cannot read property '0' of undefined
//		console.log(data.photos[0].id);////TypeError: cannot read property '0' of undefined
//		console.log(data.photos.photo[0].id); //TypeError: cannot read property 'photo' of undefined
  		
//		console.log(data.photos.photo.id[0]); //TypeError: cannot read property 'photo' of undefined
//		console.log(data.photo.id[0]); //TypeError: cannot read property 'id' of undefined
//		console.log(data.photos.id[0]);////TypeError: cannot read property 'id' of undefined

//		console.log(jsonFlickrApi.photos.photo.id[0]); //Reference Error: jsonFlickrApi is not defined
//		console.log(jsonFlickrApi.photo.id[0]); //Reference Error: jsonFlickrApi is not defined
//		console.log(jsonFlickrApi.photos.id[0]);//Reference Error: jsonFlickrApi is not defined

//		console.log($scope.flickrPhotos.photos.photo.id[0]); //TypeError: cannot read property 'photo' of undefined
//		console.log($scope.flickrPhotos.photo.id[0]); //TypeError: cannot read property 'id' of undefined
//		console.log($scope.flickrPhotos.photos.id[0]);//TypeError: cannot read property 'id' of undefined

//		console.log($scope.flickrPhotos.photos.photo[0].id); //TypeError: cannot read property 'photo' of undefined
//		console.log($scope.flickrPhotos.photo[0].id); //TypeError: cannot read property 'photo' of undefined
//		console.log($scope.flickrPhotos.photos[0].id);//TypeError: cannot read property '0' of undefined
		
		// console.log(data); //this works

//		console.log($scope.flickrPhotos); //this works





			});


};





module.exports = FlickrCtrl;




