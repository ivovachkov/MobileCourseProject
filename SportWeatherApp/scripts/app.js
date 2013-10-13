var app = app || {};

(function(a) {    
    document.addEventListener("deviceready", function() {
        app.servicesBaseUrl = "http://the-places.apphb.com/api/";
        
        var kendoApp = new kendo.mobile.Application(document.body);
        a.kendo = kendoApp;

        a.weather.locate();
    });
}(app));