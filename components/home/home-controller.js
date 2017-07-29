angular.module('nycBus').controller("homeController", ['$scope', function($scope){

    $scope.initializeApp = function(){

        $(document).ready(function(){
            
    
       
              Typed.new('.element', {
              strings: ["Front End", "Back End"," Full stack", "Cross-Platform Developer"],
              typeSpeed: 120
      });

     });
        


    };



}]);