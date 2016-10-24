$(document).ready(function () {
    var getQuote = function () {
        return $.ajax({
            url: 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous',
            headers: {
                'X-Mashape-Key': '5Fi8Ppwm8nmshOz5KI5aCMEHhnCpp1vhbhEjsn9TdmkOHUSXKm'
            },
            method: 'POST',
            contentType: 'application/x-www-form-urlencoded',
            dataType: 'json'
        });
    };

    var setQuote = function (data) {
        var encodeQuote = encodeURIComponent(data.quote);
        var tweetUrl = "https://twitter.com/intent/tweet?text=" + encodeQuote;
        $('#quote-text').text(data.quote);
        $('#quote-author').text(data.author);
        $('#tweet-quote').attr('href', tweetUrl);
    };

    $('#new-quote').on('click', function () {
        var reloadBtn = $(this);
        reloadBtn.prop('disabled', true).children('i').addClass('fa-spin');
        getQuote().done(function (data) {
            setQuote(data);
            reloadBtn.prop('disabled', false).children('i').removeClass('fa-spin');
        });
    });
});