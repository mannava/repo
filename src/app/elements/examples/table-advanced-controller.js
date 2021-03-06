/**
 * @ngdoc function
 * @name TablesAdvancedController
 * @module CoursaElements
 * @kind function
 *
 * @description
 *
 * Handles advanced tables page
 */

(function() {
    'use strict';

    angular
        .module('CoursaElements')
        .controller('TablesAdvancedController', Controller);

    /* @ngInject */
    function Controller($scope, $timeout, $q, Github) {
        var vm = this;
        vm.query = {
            filter: '',
            limit: '10',
            order: '-id',
            page: 1
        };
        vm.selected = [];
        vm.filter = {
            options: {
                debounce: 500
            }
        };
        vm.getUsers = getUsers;
        vm.removeFilter = removeFilter;

        activate();

        ////////////////

        function activate() {
            var bookmark;
            $scope.$watch('vm.query.filter', function (newValue, oldValue) {
                if(!oldValue) {
                    bookmark = vm.query.page;
                }

                if(newValue !== oldValue) {
                    vm.query.page = 1;
                }

                if(!newValue) {
                    vm.query.page = bookmark;
                }

                vm.getUsers();
            });
        }

        function getUsers() {
            Github.getUsers(vm.query).then(function(users){
                vm.users = users.data;
            });
        }

        function removeFilter() {
            vm.filter.show = false;
            vm.query.filter = '';

            if(vm.filter.form.$dirty) {
                vm.filter.form.$setPristine();
            }
        }
    }
})();