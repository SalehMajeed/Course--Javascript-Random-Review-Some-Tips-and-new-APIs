const h2 = document.getElementById('title');
const btn_start = document.getElementById('show-message');
const btn_cancel = document.getElementById('cancel-message');

let count = 0;
let clear = null;

btn_start.addEventListener('click', function () {
    clear = setInterval(() => {
        h2.innerText = count++;
    }, 1000);
});

btn_cancel.addEventListener('click', function () {
    clearInterval(clear);
});
