   (function(angular) {app.component("pageHeader", {
       templateUrl: "component/pageheader/header.html",
       controller: function($scope) {
           var that = this;
           $scope.menuToggle = function() {
               that.onToggle();
           }
       },
       bindings: {
           onToggle: '&',
         
       }
   });
   })(window.angular);