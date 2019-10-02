angular.module('phonecatApp').
    controller('PhoneListController', [
        '$scope',
        '$http',
        'Phone',
        function PhoneListController($scope, $http, Phone) {

            $scope.phones = Phone.query();

            orderProp = 'age';
        }
    ]);