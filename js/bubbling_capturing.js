const parent = document.querySelector('p');
const child = document.querySelector('strong');

parent.addEventListener(
    'click',
    function () {
        console.log(parent);
    },
    true
);
child.addEventListener('click', function () {
    console.log(child);
});
