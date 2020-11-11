// document.addEventListener("DOMContentLoaded", () => {
//   const rows = document.querySelectorAll("tr[data-href]");

//   rows.forEach((row) => {
//     row.addEventListener("click", () => {
//       window.location.href = row.dataset.href;
//     });
//   });
// });

function add_john() {
  document
    .querySelector("tbody")
    .insertAdjacentHTML(
      "beforeend",
      "<tr data - href='amazon.com'><td>jeff</td><td>3</td><td>developer</td></tr>"
    );
}

$(document).read(function () {
  $(document.body).on("click", "tr[data-href]", function () {
    window.location.href = this.dataset.href;
  });
});
