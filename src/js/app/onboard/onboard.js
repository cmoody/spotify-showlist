define(function(require) {
	"use strict";

	// Vendor
	var $ = require('jquery');
	var Backbone = require('backbone');

	// Libs

	// Template
    var tpl = require('text!app/onboard/tpl/onbaord.html');
    var template = _.template(tpl);
	
	return Backbone.View.extend({
		className: 'onboard',

		events: {
			'tap button': 'authorize'
		},

		initialize: function() {
			this.render();
		},

		render: function() {
			this.$el.html(template());
			
			return this;
		},

		authorize: function() {
			$.oauth2({
		        auth_url: 'https://accounts.spotify.com/authorize/',           // required
		        response_type: 'token',      // required - "code"/"token"
		        //token_url: 'https://accounts.spotify.com/api/token',          // required if response_type = 'code'
		        //logout_url: '',         // recommended if available
		        client_id: '829a1ca939014906b618305f7c5ad1c5',          // required
		        //client_secret: 'ba68304187694b3cac1698c4f1aae744',      // required if response_type = 'code'
		        redirect_uri: 'http://www.google.com',       // required - some dummy url
		        other_params: {scope: 'user-read-private playlist-read playlist-read-private'}        // optional params object for scope, state, display...
		    }, function(token, response){
		  		// Need to split up token_type & expires_in
		    	localStorage.setItem('access_token', token);

		    	console.log(JSON.stringify(response));

		    	window.location = '#';
		    }, function(error, response){
		        // do something with error object
		        $("#logs").append("<p class='error'><b>error: </b>"+JSON.stringify(error)+"</p>");
		        $("#logs").append("<p class='error'><b>response: </b>"+JSON.stringify(response)+"</p>");
		    });
		}
	});

});