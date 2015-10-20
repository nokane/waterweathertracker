function Map($http) {

    var createMarker = function(str, map, title) {
      var marker = new google.maps.Marker({
        'position': Map.convertCoordinates(str),
        'map': map,
        'title': title
      });
      return marker
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

    var Map = {
      createMarker: createMarker,
      convertCoordinates: convertCoordinates
    };
    return Map;

  }

Map.$inject = ['$http'];
angular
  .module('wwtracker.map.services', [])
  .factory('Map', Map);