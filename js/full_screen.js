// function get_full_screen_element() {
//   return (
//     document.fullscreenElement ||
//     document.webkitFullscreenElement ||
//     document.mozFullscreenElement ||
//     document.msFullscreenElement
//   );
// }

// function toggle_full_screen() {
//   if (get_full_screen_element()) {
//     document.exitFullscreen();
//   } else {
//     document.documentElement.requestFullscreen().catch(console.log);
//   }
// }

// document.addEventListener("dblclick", () => {
//   toggle_full_screen();
// });

// document.addEventListener("fullscreenchange", () => {
//   console.log("Full Screen Changed");
// });
document.getElementById("my-box").addEventListener("dblclick", () => {
  document
    .getElementById("my-box")
    .requestFullscreen()
    .then(() => {})
    .catch((err) => console.log(err));
});
