let x_position = document.getElementById('x-value');
let y_position = document.getElementById('y-value');
window.addEventListener('mousemove', (e) => {
    x_position.innerText = e.pageX;
    y_position.innerText = e.pageY;
});
