angular.module('phonecatApp', ['ui.router', 'phoneList', 'phoneDetail']).
    config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('phones', {
            url: '/phones',
            views: {
                '': { templateUrl: 'phone-list/phone-list.template.html', controller: 'PhoneListController' },
                'vista1@home': { template: '<h1>Vista 1</h1>' },
                'vista2@home': { template: '<h1>Vista 2</h1>' }

            }
        });
        $stateProvider.state('phone', {
            url: '/phones/:phoneId',
            templateUrl: './phone-detail/phone-detail.template.html',
            //controller: 'PhoneDetailController'
            controller: function ($scope,$stateParams) {
                $scope.phoneId=$stateParams.phoneId;
            }
        })
        $urlRouterProvider.otherwise('/phones');
        });
        