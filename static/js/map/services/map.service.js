function Map($http) {

    var createMarker = function(latitude, longitude, map, title) {
      var marker = new google.maps.Marker({
        'position': {lat: latitude,lng:-122.5076403},
        'map': map,
        'title': title
      });
      return marker
    };

    var Map = {
      createMarker: createMarker
    };
    return Map;

  }

Map.$inject = ['$http'];
angular
  .module('wwtracker.map.services', [])
  .factory('Map', Map);