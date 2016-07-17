/**
 * Created by mac on 4.06.2016.
 */
angular.module('MyApp',['appRoutes', 'mainCtrl' , 'authService', 'userCtrl', 'userService','storyCtrl','stroyService' ,'reverseDirective'])

.config(function($httpProvider){
        $httpProvider.interceptors.push('AuthInterceptor');
    })