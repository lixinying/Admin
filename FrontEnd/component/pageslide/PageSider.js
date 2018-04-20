   app.component("pageSider", {
       templateUrl: "component/pageslide/page_sider.html",
       controller: function($scope, $state, $http, appSettings,userdata) {
           $scope.menuItems = [{
                   title: "Product",
                   icon: "cubes",
                   state: "dashboard",
                   second_menu: [{
                       title: "Dashboard",
                       state: "app.dashboard",
                   },{
                       title: "Products Master",
                       state: "app.product",
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
           $scope.user_name=userdata.get_username();

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