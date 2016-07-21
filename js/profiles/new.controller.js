"use strict";

(function(){
  angular
    .module( "profiles" )
    .controller( "ProfileNewController", [
      "ProfileFactory",
      ProfileNewControllerFunction
    ]);

    function ProfileNewControllerFunction(ProfileFactory){

      this.profile = new ProfileFactory();


      this.create = function(){
        this.profile.$save()
      }
    }
}());
