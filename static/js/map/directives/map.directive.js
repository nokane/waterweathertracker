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
