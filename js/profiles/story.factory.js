"use strict";

(function(){
  angular
  .module("profiles") // NHO: if you had more resources related to "stories" might be a good idea to break it out into a seperate sub-module
  .factory("StoryFactory", ["$resource", StoryFactoryFunction]);

  function StoryFactoryFunction($resource){
    return $resource("https://group7-datingapp.herokuapp.com/profiles/:profile_id/stories/:id", {}, {
      update: { method: "PUT" }
    });
  }


}());
