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
  $stateProvider
    .state("ShowController", {
      url: "/profile/:id",
      templateUrl: "js/profiles/show.html",
      controller: "ProfileShowController",
      controllerAs: "ProfileShowViewModel"
    })
  };

}())
