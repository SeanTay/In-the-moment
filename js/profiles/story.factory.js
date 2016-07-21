"use strict";

(function(){
  angular
  .module("profiles")
  .factory("StoryFactory", ["$resource", StoryFactoryFunction]);

  function StoryFactoryFunction($resource){
    return $resource("https://group7-datingapp.herokuapp.com/profiles/:profile_id/stories/:id", {}, {
      update: { method: "PUT" }
    });
  }


}());
