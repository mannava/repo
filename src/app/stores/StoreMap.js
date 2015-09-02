/**
 * Created by bmannava on 9/1/15.
 */
'use strict';

/**
 * @ngdoc function
 * @name DashboardServerController
 * @module CoursaStores
 * @kind function
 *
 *
 */
angular.module('CoursaStores').
    controller('StoreMap', function ($scope) {
        var storeMap = angular.element("#storeMap");
        $scope.center = "37.304588, -121.865787";
        $scope.zoom = 18;
        $scope.imgUrl = 'app/stores/Target_SJ_overlay.png'
        $scope.imgBounds = [[37.303938, -121.866606], [37.305238, -121.864969]];
        var heatmap;
        $scope.$on('mapInitialized', function(event, map) {
            heatmap = map.heatmapLayers.foo;
            console.log(heatmap);
        });
        //$scope.getPoints();

        $scope.changeGradient = function () {
            var gradient = [
                'rgba(0, 255, 255, 0)',
                'rgba(0, 255, 255, 1)',
                'rgba(0, 191, 255, 1)',
                'rgba(0, 127, 255, 1)',
                'rgba(0, 63, 255, 1)',
                'rgba(0, 0, 255, 1)',
                'rgba(0, 0, 223, 1)',
                'rgba(0, 0, 191, 1)',
                'rgba(0, 0, 159, 1)',
                'rgba(0, 0, 127, 1)',
                'rgba(63, 0, 91, 1)',
                'rgba(127, 0, 63, 1)',
                'rgba(191, 0, 31, 1)',
                'rgba(255, 0, 0, 1)'
            ]
            heatmap.set('gradient', heatmap.get('gradient') ? null : gradient);
        }

        $scope.changeRadius = function () {
            heatmap.set('radius', heatmap.get('radius') ? null : 5);
        }

        $scope.changeOpacity = function () {
            heatmap.set('opacity', heatmap.get('opacity') ? null : 0.2);
        }



    });
