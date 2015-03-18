'use strict';

/**
 * @ngdoc overview
 * @name urgezapperApp
 * @description
 * # urgezapperApp
 *
 * Main module of the application.
 */
angular
  .module('urgezapperApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngAudio',
    'angulartics', 'angulartics.google.analytics',
    'angular-svg-round-progress'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/start', {
        templateUrl: 'views/select-urge.html',
        controller: 'UrgeController'
      })
      .when('/acknowledge', {
        templateUrl: 'views/acknowledge.html',
        controller: 'AcknowledgeController'
      })
      .when('/wait', {
        templateUrl: 'views/wait.html',
        controller: 'WaitController'
      })
      .when('/urge/:urgeName', {
        templateUrl: 'views/urge.html',
        controller: 'UrgeNameController'
      })
      .when('/decide', {
        templateUrl: 'views/decide.html',
        controller: 'DecideController'
      })
      .when('/zap', {
        templateUrl: 'views/zap.html',
        controller: 'ZapController'
      })
      .when('/indulge', {
        templateUrl: 'views/indulge.html',
        controller: 'IndulgeController'
      })
      .when('/donate', {
        templateUrl: 'views/donate.html',
        controller: 'DonateController'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
