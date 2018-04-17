var app = angular.module('myApp', ['dateApp', 'ui.bootstrap', 'ui.router', 'oc.lazyLoad', 'ngResource','angular-md5','ngStorage']);
app.config(function($httpProvider) {
    $httpProvider.defaults.transformRequest = function(obj) {
        var str = [];
        for (var p in obj) {
            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]))
        }
        return str.join("&");
    }
    $httpProvider.defaults.headers.post = {
        'Content-Type': 'application/x-www-form-urlencoded'
    }

});


