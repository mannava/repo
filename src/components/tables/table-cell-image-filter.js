'use strict';

/**
 * @ngdoc filter
 * @name tableImage
 * @module Coursa
 * @kind filter
 *
 * Creates a div with an image backround
 */
 angular.module('Coursa')
 .filter('tableImage', function ($sce) {
    return function (value) {
        return $sce.trustAsHtml('<div style=\"background-image: url(\'' + value + '\')\"/>');
    };
});