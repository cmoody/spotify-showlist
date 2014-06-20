require.config({
	paths: {
	 	'jquery': 'vendor/jquery/dist/jquery.min',
	    'backbone': 'vendor/backbone/backbone',
	    'underscore': 'vendor/underscore/underscore',
	    'hammerjs': 'vendor/jquery-hammerjs/jquery.hammer-full.min',
        'text' : 'vendor/requirejs-text/text',
        'parse': 'http://www.parsecdn.com/js/parse-1.2.18.min',
        'SpotifyWebApi': 'vendor/spotify-web-api-js/src/spotify-web-api',
        'oauth2': 'libs/cordova.oauth2',
	    'app': 'app',
        'libs': 'libs'
    },
	shim: {
		'SpotifyWebApi': {
			exports: 'SpotifyWebApi'
		},
		'oauth2': {
			deps: ['jquery']
		}
	}
});

require([
	'app/router',
	'libs/delegateEvents',
	'oauth2'
], function(Router) {

	var appRouter = new Router();
	Backbone.history.start();

	if(!localStorage.getItem("code")) {
		appRouter.navigate('onboard', true);
	}

});