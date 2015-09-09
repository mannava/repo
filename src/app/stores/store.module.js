'use strict';

/**
 * @ngdoc module
 * @name Coursa.stores
 * @description
 *
 * The `Coursa.stores` module handles the most common dashboard pages.
 */
angular.module('CoursaStores', [])
.config(function ($translatePartialLoaderProvider, $stateProvider) {
    $translatePartialLoaderProvider.addPart('app/stores');

    $stateProvider
    .state('admin-panel.default.store-analytics', {
        url: '/stores/analytics',
        templateUrl: 'app/stores/store-analytics.tmpl.html',
        controller: 'StoreController',
    })
})
.run(function(SideMenu) {
    SideMenu.addMenu({
        name: 'MENU.STORES.STORES',
        icon: 'icon-shopping-cart',
        type: 'dropdown',
        priority: 2.1,
        children: [{
            name: 'MENU.STORES.STORE',
            state: 'admin-panel.default.store-analytics',
            type: 'link',
        }]
    });
});
