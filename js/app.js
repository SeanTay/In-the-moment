"use strict";

(function(){
angular
  .module("datingApp", [
    "ui.router",
    "profiles"
  ])
  .config(["$stateProvider",
<<<<<<< HEAD
    RouterFunction
  ])
=======
  Router])
>>>>>>> 99d7a37d504a9220e963c8c6b2a9ad6f7adc285e

function RouterFunction($stateProvider){
  $stateProvider
    .state("ShowController", {
      url: "/profile/:id",
      templateUrl: "js/profiles/show.html",
      controller: "ProfileShowController",
      controllerAs: "ProfileShowViewModel"
    })
  };

}());
