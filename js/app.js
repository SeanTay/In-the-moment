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
      templateUrl: "welcome.html",
      controller: "WelcomeController",
      controllerAs: "WelcomeControllerViewModel"
    })
  .state("ProfileNew", {
    url: "/profiles/new",
    templateUrl: "js/profiles/new.html",
    controller: "ProfileNewController",
    controllerAs: "ProfileNewViewModel"
    })
    .state("ProfileEdit", {
      url: "/profiles/:id/edit",
      templateUrl: "js/profiles/edit.html",
      controller: "ProfileEditController",
      controllerAs: "ProfileEditViewModel"
    })
    .state("ProfileShow", {
      url: "/profiles/:id",
      templateUrl: "js/profiles/show.html",
      controller: "ProfileShowController",
      controllerAs: "ProfileShowViewModel"
    })
};
}());
