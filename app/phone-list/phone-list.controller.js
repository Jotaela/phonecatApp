angular.module('phonecatApp').
    controller('PhoneListController', [
        '$scope',
        '$http',
        function PhoneListController($scope, $http) {

        $http.get('phones/phones.json').then(function (response) {
            $scope.phones = response.data
        });

        orderProp = 'age';
    }]);