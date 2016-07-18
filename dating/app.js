"use strict";

(function(){
angular
  .module("datingApp", [
    "ui.router"
  ])
  .config("x",[
    "$stateProvider",
    Router
  ])

function Router($stateProvider){
  $stateProvider
    .state("indexController", {
      url:"/profiles",
      templateUrl: "dating/js/index2.html",
      controller: "datingIndexController",
      controllerAs: "datingIndexViewModel"
    })
  };

}())
