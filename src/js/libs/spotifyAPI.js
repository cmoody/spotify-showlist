define(function (require) {

    "use strict";

    // Vendor
    var SpotifyWebApi = require('SpotifyWebApi');

    //
    var client_id = '829a1ca939014906b618305f7c5ad1c5';
    var api = new SpotifyWebApi(client_id);

    var spotifyAPI = {

    	getElvis: function() {
    		api.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE', function(err, data) {
			  if (err) console.error(err);
			  else console.log('Artist albums', data);
			});
    	}

    };

	return spotifyAPI;

});