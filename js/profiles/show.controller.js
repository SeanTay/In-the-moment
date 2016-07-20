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
        $state.go("ProfileShow", {}, {reload:true});
      })
    }

    var vm= this;
    ProfileFactory.query().$promise.then(function(profiles){
      var RandomIndex =  Math.floor(Math.random()*profiles.length)
      vm.nextpage = profiles[RandomIndex]
      console.log("nextpage")
    })
  }

}())
