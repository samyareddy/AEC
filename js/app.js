var app = angular.module('elementApp', []);  
 
 app.controller('elementController', function($scope) {  
 	
   var uniqueCount = [1, 2, 6, 8, 2, 3, 6, 7, 1, 4, 5, 3, 8, 1, 2];


 
  
 var map = {};

  for(var i = 0; i < uniqueCount.length; i++) {
    if(map[uniqueCount[i]] != null) {
       map[uniqueCount[i]] = map[uniqueCount[i]]+ 1;
     } 
    else {
     map[uniqueCount[i]] = 1;
     }
      console.log(map)
     
    }
 
     $scope.output = map;
      console.log(map)
  
});