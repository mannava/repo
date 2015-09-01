'use strict';

/**
 * @ngdoc function
 * @name SwitchesController
 * @module CoursaElements
 * @kind function
 *
 * @description
 *
 * Handles switches element page
 */
angular.module('CoursaElements').
controller('SwitchesController', function ($scope) {
    $scope.toggleAll = function(data, value) {
        for(var x in data) {
            data[x] = value;
        }
    };
});