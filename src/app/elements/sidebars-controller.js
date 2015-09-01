'use strict';

/**
 * @ngdoc function
 * @name SidebarsController
 * @module CoursaElements
 * @kind function
 *
 * @description
 *
 * Handles sidebar element page
 */
angular.module('CoursaElements').
controller('SidebarsController', function ($scope, $mdSidenav) {
    $scope.openSidebar = function(id) {
        $mdSidenav(id).toggle();
    };
});