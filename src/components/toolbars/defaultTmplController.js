/**
 * Created by bmannava on 9/20/15.
 */
angular.module('Coursa')
    .controller('defaultTmplController', function ($scope, $rootScope) {
        $scope.activeDate;
        $scope.selectedDates = [new Date().setHours(0, 0, 0, 0)];
        $scope.status = true;

        $scope.dynamicPopover = {
            content: 'Hello, World!',
            templateUrl: 'app/stores/partials/datePopover.html',
            title: 'Title'
        }; 

        $scope.watchDates= function(){
            $scope.$watch('selectedDates', function() {
                $rootScope.$broadcast('selectedDates', $scope.selectedDates.sort());
            });
        }

        $scope.enableGet = function(){
            $scope.status =  ($scope.selectedDates.length > 2) ? false: true;
        }
    });