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
  $scope.currentWater = {};
  $scope.searchState = function(state) {
      Water.queryState(state.name).then(function(data) {
        var allData = data.data;
        console.log(allData);
        $scope.stateWater[state.name] = [];
        for (var i = 0; i < allData.length; i++) {
          allData[i].markerIndex = $scope.markerIndex;
          $scope.stateWater[state.name].push(allData[i]);
          $scope.markers.push(Map.createMarker(allData[i].loc, $scope.map, allData[i].name));
          $scope.markerIndex++;
        }
        // $scope.markerCluster = new MarkerClusterer($scope.map, $scope.markers);
        $scope.currentstate.name = state.name;
      });
  };
  $scope.selectMarker = function(water) {
    $scope.currentWater = water;
    markerIndex = water.markerIndex;
    if ($scope.selectedMarker !== undefined) {
      Map.unselectMarker($scope.markers[$scope.selectedMarker]);
    }
    $scope.selectedMarker = $scope.currentWater.markerIndex;
    Map.selectMarker($scope.markers[$scope.selectedMarker]);
  };
  State.allStates().then(function(data) {
    for (var i = 0; i < data.data.length; i++) {
      $scope.states.push(data.data[i]);
    }
    $scope.currentstate.name = "Select State";

  });

};
