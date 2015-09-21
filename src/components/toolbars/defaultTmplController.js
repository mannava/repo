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
            $scope.$watch('selectedDates', function() {
                $rootScope.$broadcast('selectedDates', $scope.selectedDates);
            });
        }

        $scope.enableGet = function(){
            //if($scope.selectedDates > 2)
            //$scope.getdataBtn.ng-disabled= false;
            //$scope.getdataBtn.enabled = true;
            //$scope.getdataBtn.ngClass = ".enableGet";

        }
    });