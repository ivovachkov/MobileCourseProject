var app = app || {};

(function (a) {
    function init(city) {
        navigator.camera.getPicture(
            function (imageBase64) {
                var imageData = "data:image/jpeg;base64," + imageBase64;
                document.getElementById("picture").src = imageData;

                var images = JSON.parse(localStorage.getItem("images" + a.city));
                if (!images) {
                    images = [];
                }
                images.push(imageData);
                console.log(a.city);
                localStorage.setItem("images" + a.city, JSON.stringify(images));

            }, function (error) { }, { destinationType: Camera.DestinationType.DATA_URL });
    }

    a.camera = {
        init: init
    };
}(app));
