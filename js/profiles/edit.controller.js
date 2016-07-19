"use strict";

(function(){
  angular
    .module( "profiles" )
    .controller( "ProfileEditController", [
      "ProfileFactory", "$stateParams", "$state",
      ProfileEditControllerFunction
    ]);

    function ProfileEditControllerFunction(ProfileFactory, $stateParams, $state){
      this.profile = ProfileFactory.get({id: $stateParams.id})

      this.update = function(){
        this.profile.$update({id: $stateParams.id}).then(function(){
          $state.go("ProfileShow",{},{reload:true})
        })
      }
    }
}());
