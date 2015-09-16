/**
 * Created by bmannava on 9/16/15.
 */
angular.module('Coursa').
    controller('SidebarRightController', function ($scope, $http, $mdSidenav, $state, API_CONFIG) {

        $scope.openDate = function(){
            var startDate;
            var endDate     ;
            $scope.datePicker = {}
            $scope.datePicker.date = {startDate: null, endDate: null};
        }

    })