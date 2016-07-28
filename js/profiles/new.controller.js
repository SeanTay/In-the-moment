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
        // NHO: could be a good idea to reset this.profile
      }
    }
}());
