const favicon = document.getElementById("favicon");

function to_small() {
  console.log("size has changed");
  favicon.setAttribute("href", "sh");
}

function to_big() {
  favicon.setAttribute("href", "favicon_io/android-chrome-512x512.png");
}
