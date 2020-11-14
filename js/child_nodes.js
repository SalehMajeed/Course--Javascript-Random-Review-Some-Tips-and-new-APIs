const my_div = document.getElementById("my-div");

console.log(my_div.childNodes);

for (const node of my_div.childNodes) {
  console.log(node);
}
