angular
  .module('wwtracker.map.controllers', [])
  .controller('MapController', MapController);

MapController.$inject = ['$scope', 'Map'];

function MapController($scope, Map) {

  var mapOptions = {
        zoom: 5,
        center: new google.maps.LatLng(37.7699298, -122.4469157),
  };
  $scope.markers = [];
  $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

};

