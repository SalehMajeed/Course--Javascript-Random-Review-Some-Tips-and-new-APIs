function change_background_color(element, color) {
  element.style.backgroundColor = color;
}

const my_box = document.getElementById("my-box");

try {
  change_background_color(my_box, "blue");
} catch (e) {
  console.log(e);
} finally {
  console.log("check div id name");
}
// prompt("what is your name?");
