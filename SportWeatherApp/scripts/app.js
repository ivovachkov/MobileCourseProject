var app = app || {};

(function(a) {    
    document.addEventListener("deviceready", function() {        
        var kendoApp = new kendo.mobile.Application(document.body);
        a.kendo = kendoApp;

        a.weather.locate();
        a.connectionApi.getConnectionType();
        document.addEventListener("offline", function () {
            navigator.notification.alert("You don't have connection now");
            navigator.notification.vibrate(1000);
            //navigator.notification.beep(2);
        }, false);

        var state = localStorage.getItem("state");
        if (state) {
            a.kendo.navigate(state);
        }

        //a.kendo.navigate("views/weather-view.html#weather-view");
    });
}(app));