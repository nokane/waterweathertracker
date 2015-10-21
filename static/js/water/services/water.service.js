function Water($http) {

    var allWater = function() {
      return $http.get('/api/water/all');
    };
    var queryState = function(state) {
      return $http.get('api/water/' + state)
    }
    var Water = {
      allWater: allWater,
      queryState: queryState
    };

    return Water;
  }

Water.$inject = ['$http'];
angular
  .module('wwtracker.water.services', [])
  .factory('Water', Water);
