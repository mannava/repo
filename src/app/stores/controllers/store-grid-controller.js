/**
 * Created by bmannava on 9/8/15.
 */
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
    controller('store-grid-controller', function ($scope, storeService) {

        var topTen = storeService.getStoreData();

         /*topTen.then(function (res) {
         var topTen = res.data.coursa_store_summary;
         console.log(topTen);
         $scope.topTenSeclections = topTen.Top_10_Trafficked_Items;
         $scope.topTenMissedConversions= topTen.Top_10_Missed_Conversions;
         $scope.bottomTenMissedSeclections  = topTen.Bottom_10_Trafficked_Items;

         }
         , function (err) {

         });*/

        $scope.topTenSeclections = {};

        $scope.topTenSeclections.columnDefs = [
            {name: 'Order', width: '15%'},
            {name: 'Dwell Time', width: '20%'},
            {name: 'product_name', width: '20%'},
            {name: 'product_category', width: '25%'},
            {name: 'latlong', width: '20%'}
        ];

        $scope.topTenMissedConversions = {};

        $scope.topTenMissedConversions.columnDefs = [
            {name: 'Order', width: '15%'},
            {name: 'Dwell Time', width: '20%'},
            {name: 'product_name', width: '20%'},
            {name: 'product_category', width: '25%'},
            {name: 'latlong', width: '20%'}
        ];
        $scope.bottomTenMissedSeclections = {};

        $scope.bottomTenMissedSeclections.columnDefs = [
            {name: 'Order', width: '15%'},
            {name: 'Dwell Time', width: '20%'},
            {name: 'product_name', width: '20%'},
            {name: 'product_category', width: '25%'},
            {name: 'latlong', width: '20%'}
        ];

        var topTen = storeService.getStoreData();

        topTen.then(function (res) {
                var topTen = res.data.coursa_store_summary;
                $scope.topTenSeclections.data = topTen.Top_10_Trafficked_Items;
                $scope.topTenMissedConversions.data = topTen.Top_10_Missed_Conversions;
                $scope.bottomTenMissedSeclections.data = topTen.Bottom_10_Trafficked_Items;

            }
            , function (err) {
            });

    });
