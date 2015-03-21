'use strict';

/**
 * @ngdoc function
 * @name urgezapperApp.controller:UrgeController
 * @description
 * # UrgeController
 * Controller of the urgezapperApp
 */
angular.module('urgezapperApp')
  .controller('UrgeController', ['$scope', '$location', '$analytics', function ($scope, $location, $analytics) {
    
  	$scope.urges = ['PMO', 'Binge Eat', 'Smoke', 'Drink', 'Procrastinate', 'Go on Facebook', 'Use', 'Self-Harm' , 'I\'d Rather Not Say'];



  	$scope.selectUrge = function(urgeName) {


  		
  		if (urgeName === 'I\'d Rather Not Say') {
  			urgeName = 'Temptation';
  		}

      $analytics.eventTrack('urgeSelected', {'category': 'urgeSelected', 'urgeName': urgeName});

  		$location.path('/urge/' + urgeName.toLowerCase());

  	};

  }]);
