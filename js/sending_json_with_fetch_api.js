const person = {
    name: 'anony',
    age: 19
}


fetch('http://localhost/Javascript%20Random,%20Review%20+%20Some%20Tips%20and%20new%20APIs/receive.php', {
    method: 'POST',
    body: JSON.stringify(person),
    headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded'
    }
})
    .then(
         (response) => { return response.text() })
    .then( (txt) => {
        console.log(txt)
    })
    