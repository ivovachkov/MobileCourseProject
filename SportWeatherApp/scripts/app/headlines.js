var app = app || {};

(function (a) {
    a.apiKey = "apikey=k22rvwa8v3nywnfuf3mtfgq9";
    var headlinesUrl = "http://api.espn.com/v1/sports/soccer/eng.1/news/headlines";

    var viewModel = kendo.observable({
        headlines:[],
        navigateToArticle: navigateToArticle
    });

    function navigateToArticle(e) {
        //var ref = window.open(e.data.links.mobile.href, '_blank', 'location=yes');
        //// close InAppBrowser after 5 seconds
        //setTimeout(function () {
        //    ref.close();
        //}, 3000);

        var newsLink = e.data.links.api.news.href;
        var navigationUrl = 'views/article-view.html#article-view?url=' +
            encodeURIComponent(newsLink);
        localStorage.setItem("state", navigationUrl);
        a.kendo.navigate(navigationUrl);
    }
    
    function init(e) {
        kendo.bind(e.view.element, viewModel);
        httpRequest.getJSON(headlinesUrl + "?" + a.apiKey)
        .then(function (data) {
            viewModel.set("headlines", data.headlines);
        });
    }

    a.matches = {
        init: init,
        navigateToArticle: navigateToArticle
    };
}(app));