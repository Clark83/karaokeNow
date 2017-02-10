angular.module('Hackathon', ['ngRoute'])
       .config(angularRouter)

angularRouter.$inject = ['$routeProvider']
function angularRouter ($routeProvider) {
    $routeProvider
        .when('/',
            {
                templateUrl: '/partials/home.html',
                controller: 'homeCtrl',
                controllerAs: 'home',
            })
        .when('/results',
            {
                templateUrl: '/partials/results.html',
            })

        .when('/player',
            {
                templateUrl: '/partials/player.html',
            });



}
