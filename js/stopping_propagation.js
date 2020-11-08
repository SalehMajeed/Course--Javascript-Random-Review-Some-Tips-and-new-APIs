const box = document.getElementById('box');
const my_btn = document.getElementById('my_btn');

box.addEventListener('click', () => (box.style.backgroundColor = 'red'));
my_btn.addEventListener('click', (e) => {
    e.stopPropagation();
});
