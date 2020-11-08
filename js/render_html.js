const xhr = new XMLHttpRequest();
const container = document.getElementById('container');

xhr.onload = function () {
    if (this.status == 200) {
        container.innerHTML = xhr.responseText;
    } else {
        console.log('not received');
    }
};

xhr.open('GET', 'content.html');
xhr.send();
