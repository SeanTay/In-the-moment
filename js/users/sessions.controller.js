(function(){
  angular
  .module("datingApp")
  .controller("SessionsController", function($auth,$scope,$state,ProfileFactory){

    // NHO: code is repeated two other places -> move to factory method
    ProfileFactory.query().$promise.then(function(profiles){
      var RandomIndex =  Math.floor(Math.random()*profiles.length)
      this.profile = profiles[RandomIndex]
    })

    this.signinForm = {};
    this.signin = function() {
      $auth.submitLogin(this.signinForm)
      .then(function(resp) {
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

    // NHO: what does this code block do? Could be a great opportunity for a code comment...
   $scope.$on('$stateChangeSuccess',
        function(event, toState, toParams, fromState, fromParams){
          if(toState.name == 'signout') {
            $auth.signOut();
          }
        });
  });
}());
