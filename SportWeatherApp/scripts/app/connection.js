var app = app || {};

(function (a) {
    var states = null;
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
            return states[networkState];
        }
    }
    a.connectionApi = connectionAPI;
}(app));
