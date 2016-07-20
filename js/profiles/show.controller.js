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

    this.stories =  StoryFactory.query({profile_id: $stateParams.id})

    this.story = new StoryFactory();

    this.create = function(){
      this.story.profile_id = $stateParams.id
      this.story.$save({profile_id: $stateParams.id}).then(function(){
        $state.go("ProfileShow", {}, {reload:true});
      })
    }

    // this.create = function(){
    //   this.story.$save({profie_id: $stateParams.id}).then(function(){
    //     $state.go("ProfileShow", {}, {reload:true});
    //   })
    // }

    var vm= this;
    ProfileFactory.query().$promise.then(function(profiles){
      var RandomIndex =  Math.floor(Math.random()*profiles.length)
      vm.nextpage = profiles[RandomIndex]
      console.log("nextpage")
    })


    this.update = function(story){
      story.$update({profile_id: $stateParams.id,id: story.id}).then(function(){
        $state.go("ProfileShow",{id: $stateParams.id},{reload:true})
      })
    }

    this.destroy = function(story){
      this.story.$delete({profile_id: $stateParams.id,id: story.id}).then(function(){
        console.log("delete function working")
        $state.go("ProfileShow",{id: $stateParams.id},{reload:true})
      })

    }
  }

}())
