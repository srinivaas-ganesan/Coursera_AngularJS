(function () {
'use strict';

angular.module('LunchCheck', [])
	.controller('LunchCheckController', LunchCheckController);
LunchCheckController.$inject = ['$scope'];

function LunchCheckController ($scope) {
  $scope.food = "";
  $scope.value = "";
  
  $scope.setText = function () {  
    var str = $scope.value
	
	if(str == ''){
		$scope.food = 'Please enter data first!';
		return;
	}
	
    var num = str.split(",");
	
	if(num.length > 3)
		$scope.food = "Too Much!";
	else 
		$scope.food = "Enjoy!";
  };
}

})();
