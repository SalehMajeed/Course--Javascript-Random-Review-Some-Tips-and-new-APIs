const container = document.getElementById("container");
const strong = document.createElement("strong");
const emp = document.createElement("em");
const txt = document.createElement("dcode");

txt.textContent = "dcode";
emp.textContent = "em ";
strong.textContent = "strong ";

container.prepend(strong, emp, txt);
