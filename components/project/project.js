angular.module('nycBus')
.controller('projectController',['$scope',  'projectFactory', function($scope, projectFactory){

    $scope.initializeProject = function(){

          getData = projectFactory.getProject();  
          $scope.project = getData[0];
          $scope.loaded = true;
          
        

    }; 

    console.log($scope.project);

  

}]);





