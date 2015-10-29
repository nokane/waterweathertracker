angular
  .module('wwtracker.map.controllers', [])
  .controller('MapController', MapController)

MapController.$inject = ['$scope', 'Map', 'Water', 'State'];

function MapController($scope, Map, Water, State) {

  var mapOptions = {
        zoom: 5,
        center: new google.maps.LatLng(37.7699298, -122.4469157),
  };
  $scope.markerIndex = 0;
  $scope.markers = [];
  $scope.states = [];
  $scope.lookupState = undefined;
  $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);
  $scope.stateWater = {};
  $scope.currentstate = {name: ''};
  $scope.oneAtATime = true;
  $scope.selectedMarker = undefined;
  $scope.searchState = function(state) {
      Water.queryState(state.name).then(function(data) {
        var allData = data.data;
        $scope.stateWater[state.name] = [];
        for (var i = 0; i < allData.length; i++) {
          allData[i].markerIndex = $scope.markerIndex;
          $scope.stateWater[state.name].push(allData[i]);
          var marker = Map.createMarker(allData[i].loc, $scope.map, allData[i].name);
          marker.setOptions({'opacity': 0.4});
          $scope.markers.push(marker);
          $scope.markerIndex++;
        }
        // $scope.markerCluster = new MarkerClusterer($scope.map, $scope.markers);
        $scope.currentstate.name = state.name;
      });
  };
  $scope.selectMarker = function(markerIndex) {
    if ($scope.selectedMarker !== undefined) {
      $scope.markers[$scope.selectedMarker].setAnimation(null);
      $scope.markers[$scope.selectedMarker].setOptions({'opacity': 0.4});
    }
    $scope.selectedMarker = markerIndex;
    $scope.markers[$scope.selectedMarker].setOptions({'opacity': 1});
    $scope.markers[$scope.selectedMarker].setAnimation(google.maps.Animation.BOUNCE);
  };
  State.allStates().then(function(data) {
    for (var i = 0; i < data.data.length; i++) {
      $scope.states.push(data.data[i]);
    }
    $scope.currentstate.name = "Select State";

  });

};
