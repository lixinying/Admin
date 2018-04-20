 app.factory('userdata', function($http, $localStorage) {
     var username, usergoup, user_permission;

     var setData = function(data) {
         username = data.username;
         usergroup = data.usergroup;
         user_permission = data.user_permission;
     }
     var isAP = function() {
         if (usergroup == "AP") {
             return true;
         } else {
             return false;
         }
     }
     var get_username = function() {
         return username;
     }


     return {
         setData: setData,
         get_username: get_username,
         isAp: isAP,
         user_permission: user_permission
     }
 });