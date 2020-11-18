import Instant_search from "./instant-search.js";

const search_users = document.querySelector("#searchUsers");

const Instant_search_users = new Instant_search(search_users, {
  searchURL: new URL("search.php", window.location.origin),
  queryParam: "q",
  responseParser: () => {},
  templateFunction: () => {},
});

console.log(Instant_search_users);
