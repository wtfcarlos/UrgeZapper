'use strict';

angular.module('urgezapperApp')
.service('UrgeService',  function(){

	return {
		urgeName: ''
	};

})
.service('QuoteService', ['$http', function($http) {


	var quoteService = {
		nextAsync: function() {
			var promise = $http.get('http://insomn.io/api/random_quote').then(function(response) {
				return response;
			});
			return promise;
		}
	};

	return quoteService;

}]);