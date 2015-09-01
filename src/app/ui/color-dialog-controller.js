'use strict';

/**
 * @ngdoc function
 * @name ColorDialogController
 * @module CoursaUI
 * @kind function
 *
 * @description
 *
 * Handles the colors popup dialog
 */
angular.module('CoursaUI').
controller('ColorDialogController', function ($scope, name, palette, triTheming) {
    $scope.name = name;
    $scope.palette = [];

    $scope.itemStyle = function(palette) {
        return {
            'background-color': triTheming.rgba(palette.value),
            'color': triTheming.rgba(palette.contrast)
        };
    };

    for(var code in palette) {
        $scope.palette.push({
            code: code,
            palette: palette[code]
        });
    }
});