(function () {
'use strict';

angular.module('LunchCheck', [])
	.controller('LunchCheckController', LunchCheckController);
LunchCheckController.$inject = ['$scope'];

function LunchCheckController ($scope) {
  $scope.food = "";
  $scope.value = "";
  
  $scope.setText = function () {  

	if(str == ''){
		$scope.food = 'Please enter data first!';
		return;
	}	  
    var str = $scope.value
    var num = str.split(",");
	
	if(num.length > 3)
		$scope.food = "Too Much!";
	else 
		$scope.food = "Enjoy!";
  };
}

})();
