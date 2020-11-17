const match_result = window.matchMedia("(max-width:767px)");

function is_small_screen() {
  return window.matchMedia("(max-width:767px)").matches;
}

console.log(is_small_screen());
