'use strict';

/**
 * @ngdoc overview
 * @name mywebsiteApp
 * @description
 * # mywebsiteApp
 *
 * Main module of the application.
 */
angular
  .module('mywebsiteApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/experience', {
        templateUrl: 'views/experience.html',
        controller: 'ExperienceCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
