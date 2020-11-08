const btn_remove_child = document.getElementById('btn-remove-child');

let i = 0;

btn_remove_child.addEventListener('click', function () {
    const iframe = document.getElementById('iframe-child');
    if (i > 3) {
        console.log(
            'you have been reached the limit of pressing remove button'
        );
        btn_remove_child.remove();
    }
    if (iframe) iframe.remove();
    else console.log('already has been removed and ');
    i++;
});
