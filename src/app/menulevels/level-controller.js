'use strict';

/**
 * @ngdoc function
 * @name LevelController
 * @module Coursa
 * @kind function
 *
 * @description
 *
 * Handles basic Menu Level Template
 */
angular.module('Coursa')
.controller('LevelController', function ($scope, $stateParams) {
    $scope.level = $stateParams.level;
});