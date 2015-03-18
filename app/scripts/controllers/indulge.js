'use strict';

/**
 * @ngdoc function
 * @name urgezapperApp.controller:IndulgeController
 * @description
 * # IndulgeController
 * Controller of the urgezapperApp
 */
angular.module('urgezapperApp')
  .controller('IndulgeController', ['$scope', '$interval', '$location', 'UrgeService', function ($scope, $interval, $location, UrgeService) {
    
    $scope.urgeName = UrgeService.urgeName;

    if (!$scope.urgeName.length) {
      $location.path('/start');
    }

  }]);
