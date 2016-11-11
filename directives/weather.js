(function() {
   'use strict';

   angular
      .module('hipstagram', ['ui.router'])
      .directive('weather', function(API) {
         return {
            restrict: 'E',
            templateUrl: "partials/getweather.html",
            link: function(vm, element, attrs) {

               let weather = storebikes.getWeather(attrs.city);

               weather.then(function(weatherData) {
                  vm.weather = weatherData.data;
               });

            }
         };
      })
})();
