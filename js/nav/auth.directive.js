(function(){
  angular
    .module("datingApp")
    .directive("authNav", function($auth) {
      return {

        replace: true,
        restrict: 'E',
        templateUrl: "js/nav/_auth.html",
        link: function(scope) {
          // update scope/view on successful signin
          scope.$on('auth:login-success', function(ev, user) {
            scope.currentUser = user;
          });

          scope.$on('auth:logout-success', function(ev, user) {
            scope.currentUser = false;
          });

          scope.$on('auth:registration-email-success', function(ev, user) {
            scope.currentUser = user;
          });

          // set initial state, for currentUser, when directive is loaded
          $auth.validateUser()
            .then(function(user){
              scope.currentUser = user;
            })
            .catch(function(err){
              scope.currentUser = undefined;
            });
        }
      };
    });
})();
