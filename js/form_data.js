const data = new FormData();

data.append('name', 'anony');
data.append('age', 56);

const xhr = new XMLHttpRequest();

xhr.open('POST', 'code.php', true);
xhr.send(data);
