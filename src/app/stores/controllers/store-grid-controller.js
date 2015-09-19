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

        $scope.topTenSeclections = {};
        $scope.bottomTenMissedSeclections = {};
        $scope.topTenMissedConversions = {};

        $scope.topTenSeclections = storeService.geConversions("TOP_PC");
        $scope.bottomTenMissedSeclections = storeService.geConversions("MC");
        $scope.topTenMissedConversions = storeService.geConversions("LOW_PC");

        $scope.topTenSeclections.then(function(res){
            $scope.topTenSeclections.data = res.data.coursa_product_list;
        });

        $scope.bottomTenMissedSeclections.then(function(res){
            $scope.bottomTenMissedSeclections.data = res.data.coursa_product_list;
        });

        $scope.topTenMissedConversions.then(function(res){
            $scope.topTenMissedConversions.data = res.data.coursa_product_list;
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
                console.log($scope.markers[0].latlong)
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
            {name: 'order', width: '10%'},
            {name: 'time', width: '15%'},
            {name: 'sku', width: '15%'},
            {name: 'product_category', width: '30%'},
            {name: 'product_name', width: '30%'},
            {name: 'latlong', width: '0%'}
        ];

        $scope.bottomTenMissedSeclections.columnDefs = [
            {name: 'order', width: '10%'},
            {name: 'time', width: '15%'},
            {name: 'sku', width: '15%'},
            {name: 'product_category', width: '30%'},
            {name: 'product_name', width: '30%'},
            {name: 'latlong', width: '0%'}
        ];

        $scope.topTenMissedConversions.columnDefs = [
            {name: 'order', width: '10%'},
            {name: 'time', width: '15%'},
            {name: 'sku', width: '15%'},
            {name: 'product_category', width: '30%'},
            {name: 'product_name', width: '30%'},
            {name: 'latlong', width: '0%'}
        ];

    });
