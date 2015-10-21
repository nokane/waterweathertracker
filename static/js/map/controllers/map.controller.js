angular
  .module('wwtracker.map.controllers', [])
  .controller('MapController', MapController);

MapController.$inject = ['$scope', 'Map', 'Water'];

function MapController($scope, Map, Water) {

  var mapOptions = {
        zoom: 5,
        center: new google.maps.LatLng(37.7699298, -122.4469157),
  };
  $scope.markers = [];
  $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

  Water.allWater().then(function(data) {
    var allData = data.data;
    for (var i = 0; i < allData.length; i++) {
      $scope.markers.push(Map.createMarker(allData[i].loc, $scope.map, allData[i].name))
    }
    $scope.markerCluster = new MarkerClusterer($scope.map, $scope.markers);
  });
};

