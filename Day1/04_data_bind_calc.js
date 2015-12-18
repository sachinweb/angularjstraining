      var app1 = angular.module('myApp',[]);
          app1.controller('controllerOne', function($scope){
            $scope.f_add = function(){
                $scope.resultNum = ' = ' + (parseInt($scope.num1) + parseInt($scope.num2))
            }
          });