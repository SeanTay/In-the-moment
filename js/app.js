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
    .state("WelcomePage", {
      url: "",
      templateUrl: "welcome.html"
    })
    .state("ProfileShow", {
      url: "/profiles/:id",
      templateUrl: "js/profiles/show.html",
      controller: "ProfileShowController",
      controllerAs: "ProfileShowViewModel"
    })
  };

}());
