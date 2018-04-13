 app.factory('userdata', function($http) {
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

        return {
            setData: setData,
            username: username,
            isAp: isAP,
            user_permission: user_permission
        }
    });