(function() {
    'use strict';

    var app = angular.module('app', ['ui.router']);

    app.config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/home");

        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'home/home.view.html',
                controller: 'homeController',
                controllerAs: 'vm'
            })
            .state('/register', {
                url: '/register',
                templateUrl: '/auth/register/register.view.html',
                controller: 'registerController',
                controllerAs: 'vm'
            })
            .state('/login', {
                url: '/login',
                templateUrl: '/auth/login/login.view.html',
                controller: 'loginController',
                controllerAs: 'vm'
            })
            .state('/profile', {
                url: '/profile',
                templateUrl: '/profile/profile.view.html',
                controller: 'profileController',
                controllerAs: 'vm'
            });

    });


})();
