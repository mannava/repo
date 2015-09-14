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
        $scope.topTenSeclections = {};
        $scope.bottomTenMissedSeclections = {};
        $scope.topTenMissedConversions = {};

        topTen.then(function (res) {
                var topTen = res.data.coursa_store_summary;
                $scope.topTenSeclections.data = topTen.Top_10_Trafficked_Items;
                $scope.bottomTenMissedSeclections.data = topTen.Bottom_10_Trafficked_Items;
                $scope.topTenMissedConversions.data = topTen.Top_10_Missed_Conversions;

            }
            , function (err) {

            });

        //Top 10 Trafficked Product
        $scope.topTenSeclections = {
            enableRowSelection: true,
            enableFiltering: true,
            enableRowHeaderSelection: true,
            enableColumnMenus: false,
            enableSelectAll: true,
            multiSelect: true,
            modifierKeysToMultiSelect: false
        };

        $scope.topTenSeclections.onRegisterApi = function (gridApi) {
            $scope.gridApi = gridApi;
            gridApi.selection.on.rowSelectionChanged($scope, function (rows) {
                $scope.markers = gridApi.selection.getSelectedRows();
                var obj = {};
                obj.markers = $scope.markers;
                $scope.$emit('selectedGridRows',obj);
            });
        }
        //Bottom 10 Trafficked Product

        $scope.bottomTenMissedSeclections = {
            enableRowSelection: true,
            enableFiltering: true,
            enableRowHeaderSelection: true,
            enableColumnMenus: false,
            enableSelectAll: true,
            multiSelect: true,
            modifierKeysToMultiSelect: false
        };

        $scope.bottomTenMissedSeclections.onRegisterApi = function (gridApi) {
            $scope.gridApi = gridApi;
            gridApi.selection.on.rowSelectionChanged($scope, function (rows) {
                $scope.markers = gridApi.selection.getSelectedRows();
                var obj = {};
                obj.markers = $scope.markers;
                obj.img = "http://maps.google.com/mapfiles/kml/paddle/ylw-circle.png";
                $scope.$emit('selectedGridRows',obj);
            });
        }
        //Top 10 Missed Conversion Categories

        $scope.topTenMissedConversions = {
            enableRowSelection: true,
            enableFiltering: true,
            enableRowHeaderSelection: true,
            enableColumnMenus: false,
            enableSelectAll: true,
            multiSelect: true,
            modifierKeysToMultiSelect: false
        };

        $scope.topTenMissedConversions.onRegisterApi = function (gridApi) {
            $scope.gridApi = gridApi;
            gridApi.selection.on.rowSelectionChanged($scope, function (rows) {
                $scope.markers = gridApi.selection.getSelectedRows();
                var obj = {};
                obj.markers = $scope.markers;
                obj.img = "http://maps.google.com/mapfiles/kml/paddle/grn-circle.png";
                $scope.$emit('selectedGridRows',obj);
            });
        }

        $scope.topTenSeclections.columnDefs = [
            {name: 'Order', width: '10%'},
            {name: 'Dwell Time', width: '20%'},
            {name: 'product_name', width: '20%'},
            {name: 'product_category', width: '25%'},
            {name: 'latlong', width: '25%'}
        ];

        $scope.bottomTenMissedSeclections.columnDefs = [
            {name: 'Order', width: '10%'},
            {name: 'Dwell Time', width: '20%'},
            {name: 'product_name', width: '20%'},
            {name: 'product_category', width: '25%'},
            {name: 'latlong', width: '25%'}
        ];

        $scope.topTenMissedConversions.columnDefs = [
            {name: 'Order', width: '10%'},
            {name: 'Dwell Time', width: '20%'},
            {name: 'product_name', width: '20%'},
            {name: 'product_category', width: '25%'},
            {name: 'latlong', width: '25%'}
        ];

    });
