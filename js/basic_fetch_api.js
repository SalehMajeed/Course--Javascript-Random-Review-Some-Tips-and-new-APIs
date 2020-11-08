fetch('rankings.json')
    .then(function (response) {
        return response.text();
    })
    .then(function (text) {
        console.log(text);
    })
    .catch(function (err) {
        console.log(err);
    });

fetch('1rankings.json')
    .then(function (response) {
        return response.text();
    })
    .then(function (text) {
        console.log(text);
    })
    .catch(function (err) {
        console.log(err);
    });
