"use strict";

(function(){
angular
  .module("datingApp", [
    "ui.router",
    "profiles"
  ])
  .config(["$stateProvider",
  Router])

function Router($stateProvider){
  console.log("hi")
  $stateProvider
    .state("ShowController", {
      url: "/profiles/:id",
      templateUrl: "js/profiles/show.html",
      controller: "ProfileShowController",
      controllerAs: "ProfileShowViewModel"
    })
  };

}())
