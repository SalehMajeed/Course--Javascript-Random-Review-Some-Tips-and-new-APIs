const params = new URLSearchParams({
  query: "dinner",
  language: "english",
});

const url = `login.php?${params.toString()}`;

console.log(url);

fetch("login.php", {
  method: "GET",
  body: params,
})
  .then((response) => response.text())
  .then(console.log());
