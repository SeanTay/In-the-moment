"use strict";

(function(){
angular
  .module("profiles")
  .factory("ProfileFactory", ["$resource", ProfileFactoryFunction ]);

function ProfileFactoryFunction($resource){
  return $resource("http://localhost:3000/profiles/:id", {}, {
        update: { method: "PUT" }
  });
}


}());
