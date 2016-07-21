(function(){
  angular
  .module("datingApp")
  .controller("SessionsController", function($auth,$scope,$state,ProfileFactory){


    ProfileFactory.query().$promise.then(function(profiles){
      var RandomIndex =  Math.floor(Math.random()*profiles.length)
      this.profile = profiles[RandomIndex]})

    this.signinForm = {};
    this.signin = function() {
      $auth.submitLogin(this.signinForm)
      .then(function(resp) {
        // console.log("SessionsViewModel.profile")
        console.log($state)
        $state.go("ProfileShow",{id: this.profile.id},{},{reload:true})
        console.log("Signin success:", resp);
      })
      .catch(function(resp) {
        console.log("Signin failure:", resp);
      });
    };

    this.signup = function() {
      $auth.submitRegistration(this.signupForm)
      .then(function(resp) {
        $state.go("ProfileShow",{id: this.profile.id},{},{reload:true});
      })
      .catch(function(resp) {
        console.log(resp);
      });
    };

   $scope.$on('$stateChangeSuccess',
        function(event, toState, toParams, fromState, fromParams){
          if(toState.name == 'signout') {
            $auth.signOut();
          }
        });
  });
}());
