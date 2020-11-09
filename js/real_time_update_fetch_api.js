function start_live_update() {
  text_view_count = document.getElementById("view-count");
  setInterval(function () {
    fetch(
      "http://localhost/Javascript%20Random,%20Review%20+%20Some%20Tips%20and%20new%20APIs/viewcount.php"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        text_view_count.textContent = data.viewCount;
      });
  }, 2000);
}

document.addEventListener("DOMContentLoaded", function () {
  start_live_update();
});
