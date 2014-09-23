'use strict';

var jquery = require('../../bower_components/jquery/dist/jquery.min.js');


var angular = require('angular'); //we can just require angular as if we were in node


var WelcomeCtrl = require('./controllers/WelcomeCtrl');
var TestCtrl = require('./controllers/TestCtrl');
var TheCtrl = require('./controllers/TheCtrl');
var FlickrCtrl = require('./controllers/FlickrCtrl');

var app = angular.module('myApp',[]);

/*app.controller('HelloCtrl',function($scope){
	$scope.test = 'Test varretjes';
});*/

console.log('everything is working');

app.controller('WelcomeCtrl',['$scope', WelcomeCtrl]);
app.controller('TestCtrl',['$scope', TestCtrl]);
app.controller('TheCtrl',['$scope', TheCtrl]);
app.controller('FlickrCtrl',['$scope', '$http',FlickrCtrl]);
