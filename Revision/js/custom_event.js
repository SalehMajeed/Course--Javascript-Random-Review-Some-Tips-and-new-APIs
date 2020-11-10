const search_id = document.getElementById("search-id");
const event = new CustomEvent("build", { detail: "hello" });

search_id.addEventListener("build", function (e) {
  search_id.innerText = e.detail;
});

search_id.dispatchEvent(event);
