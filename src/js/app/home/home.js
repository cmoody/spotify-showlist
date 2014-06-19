define(function(require) {
	"use strict";

	// Libs
	var $ = require('jquery');
	var Backbone = require('backbone');

	// Template
    var tpl = require('text!app/home/tpl/home.html');
    var template = _.template(tpl);
	
	return Backbone.View.extend({
		className: 'home',

		events: {
			'tap .button': 'oauth'
		},

		initialize: function() {
			this.render();
		},

		render: function() {
			this.$el.html(template()); 
			
			return this;
		},

		oauth: function() {
			$.oauth2({
		        auth_url: 'https://accounts.spotify.com/authorize/',           // required
		        response_type: 'token',      // required - "code"/"token"
		        //token_url: 'https://accounts.spotify.com/api/token',          // required if response_type = 'code'
		        //logout_url: '',         // recommended if available
		        client_id: '829a1ca939014906b618305f7c5ad1c5',          // required
		        //client_secret: 'ba68304187694b3cac1698c4f1aae744',      // required if response_type = 'code'
		        redirect_uri: 'http://localhost:8000/',       // required - some dummy url
		        other_params: {scope: 'user-read-private playlist-read playlist-read-private'}        // optional params object for scope, state, display...
		    }, function(token, response){

		    	// Trigger isloggedin
		    	// set to localStorage tokens

		        // do something with token or response
		        $("#logs").append("<p class='success'><b>access_token: </b>"+token+"</p>");
		        $("#logs").append("<p class='success'><b>response: </b>"+JSON.stringify(response)+"</p>");
		    }, function(error, response){
		        // do something with error object
		        $("#logs").append("<p class='error'><b>error: </b>"+JSON.stringify(error)+"</p>");
		        $("#logs").append("<p class='error'><b>response: </b>"+JSON.stringify(response)+"</p>");
		    });
		}
	});

});