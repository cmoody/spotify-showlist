define(function(require) {
	"use strict";

	// Vendor
	var $ = require('jquery');
	var Backbone = require('backbone');

	// Libs
	var spotifyAPI = require('libs/spotifyAPI');

	// Template
    var tpl = require('text!app/home/tpl/home.html');
    var template = _.template(tpl);
	
	return Backbone.View.extend({
		className: 'home',

		events: {
			'tap .button': 'getUser',
			'tap .playlist': 'getPlaylist'
		},

		initialize: function() {
			this.render();
		},

		render: function() {
			this.$el.html(template());

			return this;
		},

		getStuff: function() {
			spotifyAPI.getUser();
		},

		getPlaylist: function() {
			spotifyAPI.getUserPlaylist();
		}
	});

});