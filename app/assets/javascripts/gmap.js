var Map = function() {
    var map;
    var geocoder = new google.maps.Geocoder();

    var constructor = function Map() {

	var self = this;
	this.initialize = function() {
	    // Sets view to all of Texas by default
	    var mapOptions = {
		zoom: 6,
		center: new google.maps.LatLng(31.9685988, -99.90181310000003)
	    };
	    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
	}
	self.initialize();

	this.updateLocation = function(lat, lng, zoom) {
	    zoom = typeof zoom !== 'undefined' ?  zoom : 15;
	    // North is positive for latitudes
	    // East is positive for longitudes
	    map = new google.maps.Map(document.getElementById('map-canvas'));
	    map.setZoom(zoom);
	    map.setCenter(new google.maps.LatLng(lat, lng));
	    map.setMapTypeId(google.maps.MapTypeId.ROADMAP);
	}

	this.queryAndUpdateLocation = function(address) {
	    geocoder = new google.maps.Geocoder();
	    geocoder.geocode( { 'address': address }, function(results, status) {
		if (status == google.maps.GeocoderStatus.OK) {

		    var lat = results[0].geometry.location.lat();
		    var lng = results[0].geometry.location.lng();
		    var temp = this;
		    self.updateLocation(lat, lng);
		} else {
		    alert("Geocode was not successful for the following reason: " + status);
		}
	    });
	}
    }

    return constructor;

}();

window.onload=function() {
    t = new Map();
}
