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
