'use strict';

/**
 * @ngdoc function
 * @name urgezapperApp.controller:ZapController
 * @description
 * # ZapController
 * Controller of the urgezapperApp
 */
angular.module('urgezapperApp')
  .controller('ZapController', ['$scope', '$location', 'ngAudio', function ($scope, $location, ngAudio) {
    
    $scope.zap = ngAudio.load('sounds/zap.mp3');

    $scope.zap.play();

  }]);
