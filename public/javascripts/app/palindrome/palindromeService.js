(function () {
	"use strict";

	angular
	.module('app')
	.factory('palindromeSvc', [
		'$rootScope', '$q', '$http', palindromeSvc
	]);

	function palindromeSvc ($rootScope, $q, $http) {

		function compare (word) {
			return $q(function (resolve, reject) {
				$http({
					method : 'get',
					url    : '/palindrome/compare',
					params : { word: word },
				})
				.success(function (result) {
					resolve('ok');
				})
				.error(function (error) {
					reject('error');
				});
			});
		}

		return {
			compare : compare,
		};
	}
})();