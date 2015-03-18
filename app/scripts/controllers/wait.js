'use strict';

/**
 * @ngdoc function
 * @name urgezapperApp.controller:WaitController
 * @description
 * # WaitController
 * Controller of the urgezapperApp
 */
angular.module('urgezapperApp')
  .controller('WaitController', ['$scope', '$interval', '$location', 'ngAudio', 'UrgeService', 'QuoteService', '$analytics', function ($scope, $interval, $location, ngAudio, UrgeService, QuoteService, $analytics) {
    
  	$scope.timeToWait = 60 * 10; // Time in seconds
  	$scope.currentTime = 0;
  	$scope.remaining = $scope.timeToWait;
  	$scope.chime = ngAudio.load("sounds/chime.wav");

  	$scope.waiting = true;
    $scope.urgeName = UrgeService.urgeName;

    $analytics.eventTrack('waitStarted');
    
    $scope.nextQuote = function() {
      QuoteService.nextAsync().then(function(data) {
        $scope.quote = data.data;
        $analytics.eventTrack('newQuote');
      });
    };

    $scope.nextQuote();

  	var cycle = $interval(function(){
  		$scope.currentTime++;
  		$scope.remaining = $scope.timeToWait - $scope.currentTime;

  		if ($scope.remaining <= 0) {
  			$scope.remaining = 0;
  			$interval.cancel(cycle);
  			$scope.chime.play();
  			$scope.waiting = false;
  			$location.path('/decide');
        $analytics.eventTrack('waitComplete');
  		}

  	}, 1000);

    if (!$scope.urgeName.length) {
      $location.path('/start');
      $interval.cancel(cycle);
    }

  }])
  .filter('floor', function() {
  	return function(input) {
  		input = input || 0;
  		return Math.floor(input);
  	}
  })
  .filter('leadingZeros', function() {
  	return function(input, zeroCount) {
  		input = input || 0;
  		var s = input + "";
  		while (s.length < zeroCount) {
  			s = "0" + s;
  		}
  		return s;
  	}
  });
