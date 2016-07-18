"use strict";

(function(){
angular
  .module("profiles")
  .controller("ProfileShowController", [
    "ProfileFactory",
    "$stateParams",
    ProfileShowFunction
  ])

function ProfileShowFunction(ProfileFactory, $stateParams){
  console.log("profile function");
  this.profile = ProfileFactory.get({id: $stateParams.id});
      console.log(this.profile);
    console.log ("{{ProfileShowViewModel.profile.name}}")

}


}())
