   app.component("pageSider", {
       templateUrl: "component/pageslide/page_sider.html",
       controller: function($scope, $state, $http, appSettings) {
           $scope.menuItems = [{
                   title: "Product",
                   icon: "cubes",
                   state: "dashboard",
                   second_menu: [{
                       title: "Products Master",
                       state: "chopslot",
                   }, {
                       title: "Error Products Master",
                       state: "chopslot",
                   }, {
                       title: "Temp Products Update",
                       state: "chopslot",
                   }, {
                       title: "Category Mapping",
                       state: "chopslot",
                   }]
               },
               {
                   title: "Campaign calendar",
                   icon: "tags",
                   state: "skills",
                   second_menu: [{
                       title: "Campaign Calendar",
                       state: "chopslot",
                   }]
               }
           ];

           //controll sidebar open & close in mobile and normal view

           $scope.select = function(index, event) {
               if ($scope.selected == index) {
                   $scope.selected = -1;
               } else {
                   $scope.selected = index;
               }
           };

           

       }
   });