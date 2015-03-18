'use strict';

/**
 * @ngdoc function
 * @name urgezapperApp.controller:UrgeController
 * @description
 * # UrgeController
 * Controller of the urgezapperApp
 */
angular.module('urgezapperApp')
  .controller('UrgeController', ['$scope', '$location',  function ($scope, $location) {
    
  	$scope.urges = ['Eat', 'Smoke', 'Drink', 'PMO', 'Use', 'I\'d Rather Not Say'];

  	$scope.selectUrge = function(urgeName) {
  		
  		if (urgeName == 'I\'d Rather Not Say') {
  			urgeName = "Temptation";
  		}

  		$location.path('/urge/' + urgeName.toLowerCase());
      
  	};

  }]);
