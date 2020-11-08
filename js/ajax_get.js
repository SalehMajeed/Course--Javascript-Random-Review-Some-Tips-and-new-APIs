function http_get(url, callback) {
    const request = new XMLHttpRequest();

    request.open('GET', url, true);
    request.onload = function () {
        callback(request);
    };
    request.send();
}

http_get('rankings.json', function (request) {
    console.log(request.responseText);
});
