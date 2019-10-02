angular.module('phonecatApp', ['ui.router', 'phoneList']).
    config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('home', {
            url: '/home',
            views: {
                '': { templateUrl: 'phone-list/phone-list.template.html', controller: 'PhoneListController' },
                'vista1@home': { template: '<h1>Vista 1</h1>' },
                'vista2@home': { template: '<h1>Vista 2</h1>' }

            }
        });
        $urlRouterProvider.otherwise('/home');
    });