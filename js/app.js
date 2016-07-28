"use strict";

(function(){
  angular
  .module("datingApp", [
    "ui.router",
    "ng-token-auth",
    "profiles"
  ])
  .config(["$stateProvider",
    RouterFunction
  ])
  .config(["$authProvider", AuthConfigFunction])

  function AuthConfigFunction($authProvider) {
     $authProvider.configure({
       apiUrl: "https://group7-datingapp.herokuapp.com"
     });
  }

  function RouterFunction($stateProvider){
    //  NHO: one piece of low hanging fruit is making sure to have a catch all for if a url does not match a state
    $stateProvider
      .state("signin", {
        url: "/signin",
        templateUrl: "js/users/signin.html",
        controller: "SessionsController",
        controllerAs: "SessionsViewModel"
      })
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
      .state("signout", {
        url: "/signout",
        templateUrl: "js/users/signout.html",
        controller: "SessionsController",
        controllerAs: "SessionsViewModel"
      })
      .state("signup", {
        url: "/signup",
        templateUrl: "js/users/signup.html",
        controller: "SessionsController",
        controllerAs: "SessionsViewModel"
      });
  };
}());
