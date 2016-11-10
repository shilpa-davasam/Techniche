(function(angular) {
    'use strict';
    angular.module("myApp",[])
        .directive("productDescription",function(){
            var obj = {
                restrict:'AEC',
                transclude:true,
                replace:true,
                templateUrl: 'productDescription.html',
                scope:{},
                controller: function($scope){
                        $scope.showDesc = false;
                    $scope.viewDescription = function(){
                        $scope.showDesc = !$scope.showDesc;
                    }
                }
            };
            return obj;
        }
    );
})(window.angular);