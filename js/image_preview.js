const inp_file = document.getElementById("inpFile");
const preview_container = document.getElementById("imagePreview");
const preview_image = preview_container.querySelector(".image-preview__image");
const preview_default_text = preview_container.querySelector(
  ".image-preview__default-text"
);

inp_file.addEventListener("change", function () {
  const file = this.files[0];

  if (file) {
    const reader = new FileReader();

    preview_default_text.style.display = "none";
    preview_image.style.display = "block";

    reader.addEventListener("load", function () {
      preview_image.setAttribute("src", this.result);
    });

    reader.readAsDataURL(file);
  } else {
    preview_default_text.style.display = null;
    preview_image.style.display = null;
    preview_image.setAttribute("src", "");
  }
});
