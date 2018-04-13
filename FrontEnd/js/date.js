angular.module('dateApp', []).factory('date', function() {

    function getDateObject(time) {
        if (time) {
            time = new Date(time);
        } else {
            time = new Date();
        }
        return time
    }

    function timeToObject(timeString) {
        if (timeString) {
            var time = timeString.split(':')
            var date = new Date();
            date.setHours(time[0]);
            date.setMinutes(time[1]);
            date.setSeconds('00');
            return date;
        }
        return new Date();

    }

    function dateToStr(datetime) {
        if (!datetime) {
            return datetime;
        }
        var year = datetime.getFullYear();
        var month = datetime.getMonth() + 1; //js从0开始取 
        var date = datetime.getDate();
        var hour = datetime.getHours();
        var minutes = datetime.getMinutes();
        var second = datetime.getSeconds();

        if (month < 10) {
            month = "0" + month;
        }
        if (date < 10) {
            date = "0" + date;
        }
        if (hour < 10) {
            hour = "0" + hour;
        }
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        if (second < 10) {
            second = "0" + second;
        }

        var time = year + "-" + month + "-" + date + " " + hour + ":" + minutes + ":" + second; //2009-06-12 17:18:05
        // alert(time);
        return time;
    }

    function getCurrentMonthLastDay() {
        var Nowdate = new Date();
        var MonthNextFirstDay = new Date(Nowdate.getFullYear(), Nowdate.getMonth() + 1, 1);
        var MonthLastDay = new Date(MonthNextFirstDay - 86400000);
        return MonthLastDay;
    }

    function getTimeString(datetime) {
        if (!datetime) {
            return datetime;
        }
        var hour = datetime.getHours();
        var minutes = datetime.getMinutes();
        var second = datetime.getSeconds();

        if (hour < 10) {
            hour = "0" + hour;
        }
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        if (second < 10) {
            second = "0" + second;
        }

        var time = hour + ":" + minutes; //17:18
        // alert(time);
        return time;
    }
    return {
        getDateObject: getDateObject,
        timeToObject: timeToObject,
        dateToStr: dateToStr,
        getCurrentMonthLastDay: getCurrentMonthLastDay,
        getTimeString: getTimeString
    }

});