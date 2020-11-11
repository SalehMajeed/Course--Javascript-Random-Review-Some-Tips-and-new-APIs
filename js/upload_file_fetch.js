const my_form = document.getElementById("upload-form");
const inpFile = document.getElementById("inpFile");

my_form.addEventListener("submit", (e) => {
  e.preventDefault();

  const endpoint =
    "http://localhost/Javascript%20Random,%20Review%20+%20Some%20Tips%20and%20new%20APIs/upload.php";
  const form_data = new FormData();

  form_data.append("inpFile", inpFile.files[0]);

  fetch(endpoint, {
    method: "post",
    body: form_data,
  }).catch((err) => console.log(err));
});
