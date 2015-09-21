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
    controller('store-map-controller', function ($scope, $rootScope, storeService) {

        $scope.zoom = 19;
        $scope.imgUrl = 'app/stores/Target_SJ_overlay.png';
        $scope.imgBounds = [[37.303938, -121.866606], [37.305238, -121.864969]];
        $scope.map;
        $scope.markers = {};
        $scope.startDate, $scope.endDate;
        var mapData;


        $rootScope.$on('selectedDates', function (event, data) {

            $scope.startDate = new Date(data[0]).toDateString();
            $scope.endDate = new Date(data[data.length-1]).toDateString();
            mapData = storeService.getHeatMapData(data[0], data[data.length-1]);
            var summary = storeService.getStoreSummary(data[0], data[data.length-1]);

            summary.then(function(res){
                $scope.storeSummary = res.data;
                $scope.imgUrl = res.data.coursa_store_header.store_map;
                var lats = JSON.parse($scope.storeSummary.coursa_store_header.lat);
                var lngs = JSON.parse($scope.storeSummary.coursa_store_header.lng);
                var lat = ((lats[0] + lats[1])/2).toFixed(6);
                var lng = ((lngs[0] + lngs[1])/2).toFixed(6);
                $scope.imgBounds =[[lats[0], lngs[0]], [lats[1], lngs[1]]];
                $scope.center = lat +", "+lng;
                $scope.store_coverage = $scope.storeSummary.coursa_store_summary.store_coverage;
                $scope.product_conversion = $scope.storeSummary.coursa_store_summary.product_conversion;
                $scope.customer_conversion = $scope.storeSummary.coursa_store_summary.customer_conversion;
                $scope.max_checkout = $scope.storeSummary.coursa_store_summary.max_checkout_time;
                $scope.min_checkout = $scope.storeSummary.coursa_store_summary.min_checkout_time;

            });

            var heatmap;
            $scope.$on('mapInitialized', function (event, map) {
                mapData.then(function (res) {
                    $scope.heatMapData = res.data.storeheatmap;
                    $scope.map = map;
                    heatmap = new google.maps.visualization.HeatmapLayer({
                        data: $scope.getPoints(),
                        map: map
                    });

                }, function (error) {

                });
            })

            $scope.getPoints = function () {
                var i = 0, lat = 0, lng = 0, wt = 0, arr = [], obj, temp;

                for (var i = 0; i < $scope.heatMapData.length; i++) {
                    temp = $scope.heatMapData[i].split(",");
                    lat = temp[0];
                    lng = temp[1];
                    wt = temp[2];
                    if (wt >= 1) {
                        var loc = new google.maps.LatLng(lat, lng);
                        obj = {location: loc, weight: wt};
                        arr.push(obj);
                    }
                }
                return arr;
            }
        });

        google.maps.event.addDomListener(window, "resize", function () {
            google.maps.event.trigger($scope.map, "resize");
            var latLong = $scope.center.split(",")
            $scope.map.setCenter(new google.maps.LatLng(latLong[0], latLong[1]));
        });

        $scope.$on('selectedGridRows', function (event, data) {
            $scope.markers = data.markers;
            console.log($scope.markers);
            $scope.img = data.img;
        });
    });
