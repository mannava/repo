/**
 * Created by bmannava on 9/21/15.
 */
angular.module('CoursaStores').directive('popoverElem', function(){
    return{
        link: function(scope, element, attrs) {
            element.on('click', function(){
                element.addClass('trigger');
            });
        }
    };
});