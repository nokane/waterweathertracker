var wwtracker = angular.module('wwtracker', [
      'ui.router',
      'ui.bootstrap',
      'wwtracker.states.services',
      'wwtracker.map.controllers',
      'wwtracker.map.services',
      'wwtracker.water.services'
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