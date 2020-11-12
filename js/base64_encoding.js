// const str = "dcode";
// const base64 = btoa(str);
// const decoded = atob(base64);

// console.log(str, base64, decoded);

const btn_upload = document.getElementById("btn-upload");
const my_canvas = document.getElementById("my-canvas");
const ctx = my_canvas.getContext("2d");

ctx.fillStyle = "#ccc";
ctx.rect(0, 0, my_canvas.width, my_canvas.height);
ctx.fill();

ctx.fillStyle = "blue";
ctx.font = "35px serif";
ctx.fillText("dcode base 64", 30, 60);

btn_upload.addEventListener("click", upload_canvas_image);

function upload_canvas_image() {
  const base64 = my_canvas.toDataURL().split(",")[1];
  const body = {
    generated_at: new Date().toISOString(),
    png: base64,
  };

  fetch(
    "http://127.0.0.1:5500/Javascript%20Random,%20Review%20+%20Some%20Tips%20and%20new%20APIs/upload.php",
    {
      method: "post",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}
