/**
 * Created by bmannava on 9/8/15.
 */
angular.module('CoursaStores').factory('storeService', function($http) {

    var store = {};

    store.getHeatMapData = function(stDate, endDate) {
        return $http.get('http://52.3.65.137:8090/coursaretail/getstoreheatmap/2281/'+stDate+'/'+endDate);
    };

    store.geConversions = function(topConv,stDate, endDate){
        return $http.get('http://52.3.65.137:8090/coursaretail/getstoreproductsummary/'+topConv+'/10/2281/'+stDate+'/'+endDate);
    }

    store.getStoreSummary = function(stDate, endDate){
        return $http.get("http://52.3.65.137:8090/coursaretail/getstoresummary/2281/"+stDate+'/'+endDate);
    }

    return store;

});