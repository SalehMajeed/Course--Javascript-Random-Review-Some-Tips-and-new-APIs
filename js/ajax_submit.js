const form = {
    username: document.getElementById('username'),
    password: document.getElementById('password'),
    submit: document.getElementById('btn-submit'),
    messages: document.getElementById('form-messages'),
};

form.submit.addEventListener('click', () => {
    const request = new XMLHttpRequest();

    const request_data = `username=${form.username.value}&password=${form.password.value}`;

    request.onload = () => {
        let responser_object = null;

        try {
            responser_object = JSON.parse(request.responseText);
        } catch (e) {
            console.log('Could not parse JSON!');
        }

        if (responser_object) {
            handle_responser(responser_object);
        }
    };

    request.open('post', 'check-login.php');
    request.setRequestHeader(
        'Content-type',
        'application/x-www.form-urlencoded'
    );
    request.send(request_data);
});

function handle_responser(responser_object) {
    if (responser_object.ok) {
        location.href = 'dashboard.html';
    } else {
        while (form.messages.firstChild) {
            form.messages.removeChild(form.messages.firstChild);
        }

        responser_object.messages.forEach((message) => {
            const li = document.createElement('li');
            li.textContent = message;
            form.messages.appendChild(li);
        });

        form.messages.style.display = 'block';
    }
}
