'use strict';

/**
 * @ngdoc function
 * @name urgezapperApp.controller:DecideController
 * @description
 * # DecideController
 * Controller of the urgezapperApp
 */
angular.module('urgezapperApp')
  .controller('DecideController', ['$scope', '$interval', '$location', 'UrgeService', function ($scope, $interval, $location, UrgeService) {
    
    $scope.urgeName = UrgeService.urgeName;


  	$scope.indulge = function() {
      $location.path('/indulge');
    };

  	$scope.wontIndulge = function() {
      $location.path('/zap');
  	};

    if (!$scope.urgeName.length) {
      $location.path('/start');
    }

  }]);
