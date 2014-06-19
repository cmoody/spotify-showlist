define(function(require) {

  "use strict";

  // Vendor
  var $ = require('jquery');
  var Backbone = require('backbone');

  // Libs
  var ViewHandler = require('libs/viewHandler');
  var spotifyAPI = require('libs/spotifyAPI');

  // Elements
  var $body = $("body");
  var $content = $(".content");
  
  // Collections

  // Navigation Views
  var HeaderView = require('app/navigation/header/header');
  var FooterView = require('app/navigation/footer/footer');

  // Page Views
  var HomeView = require('app/home/home');
  var MapView = require('app/map/map');
  var OnboardView = require('app/onboard/onboard');

  var SubHeaderTestView = require('app/subHeaderTest/subHeaderTest');
    
  return Backbone.Router.extend({

    routes: {
		  '': 'index',
      '/': 'index',
      'map': 'map',
      'onboard': 'onboard',
      'test1': 'test1',
      'subheadertest': 'subHeaderTest'
    },

    initialize: function() {
      this.addHeader();
      this.addFooter();
    },

    addHeader: function() {
      var headerView = new HeaderView();

      $body
        .prepend(headerView.$el);
    },

    addFooter: function() {
      var footerView = new FooterView();

      $body
        .prepend(footerView.$el);
    },

    onboard: function() {
      var onboardView = new OnboardView();

      ViewHandler.setCurrent(onboardView);
    },

    index: function() {
      //spotifyAPI.getElvis();

      var homeView = new HomeView();

      ViewHandler.setCurrent(homeView, "Home");
    },

    map: function() {
      var mapView = new MapView();

      ViewHandler.setCurrent(mapView, "Map");
      mapView.render();
    },

    subHeaderTest: function() {
      var subHeaderTestView = new SubHeaderTestView();

      ViewHandler.setCurrent(subHeaderTestView, "SubHeader Test");
    }

  });

});