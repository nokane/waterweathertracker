function Water($http) {

    var allWater = function() {
      return $http.get('/api/water/all');
    };
    var queryState = function(state) {
      return $http.get('api/water/' + state)
    };
    var queryWater = function(waterId) {
      return $http.get('api/measurement/' + waterId);
    };
    var recentMeasure = function(measurements) {
      var index = 0;
      var mostRecent = new Date(measurements[0].measured_at)
      for (var i = 1; i < measurements.length; i++) {
        var ithMeasurement = new Date(measurements[i].measured_at);
        if (ithMeasurement > mostRecent) {
          mostRecent = ithMeasurement;
          index = i;
        }
      }
      return measurements[index];
    }
    var prepareGraph = function(measurements, graph) {
      graph.labels = [];
      graph.data = [[]];
      for (var i = 0; i < measurements.length; i++) {
        var date = new Date(new Date(measurements[i].measured_at));
        var month = date.getMonth()+1
        var dateLabel = "" + month + "/" + date.getDate() + "/" + date.getFullYear();
        graph.labels.push(dateLabel);
        graph.data[0].push(measurements[i].value);
      }
      return graph;
    };
    var Water = {
      allWater: allWater,
      queryState: queryState,
      queryWater: queryWater,
      recentMeasure: recentMeasure,
      prepareGraph: prepareGraph
    };

    return Water;
  }

Water.$inject = ['$http'];
angular
  .module('wwtracker.water.services', [])
  .factory('Water', Water);
