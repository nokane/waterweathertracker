function Weather($http) {

  function queryWeather(coords) {
    var api = 'http://api.openweathermap.org/data/2.5/weather?lat=' + coords.lat + '&lon=' + coords.lng;
    api += '&APPID=d007adf2cf17edc04d6f7c389c5a35d8&units=imperial'
    return $http.get(api);
  }
  var Weather = {
    queryWeather: queryWeather
  };

  return Weather;
  
}

Weather.$inject = ['$http'];
angular
  .module('wwtracker.weather.services', [])
  .factory('Weather', Weather);
