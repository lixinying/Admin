 app.config(
      function ($stateProvider,   $urlRouterProvider) {
          $urlRouterProvider
              .otherwise('/login');//默认路由也是登录的第一个
          $stateProvider
              .state('login',{
                  url:'/login',
                  templateUrl:'app/Auth/login.html',
                   resolve: {
                      deps: ['$ocLazyLoad',
                        function( $ocLazyLoad ){
                          return $ocLazyLoad.load('app/Auth/ctrl.js');
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
              })
      }
  );