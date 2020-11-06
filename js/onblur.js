const my_inp = document.getElementById('myinp');

my_inp.addEventListener('blur', (e) => {
    const val = e.target.value;
    console.log(val);
});

my_inp.addEventListener('keyup', (e) => {
    if (e.key == 'Enter') {
        console.log(e.target.value);
    }
});
