angular.module('phonecatApp', ['ui.router']).
    config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('home', {
            url: '/home',
            templateUrl: 'phone-list.template.html',
            controller: 'PhoneListController'
        })
    });