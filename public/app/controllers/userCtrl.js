/**
 * Created by mac on 19.06.2016.
 */
angular.module('userCtrl',['userService'])

.controller('UserController',function(User){
        var vm=this;
        vm.loggedIn = "Merhaba ben sait";
        vm.processing=true;
        User.all()
            .success(function(data){
                vm.users=data;
            })
    })
.controller('UserCreateController',function(User,$location,$window){
        var vm=this;
        vm.signupUser=function(){
            vm.message='';
            User.create(vm.userData)
                .then(function(response){
                    vm.userData={};
                    vm.message=response.data.message;
                    $window.localStorage.setItem('token',response.data.token);
                    $location.path('/');
                })
        }
    });