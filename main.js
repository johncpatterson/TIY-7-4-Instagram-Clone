(function() {
   'use strict';

   angular
      .module('hipstagram', ['ui.router'])
      .config(appConfig);

   appConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

   function appConfig($stateProvider, $urlRouterProvider, $locationProvider) {

      $urlRouterProvider.otherwise('/404error');

      $stateProvider
         .state('home', {
            url: '/',
            views: {
               'content': {
                  templateUrl: 'partials/home.html',
                  controller: 'PhotoController',
                  controllerAs: 'controller'
               },
               'sidebar': {
                  templateUrl: 'partials/nav.html',
               }
            }
         })
         .state('details', {
            url: '/details/:id',
            views: {
               'content': {
                  templateUrl: 'partials/photodetails.html',
                  controller: 'PhotoController',
                  controllerAs: 'controller'
               },
               'sidebar': {
                  templateUrl: 'partials/nav.html',
               }
            }
         })
         .state('addphoto', {
            url: '/addphoto',
            views: {
               'content': {
                  templateUrl: 'partials/addphoto.html',
                  controller: 'PhotoController',
                  controllerAs: 'controller'

               },
               'sidebar': {
                  templateUrl: 'partials/nav.html',
               }
            }
         })
         .state('404', {
            url: '/404',
            templateUrl: 'partials/404error.html',
         })
   }
})();
