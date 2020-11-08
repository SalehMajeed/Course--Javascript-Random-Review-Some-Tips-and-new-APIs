const to_send = {
    name: 'anony',
    age: 19,
    occupation: 'developer',
};
const json_string = JSON.stringify(to_send);
const xhr = new XMLHttpRequest();

xhr.open('POST', 'login.php');
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.send(json_string);
