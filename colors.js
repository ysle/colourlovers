my = angular.module('colors', [])
my.controller('colors', ['$scope', '$http', function ($scope, $http) {

        $scope.data = {}

        $http.jsonp("http://www.colourlovers.com/api/patterns/top?format=json&jsonCallback=JSON_CALLBACK")
            .success(function (data) {
            $scope.data = data
        });

    }])