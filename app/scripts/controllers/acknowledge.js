'use strict';

/**
 * @ngdoc function
 * @name urgezapperApp.controller:AcknowledgeController
 * @description
 * # UrgeController
 * Controller of the urgezapperApp
 */
angular.module('urgezapperApp')
  .controller('AcknowledgeController', ['$scope', '$timeout', '$location', 'ngAudio', 'UrgeService', '$analytics', function ($scope, $timeout, $location, ngAudio, UrgeService, $analytics) {
    
    $scope.feelButtonMessage = "Feel the Urge";
    $scope.chime = ngAudio.load("sounds/chime.wav");
    $scope.urgeName = UrgeService.urgeName;

    if (!$scope.urgeName.length) {
    	$location.path('/start');
    }

    $scope.hasPressedFeel = false;
 	
 	$scope.feel = function() {

 		if (!$scope.hasPressedFeel) {
 			$scope.feelButtonMessage = "Close your eyes now.";
	 		$analytics.eventTrack('feelStarted');

	 		$timeout(function(){
	 			$scope.feelButtonMessage = "You did it.";
	 			$scope.chime.play();

	 			$timeout(function() {
	 				$location.path('/wait');
	 				$analytics.eventTrack('feelEnded');
	 			}, 1000);

	 		}, 60000);
 		}

 	};


  }]);
