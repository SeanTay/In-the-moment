"use strict";

(function(){
  angular
  .module("profiles")
  .factory("StoryFactory", ["$resource", StoryFactoryFunction]);

  function StoryFactoryFunction($resource){
    return $resource("http://localhost:3000/profiles/:id/stories", {}, {
      update: { method: "PUT" }
    });
  }


}());
