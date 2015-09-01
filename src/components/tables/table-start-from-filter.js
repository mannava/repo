'use strict';

/**
 * @ngdoc filter
 * @name tableImage
 * @module Coursa
 * @kind filter
 *
 * Used for table pagination
 */
angular.module('Coursa')
.filter('startFrom',function () {
    return function (input, start) {
        start = +start;
        return input.slice(start);
    };
});