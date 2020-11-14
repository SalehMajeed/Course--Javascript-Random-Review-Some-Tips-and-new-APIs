// const my_url = new URL(window.location.href);

// // my_url.hostname = "google.com";

// // my_url.search = "?name=anony&age=19";

// my_url.searchParams.set("name", "anony");
// my_url.searchParams.set("age", 19);

// console.log(my_url);
// console.log(my_url.href);
// console.log(my_url.toString());
// console.log(my_url.searchParams.get("name"));

const my_url = new URL(
  "http://127.0.0.1:5500/Javascript%20Random%2C%20Review%20%2B%20Some%20Tips%20and%20new%20APIs/"
);

fetch(my_url)
  .then((response) => response.text())
  .then((text) => console.log(text));
