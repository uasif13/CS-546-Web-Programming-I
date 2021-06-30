(function ($) {
    var heading = $('#heading'),
    form = $('#searchForm'),
    input = $('#search_index'),
    showDiv = $('#show'),
    showList = $('#showList'),
    homeLink = $('#homeLink');
    heading.text("Show Finder");
    // Page Load Ajax Request
    var load = {
        url: 'http://api.tvmaze.com/shows',
        method: 'GET',
    };
    $.ajax(load).then(function (data) {
        showList.empty(); 
        homeLink.hide();
        data.map((show) => {
            let element = `<li><a class="link" href='${show._links.self.href}'>${show.name}</a>`
            showList.show();
            showList.append(element);
        });
        $("a.link").click((event) => {
            event.preventDefault();
            linkClick(event.target.href);
    })})
    // Search Form Submission Ajax Request
    form.submit (function (event) {
        event.preventDefault();
        const regex = /^\s*$/;
        query = input.val();
        if (!regex.test(query)) {
            showList.empty();
            var requestConfig = {
                method: 'GET',
                url: `http://api.tvmaze.com/search/shows?q=${query}`,
            }
            $.ajax(requestConfig).then(function (res) {
                homeLink.show()
                res.map((result) => {
                    const { show } = result
                    let element = `<li><a class="link" href='${show._links.self.href}'>${show.name}</a>`
                    showList.show();
                    showList.append(element)
                    showDiv.hide();
                    homeLink.show();
                })
                $("a.home").show();
                console.log("before reset")
                $("a.link").click((event) => {
                    event.preventDefault();
                    linkClick(event.target.href);
                })})
        }
        else {
            showList.empty()
            showList.show();
            showList.append(`<p>Please enter a query that is not empty or is just space<p>`)
        }
    })
    function errorHandling (show) {
        if (!show.language) {
            show.language = "N/A"
        }
        if (!show.rating.average) {
            show.rating.average = "N/A"
        }
        if (!show.network) {
            show.network = "N/A"
        }
        if (!show.genres) {
            show.genres = "N/A"
        }
        if (!show.summary) {
            show.summary = "N/A"
        }
        return show
    }
    // Link Clicked Ajax Request
    function linkClick(link) {
        showList.hide();
        showDiv.hide();
        showDiv.empty();
        var requestConfig = {
            method: 'GET',
            url: link,
        }
        $.ajax(requestConfig).then((data) => {
            homeLink.show()
            show = errorHandling(data)
            showDiv.show()
            heading.text(show.name)
            showDiv.append(`
            <h1>${show.name}</h1>
            <img alt=${show.name} src=${show.image && show.image.medium ? show.image.medium: '/public/images/no_image.jpg'}>
            <dl>
            <dt>Languages</dt>
            <dd>${show.language}</dd> 
            <dt>Average Rating</dt>
            <dd>${show.rating.average}</dd> 
            <dt>Genres</dt>
            <dd>${show.genres.map((item) => `<li>${item}</li>`).join('')}</dd> 
            <dt>Network</dt>
            <dd>${show.network.name ? show.network.name : 'N/A'}</dd> 
            <dt>Summary</dt>
            <dd>${show.summary}</dd> 
            </dl>
            `)
            showList.hide()
            homeLink.show()
        })
    }
})(window.jQuery)
