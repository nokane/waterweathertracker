var wwtracker = angular.module('wwtracker', [
      'ui.router'
    ]);

wwtracker.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/map');
    
    $stateProvider
        .state('map', {
            url: '/map',
            templateUrl: 'static/templates/map/map.html'
        })
                
});