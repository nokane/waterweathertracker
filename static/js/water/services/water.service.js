function Water($http) {

    var allWater = function() {
      return $http.get('/api/water/all');
    };

    var Water = {
      allWater: allWater
    };

    return Water;
  }

Water.$inject = ['$http'];
angular
  .module('wwtracker.water.services', [])
  .factory('Water', Water);