function State($http) {

    var allStates = function() {
      return $http.get('/api/states/');
    }

    var State = {
      allStates: allStates
    };

    return State;
  }

State.$inject = ['$http'];
angular
  .module('wwtracker.states.services', [])
  .factory('State', State);
