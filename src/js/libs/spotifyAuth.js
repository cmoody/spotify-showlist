// authCode = grants access for token
// authToken = needs to be refreshed to get api access
define(function (require) {

    "use strict";

    // Vendor
    var $ = require('jquery');

    var client_id = '829a1ca939014906b618305f7c5ad1c5';
    var redirect_uri = 'http://www.chasemoody.com/oauthCallback';

    function toQueryString(obj) {
        var parts = [];
        for (var i in obj) {
            if (obj.hasOwnProperty(i)) {
                parts.push(encodeURIComponent(i) + "=" + encodeURIComponent(obj[i]));
            }
        }
        return parts.join("&");
    }

    var spotifyAuth = {

        grantAccess: function() {
            var params = {
                client_id: client_id,
                redirect_uri: redirect_uri,
                scope: 'user-read-private playlist-read playlist-read-private',
                response_type: 'code'
            };

            var authWindow = window.open(
                "https://accounts.spotify.com/authorize?" + toQueryString(params), '_blank', 'location=yes');
            );

			$(authWindow).on('loadstart', function(e) {
			    var url = e.originalEvent.url;
            
	           	url = url.split("#")[0];   
	            var code = url.getParam("code");
	            var error = url.getParam("error");
	            
	            localStorage.setItem("code", code);

	            if (code || error){
	                loginWindow.close();
	            }
			}
        },

        getAuthToken: function() {
        	
        }

    };

    return spotifyAuth;

});