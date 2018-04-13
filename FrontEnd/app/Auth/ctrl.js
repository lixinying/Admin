app.controller('LoginController', function($scope, $state, $http, userdata, $localStorage,md5) {
    $scope.login = function() {
        $scope.authError = ""
       var password = md5.createHash($scope.user.password);
       var user_name=$scope.user.
        $http.defaults.headers.common['Authorization'] = 'Basic ' + authdata;
        var $com = $resource($scope.app.host + "/auth/info/?");
        $com.get(function(data) {
           userdata.setData(data.user);
        }, function() {
            $scope.authError = "服务器登录错误"
        })
    }

    // var $com = $resource($scope.app.host + "/auth/info/?");
    // $com.get(function(data) {
    //     $scope.session_user = $localStorage.user = data;
    //     $state.go('app.dashboard');
    // }, function() {
    //     //$state.go('auth.login');
    // })
});