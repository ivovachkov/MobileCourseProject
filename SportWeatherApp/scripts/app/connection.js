var app = app || {};

(function (a) {
    var states = null;
    var songUrl = "http://audio.ibeat.org/?ccm=/api/query/stream.m3u&f=m3u&ids=701";
    function initStates() {
        states = {};
        states[Connection.UNKNOWN] = 'Unknown connection';
        states[Connection.ETHERNET] = 'Ethernet connection';
        states[Connection.WIFI] = 'WiFi connection';
        states[Connection.CELL_2G] = 'Cell 2G connection';
        states[Connection.CELL_3G] = 'Cell 3G connection';
        states[Connection.CELL_4G] = 'Cell 4G connection';
        states[Connection.CELL] = 'Cell generic connection';
        states[Connection.NONE] = 'No network connection';
    }

    var connectionAPI = {
        getConnectionType: function (e) {
            if (!states) {
                initStates();
            }
            var networkState = navigator.connection.type;
            if (states[networkState] == "WiFi connection") {
                a.media.play(songUrl);
            }

            //setInterval(function () {
            //    networkState = navigator.connection.type;
            //    console.log(states[networkState]);
            //    if (states[networkState] == "WiFi connection") {
            //        a.media.play(songUrl);
            //    }
            //    else {
            //        a.media.stop();
            //    }
            //}, 3000);
        }
    }
    a.connectionApi = connectionAPI;
}(app));
