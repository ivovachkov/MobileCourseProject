var app = app || {};

(function (a) {
    var viewModel = kendo.observable({
        articleInfo: {}
    });

    function init(e) {
        kendo.bind(e.view.element, viewModel);
        var url = decodeURIComponent(e.view.params.url);
        var requestUrl = url + "&" + a.apiKey;     

        httpRequest.getJSON(requestUrl)
        .then(function (data) {
            console.log(data);
            viewModel.set("articleInfo", data.headlines[0]);
        });
    }

    a.article = {
        init: init
    };
}(app));
