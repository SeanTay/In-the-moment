"use strict";

(function(){
  angular
  .module("profiles")
  .factory("StoryFactory", ["$resource", StoryFactoryFunction]);

  function StoryFactoryFunction($resource){
    return $resource("http://localhost:3000/profiles/:profile_id/stories/:id", {}, {
      update: { method: "PUT" }
    });
  }


}());
