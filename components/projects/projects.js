angular.module('nycBus').controller('projectsController',['$scope', function($scope){

 
    $scope.projectData = [

        {
            title:"MyKvlr",
            img:"../../assets/img/one.jpg",
            des:"This is where description goes",
            git:"github Repo",

        },


        {
            title:"MTA Bus Tracker",
            img:"../../assets/img/bus.jpg",
            des:"This is where description goes",
            git:"github Repo",

        },


        {
            title:"MyKvlr",
            img:"../../assets/img/one.jpg",
            des:"This is where description goes",
            git:"github Repo",

        },

         {
            title:"Test",
            img:"../../assets/img/one.jpg",
            des:"This is where description goes",
            git:"github Repo",

        }






    ];


        $scope.initializeApp = function(){

        $(document).ready(function(){
            
            
       
              Typed.new('.element', {
              strings: ["Front End", "Back End"," Full stack", "Cross-Platform Developer"],
              typeSpeed: 120
      });

     });
        


    };






}]);