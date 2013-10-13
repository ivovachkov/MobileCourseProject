var app = app || {};

(function(a) {    
    document.addEventListener("deviceready", function() {        
        var kendoApp = new kendo.mobile.Application(document.body);
        a.kendo = kendoApp;
        a.weather.locate();
        var connectionType = a.connectionApi.getConnectionType();
        console.log(connectionType);
        if (connectionType == "WiFi connection") {
            a.media.init("http://audio.ibeat.org/?ccm=/api/query/stream.m3u&f=m3u&ids=701");
        }        
    });
}(app));