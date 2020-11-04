const input_key = document.getElementById('inp_key');
const input_value = document.getElementById('inp_value');
const btn_insert = document.getElementById('btn_insert');
const ls_output = document.querySelector('.ls_output');

btn_insert.addEventListener('click', function () {
    const key = input_key.value;
    const value = input_value.value;

    if (key && value) {
        localStorage.setItem(key, value);
        location.reload();
    }
});

for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);

    ls_output.innerHTML += `${key}: ${value}<br />`;
}
