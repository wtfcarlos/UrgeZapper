'use strict';

angular.module('urgezapperApp')
.service('UrgeService',  function(){

	var urgeService = {
		urgeName : '',
		isSerious: function() {
			return (urgeService.urgeName === 'self-harm' || urgeService.urgeName === 'use' || urgeService.urgeName === 'temptation');
		}
	};

	return urgeService;

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