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
            stack: ["AngularJS", "Cassandra", "MaterializeCSS"],
            demo:false,


        },


        {
            title:"Lift NYC",
            img:"../../assets/img/nyclift.png",
            des:"This application allows new yorkers to have access to their benefits.",
            git:"github Repo",
            stack: ["AngularJS", "Cassandra", "MaterializeCSS", "NYC OPEN DATA"],
            demo:true,
            demoLink:"https://liftnyc.herokuapp.com/"

        },

            {
            title:"Citibikes Live Graph",
            img:"../../assets/img/citibikes.png",
            des:"Using the Citibikes API, this python script creates a live graph of bikes available.",
            git:"https://github.com/GregBorrelly/citibikes-live-graph",
            stack: ["Python", "Matplotlib", "Citibike's API"],
            demo:false,

        },

          {
            title:"Quixotic",
            img:"../../assets/img/angular.png",
            des:"A open source Agile Developement tool set to dirsrupt tools such as Jhira.",
            git:"https://github.com/QuixoticOS/QX",
            stack: ["CSS", "HTML"],
            demo:false,
            demoLink:"",

        },


           {
            title:"Landing Page",
            img:"../../assets/img/landingpage.png",
            des:"A landing page designed in HTML, and CSS.",
            git:"https://github.com/GregBorrelly/Calendar",
            stack: ["CSS", "HTML"],
            demo:true,
            demoLink:"https://gregborrelly.github.io/CloudIdea/",

        },



         


    





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