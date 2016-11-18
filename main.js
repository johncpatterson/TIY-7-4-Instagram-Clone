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
                  controller: 'PhotoController',
                  controllerAs: 'controller'
               }
            }
         })
         .state('details', {
            url: '/details/:_id',
            views: {
               'content': {
                  templateUrl: 'partials/photodetails.html',
                  controller: 'IDController',
                  controllerAs: 'controller'
               },
               'sidebar': {
                  templateUrl: 'partials/nav.html',
                  controller: 'IDController',
                  controllerAs: 'controller'
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
                  controller: 'PhotoController',
                  controllerAs: 'controller'
               }
            }
         })
         .state('404', {
            url: '/404',
            templateUrl: 'partials/404error.html',
         })
   }

   $.fn.extend({
      animateCss: function(animationName) {
         var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
         this.addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
         });
      }
   });
   
   $('instagram-text-logo').animateCss('bounce');




})();
