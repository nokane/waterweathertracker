function Map($http) {

    var createMarker = function(data, map, fn) {
      var marker = new google.maps.Marker({
        'position': Map.convertCoordinates(data.loc),
        'map': map,
        'title': data.name
      });
      marker.setOptions({'opacity': 0.4});
      google.maps.event.addListener(marker, 'click', function() {
        fn();
      });
      return marker;
    };

    var selectMarker = function(marker) {
      marker.setOptions({'opacity': 1});
      marker.setAnimation(google.maps.Animation.BOUNCE);
    };

    var unselectMarker = function(marker) {
      marker.setAnimation(null);
      marker.setOptions({'opacity': 0.4});
    };

    var convertCoordinates = function(str) {
      var coords = str.slice(17,-1);
      var longitude;
      var latitude;
      for (var j = 0; j < coords.length; j++) {
        if (coords.charAt(j) === ' ') {
          longitude = Number(coords.slice(0,j));
          latitude = Number(coords.slice(j+1));
        }
      }
      return {lat: latitude, lng:longitude}
    }

    var changeCenter = function(map, location) {
      var geocoder = new google.maps.Geocoder();
      var options = {};
      if (typeof location === 'string') {
        options['address'] = location;
      } else {
        options['location'] = new google.maps.LatLng(location.lat, location.lng);
      }
      geocoder.geocode(options, function(results, status) {
        map.setCenter(results[0].geometry.location);
      });
    };

    var Map = {
      changeCenter: changeCenter,
      createMarker: createMarker,
      selectMarker: selectMarker,
      unselectMarker: unselectMarker,
      convertCoordinates: convertCoordinates
    };
    return Map;

  }

Map.$inject = ['$http'];
angular
  .module('wwtracker.map.services', [])
  .factory('Map', Map);