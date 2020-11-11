const upload_form = document.getElementById("upload-form");
const inpFile = document.getElementById("inpFile");
const progress_bar_fill = document.querySelector(
  "#progressbar > .progress-bar-fill"
);
const progress_bar_text = progress_bar_fill.querySelector(".progress-bar-text");

upload_form.addEventListener("submit", upload_file);

function upload_file(e) {
  e.preventDefault();

  const xhr = new XMLHttpRequest();
  xhr.open(
    "post",
    "http://localhost/Javascript%20Random,%20Review%20+%20Some%20Tips%20and%20new%20APIs/upload.php"
  );
  xhr.upload.addEventListener("progress", function (e) {
    const percent = e.lengthComputable ? (e.loaded / e.total) * 100 : 0;
    progress_bar_fill.style.width = percent.toFixed(2) + "%";
    progress_bar_text.textContent = percent.toFixed(2) + "%";
  });
  xhr.setRequestHeader("Content-Type", "multipart/form-data");
  xhr.send(new FormData(upload_form));
}
