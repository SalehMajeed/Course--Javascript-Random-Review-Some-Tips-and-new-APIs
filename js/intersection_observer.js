const box = document.getElementById("box");
const container = document.getElementById("container");
const cb = function (entries) {
  console.log(entries[0]);
};

const observer = new IntersectionObserver(cb, {
  threshold: [0.2, 0.5],
  root: container,
});

observer.observe(box);
