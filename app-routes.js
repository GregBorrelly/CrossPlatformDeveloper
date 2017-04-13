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

    .otherwise({
            redirectTo: '/'
        });


});