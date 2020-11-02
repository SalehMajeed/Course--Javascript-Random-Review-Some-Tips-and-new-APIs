const real_file_btn = document.getElementById('real-file');
const custom_btn = document.getElementById('custom-button');
const custom_txt = document.getElementById('custom-text');

custom_btn.addEventListener('click', function () {
    real_file_btn.click();
});

real_file_btn.addEventListener('change', function () {
    if (real_file_btn.value) {
        custom_txt.innerHTML = real_file_btn.value.match(
            /[\/\\]([\w\d\s\.\-\(\)]+)$/
        )[1];
    } else {
        custom_txt.innerHTML = 'No file Chosen yet.';
    }
});
