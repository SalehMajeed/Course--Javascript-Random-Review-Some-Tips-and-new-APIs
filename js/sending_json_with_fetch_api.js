const person = {
    name: 'anony',
    age: 19
}

fetch('receive.php', {
    method: 'post',
    body: JSON.stringify(person),
    headers: {
        'Content-Type': 'application/json'
    }
}).then( function (response) {
    return response.text()
}).then(console.log(text))