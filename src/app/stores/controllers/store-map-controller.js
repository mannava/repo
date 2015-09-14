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
    controller('store-map-controller', function ($scope, storeService) {

        $scope.center = "37.304588, -121.865787";
        $scope.zoom = 19;
        $scope.imgUrl = 'app/stores/Target_SJ_overlay.png';
        $scope.imgBounds = [[37.303938, -121.866606], [37.305238, -121.864969]];
        $scope.map;
        $scope.markers = {};

        var heatmap;
        $scope.$on('mapInitialized', function (event, map) {
            $scope.map = map;
            heatmap = new google.maps.visualization.HeatmapLayer({
                data: $scope.getPoints(),
                map: map
            });
        });

        google.maps.event.addDomListener(window, "resize", function () {
            google.maps.event.trigger($scope.map, "resize");
            var latLong = $scope.center.split(",")
            $scope.map.setCenter(new google.maps.LatLng(latLong[0], latLong[1]));
        });


        var mapData = storeService.getHeatMapData();
        mapData.then(function (res) {
            var heatMapData = res.data;
            $scope.getPoints = function () {
                var i = 0, lat = 0, lng = 0, wt = 0, arr = [], obj;

                for (var i = 0; i < heatMapData.length; i++) {
                    lat = heatMapData[i][0];
                    lng = heatMapData[i][1];
                    wt = heatMapData[i][2];
                    if (wt >= 1) {
                        var loc = new google.maps.LatLng(lat, lng);
                        obj = {location: loc, weight: wt};
                        arr.push(obj);
                    }
                }
                return arr;
            }
        }, function (error) {

        });

        $scope.$on('selectedGridRows', function (event, data) {
            console.log(data, "data", data.img);
            $scope.markers = data.markers;
            $scope.img = data.img;
        });



    });
