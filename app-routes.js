angular.module('nycBus')
.config(function($routeProvider){

    $routeProvider
    .when('/', {

        templateUrl: "components/home/home.html",
        controller: "homeController"

    })
    .when('/projects', {

        templateUrl:"components/projects/projects.html",
        controller:"projectsController"



    })

    .when('/project', {

        templateUrl:"components/project/project.html",
        controller:"projectController"



    })


    .otherwise({
            redirectTo: '/'
        });


});