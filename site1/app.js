(function () {
'use strict';

angular.module("LunchCheck", [])
.controller("LunchCheckController", LController);
LController.$inject= ['$scope'];

    function LController($scope) {
        $scope.text= "";
        $scope.message= "Please enter data"

        $scope.checkAmount= function () {
            var itemArray= $scope.text.split(","); 
            var i, count= 0;
           for (i= 0; i< itemArray.length; i++) {
               if (itemArray[i]!= "" && itemArray[i]!= " ") count++;
           }
           if (count== 0) {
               $scope.message= "Please enter data first";
               $scope.textColor= "red";
            }
           else if (count<= 3) {
               $scope.message= "Enjoy!";
               $scope.textColor= "green";
            }
           else {
               $scope.message= "Too much!";
               $scope.textColor= "green";
           }
        }
    }
})();