"use strict";

(function(){
  angular
    .module( "profiles" )
    .controller( "ProfileEditController", [
      "ProfileFactory",
      "$stateParams",
      "$state",
      ProfileEditControllerFunction
    ]);
    // NHO: how could you use Auth to lock down this controller / state to anuauthorized / unauthenticated users?
    function ProfileEditControllerFunction(ProfileFactory, $stateParams, $state){
      this.profile = ProfileFactory.get({id: $stateParams.id})


      this.update = function(){
        this.profile.$update({id: $stateParams.id}).then(function(){
          $state.go("ProfileShow", { id: $stateParams.id }, { reload: true })
        })
      }

      this.destroy = function(){
        this.profile.$delete({id: $stateParams.id}).then(function(){
          $state.go("WelcomePage", {}, { reload: true })
        })

      }
    }
}());
