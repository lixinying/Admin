app.directive('timer', function ($interval) {
    return {
        restrict: 'A',
        scope: {
            endTime: '=info'
              },
        link: function (scope, element) {
            scope.endTime = scope.endTime;
            scope.setshow = function (endTime) {
                var today = new Date();
                var enddate = new Date(endTime);
                var date3 = enddate.getTime() - today.getTime();  //时间差的毫秒数
                if (!date3||date3 <= 0) {
                    $interval.cancel(scope.mytimer);
                } else {
                    scope.days = Math.floor(date3 / (24 * 3600 * 1000));
                    var leave1 = date3 % (24 * 3600 * 1000);    //计算天数后剩余的毫秒数
                    scope.hours = Math.floor(leave1 / (3600 * 1000));
                    var leave2 = leave1 % (3600 * 1000);        //计算小时数后剩余的毫秒数
                    scope.minutes = Math.floor(leave2 / (60 * 1000));
                    var leave3 = leave2 % (60 * 1000);      //计算分钟数后剩余的毫秒数
                    scope.seconds = Math.round(leave3 / 1000);
                }
            }
            scope.mytimer = $interval(function () {
                scope.setshow(scope.endTime);
            }, 1000)

        },
        templateUrl:'directive/Timer/timer.html'

    };
});