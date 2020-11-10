const request = new XMLHttpRequest();
const href = document.getElementById("tag");

request.open("GET", "js/"); // it takes 5 parameters
request.send();

request.onload = function () {
  const content = JSON.stringify(request.responseText);
  let parse = new DOMParser();
  let parsed = parse.parseFromString(content, "text/html");
  let address = parsed.querySelector("ul>li>a");
  console.log(address);
  href.textContent = address;
};
