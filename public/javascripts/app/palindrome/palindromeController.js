(function () {
	"use strict";

	angular.module('app').controller('palindromeCtrl', [
		'$scope', 'palindromeSvc', palindromeCtrl
	]);

	function palindromeCtrl ($scope, palindromeSvc) {
		var vm     = $scope;
		vm.compare = compare;

		function init () {
			vm.palindrome = '';
			vm.historic   = [];
		}

		function compare () {

			palindromeSvc
			.compare(vm.palindrome)
			.then(function (result) {
				addHistoric(vm.palindrome, true);
				alert('This text is a valid palindrome.');
			}, 
			function (error) {
				addHistoric(vm.palindrome, false);
				alert('This text is not a valid palindrome.');
			});
		}

		function addHistoric(text, result) {
			vm.historic.unshift({
				text   : text,
				result : result,
			});
		}

		init();
	}

})();