const show_message = document.getElementById('show-message');
const cancel_message = document.getElementById('cancel-message');
let msg_timeout = null;

show_message.addEventListener('click', () => {
    msg_timeout = setTimeout(() => {
        console.log('hello');
    }, 2000);
});

cancel_message.addEventListener('click', function () {
    clearTimeout(msg_timeout);
});
