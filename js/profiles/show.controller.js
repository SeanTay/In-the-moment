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
  this.profile = ProfileFactory.get({id: $stateParams.id});
  this.story = ProfileFactory.get({id: $stateParams.id});
}

function StoriesShowFunction(){
  console.log("stories")
}



}())
