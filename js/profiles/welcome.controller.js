"use strict";

(function(){
  angular
    .module( "profiles" )
    .controller( "WelcomeController", ["ProfileFactory", WelcomeControllerFunction])

    function WelcomeControllerFunction(ProfileFactory){
      var vm = this
      ProfileFactory.query().$promise.then(function(profiles){
        var RandomIndex =  Math.floor(Math.random()*profiles.length)
        vm.profile = profiles[RandomIndex]
      })
    }

}());
