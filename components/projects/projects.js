angular.module('nycBus')
.controller('projectsController',['$scope', 'projectFactory', function($scope, projectFactory){

    $scope.setData = function(project){
            console.log(project);

        projectFactory.addProject(project); 
    };


    $scope.projectData = [

        {
            title:"MyKvlr",
            img:"../../assets/img/myk.png",
            des:"Mykvlr is a goal setting platform that utilizes artificial intelligence to aid in the abtainment of goals. This platform was designed with large user base in mind, around 500,000+ users.",
            git:"github Repo",
            stack: ["AngularJS", "Cassandra"]

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

}])

.factory("projectFactory", function(){

    var project = [];

    var addProject = function(newObj){
        project = [];
        project.push(newObj);

    };

   var getProject = function(){


    return project;
   };


    return {
        
        addProject: addProject,
        getProject: getProject
    };

    



});