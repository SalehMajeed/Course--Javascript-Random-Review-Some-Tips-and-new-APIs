const rename_file = document.getElementById("rename-file");

rename_file.addEventListener("focus", function () {
  this.setSelectionRange(0, this.value.lastIndexOf("."));
});
