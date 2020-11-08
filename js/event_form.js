const my_form = document.getElementById('my-form');

my_form.addEventListener('submit', (e) => {
    e.preventDefault();

    const request = new XMLHttpRequest();

    request.open('POST', 'login.php');
    request.onload = function () {
        console.log(request.responseText);
    };
    request.send(new FormData(my_form));
});
