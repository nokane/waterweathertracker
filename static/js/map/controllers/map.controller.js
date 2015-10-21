angular
  .module('wwtracker.map.controllers', [])
  .controller('MapController', MapController)

MapController.$inject = ['$scope', 'Map', 'Water', 'State'];

function MapController($scope, Map, Water, State) {

  var mapOptions = {
        zoom: 5,
        center: new google.maps.LatLng(37.7699298, -122.4469157),
  };
  $scope.markers = [];
  $scope.states = [];
  $scope.lookupState = undefined;
  $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);
  $scope.searchState = function(state) {
      Water.queryState(state.name).then(function(data) {
        var allData = data.data;
        for (var i = 0; i < allData.length; i++) {
          $scope.markers.push(Map.createMarker(allData[i].loc, $scope.map, allData[i].name))
        }
        // $scope.markerCluster = new MarkerClusterer($scope.map, $scope.markers);
        console.log($scope.map);
      });
  }
  State.allStates().then(function(data) {
    for (var i = 0; i < data.data.length; i++) {
      $scope.states.push(data.data[i]);
    }
  });

};
