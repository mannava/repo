/**
 * Created by bmannava on 9/8/15.
 */
angular.module('CoursaStores').factory('storeService', function($http) {

    var store = {};

    var heatMapData = $http.get('app/stores/data/heatmap.json').success(function(response) {
        return response.data;
    });
    var storeData = $http.get('app/stores/data/CoursaStore.json').success(function(response) {
        return response.data;
    });


    store.getHeatMapData = function() {
        return heatMapData;
    };

    store.getStoreData = function() {
        return storeData;
    };

    return store;

});