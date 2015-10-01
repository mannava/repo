/**
 * Created by bmannava on 9/20/15.
 */
angular.module('Coursa')
    .controller('defaultTmplController', function ($scope, $rootScope) {
        $scope.activeDate;
        $scope.selectedDates = [new Date().setHours(0, 0, 0, 0)];

        var now = moment();
        var today = moment(now._d).unix()* 1000;
        var threeMonthsBackDate = today -  (2629743 * 3 * 1000);


        $scope.selectedDates = [new Date().setHours(0, 0, 0, 0), threeMonthsBackDate];

        $scope.status = true;

        $scope.dynamicPopover = {
            content: '',
            templateUrl: 'app/stores/partials/datePopover.html',
            title: 'Title'
        }; 

        $scope.watchDates= function(){
            $scope.$watch('selectedDates', function() {
                var data = $scope.selectedDates.sort();
                var dateObj = {};
                dateObj.queryStDate = data[0];
                dateObj.queryEndDate = data[data.length-1];
                $rootScope.$broadcast('selectedDates', dateObj);
            });
        }

        $scope.enableGet = function(){
            $scope.status =  ($scope.selectedDates.length > 2) ? false: true;
        }
    });