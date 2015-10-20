var wwtracker = angular.module('wwtracker', [
      'ui.router',
      'wwtracker.states.services',
      'wwtracker.map.controllers',
      'wwtracker.map.services'
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