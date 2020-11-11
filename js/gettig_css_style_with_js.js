const box = document.getElementById("box");
const text = document.getElementById("text");
const box_cs = window.getComputedStyle(box);
const box_cs_after = window.getComputedStyle(box, "::after");
const text_cs = window.getComputedStyle(text);

console.log(box_cs.backgroundColor);
console.log(text_cs.fontSize);
console.log(box_cs_after.backgroundColor);
