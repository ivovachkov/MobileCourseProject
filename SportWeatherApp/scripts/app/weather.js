var app = app || {};

(function (a) {
    //var requestUrl = "http://api.wunderground.com/api/1e301851af3c4acc/conditions/q/BG/Sofia.json";
    var requestUrl = "http://api.wunderground.com/api/1e301851af3c4acc/conditions/q/";
    var geocoder, city, country, watch;

    var viewModel = kendo.observable({
        weatherInfo: {}
    });

    //Get the latitude and the longitude;
    function successFunction(position) {
        var lat = position.coords.latitude;
        var lng = position.coords.longitude;
        codeLatLng(lat, lng)
    }

    function errorFunction(err) {
        navigator.notification.alert(err.message);
    }

    function locate() {
        geocoder = new google.maps.Geocoder();
        if (navigator.geolocation) {
            watch = navigator.geolocation.watchPosition(successFunction, errorFunction, { timeout: 30000 });
        }
    }

    function codeLatLng(lat, lng) {
        var latlng = new google.maps.LatLng(lat, lng);
        geocoder.geocode({ 'latLng': latlng }, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                if (results[0]) {
                    city = results[0].address_components[2].short_name;
                    country = results[0].address_components[4].short_name;
                    console.log(city);
                    console.log(country);
                    if (requestUrl.indexOf(city) == -1 && requestUrl.indexOf(country) == -1) {
                        requestUrl += (country + '/' + city + '.json');
                    }
                    console.log(requestUrl);
                }
                else {
                    console.log("No results found");
                }
            }
            else {
                console.log("Geocoder failed due to: " + status);
            }

            navigator.geolocation.clearWatch(watch);
        });
    }

    function init(e) {
        kendo.bind(e.view.element, viewModel);

        console.log(requestUrl);

        httpRequest.getJSON(requestUrl)
        .then(function (data) {
            console.log(data);

            if (data.response.error) {

                navigator.notification.alert(data.response.error.description);
                a.kendo.navigate('#index');
            }

            var vm = {
                weather: data.current_observation.weather,
                temp: data.current_observation.temp_c,
                icon: data.current_observation.icon_url,
                feelslike: data.current_observation.feelslike_c,
                city: data.current_observation.display_location.full,
                wind: data.current_observation.wind_kph,
                humidity: data.current_observation.relative_humidity
            };

            viewModel.set("weatherInfo", vm);
        }, function (err) {
            navigator.notifications.alert(err);
        });
    }

    a.weather = {
        init: init,
        locate: locate
    };
}(app));

