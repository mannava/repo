'use strict';

/**
 * @ngdoc function
 * @name FooterController
 * @module Coursa
 * @kind function
 *
 * @description
 *
 * Handles the footer view
 */
angular.module('Coursa').
controller('FooterController', function ($scope, APP) {
    $scope.footerInfo = {
        appName: APP.name,
        appLogo: APP.logo,
        date: new Date(),
        version: APP.version
    };
});