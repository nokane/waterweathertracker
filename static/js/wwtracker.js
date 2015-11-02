var wwtracker = angular.module('wwtracker', [
      'ui.router',
      'ui.bootstrap',
      'arrayFilter',
      'wwtracker.states.services',
      'wwtracker.map.controllers',
      'wwtracker.weather.services',
      'wwtracker.map.services',
      'wwtracker.water.services',
      'chart.js'
    ]);

wwtracker.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/map');
    
    $stateProvider
        .state('map', {
            url: '/map',
            templateUrl: 'static/templates/map/map.html',
            controller: MapController
        })
                
});