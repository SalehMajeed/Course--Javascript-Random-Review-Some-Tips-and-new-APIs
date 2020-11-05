const xhr = new XMLHttpRequest();

xhr.onload = function () {
    const server_response = document.getElementById('server_response');
    server_response.innerHTML = this.responseText;
};

xhr.open('POST', 'code.php');
xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
xhr.send('name:anony&message:how is going.');
