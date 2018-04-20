 app.config(
     function($stateProvider, $urlRouterProvider) {
         $urlRouterProvider
             .otherwise('login'); //默认路由也是登录的第一个
         $stateProvider
             .state('login', {
                 url: '/login',
                 templateUrl: 'app/Auth/login.html',
                 controller: 'LoginController',
                 resolve: {
                     loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                         return $ocLazyLoad.load('app/auth/ctrl.js');
                     }]
                 }

             })

             .state('app', {
                 abstract: true,
                 url: '/app',
                 templateUrl: 'app/app.html',

             })
             .state('app.product', {
                 url: '/product',
                 templateUrl: 'app/product/product.html',
             })
             .state('app.dashboard', {
                 url: '/dashboard',
                 templateUrl: 'app/Dashboard/dashboard.html',
                 controller: 'DashboardController',
                 resolve: {
                     loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                         return $ocLazyLoad.load('app/Dashboard/ctrl.js');
                     }]
                 }
             })
     }
 )
 app.run(
     function($rootScope, $state, $stateParams, $localStorage, $http) {
         $http.defaults.headers.common['Authorization'] = 'Basic ' + $localStorage.auth;
         $rootScope.$state = $state;
         $rootScope.$stateParams = $stateParams;
         $rootScope.$on('$stateChangeSuccess', function(event, to, toParams, from, fromParams) {
             $rootScope.previousState = from;
             $rootScope.previousStateParams = fromParams;
         });
     }
 )