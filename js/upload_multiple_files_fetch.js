const inpFile = document.getElementById("inpFile");
const btn_upload = document.getElementById("btn-upload");

btn_upload.addEventListener("click", function (e) {
  e.preventDefault();
  const form_data = new FormData();

  for (const file of inpFile.files) {
    form_data.append("myFiles[]", file);
  }

  fetch(
    "http://localhost/Javascript%20Random,%20Review%20+%20Some%20Tips%20and%20new%20APIs/upload.php",
    {
      method: "post",
      body: form_data,
    }
  ).catch((err) => console.log(err));
});
