"use strict";

(function(){
  angular
  .module("profiles")
  .controller("ProfileShowController", [
    "ProfileFactory",
    "StoryFactory",
    "$stateParams",
    "$state",
    ProfileShowFunction
  ])

  function ProfileShowFunction(ProfileFactory, StoryFactory, $stateParams, $state){
    console.log("profile function");
    this.profile = ProfileFactory.get({id: $stateParams.id });

    this.stories = StoryFactory.query({id: $stateParams.id});

    this.story = new StoryFactory();

    this.create = function(){
      this.story.$save({id: $stateParams.id}).then(function(){
        console.log('saving')
        $state.go("ProfileShow", {}, {reload:true});
      })
    }
  }


}())
