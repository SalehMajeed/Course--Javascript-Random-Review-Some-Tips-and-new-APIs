const x_direction = document.getElementById("x-position");
const y_direction = document.getElementById("y-position");

window.addEventListener("mousemove", (e) => {
  x_direction.value = e.x;
  y_direction.value = e.y;
});
