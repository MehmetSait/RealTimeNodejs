/**
 * Created by mac on 17.07.2016.
 */
angular.module('reverseDirective', [])

.filter('reverse', function(){
        return function(items) {
            return items.slice().reverse();
        }
    });
