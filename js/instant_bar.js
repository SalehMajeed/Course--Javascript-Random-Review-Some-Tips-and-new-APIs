import Instant_search from "./instant-search.js";

const search_users = document.querySelector("#searchUsers");

const Instant_search_users = new Instant_search(search_users, {
  searchURL: new URL(
    "http://localhost/Javascript%20Random,%20Review%20+%20Some%20Tips%20and%20new%20APIs/search.php",
    window.location.origin
  ),
  queryParam: "q",
  responseParser: (response_data) => {
    return response_data.results;
  },
  templateFunction: (result) => {
    return `
      <div class='instant-search__title'>${result.firstname} & ${result.lastname}</div>
      <p class='instant-search__paragraph'>${result.occupation}</p>
    `;
  },
});

console.log(Instant_search_users);
