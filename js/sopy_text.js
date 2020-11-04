const my_inp = document.getElementById('my_inp');
const btn_copy = document.getElementById('btn_copy');

btn_copy.onclick = function () {
    my_inp.select();

    document.execCommand('Copy');
};
