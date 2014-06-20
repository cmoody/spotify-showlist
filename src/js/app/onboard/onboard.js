define(function(require) {
	"use strict";

	// Vendor
	var $ = require('jquery');
	var Backbone = require('backbone');

	// Libs
	var spotifyAuth = require('libs/spotifyAuth');

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
			spotifyAuth.grantAccess();
		}
	});

});