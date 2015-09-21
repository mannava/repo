/**
 * Created by bmannava on 9/20/15.
 */
angular.module('Coursa')
    .controller('defaultTmplController', function ($scope, $rootScope) {
        $scope.activeDate;
        $scope.selectedDates = [new Date().setHours(0, 0, 0, 0)];

        $scope.dynamicPopover = {
            content: 'Hello, World!',
            templateUrl: 'app/stores/partials/datePopover.html',
            title: 'Title'
        };

        $scope.watchDates= function(){
            $rootScope.$watch('selectedDates', function(newVal, oldVal) {
                console.log($scope.selectedDates);
                $scope.$broadcast('selectedDates', $scope.selectedDates);
            });
        }
    });