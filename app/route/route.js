angular.module('app').config(function($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true);

    $routeProvider
        .when('/', {
            templateUrl: 'view/home.html',
            controller: 'HomeController'
        })
        .when('/add', {
            templateUrl: 'view/add.html',
            controller: 'AddController'
        })
        .when('/list', {
            templateUrl: 'view/list.html',
            controller: 'ListController'
        })
        .when('/view/:id', {
            templateUrl: 'view/view.html',
            controller: 'ViewController'
        })
        .when('/edit/:id', {
            templateUrl: 'view/edit.html',
            controller: 'EditController'
        })
});