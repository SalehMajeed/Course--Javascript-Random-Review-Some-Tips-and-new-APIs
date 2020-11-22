const collapsed_class = "nav--collapsed";
const lskey = "navCollapsed";

const nav = document.querySelector(".nav");
const nav_border = nav.querySelector(".nav__border");

if (localStorage.getItem(lskey) == "true") {
  nav.classList.add("collapsedClass");
}

nav_border.addEventListener("click", () => {
  nav.classList.toggle(collapsed_class);
  localStorage.setItem(lskey, nav.classList.contains(collapsed_class));
});
