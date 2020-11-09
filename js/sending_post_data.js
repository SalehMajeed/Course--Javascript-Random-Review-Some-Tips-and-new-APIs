const my_form = document.getElementById('my-form');

my_form.addEventListener('submit', function (e) {
    e.preventDefault();

    const form_data = new FormData(this);
    const search_params = new URLSearchParams()

    for (const pair of form_data) {
        search_params.append(pair[0], pair[1]);
    }

    fetch('http://localhost/Javascript%20Random,%20Review%20+%20Some%20Tips%20and%20new%20APIs/login.php', {
        method: 'post',
        body:'search_params',
    })
        .then(function (response) {
        return response.text()
        })
        .then(function (text) {
        console.log(text)
        })
        .catch((err) => console.log(err))
})