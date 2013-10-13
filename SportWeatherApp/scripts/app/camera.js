var app = app || {};

(function (a) {
    function init() {
        navigator.camera.getPicture(
            function (imageBase64) {
                document.getElementById("picture").src = "data:image/jpeg;base64," + imageBase64;
            }, function (error) { }, { destinationType: Camera.DestinationType.DATA_URL });
    }

    a.camera = {
        init: init
    };
}(app));
