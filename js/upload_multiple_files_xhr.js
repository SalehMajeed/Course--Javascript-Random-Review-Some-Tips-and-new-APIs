const inpFile = document.getElementById("inpFile");
const btn_upload = document.getElementById("btn-upload");

btn_upload.addEventListener("click", function (e) {
  e.preventDefault();
  const xhr = new XMLHttpRequest();
  const form_data = new FormData();

  for (const file of inpFile.files) {
    form_data.append("myFiles[]", file);
  }

  xhr.open(
    "post",
    "http://localhost/Javascript%20Random,%20Review%20+%20Some%20Tips%20and%20new%20APIs/upload.php"
  );
  xhr.send(form_data);
});
