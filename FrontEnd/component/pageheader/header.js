
       app.component("pageHeader", {
           templateUrl: "component/pageheader/header.html",
           controller: function($scope, $http,appSettings,$state) {
               var that = this;
               $scope.menuToggle = function() {
                   that.onToggle();
               }
               $scope.logout = function() {
                   $http({
                       method: 'POST',
                       url: appSettings.host + '/BackendLogin/logout',
                   }).success(function(data, status) {

                       $http.defaults.headers.common['Authorization'] = "Basic";
                       $state.go("login");


                   }).error(function() {
                       $scope.authError = "error"
                   });

               }
           },
           bindings: {
               onToggle: '&',

           }
       });