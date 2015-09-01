'use strict';

/**
 * @ngdoc function
 * @name ListsController
 * @module CoursaElements
 * @kind function
 *
 * @description
 *
 * Handles dialog element page
 */
angular.module('CoursaElements').
controller('ListsController', function ($scope, emails) {
    $scope.emails = emails.data.splice(0, 5);
});