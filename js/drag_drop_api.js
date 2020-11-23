const draggable_element = document.getElementById("my-draggable-element");

draggable_element.addEventListener("dragstart", function (e) {
  e.dataTransfer.setData("text/plain", draggable_element.id);
});

for (const drop_zone of document.querySelectorAll(".drop-zone")) {
  drop_zone.addEventListener("dragover", function (e) {
    e.preventDefault();

    drop_zone.classList.add("drop-zone--over");
  });

  drop_zone.addEventListener("dragleave", function (e) {
    drop_zone.classList.remove("drop-zone--over");
  });

  drop_zone.addEventListener("drop", function (e) {
    e.preventDefault();

    document.getElementById("my-file-input").files = e.dataTransfer.files;

    const dropped_element_id = e.dataTransfer.getData("text/plain");
    const dropped_element = document.getElementById(dropped_element_id);

    drop_zone.append(dropped_element);
    drop_zone.classList.remove("drop-zone--over");
  });
}
