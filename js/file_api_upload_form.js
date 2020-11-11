const inpFile = document.getElementById("inpFile");

inpFile.addEventListener("change", function () {
  for (const file of inpFile.files) {
    if (file.size > 300000) {
      alert(`${file.name} is too big! max is 3000`);
    }
  }
});
