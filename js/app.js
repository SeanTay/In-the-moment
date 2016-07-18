"use strict";

(function(){
angular
  .module("datingApp", [
    "ui.router",
    "profiles"
  ])
  .config(["$stateProvider",
    RouterFunction
  ])

function RouterFunction($stateProvider){
  $stateProvider
    .state("ProfileShow", {
      url: "/profiles/:id",
      templateUrl: "js/profiles/show.html",
      controller: "ProfileShowController",
      controllerAs: "ProfileShowViewModel"
    })
    .state("profileNew", {
      url: "/profiles/new",
      templateUrl: "js/profiles/new.html",
      controller: "ProfileNewController",
      controllerAs: "ProfileNewViewModel"
  };
}
}());
