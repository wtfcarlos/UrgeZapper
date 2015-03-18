'use strict';

/**
 * @ngdoc function
 * @name urgezapperApp.controller:AcknowledgeController
 * @description
 * # UrgeController
 * Controller of the urgezapperApp
 */
angular.module('urgezapperApp')
  .controller('AcknowledgeController', ['$scope', '$timeout', '$location', 'ngAudio', 'UrgeService', function ($scope, $timeout, $location, ngAudio, UrgeService) {
    
    $scope.feelButtonMessage = "Feel the Urge";
    $scope.chime = ngAudio.load("sounds/chime.wav");
    $scope.urgeName = UrgeService.urgeName;

    if (!$scope.urgeName.length) {
    	$location.path('/start');
    }
 	
 	$scope.feel = function() {

 		$scope.feelButtonMessage = "Close your eyes now.";

 		$timeout(function(){
 			$scope.feelButtonMessage = "You did it.";
 			$scope.chime.play();

 			$timeout(function() {
 				$location.path('/wait');
 			}, 1000);

 		}, 60000);

 	};


  }]);
