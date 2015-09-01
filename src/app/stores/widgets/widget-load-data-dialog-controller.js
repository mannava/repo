'use strict';

/**
 * @ngdoc function
 * @name WidgetLoadDataDialogController
 * @module CoursaStores
 * @kind function
 *
 * @description
 *
 * Handles actions in compose dialog
 */

angular.module('CoursaStores')
.controller('WidgetLoadDataDialogController', function ($scope, $mdDialog, data) {
    $scope.data = data;

    $scope.closeDialog = function() {
        $mdDialog.cancel();
    };
});