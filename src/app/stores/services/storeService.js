/**
 * Created by bmannava on 9/8/15.
 */
angular.module('CoursaStores').factory('storeService', function($http) {

    var store = {};

    //var heatMapData = $http.get('http://52.3.65.137:8090/coursaretail/getstoreheatmap/2281/1440349200/1440396000');

    var storeData = $http.get('app/stores/data/CoursaStore.json').success(function(response) {
        return response.data;
    });


    store.getHeatMapData = function() {
        return /*$http.get('http://52.3.65.137:8090/coursaretail/getstoreheatmap/2281/1440349200/1440396000');*/
    };

    store.geConversions = function(topConv){
        return /*$http.get('http://52.3.65.137:8090/coursaretail/getstoreproductsummary/'+topConv+'/10/2281/1440349200/1440396000');*/
    }

    store.getStoreSummary = function(){
        return /*$http.get("http://52.3.65.137:8090/coursaretail/getstoresummary/2281/1440349200/1440396000");*/
    }

    return store;

});