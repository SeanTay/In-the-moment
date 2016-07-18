"use strict";

(function(){
angular
  .module("datingApp", [
    "ui.router",
    "profiles"
  ])
  .config("x",[
    "$stateProvider",
    Router
  ])

function Router($stateProvider){
  $stateProvider
    .state("IndexController", {
      url:"/profiles",
      templateUrl: "js/profiles/index2.html",
      controller: "ProfileIndexController",
      controllerAs: "ProfileIndexViewModel"
    })
    .state("ShowController", {
      url: "/profiles/:id",
      templateUrl: "js/profiles/show.html",
      controller: "ProfileShowController",
      controllerAs: "ProfileShowViewModel"
    })
  };

}())
