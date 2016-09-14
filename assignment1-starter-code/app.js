(function() {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope)
{
	$scope.checkIfTooMuch = function() {
		var items = $scope.items;
		if (items == undefined || items == '')
		{
			$scope.message = "Please enter data first";
		}
		else
		{
			var numberOfItems = items.split(',').length;
			if (numberOfItems <= 3)
				$scope.message = "Enjoy!";
			else
				$scope.message = "Too much!";

		}
	};
}
})();