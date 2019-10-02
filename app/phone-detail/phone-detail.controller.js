angular.module('phoneDetail')
    .controller('PhoneDetailController', [
        '$scope',
        '$stateParmas',
        function ($scope, $stateParams) {
            $scope.phoneId = $stateParams.phoneId;
        }]);