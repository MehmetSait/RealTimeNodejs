/**
 * Created by mac on 16.07.2016.
 */
angular.module('stroyService', [])

.factory('Story',function($http){

        var storyFactory = {};

        storyFactory.allStories = function(){
            return $http.get('/api/all_stories');
        }

        storyFactory.create =function(storyData){
            return $http.post('/api',storyData);
        }
        storyFactory.all = function(){
            return $http.get('/api');
        }
        return storyFactory;



    })
.factory('socketio', function($rootScope){
        var socket = io.connect();
        return {
            on: function(eventName, callback){
                socket.on(eventName, function(){
                    var args = arguments;
                    $rootScope.$apply(function(){
                        if (callback) {
                            callback.apply(socket, args);
                        }
                    });
                });
            },
            emit: function(eventName, data, callback){
                socket.on(eventName, data, function(){
                    var args = arguments;
                    $rootScope.apply(function(){
                        if (callback) {
                            callback.apply(socket, args);
                        }
                    });
                });
            }
        };
    });