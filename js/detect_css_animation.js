const box = document.getElementById("box");

box.addEventListener("animationend", () => {
  alert("box has moved all the way");
});

box.addEventListener("animationend", () => {
  alert("box is moving");
});
