'use strict';

/**
 * @ngdoc function
 * @name ButtonsController
 * @module CoursaElements
 * @kind function
 *
 * @description
 *
 * Handles buttons element page
 */
angular.module('CoursaElements').
controller('ButtonsController', function ($scope, $interval) {
    $scope.buttonClass = 'md-primary';
    $scope.buttonHue = 'md-default';

    $scope.buttonDisabled = false;
    $scope.determinateValue = 30;
    $scope.determinateValue2 = 30;
    $interval(function() {
        $scope.determinateValue += 1;
        $scope.determinateValue2 += 1.5;
        if($scope.determinateValue > 100) {
            $scope.determinateValue = 30;
            $scope.determinateValue2 = 30;
        }
    }, 100, 0, true);
});