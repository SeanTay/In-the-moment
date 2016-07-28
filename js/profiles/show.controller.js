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
    var vm = this; // NHO: recommend staying consistent with style
    vm.profile = ProfileFactory.get({id: $stateParams.id }); // NHO: would recommend setting profile
    // as a property inside a promise to help avoid issues with asynchronicity

    vm.stories =  StoryFactory.query({profile_id: $stateParams.id}) // NHO: would recommend setting stories
    // as a property inside a promise to help avoid issues with asynchronicity

    vm.story = new StoryFactory();

    vm.create = function(){
      vm.story.profile_id = $stateParams.id // NHO: is this line necessary?
      vm.story.$save({profile_id: $stateParams.id}).then(function(){
        // NHO: coud be a good idea to reset vm.story
        $state.go("ProfileShow", {}, {reload:true});
      })
    }

    // NHO: reminder to remove unused / commented out code
    // this.create = function(){
    //   this.story.$save({profie_id: $stateParams.id}).then(function(){
    //     $state.go("ProfileShow", {}, {reload:true});
    //   })
    // }

    ProfileFactory.query().$promise.then(function(profiles){
      // NHO: since you are using this code block more than once, you could move this to a method in your factory
      var RandomIndex =  Math.floor(Math.random()*profiles.length)
      vm.nextpage = profiles[RandomIndex]
    })


    this.update = function(story){
      story.$update({profile_id: $stateParams.id, id: story.id}).then(function(){
        $state.go("ProfileShow", {id: $stateParams.id},{reload:true})
      })
    }

    this.destroy = function(story){
      this.story.$delete({profile_id: $stateParams.id,id: story.id}).then(function(){
        $state.go("ProfileShow",{id: $stateParams.id},{reload:true})
      })
    }
  }

}())
