'use-strict';

var gulp = require('gulp'),
    gutil = require('gulp-util'),
    jshint = require('gulp-jshint'),
    browserify = require('gulp-browserify'),
    concat = require('gulp-concat'),
    clean = require('gulp-clean'),
    rimraf = require('gulp-rimraf')
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer');
	sass1 = require('gulp-ruby-sass'),
    minifycss = require('gulp-minify-css'),
    rename = require('gulp-rename');


//Modules to run a mini express server.
//modules for webserve and livereload
var embedlr = require('gulp-embedlr'),
	refresh = require('gulp-livereload'),
	lrserver = require('tiny-lr')(),
	express = require('express'),
	livereload = require('connect-livereload'),
	livereloadport = 35729,
	serverport = 5001;

//set up an express server (but not starting it yet)
var server = express();
//add live reload
server.use(livereload({port: livereloadport}));
//use our 'dist' folder as rootfolder
server.use(express.static('./dist'));
//because i like html5 pushstate.. this redirects everything back to our index.html
server.all('/*', function(req,res){
	res.sendfile('index.html',{root:'dist'});
});


//Dev task
gulp.task('dev', ['clean','views','styles','lint','browserify'], function(){});


//Dev task
//gulp.task('dev',function(){
	//start webserver
//	server.listen(serverport);
	//start live reload
//	lrserver.listen(livereloadport);
	//run the watch task, to keep taps on changes
//	gulp.run('watch');
//});


//Clean task
gulp.task('clean', function(){
	gulp.src('./dist/views',{read:false})
	.pipe(rimraf({force:true}));
});


// JSHint task
gulp.task('lint', function() {
  gulp.src('app/scripts/*.js')
  .pipe(jshint())
  // You can look into pretty reporters as well, but that's another story
  .pipe(jshint.reporter('default'));
});


//styles task
gulp.task('styles',function(){
	gulp.src('app/styles/main.scss')
	//the oneerror handler prevents gulp from crashing when you make a mistake in your sass
	.pipe(sass({onError: function(e){ console.log(e); } }))
	//{style: 'expanded'}))/
	//optionally add autoprefixer
	.pipe(autoprefixer('last 2 versions','> 1%','safari 5', 'ie 8', 'ie 9', 'opera 12.1'))
	//this should be familiar now
	.pipe(concat('main.css'))
	.pipe(gulp.dest('dist/css/'))
//	.pipe(refresh(lrserver));
	.pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest('dist/css/'))
});


// Browserify task
gulp.task('browserify', function() {
  // Single point of entry (make sure not to src ALL your files, browserify will figure it out for you)
  gulp.src(['app/scripts/main.js'])
  .pipe(browserify({
    insertGlobals: true,
    debug: false
  }))
  // Bundle to a single file
  .pipe(concat('bundle.js'))
  // Output it to our dist folder
  .pipe(gulp.dest('dist/js'));
});


//views task
gulp.task('views',function(){
	//get our index.html
	gulp.src('app/index.html')
	//and put it in the dist folder
	.pipe(gulp.dest('dist/'));

	//any other view files from app/views
	gulp.src('./app/views/**/*')
	//will be put in the dist/views folder
	.pipe(gulp.dest('dist/views/'));
//	.pipe(refresh(lrserver));//tell the lrserver to refresh
});


gulp.task('watch', ['lint'], function() {
	//start webserver
	server.listen(serverport);
	//start livereload
	refresh.listen(livereloadport)

  // Watch our scripts and when they change run lint and browserify
  gulp.watch(['app/scripts/*.js', 'app/scripts/**/*.js'],[
    'lint',
    'browserify'
  ]);
  //watch our sassfiles
  gulp.watch(['app/styles/*.scss'],[
  	'styles'
  	]);

  gulp.watch(['app/**/*.html'],[
  	'views'
  	]);

  
 gulp.watch('./dist/**').on('change', refresh.changed);
});

/*

gulp.watch([
    './dist/**'
  ], connect.reload);
});

gulp.task('connect', connect.server({
  root: './dist',
  port: 1337,
  livereload: true,
  open: {
    file: 'index.html',
    browser: 'Google Chrome'
  }
}));

gulp.task('styles', function () {
  gulp.src('.sass-cache').pipe(clean({read:false}));
  return gulp.src('app.styles/*.scss')
  .pipe(sass())
  .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
  .pipe(gulp.dest(stylesPath));
});*/

gulp.task('default',['dev','watch']);













