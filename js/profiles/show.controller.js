"use strict";

(function(){
angular
  .module("profiles")
  .controller("ProfileShowController", [
    "$stateParams",
    ProfilesShowFunction
  ])
function ProfilesShowFunction($stateParams){
  console.log("show page")

}


}())
