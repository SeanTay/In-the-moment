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
    .state("StoriesNew", {
      url: "/profiles/:profile_id/stories/new",
      templateUrl: "js/profiles/stories.new.controller.js",
      controller: "StoriesNewController",
      controllerAs: "StoriesNewViewModel"
    })
  .state("ProfileNew", {
    url: "/profiles/new",
    templateUrl: "js/profiles/new.html",
    controller: "ProfileNewController",
    controllerAs: "ProfileNewViewModel"
  })
};
}());
