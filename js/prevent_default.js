const ylink = document.getElementById('ytlink');
const check = document.getElementById('checkbox');

ylink.addEventListener('click', function (e) {
    if (!check.checked) e.preventDefault();
});
