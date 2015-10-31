wwtracker.directive('statelist', function () {
  return {
    restrict: 'EA',
    scope: {
        states: "=",
        currentstate: "=",
        eventHandler: '&onClick'
    },
    transclude: true,
    templateUrl: 'static/templates/map/dropdown.html',
  }
});

wwtracker.directive('waterlist', function() {
  return {
    restrict: 'EA',
    scope: {
        statewater: "=",
        currentstate: "=",
        eventHandler: '&onClick'
    },
    transclude: true,
    templateUrl: 'static/templates/map/waterList.html',
  }
});

wwtracker.directive('waterdetails', function() {
  return {
    restrict: 'EA',
    scope: {
        waterbody: "=",
        measurements: "=",
        recent: "=",
        graph: "=",
        weather: "=",
        eventHandler: '&onClick'
    },
    transclude: true,
    templateUrl: 'static/templates/map/waterDetails.html',
  }
});

wwtracker.directive('weatherdetails', function() {
  return {
    restrict: 'EA',
    scope: {
        weather: "=",
        eventHandler: '&onClick'
    },
    transclude: true,
    templateUrl: 'static/templates/map/weatherDetails.html',
  }
});