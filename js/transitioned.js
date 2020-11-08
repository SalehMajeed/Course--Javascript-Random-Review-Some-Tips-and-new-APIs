const box = document.getElementById('box');
const btn_go = document.getElementById('btn_go');

btn_go.addEventListener('click', () => (box.style.width = '100%'));

box.addEventListener('transitionend', (e) => console.log(e));
