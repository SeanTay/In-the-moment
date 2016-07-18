"use strict";

(function(){
angular
  .module("profiles")
  .controller("ProfileShowController", ["ProfileFactory",
    "$stateParams", "$state", ProfileShowFunction]);

function ProfileShowFunction(ProfileFactory, $stateParams, $state){
  console.log("show page")

}


}())
