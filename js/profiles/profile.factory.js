"use strict";

(function(){
  angular
    .module("profiles")
    .factory("ProfileFactory", ["$resource", ProfileFactoryFunction]);

  function ProfileFactoryFunction($resource){
    return $resource("https://group7-datingapp.herokuapp.com/profiles/:id", {}, {
          update: { method: "PUT" }
    });
  }
}());
