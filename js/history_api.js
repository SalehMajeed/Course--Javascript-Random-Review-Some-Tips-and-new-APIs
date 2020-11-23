console.log(history.length);

// console.log(history.back());

// console.log(history.forward());

// console.log(history.go());

// console.log(history.pushState(null, null, "about"));

function load_about() {
  history.pushState(null, null, "about");
  document.body.append("about");
}

window.addEventListener("popstate", (e) => {
  console.log(e);
});

console.log(history.replaceState(13, null, "settings"));
