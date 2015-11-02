angular
  .module('wwtracker.map.controllers', [])
  .controller('MapController', MapController)

MapController.$inject = ['$scope', 'Map', 'Water', 'State', 'Weather'];

function MapController($scope, Map, Water, State, Weather) {

  var mapOptions = {
        zoom: 4,
        center: new google.maps.LatLng(38.8833, -95),
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
  $scope.waterMeasurements = [];
  $scope.recentMeasure = {};
  $scope.graph = {};
  $scope.graph.series = ['Water Flow: cubic feet/second (ft3/s)'];
  $scope.graph.labels = [];
  $scope.graph.data = [[]];
  $scope.graph.options = { bezierCurve : false};
  $scope.weatherData = {};
  $scope.hideDetails = true;
  $scope.overlapMap = true;

  $scope.searchState = function(state) {
      google.maps.event.trigger(map, 'resize');
      $scope.map.setZoom(6);
      if ($scope.stateWater[state] === undefined || $scope.stateWater[state].length === 0) {
        Water.queryState(state).then(function(data) {
          var allData = data.data;
          console.log(allData);
          $scope.stateWater[state] = [];
          for (var i = 0; i < allData.length; i++) {
            allData[i].markerIndex = $scope.markerIndex;
            $scope.stateWater[state].push(allData[i]);
            $scope.markers.push(Map.createMarker(allData[i].loc, $scope.map, allData[i].name));
            $scope.markerIndex++;
          }
        // $scope.markerCluster = new MarkerClusterer($scope.map, $scope.markers);
          $scope.currentstate.name = state;
          Map.changeCenter($scope.map, state);
        });
      } else {
        $scope.currentstate.name = state;
        Map.changeCenter($scope.map, state);
      }
  };

  $scope.selectMarker = function(water) {
    $scope.overlapMap = false;
    $scope.hideDetails = false;
    $scope.graph.labels = [];
    $scope.graph.data = [[]];
    $scope.currentWater = water;
    google.maps.event.trigger(map, 'resize');
    $scope.currentWater.coordinates = Map.convertCoordinates($scope.currentWater.loc);
    console.log($scope.currentWater);
    if ($scope.selectedMarker !== undefined) {
      Map.unselectMarker($scope.markers[$scope.selectedMarker]);
    }
    $scope.selectedMarker = $scope.currentWater.markerIndex;
    Map.selectMarker($scope.markers[$scope.selectedMarker]);
    Water.queryWater($scope.currentWater.id).then(function(data) {
      console.log(data);
      $scope.waterMeasurements = data.data;
      console.log(Water.recentMeasure($scope.waterMeasurements));
      $scope.recentMeasure = Water.recentMeasure($scope.waterMeasurements);
      $scope.graph = Water.prepareGraph($scope.waterMeasurements, $scope.graph);
      Weather.queryWeather($scope.currentWater.coordinates).then(function(weatherData) {
        $scope.weatherData = weatherData.data;
        console.log($scope.weatherData);
        console.log($scope.weatherData);
        Map.changeCenter($scope.map, $scope.currentWater.coordinates);
        $scope.map.setZoom(12);
      });
    });
  };

  State.allStates().then(function(data) {
    for (var i = 0; i < data.data.length; i++) {
      $scope.states.push(data.data[i]);
      $scope.stateWater[data.data[i].name] = [];
    }
  });

};
