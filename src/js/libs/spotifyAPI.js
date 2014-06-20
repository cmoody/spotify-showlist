define(function (require) {

    "use strict";

    // Vendor
    var SpotifyWebApi = require('SpotifyWebApi');

    //
    var client_id = '829a1ca939014906b618305f7c5ad1c5';
    var api = new SpotifyWebApi(client_id);
    var access_token = localStorage.getItem("access_token");

    var spotifyAPI = {

    	getElvis: function() {
    		api.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE', function(err, data) {
			  if (err) console.error(err);
			  else console.log('Artist albums', data);
			});
    	},

        getUser: function() {
            $.ajax({
                url: 'https://api.spotify.com/v1/me',
                headers: {
                    'Authorization': 'Bearer ' + access_token
                },
                success: function(response) {
                    // var source = document.getElementById('loggedin-template').innerHTML;
                    // var template = Handlebars.compile(source);
                    // var data = response;
                    
                    // document.getElementById('loggedin').innerHTML = template(data);
                    
                    // $('div#login').hide();
                    // $('div#loggedin').show();
                    console.log(response);
                }
            });
        },

        getUserPlaylist: function() {
            // 1256447835 my ID
            $.ajax({
                url: 'https://api.spotify.com/v1/users/1256447835/playlists',
                headers: {
                    'Authorization': 'Bearer ' + access_token
                },
                success: function(response) {
                    console.log(response);
                }
            });
        }

    };

	return spotifyAPI;

});