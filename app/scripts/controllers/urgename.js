'use strict';

/**
 * @ngdoc function
 * @name urgezapperApp.controller:UrgeNameController
 * @description
 * # UrgeNameController
 * Controller of the urgezapperApp
 */

// The only purpose of this controller is to receive the urge's name in the URL for analytics purposes and redirect to acknowledge.

angular.module('urgezapperApp')
  .controller('UrgeNameController', ['$scope', '$location', '$routeParams', 'UrgeService',  function ($scope, $location, $routeParams, UrgeService) {
    
    // Get the urge's name.
    var urgeName = $routeParams.urgeName;
    // Set it in the UrgeService
    UrgeService.urgeName = urgeName;

    // Redirect to acknowledge.
    $location.path('/acknowledge');

  }]);
