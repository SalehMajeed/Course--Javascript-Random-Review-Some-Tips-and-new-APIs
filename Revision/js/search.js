const search_id = document.getElementById("search-id");
console.log(search_id);

(function search(name) {
  fetch(`../js/`)
    .then((response) => response.text())
    .then((text) => (search_id.innerText = text))
    .catch((err) => console.log(err));
})();
