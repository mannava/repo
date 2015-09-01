'use strict';

/**
 * @ngdoc function
 * @name SidebarLeftController
 * @module Coursa
 * @kind function
 *
 * @description
 *
 * Handles the left sidebar
 */
angular.module('Coursa').
controller('SidebarLeftController', function ($scope, $timeout, $mdSidenav, APP) {
    $scope.sidebarInfo = {
        appName: APP.name,
        appLogo: APP.logo
    };
    // add a watch for when the url location changes
    $scope.$on('$locationChangeSuccess', function() {
        // location has changed so close menu
        $timeout(function(){
            $mdSidenav('left').close();
        });
    });
});